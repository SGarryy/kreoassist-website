import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. CENTRAL RADAR SIGNAL (Replacing Logo) */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-12">
        {/* Animated Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut"
            }}
            className="absolute inset-0 border border-[#138808]/40 rounded-full"
          />
        ))}
        
        {/* Center Icon */}
        <div className="relative z-10 w-20 h-20 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(19,136,8,0.3)]">
          <Radio className="w-10 h-10 text-white animate-pulse" />
        </div>
      </div>

      {/* 2. SYSTEM TITLES */}
      <div className="text-center mb-12 z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          Kreo<span className="text-[#138808]">Assist</span>
        </h1>
        <p className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] mt-4">
          Encrypted Mesh Protocol
        </p>
      </div>

      {/* 3. INDIAN FLAG PROGRESS BAR */}
      <div className="w-full max-w-[280px] md:max-w-[400px] flex flex-col items-center z-10">
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "circOut" }}
          />
        </div>
        
        <div className="flex justify-between w-full mt-5 px-1 font-mono text-[9px] md:text-[11px] uppercase tracking-widest">
          <span className="text-white/20 animate-pulse">
            {progress < 100 ? "Scanning Frequencies..." : "Node Verified"}
          </span>
          <span className="text-[#138808] font-bold">{progress}%</span>
        </div>
      </div>

      {/* 4. TACTICAL FOOTER */}
      <div className="absolute bottom-10 flex items-center gap-3 text-[9px] md:text-[11px] font-bold text-white/20 uppercase tracking-[0.4em]">
        <span>Bharat Grid</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#138808] animate-ping" />
        <span>Node 01 Deployment</span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;