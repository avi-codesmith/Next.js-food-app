import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not found!</h1>
      <p>This meal page isn't even exist, Explore other meals.</p>
      <p>
        <Link href="/meals">Explore other meals</Link>
      </p>
    </main>
  );
}
