import React, { useState, useEffect } from 'react';
import ParallaxSection from '../components/Parallax';
import AboutPageMainContent from '../components/aboutPageMainContent';

function AboutPage() {
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
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/About.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/About.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/About.jpg`} />
        </>
      )}
      <AboutPageMainContent />
    </div>
  );
}

export default AboutPage;
