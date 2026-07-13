'use client';

import React, { useState } from 'react';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('image');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-4 py-2 rounded-full">✨ Welcome to Bunny Photo Editor</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Free AI Photo Editor & Image Generator
          </h1>
          <p className="text-xl text-gray-600">
            Edit, Generate, and Design Online for Free. Create stunning visuals with powerful AI tools.
          </p>
          <p className="text-gray-500">
            Bunny gives you a powerful AI photo editor, AI image generator, AI video maker, face swap, collage maker, and 20+ editing tools — 100% free, right in your browser. Powered by Flux, Kling, Recraft, Veo, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary">Open AI Photo Editor</button>
            <button className="btn-secondary">Try AI Image Generator</button>
          </div>
        </div>

        {/* Right Side - Editor Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-pink-100">
          <div className="space-y-4">
            {/* Tab Buttons */}
            <div className="flex gap-3">
              {['Image', 'Video', 'Audio'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Preview Box */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl h-48 flex items-center justify-center mb-4 border-2 border-dashed border-pink-300">
              <div className="text-center">
                <div className="text-5xl mb-2">⬇️</div>
                <p className="text-gray-600">Drop an image here or click to browse</p>
              </div>
            </div>

            {/* Prompt Input */}
            <input
              type="text"
              placeholder="Describe what you want to create..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border-2 border-pink-200 focus:outline-none focus:border-pink-500 transition"
            />

            {/* Generate Button */}
            <button className="w-full btn-primary py-3 text-lg font-bold">
              Generate with Bunny ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
