import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Styled container for the Services section
const ServicesContainer = styled('div')(({ theme }) => ({
  padding: '20px 20px',
  backgroundColor: '#f5f5f4',
  minHeight: '100vh', // Ensure full viewport height
}));

// Styled card for each service
const ServiceCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '20px auto',
  [theme.breakpoints.up('md')]: {
    margin: '20px',
  },
}));

// Data for services
const services = [
  {
    title: 'Web Development',
    description: 'We create stunning and responsive websites that help your business grow.',
    image: `${process.env.PUBLIC_URL}/Images/web-development.jpg`,
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
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard>
              <CardMedia
                component="img"
                alt={service.title}
                height="140"
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
