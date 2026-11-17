
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ProductImage from "../components/ProductImage";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import { buildWhatsAppUrl, company } from "../data/company";
import { getProduct, products } from "../data/products";
import { categoryInfo, productInfo } from "../data/productInfo";

export default function ProductDetail() {
  const { id } = useParams();
  const p = getProduct(id);

  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (p) document.title = `${p.name} | ${company.name}`;

    return () => {
      document.title = `${company.name} | RO Sales & Service`;
    };
  }, [p]);

  // Close popup when Escape is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShareOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Copy product page URL
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy link:", error);
    }
  };

  if (!p) {
    return (
      <section className="section">
        <div className="container center">
          <h1>Product not found</h1>
          <p>This product is not in our catalogue.</p>
          <Button to="/products">Back to products</Button>
        </div>
      </section>
    );
  }

  const productUrl = window.location.href;
  const encodedUrl = encodeURIComponent(productUrl);
  const shareText = `Check out ${p.name} from ${company.name}`;
  const encodedText = encodeURIComponent(shareText);

  const info = productInfo[p.id] || {
    overview: p.short,
    features: p.details,
    suitable: [],
    specs: [],
  };

  const cat = categoryInfo[p.category] || {
    stages: [],
    included: [],
    faqs: [],
  };

  const related = [
    ...products.filter(
      (x) => x.category === p.category && x.id !== p.id
    ),
    ...products.filter(
      (x) => x.category !== p.category && x.id !== p.id
    ),
  ].slice(0, 3);

  const msg = `Hello Aqua Care Solutions, I would like to enquire about: ${p.name}. Please share details and price.`;

  return (
    <>
      <section className="section pd-top">
        <div className="container">
          <p className="crumbs">
            <Link to="/">Home</Link> /{" "}
            <Link to="/products">Products</Link> /{" "}
            <Link to={`/products?category=${encodeURIComponent(p.category)}`}>
              {p.category}
            </Link>{" "}
            / {p.name}
          </p>

          <div className="pd-grid">
            <ProductImage product={p} className="pimg--large card" />

            <div>
              <span className="chip">{p.category}</span>

              <h1>{p.name}</h1>
              <p className="pd-lead">{p.short}</p>

              <ul className="tick-list">
                {info.features.slice(0, 3).map((f) => (
                  <li key={f}>
                    <Icon name="check" size={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="card__actions pd-actions">
                <Button href={buildWhatsAppUrl(msg)} variant="green">
                  <Icon name="whatsapp" size={18} />
                  Enquire on WhatsApp
                </Button>

                <Button href={`tel:${company.phone1.tel}`} variant="outline">
                  <Icon name="phone" size={18} />
                  Call {company.phone1.display}
                </Button>

                <Button
                  to={`/quote?product=${encodeURIComponent(p.name)}`}
                  variant="outline"
                >
                  <Icon name="chat" size={18} />
                  Request a Quote
                </Button>

                {/* Share Product Button */}
                <div className="share-wrapper">
                  <button
                    type="button"
                    className="share-btn"
                    onClick={() => {
                      setShareOpen(true);
                      setCopied(false);
                    }}
                    aria-expanded={shareOpen}
                    aria-label="Share this product"
                  >
                    <Icon name="share-2" size={18} />
                    Share
                  </button>
                </div>
              </div>

              <ul className="trust-row">
                <li>
                  <Icon name="shield" size={18} />
                  {company.certification}
                </li>
                <li>
                  <Icon name="tool" size={18} />
                  Installation and service
                </li>
                <li>
                  <Icon name="pin" size={18} />
                  Guduvancheri, Chengalpattu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Centre Share Popup */}
      {shareOpen && (
        <div
          className="share-modal-backdrop"
          onClick={() => setShareOpen(false)}
        >
          <div
            className="share-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="share-popup__header">
              <div>
                <h3 id="share-title">Share this product</h3>
                <p>Share this product with your friends and customers.</p>
              </div>

              <button
                type="button"
                className="share-close"
                onClick={() => setShareOpen(false)}
                aria-label="Close share popup"
              >
                ×
              </button>
            </div>

            <div className="share-options">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${shareText} ${productUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option share-option--whatsapp"
              >
                <Icon name="whatsapp" size={20} />
                WhatsApp
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option share-option--facebook"
              >
                <span className="share-letter">f</span>
                Facebook
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option share-option--linkedin"
              >
                <span className="share-letter">in</span>
                LinkedIn
              </a>

              <a
                href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option share-option--telegram"
              >
                <span className="share-letter">➤</span>
                Telegram
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option share-option--x"
              >
                <span className="share-letter">𝕏</span>
                X (Twitter)
              </a>

              <a
                href={`mailto:?subject=${encodeURIComponent(
                  p.name
                )}&body=${encodeURIComponent(
                  `${shareText}\n\n${productUrl}`
                )}`}
                className="share-option share-option--email"
              >
                <Icon name="mail" size={20} />
                Email
              </a>
            </div>

            <div className="share-copy">
              <input
                type="text"
                value={productUrl}
                readOnly
                aria-label="Product page link"
              />

              <button
                type="button"
                onClick={handleCopyLink}
                className="copy-link-btn"
              >
                <Icon name="copy" size={16} />
                Copy Link
              </button>
            </div>

            {copied && (
              <p className="copied-message">
                <Icon name="check" size={16} />
                Link copied!
              </p>
            )}
          </div>
        </div>
      )}

      <section className="quick-sec">
        <div className="container">
          <div className="quick-specs">
            {info.specs.slice(0, 4).map(([k, v]) => (
              <div key={k} className="quick-spec">
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col two-col--top">
          <div>
            <h2>Product overview</h2>
            <p>{info.overview}</p>

            {info.suitable.length > 0 && (
              <>
                <h3>Suitable for</h3>
                <ul className="tick-list">
                  {info.suitable.map((s) => (
                    <li key={s}>
                      <Icon name="check" size={18} />
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="card pad">
            <h3>Specifications</h3>
            <table className="spec-table">
              <tbody>
                {info.specs.map(([k, v]) => (
                  <tr key={k}>
                    <th>{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
                <tr>
                  <th>Category</th>
                  <td>{p.category}</td>
                </tr>
              </tbody>
            </table>

            <p className="muted small">
              Exact specifications depend on the model. Contact us for the full details.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Key features</h2>
          </div>

          <div className="grid grid--4">
            {info.features.map((f) => (
              <div key={f} className="why">
                <span className="icon-badge">
                  <Icon name="check" size={22} />
                </span>
                <h3>{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col two-col--top">
          <div>
            <h2>{cat.stagesTitle}</h2>

            <ol className="steps">
              {cat.stages.map(([t, d], i) => (
                <li key={t}>
                  <span className="steps__num">{i + 1}</span>
                  <div>
                    <strong>{t}</strong>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="card pad">
            <h3>What you get with us</h3>

            <ul className="tick-list">
              {cat.included.map((s) => (
                <li key={s}>
                  <Icon name="check" size={18} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>

          {cat.faqs.map((f) => (
            <details key={f.q} className="faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section--alt" id="enquiry">
        <div className="container two-col two-col--top">
          <div>
            <span className="eyebrow">Product enquiry</span>
            <h2>Interested in {p.name}?</h2>

            <p>
              Talk to us by phone or WhatsApp, or send the form.
              It opens WhatsApp with your details and this product filled in.
            </p>

            <ul className="contact-list">
              <li>
                <Icon name="phone" />
                <span>
                  <a href={`tel:${company.phone1.tel}`}>
                    {company.phone1.display}
                  </a>{" "}
                  /{" "}
                  <a href={`tel:${company.phone2.tel}`}>
                    {company.phone2.display}
                  </a>
                </span>
              </li>

              <li>
                <Icon name="mail" />
                <a href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>

              <li>
                <Icon name="pin" />
                <span>{company.address.full}</span>
              </li>
            </ul>

            <div className="card__actions">
              <Button href={buildWhatsAppUrl(msg)} variant="green">
                <Icon name="whatsapp" size={18} />
                WhatsApp Us
              </Button>

              <Button href={`tel:${company.phone1.tel}`} variant="outline">
                <Icon name="phone" size={18} />
                Call Now
              </Button>
            </div>
          </div>

          <ContactForm key={p.id} defaultSubject={p.name} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>You may also like</h2>
          </div>

          <div className="grid grid--3">
            {related.map((r) => (
              <ProductCard key={r.id} product={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
