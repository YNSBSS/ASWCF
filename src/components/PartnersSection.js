import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Ministry of Youth & Sports',
      description: 'Supporting national athletic development',
      icon: '🏛️'
    },
    {
      name: 'World Street Workout & Calisthenics Federation',
      description: 'Global calisthenics community leadership',
      icon: '🌍'
    },
    {
      name: 'Olympic Committee of Algeria',
      description: 'Promoting excellence in sports',
      icon: '🥇'
    },
    {
      name: 'National Sports Institute',
      description: 'Research and athletic innovation',
      icon: '🏫'
    }
  ];

  return (
    <section className="partners-section-luxe">
      {/* Floating Decorative Elements */}
      <div className="partners-floating-orb"></div>
      <div className="partners-floating-orb"></div>
      <div className="partners-floating-orb"></div>
      <div className="partners-floating-orb"></div>
      <div className="partners-floating-orb"></div>
      
      <div className="partners-container-luxe">
        <div className="partners-header-luxe">
          <div className="partners-badge-luxe">
            <span className="partners-badge-icon-luxe">🤝</span>
            <span className="partners-badge-text-luxe">Collaboration</span>
          </div>
          <h2 className="partners-title-luxe">
            Our Distinguished Partners
          </h2>
          <div className="partners-subtitle-wrapper-luxe">
            <p className="partners-description-luxe">
              Forging strategic alliances to elevate calisthenics excellence across Algeria
            </p>
            <div className="partners-title-accent-luxe"></div>
          </div>
        </div>
        
        <div className="partners-grid-luxe">
          {partners.map((partner, index) => (
            <div key={index} className={`partners-card-luxe partners-card-${index + 1}-luxe`}>
              <div className="partners-card-glow-luxe"></div>
              <div className="partners-card-border-luxe"></div>
              
              <div className="partners-icon-container-luxe">
                <div className="partners-icon-wrapper-luxe">
                  <span className="partners-icon-emoji-luxe">{partner.icon}</span>
                  <div className="partners-icon-backdrop-luxe"></div>
                </div>
                <div className="partners-icon-shimmer-luxe"></div>
              </div>
              
              <div className="partners-content-luxe">
                <h3 className="partners-name-luxe">{partner.name}</h3>
                <p className="partners-desc-luxe">{partner.description}</p>
                
                <div className="partners-connect-button-luxe">
                  <span className="partners-connect-text-luxe">Learn More</span>
                  <div className="partners-connect-arrow-luxe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="partners-connect-ripple-luxe"></div>
                </div>
              </div>
              
              <div className="partners-card-reflection-luxe"></div>
            </div>
          ))}
        </div>
        
        <div className="partners-footer-luxe">
          <div className="partners-stats-luxe">
            <div className="partners-stat-item-luxe">
              <span className="partners-stat-number-luxe">4+</span>
              <span className="partners-stat-label-luxe">Strategic Partners</span>
            </div>
            <div className="partners-stat-divider-luxe"></div>
            <div className="partners-stat-item-luxe">
              <span className="partners-stat-number-luxe">2024</span>
              <span className="partners-stat-label-luxe">Partnership Year</span>
            </div>
            <div className="partners-stat-divider-luxe"></div>
            <div className="partners-stat-item-luxe">
              <span className="partners-stat-number-luxe">Growing</span>
              <span className="partners-stat-label-luxe">Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;