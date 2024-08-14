import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled, keyframes } from '@mui/system';

// Import the image
const heroImage = `${process.env.PUBLIC_URL}/Images/hero-1.png`;

// Animations for the text and image
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ParentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4E1D2', // Ensure background color covers the entire viewport
  padding: '125px 50px', // Default padding for larger screens
  [theme.breakpoints.down('sm')]: {
    padding: '50px 25px', // Half the padding on smaller screens
  },
}));

const HeroContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#F4E1D2',
  maxWidth: '1000px', // Limit the maximum width of the container
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '50px', // Add some margin at the top
  padding: '100px', // Add some padding inside the container
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '50px 25px', // Adjust padding for medium screens
  },
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left', // Align text to the left
  animation: `${slideInLeft} 1s ease-out`, // Apply the left slide-in animation
  marginBottom: '20px', // Add some margin at the bottom
  [theme.breakpoints.down('md')]: {
    textAlign: 'center', // Center text on smaller screens
    marginBottom: '20px', // Keep some margin at the bottom
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontSize: '2.5rem',
  color: '#3A3A3A',
  fontWeight: 'normal',
  marginBottom: '20px', // Add some margin at the bottom
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem', // Adjust font size for medium screens
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#3a3a3a',
  color: '#F4E1D2',
  width: '200px', // Set a fixed width for the button
  borderRadius: '10px',
  fontSize: '1rem',
  textTransform: 'none', // Prevent text from being capitalized
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add a shadow for more depth
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  alignSelf: 'center', // Center the button horizontally
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size on hover
    backgroundColor: '#F2784B', // Change background color on hover
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Add a shadow for more depth
  },
  '&:active': {
    transform: 'scale(0.95)', // Slightly squish on click
    backgroundColor: '#3A3A3A', // Ensure background color stays black
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '20px', // Add some spacing above the button on small screens
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${slideInRight} 1s ease-out`, // Apply the right slide-in animation
  [theme.breakpoints.up('md')]: {
    width: '50%', // Limit the image container width on large screens
    alignSelf: 'flex-end', // Align image to the right
  },
  '& img': {
    width: '100%',
    maxHeight: '500px', // Limit the maximum height of the image
    borderRadius: '10px',
    marginLeft: '20px',
    marginTop: '-20px'

  },
}));

const PopupOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000, // Ensure it's above other content
});

const PopupContent = styled('div')({
  backgroundColor: '#bbd7ec', // Same beige background
  fontFamily: 'Nunito, sans-serif',
  padding: '30px',
  borderRadius: '10px',
  width: '400px',
  maxWidth: '70%',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  zIndex: 1001,
});

const PopupTitle = styled('h2')({
  fontFamily: 'Nunito, sans-serif',
  color: '#3a3a3a',
  textAlign: 'center',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  borderRadius: '10px',
  marginBottom: '10px',
  '& label.Mui-focused': {
    color: '#3a3a3a',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#3a3a3a',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#3a3a3a',
    },
    '&:hover fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#3a3a3a',
    },
    '&.Mui-focused fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#3a3a3a',
    },
  },
});

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <ParentContainer>
      <HeroContainer container spacing={3}>
        <TextContainer item xs={12} md={6}>
          <Title>Build a website that grows with your business</Title>
          <StyledButton onClick={handleOpenPopup}>Free Consultation</StyledButton>
        </TextContainer>
        <ImageContainer item xs={12} md={6}>
          <img src={heroImage} alt="People working together" />
        </ImageContainer>
      </HeroContainer>
      {isPopupOpen && (
        <PopupOverlay onClick={handleClosePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <PopupTitle>Free Consulation</PopupTitle>
            <StyledTextField
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              label="Email Address"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <Button 
              variant="contained" 
              style={{ borderRadius: '10px', backgroundColor: '#3A3A3A', color: '#f5f5dc', marginTop: '10px' }} 
              fullWidth
              onClick={handleClosePopup} // For now, just close the popup on submit
            >
              Submit
            </Button>
          </PopupContent>
        </PopupOverlay>
      )}
    </ParentContainer>
  );
};

export default Hero;

