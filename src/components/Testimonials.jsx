import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alex R.',
    role: 'Freelance Developer',
    text: 'Young OG taught me to code in 3 months. Now I\'m making $5K/month freelancing. Jhonny\'s teaching style is unmatched.',
    avatar: 'AR',
    color: '#6C3BF5',
  },
  {
    name: 'Maya S.',
    role: 'UI/UX Designer',
    text: 'I went from zero design knowledge to landing a remote job at a startup. The community here is fire.',
    avatar: 'MS',
    color: '#EC4899',
  },
  {
    name: 'David K.',
    role: 'Content Creator',
    text: 'The video editing track literally changed my life. I now edit for YouTubers with millions of subs.',
    avatar: 'DK',
    color: '#F59E0B',
  },
];

function Testimonials() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Real Stories, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="section-desc">
            Hear from students who transformed their lives through Young OG.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: `${t.color}30`, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
