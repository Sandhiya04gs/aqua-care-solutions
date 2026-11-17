import usePageTitle from "../hooks/usePageTitle";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/services";

export default function Services() {
  usePageTitle("RO Installation, Repair & Filter Replacement | Aqua Care Solutions", "RO installation, maintenance, repair, filter replacement and water treatment consultation in Guduvancheri.");
  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Our Services</h1><p>Installation, maintenance, repair and advice for every RO system we sell.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--3">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div>
          <div className="cta card">
            <div><h3>Need a service visit?</h3><p>Call us and we will arrange a technician.</p></div>
            <Button to="/contact">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
