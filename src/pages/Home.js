import React from 'react';
import Hero from '../components/Hero';
import SkillsBanner from '../components/SkillsBanner';
import Header from '../components/Header';
import Laptops from '../components/Laptop';
import Footer from '../components/Footer';
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
      <Header /> {/* Include the Header component here */}
      <Hero />
      <SkillsBanner />
      <Laptops/>
      <AboutAndReviews/>
      <Footer/>
      <main>
        {/* Additional content can be added here */}
      </main>
    </div>
  );
};

export default Home;


