import React from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css'; // Assuming you have a CSS file for styles


const HeroSection = () => {
  return (
    <section className="hero-section-enhanced">
      {/* Layered Overlay */}
      <div className="hero-overlay-enhanced"></div>
      {/* Main Content */}
      <div className="hero-content-enhanced">
        <h1 
          className="hero-title-primary"
          data-text="الاتحاد الجزائري لتمارين الكاليسثينكس"
        >
         الاتحاد الجزائري لتمارين الكاليسثينكس
        </h1>
        
        <h2 className="hero-title-secondary">
          ALGERIAN STREET WORKOUT AND CALISTHENICS FEDERATION
        </h2>
        
        <p className="hero-description">
          Building strength, discipline, and community through the art of bodyweight training. 
          Experience the perfect fusion of traditional discipline and modern athletic excellence.
        </p>
        
        <div className="hero-buttons-container">
          <button className="hero-btn-enhanced hero-btn-primary">
            Join Our Community
          </button>
          <button className="hero-btn-enhanced hero-btn-secondary">
            Explore Training Programs
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <ChevronDown size={24} className="hero-scroll-icon" />
      </div>
    </section>
  );
};

export default HeroSection;