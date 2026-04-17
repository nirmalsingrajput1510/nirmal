import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Mumbai Sky Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Green Energy Plant', category: 'Industrial', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Coastal Bridge', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Luxury Residences', category: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Tech Park phase 2', category: 'Commercial', image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Logistics Hub', category: 'Industrial', image: 'https://images.unsplash.com/photo-1586528116311-ad86d770483d?auto=format&fit=crop&q=80&w=800' },
];

const Projects = () => {
  return (
    <div className="pt-32 pb-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight">
            BUILT TO <br />
            <span className="text-primary italic">LAST.</span>
          </h1>
          <p className="text-xl text-white/50">
            A showcase of our most ambitious and impactful construction projects across India.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <button className="mt-6 text-sm font-bold border-b border-primary text-primary w-fit pb-1">View Case Study</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
