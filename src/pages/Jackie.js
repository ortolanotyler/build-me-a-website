import React, { useState, useEffect } from 'react';
import ParallaxSection from './Parallax';
import HomeServices from '../components/homePageServices';

function Jackie() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: '#f8f8f8', padding: '1rem' }}>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/headertyler.png`} />
      {/* Conditionally render additional parallax sections only if not on mobile */}
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/headertyler.png`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/headertyler.png`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/headertyler.png`} />

        </>
      )}
      <HomeServices />
    </div>
  );
}

export default Jackie;