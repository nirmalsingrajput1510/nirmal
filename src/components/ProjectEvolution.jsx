import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectEvolution = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Transformation</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">PROJECT <span className="text-primary italic">EVOLUTION.</span></h2>
          <p className="text-white/40 max-w-xl mx-auto">Witness the precision of our engineering process from site clearing to structural completion.</p>
        </div>

        <div 
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-[40px] overflow-hidden cursor-ew-resize group shadow-2xl shadow-primary/5"
          onMouseMove={handleMouseMove}
        >
          {/* After Image (Top) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden" 
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-[100%] object-cover" 
              alt="After" 
              style={{ width: 'calc(100 * (100 / ' + sliderPos + '))' }}
            />
            <div className="absolute top-10 left-10 py-2 px-4 glass-nav rounded-full text-xs font-bold tracking-widest text-primary uppercase">Completed</div>
          </div>

          {/* Before Image (Bottom) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-50 grayscale" 
              alt="Before" 
            />
            <div className="absolute top-10 right-10 py-2 px-4 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest text-white/50 uppercase">Base Foundation</div>
          </div>

          {/* Slider Line/Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-primary pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.5)]">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-dark rounded-full" />
                <div className="w-1.5 h-1.5 bg-dark rounded-full" />
              </div>
            </div>
          </div>

          {/* Prompt Overlay */}
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-500 ${sliderPos !== 50 ? 'opacity-0' : 'opacity-100'}`}>
             <div className="px-6 py-3 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] text-white/60">
                DRAG TO REVEAL TRANSFORMATION
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEvolution;
