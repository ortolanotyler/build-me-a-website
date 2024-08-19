import React, { useState, useEffect } from 'react';
import ParallaxSection from '../components/Parallax';
import ServicesPageMain from '../components/servicesPageMainContent';

function ServicesPage() {
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
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
        </>
      )}
      <ServicesPageMain />
    </div>
  );
}

export default ServicesPage;
