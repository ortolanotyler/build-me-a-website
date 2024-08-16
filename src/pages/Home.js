import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';

function HomePage() {
  const headingStyle = {
    fontSize: '48px',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    color: '#FFF',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '30px', // Increased grid gap for better spacing
   
    background: 'linear-gradient(135deg, #f8f8f8 0%, #f8f8f8 100%)', // Gradient background
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto', // Added margin for spacing around the grid container
    borderRadius: '15px', // Rounded corners for the grid container
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  };

  const gridItemStyle = {
    backgroundColor: '#f8f8f8',
    padding: '30px', // Increased padding for more content spacing
    borderRadius: '10px', // Rounded corners for grid items
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
  };

  const gridItemHoverStyle = {
    transform: 'translateY(-5px)', // Slight upward movement on hover
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
  };

  const gridHeadingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Subtle text shadow for readability
  };

  const gridTextStyle = {
    fontSize: '16px',
    color: '#555', // Slightly darker text for contrast
  };

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}></ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}></ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '20px 0' 
  }}>
   
    <button 
  type="submit" // Makes this a submit button
  style={{
    fontFamily: 'Nunito, sans-serif',
    backgroundColor: 'black',
    opacity: 0.8,
    color: '#f8f8f8',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#black'}
 
>
  Free Consultation
</button>

<h3 style={{ 
      fontFamily: 'Nunito, sans-serif', 
      color: '#f8f8f8', 
      marginBottom: '20px'
    }}>
      Build a website that grows with your business
    </h3>

  </div>
</ParallaxSection>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
      
      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
        
        <SkillsBanner/>
      </ParallaxSection>
    </div>
  );
}

export default HomePage;
