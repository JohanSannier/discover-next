import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/portfolio">Le portfolio</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="/apipage">API</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
