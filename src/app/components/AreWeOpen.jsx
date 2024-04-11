"use effect";

import { useState, useEffect } from "react";

function AreWeOpen() {
  /* States */
  const [open, setOpen] = useState(false);

  /* Effects */

  /* Functions */
  function areWeOpen() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    const hours = today.getHours();

    // Check if it's a weekday (Monday to Friday) and within the specified time slot
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 15 && hours < 18) {
      return true;
    }

    // Check if it's Saturday or Sunday and within the specified time slot
    if ((dayOfWeek === 6 || dayOfWeek === 0) && hours >= 9 && hours < 18) {
      return true;
    }

    // If none of the above conditions are met, return false
    return false;
  }

  return <div>AreWeOpen</div>;
}

export default AreWeOpen;
