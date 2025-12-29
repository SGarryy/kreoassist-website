import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Radio, Download, ExternalLink } from 'lucide-react';
import { getLatestRelease } from '../lib/github';

const Footer = () => {
  const [release, setRelease] = useState({ 
    version: 'Checking...', 
    downloadUrl: '#', 
    size: '' 
  });

  useEffect(() => { 
    getLatestRelease().then((data) => {
      if(data) setRelease(data);
    }); 
  }, []);

  return (
    <footer className="relative bg-black pt-16 pb-8 border-t border-white/10 overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-india-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-saffron/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-8 mb-12 items-start">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 mb-4 cursor-pointer group"
            >
               <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-india-green to-emerald-950 flex items-center justify-center text-white shadow-lg shadow-india-green/20 border border-white/10 overflow-hidden">
                 <div className="absolute inset-0 bg-india-green/20 animate-pulse" />
                 <Radio className="w-5 h-5 relative z-10" />
               </div>
               <div>
                 <span className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-india-green group-hover:to-emerald-400 transition-all">
                   KreoAssist
                 </span>
                 <div className="flex items-center gap-2 mt-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">System Online</span>
                 </div>
               </div>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm border-l-2 border-white/10 pl-4">
              Decentralized offline mesh network. <br/> 
              No towers. No internet. Just connection.
            </p>
          </div>

          {/* PLATFORM LINKS */}
          <div className="md:col-span-2 lg:col-span-2">
            <FooterHeading>Platform</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="#features">Capabilities</FooterLink>
              <FooterLink href="#specs">Architecture</FooterLink>
              <FooterLink href="#roadmap">Mission Log</FooterLink>
            </ul>
          </div>

          {/* COMPANY LINKS */}
          <div className="md:col-span-2 lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="https://kreodev.netlify.app/" external>About KreoDev</FooterLink>
              <FooterLink href="https://kreodev.netlify.app/" external>Security Protocol</FooterLink>
              <FooterLink href="https://kreodev.netlify.app/" external>Contact Command</FooterLink>
            </ul>
          </div>

          {/* DOWNLOAD & SOCIALS */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start md:items-end">
             <FooterHeading>Get the App</FooterHeading>
             <div className="flex flex-col items-start md:items-end gap-3 w-full">
               
               <div className="text-right">
                 <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Latest Stable Build</p>
                 <div className="flex items-center justify-end gap-2 text-xs font-bold text-saffron">
                   <span>v{release.version}</span>
                   {release.size && <span className="text-white/30">• {release.size}</span>}
                 </div>
               </div>

               <motion.a 
                 href={release.downloadUrl}
                 whileHover={{ scale: 1.02, backgroundColor: "#FF9933", color: "#000", boxShadow: "0 0 20px rgba(255,153,51,0.4)" }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-saffron font-bold text-sm hover:border-saffron transition-all w-full md:w-auto cursor-pointer shadow-lg"
               >
                 <Download className="w-4 h-4" />
                 <span>Download .APK</span>
               </motion.a>
               
               {/* --- SOCIAL ICONS SECTION --- */}
               <div className="flex gap-3 mt-2">
                  <SocialIcon 
                    icon={<Linkedin className="w-5 h-5" />} 
                    href="https://www.linkedin.com/company/kreodev/" 
                  />
                  <SocialIcon 
                    icon={<Instagram className="w-5 h-5" />} 
                    href="https://www.instagram.com/kreo.dev?igsh=MWVmeW9lc3BrYW5iNg==" 
                  />
               </div>

             </div>
          </div>

        </div>

        {/* BOTTOM: CREDITS */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-white/30 text-xs font-mono tracking-wide">
            &copy; 2025 KreoDev Inc. All rights reserved.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* MADE IN INDIA BADGE */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-default"
            >
              <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase group-hover:text-white transition-colors">Made in India</span>
              <div className="flex items-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-[#FF9933] shadow-[0_0_8px_#FF9933]" />
                 <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                 <span className="w-2 h-2 rounded-full bg-[#138808] shadow-[0_0_8px_#138808]" />
              </div>
            </motion.div>

            {/* DEVELOPER CREDIT LINK */}
            <motion.a 
              href="https://www.linkedin.com/in/gauravsingh-ai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#FF9933" }}
              className="text-white/40 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
            >
              Dev: Gaurav Singh
            </motion.a>
          </div>

        </div>

      </div>
    </footer>
  );
};

// SUB-COMPONENTS
const FooterHeading = ({ children }: any) => (
  <div className="group relative w-fit mb-4 cursor-default">
    <h4 className="text-white font-bold tracking-[0.1em] text-xs uppercase">{children}</h4>
    <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-saffron transition-all duration-300 group-hover:w-full" />
  </div>
);

const FooterLink = ({ href, children, external }: any) => (
  <li>
    <motion.a 
      href={href} 
      whileHover={{ x: 5, color: "#FF9933" }}
      className="text-white/50 text-sm font-medium flex items-center gap-2 transition-colors duration-200"
    >
      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-saffron" /> 
      {children}
      {external && <ExternalLink className="w-3 h-3 opacity-50" />}
    </motion.a>
  </li>
);

const SocialIcon = ({ icon, href }: any) => (
  <motion.a 
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, color: "#FF9933", backgroundColor: "rgba(255,255,255,0.1)" }}
    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all"
  >
    {icon}
  </motion.a>
);

export default Footer;