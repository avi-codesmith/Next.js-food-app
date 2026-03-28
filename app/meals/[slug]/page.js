import Link from "next/link";

export default function DifferentMeals({ params }) {
  return (
    <>
      <h1>meals: {params.slug}</h1>
      <p>
        <Link href="/meals">Back</Link>
      </p>
    </>
  );
}
