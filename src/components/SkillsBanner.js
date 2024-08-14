import React, { useEffect, useState, useRef } from 'react';
import { HiCode, HiSearch, HiSpeakerphone, HiDesktopComputer, HiDatabase } from 'react-icons/hi';
import { FaServer } from 'react-icons/fa'; // Import additional icons
import { styled, keyframes } from '@mui/system';

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#bbd7ec', // Match the background color of the hero section
  minHeight: '20vh',
  padding: '50px 0', // Padding around the skills section
  width: '100%', // Make sure it spans the full width
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SkillsBannerContainer = styled('div')(({ theme, isVisible }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '1100px', // Adjusted max-width for large screens
  margin: '0 auto',
  flexWrap: 'wrap', // Allow wrapping to the next line
  gap: '30px', // Add spacing between items
  opacity: isVisible ? 1 : 0, // Initial opacity
  animation: isVisible ? `${slideInRight} 0.8s ease-out forwards` : 'none',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack items vertically on small screens
    gap: '30px', // Add more space between items when stacked
  },
}));

const Skill = styled('div')(({ theme }) => ({
  textAlign: 'center',
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif', // Correctly specify the font family
  fontWeight: '600',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
  maxWidth: '200px', // Limit the width of each icon box
}));

const Icon = styled('div')(({ theme }) => ({
  fontSize: '3rem', // Adjust icon size
  color: '#F2784B', // Ensure background color goes orange
  marginBottom: '10px',
  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.05)', // Add text shadow
}));

const SkillsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the container is visible
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
    <Wrapper>
      <SkillsBannerContainer ref={containerRef} isVisible={isVisible}>
        <Skill>
          <Icon>
            <HiDesktopComputer />
          </Icon>
          <p>Websites</p>
        </Skill>
        <Skill>
          <Icon>
            <HiSearch />
          </Icon>
          <p>SEO</p>
        </Skill>
        <Skill>
          <Icon>
            <HiCode />
          </Icon>
          <p>Web Design</p>
        </Skill>
        <Skill>
          <Icon>
            <FaServer />
          </Icon>
          <p>Web Hosting</p>
        </Skill>
        <Skill>
          <Icon>
            <HiDatabase />
          </Icon>
          <p>DNS Migration</p>
        </Skill>
        <Skill>
          <Icon>
            <HiSpeakerphone />
          </Icon>
          <p>Search Marketing</p>
        </Skill>
      </SkillsBannerContainer>
    </Wrapper>
  );
};

export default SkillsBanner;
