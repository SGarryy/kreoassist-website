import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  // Start at exactly 0
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress to 0 on mount just to be safe
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        // Steady, forward-only filling logic
        const increment = Math.random() * 8 + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* 1. ATTRACTIVE LOGO ORB */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-40 h-40 md:w-52 md:h-52 mb-12 flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_60px_rgba(19,136,8,0.2)]" />
        
        <div className="relative z-10 w-full h-full rounded-full p-1 bg-gradient-to-tr from-white/20 via-transparent to-[#138808]/30 backdrop-blur-md overflow-hidden ring-1 ring-white/10">
          <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/logo.jpg" 
              alt="Kreo Logo" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          {/* Scanning Scanline */}
          <motion.div 
            animate={{ y: [-150, 350] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
          />
        </div>
      </motion.div>

      {/* 2. GRADIENT TEXT */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
          KreoAssist
        </h1>
        <p className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.6em] mt-4">
          Securing Bharat Grid...
        </p>
      </div>

      {/* 3. FIX: LOADING BAR STARTING FROM NOTHING */}
      <div className="w-full max-w-[280px] md:max-w-[400px] flex flex-col items-center z-10">
        {/* Container (The empty track) */}
        <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden relative border border-white/10">
          {/* The Filler (The actual bar) */}
          <motion.div 
            className="h-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] relative"
            initial={{ width: "0%" }} // Forces it to start from zero width
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="flex justify-between w-full mt-5 px-1 font-mono text-[10px] md:text-xs uppercase tracking-widest">
          <span className="text-white/20 italic">Initializing...</span>
          <span className="text-[#138808] font-bold tabular-nums">{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;