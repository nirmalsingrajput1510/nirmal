import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Mumbai', x: '25%', y: '65%', projects: 124, status: 'Active' },
  { name: 'Delhi', x: '35%', y: '25%', projects: 86, status: 'Active' },
  { name: 'Bangalore', x: '35%', y: '85%', projects: 62, status: 'Active' },
  { name: 'Kolkata', x: '75%', y: '50%', projects: 45, status: 'Active' },
  { name: 'Chennai', x: '45%', y: '90%', projects: 38, status: 'Active' },
  { name: 'Hyderabad', x: '42%', y: '70%', projects: 54, status: 'Active' },
];

const ProjectMap = () => {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <section className="py-32 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Text Content */}
          <div className="lg:w-1/3">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Regional Map</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">OUR <br /> <span className="text-primary italic">FOOTPRINT.</span></h2>
            <p className="text-white/40 mb-12">
              With major project clusters across the Indian subcontinent, Ashirvad Construction maintains a dominant regional presence and logistical advantage.
            </p>
            
            <div className="space-y-4">
               {cities.slice(0, 3).map(city => (
                 <div key={city.name} className="flex justify-between items-center py-4 border-b border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="font-bold flex items-center gap-2"><MapPin size={16} className="text-primary" /> {city.name}</span>
                    <span className="text-xs font-bold font-mono">{city.projects} Projects</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Map visualization */}
          <div className="lg:w-2/3 relative">
            <div className="relative aspect-[4/3] w-full bg-white/[0.02] rounded-[60px] border border-white/5 p-8 flex items-center justify-center overflow-hidden">
               {/* Grid Pattern */}
               <div className="absolute inset-0 blueprint-grid opacity-20" />
               
               {/* Conceptual Map Shape (Stylized SVG blobs for India) */}
               <svg viewBox="0 0 100 100" className="w-[80%] opacity-10 blur-sm fill-primary/30">
                  <path d="M20,60 Q25,30 40,20 T70,30 T85,55 T65,85 T40,95 T20,75 Z" />
               </svg>

               {/* City Markers */}
               {cities.map((city) => (
                 <div
                   key={city.name}
                   className="absolute cursor-pointer group"
                   style={{ left: city.x, top: city.y }}
                   onMouseEnter={() => setActiveCity(city)}
                   onMouseLeave={() => setActiveCity(null)}
                 >
                   <motion.div 
                     whileHover={{ scale: 1.5 }}
                     className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,193,7,0.8)] relative"
                   >
                     <motion.div 
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-primary rounded-full"
                     />
                   </motion.div>

                   <AnimatePresence>
                     {activeCity?.name === city.name && (
                       <motion.div
                         initial={{ opacity: 0, y: 10, x: "-50%" }}
                         animate={{ opacity: 1, y: -45, x: "-50%" }}
                         exit={{ opacity: 0, y: 10, x: "-50%" }}
                         className="absolute left-1/2 -translate-x-1/2 px-4 py-2 border-b border-white/10 glass-nav rounded-xl whitespace-nowrap z-20"
                       >
                         <p className="text-[10px] font-bold text-white/40 uppercase mb-1">{city.status}</p>
                         <h4 className="text-sm font-black">{city.name}</h4>
                         <p className="text-xs text-primary font-bold">{city.projects} Projects</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMap;
