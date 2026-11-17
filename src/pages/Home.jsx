import usePageTitle from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import HomeFaq from "../components/HomeFaq";
import ReviewsSection from "../components/ReviewsSection";
import ToolsSection from "../components/ToolsSection";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { company } from "../data/company";
import { homeServices } from "../data/services";
import { products } from "../data/products";

const featured = ["smart-ro", "water-pia", "kyk-hydrogen-alkaline", "50-100-lph-commercial-ro", "500-lph-industrial-ro", "automatic-softener"]
  .map((id) => products.find((p) => p.id === id));

export default function Home() {
  usePageTitle("Aqua Care Solutions | RO Sales & Service in Guduvancheri", "Domestic, commercial and industrial RO water purifiers, plants, softeners, installation and service in Guduvancheri, Chengalpattu.");
  return (
    <>
      <Hero />

      <section className="section" id="about">
        <div className="container two-col">
          <div>
            <h2>About {company.name}</h2>
            <p>
              We are an {company.certification.replace(" Company", "")} company in Guduvancheri, Chengalpattu, supplying and servicing all types
              of domestic and industrial RO systems. Our aim is simple: dependable water treatment that fits your water source and your budget.
            </p>
            <p>From a single home purifier to a full plant project, we handle supply, installation and service under one roof.</p>
            <Button to="/about" variant="outline">Read more about us</Button>
          </div>
          <ul className="tick-list card">
            <li><Icon name="check" size={18} />Domestic RO sales and service</li>
            <li><Icon name="check" size={18} />Industrial and commercial RO plants</li>
            <li><Icon name="check" size={18} />Softeners, iron removers, STP / ETP plants</li>
            <li><Icon name="check" size={18} />Filters, membranes and spare parts</li>
          </ul>
        </div>
      </section>

      <section className="section section--alt" id="services">
        <div className="container">
          <div className="section-head"><h2>Our Services</h2><p>Everything you need to keep your water clean and your system running.</p></div>
          <div className="grid grid--3">{homeServices.map((s) => <ServiceCard key={s.title} service={s} withButton={false} />)}</div>
          <div className="center"><Button to="/services">View all services</Button></div>
        </div>
      </section>

      <section className="section" id="featured-products">
        <div className="container">
          <div className="section-head"><h2>Featured Products</h2><p>A selection from our domestic, commercial and industrial range.</p></div>
          <div className="grid grid--3">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          <div className="center"><Button to="/products">See full catalogue</Button></div>
        </div>
      </section>

      <ToolsSection />
      <WhyChooseUs />
      <Industries />
      <ReviewsSection />
      <HomeFaq />

      <section className="section" id="contact-section">
        <div className="container two-col two-col--top">
          <div>
            <h2>Get in touch</h2>
            <p>Tell us what you need and we will get back to you.</p>
            <ul className="contact-list">
              <li><Icon name="phone" /><span><a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a> / <a href={`tel:${company.phone2.tel}`}>{company.phone2.display}</a></span></li>
              <li><Icon name="mail" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="pin" /><span>{company.address.full}</span></li>
            </ul>
            <Link className="textlink" to="/contact">Full contact details</Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
