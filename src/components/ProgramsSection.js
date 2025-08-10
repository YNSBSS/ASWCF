import React from 'react';
import './ProgramsSection.css'; // Assuming you have a CSS file for styles
const ProgramsSection = () => {
  const programs = [
    {
      title: 'Beginner Foundation',
      level: 'Level 1',
      duration: '3 Months',
      description: 'Perfect for those starting their calisthenics journey. Learn basic movements and build fundamental strength with personalized coaching and structured progression.',
      features: [
        'Basic Pull-ups & Progressions',
        'Push-up Variations & Form',
        'Core Fundamentals & Stability',
        'Flexibility & Mobility Training',
        'Nutritional Guidance',
        'Weekly Progress Tracking'
      ]
    },
    {
      title: 'Intermediate Skills',
      level: 'Level 2',
      duration: '6 Months',
      description: 'Advance your skills with intermediate movements and strength training techniques. Build impressive skills and develop advanced body control.',
      features: [
        'Muscle-up Development',
        'Handstand Training & Balance',
        'Advanced Push-up Variations',
        'Static Holds & Isometrics',
        'Ring Training Introduction',
        'Competition Preparation Basics'
      ]
    },
    {
      title: 'Elite Competition',
      level: 'Level 3',
      duration: 'Ongoing',
      description: 'Professional training for competitive athletes preparing for national and international events. Master the most challenging movements and routines.',
      features: [
        'Competition Routine Development',
        'Advanced Static Positions',
        'Freestyle & Creative Training',
        'One-on-One Mentorship',
        'Performance Analysis',
        'International Event Preparation'
      ]
    }
  ];

  return (
    <section className="programs-section-enhanced">
      {/* Floating decorative elements */}
      <div className="programs-floating-element"></div>
      <div className="programs-floating-element"></div>
      <div className="programs-floating-element"></div>
      <div className="programs-floating-element"></div>
      <div className="programs-floating-element"></div>
      <div className="programs-floating-element"></div>
      
      <div className="programs-container-enhanced">
        <div className="programs-header-enhanced">
          <h2 className="programs-title-enhanced">Training Programs</h2>
          <p className="programs-description-enhanced">
            Comprehensive programs designed for athletes of all levels, from beginners to elite competitors. 
            Our structured approach ensures progressive development and mastery of calisthenics skills through 
            expert coaching and proven methodologies.
          </p>
        </div>
        
        <div className="programs-grid-enhanced">
          {programs.map((program, index) => (
            <div key={index} className="programs-card-enhanced">
              <div className="programs-card-header-enhanced">
                <span className="programs-level-badge-enhanced">{program.level}</span>
                <span className="programs-duration-enhanced">{program.duration}</span>
              </div>
              
              <h3 className="programs-card-title-enhanced">{program.title}</h3>
              <p className="programs-card-description-enhanced">{program.description}</p>
              
              <div className="programs-features-enhanced">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="programs-feature-item-enhanced">
                    <div className="programs-feature-bullet-enhanced"></div>
                    <span className="programs-feature-text-enhanced">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="programs-cta-enhanced">
                Learn More & Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;