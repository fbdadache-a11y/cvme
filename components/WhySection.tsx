import { BookOpen, Hammer, Users, TrendingUp } from 'lucide-react';

const CARDS = [
  {
    icon: BookOpen,
    title: 'Learn',
    desc: 'Explore economics and business concepts outside the lecture hall, taught in plain language.',
  },
  {
    icon: Hammer,
    title: 'Build',
    desc: "Turn ideas into real projects and small ventures alongside people who'll actually build with you.",
  },
  {
    icon: Users,
    title: 'Connect',
    desc: 'Meet students across majors and professionals who can open doors after graduation.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    desc: 'Practice the soft and hard skills that make a strong CV and a stronger mindset.',
  },
];

export default function WhySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">Why Econovo</div>
          <h2 className="section-title reveal reveal-delay-1">
            Four Reasons Students Stay
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            This is what membership actually looks like, week to week.
          </p>
        </div>
        <div className="why-grid">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div className={`why-card reveal reveal-delay-${i}`} key={card.title}>
                <div className="why-icon">
                  <Icon size={20} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
