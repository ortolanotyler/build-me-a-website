import React, { useEffect, useState, useRef } from 'react';
import { styled, keyframes } from '@mui/system';
import WhatWeDoSection from './WhatWeDoSection';

// Import image
const AboutImage = `${process.env.PUBLIC_URL}/Images/digital-marketing.jpg`;

// Slide-in keyframe animation from below
const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',
  },
}));



const AboutAndReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <AboutContainer ref={containerRef} isVisible={isVisible}>
      <WhatWeDoSection  />

    
    </AboutContainer>
  );
};

export default AboutAndReviews;
