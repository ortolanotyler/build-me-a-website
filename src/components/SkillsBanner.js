import React, { useEffect, useState, useRef } from 'react';
import { HiCode, HiSearch, HiSpeakerphone, HiDesktopComputer, HiDatabase } from 'react-icons/hi';
import { FaServer } from 'react-icons/fa'; // Import additional icons
import { styled, keyframes } from '@mui/system';

// Slide-in animation


const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '10vh',
  padding: '10px 0', // Padding around the skills section
  width: '100%', // Make sure it spans the full width
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));

const SkillsBannerContainer = styled('div')(({ theme, isVisible }) => ({
  display: 'flex',
  zIndex: '-1000', // Ensure the overlay is behind the content

  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '1300px', // Adjusted max-width for large screens
  margin: '0 auto',
  flexWrap: 'wrap', // Allow wrapping to the next line
  gap: '30px', // Add spacing between items
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack items vertically on small screens
    gap: '30px', // Add more space between items when stacked
  },
}));

const Skill = styled('div')(({ theme }) => ({
  textAlign: 'center',
  color: '#f8f8f8',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: '600',
  cursor: 'pointer',
  textShadow: '3px 2px 1px rgba(0, 0, 0, 0.35)', // Add text shadow
  maxWidth: '200px', // Limit the width of each icon box
}));

const Icon = styled('div')(({ theme }) => ({
  fontSize: '3rem', // Adjust icon size
  color: '#f8f8f8',
  marginBottom: '10px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease', // Smooth transition for hover effect
  '&:hover': {
    transform: 'scale(1.2)', // Slightly enlarge icon on hover
  },
}));

const Link = styled('a')({
  textDecoration: 'none',
  color: '#f8f8f8',
  cursor: 'pointer',
});

const SkillsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  
  return (
    <Wrapper>
      <SkillsBannerContainer ref={containerRef} isVisible={isVisible}>
        <Skill>
          <Icon>
            <Link href='/web-development'>
              <HiDesktopComputer />
            </Link>
          </Icon>
          <Link href='/web-development'>
            <p>Websites</p>
          </Link>
        </Skill>
        <Skill>
          <Icon>
            <Link href='/search-engine-optimization'>
              <HiSearch />
            </Link>
          </Icon>
          <Link href='/search-engine-optimization'>
            <p>SEO</p>
          </Link>
        </Skill>
        <Skill>
          <Icon>
            <Link href='/web-design'>
              <HiCode />
            </Link>
          </Icon>
          <Link href='/web-design'>
            <p>Web Design</p>
          </Link>
        </Skill>
        <Skill>
          <Icon>
            <Link href='/web-hosting'>
              <FaServer />
            </Link>
          </Icon>
          <Link href='/web-hosting'>
            <p>Web Hosting</p>
          </Link>
        </Skill>
        <Skill>
          <Icon>
            <Link href='/dns-migration'>
              <HiDatabase />
            </Link>
          </Icon>
          <Link href='/dns-migration'>
            <p>DNS Migration</p>
          </Link>
        </Skill>
        <Skill>
          <Icon>
            <Link href='/search-engine-marketing'>
              <HiSpeakerphone />
            </Link>
          </Icon>
          <Link href='/search-engine-marketing'>
            <p>Search Marketing</p>
          </Link>
        </Skill>
      </SkillsBannerContainer>
    </Wrapper>
  );
};

const ParallaxSection = ({ image, children }) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={sectionStyle}>{children}</div>;
};

export default SkillsBanner;
