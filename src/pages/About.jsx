import { motion } from 'framer-motion';
import AboutContent from '../components/AboutContent';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <motion.div 
      className="about-page-container glass-panel animate-fade-in"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-page-header">
        <h1>About me</h1>
      </div>
      <AboutContent />
    </motion.div>
  );
};

export default About;
