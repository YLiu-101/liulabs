import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter } from 'react-icons/fa';
import TechTag from '../components/TechTag';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [allTechs, setAllTechs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid');
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    // Simulate loading from an API
    setTimeout(() => {
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      
      // Extract unique tech stacks and categories
      const techs = [...new Set(projectsData.flatMap(project => project.technologies))];
      const cats = ['All', ...new Set(projectsData.map(project => project.category))];
      
      setAllTechs(techs);
      setCategories(cats);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedTech, selectedCategory, projects]);

  const filterProjects = () => {
    let filtered = [...projects];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply technology filter
    if (selectedTech.length > 0) {
      filtered = filtered.filter(project => 
        selectedTech.every(tech => project.technologies.includes(tech))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => 
        project.category === selectedCategory
      );
    }
    
    setFilteredProjects(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTechToggle = (tech) => {
    setSelectedTech(prev => 
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      <section className="projects-hero">
        <motion.div 
          className="projects-hero-content"
          style={{ opacity }}
        >
          <h1>Projects</h1>
          <p>Explore a collection of innovative technical projects and creative solutions</p>
        </motion.div>
      </section>

      <section className="projects-controls">
        <div className="search-bar">
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search projects by title or keyword..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div className="view-controls">
          <button 
            className={`view-toggle ${view === 'grid' ? 'active' : ''}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button 
            className={`view-toggle ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
        
        <button 
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </section>

      {showFilters && (
        <motion.section 
          className="filter-section"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="filter-column">
            <h3>Filter by Category</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-column">
            <h3>Filter by Technology</h3>
            <div className="tech-filters">
              {allTechs.map(tech => (
                <TechTag 
                  key={tech}
                  name={tech}
                  active={selectedTech.includes(tech)}
                  onClick={() => handleTechToggle(tech)}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <section className="projects-section">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : filteredProjects.length > 0 ? (
          <motion.div 
            className={`projects-${view}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className={`project-card ${view === 'list' ? 'list-item' : ''}`}
                variants={itemVariants}
              >
                <div 
                  className="project-thumbnail" 
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                >
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <span 
                    className="project-category"
                    onClick={() => handleCategoryChange(project.category)}
                  >
                    {project.category}
                  </span>
                  
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <TechTag 
                        key={tech} 
                        name={tech}
                        mini={true}
                        onClick={() => handleTechToggle(tech)}
                      />
                    ))}
                  </div>
                  
                  <Link to={`/projects/${project.id}`} className="project-details-link">
                    View Project Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
            <button onClick={() => {
              setSearchTerm('');
              setSelectedTech([]);
              setSelectedCategory('All');
            }} className="button secondary">
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default Projects;