
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { USER_INFO } from '../constants';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="section flex items-center justify-center" 
      style={{ minHeight: '100vh', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container flex items-center justify-between" style={{ gap: '4rem', flexWrap: 'wrap' }}>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: '1 1 400px' }}
        >
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm {USER_INFO.name.split(' ')[0]}
          </motion.h1>
          <motion.h2
            style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {USER_INFO.title}
          </motion.h2>
          <motion.p
            style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.6' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {USER_INFO.profile}
          </motion.p>
          
          <motion.div 
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#experience" className="glass" style={{ padding: '12px 24px', borderRadius: '8px', color: '#fff', fontWeight: 600 }}>
              View Background
            </a>
            <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" style={{ padding: '12px 24px', border: '1px solid var(--primary)', borderRadius: '8px', fontWeight: 600 }}>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', perspective: 1000 }}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1/1',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* The user picture */}
            <img 
              src="/profile.jpg" 
              alt={USER_INFO.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
