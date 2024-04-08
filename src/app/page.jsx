/** Next/React **/

/** NPM **/

/** Project Imports **/
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.frontPageMain}>
      <section className={styles.hero}>
        <p>Velkommen på</p>
        <h1>Adamsgården</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi. Consequuntur repudiandae quaerat sint sapiente ipsa consequatur commodi dolores laboriosam sequi ea quis sunt maxime voluptas, delectus cumque necessitatibus quos sit impedit? Porro adipisci optio labore sunt dicta natus dolor facilis nisi odit sed at debitis doloribus, hic deleniti dolores.</p>
        <img className={styles.heroBackground} src="pics/gaard.jpg" alt="gaard" />
      </section>
      <section className={styles.placeholderSection}></section>
    </main>
  );
}
