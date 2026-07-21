import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { USER_INFO } from '../constants';

const ArtifactCard = ({ artifact, index }: { artifact: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="glass-card"
      style={{
        marginBottom: '2rem',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      <div className="flex justify-between items-center">
        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-color)' }}>{artifact.title}</h3>
        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4 style={{ color: '#a5b4fc', marginBottom: '0.2rem' }}>Objective</h4>
            <p style={{ margin: 0, color: '#d1d5db' }}>{artifact.objective}</p>
          </div>
          <div>
            <h4 style={{ color: '#a5b4fc', marginBottom: '0.2rem' }}>Process</h4>
            <p style={{ margin: 0, color: '#d1d5db' }}>{artifact.process}</p>
          </div>
          <div>
            <h4 style={{ color: '#a5b4fc', marginBottom: '0.2rem' }}>Tools</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {artifact.tools.map((tool: string, i: number) => (
                <span key={i} style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', border: '1px solid rgba(99, 102, 241, 0.5)' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#a5b4fc', marginBottom: '0.2rem' }}>Value Proposition</h4>
            <p style={{ margin: 0, color: '#d1d5db' }}>{artifact.valueProposition}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Artifacts</span>
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: '#9ca3af' }}>
          Demonstrating my work, process, and value.
        </p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {USER_INFO.artifacts?.map((artifact, idx) => (
            <ArtifactCard key={idx} artifact={artifact} index={idx} />
          ))}
          {(!USER_INFO.artifacts || USER_INFO.artifacts.length === 0) && (
            <p style={{ textAlign: 'center' }}>More projects coming soon!</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
