import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HardHat, Ruler, Building2, Layers, MoveRight } from 'lucide-react';

const services = [
  {
    title: 'Pre-Construction',
    description: 'Comprehensive planning, feasibility studies, and precise estimation to set your project on the path to success.',
    icon: <Ruler className="w-12 h-12" />,
    img: 'https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'General Contracting',
    description: 'Expert management of all construction phases, ensuring quality, safety, and adherence to timelines.',
    icon: <HardHat className="w-12 h-12" />,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Design-Build',
    description: 'A unified approach combining architecture and construction for streamlined efficiency and cost control.',
    icon: <Building2 className="w-12 h-12" />,
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Structural Works',
    description: 'Specialized structural engineering and heavy masonry for large-scale industrial and commercial builds.',
    icon: <Layers className="w-12 h-12" />,
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
];

const HorizontalShowroom = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-dark">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-24">
          {/* Header Card */}
          <div className="flex-shrink-0 w-[500px] flex flex-col justify-center">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6">Service Showroom</span>
            <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              OUR <br /> <span className="text-primary italic">PILLARS.</span>
            </h2>
            <div className="flex items-center gap-4 text-white/30 font-bold uppercase tracking-widest text-sm">
              Scroll to explore <MoveRight className="animate-pulse" />
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, i) => (
            <div key={i} className="flex-shrink-0 w-[500px] h-[600px] relative group overflow-hidden rounded-[40px] glass-card">
              <img src={service.img} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" alt={service.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-12 space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-4xl font-black">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalShowroom;
