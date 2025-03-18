import React from 'react';

const achievements = [
  {
    title: '1st Runner-Up at BeachHack Season 6',
    description: `
      Our students secured the 1st Runner-Up position at BeachHack Season 6, a 24-hour national-level hackathon organized by Christ College of Engineering, 
      Kochi, on March 7-8, 2025. Out of 1,000+ registrations, only 22 teams advanced to the final round, where our students
      Raj Desai, Aryan Kadam, Suyog Rawool, and Advait Warang impressed the judges with their project, Reefillia. 
      The web app helps users locate free water refill stations, promoting sustainability and reducing plastic waste. Their innovative approach and problem-solving skills earned them this prestigious recognition.`,
    image: '/deployers.jpg',
    date: 'March 7-8, 2025',
  },
  {
    title: 'National Robotics Championship Winner',
    description:
      'Our students secured the first position in the National Robotics Championship 2025, showcasing their innovative design and programming skills.',
    image:
      'https://images.unsplash.com/photo-1581091870622-1c6a9b1a3f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    date: 'March 10, 2025',
  },
  {
    title: 'AI Research Paper Published',
    description:
      'A groundbreaking research paper on AI and Machine Learning by our students was published in the International Journal of Computer Science.',
    image:
      'https://images.unsplash.com/photo-1581092334395-6f1a9b1a3f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    date: 'February 20, 2025',
  },
  {
    title: 'Hackathon Champions',
    description:
      'Our team won the prestigious Hackathon 2025 by developing an innovative app for sustainable living.',
    image:
      'https://images.unsplash.com/photo-1581092334395-6f1a9b1a3f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    date: 'January 15, 2025',
  },
];

const Achievements = () => {
  return (
    <section className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Student Achievements</h1>
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

export default Achievements;