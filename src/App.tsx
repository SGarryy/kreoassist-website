import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Specs from './components/Specs';     
import Roadmap from './components/Roadmap'; 
import Footer from './components/Footer';   

function App() {
  return (
    <main className="min-h-screen bg-deep-space text-white relative overflow-hidden selection:bg-saffron/30">
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'url(/assets/mesh.png)' }} />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Sections with IDs for scrolling */}
        <div id="download"><Hero /></div>
        <div id="features"><BentoGrid /></div>
        <div id="specs"><Specs /></div>
        <div id="roadmap"><Roadmap /></div>
        
        <Footer />
      </div>
    </main>
  );
}
export default App;