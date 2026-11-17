import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { categories, products } from "../data/products";

export default function Products() {
  usePageTitle("RO Water Purifiers, Plants & Spares | Aqua Care Solutions", "Domestic RO purifiers, commercial and industrial RO plants, softeners, STP/ETP plants and spare parts.");
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const active = categories.includes(params.get("category")) ? params.get("category") : "All";
  const pick = (c) => (c === "All" ? setParams({}) : setParams({ category: c }));

  const q = query.trim().toLowerCase();
  const list = products
    .filter((p) => active === "All" || p.category === active)
    .filter((p) => !q || `${p.name} ${p.short} ${p.category}`.toLowerCase().includes(q));

  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Our Products</h1><p>Domestic, commercial and industrial RO systems, treatment equipment and spares.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card__actions">
            <Button to="/find-ro" size="sm">Help me choose</Button>
            <Button href="/Aqua-Care-Solutions-Catalogue.pdf" variant="outline" size="sm" download>Download catalogue (PDF)</Button>
            <Button to="/quote" variant="outline" size="sm">Request a quote</Button>
          </div>
          <input className="search" type="search" placeholder="Search products (e.g. softener, 100 LPH, alkaline)"
            aria-label="Search products" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="tabs" role="tablist" aria-label="Product categories">
            {["All", ...categories].map((c) => (
              <button key={c} role="tab" aria-selected={active === c} className={`tab ${active === c ? "tab--on" : ""}`} onClick={() => pick(c)}>{c}</button>
            ))}
          </div>
          {list.length ? (
            <div className="grid grid--3">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <p className="center muted">No products match your search. Try another word, or message us on WhatsApp.</p>
          )}
        </div>
      </section>
    </>
  );
}
