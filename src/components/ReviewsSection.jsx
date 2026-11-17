
import { googleLinks, reviewSummary, reviews } from "../data/reviews";
import "./ReviewsSection.css";

function Stars({ count = 5 }) {
  return (
    <div className="pro-stars" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span>{"★".repeat(5 - count)}</span>
    </div>
  );
}

export default function ReviewsSection({ page = false }) {
  const Title = page ? "h1" : "h2";
  return (
    <section className="pro-reviews">

      {/* Hero */}
      <section className="pro-reviews-hero">
        <div className="pro-reviews-container">
          <div className="pro-reviews-hero-grid">

            <div className="pro-reviews-intro">
              <span className="pro-reviews-eyebrow">
                CUSTOMER EXPERIENCES
              </span>

              <Title>
                Your Trust.
                <br />
                <span>Our Commitment.</span>
              </Title>

              <p>
                We believe great service speaks for itself.
                Discover what customers say about their
                experience with Aqua Care Solutions.
              </p>

              <a href="#customer-reviews" className="pro-reviews-primary">
                Explore Customer Reviews <span>↓</span>
              </a>

              <div className="pro-reviews-trust">
                <span>✓ ISO 9001:2015 Certified</span>
                <span>✓ Sales & Service</span>
              </div>
            </div>

            <div className="pro-rating-panel">
              <div className="pro-google-heading">
                <span className="pro-google-logo">G</span>
                <span>Google Customer Reviews</span>
              </div>

              <div className="pro-rating-number">
                {Number(reviewSummary.rating || 0).toFixed(1)}
              </div>

              <Stars count={Math.round(reviewSummary.rating || 5)} />

              <p className="pro-rating-description">
                Based on {reviewSummary.count || reviews.length} customer reviews
              </p>

              <div className="pro-rating-divider" />

              <div className="pro-rating-bottom">
                <div>
                  <strong>{reviewSummary.count || reviews.length}</strong>
                  <span>Customer Reviews</span>
                </div>
                <div>
                  <strong>★★★★★</strong>
                  <span>Customer Rating</span>
                </div>
              </div>

              <div className="pro-water-decoration" />
            </div>

          </div>
        </div>
      </section>

      {/* Review introduction */}
      <section className="pro-reviews-content" id="customer-reviews">
        <div className="pro-reviews-container">

          <div className="pro-reviews-heading">
            <span className="pro-reviews-eyebrow">
              WORDS FROM OUR CUSTOMERS
            </span>
            <h2>Real Experiences. Real Satisfaction.</h2>
            <p>
              Thank you to our customers for sharing their
              experiences and trusting our services.
            </p>
          </div>

          <div className="pro-reviews-grid">
            {reviews.map((review, index) => (
              <article className="pro-review-card" key={review.name + index}>

                <div className="pro-review-top">
                  <div className="pro-review-avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="pro-review-customer">
                    <h3>{review.name}</h3>
                    <span>{review.when}</span>
                  </div>

                  <span className="pro-review-google">G</span>
                </div>

                <Stars count={review.rating} />

                <div className="pro-review-quote">“</div>

                <p className="pro-review-text">
                  {review.text}
                </p>

                <div className="pro-review-bottom">
                  <span>Google customer review</span>
                  <span className="pro-review-check">★</span>
                </div>

              </article>
            ))}
          </div>

          {/* Google CTA */}
          <div className="pro-google-cta">
            <div className="pro-google-cta-icon">G</div>

            <div className="pro-google-cta-text">
              <h2>Have you experienced our service?</h2>
              <p>
                Your feedback matters. Share your experience
                and help others discover reliable water solutions.
              </p>
            </div>

            <a
              href={googleLinks.all}
              target="_blank"
              rel="noopener noreferrer"
              className="pro-google-button"
            >
              View Google Reviews <span>↗</span>
            </a>
          </div>

        </div>
      </section>

    </section>
  );
}
