import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled container for the About section with a similar background effect
const AboutContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  color: '#3A3A3A',
  padding: '150px 60px 60px', // Added top padding to ensure it is below the header
  background: '-webkit-linear-gradient(to left, #F4E1D2, #ECE7E3)',  // Gradient background
  background: 'linear-gradient(to left, #F4E1D2, #ECE7E3)',  // Fallback for other browsers
  minHeight: '80vh', // Ensure full viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Styled box for content wrapping and text alignment
const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  textAlign: 'left',
  padding: '50px',
  backgroundColor: '#bbd7ec',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  border: '3px solid #F4E1D2',
}));

const AboutPage = () => {
  return (
    <AboutContainer>
      <ContentBox>
        <Typography variant="h4" gutterBottom style={{ fontWeight: '600', fontFamily: 'Nunito, sans-serif' }}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.6' }}>
          Welcome to Build Me A Website, where creativity meets technology to bring your digital vision to life. We're not just another web development agency; we're your partners in crafting online experiences that grow with your business. Founded with a passion for helping businesses thrive in the digital world, our team of dedicated professionals is committed to delivering websites that are not only beautiful but also functional and scalable.
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.6' }}>
          At Build Me A Website, we believe in building lasting relationships with our clients. We don’t just create a site and disappear—we’re here for the long haul, ready to help you adapt and evolve your online presence as your business grows. Whether it's integrating new features, optimizing for search engines, or simply giving your site a fresh look, we’ve got you covered.
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.6' }}>
          Our approach is simple: we listen to your needs, understand your goals, and work closely with you to create a digital solution that’s tailored to your unique business. We take pride in our attention to detail and our commitment to delivering projects on time and within budget. And because we know that your website is a critical part of your business, we’re always available to provide ongoing support and ensure that your site remains a valuable asset.
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.6' }}>
          Thank you for considering us as your digital partner. We’re excited to work with you and help you achieve your online goals!
        </Typography>
      </ContentBox>
    </AboutContainer>
  );
};

export default AboutPage;
