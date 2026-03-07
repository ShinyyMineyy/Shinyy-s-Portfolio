import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, MessageSquare, Code, Box, Video, Monitor, Gamepad2 } from 'lucide-react';

const SkillCard = ({ icon, title, desc }) => (
  <motion.div 
    className="pixel-card p-6 flex flex-col items-center text-center h-full"
    whileHover={{ y: -5, boxShadow: "0px 0px 15px var(--pixel-accent)" }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-pink-500 mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </motion.div>
);

const SocialButton = ({ href, icon, label, colorClass = "bg-gray-800" }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`pixel-btn flex items-center gap-2 no-underline ${colorClass} hover:brightness-110`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span>{label}</span>
  </motion.a>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[80vh] py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="mb-8 relative group"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-48 h-48 bg-[#1a1a2e] border-4 border-white shadow-[0_0_20px_rgba(233,69,96,0.5)] flex items-center justify-center overflow-hidden pixel-border">
           <span className="text-6xl animate-pulse">👾</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-2 border-white animate-bounce"></div>
      </motion.div>

      <motion.h1 
        className="text-3xl md:text-5xl font-bold mb-4 text-center text-white drop-shadow-[4px_4px_0_rgba(233,69,96,1)]"
        variants={itemVariants}
      >
        SANIYAT MAHMUD
      </motion.h1>

      <motion.h2 
        className="text-lg md:text-xl text-gray-300 mb-8 font-mono text-center max-w-2xl"
        variants={itemVariants}
      >
        <span className="text-pink-500">&lt;</span> Full Stack Web Engineer <span className="text-pink-500">/&gt;</span> • 19 Years Old
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-6xl px-4"
        variants={itemVariants}
      >
        <SkillCard icon={<Code size={32} />} title="Web Dev" desc="Full Stack Engineering" />
        <SkillCard icon={<MessageSquare size={32} />} title="Discord Bots" desc="Custom Bot Development" />
        <SkillCard icon={<Box size={32} />} title="3D Animation" desc="Minecraft & Blender" />
        <SkillCard icon={<Video size={32} />} title="Video Editing" desc="Professional Editing" />
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-6"
        variants={itemVariants}
      >
        {/* GitHub */}
        <SocialButton 
            href="https://github.com/shinyymineyy" 
            icon={<Github size={20} />} 
            label="GitHub" 
            colorClass="bg-[#333]"
        />
        
        {/* Instagram */}
        <SocialButton 
            href="https://instagram.com/chindichorsani" 
            icon={<Instagram size={20} />} 
            label="chindichorsani" 
            colorClass="bg-[#E1306C]"
        />

        {/* Discord (Copy ID or just display) */}
        <div className="relative group">
            <motion.button 
                className="pixel-btn flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    navigator.clipboard.writeText("shinyymineyy");
                    alert("Discord ID copied to clipboard!");
                }}
            >
                <MessageSquare size={20} />
                <span>shinyymineyy</span>
            </motion.button>
             <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white pixel-border">
                Click to Copy ID
            </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;