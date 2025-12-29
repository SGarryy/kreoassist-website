import React from 'react';
import { motion } from 'framer-motion';
import { Bluetooth, Wifi, BatteryCharging, Share2, Radio, Activity, Lock, Server, Zap } from 'lucide-react';

const Specs = () => {
  return (
    <section id="specs" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/20 py-20 lg:py-0">
      
      {/* 1. CYBER GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Ambient Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[1000px] sm:h-[800px] bg-india-green/10 blur-[80px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* 2. HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-10 lg:mb-16 cursor-default px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-india-green/30 bg-india-green/5 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-india-green animate-pulse" />
          <span className="text-india-green text-[10px] font-bold tracking-[0.2em] uppercase">Architecture v2.0</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
          Hardware <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-green to-emerald-400">Efficiency</span>
        </h2>
      </motion.div>

      {/* 3. MAIN DASHBOARD GRID */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center px-4 sm:px-6 relative z-10">
        
        {/* CENTER NUCLEUS (Mobile: Top / Desktop: Middle) */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 h-[280px] lg:h-[400px] w-full mb-4 lg:mb-0">
          
          {/* Desktop Data Beams */}
          <svg className="absolute inset-0 w-full h-full -z-10 hidden lg:block opacity-50 pointer-events-none" viewBox="0 0 400 400">
            <path id="path1" d="M -80 100 L 150 200" stroke="#138808" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <path id="path2" d="M -80 300 L 150 200" stroke="#138808" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <path id="path3" d="M 480 100 L 250 200" stroke="#138808" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <path id="path4" d="M 480 300 L 250 200" stroke="#138808" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            
            <circle r="3" fill="#138808"><animateMotion repeatCount="indefinite" dur="3s" keyPoints="0;1" keyTimes="0;1"><mpath href="#path1"/></animateMotion></circle>
            <circle r="3" fill="#138808"><animateMotion repeatCount="indefinite" dur="3s" begin="1.5s" keyPoints="0;1" keyTimes="0;1"><mpath href="#path2"/></animateMotion></circle>
            <circle r="3" fill="#138808"><animateMotion repeatCount="indefinite" dur="3s" begin="0.5s" keyPoints="0;1" keyTimes="0;1"><mpath href="#path3"/></animateMotion></circle>
            <circle r="3" fill="#138808"><animateMotion repeatCount="indefinite" dur="3s" begin="2s" keyPoints="0;1" keyTimes="0;1"><mpath href="#path4"/></animateMotion></circle>
          </svg>

          {/* The Core */}
          <div className="relative w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] flex items-center justify-center">
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-dashed border-india-green/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border-t-2 border-b-2 border-white/20 rounded-full animate-[spin_4s_linear_infinite]" />
            
            {/* Center Orb */}
            <motion.div 
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="relative z-20 w-32 h-32 lg:w-40 lg:h-40 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_0_40px_rgba(19,136,8,0.3)] flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:shadow-[0_0_80px_rgba(19,136,8,0.6)]"
            >
              <div className="text-india-green mb-2 group-hover:scale-110 transition-transform">
                <Radio className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white tracking-tighter">100m</div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-1">Radius</div>
            </motion.div>
          </div>
        </div>

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
          <GhostCard 
            icon={<Bluetooth className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Bluetooth LE 5.0"
            desc="Instant 100ms peer discovery."
            color="text-blue-400"
            glow="shadow-blue-400/20"
            delay={0}
          />
          <GhostCard 
            icon={<Wifi className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Wi-Fi Direct"
            desc="High-bandwidth map transfer."
            color="text-saffron"
            glow="shadow-saffron/20"
            delay={0.1}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 sm:gap-6 order-3">
          <GhostCard 
            icon={<BatteryCharging className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Zero-Drain Standby"
            desc="<1% battery usage per hour."
            color="text-emerald-400"
            glow="shadow-emerald-400/20"
            delay={0.2}
          />
          <GhostCard 
            icon={<Share2 className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Hyper-Local Routing"
            desc="Multi-hop mesh extension."
            color="text-purple-400"
            glow="shadow-purple-400/20"
            delay={0.3}
          />
        </div>
      </div>

      {/* 4. FOOTER (Hidden on mobile) */}
      <div className="absolute bottom-0 w-full bg-black/40 border-t border-white/10 backdrop-blur-md py-4 overflow-hidden z-20 hidden lg:block">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-24 px-8">
           <StatusItem icon={<Activity />} label="System Stable" color="text-emerald-400" />
           <StatusItem icon={<Lock />} label="AES-256 Active" color="text-saffron" />
           <StatusItem icon={<Server />} label="Mesh Nodes: 1,402" color="text-blue-400" />
           <StatusItem icon={<Zap />} label="Latency: 45ms" color="text-yellow-400" />
           <StatusItem icon={<Activity />} label="System Stable" color="text-emerald-400" />
        </div>
      </div>

    </section>
  );
};

// COMPONENT: Instant Touch Ghost Card
const GhostCard = ({ icon, title, desc, delay, color, glow }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }} 
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }} // Entrance Speed
    
    // FIX: Explicit transition inside whileHover makes it instant
    whileHover={{ 
      scale: 1.02, 
      backgroundColor: "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.3)",
      boxShadow: "0 0 25px rgba(255,255,255,0.05)",
      transition: { duration: 0.1, ease: "easeOut" } 
    }}
    whileTap={{ scale: 0.98 }}
    
    className="group relative p-5 lg:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-row gap-4 items-center cursor-pointer text-left w-full shadow-lg"
  >
    <div className={`shrink-0 p-3 lg:p-4 rounded-xl bg-black/40 border border-white/10 ${color} ${glow} group-hover:scale-110 transition-transform duration-200`}>
      {icon}
    </div>
    
    <div className="flex-1">
      <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-white transition-colors duration-200">{title}</h3>
      <p className="text-xs lg:text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-200 leading-snug mt-1">{desc}</p>
    </div>
  </motion.div>
);

const StatusItem = ({ icon, label, color }: any) => (
  <div className={`flex items-center gap-4 ${color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
    <div className="w-5 h-5 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/90">{label}</span>
  </div>
);

export default Specs;