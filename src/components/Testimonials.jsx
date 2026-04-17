import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ashirvad Construction doesn't just build structures; they build trust. Their engineering precision is unmatched in the industry.",
    author: "Rajesh Malhotra",
    position: "CEO, Malhotra Infrastructure",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The technical depth and professionalism of their BIM modelling team saved us months of rework on the Skyline Plaza project.",
    author: "Ananya Sharma",
    position: "Director, Urban Development Board",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "From site clearing to the final handover, their transparency and adherence to safety standards are world-class.",
    author: "Vikram Goel",
    position: "Lead Architect, Goel Associates",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <Quote size={60} className="text-primary opacity-20 mb-12" />
          
          <div className="relative h-[300px] md:h-[200px] w-full mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h3 className="text-2xl md:text-4xl font-black leading-tight italic">
                  "{testimonials[current].quote}"
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={testimonials[current].img} className="w-16 h-16 rounded-full border-2 border-primary object-cover" alt={testimonials[current].author} />
              <div className="text-left">
                <p className="font-bold text-lg">{testimonials[current].author}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">{testimonials[current].position}</p>
              </div>
            </div>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-primary w-8' : 'bg-white/10'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
