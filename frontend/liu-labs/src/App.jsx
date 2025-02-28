import React, { useState } from 'react';

const SimplePage = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      
      <div className="w-full">
        <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <h1 className="text-3xl font-bold mb-6 text-center">Simple React Page</h1>
          
          <div className="flex flex-col items-center mb-8">
            <p className="text-xl mb-4">Count: {count}</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
              >
                Decrease
              </button>
              <button 
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition"
              >
                Increase
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-semibold mb-4">Features:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Simple counter functionality</li>
              <li>Dark/light mode toggle</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Clean component structure</li>
            </ul>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-sm opacity-70">
          Created with React and Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default SimplePage;