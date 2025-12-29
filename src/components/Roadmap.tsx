import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed, Lock, Radio, Map, Zap, Cpu, Rocket, TestTube2 } from 'lucide-react';

const phases = [
  {
    id: "01",
    phase: "Phase 1: The Sprint",
    date: "DEC 25-27",
    title: "Core Mesh Architecture",
    desc: "Built the proprietary p2p Bluetooth protocol and AES-256 encryption engine in 48 hours.",
    status: "completed",
    icon: <Radio className="w-5 h-5" />
  },
  {
    id: "02",
    phase: "Phase 2: Intelligence",
    date: "DEC 28",
    title: "Gemma-2B Integration",
    desc: "Successfully ported Google's Gemma-2B LLM to run offline on mobile for tactical support.",
    status: "completed",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: "03",
    phase: "Phase 3: Validation",
    date: "NOW",
    title: "Field Testing",
    desc: "Live stress-testing of the 3-day build in urban and dead-zone environments.",
    status: "current", // ACTIVE
    icon: <TestTube2 className="w-5 h-5" />
  },
  {
    id: "04",
    phase: "Phase 4: Sky Link",
    date: "2026",
    title: "Drone & Satellite Relay",
    desc: "Autonomous drone swarms and LEO satellite bridging for infinite range.",
    status: "locked",
    icon: <Zap className="w-5 h-5" />
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black/20 py-24 px-4 overflow-hidden">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron/10 blur-[150px] rounded-full pointer-events-none" />

      {/* 2. HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-saffron/30 bg-saffron/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
          <span className="text-saffron text-xs font-bold tracking-[0.2em] uppercase">Development Log</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
          Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Timeline</span>
        </h2>
      </motion.div>

      {/* 3. TIMELINE GRID */}
      <div className="relative max-w-4xl w-full">
        
        {/* The Central Line (Absolute) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 md:hidden" /> {/* Mobile Line */}

        <div className="space-y-12 relative z-10">
          {phases.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// COMPONENT: INDIVIDUAL TIMELINE CARD
const TimelineItem = ({ item, index }: any) => {
  const isEven = index % 2 === 0;
  const isCurrent = item.status === "current";
  const isCompleted = item.status === "completed";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      
      {/* 1. DATE / PHASE (Side A) */}
      <div className={`flex-1 w-full md:w-auto text-left md:text-right ${isEven ? 'md:text-left' : ''} pl-12 md:pl-0`}>
        <div className="text-saffron font-bold tracking-widest text-xs uppercase mb-1">{item.date}</div>
        <div className="text-white/40 font-mono text-sm uppercase tracking-wider">{item.phase}</div>
      </div>

      {/* 2. THE NODE (Center Point) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#0a0a0a] bg-[#1a1a1a] z-20 shadow-xl">
        {isCompleted ? (
          <div className="w-full h-full rounded-full bg-india-green flex items-center justify-center text-black shadow-[0_0_15px_rgba(19,136,8,0.5)]">
             <CheckCircle2 className="w-4 h-4" />
          </div>
        ) : isCurrent ? (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-saffron rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 bg-saffron rounded-full border-2 border-white/20" />
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-white/20" />
        )}
      </div>

      {/* 3. THE CARD (Side B) */}
      <motion.div 
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        className="flex-1 w-full md:w-auto pl-12 md:pl-0"
      >
        <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 group
          ${isCurrent 
            ? 'bg-saffron/5 border-saffron/30 shadow-[0_0_30px_rgba(255,153,51,0.1)]' 
            : isCompleted
              ? 'bg-india-green/5 border-india-green/20'
              : 'bg-white/5 border-white/10'
          }
        `}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-3">
            <div className={`p-2.5 rounded-xl ${
              isCurrent ? 'bg-saffron text-black' : 
              isCompleted ? 'bg-india-green text-white' : 
              'bg-white/10 text-white'
            }`}>
              {item.status === 'locked' ? <Lock className="w-4 h-4" /> : item.icon}
            </div>
            <h3 className={`text-xl font-bold ${isCurrent ? 'text-white' : 'text-white/90'}`}>
              {item.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
            {item.desc}
          </p>

          {/* Status Badges */}
          {isCurrent && (
            <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 rounded bg-saffron/20 border border-saffron/30">
              <CircleDashed className="w-3 h-3 text-saffron animate-spin-slow" />
              <span className="text-[10px] font-bold text-saffron uppercase tracking-wider">Active Testing</span>
            </div>
          )}
          {isCompleted && (
             <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 rounded bg-india-green/10 border border-india-green/20">
              <span className="text-[10px] font-bold text-india-green uppercase tracking-wider">Completed</span>
            </div>
          )}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Roadmap;