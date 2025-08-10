import React, { useState } from 'react';
import { Trophy, Calendar, MapPin, Star, Award, Crown, Target, Users, Clock, Medal } from 'lucide-react';
import './CompetitionsPage.css';
const CompetitionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCompetition, setActiveCompetition] = useState(null);

  const competitions = [
    { 
      event: 'National Championship', 
      date: 'September 15', 
      location: 'Algiers', 
      status: 'Registration Open',
      participants: 150,
      prize: '50,000 DZD',
      difficulty: 'Expert'
    },
    { 
      event: 'Regional Qualifiers - West', 
      date: 'October 5', 
      location: 'Oran', 
      status: 'Upcoming',
      participants: 85,
      prize: '25,000 DZD',
      difficulty: 'Advanced'
    },
    { 
      event: 'Regional Qualifiers - East', 
      date: 'October 12', 
      location: 'Constantine', 
      status: 'Upcoming',
      participants: 92,
      prize: '25,000 DZD',
      difficulty: 'Advanced'
    },
    { 
      event: 'Youth Championship', 
      date: 'November 2', 
      location: 'Setif', 
      status: 'Upcoming',
      participants: 68,
      prize: '15,000 DZD',
      difficulty: 'Intermediate'
    },
    { 
      event: 'International Showcase', 
      date: 'December 20', 
      location: 'Algiers', 
      status: 'Planning',
      participants: 200,
      prize: '100,000 DZD',
      difficulty: 'Elite'
    }
  ];

  const categories = [
    { name: 'Men\'s Static Skills', icon: Target, color: '#6366f1', participants: 45 },
    { name: 'Women\'s Static Skills', icon: Star, color: '#8b5cf6', participants: 38 },
    { name: 'Men\'s Freestyle', icon: Crown, color: '#ec4899', participants: 52 },
    { name: 'Women\'s Freestyle', icon: Award, color: '#f59e0b', participants: 41 },
    { name: 'Youth (16-18)', icon: Medal, color: '#10b981', participants: 29 },
    { name: 'Team Battles', icon: Users, color: '#ef4444', participants: 16 }
  ];

  const judgingCriteria = [
    { criteria: 'Technical Execution', weight: '40%', description: 'Precision and form of movements' },
    { criteria: 'Difficulty', weight: '30%', description: 'Complexity of skills performed' },
    { criteria: 'Creativity/Flow', weight: '20%', description: 'Innovation and smooth transitions' },
    { criteria: 'Presentation', weight: '10%', description: 'Stage presence and performance' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Registration Open': return 'competitions-status-open-luxe';
      case 'Upcoming': return 'competitions-status-upcoming-luxe';
      case 'Planning': return 'competitions-status-planning-luxe';
      default: return 'competitions-status-default-luxe';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Elite': return 'competitions-difficulty-elite-luxe';
      case 'Expert': return 'competitions-difficulty-expert-luxe';
      case 'Advanced': return 'competitions-difficulty-advanced-luxe';
      case 'Intermediate': return 'competitions-difficulty-intermediate-luxe';
      default: return 'competitions-difficulty-default-luxe';
    }
  };

  return (
    <div className="competitions-page-luxe">
      {/* Floating Decorative Elements */}
      <div className="competitions-floating-orb-luxe"></div>
      <div className="competitions-floating-orb-luxe"></div>
      <div className="competitions-floating-orb-luxe"></div>
      <div className="competitions-floating-orb-luxe"></div>
      <div className="competitions-floating-orb-luxe"></div>
      <div className="competitions-floating-orb-luxe"></div>

      <div className="competitions-container-luxe">
        {/* Hero Section */}
        <div className="competitions-hero-luxe">
          <div className="competitions-hero-badge-luxe">
            <Trophy className="competitions-hero-badge-icon-luxe" />
            <span className="competitions-hero-badge-text-luxe">Elite Competition Hub</span>
          </div>
          <h1 className="competitions-title-luxe">Competitions</h1>
          <div className="competitions-subtitle-container-luxe">
            <p className="competitions-subtitle-luxe">Where Champions Rise & Legends Are Born</p>
            <div className="competitions-title-underline-luxe"></div>
          </div>
          <div className="competitions-hero-glow-luxe"></div>
        </div>

        {/* Main Content */}
        <div className="competitions-main-card-luxe">
          <div className="competitions-main-glow-luxe"></div>
          
          {/* Calendar Section */}
          <div className="competitions-calendar-section-luxe">
            <div className="competitions-calendar-header-luxe">
              <div className="competitions-calendar-icon-luxe">
                <div className="competitions-calendar-icon-wrapper-luxe">
                  <Calendar className="competitions-calendar-calendar-luxe" />
                </div>
              </div>
              <div className="competitions-calendar-content-luxe">
                <h2 className="competitions-calendar-title-luxe">Competition Calendar 2025</h2>
                <p className="competitions-calendar-text-luxe">
                  Join the most prestigious competitions in Algeria and showcase your extraordinary skills
                </p>
              </div>
            </div>
            
            <div className="competitions-calendar-grid-luxe">
              {competitions.map((comp, index) => (
                <div 
                  key={index} 
                  className={`competitions-event-item-luxe competitions-event-${index + 1}-luxe ${activeCompetition === index ? 'competitions-event-active-luxe' : ''}`}
                  onClick={() => setActiveCompetition(activeCompetition === index ? null : index)}
                >
                  <div className="competitions-event-glow-luxe"></div>
                  <div className="competitions-event-ripple-luxe"></div>
                  
                  <div className="competitions-event-header-luxe">
                    <div className="competitions-event-badge-luxe">
                      <Trophy className="competitions-event-trophy-luxe" />
                    </div>
                    <div className="competitions-event-status-container-luxe">
                      <span className={`competitions-event-status-luxe ${getStatusColor(comp.status)}`}>
                        {comp.status}
                      </span>
                      <span className={`competitions-event-difficulty-luxe ${getDifficultyColor(comp.difficulty)}`}>
                        {comp.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="competitions-event-name-luxe">{comp.event}</h3>
                  
                  <div className="competitions-event-details-luxe">
                    <div className="competitions-event-detail-luxe">
                      <Calendar className="competitions-event-detail-icon-luxe" />
                      <span className="competitions-event-detail-text-luxe">{comp.date}</span>
                    </div>
                    <div className="competitions-event-detail-luxe">
                      <MapPin className="competitions-event-detail-icon-luxe" />
                      <span className="competitions-event-detail-text-luxe">{comp.location}</span>
                    </div>
                    <div className="competitions-event-detail-luxe">
                      <Users className="competitions-event-detail-icon-luxe" />
                      <span className="competitions-event-detail-text-luxe">{comp.participants} Athletes</span>
                    </div>
                    <div className="competitions-event-detail-luxe">
                      <Award className="competitions-event-detail-icon-luxe" />
                      <span className="competitions-event-detail-text-luxe">{comp.prize}</span>
                    </div>
                  </div>
                  
                  <div className="competitions-event-highlight-luxe"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="competitions-content-grid-luxe">
          {/* Categories Card */}
          <div className="competitions-categories-card-luxe">
            <div className="competitions-categories-header-luxe">
              <div className="competitions-categories-icon-luxe">
                <Target className="competitions-categories-target-luxe" />
              </div>
              <h2 className="competitions-section-title-luxe">Competition Categories</h2>
            </div>
            
            <div className="competitions-categories-list-luxe">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index} 
                    className={`competitions-category-item-luxe competitions-category-${index + 1}-luxe ${selectedCategory === index ? 'competitions-category-selected-luxe' : ''}`}
                    onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                  >
                    <div className="competitions-category-icon-container-luxe">
                      <IconComponent className="competitions-category-icon-luxe" style={{ color: category.color }} />
                      <div className="competitions-category-icon-glow-luxe" style={{ background: `radial-gradient(circle, ${category.color}20 0%, transparent 70%)` }}></div>
                    </div>
                    <div className="competitions-category-content-luxe">
                      <span className="competitions-category-name-luxe">{category.name}</span>
                      <span className="competitions-category-participants-luxe">{category.participants} registered</span>
                    </div>
                    <div className="competitions-category-ripple-luxe"></div>
                    <div className="competitions-category-highlight-luxe" style={{ background: `linear-gradient(180deg, ${category.color} 0%, ${category.color}80 100%)` }}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Judging Card */}
          <div className="competitions-judging-card-luxe">
            <div className="competitions-judging-header-luxe">
              <div className="competitions-judging-icon-luxe">
                <Star className="competitions-judging-star-luxe" />
              </div>
              <h2 className="competitions-section-title-luxe">Judging Criteria</h2>
            </div>
            
            <div className="competitions-judging-list-luxe">
              {judgingCriteria.map((item, index) => (
                <div key={index} className={`competitions-criteria-item-luxe competitions-criteria-${index + 1}-luxe`}>
                  <div className="competitions-criteria-weight-luxe">
                    <span className="competitions-criteria-percentage-luxe">{item.weight}</span>
                    <div className="competitions-criteria-weight-bar-luxe">
                      <div 
                        className="competitions-criteria-weight-fill-luxe" 
                        style={{ width: item.weight }}
                      ></div>
                    </div>
                  </div>
                  <div className="competitions-criteria-content-luxe">
                    <h4 className="competitions-criteria-name-luxe">{item.criteria}</h4>
                    <p className="competitions-criteria-desc-luxe">{item.description}</p>
                  </div>
                  <div className="competitions-criteria-glow-luxe"></div>
                  <div className="competitions-criteria-highlight-luxe"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="competitions-stats-luxe">
          <div className="competitions-stats-header-luxe">
            <h2 className="competitions-stats-title-luxe">Tournament Statistics</h2>
            <p className="competitions-stats-subtitle-luxe">Performance metrics and achievement data</p>
          </div>
          
          <div className="competitions-stats-grid-luxe">
            <div className="competitions-stat-item-luxe competitions-stat-1-luxe">
              <div className="competitions-stat-icon-luxe">
                <Trophy className="competitions-stat-trophy-luxe" />
              </div>
              <span className="competitions-stat-number-luxe">500+</span>
              <span className="competitions-stat-label-luxe">Total Athletes</span>
              <div className="competitions-stat-glow-luxe"></div>
            </div>
            
            <div className="competitions-stat-item-luxe competitions-stat-2-luxe">
              <div className="competitions-stat-icon-luxe">
                <Crown className="competitions-stat-crown-luxe" />
              </div>
              <span className="competitions-stat-number-luxe">12</span>
              <span className="competitions-stat-label-luxe">Championships</span>
              <div className="competitions-stat-glow-luxe"></div>
            </div>
            
            <div className="competitions-stat-item-luxe competitions-stat-3-luxe">
              <div className="competitions-stat-icon-luxe">
                <Medal className="competitions-stat-medal-luxe" />
              </div>
              <span className="competitions-stat-number-luxe">24</span>
              <span className="competitions-stat-label-luxe">Cities</span>
              <div className="competitions-stat-glow-luxe"></div>
            </div>
            
            <div className="competitions-stat-item-luxe competitions-stat-4-luxe">
              <div className="competitions-stat-icon-luxe">
                <Clock className="competitions-stat-clock-luxe" />
              </div>
              <span className="competitions-stat-number-luxe">5</span>
              <span className="competitions-stat-label-luxe">Years Running</span>
              <div className="competitions-stat-glow-luxe"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;