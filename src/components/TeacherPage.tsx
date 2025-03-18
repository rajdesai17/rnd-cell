import React from 'react';

const TeacherPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          R&D Committee Members
        </h1>

        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-300">
          Coordinators
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src=""
                alt="Dr. Nitin M. Shivsharan"
                className="rounded-full w-48 h-48 object-cover mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Dr. Nitin M. Shivsharan
              </h3>
              <p className="text-gray-300 mb-2">
                Department of Computer Engineering
              </p>
              <p className="text-gray-400">Asst. Professor</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src=""
                alt="Prof. Prajakta S. Rane"
                className="rounded-full w-48 h-48 object-cover mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Prof. Prajakta S. Rane
              </h3>
              <p className="text-gray-300 mb-2">
                Department of Computer Engineering
              </p>
              <p className="text-gray-400">Asst. Professor</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherPage;