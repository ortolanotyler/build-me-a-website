import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Import the image
const heroImage = `${process.env.PUBLIC_URL}/Images/hero.webp`;

const ParentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Full viewport height
  backgroundColor: '#f5f5dc', // Ensure background color covers the entire viewport
});

const HeroContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#f5f5dc',
  padding: '100px 200px',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto', // Center horizontally
  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
    padding: '80px 100px',
    minHeight: '70vh',
  },
  [theme.breakpoints.down(800)]: {
    flexDirection: 'column',
    padding: '50px 30px',
    minHeight: '60vh',
  },
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',
  justifyContent: 'center',
  textAlign: 'left',
  [theme.breakpoints.down(1000)]: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  [theme.breakpoints.down(800)]: {
    textAlign: 'center',
    marginBottom: '15px',
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px',
  [theme.breakpoints.down(1000)]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down(800)]: {
    marginTop: '20px',
    width: '100%',
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontSize: '3rem',
  color: 'black',
  fontWeight: 'normal',
  marginBottom: '30px',
  [theme.breakpoints.down(1000)]: {
    fontSize: '2.5rem',
    marginBottom: '25px',
  },
  [theme.breakpoints.down(800)]: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  font: 'inherit',
  backgroundColor: 'black',
  color: '#f5f5dc',
  textAlign: 'center',
  width: '150px',
  borderRadius: '0.5em',
  fontSize: '1rem',
  padding: '10px 20px',
  fontWeight: '600',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
  alignSelf: 'center', // Center button on mobile
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size on hover
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add a shadow for more depth
    backgroundColor: 'black', // Ensure background color stays black
    color: '#f5f5dc', // Ensure text color stays beige
  },
  '&:active': {
    transform: 'scale(0.95)', // Slightly squish on click
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', // Reduce shadow on click
    backgroundColor: 'black', // Ensure background color stays black
    color: '#f5f5dc', // Ensure text color stays beige
  },
  [theme.breakpoints.down(800)]: {
    fontSize: '0.875rem', // Make button font smaller on small screens
    width: '100px', // Reduce button width on small screens
    marginTop: '15px', // Add some spacing above the button on small screens
  },
}));

const Hero = () => {
  return (
    <ParentContainer>
      <HeroContainer container spacing={1}>
        <TextContainer item xs={12} md={6}>
          <Title>Building more than a website. Build a brand</Title>
          <StyledButton>Get Started</StyledButton>
        </TextContainer>
        <ImageContainer item xs={12} md={6}>
          <img src={heroImage} alt="People working together" style={{ marginLeft: '30px', width: '80%', borderRadius: '10px' }} />
        </ImageContainer>
      </HeroContainer>
    </ParentContainer>
  );
};

export default Hero;
