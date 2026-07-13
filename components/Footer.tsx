import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🐰</span>
              Bunny Photo Editor
            </h4>
            <p className="text-gray-400 text-sm">Free AI photo editing for everyone</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Photo Editor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Image Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Video Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Audio Generator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2024 Bunny Photo Editor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
