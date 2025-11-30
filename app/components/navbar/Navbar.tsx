"use client";

import Link from "next/link";
import { CONSTS } from "../../_consts/consts";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import classes from "./Navbar.module.scss";
import Image from "next/image";

export function Navbar() {
  const { LEARN, PRODUCTIONS, OTHER_STYLES, ABOUT } = CONSTS.NAV;

  const [open, setOpen] = useState(false);

  return (
    <header className={classes.navbar}>
      <div className={classes.navbarInner}>
        <div className={classes.navbarLogo}>
          <Link href="/">
            <Image
              className={classes.logo}
              src="/logo/logo1.png"
              alt="Logo"
              width={70}
              height={70}
              unoptimized
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={classes.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={open ? classes.open : ""}></span>
          <span className={open ? classes.open : ""}></span>
          <span className={open ? classes.open : ""}></span>
        </button>

        {/* Desktop Nav */}
        <nav className={classes.navbarLinks}>
          <Link className={classes.navbarLink} href="/learn">{LEARN}</Link>
          <Link className={classes.navbarLink} href="/production">{PRODUCTIONS}</Link>
          <Link className={classes.navbarLink} href="/otherStyless">{OTHER_STYLES}</Link>
          <Link className={classes.navbarLink} href="/about">{ABOUT}</Link>
          <Link className={classes.navbarLink} href="/"><FaHome size={30} /></Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className={classes.mobileMenu}>
          <Link href="/learn" onClick={() => setOpen(false)}>{LEARN}</Link>
          <Link href="/production" onClick={() => setOpen(false)}>{PRODUCTIONS}</Link>
          <Link href="/otherStyless" onClick={() => setOpen(false)}>{OTHER_STYLES}</Link>
          <Link href="/about" onClick={() => setOpen(false)}>{ABOUT}</Link>
          <Link href="/" onClick={() => setOpen(false)}><FaHome /></Link>
        </nav>
      )}
    </header>
  );
}
