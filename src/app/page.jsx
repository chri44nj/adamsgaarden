"use client";
/** Next/React **/
import { useState, useEffect } from "react";
/** NPM **/

/** Project Imports **/
import "./globals.css";
import styles from "./page.module.css";
import Testimonial from "./components/Testimonial";

export default function Home() {
  /* States */
  const [testimonialNumber, setTestimonialNumber] = useState(1);

  /* Effects */
  useEffect(() => {
    // Load Facebook SDK dynamically on the client side
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v19.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  /* Functions */
  const handleTestimonialClick = (direction) => {
    if (direction === "previous") {
      if (testimonialNumber === 1) {
        setTestimonialNumber(testimonials.length);
      } else {
        setTestimonialNumber((old) => old - 1);
      }
    } else {
      if (testimonialNumber === testimonials.length) {
        setTestimonialNumber(1);
      } else {
        setTestimonialNumber((old) => old + 1);
      }
    }
  };

  /* Other */
  const testimonials = [
    { review: "Gode produkter 😍 Fine priser, søde mennesker 😀", stars: "5", name: "Louise", platform: "Google" },
    { review: "Et godt sted at handle.", stars: "5", name: "Tommy", platform: "Google" },
    { review: "Super hyggelig stemning - og skønt udvalg af lækre ting til ganen....advarsel - honningbolcherne kræver påfyldning når sluppet ...de er meget svære at undvære....", stars: "5", name: "Tanja", platform: "Facebook" },
    { review: "Det er et dejligt sted at handle og de er så venlige altid og varerne er i top kvalitet.", stars: "5", name: "Rie", platform: "Google" },
    { review: "Prima service altid tid til en sludder.", stars: "4", name: "Gitte", platform: "Google" },
    { review: "Nemt, hurtigt og en anstændig pris for landbrugsprodukter!", stars: "5", name: "Rebecca", platform: "Google" },
    { review: "Virkelig gode varer og venlig betjening. Kan anbefales.", stars: "5", name: "Randi", platform: "Google" },
    { review: "De lækreste sager til mave og krop 🤗", stars: "5", name: "Kicki", platform: "Facebook" },
    { review: "Lækre jordbær og nye kartofler. Gode parkeringsforhold.", stars: "5", name: "Irene", platform: "Google" },
    { review: "Det var en dejlig oplevelse i dejlige omgivelser deres gårdbutik så indbydende ud  både Charlotte og Frank udstrålede en glæde over det de havde nået med deres lille Gårdbutik kan varmt anbefale andre et besøg 😊😊😊", stars: "5", name: "Inga", platform: "Facebook" },
  ];

  return (
    <main className={styles.frontPageMain}>
      <section className={styles.hero}>
        <p>Velkommen til</p>
        <h1>Adamsgården</h1>
        {/*  <p>Besøg os og oplev foreningen af landbrugets charme og naturens skønhed, i den idylliske udkant af Jyderup. Kommer du for at forkæle en af dine kære, dig selv eller begge? Uanset hvad, har vi det rette for netop dine behov, på Adamsgården.</p> */}
        <img className={styles.heroBackground} src="/pics/gaard.jpg" alt="gaard" />
      </section>
      <div className={styles.background}>
        <div className={styles.address}>
          <a className="flex-row" target="_blank" href="https://www.google.com/maps/place/Adamsg%C3%A5rden/@55.6670873,11.4236887,17z/data=!3m1!4b1!4m6!3m5!1s0x464d7f56a3e17ee9:0x27fca4969a8336a9!8m2!3d55.6670873!4d11.4236887!16s%2Fg%2F11xphfdm7?entry=ttu">
            <div className={styles.hideMobile}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div className={styles.hideWeb}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            Aggersvoldvej 3a, 4450 Jyderup
          </a>
        </div>
        <section className={styles.familyWords}>
          <article>
            <h2>Familie</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt id suscipit accusantium deleniti unde quod aut magnam explicabo natus.</p>
          </article>
          <article>
            <h2>Passion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt id suscipit accusantium deleniti unde quod aut magnam explicabo natus.</p>
          </article>
          <article>
            <h2>Dedikation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt id suscipit accusantium deleniti unde quod aut magnam explicabo natus.</p>
          </article>
        </section>
        <div className={styles.breakLine}>
          <div></div>
        </div>
        <section className={styles.testimonals}>
          <h2>Hvad siger vores gæster?</h2>
          {testimonials.map((testimonial, index) => testimonialNumber === index + 1 && <Testimonial key={index + 1} review={testimonial.review} stars={testimonial.stars} name={testimonial.name} platform={testimonial.platform}></Testimonial>)}
          <div className="flex-column">
            <p>
              {testimonialNumber} / {testimonials.length}
            </p>
            <div className="flex-row">
              <div className={styles.leftButton} onClick={() => handleTestimonialClick("previous")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#130303" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              </div>
              <div className={styles.rightButton} onClick={() => handleTestimonialClick("next")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#130303" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.breakLine}>
          <div></div>
        </div>
        <section className={styles.facebook}>
          <h2>Følg os på Facebook</h2>
          <div class="fb-page" data-href="https://www.facebook.com/adamsgaarden" data-width="300" data-height="500" data-tabs="timeline" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/adamsgaarden" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/adamsgaarden">Adamsgården</a>
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}
