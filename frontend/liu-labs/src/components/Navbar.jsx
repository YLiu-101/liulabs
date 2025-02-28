import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(location.pathname);
    // Close mobile menu when navigating
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/podcast', label: 'Podcast' },
    { to: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const variants = {
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-highlight">liu</span>labs
            <span className="logo-highlight">.tech</span>
          </div>
        </Link>

        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link ${activeLink === link.to ? 'active' : ''}`}
                >
                  {link.label}
                  {activeLink === link.to && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              <div className="mobile-menu-header">
                <div className="logo-text mobile">
                  <span className="logo-highlight">liu</span>labs
                  <span className="logo-highlight">.tech</span>
                </div>
                <button 
                  className="close-menu-button"
                  onClick={toggleMenu}
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="mobile-nav-links">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.to}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.to}
                      className={`mobile-nav-link ${activeLink === link.to ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                      <FaArrowRight className="link-icon" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-cta">
                <Link to="/contact" className="button primary" onClick={toggleMenu}>
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;