import React from 'react';

const ScrollingAnnouncements = () => {
  const announcements = [
    'New Research Grant Opportunity in AI and Machine Learning',
    'International Conference on Innovation - Call for Papers',
    'Student Research Fellowship Applications Now Open',
    'Innovation Center Grand Opening Next Month',
  ];

  return (
    <div className="bg-blue-900 py-2 overflow-hidden z-0 relative">
      <div className="animate-scroll whitespace-nowrap">
        <div className="inline-block">
          {announcements.map((announcement, index) => (
            <span key={index} className="mx-8">
              📢 {announcement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingAnnouncements;