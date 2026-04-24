import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="logo-icon">YO</span>
          <span className="logo-text">Young OG</span>
        </a>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">Join Now</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="mobile-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="#contact" className="nav-cta mobile-cta" onClick={() => setMenuOpen(false)}>
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
