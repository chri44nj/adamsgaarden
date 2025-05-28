import { useState, useEffect } from "react";
import styles from "../styles/AreWeOpen.module.css";

function AreWeOpen() {
  const [message, setMessage] = useState("Tjekker åbningstider...");

  useEffect(() => {
    const interval = setInterval(() => {
      updateOpenMessage();
    }, 60000); // every 60,000 ms = 1 minute

    // Run once immediately
    updateOpenMessage();

    return () => clearInterval(interval);
  }, []);

  function updateOpenMessage() {
    const now = new Date();
    const nextOpening = getNextOpening(now);
    const isOpenNow = checkIfOpen(now);

    if (isOpenNow) {
      setMessage("Vi har åbent! Kom glad.");
    } else if (nextOpening) {
      const options = { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" };
      const formattedNext = nextOpening.toLocaleDateString("da-DK", options);
      setMessage(`Vi har lukket, men kig snart forbi!<br />Vi åbner næste gang ${formattedNext}`);
    } else {
      setMessage("Vi har lukket for sæsonen. Følg med for næste åbning!");
    }
  }

  function checkIfOpen(date) {
    const day = date.getDay(); // 0-6, Sun-Sat
    const hour = date.getHours();
    const minute = date.getMinutes();
    const month = date.getMonth() + 1; // 1-12
    const dayOfMonth = date.getDate();

    // First period: May 19 - July 13
    if ((month === 5 && dayOfMonth >= 19) || month === 6 || (month === 7 && dayOfMonth <= 13)) {
      if (day >= 1 && day <= 5) {
        // Mon-Fri
        return (hour === 15 && minute >= 30) || (hour >= 16 && hour < 18);
      } else if (day === 0 || day === 6) {
        // Sat-Sun
        return hour >= 9 && hour < 18;
      }
    }

    // Second period: Nov 7 - Dec 20
    if ((month === 11 && dayOfMonth >= 7) || (month === 12 && dayOfMonth <= 20)) {
      if (day === 5) {
        // Friday
        return hour >= 13 && (hour < 17 || (hour === 17 && minute <= 30));
      } else if (day === 6) {
        // Saturday
        return (hour === 9 && minute >= 30) || (hour >= 10 && hour < 13);
      }
    }

    return false;
  }

  function getNextOpening(currentDate) {
    const maxLookaheadDays = 365;
    for (let i = 0; i < maxLookaheadDays; i++) {
      const checkDate = new Date(currentDate);
      checkDate.setDate(currentDate.getDate() + i);

      // Check for opening times on this date
      const possibleOpeningTimes = getPossibleOpeningTimes(checkDate);
      for (let time of possibleOpeningTimes) {
        const openingDateTime = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate(), time.hour, time.minute);
        if (openingDateTime > currentDate) {
          return openingDateTime;
        }
      }
    }
    return null;
  }

  // Helper: Get possible opening times for a given day
  function getPossibleOpeningTimes(date) {
    const day = date.getDay(); // 0-6, Sun-Sat
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    let times = [];

    // First period: May 19 - July 13
    if ((month === 5 && dayOfMonth >= 19) || month === 6 || (month === 7 && dayOfMonth <= 13)) {
      if (day >= 1 && day <= 5) {
        // Mon-Fri: Opens at 15:30
        times.push({ hour: 15, minute: 30 });
      } else if (day === 0 || day === 6) {
        // Sat-Sun: Opens at 9:00
        times.push({ hour: 9, minute: 0 });
      }
    }

    // Second period: Nov 7 - Dec 20
    if ((month === 11 && dayOfMonth >= 7) || (month === 12 && dayOfMonth <= 20)) {
      if (day === 5) {
        // Friday: Opens at 13:00
        times.push({ hour: 13, minute: 0 });
      } else if (day === 6) {
        // Saturday: Opens at 9:30
        times.push({ hour: 9, minute: 30 });
      }
    }

    return times;
  }

  return <p className={styles.container} dangerouslySetInnerHTML={{ __html: message }}></p>;
}

export default AreWeOpen;
