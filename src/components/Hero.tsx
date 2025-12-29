import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Signal, ShieldCheck, Wifi, Loader2 } from 'lucide-react';
import { getLatestRelease } from '../lib/github';

const Hero = () => {
  const [release, setRelease] = useState({ 
    version: 'SEARCHING...', 
    downloadUrl: '#', 
    size: '...' 
  });

  useEffect(() => { 
    getLatestRelease().then((data) => {
      if(data) setRelease(data);
    }); 
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 pt-24 pb-10 lg:pt-0 lg:px-8">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-saffron/20 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-india-green/10 blur-[80px] rounded-full pointer-events-none opacity-30" />

      <div className="max-w-[1400px] w-full grid lg:grid-cols-2 items-center gap-12 lg:gap-0">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 max-w-2xl relative flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:mt-16"
        >
          {/* Version Pill */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-india-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-india-green"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-white/90 tracking-widest uppercase flex items-center gap-2">
              System Online <span className="text-white/30">|</span> {release.version}
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
            Defy the <span className="text-white">Blackout.</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-orange-400 to-india-green">
              Command the Grid.
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-white/60 mb-8 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-lg font-medium lg:border-l-2 lg:border-saffron/50 lg:pl-6">
            The ultimate offline tactical mesh. No towers? No internet? No problem. Secure, peer-to-peer comms for the extremes.
          </p>
          
          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            <Badge icon={<Signal />} text="Mesh Active" color="text-india-green" bg="bg-india-green/10" border="border-india-green/20" />
            <Badge icon={<ShieldCheck />} text="AES-256" color="text-saffron" bg="bg-saffron/10" border="border-saffron/20" />
            <Badge icon={<Wifi />} text="Offline" color="text-blue-400" bg="bg-blue-400/10" border="border-blue-400/20" />
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-6 relative z-50">
            <motion.a 
              href={release.downloadUrl}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(255, 153, 51, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-between bg-black/40 border border-white/10 rounded-2xl p-1.5 pr-4 w-full sm:min-w-[340px] transition-all duration-300 backdrop-blur-xl cursor-pointer overflow-hidden"
            >
              <div className="bg-gradient-to-r from-saffron to-[#ff8800] text-black h-12 sm:h-14 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-saffron/20 group-hover:shadow-saffron/40 transition-all flex-1">
                {release.version === 'SEARCHING...' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                <span className="tracking-wide">Download .APK</span>
              </div>
              
              <div className="flex flex-col items-end justify-center text-[10px] sm:text-xs font-mono text-white/50 pl-4">
                <div className="flex items-center gap-1 text-white/80">
                  <Smartphone className="w-3 h-3" />
                  <span>Android</span>
                </div>
                <span>{release.size !== '...' ? release.size : '25 MB'}</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: PHONE VISUAL (Floating Animation) */}
        <div className="flex justify-center lg:justify-center relative mt-12 lg:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            // ANIMATION: Float up and down continuously
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0] // Moves up 20px then down
            }}
            transition={{ 
              duration: 0.8, // Entrance speed
              y: {
                duration: 6, // Float speed (slow and smooth)
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative mt-10 lg:mt-24"
          >
             {/* PURE IMAGE (No CSS Borders) */}
             <img 
               src="/assets/app-ss.png" 
               alt="KreoAssist App Interface" 
               className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] h-auto drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
             />
             
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const Badge = ({ icon, text, color, bg, border }: any) => (
  <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-bold ${color} uppercase tracking-widest ${bg} px-2.5 py-1 rounded border ${border} shadow-sm`}>
    {React.cloneElement(icon, { className: "w-3 h-3 fill-current" })}
    <span>{text}</span>
  </div>
);

export default Hero;