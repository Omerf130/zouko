import Link from "next/link";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link href="/">MyStaticSite</Link>
        </div>
        <nav className="navbar-links">
          <Link className="navbar-link" href="/">
            Home
          </Link>
          <Link className="navbar-link" href="/about">
            About
          </Link>
          <Link className="navbar-link" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}