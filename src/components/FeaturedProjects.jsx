import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern Industrial Park',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000',
    size: 'lg',
  },
  {
    title: 'Skyline Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    size: 'md',
  },
  {
    title: 'Ashirvad Heights',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
    size: 'md',
  },
  {
    title: 'Metro Bridge Extension',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?auto=format&fit=crop&q=80&w=1000',
    size: 'lg',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              LIMITLESS <br />
              CONSTRUCTION POSSIBILITIES.
            </h2>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-bold">
            VIEW ALL PROJECTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer bg-[#0c1a2e]"
            >
              {/* Blueprint Overlay */}
              <div className="absolute inset-0 z-10 blueprint-grid opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none flex items-center justify-center">
                <div className="border border-white/20 p-4 opacity-30 group-hover:scale-150 transition-transform duration-700">
                  <div className="w-20 h-20 border-t border-l border-white/40" />
                </div>
              </div>

              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                </div>
                
                <div className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
