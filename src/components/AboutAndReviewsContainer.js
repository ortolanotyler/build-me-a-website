import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Rating } from '@mui/material';
import { styled } from '@mui/system';

// Import image
const AboutImage = `${process.env.PUBLIC_URL}/Images/about-image.jpg`;

// Styled container for the About section
const AboutContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#bbd7ec',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    padding: '10px',
  },
}));

// Main horizontal card for the About text
const AboutCard = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f4',
  padding: '20px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto 20px auto', // Auto margin for left and right centering, margin-bottom of 20px
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Nunito, sans-serif',
  textAlign: 'center', // Center the title and text
  [theme.breakpoints.down('md')]: {
    width: '90%', // Match the width to the cards below on smaller screens
    marginBottom: '10px',
  },
}));

// Container for the two cards below the main card
const CardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%', // Match the width to the About card on smaller screens
  },
}));

// Styled card for the image
const ImageCard = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f4',
  padding: '20px',
  width: '48%',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    width: '100%', // Full width on smaller screens
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
  listStyleType: 'disc',
  margin: '0 auto', // Center the list horizontally
  padding: '0', // Remove padding to align with center
  textAlign: 'center', // Center the text and bullet points
  width: 'fit-content', // Make the list width fit its content
});

const BulletListItem = styled('li')({
  textAlign: 'left', // Align text of the list item to the left within its centered container
});

// Styled card for the bullet points
const BulletPointsCard = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f4',
  padding: '10px',
  width: '48%',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Nunito, sans-serif',
  textAlign: 'center', // Center the text in the bullet points card
  [theme.breakpoints.down('md')]: {
    width: '100%', // Full width on smaller screens
    marginBottom: '10px',
  },
}));

// Container for the reviews section
const ReviewsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f4', // Light background to match a Google review feel
  padding: '40px',
  marginTop: '20px', // Add some margin to separate from the previous section
});

// Custom style for each review card
const ReviewCard = styled(Card)(({ theme }) => ({
  maxWidth: '300px', // Maximum width for each card
  width: '100%', // Ensure consistent width across all cards
  margin: '0 10px', // Reduce margin to avoid large gaps
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Full width on smaller screens
    marginBottom: '20px',
  },
}));

const AboutAndReviews = () => {
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

  return (
    <AboutContainer>
      <AboutCard>
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing top-notch web design, SEO, and digital marketing services. Our team of experts works tirelessly to ensure that our clients achieve their business goals and stand out in the digital landscape.
        </p>
      </AboutCard>
      <CardsContainer>
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
      <ReviewsContainer>
        <Grid container spacing={1} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} container justifyContent="center">
              <ReviewCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
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

