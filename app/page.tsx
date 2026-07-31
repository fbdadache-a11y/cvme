export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Portfolio / CV</p>
        <h1>Fouad Dadache</h1>
        <p className="subtitle">
          Management student, presentation designer, and founder of Econovo Club.
        </p>

        <div className="actions">
          <a className="button primary" href="mailto:you@example.com">
            Contact me
          </a>
          <a className="button secondary" href="#projects">
            View projects
          </a>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>About</h2>
          <p>
            I build simple brand identities, clean presentations, and small web
            projects with a practical, student-first style.
          </p>
        </article>

        <article className="card">
          <h2>Skills</h2>
          <ul>
            <li>Canva</li>
            <li>PowerPoint</li>
            <li>Branding</li>
            <li>GitHub</li>
            <li>Next.js</li>
          </ul>
        </article>

        <article className="card" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Econovo Club</li>
            <li>Personal CV Site</li>
            <li>Presentation Design</li>
          </ul>
        </article>

        <article className="card">
          <h2>Contact</h2>
          <p>Add your email, GitHub, LinkedIn, and CV PDF later.</p>
        </article>
      </section>
    </main>
  );
}
