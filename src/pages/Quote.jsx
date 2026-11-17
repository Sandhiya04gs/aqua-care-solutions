import { useSearchParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import EnquiryForm from "../components/EnquiryForm";
import { products } from "../data/products";
import { company } from "../data/company";

const productNames = [...products.map((p) => p.name), "Other / not sure"];
const fields = [
  { name: "name", label: "Your name", required: true, half: true },
  { name: "phone", label: "Phone number", type: "tel", required: true, half: true },
  { name: "email", label: "Email (optional)", type: "email", half: true },
  { name: "location", label: "Location (city / area)", half: true },
  { name: "product", label: "Product / system", type: "select", options: productNames, required: true },
  { name: "capacity", label: "Capacity needed", type: "select", required: true, half: true,
    options: ["Up to 100 LPH", "100 to 500 LPH", "500 to 1,000 LPH", "1,000 to 5,000 LPH", "Above 5,000 LPH", "Not sure"] },
  { name: "source", label: "Water source", type: "select", required: true, half: true,
    options: ["Borewell", "Municipal supply", "Water tanker", "Mixed / other", "Not sure"] },
  { name: "tds", label: "Water TDS in ppm (if known)", placeholder: "e.g. 1200" },
  { name: "message", label: "Anything else we should know", type: "textarea" },
];

export default function Quote() {
  usePageTitle("Request a Quote | Aqua Care Solutions", "Request a quote for RO purifiers, commercial and industrial RO plants, softeners and STP/ETP plants.");
  const [params] = useSearchParams();
  const pre = params.get("product");
  const initial = pre && productNames.includes(pre) ? { product: pre } : {};

  const buildMessage = (v) => [
    "Hello Aqua Care Solutions, I would like a quotation.",
    `Name: ${v.name}`, `Phone: ${v.phone}`, v.email && `Email: ${v.email}`, v.location && `Location: ${v.location}`,
    `Product: ${v.product}`, `Capacity: ${v.capacity}`, `Water source: ${v.source}`, v.tds && `TDS: ${v.tds} ppm`, v.message && `Notes: ${v.message}`,
  ].filter(Boolean).join("\n");

  return (
    <>
      <section className="page-head"><div className="container"><h1>Request a Quote</h1><p>Tell us what you need and we will get back to you with a quotation.</p></div></section>
      <section className="section">
        <div className="container two-col two-col--top">
          <EnquiryForm key={pre || "x"} title="Quotation request" intro="The more you tell us, the better we can size the system." fields={fields} initial={initial} buildMessage={buildMessage} />
          <div className="card pad">
            <h3>What helps us quote faster</h3>
            <ul className="tick-list">
              <li>Water source (borewell, municipal, tanker)</li>
              <li>TDS reading if you have one, or a recent water test</li>
              <li>Daily water need, in litres per day or LPH</li>
              <li>Location, so we can plan a site visit</li>
            </ul>
            <p className="muted small">Prefer to talk? Call <a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
