import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Star, Sparkles } from 'lucide-react';
import './ContactSection.css'; // Assuming you have a CSS file for styles 
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'info@algerian-calisthenics.dz',
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+213 (0) 21 XX XX XX',
      gradient: 'from-green-500 to-teal-600'
    },
    { 
      icon: MapPin, 
      label: 'Address', 
      value: 'Sports Ministry Complex, Algiers, Algeria',
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Message sent:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <section className="contact-sanctuary-realm">
      {/* Floating Luminous Particles */}
      <div className="contact-luminous-particle contact-particle-alpha"></div>
      <div className="contact-luminous-particle contact-particle-beta"></div>
      <div className="contact-luminous-particle contact-particle-gamma"></div>
      <div className="contact-luminous-particle contact-particle-delta"></div>
      <div className="contact-luminous-particle contact-particle-epsilon"></div>
      <div className="contact-luminous-particle contact-particle-zeta"></div>

      <div className="contact-cosmic-container">
        <div className="contact-stellar-grid">
          
          {/* Information Section */}
          <div className="contact-info-nebula">
            {/* Header */}
            <div className="contact-header-constellation">
              <h2 className="contact-title-supernova">
                <span className="contact-title-core">Get In Touch</span>
                <div className="contact-title-corona"></div>
              </h2>
              <p className="contact-description-aurora">
                Join our federation, get training information, or connect with the 
                calisthenics community in Algeria. Let's build strength together.
              </p>
              <div className="contact-header-stardust"></div>
            </div>

            {/* Contact Cards */}
            <div className="contact-cards-galaxy">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="contact-info-crystal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="contact-icon-sphere">
                    <contact.icon className="contact-icon-star" size={24} />
                    <div className="contact-icon-halo"></div>
                  </div>
                  <div className="contact-details-prism">
                    <div className="contact-label-whisper">{contact.label}</div>
                    <div className="contact-value-radiance">{contact.value}</div>
                  </div>
                  <div className="contact-card-shimmer"></div>
                  <div className="contact-card-pulse"></div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="contact-info-sparkles">
              <Sparkles className="contact-sparkle contact-sparkle-one" size={20} />
              <Star className="contact-sparkle contact-sparkle-two" size={16} />
              <Sparkles className="contact-sparkle contact-sparkle-three" size={18} />
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form-dimension">
            <div className="contact-form-vessel">
              <h3 className="contact-form-title-nova">
                Send us a Message
                <div className="contact-form-title-trail"></div>
              </h3>
              
              <div className="contact-form-cosmos">
                {/* Name Field */}
                <div className="contact-field-constellation">
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`contact-input-crystal ${focusedField === 'name' ? 'contact-input-focused' : ''}`}
                  />
                  <div className="contact-field-aurora"></div>
                  <div className="contact-field-glow"></div>
                </div>

                {/* Email Field */}
                <div className="contact-field-constellation">
                  <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`contact-input-crystal ${focusedField === 'email' ? 'contact-input-focused' : ''}`}
                  />
                  <div className="contact-field-aurora"></div>
                  <div className="contact-field-glow"></div>
                </div>

                {/* Message Field */}
                <div className="contact-field-constellation">
                  <textarea 
                    rows="6"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`contact-textarea-crystal ${focusedField === 'message' ? 'contact-input-focused' : ''}`}
                  ></textarea>
                  <div className="contact-field-aurora"></div>
                  <div className="contact-field-glow"></div>
                </div>

                {/* Submit Button */}
                <div className="contact-submit-universe">
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    className="contact-submit-comet"
                  >
                    <span className="contact-submit-core">
                      <Send size={20} className="contact-submit-icon" />
                      Send Message
                    </span>
                    <div className="contact-submit-trail"></div>
                    <div className="contact-submit-explosion"></div>
                  </button>
                </div>
              </div>

              {/* Form Decorative Elements */}
              <div className="contact-form-constellation-bg">
                <div className="contact-form-star contact-form-star-one"></div>
                <div className="contact-form-star contact-form-star-two"></div>
                <div className="contact-form-star contact-form-star-three"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;