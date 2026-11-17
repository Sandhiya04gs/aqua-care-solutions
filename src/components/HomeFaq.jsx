import Button from "./Button";
import { buildWhatsAppUrl } from "../data/company";

const faqs = [
  { q: "What is TDS?", a: "TDS means Total Dissolved Solids, the amount of dissolved salts and minerals in water. It is measured in ppm. An RO purifier reduces it, and we can advise what suits your water." },
  { q: "How often should RO filters be changed?", a: "It depends on your water quality and how much you use. We suggest a schedule when we install or service your purifier." },
  { q: "Do you provide installation and service?", a: "Yes. We sell, install, service and repair domestic, commercial and industrial RO systems." },
  { q: "Do you offer maintenance plans?", a: "Ask us about regular maintenance for your home or business. We will explain what is included." },
  { q: "Which purifier brands do you service?", a: "We service common RO brands. Message us your purifier model and we will confirm." },
];

export default function HomeFaq() {
  const msg = "Hello Aqua Care Solutions, I have a question about RO purifiers.";
  return (
    <section className="section section--alt" id="faq">
      <div className="container faq-wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        {faqs.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
        <div className="center">
          <p className="muted">Still have a question?</p>
          <Button href={buildWhatsAppUrl(msg)} variant="green">Ask on WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
