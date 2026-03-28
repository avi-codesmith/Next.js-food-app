"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./main-header.module.css";
import { Children } from "react";

export default function Navlink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={`/${href}`}
      className={path.startsWith(`/${href}`) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
