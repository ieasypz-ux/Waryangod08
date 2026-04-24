import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './About.css';

function About() {
  const [ref, inView] = useInView(0.2);

  const values = [
    {
      icon: '🎯',
      title: 'Real-World Focus',
      desc: 'Every skill we teach has direct market value. No theory without practice.',
    },
    {
      icon: '🚀',
      title: 'Learn by Doing',
      desc: 'Build real projects, earn real money. Our students start earning while learning.',
    },
    {
      icon: '🧠',
      title: 'Polymath Approach',
      desc: 'Jhonny believes in mastering multiple disciplines. That\'s the OG way.',
    },
    {
      icon: '💡',
      title: 'Community First',
      desc: 'Join a tribe of ambitious young creators who support and challenge each other.',
    },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Young OG</span>
          <h2 className="section-title">
            Built by a <span className="gradient-text">Polymath</span>,
            <br />for the Next Generation
          </h2>
          <p className="section-desc">
            Jhonny isn&apos;t just a founder — he&apos;s a creator, builder, and lifelong learner who
            has mastered skills across tech, business, and creative arts. Young OG is
            his mission to pass that knowledge to you.
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
