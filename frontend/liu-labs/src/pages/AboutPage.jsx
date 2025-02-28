import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24 pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              About LiuLabs
            </span>
          </h1>
          <p className="text-xl text-gray-300 mx-auto">
            Exploring the frontiers of technology and human potential through innovative projects and meaningful conversations.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-4">
              At LiuLabs, we believe that technology should serve humanity's highest aspirations. Our mission is to explore, create, and share cutting-edge technical projects while fostering deep conversations with the brilliant minds shaping our future.
            </p>
            <p className="text-lg text-gray-300">
              We're committed to pushing boundaries, asking difficult questions, and building tools that empower individuals and communities to thrive in an increasingly complex technological landscape.
            </p>
          </div>
          
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Innovation</h3>
              <p className="text-gray-400 text-center">
                We embrace experimentation, creative problem-solving, and the courage to challenge conventional wisdom.
              </p>
            </div>
            
            <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Community</h3>
              <p className="text-gray-400 text-center">
                We believe in the power of collaboration, open knowledge sharing, and building bridges across disciplines.
              </p>
            </div>
            
            <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Responsibility</h3>
              <p className="text-gray-400 text-center">
                We consider the ethical implications of technology and strive to create tools that empower rather than exploit.
              </p>
            </div>
          </div>
        </div>
        
        {/* About the Founder */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">About the Founder</h2>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden sm:flex">
            <div className="sm:w-1/3 bg-gradient-to-br from-blue-900/40 to-gray-800 p-6 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gray-700 border-2 border-blue-500/50 flex items-center justify-center">
                <span className="text-5xl text-blue-500/70">LT</span>
              </div>
            </div>
            <div className="sm:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">Liu Tao</h3>
              <p className="text-gray-300 mb-4">
                Liu Tao is a technologist, researcher, and entrepreneur with a passion for exploring the intersection of cutting-edge technology and human experience. With a background in computer science, artificial intelligence, and human-computer interaction, Liu brings a multidisciplinary approach to solving complex problems.
              </p>
              <p className="text-gray-300">
                After working with several leading tech companies, Liu founded LiuLabs to pursue independent research and create a platform for meaningful discussions about technology's role in shaping our future.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-400">contact@liulabs.tech</p>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53                  2.304 1.064 2.304 1.064 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .322.188.694.812.576 4.801-1.574 6.735-5.924 6.735-9.505 0-5.533-4.478-10.017-10-10.017z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage