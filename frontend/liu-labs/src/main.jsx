import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
// import PodcastPage from './pages/PodcastPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/podcast" element={<PodcastPage />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
)