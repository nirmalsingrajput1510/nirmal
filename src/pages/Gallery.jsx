import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1586528116311-ad86d770483d?auto=format&fit=crop&q=80&w=800',
];

const Gallery = () => {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-9xl font-black mb-8 italic text-primary">VISUALS</h1>
          <p className="text-white/40">Glimpses into our construction sites and finished masterpieces.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 0.98 }}
              className="aspect-square rounded-3xl overflow-hidden cursor-crosshair group relative"
            >
              <img src={img} alt="ashv" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
