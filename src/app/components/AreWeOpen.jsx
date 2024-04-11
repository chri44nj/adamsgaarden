"use effect";

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

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 15 && hours < 18) {
      setOpen(true);
      return true;
    }

    if ((dayOfWeek === 6 || dayOfWeek === 0) && hours >= 9 && hours < 18) {
      setOpen(true);
      return true;
    }

    setOpen(false);
    return false;
  }

  return <h3 className={styles.container}>{open ? openContent : closedContent}</h3>;
}

export default AreWeOpen;
