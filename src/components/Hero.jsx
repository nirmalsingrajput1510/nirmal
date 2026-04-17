import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* 3D Background */}
      <HeroBackground />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            ESTABLISHED 1998 • PREMIUM CONSTRUCTION
          </span>
          
          <SplitText className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            ASHIRVAD INFRASTRUCTURE.
          </SplitText>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Ashirvad Construction delivers world-class industrial, commercial, and residential projects with unmatched precision and innovative design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Start Your Project <ChevronRight size={20} />
              </motion.button>
            </Magnetic>
            
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                View Showreel
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="flex flex-col gap-4 text-xs font-bold tracking-widest text-white/30 uppercase">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/30"></span>
            SCROLL TO EXPLORE
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark/80 pointer-events-none" />
    </section>
  );
};

export default Hero;
