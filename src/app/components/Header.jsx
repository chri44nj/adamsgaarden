/** Next/React **/

/** NPM **/

/** Project Imports **/
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logo} src="pics/logo.png" alt="logo" />
      </a>
      <nav className={styles.headerNavigation}>
        <a href="#">Linkus</a>
        <a href="#">Linkus</a>
        <a href="#">Linkus</a>
        <a href="#">Linkus</a>
        <a href="#">Linkus</a>
      </nav>
      <button type="button" className={styles.burgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
