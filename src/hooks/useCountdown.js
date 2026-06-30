"use client";

import { useEffect, useState } from "react";

export function useCountdown(targetISO) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!targetISO) {
      setLabel("");
      return;
    }

    function update() {
      const diff = new Date(targetISO).getTime() - Date.now();

      if (diff <= 0) {
        setLabel("Now live");
        return;
      }

      const totalMinutes = Math.floor(diff / 1000 / 60);
      const days = Math.floor(totalMinutes / (60 * 24));
      const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
      const minutes = totalMinutes % 60;

      if (days > 0) {
        setLabel(`Starts in ${days} day${days > 1 ? "s" : ""}`);
      } else if (hours > 0) {
        setLabel(`Starts in ${hours} hour${hours > 1 ? "s" : ""}`);
      } else {
        setLabel(`Starts in ${minutes} min`);
      }
    }

    update();
    const id = setInterval(update, 60_000); // refresh every minute

    return () => clearInterval(id);
  }, [targetISO]);

  return { label };
}
