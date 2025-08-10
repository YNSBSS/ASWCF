import React, { useState } from 'react';
import './EventsPage.css';

const EventsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experienceLevel: 'Beginner',
    eventInterest: 'Beginner Workshop - Algiers'
  });

  const events = [
    { 
      title: 'Beginner Workshop - Algiers', 
      date: 'August 20, 2025', 
      type: 'Workshop', 
      spots: '15 spots left',
      description: 'Perfect introduction to competitive events with hands-on training and expert guidance.'
    },
    { 
      title: 'Judge Certification Course', 
      date: 'September 8, 2025', 
      type: 'Certification', 
      spots: '8 spots left',
      description: 'Comprehensive certification program for aspiring judges and officials.'
    },
    { 
      title: 'National Team Training Camp', 
      date: 'September 25-30, 2025', 
      type: 'Training', 
      spots: 'Invitation only',
      description: 'Elite training camp for national team candidates and top-tier athletes.'
    },
    { 
      title: 'Coach Development Seminar', 
      date: 'October 15, 2025', 
      type: 'Education', 
      spots: 'Registration open',
      description: 'Advanced coaching techniques and methodology for experienced trainers.'
    },
    { 
      title: 'Youth Championship Prep', 
      date: 'November 5, 2025', 
      type: 'Competition', 
      spots: '25 spots left',
      description: 'Specialized preparation program for upcoming youth championship events.'
    },
    { 
      title: 'International Referee Workshop', 
      date: 'November 22, 2025', 
      type: 'Workshop', 
      spots: '12 spots left',
      description: 'International standards and protocols workshop for certified referees.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Registration submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      experienceLevel: 'Beginner',
      eventInterest: 'Beginner Workshop - Algiers'
    });
  };

  return (
    <div className="events-page-masterpiece">
      {/* Floating Decorative Elements */}
      <div className="events-floating-ornament"></div>
      <div className="events-floating-ornament"></div>
      <div className="events-floating-ornament"></div>
      <div className="events-floating-ornament"></div>
      <div className="events-floating-ornament"></div>
      <div className="events-floating-ornament"></div>
      
      <div className="events-container-supreme">
        {/* Header Section */}
        <div className="events-header-magnificent">
          <h1 className="events-title-legendary">Events & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join our comprehensive training programs, workshops, and certification courses designed to elevate your skills and advance your career in competitive sports.
          </p>
        </div>

        {/* Main Grid */}
        <div className="events-grid-spectacular">
          {/* Events List */}
          <div className="events-list-divine">
            <div className="events-card-content-supreme">
              <h2 className="events-section-title-royal">Upcoming Events</h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="events-item-elegant">
                    <div className="events-item-header-refined">
                      <h3 className="events-item-title-noble">{event.title}</h3>
                      <span className="events-type-badge-premium">{event.type}</span>
                    </div>
                    <div className="events-date-sophisticated">{event.date}</div>
                    <div className="events-spots-indicator-chic">{event.spots}</div>
                    {event.description && (
                      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                        {event.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Registration Form */}
          <div className="events-form-majestic">
            <div className="events-card-content-supreme">
              <h2 className="events-section-title-royal">Event Registration</h2>
              <div className="space-y-6">
                <div className="events-form-group-luxurious">
                  <div className="events-label-distinguished">Full Name</div>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="events-input-magnificent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="events-form-group-luxurious">
                  <div className="events-label-distinguished">Email Address</div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="events-input-magnificent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="events-form-group-luxurious">
                  <div className="events-label-distinguished">Experience Level</div>
                  <select 
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="events-select-magnificent"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Elite">Elite</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                
                <div className="events-form-group-luxurious">
                  <div className="events-label-distinguished">Event of Interest</div>
                  <select 
                    name="eventInterest"
                    value={formData.eventInterest}
                    onChange={handleInputChange}
                    className="events-select-magnificent"
                  >
                    {events.map((event, index) => (
                      <option key={index} value={event.title}>
                        {event.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="events-form-group-luxurious">
                  <div className="events-label-distinguished">Additional Comments</div>
                  <textarea 
                    name="comments"
                    rows={4}
                    className="events-input-magnificent resize-none"
                    placeholder="Any specific requirements or questions..."
                    onChange={handleInputChange}
                  />
                </div>
                
                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="events-button-spectacular"
                >
                  Register for Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;