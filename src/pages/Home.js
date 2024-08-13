import React from 'react';
import Hero from '../components/Hero';
import SkillsBanner from '../components/SkillsBanner';
import Header from '../components/Header';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#f5f5dc',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    width: '100%', // Ensure the header spans the full width of the screen

  };

  return (
    <div style={containerStyle}>
      <Header /> {/* Include the Header component here */}
      <Hero />
      <SkillsBanner />
      <main>
        {/* Additional content can be added here */}
      </main>
    </div>
  );
};

export default Home;


