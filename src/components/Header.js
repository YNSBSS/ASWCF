import React, { useEffect, useState } from 'react';
import { Home, Users, Trophy, Calendar, Menu, X } from 'lucide-react';
import './Header.css'; // Assuming you have a CSS file for styles
import logo from './logo.png'

const Header = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Users },
    { id: 'competitions', label: 'Competitions', icon: Trophy },
    { id: 'events', label: 'Events', icon: Calendar },
  ];

  return (
    <header className={`navbar-enhanced ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navflex justify-between">
          {/* Logo Section */}
          <div className="navbar-logo-section">
            <div className="navbar-logo-enhanced">
              <img className="navbar-logo-image" src={logo} alt="ASWCF" />
            </div>
            <div className="navbar-brand-enhanced">
              <div className="navbar-brand-main-enhanced">Algerian Federation</div>
              <div className="navbar-brand-sub-enhanced">of Calisthenics</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`nav-item-enhanced ${currentPage === item.id ? 'active' : ''}`}
              >
                <item.icon size={18} className="nav-item-icon" />
                <span className="nav-item-text">{item.label}</span>
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="mobile-menu">
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-item ${currentPage === item.id ? 'active' : ''}`}
                >
                  <item.icon size={20} className="nav-item-icon" />
                  <span className="nav-item-text font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;