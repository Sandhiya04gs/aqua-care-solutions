import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl } from "../data/company";

const PHONE = /^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Generic form that validates, then opens WhatsApp with the details.
 * fields: [{ name, label, type, options, required, placeholder, half }]
 */
export default function EnquiryForm({ title, intro, fields, initial = {}, buildMessage, submitLabel = "Send on WhatsApp" }) {
  const blank = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState({ ...blank, ...initial });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    fields.forEach((f) => {
      const v = (values[f.name] || "").trim();
      if (f.required && !v) e[f.name] = "This field is required.";
      else if (v && f.type === "tel" && !PHONE.test(v)) e[f.name] = "Enter a valid 10-digit Indian mobile number.";
      else if (v && f.type === "email" && !EMAIL.test(v)) e[f.name] = "Enter a valid email address.";
    });
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    window.open(buildWhatsAppUrl(buildMessage(values)), "_blank", "noopener,noreferrer");
    setSent(true);
    setValues({ ...blank, ...initial });
  };

  const input = (f) => {
    const common = { id: f.name, name: f.name, value: values[f.name], onChange: change, "aria-invalid": !!errors[f.name] };
    if (f.type === "select")
      return (<select {...common}><option value="">Select one</option>{f.options.map((o) => <option key={o}>{o}</option>)}</select>);
    if (f.type === "textarea") return <textarea {...common} rows="3" placeholder={f.placeholder} />;
    return <input {...common} type={f.type || "text"} placeholder={f.placeholder} inputMode={f.type === "tel" ? "tel" : undefined} />;
  };

  return (
    <form className="form card" onSubmit={submit} noValidate>
      <h3>{title}</h3>
      {intro && <p className="muted small" style={{ margin: 0 }}>{intro}</p>}
      <div className="form__grid">
        {fields.map((f) => (
          <div key={f.name} className={`field ${f.half ? "" : "field--full"}`}>
            <label htmlFor={f.name}>{f.label}{f.required ? " *" : ""}</label>
            {input(f)}
            {errors[f.name] && <span className="field__error">{errors[f.name]}</span>}
          </div>
        ))}
      </div>
      <Button type="submit" variant="green"><Icon name="whatsapp" size={18} />{submitLabel}</Button>
      <p className="form__note">
        {sent ? "WhatsApp opened with your details. Press send there to reach us." : "Submitting opens WhatsApp with your details filled in. Nothing is stored on this website."}
      </p>
    </form>
  );
}
