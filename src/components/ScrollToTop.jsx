import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Link with #id (e.g. /#why-choose-us) -> smooth scroll to that section.
 * - Any other page change              -> jump to the top instantly (no scrolling animation).
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return () => clearTimeout(t);
    }
    // "instant" overrides the CSS `scroll-behavior: smooth`, so the new page opens at the top directly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search, hash]);

  return null;
}
