import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiBriefcase, FiLayers, FiCode } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/', icon: <FiHome /> },
  { name: 'Projects', path: '/projects', icon: <FiBriefcase /> },
  { name: 'Experience', path: '/experience', icon: <FiLayers /> },
  { name: 'Stack', path: '/stack', icon: <FiCode /> }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <span className="logo-brace">{`{`}</span>
            Math
            <span className="logo-brace">{`}`}</span>
          </NavLink>

          <div className="nav-links desktop-only">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <button className="mobile-toggle mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu mobile-only glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="icon-wrapper">{item.icon}</div>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
