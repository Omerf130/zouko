import Link from "next/link";
import { CONSTS } from "../../_consts/consts";
import { FaHome } from "react-icons/fa";
import classes from "./Navbar.module.scss";
import Image from "next/image";

export function Navbar() {
  const {LEARN, PRODUCTIONS, OTHER_STYLES, ABOUT} = CONSTS.NAV;

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
        <nav className={classes.navbarLinks}>
          <Link className={classes.navbarLink} href="/learn">
            {LEARN}
          </Link>
          <Link className={classes.navbarLink} href="/production">
            {PRODUCTIONS}
          </Link>
          <Link className={classes.navbarLink} href="/otherStyless">
            {OTHER_STYLES}
          </Link>
          <Link className={classes.navbarLink} href="/about">
            {ABOUT}
          </Link>
          <Link className={classes.navbarLink} href="/">
            <FaHome/>
          </Link>
        </nav>
      </div>
    </header>
  );
}