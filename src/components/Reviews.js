import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box, Grid, Rating } from '@mui/material';
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
  fontFamily: 'Nunito, sans-serif',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4E1D2',
  marginTop: '20px',
  padding: '5rem',
  opacity: isVisible? 1 : 0,
  animation: isVisible? `${slideInUp} 1s ease-out forwards` : 'none',
}));

// Styled card for each review
const ReviewCard = styled(Card)(({ theme }) => ({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
  margin: '10px auto', // Center the cards within their grid items
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
    { name: 'John Doe', review: 'Excellent service and support. Highly recommended!', rating: 5 },
    { name: 'Jane Smith', review: 'Professional and timely delivery. Great experience overall.', rating: 5 },
    { name: 'Michael Johnson', review: 'Fantastic work! The team exceeded our expectations.', rating: 5 },
    { name: 'Emily Davis', review: 'Very satisfied with the final product. Great job!', rating: 5 },
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
      <h2
        style={{
          fontWeight: 'normal',
          textAlign: 'center',
          color: '#3A3A3A',
          fontFamily: 'Nunito, sans-serif',
          fontSize: '2rem',
        }}
      >
        Reviews
      </h2>
      <ReviewsContainer ref={containerRef} isVisible={isVisible}>
        <Grid container spacing={3} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} container justifyContent="center">
              <ReviewCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom align="center">
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
    </div>
  );
};

export default Reviews;
