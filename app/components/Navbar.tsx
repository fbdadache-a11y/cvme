"use client";

import Container from "./Container";

export default function Navbar() {
  return (
    <header className="navbar">
      <Container>

        <nav className="navbar-inner">

          <a className="logo" href="/">
            Fouad.
          </a>

          <div className="nav-links">

            <a href="#work">
              Work
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </nav>

      </Container>
    </header>
  );
}
