const PILLARS = [
  {
    num: '01',
    title: 'Economics',
    desc: 'Learn beyond the classroom. We dissect how global forces and local markets actually work.',
  },
  {
    num: '02',
    title: 'Business',
    desc: 'Acquire real management skills. We analyze case studies and build actionable strategies.',
  },
  {
    num: '03',
    title: 'Innovation',
    desc: 'Transform creative ideas into practical projects. Entrepreneurship is about execution.',
  },
  {
    num: '04',
    title: 'FinTech',
    desc: 'Explore the future of finance. Understand blockchain, digital banking, and modern tech.',
  },
];

export default function PillarsSection() {
  return (
    <section className="section section-alt" id="pillars">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">What We Do</div>
          <h2 className="section-title reveal reveal-delay-1">
            Our Core Focus Areas
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Through workshops, projects, and discussions, we help you master
            these four pillars.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((pillar, i) => (
            <div className={`pillar-card reveal reveal-delay-${i}`} key={pillar.num}>
              <span className="pillar-num">{pillar.num}</span>
              <div className="pillar-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
