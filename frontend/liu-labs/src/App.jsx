import React, { useState, useEffect } from 'react';

const LiuLabsLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: "Neural Networks Architecture",
      description: "Advanced neural network design for natural language processing applications.",
      tags: ["AI", "Machine Learning", "NLP"],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: 2,
      title: "Quantum Computing Interface",
      description: "Interface design for quantum computing operations and visualizations.",
      tags: ["Quantum", "UI/UX", "Data Visualization"],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: 3,
      title: "Blockchain Data Structure",
      description: "Innovative blockchain architecture for secure distributed systems.",
      tags: ["Blockchain", "Security", "Distributed Systems"],
      imageUrl: "/api/placeholder/500/300"
    }
  ];

  // Sample data for podcast episodes
  const podcastEpisodes = [
    {
      id: 1,
      title: "The Future of AI with Dr. Jane Smith",
      guest: "Dr. Jane Smith",
      description: "Discussing the ethical implications and future directions of artificial intelligence research.",
      date: "February 15, 2025",
      duration: "54:32",
      imageUrl: "/api/placeholder/300/300"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs with Prof. Alex Johnson",
      guest: "Prof. Alex Johnson",
      description: "Exploring recent advances in quantum computing and their potential applications.",
      date: "January 28, 2025",
      duration: "62:15",
      imageUrl: "/api/placeholder/300/300"
    },
    {
      id: 3,
      title: "Sustainable Technology with Sarah Chen",
      guest: "Sarah Chen",
      description: "How technology can drive environmental sustainability and address climate challenges.",
      date: "January 10, 2025",
      duration: "47:08",
      imageUrl: "/api/placeholder/300/300"
    }
  ];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'podcast', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-400">LiuLabs<span className="text-white">.tech</span></a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Projects', 'Podcast', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {['Home', 'Projects', 'Podcast', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 hover:bg-gray-700 rounded transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovation <span className="text-blue-400">&</span> Conversation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Exploring the frontiers of technology through cutting-edge projects and insightful discussions with world-class individuals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Explore Projects
            </a>
            <a href="#podcast" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-8 rounded-full transition-colors">
              Listen to Podcast
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Exploring the boundaries of what's possible through research and implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded-full transition-colors">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Podcast Episodes</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Conversations with world-class individuals exploring ideas at the frontier of innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcastEpisodes.map((episode) => (
              <div key={episode.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img src={episode.imageUrl} alt={episode.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <button className="absolute bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                  <span className="absolute bottom-4 right-4 bg-gray-900/80 text-white text-sm px-3 py-1 rounded-full">
                    {episode.duration}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-blue-400 text-sm mb-2">{episode.date}</div>
                  <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">with {episode.guest}</p>
                  <p className="text-gray-300 mb-4">{episode.description}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded-full transition-colors">
              All Episodes
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img src="/api/placeholder/600/600" alt="About LiuLabs" className="rounded-lg shadow-xl max-w-full md:max-w-md mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About LiuLabs</h2>
              <div className="w-16 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-300 mb-6">
                LiuLabs is at the intersection of cutting-edge technology and meaningful conversation. 
                We're passionate about exploring the frontiers of what's possible through technical innovation 
                and thoughtful discussion with leading thinkers.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to create transformative technology while sharing knowledge and insights 
                that inspire others to push boundaries. Through our projects and podcast, we aim to 
                bridge the gap between complex technical concepts and their real-world impact.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-700 p-4 rounded-lg text-center flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300">Technical Projects</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Podcast Episodes</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3K+</div>
                  <div className="text-gray-300">Monthly Listeners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Have a question, proposal, or just want to say hello? Reach out to us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
            </div>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors w-full">
              Send Message
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-gray-400">contact@liulabs.tech</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Social</h3>
              <div className="flex justify-center space-x-3 mt-2">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-xl font-bold text-blue-400">LiuLabs<span className="text-white">.tech</span></a>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LiuLabs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LiuLabsLanding;