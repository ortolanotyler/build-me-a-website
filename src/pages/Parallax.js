import React from 'react';

const ParallaxSection = ({ image, children }) => {
  const parallaxStyle = {
    backgroundImage: `url(${image})`,
    minHeight: '300px',
    backgroundAttachment: 'fixed',
    opacity: 0.5,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={parallaxStyle}>
      {children}
    </div>
  );
};

export default ParallaxSection;
