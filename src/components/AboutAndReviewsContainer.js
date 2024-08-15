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
  padding: '100px',
  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',
  },
}));

const AboutCard = styled('div')(({ theme, isVisible }) => ({
  border: '1px solid #ECE7E3',
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#f8f8f8',
  padding: '20px',
  width: '100%',
  maxWidth: '700px',
  margin: '0 auto 20px auto',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
  textAlign: 'left',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    marginBottom: '10px',
  },
}));

const CardsContainer = styled('div')(({ theme, isVisible }) => ({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  display: 'flex',
  padding: '50px',
  justifyContent: 'space-between',
  gap: '20px',
  width: '100%',
  maxWidth: '800px',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    gap: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const FAQList = styled('div')({
  maxWidth: '800px',
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  margin: '0 auto',
  marginTop: '20px',
});

const FAQItem = styled('div')({
  marginBottom: '10px',
  fontSize: '1rem',
});

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
