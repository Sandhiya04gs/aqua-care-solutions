import usePageTitle from "../hooks/usePageTitle";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { company } from "../data/company";

const objectives = [
  "Provide safe, good-tasting drinking water to homes and businesses.",
  "Recommend the right system for each water source, not the most expensive one.",
  "Back every sale with proper installation and prompt service.",
  "Keep long-term relationships through honest, reliable support.",
];

export default function About() {
  usePageTitle("About Us | Aqua Care Solutions", "ISO 9001:2015 certified RO sales and service company in Guduvancheri, Chengalpattu.");
  return (
    <>
      <section className="page-head">
        <div className="container"><h1>About Us</h1><p>{company.tagline}</p></div>
      </section>

      <section className="section">
        <div className="container two-col two-col--top">
          <div>
            <h2>Who we are</h2>
            <p>{company.name} is an {company.certification.replace(" Company", "")} company based in Guduvancheri, Chengalpattu, Tamil Nadu. We sell and service all types of domestic and industrial RO systems.</p>
            <p>Our range covers home purifiers, 50 and 100 LPH commercial units, industrial plants of 500 LPH and above, automatic softeners, packaged drinking water plant projects and STP / ETP / iron remover plants.</p>
          </div>
          <div className="card pad">
            <h3>What we do</h3>
            <ul className="tick-list">
              <li><Icon name="check" size={18} />Sales of domestic, commercial and industrial RO systems</li>
              <li><Icon name="check" size={18} />Installation and commissioning</li>
              <li><Icon name="check" size={18} />Maintenance, repair and filter replacement</li>
              <li><Icon name="check" size={18} />Water treatment consultation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col two-col--top">
          <div>
            <h2>Our objectives</h2>
            <ul className="tick-list">{objectives.map((o) => <li key={o}><Icon name="check" size={18} />{o}</li>)}</ul>
          </div>
          <div>
            <h2>Our commitment</h2>
            <p>Water treatment is not one-size-fits-all. We test, advise and install so that the system you buy actually suits the water you have, and we stay available after installation for servicing and spares.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta card">
          <div>
            <h3>Talk to {company.contactPerson}</h3>
            <p><a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a> / <a href={`tel:${company.phone2.tel}`}>{company.phone2.display}</a> &middot; <a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
          <Button to="/contact">Contact us</Button>
        </div>
      </section>
    </>
  );
}
