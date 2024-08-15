import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const SectionContainer = styled('div')(({ theme }) => ({
  color: '#3A3A3A',
  padding: '150px 50px 50px',
  background: '#F4E1D2',
  minHeight: '100vh',
  overflow: 'hidden',
  zIndex: 0,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  color: '#3a3a3a',
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  borderRadius: '20px',
  border: '2px solid #ECE7E3',
  margin: '20px 0',
  zIndex: 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.up('sm')]: {
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
    title: "Hand-Crafted Web Presence",
    description: "We don't use templates. Every website we create is custom-designed to engage your audience and reflect your brand's unique identity.",
    image: `${process.env.PUBLIC_URL}/Images/webdev.jpg`,
    link: '/web-development',
  },
  {
    title: 'Increase Your Visibility',
    description: "A website alone isn't enough. We continuously optimize your site to improve search rankings and attract more customers.",
    image: `${process.env.PUBLIC_URL}/Images/google.png`,
    link: '/search-engine-optimization',
  },
  {
    title: 'Scale with Confidence',
    description: "We build your site using the latest frameworks, ensuring it's ready for future growth. Whether you need an AI chatbot or an e-commerce platform, we've got it covered.",
    image: `${process.env.PUBLIC_URL}/Images/webhosting.jpg`,
    link: '/web-hosting',
  },
  {
    title: 'Personalized Service',
    description: "Tired of dealing with large companies that treat you like just another number? So are we. Work directly with someone who cares about your business.",
    image: `${process.env.PUBLIC_URL}/Images/webdesign.jpg`,
    link: '/web-design',
  },
  {
    title: 'Cost-Effective Solutions',
    description: "We keep your costs low by handling everything in-house, eliminating the need for costly third-party services. More value, less hassle.",
    image: `${process.env.PUBLIC_URL}/Images/SEM.jpg`,
    link: '/search-engine-marketing',
  },
  {
    title: 'Focused on What Matters',
    description: "We specialize in small businesses, providing only the services that truly benefit you. No upselling, just genuine support to help you succeed.",
    image: `${process.env.PUBLIC_URL}/Images/dns.jpg`,
    link: '/dns-migration',
  },
];

const WhatWeDoSection = () => {
  return (
    <SectionContainer>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
          fontFamily: 'Nunito, sans-serif',
          marginBottom: '20px',
        }}
      >
        What We Can Do for You
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{
          fontFamily: 'Nunito, sans-serif',
          marginBottom: '50px',
        }}
      >
        Our clients trust us to deliver high-quality, tailored services.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <a href={service.link} style={{ textDecoration: 'none' }}>
              <ServiceCard
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
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      marginBottom: '8px',
                    }}
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
    </SectionContainer>
  );
};

export default WhatWeDoSection;
