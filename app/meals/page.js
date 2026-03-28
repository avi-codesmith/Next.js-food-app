import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h1>This is a meals section...</h1>
      <p>
        <Link href="meals/share">Share Meals</Link>
      </p>
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
