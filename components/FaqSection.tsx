'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Is the club only for Economics and Business students?',
    a: 'Absolutely not! Innovation requires diverse mindsets. Whether you study computer science, engineering, or literature, your unique perspective is valuable here.',
  },
  {
    q: 'What is the time commitment?',
    a: 'We respect your academic life. We usually hold 1–2 core sessions per week. You can involve yourself as deeply as your schedule allows.',
  },
  {
    q: 'Are there membership fees?',
    a: 'Our primary activities are free. We believe knowledge should be accessible. Some special external events might have nominal costs, which are always optional.',
  },
  {
    q: 'How can I join Econovo?',
    a: 'Tap "Become a Member" to fill our join form, or message us on Instagram — we\'ll add you to the next onboarding session.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">Got Questions?</div>
          <h2 className="section-title reveal reveal-delay-1">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`faq-item reveal reveal-delay-${i} ${isOpen ? 'open' : ''}`}
                key={faq.q}
              >
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {faq.q}
                  <span className="faq-chevron">
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div className="faq-body">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
