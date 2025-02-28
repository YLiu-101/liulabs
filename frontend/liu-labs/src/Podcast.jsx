import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaSearch, FaFilter, FaSpotify, 
  FaApple, FaYoutube, FaPlay, FaInfoCircle 
} from 'react-icons/fa';
import AudioPlayer from '../components/AudioPlayer';
import FilterDropdown from '../components/FilterDropdown';
import CategoryTag from '../components/CategoryTag';
import { podcastData } from '../data/podcastData';
import '../styles/Podcast.css';

const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API
    setTimeout(() => {
      setEpisodes(podcastData);
      setFilteredEpisodes(podcastData);
      
      // Extract unique categories
      const uniqueCategories = ['All', ...new Set(podcastData.flatMap(ep => ep.categories))];
      setCategories(uniqueCategories);
      
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    filterEpisodes();
  }, [searchTerm, selectedCategory, episodes]);

  const filterEpisodes = () => {
    let filtered = [...episodes];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(ep => 
        ep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ep.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ep.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(ep => 
        ep.categories.includes(selectedCategory)
      );
    }
    
    setFilteredEpisodes(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePlayEpisode = (episode) => {
    setCurrentlyPlaying(episode);
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
      className="podcast-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="podcast-hero">
        <div className="podcast-hero-content">
          <h1>The LiuLabs Podcast</h1>
          <p>In-depth conversations with world-class thinkers, creators, and innovators</p>
          
          <div className="podcast-platforms">
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="platform-link">
              <FaSpotify /> Spotify
            </a>
            <a href="https://apple.com/podcasts" target="_blank" rel="noopener noreferrer" className="platform-link">
              <FaApple /> Apple Podcasts
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="platform-link">
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="podcast-controls">
        <div className="search-bar">
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search episodes by title, guest or keyword..." 
            value={searchTerm}
            onChange={handleSearch}
          />
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
          <h3>Filter by Category</h3>
          <div className="category-filters">
            {categories.map(category => (
              <CategoryTag 
                key={category}
                name={category}
                active={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
              />
            ))}
          </div>
        </motion.section>
      )}

      {currentlyPlaying && (
        <motion.div 
          className="sticky-player"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <AudioPlayer episode={currentlyPlaying} onClose={() => setCurrentlyPlaying(null)} />
        </motion.div>
      )}

      <section className="episodes-section">
        <h2>Browse Episodes</h2>
        
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading episodes...</p>
          </div>
        ) : filteredEpisodes.length > 0 ? (
          <motion.div 
            className="episodes-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEpisodes.map((episode) => (
              <motion.div 
                key={episode.id} 
                className="episode-card"
                variants={itemVariants}
              >
                <div className="episode-thumbnail" style={{ backgroundImage: `url(${episode.thumbnail})` }}>
                  <div className="episode-number">#{episode.number}</div>
                  <button 
                    className="play-button"
                    onClick={() => handlePlayEpisode(episode)}
                  >
                    <FaPlay />
                  </button>
                </div>
                
                <div className="episode-content">
                  <div className="episode-meta">
                    <span className="episode-date">{episode.date}</span>
                    <span className="episode-duration">{episode.duration}</span>
                  </div>
                  
                  <h3 className="episode-title">{episode.title}</h3>
                  <p className="episode-guest">with <strong>{episode.guest}</strong></p>
                  
                  <div className="episode-categories">
                    {episode.categories.map(category => (
                      <span 
                        key={category} 
                        className="category-tag"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <p className="episode-excerpt">{episode.description.substring(0, 120)}...</p>
                  
                  <div className="episode-actions">
                    <button 
                      className="play-action"
                      onClick={() => handlePlayEpisode(episode)}
                    >
                      <FaPlay /> Play
                    </button>
                    <Link to={`/podcast/${episode.id}`} className="info-action">
                      <FaInfoCircle /> Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="no-results">
            <h3>No episodes found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
            <button onClick={() => {
              setSearchTerm('');
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

export default Podcast;