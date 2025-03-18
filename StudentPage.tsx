import React from 'react';
import Navbar from './Navbar';

const StudentPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          R&D Committee Members
        </h1>
        
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-300">
          Developers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* First Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
                alt="Vansh D. Rane"
                className="rounded-full w-40 h-40 object-cover mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Mr. Vansh D. Rane
              </h3>
              <p className="text-gray-300">
                BE. CSE (AIML)
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
                alt="Raj R. Desai"
                className="rounded-full w-40 h-40 object-cover mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Mr. Raj R. Desai
              </h3>
              <p className="text-gray-300">
                BE. CSE (AIML)
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
                alt="Aryan R. Kadam"
                className="rounded-full w-40 h-40 object-cover mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Mr. Aryan R. Kadam
              </h3>
              <p className="text-gray-300">
                BE. CSE (AIML)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentPage;