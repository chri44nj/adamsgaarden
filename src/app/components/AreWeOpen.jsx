import { useState, useEffect } from "react";
import styles from "../styles/AreWeOpen.module.css";

function AreWeOpen({ openContent, closedContent }) {
  /* States */
  const [open, setOpen] = useState(false);

  /* Effects */
  useEffect(() => {
    areWeOpen();
  }, []);

  /* Functions */
  function areWeOpen() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const hours = today.getHours();
    const month = today.getMonth() + 1; // getMonth() returns 0-indexed months, so add 1

    // Check if the current date falls within the specified timeframes
    const isInOpenPeriod =
      // May 9th to August 3rd
      (month === 5 && today.getDate() >= 9 && today.getDate() <= 31) ||
      (month === 6 && today.getDate() >= 1 && today.getDate() <= 31) ||
      (month === 7 && today.getDate() >= 1 && today.getDate() <= 3) ||
      // November 2nd to December 21st
      (month === 11 && today.getDate() >= 2 && today.getDate() <= 30) ||
      (month === 12 && today.getDate() >= 1 && today.getDate() <= 21);

    // Check if the current time falls within opening hours
    const isOpenNow = (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 15 && hours < 18) || ((dayOfWeek === 6 || dayOfWeek === 0) && hours >= 9 && hours < 18);

    setOpen(isInOpenPeriod && isOpenNow);

    return isInOpenPeriod && isOpenNow;
  }

  return <h3 className={styles.container}>{open ? openContent : closedContent}</h3>;
}

export default AreWeOpen;
