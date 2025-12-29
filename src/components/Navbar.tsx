import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import KreoLogo from './KreoLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} 
        className="fixed top-0 left-0 right-0 z-50 w-full h-24 flex items-center bg-deep-space/80 backdrop-blur-md border-b border-white/5"
      >
        {/* Container: Full Width, Pushed to Corners */}
        <div className="w-full max-w-[1600px] mx-auto px-8 flex items-center justify-between">
          
          {/* LEFT: Identity (Independent Hover) */}
          <div className="flex items-center gap-5 cursor-pointer" onClick={() => scrollTo('download')}>
            {/* Logo: Scale Only (No Rotate) */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-saffron transition-colors"
            >
              <KreoLogo className="w-10 h-10" />
            </motion.div>

            {/* Text: Patriotic Gradient like Pic 2 */}
            <motion.div className="flex flex-col group">
              <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-india-green group-hover:bg-gradient-to-l transition-all duration-500">
                KREOASSIST
              </span>
              <span className="text-[10px] font-mono text-white/50 tracking-[0.3em] group-hover:text-saffron transition-colors">
                SYSTEM ONLINE
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Links & Button (At the Corner) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {['Features', 'Specs', 'Roadmap'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-saffron transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Premium Glass Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('download')}
              className="bg-saffron text-black font-bold px-8 py-3 rounded-lg text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(255,153,51,0.4)] hover:shadow-[0_0_30px_rgba(255,153,51,0.6)] transition-all"
            >
              Get App
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-24 left-0 w-full bg-black/95 border-b border-white/10 z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-center">
              {['Features', 'Specs', 'Roadmap'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="py-2 text-lg font-bold text-white/70 hover:text-saffron uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;