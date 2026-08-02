import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">University Club · Bordj Bou Arreridj</div>
          <h1>
            Turning Students Into <em>Problem Solvers.</em>
          </h1>
          <p className="hero-desc">
            We connect economics, business, innovation, and practical skills — so
            you can bridge the gap between academic theory and real-world impact.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">Economics</span>
            <span className="hero-tag">Business</span>
            <span className="hero-tag">Innovation</span>
            <span className="hero-tag">FinTech</span>
          </div>
          <div className="hero-actions">
            <a href="#faq" className="btn-primary">
              Become a Member
              <ArrowRight size={15} />
            </a>
            <a href="#about" className="btn-outline">
              Explore Club
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-floating-tag">
            <Sparkles size={13} />
            Innovation Lab
          </div>
          <div className="hero-card">
            <div className="hero-logo-wrap">
              <img
                src="https://i.postimg.cc/vBCdy1F4/copilot-image-1784613842249.png"
                alt="Econovo logo"
              />
            </div>
            <h3>Econovo Club</h3>
            <p>
              A student-led community turning economic curiosity into
              real-world problem-solving skills.
            </p>
            <div className="hero-stat-row">
              <div className="hero-stat">
                <strong>2026</strong>
                <span>Founded</span>
              </div>
              <div className="hero-stat">
                <strong>4</strong>
                <span>Pillars</span>
              </div>
              <div className="hero-stat">
                <strong>100%</strong>
                <span>Student-Led</span>
              </div>
            </div>
            <div className="hero-badge">
              <CheckCircle2 size={14} />
              Real-world impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
