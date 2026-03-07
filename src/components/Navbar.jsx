import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-50 pixel-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
          SANIYAT M.
        </motion.div>
        <div className="flex space-x-4">
          <motion.a href="#about" className="text-white hover:text-pixel-accent transition-colors duration-300" whileHover={{ y: -2 }}>About</motion.a>
          <motion.a href="#projects" className="text-white hover:text-pixel-accent transition-colors duration-300" whileHover={{ y: -2 }}>Projects</motion.a>
          <motion.a href="#contact" className="text-white hover:text-pixel-accent transition-colors duration-300" whileHover={{ y: -2 }}>Contact</motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;