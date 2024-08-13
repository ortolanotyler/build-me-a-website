import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#BBD7EC', // Dark background color for the footer
  color: '#3a3a3a', // Light text color
  padding: '40px 0', // Padding for the footer
  display: 'flex',
  justifyContent: 'center', // Center the content
  alignItems: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%', // Ensure the footer spans the full width of the page
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        Copyright BuildMeAWebsite 2024
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
