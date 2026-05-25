"use client";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            alt="Professional Contact"
          />
        </div>

        <div className="contact-content">
          <h2 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h2>

          <div className="contact-info-wrapper">
            <div className="contact-info-box">
              <h3>🏢 USA Office</h3>
              <p>
                24155 Drake Road, Suite 206, Farmington, MI 48335-3168, United
                States
              </p>
              <a href="tel:+19476224462">+1-947-6 ABHIMA</a>
              <a href="tel:+19476224462">+1-947-622-4462</a>
            </div>

            <div className="contact-info-box">
              <h3>🏢 India Office</h3>
              <p>
                Sri Venkata Sai Complex, 1-62/33/34 First Floor, Opp to Echoes
                Cafe, Kavuri Hills, Madhapur, Hyderabad 500033, India
              </p>
              <a href="tel:+914045138787">(040) 4513 8787</a>
              <a href="tel:+919063585823">+91 90635 85823</a>
            </div>
          </div>

          <div className="email-section">
            <h3>✉️ Email Us</h3>
            <a href="mailto:contact@abhimatech.com">contact@abhimatech.com</a>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
