const ITEMS = [
  'Mohamed El Bachir El Ibrahimi University',
  'Economics',
  'Business',
  'Innovation & FinTech',
  'Student-Led',
  'Bordj Bou Arreridj, Algeria',
  'Open to All Majors',
];

export default function TrustBar() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="trust-bar reveal" id="about">
      <div className="trust-bar-inner container">
        <span className="trust-label">Affiliated with</span>
        <div className="trust-track-wrap">
          <div className="trust-track">
            {doubled.map((item, i) => (
              <span className="trust-item" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
