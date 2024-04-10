"use client";

/** Next/React **/
import { useEffect, useState, useContext } from "react";
import Link from "next/link";

/** NPM **/

/** Project Imports **/
import styles from "../styles/Header.module.css";
import { MyContexts, SetMyContexts } from "./Contexts";

function Header() {
  /* Contexts */
  const myContexts = useContext(MyContexts);
  const myContextsDispatch = useContext(SetMyContexts);

  /* States */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Effects */

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      const scrollThreshold = 100;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > scrollThreshold) {
        header.style.backgroundColor = "var(--accent-green)";
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

  const handleCloseMenu = (page) => {
    setMenuOpen(false);
    myContextsDispatch((old) => ({
      ...old,
      currentPage: page,
    }));
  };

  /* Other */

  return (
    <header className={styles.header}>
      <Link href="/" onClick={() => handleCloseMenu("forside")}>
        <img className={styles.logo} src="/pics/logo-transparent.png" alt="logo" />
      </Link>
      <nav className={`${styles.headerNavigation} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={() => handleCloseMenu("forside")} id={myContexts.currentPage === "forside" ? styles.activeLink : ""}>
          Forside
        </Link>
        <Link href="/pages/gaardbutik" onClick={() => handleCloseMenu("gaardbutik")} id={myContexts.currentPage === "gaardbutik" ? styles.activeLink : ""}>
          Gårdbutik
        </Link>
        <Link href="/pages/om-os" onClick={() => handleCloseMenu("om-os")} id={myContexts.currentPage === "om-os" ? styles.activeLink : ""}>
          Om os
        </Link>
      </nav>
      <button type="button" aria-label="burger-menu" className={styles.burgerMenu} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
