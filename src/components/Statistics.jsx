import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '450+', label: 'Projects Completed' },
  { value: '150+', label: 'Award Wins' },
  { value: '99%', label: 'Client Satisfaction' },
];

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-[600px] md:h-[400px]">
          {/* Main Stat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="md:col-span-3 md:row-span-2 glass-card p-12 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
            <h2 className="text-7xl md:text-9xl font-black text-primary mb-4">450+</h2>
            <p className="text-xl font-bold tracking-[0.2em] uppercase text-white/60">Projects Completed</p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 glass-card p-8 flex items-center justify-between group"
          >
            <div>
              <h2 className="text-5xl font-black text-primary mb-1">25+</h2>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40">Years Experience</p>
            </div>
            <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <span className="text-primary text-xl">↗</span>
            </div>
          </motion.div>

          {/* Awards Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 glass-card p-6 text-center flex flex-col justify-center"
          >
            <h2 className="text-3xl font-black text-white mb-1">150+</h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/40">Awards</p>
          </motion.div>

          {/* Satisfaction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-card p-6 bg-primary/5 flex items-center gap-6"
          >
            <div className="text-4xl font-black text-primary">99%</div>
            <p className="text-xs font-bold tracking-widest uppercase text-white/40 leading-tight">Client <br /> Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
