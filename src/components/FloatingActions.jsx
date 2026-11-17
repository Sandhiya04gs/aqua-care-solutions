import { useEffect, useState } from "react";
import Icon from "./Icon";
import { buildWhatsAppUrl, company } from "../data/company";

/** Floating WhatsApp + Call buttons, and a back-to-top button after scrolling. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floaters">
      {showTop && (
        <button className="floater floater--top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 15l6-6 6 6" /></svg>
        </button>
      )}
      <a className="floater floater--call" href={`tel:${company.phone1.tel}`} aria-label="Call us"><Icon name="phone" size={22} /></a>
      <a className="floater floater--wa" href={buildWhatsAppUrl("Hello Aqua Care Solutions, I would like to know more about your RO products and services.")}
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><Icon name="whatsapp" size={26} /></a>
    </div>
  );
}
