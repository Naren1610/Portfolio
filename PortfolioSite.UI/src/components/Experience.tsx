import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { USER_INFO } from '../constants';

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card"
      style={{
        position: 'relative',
        padding: '2rem',
        marginBottom: '2rem',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }} />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
      <h4 style={{ color: '#a5b4fc', fontSize: '1.1rem', marginBottom: '1rem' }}>{exp.company} &bull; {exp.duration}</h4>
      <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>{exp.description}</p>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" className="section container" ref={containerRef}>
      <motion.div style={{ y }}>
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Background</span>
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {USER_INFO.experience.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
