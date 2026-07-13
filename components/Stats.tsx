import React from 'react';

const Stats = () => {
  const stats = [
    {
      value: '500M+',
      label: 'Users Worldwide',
    },
    {
      value: '50B+',
      label: 'Photos Edited',
    },
    {
      value: '1B+',
      label: 'AI Generations',
    },
    {
      value: '160+',
      label: 'Countries',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-500 to-rose-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-pink-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
