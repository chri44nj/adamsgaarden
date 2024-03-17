/** Next/React **/

/** NPM **/

/** Project Imports **/
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Hej med dig din steg</p>
      <img className={styles.footerBackgroundImage} src="pics/droneshot.png" alt="droneshot" />
    </footer>
  );
}

export default Footer;
