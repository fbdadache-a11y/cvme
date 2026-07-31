/* ==========================================
   Sections
========================================== */

.section {
  padding: 120px 0;
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 18px;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 64px;
}


/* ==========================================
   Projects
========================================== */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius-lg);

  padding: 32px;

  transition:
    transform .35s ease,
    border-color .35s ease,
    box-shadow .35s ease;
}

.project-card:hover {
  transform: translateY(-8px);

  border-color: rgba(14,42,36,.25);

  box-shadow:
    0 18px 45px rgba(0,0,0,.08);
}

.project-tag {
  display: inline-block;

  margin-bottom: 18px;

  padding: 6px 12px;

  border-radius: 999px;

  background: rgba(14,42,36,.08);

  color: var(--accent);

  font-size: .8rem;

  font-weight: 600;
}

.project-card h3 {
  font-size: 1.8rem;

  margin-bottom: 16px;

  letter-spacing: -.04em;
}

.project-card p {
  color: var(--muted);

  line-height: 1.8;
}


/* ==========================================
   Responsive
========================================== */

@media (max-width:1000px){

  .projects-grid{
    grid-template-columns:1fr;
  }

}
