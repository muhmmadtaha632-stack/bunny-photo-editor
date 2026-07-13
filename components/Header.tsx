import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🐰</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Bunny Photo Editor</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-pink-600 transition font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition font-medium">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition font-medium">About</a>
            <button className="btn-primary text-sm">Sign In</button>
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
