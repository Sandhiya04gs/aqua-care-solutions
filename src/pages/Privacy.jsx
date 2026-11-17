import usePageTitle from "../hooks/usePageTitle";
import { company } from "../data/company";

export default function Privacy() {
  usePageTitle("Privacy Policy | Aqua Care Solutions", "How Aqua Care Solutions handles your information on this website.");
  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Privacy Policy</h1><p>How this website handles your information</p></div>
      </section>
      <section className="section">
        <div className="container legal">
          <h2>Enquiries</h2>
          <p>When you use the enquiry form, your name, phone number, email (optional), selected product or service and message are put into a WhatsApp message. The form opens WhatsApp so you can send it to us. This website does not store your enquiry.</p>
          <h2>WhatsApp</h2>
          <p>Once you send a message on WhatsApp, WhatsApp's own privacy policy applies to it. We use your details only to reply to your enquiry and to provide the product or service you ask about.</p>
          <h2>Third-party content</h2>
          <p>This website loads fonts from Google Fonts and an embedded Google Map on the Contact page. Google may collect usage information when these load.</p>
          <h2>Contact</h2>
          <p>Questions about this policy: <a href={`mailto:${company.email}`}>{company.email}</a> or <a href={`tel:${company.phone1.tel}`}>{company.phone1.display}</a>.</p>
        </div>
      </section>
    </>
  );
}
