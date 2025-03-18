import React from 'react';

const projects = [
  {
    name: 'name',
    students: ['names'],
    github: 'https://github.com/example/reefillia',
    brief: 'A web app that ',
    guide: '',
  },
];

const IncubationCenter = () => {
  return (
    <section className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Incubation Center Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-300 text-sm mb-4">
                <span className="font-semibold">Students:</span> {project.students.join(', ')}
              </p>
              <p className="text-gray-300 text-sm mb-4">
                <span className="font-semibold">Brief:</span> {project.brief}
              </p>
              {project.guide && (
                <p className="text-gray-300 text-sm mb-4">
                  <span className="font-semibold">Guide:</span> {project.guide}
                </p>
              )}
            </div>
            <div className="mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IncubationCenter;