import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, Cpu, ShieldCheck, Activity, Radio, AlertTriangle } from 'lucide-react';

const features = [
  {
    title: "Offline Mesh",
    description: "Peer-to-peer network via Bluetooth & Wi-Fi Direct. No towers needed.",
    icon: <WifiOff className="w-6 h-6" />,
    color: "text-saffron",
    border: "group-hover:border-saffron/50",
    shadow: "group-hover:shadow-saffron/20"
  },
  {
    title: "One-Tap SOS",
    description: "Broadcast GPS & status to devices in 5km radius instantly.",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "text-red-500",
    border: "group-hover:border-red-500/50",
    shadow: "group-hover:shadow-red-500/20"
  },
  {
    title: "Hybrid AI",
    description: "On-device Gemma-2B AI for survival tactics without internet.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-blue-400",
    border: "group-hover:border-blue-400/50",
    shadow: "group-hover:shadow-blue-400/20"
  },
  {
    title: "First Aid",
    description: "Visual guides for CPR & shock management pre-loaded on device.",
    icon: <Activity className="w-6 h-6" />,
    color: "text-india-green",
    border: "group-hover:border-india-green/50",
    shadow: "group-hover:shadow-india-green/20"
  },
  {
    title: "Beacon Mode",
    description: "Passive digital lighthouse signal for rescuers to locate you.",
    icon: <Radio className="w-6 h-6" />,
    color: "text-purple-400",
    border: "group-hover:border-purple-400/50",
    shadow: "group-hover:shadow-purple-400/20"
  },
  {
    title: "AES-256",
    description: "Military-grade encryption for trusted secure communication.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-emerald-400",
    border: "group-hover:border-emerald-400/50",
    shadow: "group-hover:shadow-emerald-400/20"
  }
];

const BentoGrid = () => {
  return (
    // Changed h-screen to min-h-screen + py-20 to ensure scrolling works on mobile
    <section id="features" className="relative w-full min-h-screen h-auto flex flex-col justify-center overflow-hidden bg-black/40 py-20 lg:py-0">
      
      {/* 1. CYBER GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-saffron/5 blur-[150px] pointer-events-none opacity-20" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4 sm:px-6">
        
        {/* COMPACT HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-saffron/20 bg-saffron/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse"/>
            <span className="text-saffron text-xs font-bold tracking-[0.2em] uppercase">Core Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
            Engineered for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-white">Extremes.</span>
          </h2>
        </motion.div>

        {/* 2. THE GRID (Mobile Optimized) */}
        {/* grid-cols-1 on mobile ensures full width cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 h-auto lg:h-[65vh]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              
              // MOBILE INTERACTION: "whileTap" gives instant feedback on touch screens
              whileTap={{ scale: 0.98 }}
              whileHover={{ y: -5, scale: 1.01 }}
              
              className="relative group h-full min-h-[180px]"
            >
              {/* CARD CONTAINER */}
              <div className={`relative h-full p-5 sm:p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${feature.border} ${feature.shadow}`}>
                
                {/* Translucent Gradient Overlay on Hover/Tap */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`mb-4 sm:mb-5 p-3 rounded-xl w-fit bg-black/40 border border-white/10 ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-saffron transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm font-medium group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-${feature.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;