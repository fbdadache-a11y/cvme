import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>ECONOVO</h3>
            <p>
              A university club connecting economics, business, innovation,
              and practical skills. Turning students into problem solvers.
            </p>
            <div className="social-row">
              <a
                href="https://www.instagram.com/econovo.club"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Instagram size={15} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1BmnaFPMX7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <Facebook size={15} />
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#pillars">Our Focus</a>
              </li>
              <li>
                <a href="#journey">The Journey</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Location</h4>
            <ul className="footer-links">
              <li>Mohamed El Bachir El Ibrahimi University</li>
              <li>Bordj Bou Arreridj, Algeria</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-mono">
            © {year} ECONOVO — All rights reserved.
          </span>
          <span>Made with care by the Econovo team</span>
        </div>
      </div>
    </footer>
  );
}
