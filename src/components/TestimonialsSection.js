import React, { useState, useEffect } from 'react';
import { Star, Quote, Heart, Award, Trophy, Users } from 'lucide-react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styles

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      quote: "The AFC has transformed my life completely. The community support, world-class training facilities, and competitive opportunities have pushed me to achieve levels I never thought were possible. Every day brings new challenges and growth.",
      name: "Rami Boudjelal",
      role: "National Team Member",
      city: "Algiers",
      achievement: "3x National Champion",
      icon: Trophy,
      rating: 5
    },
    {
      quote: "As a coach, the certification program provided me with invaluable knowledge and cutting-edge techniques that I implement daily with my students. The continuous education and mentorship have been exceptional.",
      name: "Amina Khelif",
      role: "Certified Master Coach",
      city: "Oran",
      achievement: "Coach of the Year 2024",
      icon: Award,
      rating: 5
    },
    {
      quote: "Starting as a complete beginner with zero experience, the progressive training system and supportive community helped me safely develop fundamental skills and confidence to join regional competitions.",
      name: "Youcef Mammeri",
      role: "Regional Competitor",
      city: "Constantine",
      achievement: "Rising Star Award",
      icon: Star,
      rating: 5
    },
    {
      quote: "The AFC family welcomed me with open arms. The training methodology is scientifically proven, and the facilities are absolutely world-class. I've made lifelong friendships here.",
      name: "Fatima Zerrouki",
      role: "Youth Champion",
      city: "Annaba",
      achievement: "Youth Division Winner",
      icon: Heart,
      rating: 5
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="testimonials-haven-enhanced">
        {/* Floating Decorative Elements */}
        <div className="testimonials-floating-orb testimonials-orb-1"></div>
        <div className="testimonials-floating-orb testimonials-orb-2"></div>
        <div className="testimonials-floating-orb testimonials-orb-3"></div>
        <div className="testimonials-floating-orb testimonials-orb-4"></div>
        <div className="testimonials-floating-orb testimonials-orb-5"></div>

        {/* Mouse Follower Effect */}
        <div 
          className="testimonials-mouse-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>

        <div className="testimonials-cosmos-container">
          {/* Header Section */}
          <div className="testimonials-stellar-header">
            <div className="testimonials-header-icon-wrapper">
              <Users className="testimonials-header-icon" size={48} />
            </div>
            <h2 className="testimonials-celestial-title">
              Voices of Excellence
            </h2>
            <p className="testimonials-ethereal-subtitle">
              Discover the transformative journeys of our extraordinary community members
            </p>
          </div>

          {/* Featured Testimonial Spotlight */}
          <div className="testimonials-spotlight-arena">
            <div className="testimonials-featured-card">
              <div className="testimonials-featured-quote-section">
                <Quote className="testimonials-quote-icon" size={32} />
                <p className="testimonials-featured-quote">
                  {testimonials[activeTestimonial].quote}
                </p>
              </div>
              
              <div className="testimonials-featured-profile">
                <div className="testimonials-profile-avatar">
                  {React.createElement(testimonials[activeTestimonial].icon, {
                    className: "testimonials-avatar-icon",
                    size: 24
                  })}
                </div>
                <div className="testimonials-profile-info">
                  <h4 className="testimonials-profile-name">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="testimonials-profile-role">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="testimonials-profile-location">
                    {testimonials[activeTestimonial].city}
                  </p>
                  <div className="testimonials-achievement-badge">
                    <Award size={14} />
                    <span>{testimonials[activeTestimonial].achievement}</span>
                  </div>
                </div>
                <div className="testimonials-rating-constellation">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="testimonials-star-filled"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="testimonials-navigation-galaxy">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials-nav-star ${index === activeTestimonial ? 'testimonials-nav-active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                >
                  <Star size={12} />
                </button>
              ))}
            </div>
          </div>

          {/* Grid of All Testimonials */}
          <div className="testimonials-constellation-grid">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <div 
                  key={index} 
                  className={`testimonials-crystal-card ${index === activeTestimonial ? 'testimonials-card-highlighted' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="testimonials-card-glow-effect"></div>
                  
                  <div className="testimonials-card-header">
                    <div className="testimonials-card-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="testimonials-rating-stars">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} size={14} className="testimonials-star-golden" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="testimonials-card-quote">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="testimonials-card-footer">
                    <div className="testimonials-profile-section">
                      <h4 className="testimonials-card-name">{testimonial.name}</h4>
                      <p className="testimonials-card-role">{testimonial.role}</p>
                      <p className="testimonials-card-city">{testimonial.city}</p>
                    </div>
                    
                    <div className="testimonials-achievement-ribbon">
                      <Award size={12} />
                      <span>{testimonial.achievement}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;