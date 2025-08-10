import React from 'react';
import { ChevronRight } from 'lucide-react';
import './NewsSection.css'; // Assuming you have a CSS file for styles
const NewsSection = () => {
  const articles = [
    {
      title: 'New Training Facility Opens in Algiers',
      date: 'August 5, 2025',
      excerpt: 'State-of-the-art outdoor calisthenics park officially opens to serve the growing community with world-class equipment and dedicated training areas for athletes of all levels.',
      image: 'facility'
    },
    {
      title: 'Team Algeria Prepares for World Championships',
      date: 'July 28, 2025',
      excerpt: 'Our national team intensifies training ahead of the upcoming WSWCF World Championships, focusing on advanced techniques and competitive strategies.',
      image: 'training'
    },
    {
      title: 'Youth Development Program Launches',
      date: 'July 15, 2025',
      excerpt: 'New initiative aims to introduce calisthenics to schools across all 48 provinces, promoting fitness and healthy lifestyle habits among young Algerians.',
      image: 'youth'
    }
  ];

  return (
    <>
      <section className="news-section-enhanced">
        {/* Floating Decorative Elements */}
        <div className="news-floating-element"></div>
        <div className="news-floating-element"></div>
        <div className="news-floating-element"></div>
        <div className="news-floating-element"></div>
        
        <div className="news-container-enhanced">
          <div className="news-header-enhanced">
            <h2 className="news-title-enhanced">Latest News</h2>
            <p className="news-description-enhanced">
              Stay updated with the latest from the Algerian calisthenics community
            </p>
          </div>
          
          <div className="news-grid-enhanced">
            {articles.map((article, index) => (
              <article key={index} className="news-article-enhanced">
                <div className="news-image-enhanced">
                  <span className="news-image-text-enhanced">News Image</span>
                </div>
                <div className="news-content-enhanced">
                  <div className="news-date-enhanced">{article.date}</div>
                  <h3 className="news-article-title-enhanced">{article.title}</h3>
                  <p className="news-excerpt-enhanced">{article.excerpt}</p>
                  <div className="news-read-more-enhanced">
                    <span>Read More</span>
                    <ChevronRight size={16} className="news-read-more-icon-enhanced" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;