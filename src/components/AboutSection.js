import React from 'react';
import { Target, Globe, Star, Play } from 'lucide-react';
import './AboutSection.css'; // Assuming you have a CSS file for styles
const AboutSection = () => {
  const features = [
    { 
      icon: Target, 
      title: 'Our Mission', 
      desc: 'Developing exceptional calisthenics athletes and promoting healthy, active lifestyles across all regions of Algeria through comprehensive training programs and community engagement initiatives.' 
    },
    { 
      icon: Globe, 
      title: 'International Relations', 
      desc: 'Proud member of the World Street Workout and Calisthenics Federation (WSWCF), fostering global connections and representing Algeria on the international stage with excellence and pride.' 
    },
    { 
      icon: Star, 
      title: 'Excellence & Innovation', 
      desc: 'Committed to maintaining the highest standards in training methodologies, competition organization, athlete development, and continuous innovation in calisthenics education and performance enhancement.' 
    }
  ];

  return (
    <section className="about-section-enhanced">
      {/* Floating Decorative Elements */}
      <div className="about-floating-element"></div>
      <div className="about-floating-element"></div>
      <div className="about-floating-element"></div>
      
      <div className="about-container-enhanced">
        <div className="about-grid-enhanced">
          {/* Content Section */}
          <div className="about-content-enhanced">
            <h2 className="about-title-enhanced">
              About Our Federation
            </h2>
            <p className="about-description-enhanced">
              The Algerian Federation of Calisthenics stands as the official governing body for calisthenics sport throughout Algeria. 
              We are dedicated to promoting physical fitness, mental discipline, and community building through the transformative power of bodyweight training. 
              Our mission extends beyond sport to create a movement that inspires healthy living and personal excellence.
            </p>
            <div className="about-features-enhanced">
              {features.map((item, index) => (
                <div key={index} className="about-feature-item-enhanced">
                  <div className="about-feature-icon-enhanced">
                    <item.icon size={28} />
                  </div>
                  <div className="about-feature-content-enhanced">
                    <h3 className="about-feature-title-enhanced">{item.title}</h3>
                    <p className="about-feature-description-enhanced">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Media Section */}
          <div className="about-media-enhanced">
            <div className="about-video-container-enhanced">
              <div className="about-play-button-enhanced">
                <Play size={32} />
              </div>
            </div>
            <h3 className="about-media-title-enhanced">
              Discover Our Journey
            </h3>
            <p className="about-media-description-enhanced">
              Experience the inspiring story of calisthenics in Algeria, from humble beginnings to becoming a recognized federation. 
              Watch our athletes in action and learn about our vision for the future of bodyweight training in our nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;