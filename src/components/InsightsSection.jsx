import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  { 
    tag: 'Innovation', 
    title: 'Self-Healing Concrete: The Future of Bridge Longevity', 
    date: 'Apr 12, 2026',
    img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600'
  },
  { 
    tag: 'Sustainability', 
    title: 'Reducing Carbon Footprint in Structural Masonry', 
    date: 'Mar 28, 2026',
    img: 'https://images.unsplash.com/photo-1586528116311-ad86d770483d?auto=format&fit=crop&q=80&w=600'
  },
  { 
    tag: 'Industry News', 
    title: 'Ashirvad Secures Coastal Bridge Extension Contract', 
    date: 'Mar 15, 2026',
    img: 'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?auto=format&fit=crop&q=80&w=600'
  },
];

const InsightsSection = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div className="max-w-xl">
             <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Engineered Intelligence</span>
             <h2 className="text-4xl md:text-6xl font-black">INSIGHTS & <span className="text-primary italic">NEWS.</span></h2>
          </div>
          <button className="hidden md:block text-xs font-black tracking-widest border-b border-primary text-primary pb-2 uppercase">View All Articles</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                <img src={art.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={art.title} />
                <div className="absolute top-6 left-6 px-4 py-2 glass-nav rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">{art.tag}</div>
              </div>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">{art.date}</p>
              <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{art.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
