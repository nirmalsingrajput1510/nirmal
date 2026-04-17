import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, BookOpen, Star } from 'lucide-react';

const values = [
  { title: 'Excellence', icon: <Star />, desc: 'We never settle for "good enough."' },
  { title: 'Safety First', icon: <Heart />, desc: 'Every worker returns home safe.' },
  { title: 'Innovation', icon: <Briefcase />, desc: 'Applying tomorrow\'s engineering today.' },
  { title: 'Training', icon: <BookOpen />, desc: 'Continuous growth for our engineers.' },
];

const CareerSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-7xl font-black mb-12">JOIN THE <br /><span className="text-primary italic">LEGACY.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]"
                >
                  <div className="text-primary mb-4">{v.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{v.title}</h4>
                  <p className="text-sm text-white/40">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full glass-card p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
             <h3 className="text-2xl font-bold mb-10">Open Positions</h3>
             <ul className="space-y-6">
                {['Senior Civil Engineer', 'Site Supervisor', 'Structural BIM Modeler', 'Quality Assurance Specialist'].map((job, j) => (
                  <motion.li 
                    key={j}
                    whileHover={{ x: 10 }}
                    className="flex justify-between items-center p-6 border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-all cursor-pointer group"
                  >
                    <div>
                      <h5 className="font-bold group-hover:text-primary transition-colors">{job}</h5>
                      <p className="text-xs text-white/30">Full-Time • Mumbai/Pune</p>
                    </div>
                    <span className="text-xs font-black text-primary opacity-0 group-hover:opacity-100 transition-opacity">APPLY →</span>
                  </motion.li>
                ))}
             </ul>
             <button className="btn-primary w-full mt-10">View Careers Portal</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
