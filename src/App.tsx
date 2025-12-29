import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Specs from './components/Specs';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-india-green/30 selection:text-india-green relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative min-h-screen w-full"
            style={{
              backgroundImage: "url('/assets/mesh.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            {/* Overlay moved here to load with the content */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
            
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <BentoGrid />
                <Specs />
                <Roadmap />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;