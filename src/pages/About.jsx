import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '1998', title: 'Founding', description: 'Ashirvad Construction was established with a small team of engineers.' },
  { year: '2005', title: 'First Mega Project', description: 'Completed our first $100M commercial skyscraper in Mumbai.' },
  { year: '2012', title: 'Expansion', description: 'Opened offices in three major cities and expanded into industrial sector.' },
  { year: '2018', title: 'Innovation Lead', description: 'Adopted cutting-edge sustainable building technologies.' },
  { year: '2026', title: 'Global Recognition', description: 'Recognized as one of the top premium construction firms globally.' },
];

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            ABOUT ASHIRVAD
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-12 leading-tight">
            CRAFTING <br />
            STRUCTURAL LEGACIES.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            For over two decades, Ashirvad Construction has been at the forefront of ASHIRVAD INFRASTRUCTURE. Our commitment to quality, integrity, and innovation has allowed us to transform cityscapes and deliver projects that stand as testaments to human ingenuity.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <section className="relative py-24 border-t border-white/5">
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-20" />
          
          <div className="flex flex-col gap-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="w-full md:w-1/2 px-12 relative">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} text-center md:text-left`}>
                    <span className="text-6xl font-black text-white/5 mb-4">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                    <p className={`text-white/50 leading-relaxed max-w-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.description}
                    </p>
                  </div>
                  {/* Dot */}
                  <div className="absolute top-1/2 md:top-[70px] -left-[14px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,193,7,0.8)] z-10" />
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
