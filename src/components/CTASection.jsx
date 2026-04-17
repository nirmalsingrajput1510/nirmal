import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-[#1a1a1a] border border-white/5 p-12 md:p-24 text-center">
          {/* Background pattern/glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
              READY TO BUILD YOUR <br />
              <span className="text-primary italic">VISION?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12">
              Join hundreds of satisfied clients who have partnered with Ashirvad Construction to bring their most ambitious projects to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary flex items-center gap-2 group">
                Contact Our Team
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
