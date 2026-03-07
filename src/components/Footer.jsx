import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t-4 border-gray-800 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mono text-sm mb-2">
          &copy; {new Date().getFullYear()} Saniyat Mahmud. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Built with React, Tailwind CSS & Pixel Art Love ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;