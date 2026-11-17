import usePageTitle from "../hooks/usePageTitle";
import WhyChooseUs from "../components/WhyChooseUs";
import Button from "../components/Button";
import { company } from "../data/company";

export default function WhyChoose() {
  usePageTitle("Why Choose Us | Aqua Care Solutions", "Why customers choose Aqua Care Solutions for RO sales, installation and service.");
  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Why Choose Us</h1><p>{company.tagline}</p></div>
      </section>
      <WhyChooseUs />
      <section className="section">
        <div className="container cta card">
          <div><h3>Ready to get clean water?</h3><p>Tell us what you need and we will recommend the right system.</p></div>
          <Button to="/contact">Contact us</Button>
        </div>
      </section>
    </>
  );
}
