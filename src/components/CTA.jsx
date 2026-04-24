import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './CTA.css';

function CTA() {
  const [ref, inView] = useInView(0.3);

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="cta-container">
        <div className="cta-glow" />
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Ready to Level Up?</span>
          <h2 className="cta-title">
            Stop Scrolling.
            <br />
            <span className="gradient-text">Start Earning.</span>
          </h2>
          <p className="cta-desc">
            Join 2,500+ students already building their future with Young OG.
            Your journey to financial freedom starts with one skill.
          </p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="cta-input"
              required
            />
            <button type="submit" className="btn-primary cta-btn">
              <span>Join Young OG</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          <p className="cta-note">Free to join. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
