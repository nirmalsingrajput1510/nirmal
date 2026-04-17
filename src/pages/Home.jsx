import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import HorizontalShowroom from '../components/HorizontalShowroom';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectEvolution from '../components/ProjectEvolution';
import ProjectMap from '../components/ProjectMap';
import Testimonials from '../components/Testimonials';
import InsightsSection from '../components/InsightsSection';
import CareerSection from '../components/CareerSection';
import CTASection from '../components/CTASection';
import FloatingShapes from '../components/FloatingShapes';

const Home = () => {
  return (
    <div className="bg-dark relative overflow-hidden">
      {/* Massive Background Text - Fixed & Parallax Style */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 select-none">
        <h1 className="text-[25vw] font-black text-outline uppercase leading-none text-center">
          ASHIRVAD <br /> CONSTRUCTION
        </h1>
      </div>
      
      <FloatingShapes />
      <Hero />
      <Statistics />
      <HorizontalShowroom />
      <FeaturedProjects />
      <ProjectEvolution />
      <ProjectMap />
      <Testimonials />
      <InsightsSection />
      <CareerSection />
      <CTASection />
    </div>
  );
};

export default Home;
