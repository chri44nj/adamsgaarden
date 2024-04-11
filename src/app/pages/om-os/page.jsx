import "../../globals.css";
import styles from "./Aboutus.module.css";

export default function Aboutus() {
  return (
    <main className={styles.aboutusMain}>
      <section className={styles.hero}>
        <h1>Om os</h1>
        {/* <p>Adamsgården har været i slægten i over 100 år og drives til daglig af Charlotte og Frank, samt Charlottes børn Christoffer og Katrine, når vi har fint besøg. Hos Adamsgården går familie, passion og dedikation hånd i hånd, og det afspejles i den altid høje kvalitet af vores produkter.</p> */}
        <img className={styles.heroBackground} src="/pics/aboutus.jpg" alt="charlotte-and-frank" />
      </section>
      <section className={styles.shop}></section>
    </main>
  );
}
