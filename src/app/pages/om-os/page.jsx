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

      <div className={styles.introduction}>
        <p>Vi, Charlotte og Frank, bor på Adamsgården og driver som ægtepar til daglig gårdbutikken og plejer vores omkringliggende land. Siden 2012 har vi været på en rejse for at forbedre vores gårdbutik og vi nyder helhjertet at være en bidragende del af lokalsamfundet.</p>
        <div className={styles.words}>
          <span className={styles.word1}>Familie</span>
          <span className={styles.word2}>Passion</span>
          <span className={styles.word3}>Dedikation</span>
        </div>
        <p>På Adamsgården går familie, passion og dedikation hånd i hånd, hvilket afspejles i den afslappede atmosfære på gården og vores personlige relation til kunderne.</p>
      </div>

      <section className={styles.shop}>
        <article className={`${styles.shopText} ${styles.st1}`}>
          <h2>Charlotte Ibsen</h2>
          <p>Charlotte er uddannet agronom og har arbejdet som landbrugsskolelærer i 25 år. Når hun ikke passer landbrug og gårdbutik, arbejder hun med salg og rådgivning til danske gartnerier. I fritiden slapper hun af i sit sommerhus ved Sejerøbugten, spiller golf, dyrker yoga og nyder at være sammen med familie og venner.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si1}`} src="/pics/charlotte.jpg" alt="" />

        <article className={`${styles.shopText} ${styles.st2}`}>
          <h2>Frank Lyngsø</h2>
          <p>Frank er uddannet ingeniør og er forretningschef i NIRAS tillige med forskellige bestyrelsesposter. Derfor er det det ofte kun i weekenderne, at Frank befinder sig i gårdbutikken, men du kan være sikker på altid at få et stort smil med, når du møder ham.</p>
        </article>
        <img className={`${styles.shopImage} ${styles.si2}`} src="/pics/frank.jpg" alt="" />
      </section>
    </main>
  );
}
