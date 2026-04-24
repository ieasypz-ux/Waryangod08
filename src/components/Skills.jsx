import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import './Skills.css';

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'tech', label: 'Tech' },
  { id: 'business', label: 'Business' },
  { id: 'creative', label: 'Creative' },
];

const skills = [
  {
    title: 'Web Development',
    category: 'tech',
    desc: 'Build websites & apps with React, Node.js, and modern frameworks.',
    earning: '$60-150/hr',
    icon: '💻',
    color: '#6C3BF5',
  },
  {
    title: 'UI/UX Design',
    category: 'creative',
    desc: 'Design stunning interfaces that users love. Figma, prototyping & more.',
    earning: '$50-120/hr',
    icon: '🎨',
    color: '#EC4899',
  },
  {
    title: 'Digital Marketing',
    category: 'business',
    desc: 'Master social media, SEO, and paid ads to grow any brand.',
    earning: '$40-100/hr',
    icon: '📈',
    color: '#F59E0B',
  },
  {
    title: 'Video Editing',
    category: 'creative',
    desc: 'Create scroll-stopping content for YouTube, TikTok & Instagram.',
    earning: '$35-80/hr',
    icon: '🎬',
    color: '#10B981',
  },
  {
    title: 'Copywriting',
    category: 'business',
    desc: 'Write words that sell. Email, landing pages, ads & brand voice.',
    earning: '$45-100/hr',
    icon: '✍️',
    color: '#8B5CF6',
  },
  {
    title: 'AI & Automation',
    category: 'tech',
    desc: 'Leverage AI tools to 10x your productivity and build smart solutions.',
    earning: '$70-200/hr',
    icon: '🤖',
    color: '#06B6D4',
  },
];

function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView(0.1);

  const filtered = activeFilter === 'all'
    ? skills
    : skills.filter(s => s.category === activeFilter);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Skill Tracks</span>
          <h2 className="section-title">
            Skills That <span className="gradient-text">Pay the Bills</span>
          </h2>
          <p className="section-desc">
            Every skill track is designed around market demand. Learn what employers
            and clients actually pay for.
          </p>
        </motion.div>

        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="skills-grid">
          <AnimatePresence mode="wait">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.title}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                layout
              >
                <div className="skill-card-header">
                  <span className="skill-icon" style={{ background: `${skill.color}20` }}>
                    {skill.icon}
                  </span>
                  <span className="skill-earning" style={{ color: skill.color }}>
                    {skill.earning}
                  </span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
                <div className="skill-card-footer">
                  <span className="skill-tag" style={{ borderColor: `${skill.color}40`, color: skill.color }}>
                    {skill.category}
                  </span>
                  <a href="#contact" className="skill-link">
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;
