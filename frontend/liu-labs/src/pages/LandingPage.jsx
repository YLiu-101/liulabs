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
          <span className="text-white">LiuLabs</span>
{/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-500">
  tech
</span> */}

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto text-center">
  Exploring the intersection of technology, innovation, and human potential through 
  insanely cool projects and conversations with industry leaders.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
  to="/projects"
  className="bg-white text-black px-8 py-3 rounded-md font-medium text-lg"
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

    </div>
  )
}

export default LandingPage