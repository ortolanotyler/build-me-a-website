import React from 'react';

const ParallaxSection = ({ image, children }) => {
  const parallaxStyle = {
    backgroundImage: `url(${image})`,
    minHeight: '300px',
    backgroundAttachment: 'fixed',
    opacity: 0.95,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mobileParallaxStyle = {
    ...parallaxStyle,
    backgroundAttachment: 'scroll', // Disable fixed background for mobile
    backgroundSize: 'contain', // Ensure the whole image fits within the container
  };

  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  return (
    <div style={isMobile ? mobileParallaxStyle : parallaxStyle}>
      {children}
    </div>
  );
};

export default ParallaxSection;
