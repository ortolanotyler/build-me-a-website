import React from 'react';
import Hero from '../components/Hero';
import SkillsBanner from '../components/SkillsBanner';
import AboutAndReviews from '../components/AboutAndReviewsContainer';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#F4E1D2',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    width: '100%', // Ensure the header spans the full width of the screen

  };

  return (
    <div style={containerStyle}>
      <Hero />
      <SkillsBanner />
      <AboutAndReviews/>
      <main>
        {/* Additional content can be added here */}
      </main>

    </div>
  );
};

export default Home;


