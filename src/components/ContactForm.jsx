import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl } from "../data/company";
import { products } from "../data/products";
import { services } from "../data/services";

const empty = { name: "", phone: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(v.phone.trim())) e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!v.subject) e.subject = "Choose a product or service.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function ContactForm({ defaultSubject = "" }) {
  const [values, setValues] = useState({ ...empty, subject: defaultSubject });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const text = [
      "Hello Aqua Care Solutions, I have an enquiry.",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() && `Email: ${values.email.trim()}`,
      `Product/Service: ${values.subject}`,
      `Message: ${values.message.trim()}`,
    ].filter(Boolean).join("\n");
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setValues(empty);
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={values[name]} onChange={change} aria-invalid={!!errors[name]} {...props} />
      {errors[name] && <span className="field__error">{errors[name]}</span>}
    </div>
  );

  return (
    <form className="form card" onSubmit={submit} noValidate>
      <h3>Send an enquiry</h3>
      <div className="form__row">
        {field("name", "Customer name", { type: "text", autoComplete: "name" })}
        {field("phone", "Phone number", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
      </div>
      {field("email", "Email address (optional)", { type: "email", autoComplete: "email" })}
      <div className="field">
        <label htmlFor="subject">Product or service</label>
        <select id="subject" name="subject" value={values.subject} onChange={change} aria-invalid={!!errors.subject}>
          <option value="">Select one</option>
          <optgroup label="Products">{products.map((p) => <option key={p.id}>{p.name}</option>)}</optgroup>
          <optgroup label="Services">{services.map((s) => <option key={s.id}>{s.title}</option>)}</optgroup>
        </select>
        {errors.subject && <span className="field__error">{errors.subject}</span>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={values.message} onChange={change} aria-invalid={!!errors.message} />
        {errors.message && <span className="field__error">{errors.message}</span>}
      </div>
      <Button type="submit" variant="green"><Icon name="whatsapp" size={18} />Send on WhatsApp</Button>
      <p className="form__note">
        {sent ? "WhatsApp opened with your details. Press send there to reach us." : "Submitting opens WhatsApp with your details filled in. Enquiries are not stored on this website."}
      </p>
    </form>
  );
}
