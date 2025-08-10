import React from 'react';
import { Users, MapPin, Calendar, Award, Trophy, Target, Globe, Star } from 'lucide-react';
import './StatsSection.css'; // Assuming you have a CSS file for styles
const StatsSection = () => {
  const stats = [
    { number: '150+', label: 'Active Athletes', icon: Users, description: 'Dedicated practitioners across Algeria' },
    { number: '8', label: 'Provinces Covered', icon: MapPin, description: 'Nationwide federation presence' },
    { number: '12+', label: 'Annual Events', icon: Calendar, description: 'Competitions and workshops yearly' },
    { number: 'First', label: 'Years of Excellence', icon: Award, description: 'Leading calisthenics development' },
    { number: '20+', label: 'Certified Trainers', icon: Target, description: 'Professional instructors nationwide' },
    { number: '25+', label: 'national Medals', icon: Trophy, description: 'Recognition on global stage' },
    { number: '5+', label: 'Training Centers', icon: Globe, description: 'Modern facilities nationwide' },
    { number: '98%', label: 'Satisfaction Rate', icon: Star, description: 'From our community members' }
  ];

  return (
    <section className="stats-section-enhanced">
      {/* Floating Decorative Elements */}
      <div className="stats-floating-element"></div>
      <div className="stats-floating-element"></div>
      <div className="stats-floating-element"></div>
      <div className="stats-floating-element"></div>
      <div className="stats-floating-element"></div>
      
      <div className="stats-container-enhanced">
        <div className="stats-grid-container-enhanced">
          <div className="stats-grid-enhanced">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card-enhanced">
                <div className="stats-icon-enhanced">
                  <stat.icon size={32} />
                </div>
                <div className="stats-number-enhanced">{stat.number}</div>
                <div className="stats-label-enhanced">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;