import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Nonaktifkan pemulihan posisi otomatis
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Jika ada #anchor, hormati anchor; kalau tidak, scroll ke atas
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ block: "start" }); // tanpa smooth agar AOS tidak bentrok
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0); // instan
    }
  }, [pathname, hash]);

  return null;
}
