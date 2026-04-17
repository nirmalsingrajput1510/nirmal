import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Ruler, Building2, Layers } from 'lucide-react';
import { cn } from '../utils/cn';

const services = [
  {
    title: 'Pre-Construction',
    description: 'Comprehensive planning, feasibility studies, and precise estimation to set your project on the path to success.',
    icon: <Ruler className="w-8 h-8" />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'General Contracting',
    description: 'Expert management of all construction phases, ensuring quality, safety, and adherence to timelines.',
    icon: <HardHat className="w-8 h-8" />,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Design-Build',
    description: 'A unified approach combining architecture and construction for streamlined efficiency and cost control.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: 'Structural Works',
    description: 'Specialized structural engineering and heavy masonry for large-scale industrial and commercial builds.',
    icon: <Layers className="w-8 h-8" />,
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            COMPREHENSIVE <br />
            CONSTRUCTION SOLUTIONS.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group transition-all duration-300 hover:bg-white/[0.08]"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6",
                "bg-gradient-to-br", service.color, "border border-white/10"
              )}>
                <div className="text-primary transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Learn More <Ruler className="w-3 h-3 rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
