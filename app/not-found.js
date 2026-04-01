import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found!</h1>
      <p>This page isn't even exist, Go to home page.</p>
      <p>
        <Link href="/">Home page</Link>
      </p>
    </main>
  );
}
