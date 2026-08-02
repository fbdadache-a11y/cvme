'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#pillars', label: 'Focus' },
  { href: '#journey', label: 'Journey' },
  { href: '#team', label: 'Team' },
  { href: '#events', label: 'Events' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
  }, [drawerOpen]);

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <img
              src="https://i.postimg.cc/vBCdy1F4/copilot-image-1784613842249.png"
              alt="Econovo logo"
            />
            <div>
              <span>ECONOVO</span>
              <small>University Club</small>
            </div>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <ThemeToggle />
            <a href="#" className="btn-sm-outline">
              Sign In
            </a>
            <a href="#faq" className="btn-primary nav-join-btn">
              Join Now
              <ArrowRight size={15} />
            </a>
            <button
              className={`hamburger ${drawerOpen ? 'open' : ''}`}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeDrawer}>
                {link.label === 'About'
                  ? 'About Us'
                  : link.label === 'Focus'
                  ? 'Our Focus'
                  : link.label === 'Journey'
                  ? 'The Journey'
                  : link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <a href="#" className="btn-outline" onClick={closeDrawer}>
            Sign In
          </a>
          <a href="#faq" className="btn-primary" onClick={closeDrawer}>
            Join Now
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </>
  );
}
