/** Next/React **/

/** NPM **/

/** Project Imports **/
import "./globals.css";
import styles from "./page.module.css";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className={styles.frontPageMain}>
      <section className={styles.hero}>
        <p>Velkommen til</p>
        <h1>Adamsgården</h1>
        <p>Besøg os og oplev foreningen af landbrugets charme og naturens skønhed, i den idylliske udkant af Jyderup.</p>
        <img className={styles.heroBackground} src="/pics/gaard.jpg" alt="gaard" />
      </section>
      <section className={styles.testimonals}>
        <h2>Hvad vores gæster siger om os</h2>
        <Testimonial></Testimonial>
        <div className="flex-row">
          <div className={styles.leftButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </div>
          <div className={styles.rightButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
