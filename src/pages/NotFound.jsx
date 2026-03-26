import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import { FaSpaceShuttle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <motion.div 
        className="notfound-content glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [-45, -45]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="notfound-icon-wrapper"
        >
          <FaSpaceShuttle className="notfound-icon" />
        </motion.div>
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found.</h2>
        <p className="error-description">
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link to="/" className="back-btn">
          <FiHome />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
