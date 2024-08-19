import React, { useState, useEffect } from 'react';
import ParallaxSection from '../components/Parallax';

function PortfolioPage() {
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
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
        </>
      )}
    </div>
  );
}

export default PortfolioPage;

