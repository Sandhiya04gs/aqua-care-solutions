import usePageTitle from "../hooks/usePageTitle";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { company, mapInfo } from "../data/company";


export default function Contact() {
  usePageTitle("Contact Us | Aqua Care Solutions", "Call 72000 10271 or 98942 40380, WhatsApp or visit us in Nandivaram, Guduvancheri, Chengalpattu.");
  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Contact Us</h1><p>Call, message or send an enquiry. We are happy to help.</p></div>
      </section>
      <section className="section">
        <div className="container two-col two-col--top">
          <div className="card pad">
            <h3>Contact details</h3>
            <ul className="contact-list">
              <li><Icon name="user" /><span>Contact person: {company.contactPerson}</span></li>
              <li><Icon name="phone" /><a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a></li>
              <li><Icon name="phone" /><a href={`tel:${company.phone2.tel}`}>{company.phone2.display}</a> (alternative)</li>
              <li><Icon name="mail" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="pin" /><span>{company.address.full}</span></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head"><h2>Find us</h2><p>{company.address.full}</p></div>
          <div className="map-wrap">
            <iframe title="Aqua Care Solutions location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapInfo.lat},${mapInfo.lng}&z=17&hl=en&output=embed`} />
          </div>
          <div className="center">
            <a className="btn btn--outline" href={`https://www.google.com/maps/dir/?api=1&destination=${mapInfo.lat},${mapInfo.lng}`} target="_blank" rel="noopener noreferrer">
              <Icon name="pin" size={18} />Get directions
            </a>{" "}
            <a className="btn btn--primary" href={mapInfo.link} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
