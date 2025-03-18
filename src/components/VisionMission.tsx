import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <Target className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            To be a global leader in innovative research and development
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            Foster collaboration between academia and industry
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            Drive technological advancement for societal benefit
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <Compass className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            Provide cutting-edge research facilities and support
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            Nurture talent through mentorship and resources
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            Create sustainable solutions for future challenges
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisionMission;