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

      <section className={styles.introduction}>
        <div>
          <h2 className={styles.smallHeading}>Hvem er vi?</h2>
          <p>Vi, Charlotte og Frank, bor på Adamsgården og driver som ægtepar til daglig gårdbutikken og dyrker ca. 20 ha. Siden 2012 har vi været på en rejse for at forbedre vores gårdbutik og vi nyder helhjertet at være en bidragende del til lokalsamfundet.</p>
        </div>
        <div className={styles.words}>
          <span className={styles.word1}>Familie</span>
          <span className={styles.word2}>Passion</span>
          <span className={styles.word3}>Dedikation</span>
        </div>
        <p>På Adamsgården går familie, passion og dedikation hånd i hånd, hvilket afspejles i den afslappede atmosfære på gården og vores personlige relation til kunderne.</p>
      </section>

      <section className={styles.us}>
        <article className={`${styles.usText} ${styles.ut1}`}>
          <h2>Charlotte Ibsen</h2>
          <p>Charlotte er uddannet agronom og har arbejdet som landbrugsskolelærer i 25 år. Når hun ikke passer landbrug og gårdbutik, arbejder hun med salg og rådgivning til danske gartnerier. I fritiden slapper hun af i sit sommerhus ved Sejerøbugten, spiller golf, dyrker yoga og nyder at være sammen med familie og venner.</p>
        </article>
        <img className={`${styles.usImage} ${styles.ui1}`} src="/pics/charlotte.jpg" alt="" />

        <article className={`${styles.usText} ${styles.ut2}`}>
          <h2>Frank Lyngsø</h2>
          <p>Frank er uddannet ingeniør og er forretningschef i NIRAS tillige med forskellige bestyrelsesposter. Derfor er det det ofte kun i weekenderne, at Frank befinder sig i gårdbutikken, men du kan være sikker på altid at få et stort smil med, når du møder ham.</p>
        </article>
        <img className={`${styles.usImage} ${styles.ui2}`} src="/pics/frank.jpg" alt="" />
      </section>

      <section className={styles.partnership}>
        <div>
          <h2 className={styles.smallHeading}>Adamsgårdens samarbejdspartnere</h2>
          <p>Vi dyrker en masse bær- og grøntsager lokalt på gården, men vi supplerer med frugt og grønt fra en håndfuld nøje udvalgte lokale producenter. En tak for godt samarbejde lyder til:</p>
        </div>
        <div className={styles.partners}>
          <a className={styles.partner1} target="_blank" href="https://www.facebook.com/Torpelund4/?locale=da_DK">
            Torpelund Gårdbutik
          </a>
          <a className={styles.partner2} target="_blank" href="https://gasaodense.dk/producenter/frugtplantagen-dk/">
            Frugtplantagen Danmark
          </a>
          <a className={styles.partner3} target="_blank" href="https://www.facebook.com/p/Vibesand-Gr%C3%B8nsager-100057089304849/?paipv=0&eav=AfbtgkbKPEadRs_kTn5Pw8qirFJcUELf7A4dy87yhI7FCGEjZkD6WZymTTmffRDFiw0&_rdr">
            Vibesand Grønsager
          </a>
        </div>
      </section>

      <div className={styles.breakLine}>
        <div></div>
      </div>

      <section className={styles.contact}>
        <div>
          <h2 className={styles.smallHeading}>Vil du i kontakt med os?</h2>
          <p>Vi er altid klar på feedback og åbne for gode forslag. Ræk ud til os, så skal vi vende tilbage med svar, så hurtigt vi kan.</p>
        </div>
        <div className={styles.flexRow}>
          <div className="flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3388cc" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <a href="tel:+4522264550">22 26 45 50</a>
          </div>
          <a className={`${styles.link} flex-row`} target="_blank" href="mailto:mail@adamsgaarden.dk">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3388cc" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
            mail@adamsgaarden.dk
          </a>
          <a className={`${styles.link} flex-row`} target="_blank" href="https://www.facebook.com/adamsgaarden">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3388cc" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            adamsgaarden
          </a>
        </div>
      </section>

      <section className={styles.openingHours}>
        <h2 className={styles.smallHeading}>Gårdbutikkens åbningstider varierer med årstiderne</h2>
        <div className={styles.openingHoursGrid}>
          <article>
            <h3 className={styles.smallHeading}>Sommer</h3>
            <p className={styles.period}>1. juni - 31. august</p>
            <div className="flex-row">
              <div className={styles.flexColumn}>
                <p>Mandag:</p>
                <p>Tirsdag:</p>
                <p>Onsdag:</p>
                <p>Torsdag:</p>
                <p>Fredag:</p>
                <p>Lørdag:</p>
                <p>Søndag:</p>
              </div>
              <div className={styles.flexColumn}>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>09:00 - 18:00</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </article>
          <article>
            <h3 className={styles.smallHeading}>Vinter</h3>
            <p className={styles.period}>1. september - 31. maj</p>
            <div className="flex-row">
              <div className={styles.flexColumn}>
                <p>Mandag:</p>
                <p>Tirsdag:</p>
                <p>Onsdag:</p>
                <p>Torsdag:</p>
                <p>Fredag:</p>
                <p>Lørdag:</p>
                <p>Søndag:</p>
              </div>
              <div className={styles.flexColumn}>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>15:30 - 18:00</p>
                <p>09:00 - 18:00</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
