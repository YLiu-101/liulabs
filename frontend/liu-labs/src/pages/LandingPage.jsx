import React from 'react'
import { Link } from 'react-router-dom'
import InteractiveBackground from '../components/InteractiveBackground'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">LiuLabs.</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-500">
  tech
</span>

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto text-center">
  Exploring the intersection of technology, innovation, and human potential through 
  insanely cool projects and conversations with industry leaders.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
  to="/projects"
  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
>
  Explore Projects
</Link>

            <Link 
              to="/podcast"
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Listen to Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Featured Content
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Featured Project */}
          
          
          {/* Featured Podcast */}
            
            </div>

      </section>
    </div>
  )
}

export default LandingPage