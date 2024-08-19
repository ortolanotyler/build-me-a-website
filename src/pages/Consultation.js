import React, { useState, useEffect } from 'react';
import ParallaxSection from '../components/Parallax';
import ContactForm from '../components/ContactForm';

function ConsultationPage() {
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
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`} />
      {!isMobile && (
        <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`} />
      )}
      
      <ContactForm />
    </div>
  );
}

export default ConsultationPage;
