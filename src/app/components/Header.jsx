"use client";

/** Next/React **/
import { useEffect, useState } from "react";
import Link from "next/link";

/** NPM **/

/** Project Imports **/
import styles from "../styles/Header.module.css";

function Header() {
  /* States */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Effects */

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      const scrollThreshold = 100;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > scrollThreshold) {
        header.style.backgroundColor = "var(--accent-yellow)";
      } else {
        header.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Functions */
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  /* Other */

  return (
    <header className={styles.header}>
      <Link href="/" onClick={handleCloseMenu}>
        <img className={styles.logo} src="/pics/logo-transparent.png" alt="logo" />
      </Link>
      <nav className={`${styles.headerNavigation} ${menuOpen ? styles.open : ""}`}>
        <Link href="/pages/shop" onClick={handleCloseMenu}>
          Gårdbutik
        </Link>
        <Link href="/pages/aboutus" onClick={handleCloseMenu}>
          Om os
        </Link>
      </nav>
      <button type="button" className={styles.burgerMenu} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
