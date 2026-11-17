import usePageTitle from "../hooks/usePageTitle";
import EnquiryForm from "../components/EnquiryForm";
import { services } from "../data/services";
import { company } from "../data/company";

const fields = [
  { name: "name", label: "Your name", required: true, half: true },
  { name: "phone", label: "Phone number", type: "tel", required: true, half: true },
  { name: "service", label: "Service needed", type: "select", required: true, options: [...services.map((s) => s.title), "Not sure"] },
  { name: "brand", label: "Purifier brand / model (if known)", half: true },
  { name: "when", label: "Preferred time", type: "select", half: true, options: ["Morning", "Afternoon", "Evening", "Any time"] },
  { name: "address", label: "Address for the visit", type: "textarea", required: true },
  { name: "problem", label: "Describe the problem (optional)", type: "textarea" },
];

export default function ServiceRequest() {
  usePageTitle("Book a Service | Aqua Care Solutions", "Request RO installation, repair, maintenance or filter replacement in Guduvancheri, Chengalpattu.");
  const buildMessage = (v) => [
    "Hello Aqua Care Solutions, I would like to book a service.",
    `Name: ${v.name}`, `Phone: ${v.phone}`, `Service: ${v.service}`, v.brand && `Brand/model: ${v.brand}`,
    v.when && `Preferred time: ${v.when}`, `Address: ${v.address}`, v.problem && `Problem: ${v.problem}`,
  ].filter(Boolean).join("\n");
  return (
    <>
      <section className="page-head"><div className="container"><h1>Book a Service</h1><p>Installation, repair, maintenance or filter replacement.</p></div></section>
      <section className="section">
        <div className="container two-col two-col--top">
          <EnquiryForm title="Service request" intro="We will confirm the visit time with you on WhatsApp or by phone." fields={fields} buildMessage={buildMessage} />
          <div className="card pad">
            <h3>Before we visit</h3>
            <ul className="tick-list">
              <li>Keep the purifier switched on if it still runs</li>
              <li>Note any leaks, noise or taste changes</li>
              <li>A photo of the purifier on WhatsApp helps us bring the right parts</li>
            </ul>
            <p className="muted small">Urgent? Call <a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a> or <a href={`tel:${company.phone2.tel}`}>{company.phone2.display}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
