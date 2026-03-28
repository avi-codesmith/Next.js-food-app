import Link from "next/link";

export default async function DifferentMeals({ params }) {
  const mealParams = await params;
  return (
    <>
      <h1>meals: {mealParams.slug}</h1>
      <p>
        <Link href="/meals">Back</Link>
      </p>
    </>
  );
}
