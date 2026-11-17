import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { buildWhatsAppUrl } from "../data/company";
import { products } from "../data/products";

const uses = [
  { key: "home", label: "Home or apartment" },
  { key: "shop", label: "Shop, clinic, school or office" },
  { key: "industry", label: "Factory, hotel or institution" },
  { key: "pdw", label: "Packaged drinking water business" },
  { key: "sewage", label: "Sewage or effluent treatment" },
];
const sources = ["Borewell", "Municipal supply", "Water tanker", "Not sure"];
const issues = [
  { key: "hard", label: "Hard water or scale" },
  { key: "iron", label: "Iron or rust colour" },
  { key: "salty", label: "Salty or high TDS water" },
];
const byUse = {
  home: ["smart-ro", "water-pia", "whale-ro", "10-lph-ro"],
  shop: ["50-100-lph-commercial-ro"],
  industry: ["500-lph-industrial-ro"],
  pdw: ["packaged-drinking-water-plant", "500-lph-industrial-ro"],
  sewage: ["stp-etp-plants"],
};

function Choice({ on, onClick, children }) {
  return <button type="button" className={`pill ${on ? "pill--on" : ""}`} aria-pressed={on} onClick={onClick}>{children}</button>;
}

export default function FindRo() {
  usePageTitle("Find Your RO | Aqua Care Solutions", "Answer three quick questions and see which RO purifier or plant suits your water and your need.");
  const [use, setUse] = useState("");
  const [source, setSource] = useState("");
  const [picked, setPicked] = useState([]);
  const toggle = (k) => setPicked(picked.includes(k) ? picked.filter((x) => x !== k) : [...picked, k]);

  const ids = use ? [...byUse[use]] : [];
  if (use && picked.includes("hard")) ids.push("automatic-softener");
  if (use && picked.includes("iron")) ids.push("iron-remover-plant");
  const results = ids.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  const notes = [];
  if (use && (source === "Borewell" || source === "Water tanker" || picked.includes("salty")))
    notes.push("Borewell, tanker or salty water often has high TDS. An RO system is usually needed, and a water test helps us size it.");
  if (use && source === "Municipal supply") notes.push("Municipal water is often lower in TDS, but a TDS reading will tell us if you need RO, UF or a softener.");
  if (use && picked.includes("hard")) notes.push("A softener protects pipes, heaters and RO membranes from scale.");
  if (use && picked.includes("iron")) notes.push("An iron remover is usually fitted before RO or a softener.");

  const reset = () => { setUse(""); setSource(""); setPicked([]); };
  const msg = `Hello Aqua Care Solutions, I used Find Your RO.\nNeed: ${uses.find((u) => u.key === use)?.label}\nWater source: ${source || "Not sure"}\nIssues: ${picked.map((k) => issues.find((i) => i.key === k).label).join(", ") || "None"}\nSuggested: ${results.map((r) => r.name).join(", ")}\nPlease advise.`;

  return (
    <>
      <section className="page-head"><div className="container"><h1>Find Your RO</h1><p>Three quick questions, then see what suits you.</p></div></section>
      <section className="section">
        <div className="container">
          <div className="card pad quiz">
            <h3><span className="steps__num">1</span> Where will you use it?</h3>
            <div className="pills">{uses.map((u) => <Choice key={u.key} on={use === u.key} onClick={() => setUse(u.key)}>{u.label}</Choice>)}</div>
            <h3><span className="steps__num">2</span> What is your water source?</h3>
            <div className="pills">{sources.map((s) => <Choice key={s} on={source === s} onClick={() => setSource(s)}>{s}</Choice>)}</div>
            <h3><span className="steps__num">3</span> Any water problems? <span className="muted small">(optional)</span></h3>
            <div className="pills">{issues.map((i) => <Choice key={i.key} on={picked.includes(i.key)} onClick={() => toggle(i.key)}>{i.label}</Choice>)}</div>
          </div>

          {results.length > 0 ? (
            <div className="quiz-result">
              <h2>Suggested for you</h2>
              {notes.length > 0 && <ul className="tick-list card pad">{notes.map((n) => <li key={n}><Icon name="check" size={18} />{n}</li>)}</ul>}
              <div className="grid grid--3" style={{ marginTop: 20 }}>{results.map((p) => <ProductCard key={p.id} product={p} />)}</div>
              <p className="muted small">This is a guide. We confirm the right model after checking your water and usage.</p>
              <div className="card__actions">
                <Button href={buildWhatsAppUrl(msg)} variant="green"><Icon name="whatsapp" size={18} />Send my answers on WhatsApp</Button>
                <Button to="/quote" variant="outline">Request a quote</Button>
                <Button onClick={reset} variant="outline">Start again</Button>
              </div>
            </div>
          ) : (
            <p className="center muted">Choose where you will use it to see suggestions.</p>
          )}
        </div>
      </section>
    </>
  );
}
