import React from 'react';

const achievements = [
  {
    title: 'Best Research Paper Award',
    description: `
      Our faculty member, ................., received the Best Research Paper Award at the International Conference on Artificial Intelligence, held in Pune on February 15, 2025. 
      The paper focused on advancements in AI-driven healthcare solutions, showcasing groundbreaking research and innovation.`,
    image: '/research-award.jpg',
    date: 'February 15, 2025',
  }
];

const StaffAchievements = () => {
  return (
    <section className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Staff Achievements</h1>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-8 items-center bg-gray-800 rounded-lg p-6 ${
            index % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: '300px' }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{achievement.title}</h2>
            <p className="text-gray-300 whitespace-pre-line">{achievement.description}</p>
            <p className="text-gray-400 text-sm">{achievement.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StaffAchievements;