import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl, company } from "../data/company";
import { categories, products } from "../data/products";

const reasons = [
  { icon: "shield", title: "Quality Products", text: "From home purifiers to industrial plants, we supply systems chosen for dependable performance.",
    points: ["Domestic, commercial and industrial range", "Filters, membranes and spares in stock"] },
  { icon: "user", title: "Expert Technicians", text: "Trained technicians handle installation, servicing and repairs at your site.",
    points: ["Neat, safe installation", "Quick fault diagnosis"] },
  { icon: "clock", title: "Reliable Service", text: "Timely maintenance and quick repairs so your water supply keeps running.",
    points: ["Regular maintenance visits", "Filter and membrane replacement"] },
  { icon: "headset", title: "Customer Support", text: "Call or message us whenever you have a question about your system.",
    points: ["Phone and WhatsApp support", "Guidance after purchase"] },
  { icon: "drop", title: "Right-Fit Solutions", text: "We match the system to your water source and daily usage, not the other way round.",
    points: ["Water check and advice", "Capacity planned to your need"] },
  { icon: "check", title: "ISO Certified Company", text: "We are an ISO 9001:2015 certified company with a quality-focused way of working.",
    points: ["Certified quality management", "Clear, honest recommendations"] },
];

const stats = [
  { value: "ISO 9001", label: "2015 certified company" },
  { value: `${products.length}+`, label: "products in our range" },
  { value: String(categories.length), label: "product categories" },
  { value: "Sales + Service", label: "under one roof" },
];

const process = [
  ["Enquiry", "Call, WhatsApp or send the form with what you need."],
  ["Water check and advice", "We understand your water source and recommend the right system."],
  ["Supply and installation", "Our technicians install and commission the system."],
  ["Service and support", "Maintenance, repairs and spares whenever you need them."],
];

export default function WhyChooseUs() {
  const msg = "Hello Aqua Care Solutions, I would like some advice on choosing a water purification system.";
  return (
    <section className="section section--alt" id="why-choose-us">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why choose us</span>
          <h2>Water treatment you can rely on</h2>
          <p>Straightforward advice, proper installation and service you can call on, for homes, businesses and industry.</p>
        </div>

        <div className="why-layout">
          <aside className="why-panel">
            <span className="why-panel__badge"><Icon name="shield" size={16} />{company.certification}</span>
            <h3>One team for sales, installation and service</h3>
            <p>Buy from us and you deal with the same people when it is time to install, service or repair.</p>
            <ul className="why-panel__list">
              <li><Icon name="check" size={18} />All types of domestic and industrial RO systems</li>
              <li><Icon name="check" size={18} />Softeners, iron removers, STP / ETP plants</li>
              <li><Icon name="check" size={18} />Local support in Guduvancheri, Chengalpattu</li>
            </ul>
            <div className="why-panel__btns">
              <Button href={buildWhatsAppUrl(msg)} variant="green"><Icon name="whatsapp" size={18} />WhatsApp Us</Button>
              <Button href={`tel:${company.phone1.tel}`} variant="light"><Icon name="phone" size={18} />Call Now</Button>
            </div>
          </aside>

          <div className="why-grid">
            {reasons.map((r, i) => (
              <article key={r.title} className="why-card">
                <span className="why-card__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="icon-badge"><Icon name={r.icon} size={24} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <ul>{r.points.map((p) => <li key={p}><Icon name="check" size={15} />{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>

        <div className="why-stats">
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>

        <div className="why-process">
          <h3>How we work</h3>
          <ol>
            {process.map(([t, d], i) => (
              <li key={t}><span className="steps__num">{i + 1}</span><strong>{t}</strong><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
