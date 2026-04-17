import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Zap, Globe, Users, Clock } from 'lucide-react';

const detailedServices = [
  {
    title: 'Industrial Construction',
    icon: <Package className="w-10 h-10" />,
    description: 'Bespoke industrial solutions from warehouses to complex manufacturing plants, built for durability and scale.',
    features: ['Structural Steel', 'Heavy Machinery Bases', 'HVAC Systems'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Commercial Development',
    icon: <Zap className="w-10 h-10" />,
    description: 'High-end commercial spaces, office parks, and retail centers that redefine modern business environments.',
    features: ['Glass Curtains', 'Smart Lighting', 'Sustainable HVAC'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Project Management',
    icon: <ShieldCheck className="w-10 h-10" />,
    description: 'End-to-end management ensuring your project is delivered on time, within budget, and to the highest standards.',
    features: ['Supply Chain', 'Vendor Management', 'Quality QC'],
    image: 'https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-dark">
      <div className="container mx-auto px-6 text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-9xl font-black mb-8"
        >
          OUR <span className="text-primary italic">SERVICES</span>
        </motion.h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          From initial blueprint to the final rivet, we provide comprehensive solutions for all your construction and engineering needs.
        </p>
      </div>

      <div className="container mx-auto px-6 space-y-32">
        {detailedServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[40px] overflow-hidden group">
                <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                {service.icon}
              </div>
              <h2 className="text-4xl font-bold">{service.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-white/80">
                    <ShieldCheck className="text-primary w-5 h-5" />
                    <span className="font-semibold">{f}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-8">Request Detailed Proposal</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
