import { Link } from "react-router-dom";
import { company } from "../data/company";
import { homeServices } from "../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{company.name}</p>
          <p className="footer__tagline">{company.tagline}</p>
          <p>{company.business}. {company.certification}.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/quote">Request a Quote</Link></li>
            <li><Link to="/service-request">Book a Service</Link></li>
            <li><Link to="/find-ro">Find Your RO</Link></li>
            <li><Link to="/guide">Buying Guide</Link></li>
            <li><a href="/Aqua-Care-Solutions-Catalogue.pdf" download>Catalogue (PDF)</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{homeServices.map((s) => <li key={s.title}><Link to="/services">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>{company.contactPerson}</li>
            <li>
              <a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a> / <a href={`tel:${company.phone2.tel}`}>{company.phone2.display}</a>
            </li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li>{company.address.full}</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">&copy; {new Date().getFullYear()} {company.name}. All rights reserved. &middot; <Link to="/privacy">Privacy Policy</Link></div>
      </div>
    </footer>
  );
}
