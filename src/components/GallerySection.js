import React, { useState, useEffect } from 'react';
import './GallerySection.css'; // Assuming you have a CSS file for styles
const GalleryEnhanced = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const galleryItems = [
    { id: 1, category: 'training', title: 'Street Workout', description: 'Outdoor training session in Algiers' },
    { id: 2, category: 'competition', title: 'National Championship', description: 'Athletes competing in freestyle' },
    { id: 3, category: 'training', title: 'Muscle Up Progress', description: 'Perfecting the muscle up technique' },
    { id: 4, category: 'community', title: 'Team Building', description: 'Calisthenics family gathering' },
    { id: 5, category: 'competition', title: 'Battle of Bars', description: 'Intense competition moment' },
    { id: 6, category: 'training', title: 'Basic Movements', description: 'Foundation training session' },
    { id: 7, category: 'community', title: 'Youth Program', description: 'Training the next generation' },
    { id: 8, category: 'competition', title: 'Victory Moment', description: 'Celebrating achievements' },
    { id: 9, category: 'training', title: 'Advanced Skills', description: 'High-level skill development' },
    { id: 10, category: 'community', title: 'Workshop Day', description: 'Educational community event' },
    { id: 11, category: 'training', title: 'Strength Focus', description: 'Building raw power' },
    { id: 12, category: 'competition', title: 'Medal Ceremony', description: 'Honoring the champions' }
  ];

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'training', label: 'Training' },
    { key: 'competition', label: 'Competitions' },
    { key: 'community', label: 'Community' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="gallery-section-ultimate">
      {/* Floating Decorative Elements */}
      <div className="gallery-floating-orb gallery-orb-1"></div>
      <div className="gallery-floating-orb gallery-orb-2"></div>
      <div className="gallery-floating-orb gallery-orb-3"></div>
      <div className="gallery-floating-orb gallery-orb-4"></div>
      <div className="gallery-floating-orb gallery-orb-5"></div>

      <div className="gallery-container-ultimate">
        {/* Header Section */}
        <div className={`gallery-header-ultimate ${isVisible ? 'gallery-visible' : ''}`}>
          <div className="gallery-title-wrapper">
            <h2 className="gallery-title-ultimate">
              Gallery
            </h2>
            <div className="gallery-title-accent"></div>
          </div>
          <p className="gallery-description-ultimate">
            Capturing the spirit, strength, and beauty of Algerian calisthenics community
          </p>
          
          {/* Filter Buttons */}
          <div className="gallery-filter-container">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`gallery-filter-btn ${activeFilter === filter.key ? 'gallery-filter-active' : ''}`}
              >
                {filter.label}
                <div className="gallery-filter-glow"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-ultimate">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item-ultimate ${hoveredIndex === index ? 'gallery-item-hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="gallery-image-container">
                <div className="gallery-image-placeholder">
                  <div className="gallery-image-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                      <circle cx="12" cy="13" r="3"/>
                    </svg>
                  </div>
                  <div className="gallery-image-overlay"></div>
                  <div className="gallery-image-pattern"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="gallery-content-overlay">
                  <div className="gallery-item-category">
                    {item.category}
                  </div>
                  <h3 className="gallery-item-title">
                    {item.title}
                  </h3>
                  <p className="gallery-item-description">
                    {item.description}
                  </p>
                  <button className="gallery-view-btn">
                    <span>View Full</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="gallery-item-border"></div>
              <div className="gallery-item-shine"></div>
              <div className="gallery-item-glow"></div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="gallery-load-more-section">
          <button className="gallery-load-more-btn">
            <span>Load More Photos</span>
            <div className="gallery-btn-ripple"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryEnhanced;