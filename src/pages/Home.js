import React, { useState, useEffect } from 'react';
import ParallaxSection from './Parallax';
import HomeServices from '../components/homePageServices';

function HomePage() {
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
    <div className="App" style={{ background: '#f8f8f8', padding: '0px' }}>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
      {/* Conditionally render additional parallax sections only if not on mobile */}
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
        </>
      )}
      <HomeServices />
    </div>
  );
}

export default HomePage;
