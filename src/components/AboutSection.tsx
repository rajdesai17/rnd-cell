import React from 'react';
import { Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="College Campus"
          className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">About Us</h2>
          <Lightbulb className="w-8 h-8 text-blue-400" />
        </div>
        <p className="text-gray-300 leading-relaxed">
          Innovation University stands at the forefront of technological advancement
          and research excellence. Our state-of-the-art facilities and
          distinguished faculty create an environment where groundbreaking ideas
          flourish and future leaders are shaped.
        </p>
        <p className="text-gray-300 leading-relaxed">
          With a focus on interdisciplinary research and industry collaboration, we
          drive innovation that addresses real-world challenges and creates lasting
          impact in society.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;