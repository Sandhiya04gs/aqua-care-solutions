import { Link } from "react-router-dom";
import Icon from "./Icon";

const tools = [
  { icon: "drop", title: "Find Your RO", text: "Answer 3 questions and see what suits you.", to: "/find-ro" },
  { icon: "chat", title: "Request a Quote", text: "Capacity, water source and location.", to: "/quote" },
  { icon: "tool", title: "Book a Service", text: "Repair, maintenance or filter change.", to: "/service-request" },
  { icon: "book", title: "Buying Guide", text: "TDS, capacity, softeners made simple.", to: "/guide" },
];

export default function ToolsSection() {
  return (
    <section className="section section--alt" id="tools">
      <div className="container">
        <div className="section-head"><span className="eyebrow">How can we help?</span><h2>Quick tools</h2><p>Get answers, a quote or a service visit in a few clicks.</p></div>
        <div className="tools-grid">
          {tools.map((t) => (
            <Link key={t.title} to={t.to} className="tool-card">
              <span className="icon-badge"><Icon name={t.icon} size={24} /></span>
              <h3>{t.title}</h3><p>{t.text}</p><span className="textlink">Open</span>
            </Link>
          ))}
          <a className="tool-card" href="/Aqua-Care-Solutions-Catalogue.pdf" download>
            <span className="icon-badge"><Icon name="filter" size={24} /></span>
            <h3>Product Catalogue</h3><p>Download all products as a PDF.</p><span className="textlink">Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
