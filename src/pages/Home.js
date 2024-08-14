import React from 'react';
import Hero from '../components/Hero';
import SkillsBanner from '../components/SkillsBanner';
import Laptops from '../components/SiteExamples';
import Footer from '../components/Footer';
import AboutAndReviews from '../components/AboutAndReviewsContainer';
import Header from '../components/Header';

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
      <Laptops/>
      <AboutAndReviews/>
      <main>
        {/* Additional content can be added here */}
      </main>
    </div>
  );
};

export default Home;


