
import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl } from "../data/company";

// Indian mobile number validation
const PHONE = /^[6-9]\d{9}$/;

// Strict email format validation
const EMAIL =
  /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

// Name validation
const NAME = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

// Location validation
const LOCATION = /^[A-Za-z0-9\s,.'#/-]+$/;

export default function EnquiryForm({
  title,
  intro,
  fields,
  initial = {},
  buildMessage,
  submitLabel = "Send on WhatsApp",
}) {
  const blank = Object.fromEntries(
    fields.map((f) => [f.name, ""])
  );

  const [values, setValues] = useState({
    ...blank,
    ...initial,
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

  // Validate all fields
  const validate = () => {
    const e = {};

    fields.forEach((f) => {
      const v = (values[f.name] || "").trim();

      // Required field
      if (f.required && !v) {
        e[f.name] = `${f.label} is required.`;
        return;
      }

      if (!v) return;

      // Name validation
      if (f.name === "name") {
        if (v.length < 2 || v.length > 60 || !NAME.test(v)) {
          e[f.name] = "Enter a valid name. Numbers are not allowed.";
        }
      }

      // Phone validation
      else if (f.type === "tel") {
        if (!PHONE.test(v)) {
          e[f.name] = "Enter a valid 10-digit Indian mobile number.";
        }
      }

      // Email validation
      else if (f.type === "email") {
        if (
          v.length > 254 ||
          !EMAIL.test(v) ||
          v.includes("..")
        ) {
          e[f.name] = "Enter a valid email address (example@gmail.com).";
        }
      }

      // Location validation
      else if (f.name === "location") {
        if (v.length < 2 || v.length > 100 || !LOCATION.test(v)) {
          e[f.name] = "Enter a valid city or area.";
        }
      }

      // TDS validation
      else if (f.name === "tds") {
        if (!/^\d{1,5}$/.test(v) || Number(v) > 99999) {
          e[f.name] = "Enter a valid TDS value in numbers only.";
        }
      }

      // Message validation
      else if (f.name === "message") {
        if (v.length > 1000) {
          e[f.name] = "Message cannot exceed 1000 characters.";
        }
      }
    });

    return e;
  };

  // Submit form
  const submit = (ev) => {
    ev.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSent(false);

      const firstError = Object.keys(validationErrors)[0];

      document.getElementById(firstError)?.focus();

      return;
    }

    const message = buildMessage(
      Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          value.trim(),
        ])
      )
    );

    window.open(
      buildWhatsAppUrl(message),
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);

    setValues({
      ...blank,
      ...initial,
    });

    setErrors({});
  };

  // Render form inputs
  const input = (f) => {
    const common = {
      id: f.name,
      name: f.name,
      value: values[f.name] || "",
      onChange: change,
      "aria-invalid": !!errors[f.name],
      "aria-describedby": errors[f.name]
        ? `${f.name}-error`
        : undefined,
      placeholder: f.placeholder || "",
      maxLength:
        f.name === "phone"
          ? 10
          : f.name === "tds"
            ? 5
            : f.name === "message"
              ? 1000
              : undefined,
    };

    if (f.type === "select") {
      return (
        <select {...common}>
          <option value="">Select one</option>

          {f.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    if (f.type === "textarea") {
      return (
        <textarea
          {...common}
          rows="4"
          placeholder={
            f.placeholder || "Enter your message..."
          }
        />
      );
    }

    return (
      <input
        {...common}
        type={f.type || "text"}
        inputMode={
          f.type === "tel" || f.name === "tds"
            ? "numeric"
            : undefined
        }
        autoComplete={
          f.name === "name"
            ? "name"
            : f.name === "email"
              ? "email"
              : f.type === "tel"
                ? "tel-national"
                : undefined
        }
        onInput={
          f.type === "tel" || f.name === "tds"
            ? (e) => {
                e.target.value = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, f.name === "tds" ? 5 : 10);
              }
            : undefined
        }
      />
    );
  };

  return (
    <form
      className="form card"
      onSubmit={submit}
      noValidate
    >
      <div className="form__heading">
        <h3>{title}</h3>

        {intro && (
          <p className="muted small" style={{ margin: 0 }}>
            {intro}
          </p>
        )}
      </div>

      <div className="form__grid">
        {fields.map((f) => (
          <div
            key={f.name}
            className={`field ${
              f.half ? "" : "field--full"
            } ${errors[f.name] ? "field--invalid" : ""}`}
          >
            <label htmlFor={f.name}>
              {f.label}

              {f.required && (
                <span className="required"> *</span>
              )}
            </label>

            {input(f)}

            {errors[f.name] && (
              <span
                className="field__error"
                id={`${f.name}-error`}
              >
                <Icon name="alert-circle" size={14} />
                {errors[f.name]}
              </span>
            )}
          </div>
        ))}
      </div>

      <Button type="submit" variant="green">
        <Icon name="whatsapp" size={18} />
        {submitLabel}
      </Button>

      <p className="form__note" role="status">
        {sent
          ? "WhatsApp opened with your details. Press Send there to reach us."
          : "Submitting opens WhatsApp with your details filled in. Nothing is stored on this website."}
      </p>
    </form>
  );
}
