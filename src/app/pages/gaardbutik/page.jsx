/** Next/React **/

/** NPM **/

/** Project Imports **/
import "../../globals.css";
import styles from "./Shop.module.css";

export default function Shop() {
  return (
    <main className={styles.shopMain}>
      <section className={styles.hero}>
        <h1>Gårdbutikken</h1>
        <p>Hylderne er fyldte med nøje udvalgt frugt og grønt, fra eget land og omegn. Ydermere tilbyder vi det bedste indenfor olie, vin og honning, og vores glade hunde og katte byder dig altid velkommen med logrende haler og spinden. </p>
        <img className={styles.heroBackground} src="/pics/shop.jpg" alt="shop" />
      </section>
      <section className={styles.shop}>
        <article className={`${styles.shopText} ${styles.st1}`}>
          <h2>Solmodne bær</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si1}`} src="/pics/jordbær.jpg" alt="" />
        <img className={`${styles.shopImage} ${styles.si2}`} src="/pics/ærter.jpg" alt="" />
        <article className={`${styles.shopText} ${styles.st2}`}>
          <h2>Friske grøntsager</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <article className={`${styles.shopText} ${styles.st3}`}>
          <h2>Smagfuld Olivenolie</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si3}`} src="/pics/olie.jpg" alt="" />
        <img className={`${styles.shopImage} ${styles.si4}`} src="/pics/vin.jpg" alt="" />
        <article className={`${styles.shopText} ${styles.st4}`}>
          <h2>Udsøgt Vin & Spiritus</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <article className={`${styles.shopText} ${styles.st5}`}>
          <h2>Lette Løsninger</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si5}`} src="/pics/goodiebox.jpg" alt="" />
      </section>
    </main>
  );
}
