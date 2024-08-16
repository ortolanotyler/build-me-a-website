import React from 'react';
import ParallaxSection from './Parallax';

function AboutPageComponent() {
  const headingStyle = {
    fontSize: '48px',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    color: '#FFF',
  };

  const sectionStyle = {
    padding: '100px 20px',
    backgroundColor: 'transparent',
    color: 'black',
    textAlign: 'center',
  };

  const subheadingStyle = {
    fontSize: '36px',
    margin: '0 0 20px',
    color: '#FFF',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#FFF',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px',
    padding: '40px',
    backgroundColor: '#f0f0f0',
  };

  const gridItemStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const gridHeadingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const gridTextStyle = {
    fontSize: '16px',
    color: '#333',
  };

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}>


      </ParallaxSection>


      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}>



      </ParallaxSection>

      

      <div style={gridContainerStyle}>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project One</h3>
          <p style={gridTextStyle}>A brief description of Project One.</p>
        </div>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project Two</h3>
          <p style={gridTextStyle}>A brief description of Project Two.</p>
        </div>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project Three</h3>
          <p style={gridTextStyle}>A brief description of Project Three.</p>
        </div>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project Four</h3>
          <p style={gridTextStyle}>A brief description of Project Four.</p>
        </div>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project Five</h3>
          <p style={gridTextStyle}>A brief description of Project Five.</p>
        </div>
        <div style={gridItemStyle}>
          <h3 style={gridHeadingStyle}>Project Six</h3>
          <p style={gridTextStyle}>A brief description of Project Six.</p>
        </div>
      </div>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>




      </ParallaxSection>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>




      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>




</ParallaxSection>

      <div style={sectionStyle}>
        <h2 style={subheadingStyle}>Get In Touch</h2>
        <p style={paragraphStyle}>
          Feel free to reach out for more information about our services and offers.
        </p>
      </div>
    </div>
  );
}

export default AboutPageComponent;
