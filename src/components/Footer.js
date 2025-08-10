import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles
const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Training Programs', href: '#programs' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Athletes', href: '#athletes' },
    { name: 'News', href: '#news' }
  ];

  const programs = [
    { name: 'Beginner Training', href: '#beginner' },
    { name: 'Elite Development', href: '#elite' },
    { name: 'Youth Programs', href: '#youth' },
    { name: 'Coach Certification', href: '#certification' },
    { name: 'Workshops', href: '#workshops' }
  ];

  const socialMedia = [
    { name: 'Facebook', href: '#facebook', icon: '📘' },
    { name: 'Instagram', href: '#instagram', icon: '📸' },
    { name: 'YouTube', href: '#youtube', icon: '🎥' },
    { name: 'TikTok', href: '#tiktok', icon: '🎵' }
  ];

  return (
    <footer className="afc-footer-sanctuary">
      {/* Floating Decorative Elements */}
      <div className="afc-celestial-orb afc-orb-alpha"></div>
      <div className="afc-celestial-orb afc-orb-beta"></div>
      <div className="afc-celestial-orb afc-orb-gamma"></div>
      <div className="afc-celestial-orb afc-orb-delta"></div>
      <div className="afc-celestial-orb afc-orb-epsilon"></div>
      
      <div className="afc-footer-cosmos">
        {/* Main Content Grid */}
        <div className="afc-content-constellation">
          
          {/* Brand Section */}
          <div className="afc-brand-nebula">
            <div className="afc-logo-sphere">
              <h3 className="afc-brand-stellar">ASWCF</h3>
              <div className="afc-brand-halo"></div>
            </div>
            <p className="afc-brand-essence">
              The official governing body for calisthenics sport in Algeria, 
              promoting excellence and community through strength, grace, and unity.
            </p>
            <div className="afc-brand-pulse"></div>
          </div>

          {/* Quick Links Section */}
          <div className="afc-links-galaxy">
            <h4 className="afc-section-nova">Quick Links</h4>
            <div className="afc-links-cluster">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="afc-link-star"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="afc-link-glow"></span>
                  {link.name}
                  <div className="afc-link-trail"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Programs Section */}
          <div className="afc-programs-universe">
            <h4 className="afc-section-nova">Programs</h4>
            <div className="afc-programs-cluster">
              {programs.map((program, index) => (
                <a 
                  key={index} 
                  href={program.href}
                  className="afc-program-meteor"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="afc-program-shimmer"></span>
                  {program.name}
                  <div className="afc-program-comet"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="afc-social-dimension">
            <h4 className="afc-section-nova">Follow Our Journey</h4>
            <div className="afc-social-constellation">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="afc-social-planet"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="afc-social-ring">
                    <span className="afc-social-icon">{social.icon}</span>
                  </span>
                  <span className="afc-social-name">{social.name}</span>
                  <div className="afc-social-orbit"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="afc-ethereal-divider">
          <div className="afc-divider-core"></div>
          <div className="afc-divider-aura"></div>
        </div>

        {/* Copyright Section */}
        <div className="afc-copyright-realm">
          <div className="afc-copyright-vessel">
            <p className="afc-copyright-inscription">
              <span className="afc-copyright-symbol">©</span>
              <span className="afc-copyright-year">2025</span>
              <span className="afc-copyright-entity">Algerian Federation of Calisthenics</span>
              <span className="afc-copyright-rights">All rights reserved</span>
            </p>
            <div className="afc-copyright-aurora"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;