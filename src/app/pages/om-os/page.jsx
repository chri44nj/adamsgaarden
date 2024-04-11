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
      <section className={styles.shop}>
        <article className={`${styles.shopText} ${styles.st1}`}>
          <h2>Charlotte</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si1}`} src="/pics/charlotte.jpg" alt="" />

        <article className={`${styles.shopText} ${styles.st2}`}>
          <h2>Frank</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si2}`} src="/pics/frank.jpg" alt="" />
      </section>
    </main>
  );
}
