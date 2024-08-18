import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Rating } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Slide-in animation from below
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

// Container for the entire reviews section
const ReviewsContainer = styled('div')(({ isVisible }) => ({
  color: '#3A3A3A',
  marginTop: '5rem',
 
  fontFamily: 'League Spartan, sans-serif',
  textAlign: 'center',
  justifyContent: 'center',
  fontWeight: '100',
  alignItems: 'center',
  backgroundImage: 'transparent',
 
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
}));

// Styled container for each review
const ReviewTextContainer = styled(Box)(({ theme }) => ({
  color: '#3A3A3A',
  fontWeight: '100',
  marginBottom: '2.5rem',
  fontFamily: 'Nunito, sans-serif',
  backgroundImage: 'transparent',
  textAlign: 'center',
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '280px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '300px',
  },
}));

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const reviews = [
    { name: 'Jackie', review: 'Working with Tyler helped me start my dream of an online blog', rating: 5 },
    { name: 'Lauren', review: 'Professional and timely delivery! Great experience overall I look forward to chatting with you next month.', rating: 5 },
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
    <div>
    
      <ReviewsContainer ref={containerRef} isVisible={isVisible}>
        <Grid container spacing={3} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} container justifyContent="center">
              <ReviewTextContainer>
                <Typography variant="h6" gutterBottom align="center">
                  {review.name}
                </Typography>
                <Box display="flex" justifyContent="center" mt={0} mb={1}>
                  <Rating value={review.rating} readOnly />
                </Box>
                <Typography variant="body2" color="textSecondary" gutterBottom align="center">
                  {review.review}
                </Typography>
              </ReviewTextContainer>
            </Grid>
          ))}
        </Grid>
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;
