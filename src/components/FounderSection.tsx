import React from 'react';

const FounderSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center bg-gray-800 rounded-lg p-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Founder's Vision</h2>
        <blockquote className="text-gray-300 leading-relaxed border-l-4 border-blue-400 pl-4">
          "Our vision is to create a hub of innovation where brilliant minds
          converge to solve global challenges. We believe in fostering an
          environment where creativity knows no bounds and where research
          transcends traditional academic boundaries."
        </blockquote>
        <p className="text-gray-400">- Dr. Sarah Johnson, Founder</p>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Founder"
          className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default FounderSection;