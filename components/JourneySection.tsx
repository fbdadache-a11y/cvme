const STEPS = [
  {
    num: '01',
    title: 'Curiosity & Onboarding',
    desc: 'Attend our welcoming sessions, meet the team, and discover which fields ignite your passion — no pressure.',
  },
  {
    num: '02',
    title: 'Skill-Building Workshops',
    desc: 'Hands-on workshops led by seniors and experts. No boring lectures — only interactive learning.',
  },
  {
    num: '03',
    title: 'Collaborative Projects',
    desc: "Work in teams to solve real problems. Apply what you've learned in a safe, supportive environment.",
  },
  {
    num: '04',
    title: 'Becoming a Problem Solver',
    desc: 'Graduate from learner to doer. Build your portfolio, expand your network, prepare for your career.',
  },
];

export default function JourneySection() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">How It Works</div>
          <h2 className="section-title reveal reveal-delay-1">
            Your Journey With Us
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            A clear path from a curious student to a confident problem solver.
          </p>
        </div>
        <div className="timeline">
          {STEPS.map((step, i) => (
            <div className={`timeline-step reveal reveal-delay-${i}`} key={step.num}>
              <div className="step-dot">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
