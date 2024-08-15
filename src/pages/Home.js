import React from 'react';
import Hero from '../components/Hero';
import SkillsBanner from '../components/SkillsBanner';
import AboutAndReviews from '../components/AboutAndReviewsContainer';
import Reviews from '../components/Reviews';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#F4E1D2',
    minHeight: '80vh',
    fontFamily: 'sans-serif',
    width: '100%', // Ensure the header spans the full width of the screen

  };

  return (
    <div style={containerStyle}>
      <Hero />
      <SkillsBanner />
      
      <AboutAndReviews/>
      
      <Reviews/>
     
      <main>
        {/* Additional content can be added here */}
      </main>

    </div>
  );
};

export default Home;


