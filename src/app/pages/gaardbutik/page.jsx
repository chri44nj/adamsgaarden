"use client";
/** Next/React **/

/** NPM **/

/** Project Imports **/
import "../../globals.css";
import styles from "./Shop.module.css";
import AreWeOpen from "../../components/AreWeOpen";

export default function Shop() {
  return (
    <main className={styles.shopMain}>
      <section className={styles.hero}>
        <h1>Gårdbutikken</h1>
        <AreWeOpen />

        {/* <p>Hylderne er fyldte med nøje udvalgt frugt og grønt, fra eget land og omegn. Ydermere tilbyder vi det bedste indenfor olie, vin og honning, og vores glade hunde og katte byder dig altid velkommen med logrende haler og spinden. </p> */}
        <img className={styles.heroBackground} src="/pics/shop.webp" alt="shop" />
      </section>

      <div className={styles.introduction}>
        <p>Charlotte og Frank bor på Adamsgården i Jyderup. Her har der været gårdbutik siden 2012, og lige fra start har det været et familieprojekt, hvor børnene Katrine og Christoffer har deltaget i udviklingen og arbejdet.</p>
        <p>For os er det vigtigt, at kvaliteten af ikke mindst produkterne, men også oplevelsen af besøget er i top, hvorfor kunderne altid kommer først - så træd indenfor og tag et kig!</p>
      </div>

      <div className={styles.shopWrapper}>
        <section className={styles.shop}>
          <article className={`${styles.shopText} ${styles.st1}`}>
            <h2>Solmodne, danske jordbær</h2>
            <ul className={styles.detailsList}>
              <li>Danske jordbær, der smager af sol og sommer.</li>
              <li>Jordbærsorterne varierer fra tidlige til sene sorter med lidt forskellig smag og udseende. Der vil også være jordbær fra remonterende sorter, der bliver ved med at blomstre og giver bær hele sommeren. Disse bær er meget holdbare, og er velegnet til pynt og kager.</li>
            </ul>
          </article>

          <img className={`${styles.shopImage} ${styles.st1}`} src="/pics/jordbær.webp" alt="" />

          <article className={`${styles.shopText} ${styles.st2}`}>
            <h2>Danske, friske grøntsager</h2>
            <ul className={styles.detailsList}>
              <li>Nyopgravede kartofler.</li>
              <li>Saftige hvide og grønne asparges.</li>
              <li>Søde og sprøde grønne ærter.</li>
              <li>Syrlige rabarber.</li>
              <li>Sunde grønkål.</li>
              <li>Gule og grønne squash.</li>
              <li>Persille og basilikum i potter.</li>
            </ul>
            <p>Vores udvalg varierer altid med sæsonen.</p>
          </article>
          <div className={styles.si2}>
            <img className={styles.shopImage} src="/pics/kartofler.webp" alt="" />
            <img className={styles.shopImage} src="/pics/asparges-gron.webp" alt="" />
            <img className={styles.shopImage} src="/pics/ærter.webp" alt="" />
            <img className={styles.shopImage} src="/pics/asparges-hvid.webp" alt="" />
          </div>

          <article className={`${styles.shopText} ${styles.st3}`}>
            <h2>Gourmet Olivenolie</h2>
            <p> Dorte og Karsten Larsen stammer begge fra Vestsjælland, og driver sammen med deres børn et større landbrug med en stor olivenproduktion ved Beja i det sydlige Portugal.</p>
            <p>Familien Larsen har skabt et unikt produkt - K. Larsen Gourmet Ekstra Jomfru Olivenolie:</p>
            <ul className={styles.detailsList}>
              <li>100% koldpresset olivensaft.</li>
              <li>Gourmet betyder at syreindholdet er max 0,3 % og derfor er kvaliteten helt i top.</li>
              <li>Velegnet til alle former for madlavning.</li>
              <li>Mild, rund og blød smag.</li>
            </ul>
          </article>
          <img className={`${styles.shopImage} ${styles.si3}`} src="/pics/olie.webp" alt="" />

          <article className={`${styles.shopText} ${styles.st4}`}>
            <h2>Vin, specialøl & Spiritus</h2>
            <p>Fra håndlavet specialøl på Vestsjælland til vinområdet Alentejo i det sydlige Portugal, har vi på første hånd oplevet vores leverandørers passion for deres håndværk. I gårdbutikken har vi samlet vores yndlingsoplevelser på flaske, altid baseret på de samme kriterier: god smag og en sand bedst-til-prisen-kvalitet.</p>
            <ul className={styles.detailsList}>
              <li>Mere end 12 forskellige fantastiske, portugisiske vine.</li>
              <li>Lokalt og håndbrygget specialøl fra Den gamle Brygger i Bjergsted.</li>
              <li>Stort udvalg af forskellig spiritus og cocktails fra Sams Island og Noormann.</li>
            </ul>
          </article>
          <img className={`${styles.shopImage} ${styles.si4}`} src="/pics/vin.webp" alt="" />
          <article className={`${styles.shopText} ${styles.st5}`}>
            <h2>Specialiteter</h2>
            <p>Vores store udvalg af specialiteter inkludrerer blandt andet:</p>
            <ul className={styles.detailsList}>
              <li>Honningprodukter fra Bihuset.</li>
              <li>Most fra Østergaard Frugtplantage.</li>
              <li>Eddike og salatsirupper fra Samsø Madsnedkeri.</li>
              <li>Te og kaffe fra Te og Kaffe Specialisten.</li>
              <li>Iskaffer og karamelsirup fra Noormann.</li>
              <li>Jomfruhummersuppe, kantarelsuppe og jordskokkesuppe fra Noormann.</li>
            </ul>
            <p>Alle specialiteter er nøje udvalgt. Vi har kun det, der passer ind i vores koncept, og selv ville blive glade for at få i gave.</p>
          </article>
          <img className={`${styles.shopImage} ${styles.si5}`} src="/pics/delikatesser.webp" alt="" />
          <article className={`${styles.shopText} ${styles.st6}`}>
            <h2>Gavekurve</h2>
            <ul className={styles.detailsList}>
              <li>Gavekurve til enhver anledning (også firmagaver). Sammensæt selv en helt unik gavekurv fra vores store udvalg af specialiteter.</li>
            </ul>
            <p>Bestil gerne på forhånd - så har vi det klar, når du kommer!</p>
          </article>
          <img className={`${styles.shopImage} ${styles.si6}`} src="/pics/gavekurv.webp" alt="" />
          <article className={`${styles.shopText} ${styles.st7}`}>
            <h2>Grønne fingre</h2>
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
          <img className={`${styles.shopImage} ${styles.si7}`} src="/pics/have.webp" alt="" />
        </section>
      </div>
    </main>
  );
}
