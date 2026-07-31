"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const projects = [
  {
    title: "Econovo Club",
    description:
      "A student initiative focused on economics, technology, entrepreneurship and practical skills.",
    tag: "Leadership / Community",
  },
  {
    title: "Presentation Design",
    description:
      "Creating clean and professional presentation systems for academic and business projects.",
    tag: "Design",
  },
  {
    title: "Personal Website",
    description:
      "A minimalist portfolio built with Next.js and modern web technologies.",
    tag: "Development",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <p className="section-label">
            SELECTED WORK
          </p>

          <h2 className="section-title">
            Projects
          </h2>


          <div className="projects-grid">

            {projects.map((project) => (

              <article
                key={project.title}
                className="project-card"
              >

                <p className="project-tag">
                  {project.tag}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </article>

            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
}
