import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
//import CompetitionsSection from '../components/CompetitionsSection';
import AthletesSection from '../components/AthletesSection';
import TrainingCentersSection from '../components/TrainingCentersSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      {/*      <CompetitionsSection />
 
      <AthletesSection />
      <TrainingCentersSection />
      */}
      <NewsSection />
      <GallerySection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;