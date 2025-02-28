import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeadphones, FaCode } from 'react-icons/fa';
import { RiAwardLine } from 'react-icons/ri';
import ParticleBackground from '../components/ParticleBackground';
import FeaturedProjects from '../components/FeaturedProjects';
import LatestPodcasts from '../components/LatestPodcasts';
import Newsletter from '../components/Newsletter';
import '../styles/Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      
      <section className="hero">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.h1 variants={itemVariants} className="glitch-text">
            <span aria-hidden="true">liulabs.tech</span>
            liulabs.tech
            <span aria-hidden="true">liulabs.tech</span>
          </motion.h1>
          <motion.h2 variants={itemVariants}>
            Exploring the Intersection of <span className="highlight">Technology</span>, 
            <span className="highlight"> Ideas</span>, and 
            <span className="highlight"> Innovation</span>
          </motion.h2>
          <motion.p variants={itemVariants}>
            Building cutting-edge solutions and hosting conversations with world-class thinkers
          </motion.p>
          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="/projects" className="button primary">
              View Projects <FaArrowRight />
            </Link>
            <Link to="/podcast" className="button secondary">
              Listen to Podcast <FaHeadphones />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="stats">
        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <FaCode className="stat-icon" />
            <h3>25+</h3>
            <p>Technical Projects</p>
          </div>
          <div className="stat-item">
            <FaHeadphones className="stat-icon" />
            <h3>100+</h3>
            <p>Podcast Episodes</p>
          </div>
          <div className="stat-item">
            <RiAwardLine className="stat-icon" />
            <h3>12+</h3>
            <p>Industry Awards</p>
          </div>
        </motion.div>
      </section>

      <FeaturedProjects />
      <LatestPodcasts />
      
      <section className="cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Want to collaborate?</h2>
          <p>Let's build something amazing together</p>
          <Link to="/contact" className="button primary">Get in Touch <FaArrowRight /></Link>
        </motion.div>
      </section>

      <Newsletter />
    </motion.div>
  );
};

export default Home;