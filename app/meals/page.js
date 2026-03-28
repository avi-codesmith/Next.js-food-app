import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>This is a meals Page</h1>
      <p>
        <Link href="meals/pasta">Pasta</Link>
      </p>
      <p>
        <Link href="meals/curry">Curry</Link>
      </p>
      <p>
        <Link href="/">Back</Link>
      </p>
    </>
  );
}
