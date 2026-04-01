import fs from "node:fs";
import path from "node:path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").at(-1);
  const fileName = `${meal.slug}.${extension}`;

  const dir = path.join("public", "images");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, fileName);

  const bufferedImage = await meal.image.arrayBuffer();

  await new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath);
    stream.on("error", reject);
    stream.on("finish", resolve);
    stream.write(Buffer.from(bufferedImage));
    stream.end();
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
}
