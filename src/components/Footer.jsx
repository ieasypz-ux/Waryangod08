import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">YO</span>
              <span className="logo-text">Young OG</span>
            </div>
            <p className="footer-tagline">
              Learn skills that actually pay you. Founded by Jhonny.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Platform</h4>
              <a href="#skills">Skill Tracks</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Join Now</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Jhonny</a>
              <a href="#about">Our Mission</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Young OG. All rights reserved.</p>
          <p className="footer-made">Built with passion by Jhonny</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
