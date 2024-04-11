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
        {/* <p>Hylderne er fyldte med nøje udvalgt frugt og grønt, fra eget land og omegn. Ydermere tilbyder vi det bedste indenfor olie, vin og honning, og vores glade hunde og katte byder dig altid velkommen med logrende haler og spinden. </p> */}
        <img className={styles.heroBackground} src="/pics/shop.webp" alt="shop" />
      </section>

      <section className={styles.shop}>
        <article className={`${styles.shopText} ${styles.st1}`}>
          <h2>Solmodne bær</h2>
          <ul className={styles.detailsList}>
            <li>Danske jordbær, der smager af sol og sommer.</li>
            <li>Søde kirsebær plukket i Adamsgårdens frugthave.</li>
          </ul>
        </article>

        <img className={`${styles.shopImage} ${styles.st1}`} src="/pics/jordbær.jpg" alt="" />

        <article className={`${styles.shopText} ${styles.st2}`}>
          <h2>Friske grøntsager</h2>
          <ul className={styles.detailsList}>
            <li>Nyopgravede kartofler.</li>
            <li>Saftige hvide og grønne asparges.</li>
            <li>Søde og sprøde grønne ærter (børn spiser dem, som var de slik).</li>
          </ul>
        </article>
        <div className={styles.si2}>
          <img className={styles.shopImage} src="/pics/kartofler.jpg" alt="" />
          <img className={styles.shopImage} src="/pics/asparges-gron.jpg" alt="" />
          <img className={styles.shopImage} src="/pics/ærter.webp" alt="" />
          <img className={styles.shopImage} src="/pics/asparges-hvid.jpg" alt="" />
        </div>

        <article className={`${styles.shopText} ${styles.st3}`}>
          <h2>Smagfuld Olivenolie</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si3}`} src="/pics/olie.webp" alt="" />

        <article className={`${styles.shopText} ${styles.st4}`}>
          <h2>Vin, specialøl & Spiritus</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si4}`} src="/pics/vin.webp" alt="" />
        <article className={`${styles.shopText} ${styles.st5}`}>
          <h2>Lette Løsninger</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si5}`} src="/pics/goodiebox.webp" alt="" />
        <article className={`${styles.shopText} ${styles.st6}`}>
          <h2>Delikatesser</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis cumque beatae velit ea iusto totam in at! Sequi rerum ab quaerat ad minima delectus, possimus consequatur atque consequuntur, repellat iste vitae harum ipsam itaque perferendis expedita placeat blanditiis dolorem.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si6}`} src="/pics/delikatesser.jpg" alt="" />
        <article className={`${styles.shopText} ${styles.st7}`}>
          <h2>Grønne Fingre</h2>
          <p>Vi udvider løbende vores haveafdeling med mange forskellige haveartikler, såsom:</p>
          <ul className={styles.detailsList}>
            <li>Potte- og kokusmuld.</li>
            <li>Så- og priklejord.</li>
            <li>Have- og arbejdshandsker og beskæresakse.</li>
            <li>Kartoffelpotter, plantetønder og fuglehuse.</li>
            <li>Nematoder til biologisk bekæmpelse af skadedyr.</li>
          </ul>
          <p>Og meget mere; vi kan skaffe nærmest alt til din have, så spørg endelig!</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si7}`} src="/pics/have.jpg" alt="" />
      </section>
    </main>
  );
}
