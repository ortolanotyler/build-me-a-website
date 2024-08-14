import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, Typography, Box, Grid, Rating } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Import image
const AboutImage = `${process.env.PUBLIC_URL}/Images/about-image.jpg`;

// Slide-in keyframe animation from below
const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled container for the About section
const AboutContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#bbd7ec',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px',
  [theme.breakpoints.down('md')]: {
    padding: '10px',
  },
}));

// Main horizontal card for the About text
const AboutCard = styled('div')(({ theme, isVisible }) => ({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '20px',
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto 20px auto',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    marginBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

// Container for the two cards below the main card
const CardsContainer = styled('div')(({ theme, isVisible }) => ({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  display: 'flex',
  padding: '50px',
  justifyContent: 'space-between',
  gap: '20px',
  width: '100%',
  maxWidth: '900px',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    gap: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

// Styled card for the image
const ImageCard = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '20px',
  flex: 1,
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '10px',
  },
}));

// Styled image
const Image = styled('img')({
  width: '100%',
  borderRadius: '10px',
});

// Bullet points list
const BulletList = styled('ul')({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  listStyleType: 'disc',
  margin: '0 auto',
  padding: '0',
  textAlign: 'center',
  width: 'fit-content',
});

const BulletListItem = styled('li')({
  fontFamily: 'Nunito, sans-serif',
  textAlign: 'left',
});

// Styled card for the bullet points
const BulletPointsCard = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '50px 25px',
  flex: 1,
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '10px',
  },
}));

// Container for the reviews section
const ReviewsContainer = styled('div')(({ isVisible }) => ({
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4E1D2',
  padding: '40px 20px',
  marginTop: '50px',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
}));

// Custom style for each review card
const ReviewCard = styled(Card)(({ theme }) => ({
  maxWidth: '300px',
  borderRadius: '10px',
  width: '100%',
  margin: '10px 10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    marginBottom: '20px',
  },
}));

const AboutAndReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const reviews = [
    {
      name: 'John Doe',
      review: 'Excellent service and support. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: 'Professional and timely delivery. Great experience overall.',
      rating: 5,
    },
    {
      name: 'Michael Johnson',
      review: 'Fantastic work! The team exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      review: 'Very satisfied with the final product. Great job!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the container is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <AboutContainer ref={containerRef}>
      <AboutCard isVisible={isVisible}>
        <h2>About Us</h2>
        <p>
          Welcome to Build Me A Website, where creativity meets technology to bring your digital vision to life. We're not just another web development agency; we're your partners in crafting online experiences that grow with your business. Founded with a passion for helping businesses thrive in the digital world, our team of dedicated professionals is committed to delivering websites that are not only beautiful but also functional and scalable.
        </p>
        <p>
          At Build Me A Website, we believe in building lasting relationships with our clients. We don’t just create a site and disappear—we’re here for the long haul, ready to help you adapt and evolve your online presence as your business grows. Whether it's integrating new features, optimizing for search engines, or simply giving your site a fresh look, we’ve got you covered.
        </p>
        <p>
          Our approach is simple: we listen to your needs, understand your goals, and work closely with you to create a digital solution that’s tailored to your unique business. We take pride in our attention to detail and our commitment to delivering projects on time and within budget. And because we know that your website is a critical part of your business, we’re always available to provide ongoing support and ensure that your site remains a valuable asset.
        </p>
        <p>
          Thank you for considering us as your digital partner. We’re excited to work with you and help you achieve your online goals!
        </p>
      </AboutCard>
      <CardsContainer isVisible={isVisible}>
        <BulletPointsCard>
          <h3>Why Choose Us?</h3>
          <BulletList>
            <BulletListItem>Experienced professionals</BulletListItem>
            <BulletListItem>Customer-focused approach</BulletListItem>
            <BulletListItem>Innovative solutions</BulletListItem>
            <BulletListItem>Proven track record</BulletListItem>
            <BulletListItem>Competitive pricing</BulletListItem>
          </BulletList>
        </BulletPointsCard>
        <ImageCard>
          <Image src={AboutImage} alt="About Us" />
        </ImageCard>
      </CardsContainer>
      <ReviewsContainer isVisible={isVisible}>
        <Grid container spacing={1} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} container justifyContent="center">
              <ReviewCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {review.review}
                  </Typography>
                  <Box display="flex" justifyContent="center" mt={1}>
                    <Rating value={review.rating} readOnly />
                  </Box>
                </CardContent>
              </ReviewCard>
            </Grid>
          ))}
        </Grid>
      </ReviewsContainer>
    </AboutContainer>
  );
};

export default AboutAndReviews;
