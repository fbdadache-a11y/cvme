import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="cta-section reveal">
      <div className="container">
        <h2>Ready to Transform Your University Experience?</h2>
        <p>Join a community of ambitious students. Let&apos;s grow together.</p>
        <a href="#faq" className="btn-cta">
          Become a Member Today
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
