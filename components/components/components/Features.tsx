import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'AI Photo Editor',
      description: 'Edit, enhance and transform photos with AI-powered tools',
    },
    {
      icon: '✨',
      title: 'AI Image Generator',
      description: 'Create stunning images from text prompts',
    },
    {
      icon: '🎬',
      title: 'AI Video Generator',
      description: 'Generate videos with AI technology',
    },
    {
      icon: '🎵',
      title: 'AI Audio Generator',
      description: 'Create professional audio content',
    },
    {
      icon: '🖼️',
      title: 'Photo Collage Maker',
      description: 'Design beautiful photo collages easily',
    },
    {
      icon: '🎭',
      title: 'AI Face Swap',
      description: 'Swap faces in photos with AI precision',
    },
    {
      icon: '🗑️',
      title: 'Background Remover',
      description: 'Remove backgrounds instantly and automatically',
    },
    {
      icon: '⚡',
      title: 'More Features',
      description: 'Explore 20+ additional editing tools and effects',
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful AI Tools</h2>
        <p className="text-xl text-gray-600">Everything you need to create stunning visuals</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-200 border-2 border-pink-100 hover:border-pink-300 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
