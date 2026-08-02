const TEAM = [
  { initials: 'DF', name: 'Dadache Fouad', role: 'President' },
  { initials: 'HY', name: 'Houssem Yettou', role: 'Vice President' },
  { initials: 'AB', name: 'Abdelilah', role: 'Team Lead' },
  { initials: 'RA', name: 'Rahal Akram', role: 'Team Lead' },
];

export default function TeamSection() {
  return (
    <section className="section section-alt" id="team">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow reveal">Who Runs It</div>
          <h2 className="section-title reveal reveal-delay-1">Meet the Team</h2>
          <p className="section-desc reveal reveal-delay-2">
            A small student board keeping things running — more roles open
            every semester.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div className={`team-card reveal reveal-delay-${i}`} key={member.initials}>
              <div className="team-avatar">{member.initials}</div>
              <h4>{member.name}</h4>
              <span className="team-role">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
