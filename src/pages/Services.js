import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const ServicesContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#3A3A3A',
  padding: '150px 60px 60px',
  background: '-webkit-linear-gradient(to left, #F4E1D2, #ECE7E3)',
  background: 'linear-gradient(to left, #F4E1D2, #ECE7E3)',
  minHeight: '100vh',
  overflow: 'hidden',
  zIndex: 0,
  '& .circles': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  '& .circles li': {
    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    width: '20px',
    height: '20px',
    background: '#6DA3CD',
    animation: 'animate 10s linear infinite',
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
    animationDuration: '10s',
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
    animationDuration: '12s',
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
    animationDuration: '25s',
  },
  '& .circles li:nth-of-type(9)': {
    left: '20%',
    width: '15px',
    height: '15px',
    animationDelay: '2s',
    animationDuration: '20s',
  },
  '& .circles li:nth-of-type(10)': {
    left: '85%',
    width: '10px',
    height: '10px',
    animationDelay: '0s',
    animationDuration: '15s',
  },
  '@keyframes animate': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 1,
      borderRadius: 0,
    },
    '100%': {
      transform: 'translateY(-2000px) rotate(720deg)',
      opacity: 0,
      borderRadius: '50%',
    },
  },
}));

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ServiceCard = styled(Card)(({ theme, animationDirection, animate }) => ({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  color: '#3a3a3a',
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  borderRadius: '20px',
  margin: '20px 0',
  zIndex: 2,
  opacity: animate ? 1 : 0,
  animation: animate ? `${animationDirection} 1s ease-out forwards` : 'none',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
    margin: '20px auto',
  },
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  minHeight: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
}));

const services = [
  {
    title: 'Web Development',
    description: 'We create stunning and responsive websites that help your business grow.',
    image: `${process.env.PUBLIC_URL}/Images/webdev.jpg`,
    link: '/web-development',
  },
  {
    title: 'Search Engine Optimization',
    description: 'Optimize your site to rank higher in search engines and attract more visitors.',
    image: `${process.env.PUBLIC_URL}/Images/google.png`,
    link: '/search-engine-optimization',
  },
  {
    title: 'Web Hosting',
    description: 'Designing user-friendly interfaces that provide an exceptional user experience.',
    image: `${process.env.PUBLIC_URL}/Images/webhosting.jpg`,
    link: '/web-hosting',
  },
  {
    title: 'Web Design',
    description: 'Boost your online presence and drive more sales with our digital marketing strategies.',
    image: `${process.env.PUBLIC_URL}/Images/webdesign.jpg`,
    link: '/web-design',
  },
  {
    title: 'Search Engine Marketing',
    description: 'Boost your online presence and drive more sales with our digital marketing strategies.',
    image: `${process.env.PUBLIC_URL}/Images/SEM.jpg`,
    link: '/search-engine-marketing',
  },
  {
    title: 'DNS Migration',
    description: 'Boost your online presence and drive more sales with our digital marketing strategies.',
    image: `${process.env.PUBLIC_URL}/Images/dns.jpg`,
    link: '/dns-migration',
  },
];

const Services = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay animations by 500ms

    return () => clearTimeout(timer);
  }, []);

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
      <Typography
        style={{
          fontWeight: '600',
          fontFamily: 'Nunito, sans-serif',
        }}
        variant="h4"
        align="center"
        gutterBottom
      >
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <a href={service.link} style={{ textDecoration: 'none' }}>
              <ServiceCard
                animationDirection={index % 2 === 0 ? slideInLeft : slideInRight}
                animate={animate}
                style={{
                  backgroundColor: '#BBD7EC',
                }}
              >
                <CardMedia
                  component="img"
                  alt={service.title}
                  height="200"
                  image={service.image}
                  title={service.title}
                />
                <CardContentStyled>
                  <Typography
                    style={{ fontFamily: 'Nunito, sans-serif', marginBottom: '8px' }}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {service.description}
                  </Typography>
                </CardContentStyled>
              </ServiceCard>
            </a>
          </Grid>
        ))}
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
