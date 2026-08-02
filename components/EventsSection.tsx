import { Calendar, Sparkles } from 'lucide-react';

const EVENTS = [
  {
    icon: Calendar,
    title: 'Workshop: Financial Literacy',
    desc: 'A hands-on introduction to budgeting, saving, and everyday financial decisions for university students.',
    date: 'Date: Coming Soon',
  },
  {
    icon: Sparkles,
    title: 'More Events Coming Soon',
    desc: "New workshops and sessions are being planned for this semester. Follow us so you don't miss the announcement.",
    date: 'Date: TBA',
  },
];

export default function EventsSection() {
  return (
    <section className="section" id="events">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">Upcoming</div>
          <h2 className="section-title reveal reveal-delay-1">
            Events &amp; Workshops
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            What&apos;s next on the Econovo calendar.
          </p>
        </div>
        <div className="events-grid">
          {EVENTS.map((event, i) => {
            const Icon = event.icon;
            return (
              <div className={`event-card reveal reveal-delay-${i}`} key={event.title}>
                <div className="event-icon">
                  <Icon size={20} />
                </div>
                <div className="event-body">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <div className="event-meta">
                    <span className="event-date">{event.date}</span>
                    <span className="event-badge">Open</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
