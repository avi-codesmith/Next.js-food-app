import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="Logo" priority />
          Next level food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
