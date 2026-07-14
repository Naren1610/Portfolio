import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="projects" className="section container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Projects</span>
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
          More projects coming soon!
        </p>
        
        <div 
          className="glass-card flex items-center justify-center flex-col" 
          style={{ minHeight: '300px', position: 'relative', overflow: 'hidden' }}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Effect */}
          <div
            style={{
              position: 'absolute',
              top: mousePos.y - 150,
              left: mousePos.x - 150,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none',
              borderRadius: '50%',
              transition: 'opacity 0.3s ease',
            }}
          />
          
          <h3 style={{ zIndex: 1 }}>Watch this space.</h3>
          <p style={{ zIndex: 1, maxWidth: '400px', textAlign: 'center' }}>
            I am currently working on extracting and formatting my previous artifacts into this portfolio.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
