import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Styled container for the Services section with the background effect
const ServicesContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '120px 40px 40px', // Added top padding to ensure it is below the header
  background: '-webkit-linear-gradient(to left, #F4E1D2, #ECE7E3)',  // Gradient background
  background: 'linear-gradient(to left, #F4E1D2, #ECE7E3)',  // Fallback for other browsers
  minHeight: '100vh', // Ensure full viewport height
  overflow: 'hidden', // Ensure overflow is hidden
  zIndex: 0, // Ensure the container is beneath other elements
  '& .circles': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1, // Set circles to be behind the container content
  },
  '& .circles li': {
    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    width: '20px',
    height: '20px',
    background: '#6DA3CD', // Light blue color for circles
    animation: 'animate 10s linear infinite', // Faster animation
    bottom: '-100px',
  },
  '& .circles li:nth-of-type(1)': {
    left: '25%',
    width: '80px',
    height: '80px',
    animationDelay: '0s',
  },
  '& .circles li:nth-of-type(2)': {
    left: '10%',
    width: '20px',
    height: '20px',
    animationDelay: '3s',
    animationDuration: '10s', // Adjusted duration for faster movement
  },
  '& .circles li:nth-of-type(3)': {
    left: '70%',
    width: '20px',
    height: '20px',
    animationDelay: '2s',
  },
  '& .circles li:nth-of-type(4)': {
    left: '40%',
    width: '60px',
    height: '60px',
    animationDelay: '0s',
    animationDuration: '12s', // Adjusted duration for faster movement
  },
  '& .circles li:nth-of-type(5)': {
    left: '65%',
    width: '20px',
    height: '20px',
    animationDelay: '0s',
  },
  '& .circles li:nth-of-type(6)': {
    left: '75%',
    width: '110px',
    height: '110px',
    animationDelay: '6s',
  },
  '& .circles li:nth-of-type(7)': {
    left: '35%',
    width: '150px',
    height: '150px',
    animationDelay: '7s',
  },
  '& .circles li:nth-of-type(8)': {
    left: '50%',
    width: '25px',
    height: '25px',
    animationDelay: '15s',
    animationDuration: '25s', // Adjusted duration for faster movement
  },
  '& .circles li:nth-of-type(9)': {
    left: '20%',
    width: '15px',
    height: '15px',
    animationDelay: '2s',
    animationDuration: '20s', // Adjusted duration for faster movement
  },
  '& .circles li:nth-of-type(10)': {
    left: '85%',
    width: '150px',
    height: '150px',
    animationDelay: '0s',
    animationDuration: '15s', // Adjusted duration for faster movement
  },
  '@keyframes animate': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 1,
      borderRadius: 0,
    },
    '100%': {
      transform: 'translateY(-1000px) rotate(720deg)',
      opacity: 0,
      borderRadius: '50%',
    },
  },
}));

// Styled card for each service
const ServiceCard = styled(Card)(({ theme }) => ({
  width: '100%', // Full width within grid item
  borderRadius: '10px', // Add rounded corners
  margin: '20px 0', // Vertical margin to create spacing between cards
  zIndex: 2, // Ensure cards are above the background effect
  [theme.breakpoints.up('md')]: {
    width: '80%', // Adjust width for larger screens
    margin: '20px auto', // Center the cards on larger screens
  },
}));

// Data for services
const services = [
  {
    title: 'Web Development',
    description: 'We create stunning and responsive websites that help your business grow.',
    image: `${process.env.PUBLIC_URL}/Images/webdev.jpg`,
  },
  {
    title: 'SEO Optimization',
    description: 'Optimize your site to rank higher in search engines and attract more visitors.',
    image: `${process.env.PUBLIC_URL}/Images/seo-optimization.jpg`,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces that provide an exceptional user experience.',
    image: `${process.env.PUBLIC_URL}/Images/ui-ux-design.jpg`,
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence and drive more sales with our digital marketing strategies.',
    image: `${process.env.PUBLIC_URL}/Images/digital-marketing.jpg`,
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}> {/* Adjust grid item width */}
            <ServiceCard
            style = {{backgroundColor: '#F4E1D2'}}
            >
              <CardMedia
                component="img"
                alt={service.title}
                height="200"
                image={service.image}
                title={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
