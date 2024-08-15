import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const ServicesContainer = styled('div')(({ theme }) => ({
  color: '#3A3A3A',
  padding: '12.5rem 2.5rem 2.5rem',
  background: '-webkit-linear-gradient(to left, #F4E1D2, #F4E1D2)',
  background: 'linear-gradient(to left, #F4E1D2, #F4E1D2)',
  minHeight: '100vh',
  overflow: 'hidden',
  zIndex: 0,
}));

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
  border: '1.25px solid #ECE7E3',
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
  minHeight: '125px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
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
       <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>   
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
