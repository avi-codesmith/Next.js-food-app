import Link from "next/link";

export const metadata = {
  title: "NextLevel Food| 404 not found",
  description: "Browse the various meals by our great users",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found!</h1>
      <p>This page isn&apos;t even exist, Go to home page.</p>
      <p>
        <Link href="/">Home page</Link>
      </p>
    </main>
  );
}
