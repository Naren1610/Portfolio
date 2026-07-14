
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="glass flex items-center justify-between"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '1200px',
        padding: '16px 32px',
        borderRadius: '100px',
        zIndex: 100,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
        NC<span style={{ color: 'var(--primary)' }}>.</span>
      </div>
      
      <div className="flex gap-8" style={{ fontWeight: 500 }}>
        <motion.a href="#home" whileHover={{ scale: 1.05, color: 'var(--primary)' }}>Home</motion.a>
        <motion.a href="#experience" whileHover={{ scale: 1.05, color: 'var(--primary)' }}>Background</motion.a>
        <motion.a href="#projects" whileHover={{ scale: 1.05, color: 'var(--primary)' }}>Projects</motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
