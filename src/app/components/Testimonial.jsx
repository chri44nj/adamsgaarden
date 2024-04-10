import React from "react";
import styles from "../styles/Testimonial.module.css";

function Testimonial({ review, stars, name, platform }) {
  const amountOfStars = Number(stars);

  // Function to render stars based on the amountOfStars prop
  const renderStars = () => {
    const fullStars = Math.floor(amountOfStars);
    const hasHalfStar = amountOfStars - fullStars >= 0.5;

    const starElements = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffbb33" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      );
    }

    // Render half star if applicable
    if (hasHalfStar) {
      starElements.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffbb33" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
        </svg>
      );
    }

    return starElements;
  };

  return (
    <article className={styles.slide}>
      {review && (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#130303" className="bi bi-chat-square-quote-fill" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
        </svg>
      )}
      <p>{review}</p>
      <div className="flex-row">{renderStars()}</div>
      <div className={styles.breakLine}></div>
      <div>
        <h3>{name}</h3>
        <p className={styles.testimonialOrigin}>{platform} anmeldelser</p>
      </div>
    </article>
  );
}

export default Testimonial;
