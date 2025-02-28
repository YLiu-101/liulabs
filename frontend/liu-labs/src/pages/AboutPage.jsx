import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24 pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Hey, I'm Kai
            </span>
          </h1>
          <p className="text-xl text-gray-300 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-0 sm:w-4/5 md:w-3/4 lg:w-2/3">
            A curious mind exploring the intersections of math, code, physics, and human potential.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-800/40 to-purple-800/40 border-2 border-blue-500/50 flex items-center justify-center shadow-lg">
                <span className="text-6xl text-blue-400/90">KL</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Nice to meet you!</h2>
              <p className="text-gray-300 mb-4">
                I'm a Computer Science and Mathematics student at Purdue, fascinated by the power of algorithms to solve complex problems. My journey started with a love for physics competitions, but I quickly fell down the rabbit hole of computational thinking and machine learning.
              </p>
              <p className="text-gray-300">
                When I'm not coding or solving math problems, you might find me experimenting with reinforcement learning models, writing about theoretical concepts, or building projects that merge technical innovation with practical applications.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 pt-12 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                What Drives Me
              </h3>
              <p className="text-gray-300 ml-7">
                I'm obsessed with creating systems that can learn and adapt. My work at NASA and GE Research has shown me how AI can transform industries, but I'm equally interested in its potential to augment human creativity and decision-making. Right now, I'm particularly excited about integrating large language models with reinforcement learning to build more intuitive and powerful AI systems.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                My Journey So Far
              </h3>
              <div className="ml-7 space-y-4">
                <p className="text-gray-300">
                  My path has been a bit unconventional. I was that kid fascinated by physics problems, spending weekends preparing for olympiads instead of playing video games. Those competitions taught me how to tackle seemingly impossible problems by breaking them down methodically.
                </p>
                <p className="text-gray-300">
                  During my time at MIT, I had my first real taste of machine learning research, and I was hooked. Now at Purdue, I'm diving deeper into both theoretical mathematics and practical AI applications. Working with NASA on data systems and GE on reinforcement learning has shown me how algorithms can make a tangible impact in the real world.
                </p>
                <p className="text-gray-300">
                  Recently, I've been exploring entrepreneurial ventures with projects like Rationality.ai and Prophet, trying to bridge cutting-edge research with products that solve real problems.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                Current Projects
              </h3>
              <div className="ml-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <h4 className="font-bold mb-1">Poker AI Bot</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Combining reinforcement learning with LLMs to create a poker AI that understands game theory and human psychology. It's teaching me a lot about decision-making under uncertainty.
                  </p>
                  <a href="https://github.com/YLiu-101/poker-ai" className="text-blue-400 text-sm hover:underline inline-flex items-center">
                    Check it out
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <h4 className="font-bold mb-1">Rationality.ai</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    A stealth startup I'm co-founding that's exploring new ways to enhance human reasoning and decision-making through AI. Too early to share details, but I'm really excited about where this is going.
                  </p>
                  <span className="text-gray-500 text-sm italic">Coming soon</span>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <h4 className="font-bold mb-1">Prophet</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    A decentralized market for music popularity that uses blockchain to create artist-specific tokens. It's my experiment in how markets can predict cultural trends.
                  </p>
                  <a href="https://proph.tech" className="text-blue-400 text-sm hover:underline inline-flex items-center">
                    Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <h4 className="font-bold mb-1">Social Echo Chambers</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Research at Purdue analyzing how information flows through social networks and creates polarization. We're using entropy and KL-divergence to quantify echo chamber effects.
                  </p>
                  <span className="text-gray-500 text-sm italic">Academic research</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Random Facts
              </h3>
              <ul className="ml-7 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  I once derived the AM-GM inequality using thermodynamics principles, which led to my first published paper
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Despite my love for algorithms, I still solve physics problems for fun on weekends
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  I'm teaching myself to play chess using only reinforcement learning concepts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  I've participated in the International Physics Bowl and placed 14th globally
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  I believe Monte Carlo simulations can solve approximately 80% of real-world problems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  My go-to programming language is Python, but I'm secretly enjoying Rust more these days
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Get in Touch */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing interesting problems, potential collaborations, or just geeking out about math and AI. Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:yikailiu@purdue.edu" className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="https://github.com/YLiu-101" className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="#" className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage  