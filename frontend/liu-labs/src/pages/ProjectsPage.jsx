import React, { useState } from 'react'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'neurotech', name: 'Neurotech' },
    { id: 'quantum', name: 'Quantum Computing' }
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Neural Interface',
      description: 'An open-source brain-computer interface that translates neural signals into digital commands using machine learning algorithms.',
      category: 'neurotech',
      status: 'In Progress',
      image: 'neural-interface.jpg',
      tags: ['EEG', 'Machine Learning', 'Open Hardware'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Machine Learning Framework',
      description: 'A framework for implementing quantum machine learning algorithms that can run on both quantum simulators and actual quantum computers.',
      category: 'quantum',
      status: 'Completed',
      image: 'quantum-ml.jpg',
      tags: ['Quantum Computing', 'Machine Learning', 'Python'],
      featured: true
    },
    {
      id: 3,
      title: 'Autonomous Drone Swarm',
      description: 'A system for coordinating multiple autonomous drones to perform complex tasks collaboratively.',
      category: 'robotics',
      status: 'In Progress',
      image: 'drone-swarm.jpg',
      tags: ['Robotics', 'Computer Vision', 'Swarm Intelligence'],
      featured: false
    },
    {
      id: 4,
      title: 'Generative AI Art Installation',
      description: 'An interactive art installation that uses generative adversarial networks to create unique visual and auditory experiences.',
      category: 'ai',
      status: 'Completed',
      image: 'gen-art.jpg',
      tags: ['GANs', 'Art', 'Interactive'],
      featured: true
    },
    {
      id: 5,
      title: 'Robotic Prosthetic Hand',
      description: 'A low-cost, 3D-printable prosthetic hand with advanced sensing capabilities and natural movement patterns.',
      category: 'robotics',
      status: 'Completed',
      image: 'prosthetic-hand.jpg',
      tags: ['Prosthetics', '3D Printing', 'Embedded Systems'],
      featured: false
    },
    {
      id: 6,
      title: 'Emotion Recognition AI',
      description: 'An AI system that can recognize and respond to human emotions using computer vision and natural language processing.',
      category: 'ai',
      status: 'In Progress',
      image: 'emotion-ai.jpg',
      tags: ['Computer Vision', 'NLP', 'Affective Computing'],
      featured: false
    },
    {
      id: 7,
      title: 'Quantum Encryption System',
      description: 'A practical implementation of quantum key distribution for secure communications.',
      category: 'quantum',
      status: 'Research Phase',
      image: 'quantum-encryption.jpg',
      tags: ['Quantum Cryptography', 'Security', 'Communication'],
      featured: false
    },
    {
      id: 8,
      title: 'Neural Dust Monitoring',
      description: 'Microscopic implantable devices that can record neural activity with minimal invasiveness.',
      category: 'neurotech',
      status: 'Research Phase',
      image: 'neural-dust.jpg',
      tags: ['Bio-MEMS', 'Neural Interfaces', 'Medical Devices'],
      featured: false
    }
  ]
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)
  
  // Find featured projects
  const featuredProjects = projects.filter(project => project.featured)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24 pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 mx-auto">
            Exploring the frontiers of technology through innovative research and development.
          </p>
        </div>
        
        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-blue-500">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <div 
                  key={project.id}
                  className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600 text-9xl font-bold opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.status === 'Completed' 
                          ? 'bg-green-900/50 text-green-400'
                          : project.status === 'In Progress'
                            ? 'bg-yellow-900/50 text-yellow-400' 
                            : 'bg-purple-900/50 text-purple-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-600 text-9xl font-bold opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Completed' 
                      ? 'bg-green-900/50 text-green-400'
                      : project.status === 'In Progress'
                        ? 'bg-yellow-900/50 text-yellow-400' 
                        : 'bg-purple-900/50 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-gray-300 mx-auto mb-8">
            We're always looking for talented individuals and organizations to partner with on innovative projects.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage