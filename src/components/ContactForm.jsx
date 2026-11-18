
import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl } from "../data/company";
import { products } from "../data/products";
import { services } from "../data/services";

const empty = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

// Email validation
const emailPattern =
  /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

// Validate all form fields
function validate(values) {
  const errors = {};

  const name = values.name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  // Customer name
  if (!name) {
    errors.name = "Customer name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  } else if (!/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name)) {
    errors.name = "Enter a valid name. Numbers are not allowed.";
  }

  // Indian mobile number
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  // Email address
  if (!email) {
    errors.email = "Email address is required.";
  } else if (
    !emailPattern.test(email) ||
    email.includes("..") ||
    email.length > 254
  ) {
    errors.email = "Enter a valid email address (example@gmail.com).";
  }

  // Product or service
  if (!values.subject) {
    errors.subject = "Please select a product or service.";
  }

  // Message
  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }

  return errors;
}

export default function ContactForm({ defaultSubject = "" }) {
  const [values, setValues] = useState({
    ...empty,
    subject: defaultSubject,
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Handle input changes
  const change = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSent(false);

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Submit form
  const submit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSent(false);
      return;
    }

    const text = [
      "Hello Aqua Care Solutions, I have an enquiry.",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Product/Service: ${values.subject}`,
      `Message: ${values.message.trim()}`,
    ].join("\n");

    window.open(
      buildWhatsAppUrl(text),
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);

    setValues({
      ...empty,
      subject: defaultSubject,
    });

    setErrors({});
  };

  // Reusable input field
  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? "field--invalid" : ""}`}>
      <label htmlFor={name}>
        {label} <span className="required">*</span>
      </label>

      <input
        id={name}
        name={name}
        value={values[name]}
        onChange={change}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...props}
      />

      {errors[name] && (
        <span className="field__error" id={`${name}-error`}>
          <Icon name="alert-circle" size={14} />
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form className="form card" onSubmit={submit} noValidate>
      <div className="form__heading">
        <h3>Send an Enquiry</h3>
        <p>
          Fill in your details and our team will get in touch with you.
        </p>
      </div>

      {/* Customer name and phone */}
      <div className="form__row">
        {field("name", "Customer Name", {
          type: "text",
          placeholder: "Enter your full name",
          autoComplete: "name",
          maxLength: 60,
        })}

        {field("phone", "Mobile Number", {
          type: "tel",
          placeholder: "Enter 10-digit mobile number",
          autoComplete: "tel-national",
          inputMode: "numeric",
          maxLength: 10,
          onInput: (e) => {
            e.target.value = e.target.value
              .replace(/\D/g, "")
              .slice(0, 10);
          },
        })}
      </div>

      {/* Email */}
      {field("email", "Email Address", {
        type: "email",
        placeholder: "example@gmail.com",
        autoComplete: "email",
        maxLength: 254,
      })}

      {/* Product or service */}
      <div className={`field ${errors.subject ? "field--invalid" : ""}`}>
        <label htmlFor="subject">
          Product or Service <span className="required">*</span>
        </label>

        <select
          id="subject"
          name="subject"
          value={values.subject}
          onChange={change}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        >
          <option value="">Select a product or service</option>

          <optgroup label="Products">
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </optgroup>

          <optgroup label="Services">
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </optgroup>
        </select>

        {errors.subject && (
          <span className="field__error" id="subject-error">
            <Icon name="alert-circle" size={14} />
            {errors.subject}
          </span>
        )}
      </div>

      {/* Message */}
      <div className={`field ${errors.message ? "field--invalid" : ""}`}>
        <label htmlFor="message">
          Your Message <span className="required">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell us what you are looking for..."
          value={values.message}
          onChange={change}
          maxLength={1000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />

        {errors.message && (
          <span className="field__error" id="message-error">
            <Icon name="alert-circle" size={14} />
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" variant="green">
        <Icon name="whatsapp" size={18} />
        Send Enquiry on WhatsApp
      </Button>

      <p className="form__note" role="status">
        {sent
          ? "WhatsApp has been opened. Please press Send to submit your enquiry."
          : "Your details will be shared through WhatsApp. This website does not store your enquiry."}
      </p>
    </form>
  );
}
