import React from 'react';
import { Star, Trophy, Users, Target, Heart, Shield } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    { name: 'Excellence', icon: Trophy, description: 'Striving for the highest standards in everything we do' },
    { name: 'Community', icon: Users, description: 'Building strong connections across Algeria' },
    { name: 'Discipline', icon: Shield, description: 'Maintaining focus and dedication to our craft' },
    { name: 'Growth', icon: Target, description: 'Continuous improvement and development' },
    { name: 'Respect', icon: Heart, description: 'Honoring our athletes, partners, and traditions' }
  ];

  const leadership = [
    {
      title: 'President',
      name: 'Dr. Mohamed Brahimi',
      description: 'Leading AFC with vision and strategic expertise',
      experience: '15+ years in sports administration'
    },
    {
      title: 'Technical Director',
      name: 'Coach Sarah Belkacem',
      description: 'Developing world-class training methodologies',
      experience: 'International calisthenics champion'
    },
    {
      title: 'Secretary General',
      name: 'Ahmed Zeroual',
      description: 'Managing operations and organizational excellence',
      experience: '10+ years in sports management'
    }
  ];

  const achievements = [
    { number: '2025', label: 'Founded' },
    { number: '500+', label: 'Active Athletes' },
    { number: '12', label: 'Regional Chapters' },
    { number: '25+', label: 'International Medals' }
  ];

  return (
    <div className="about-page-luxe">
      {/* Floating Decorative Elements */}
      <div className="about-floating-sphere"></div>
      <div className="about-floating-sphere"></div>
      <div className="about-floating-sphere"></div>
      <div className="about-floating-sphere"></div>
      <div className="about-floating-sphere"></div>
      <div className="about-floating-sphere"></div>

      <div className="about-container-luxe">
        {/* Hero Section */}
        <div className="about-hero-luxe">
          <div className="about-hero-badge-luxe">
            <span className="about-hero-badge-icon-luxe">🏛️</span>
            <span className="about-hero-badge-text-luxe">Established 2025</span>
          </div>
          
          <h1 className="about-title-luxe">
            About AFC
          </h1>
          
          <div className="about-subtitle-container-luxe">
            <p className="about-subtitle-luxe">
              The Algerian Federation of Calisthenics
            </p>
            <div className="about-title-underline-luxe"></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="about-main-card-luxe">
          <div className="about-main-glow-luxe"></div>
          
          <div className="about-mission-section-luxe">
            <div className="about-mission-icon-luxe">
              <div className="about-mission-icon-wrapper-luxe">
                <span>🎯</span>
              </div>
            </div>
            
            <div className="about-mission-content-luxe">
              <h2 className="about-mission-title-luxe">Our Mission</h2>
              <p className="about-mission-text-luxe">
                The Algerian Federation of Calisthenics (AFC) was established to promote and develop the sport of calisthenics 
                throughout Algeria. As the official governing body, we oversee competitions, training programs, and athlete development 
                at all levels.
              </p>
              <p className="about-mission-text-luxe">
                Our mission is to build a strong, united calisthenics community that represents Algeria with pride on the 
                international stage while promoting health, fitness, and personal development for all participants.
              </p>
            </div>
          </div>

          {/* Values and Leadership Grid */}
          <div className="about-content-grid-luxe">
            {/* Values Section */}
            <div className="about-values-card-luxe">
              <div className="about-values-header-luxe">
                <div className="about-values-icon-luxe">
                  <Star className="about-values-star-luxe" />
                </div>
                <h3 className="about-section-title-luxe">Our Values</h3>
              </div>
              
              <div className="about-values-list-luxe">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className={`about-value-item-luxe about-value-${index + 1}-luxe`}>
                      <div className="about-value-icon-container-luxe">
                        <IconComponent className="about-value-icon-luxe" />
                        <div className="about-value-icon-glow-luxe"></div>
                      </div>
                      <div className="about-value-content-luxe">
                        <span className="about-value-name-luxe">{value.name}</span>
                        <p className="about-value-desc-luxe">{value.description}</p>
                      </div>
                      <div className="about-value-ripple-luxe"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leadership Section */}
            <div className="about-leadership-card-luxe">
              <div className="about-leadership-header-luxe">
                <div className="about-leadership-icon-luxe">
                  <Users className="about-leadership-users-luxe" />
                </div>
                <h3 className="about-section-title-luxe">Leadership Team</h3>
              </div>
              
              <div className="about-leadership-list-luxe">
                {leadership.map((leader, index) => (
                  <div key={index} className={`about-leader-item-luxe about-leader-${index + 1}-luxe`}>
                    <div className="about-leader-avatar-luxe">
                      <span className="about-leader-initial-luxe">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                      <div className="about-leader-avatar-ring-luxe"></div>
                    </div>
                    <div className="about-leader-info-luxe">
                      <h4 className="about-leader-title-luxe">{leader.title}</h4>
                      <p className="about-leader-name-luxe">{leader.name}</p>
                      <p className="about-leader-desc-luxe">{leader.description}</p>
                      <span className="about-leader-exp-luxe">{leader.experience}</span>
                    </div>
                    <div className="about-leader-highlight-luxe"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Footer */}
        <div className="about-achievements-luxe">
          <div className="about-achievements-header-luxe">
            <h3 className="about-achievements-title-luxe">Our Journey</h3>
            <p className="about-achievements-subtitle-luxe">Milestones that define our excellence</p>
          </div>
          
          <div className="about-achievements-grid-luxe">
            {achievements.map((achievement, index) => (
              <div key={index} className={`about-achievement-item-luxe about-achievement-${index + 1}-luxe`}>
                <div className="about-achievement-number-luxe">{achievement.number}</div>
                <div className="about-achievement-label-luxe">{achievement.label}</div>
                <div className="about-achievement-glow-luxe"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;