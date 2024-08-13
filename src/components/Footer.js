import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#3A3A3A', // Dark background color for the footer
  color: '#F4E1D2', // Light text color
  padding: '20px 0', // Padding for the footer
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
