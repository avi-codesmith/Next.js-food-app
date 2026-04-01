"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export default async function ShareMeal(prev, formData) {
  function checkText(text) {
    const notValid = !text || text.trim() === "";
    return notValid;
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    checkText(meal.title) ||
    checkText(meal.summary) ||
    checkText(meal.instructions) ||
    checkText(meal.creator) ||
    checkText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input!",
      enteredValues: {
        name: meal.creator,
        email: meal.creator_email,
        title: meal.title,
        summary: meal.summary,
        instructions: meal.instructions,
      },
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
