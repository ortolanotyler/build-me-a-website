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

const ParentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4E1D2', // Ensure background color covers the entire viewport
});

const HeroContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#F4E1D2',
  minHeight: '100vh',
  maxWidth: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: ' 0', // Center horizontally
  padding: 'calc(100px + 30px)', // Adjust padding to account for the fixed header

  paddingTop: 'calc(100px + 30px)', // Adjust padding to account for the fixed header
  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
    marginRight: '40px',
    padding: '100px 50px', // Adjust padding for medium screens
    minHeight: '100vh',
  },
  [theme.breakpoints.down(800)]: {
    flexDirection: 'column',
    padding: '100px 30px',
    minHeight: '100vh',
  },
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center', // Center text horizontally
  
  animation: `${slideInLeft} 1s ease-out`, // Apply the left slide-in animation
  [theme.breakpoints.down(1300)]: {
    alignItems: 'center', // Ensure content is centered
    marginTop: '20px', // Adjust top margin for medium screens
  },
  [theme.breakpoints.down(1100)]: {
    alignItems: 'center', // Ensure content is centered
    marginTop: '20px', // Adjust top margin for small screens
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontSize: '2.5rem',
  color: '#3A3A3A',
  fontWeight: 'normal',
  marginBottom: '10px',
  padding: '10px ',
  [theme.breakpoints.down(1000)]: {
    fontSize: '2.25rem',
    marginBottom: '25px',
  },
  [theme.breakpoints.down(800)]: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  font: 'inherit',
  backgroundColor: '#3a3a3a',
  color: '#F4E1D2',
  textAlign: 'center',
  maxWidth: '150px',
  borderRadius: '10px',
  fontSize: '1rem',
  textTransform: 'none', // Prevent text from being capitalized
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add a shadow for more depth
  fontWeight: 'normal',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
  alignSelf: 'center', // Center button on all screen sizes
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size on hover
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Add a shadow for more depth
    backgroundColor: '#F2784B', // Ensure background color goes orange
    color: '#F4E1D2', // Ensure text color stays beige
  },
  '&:active': {
    transform: 'scale(0.95)', // Slightly squish on click
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', // Reduce shadow on click
    backgroundColor: '#3A3A3A', // Ensure background color stays black
    color: '#3a3a3a', // Ensure text color stays beige
  },
  [theme.breakpoints.down(800)]: {
    fontSize: '0.875rem', // Make button font smaller on small screens
    width: '130px', // Reduce button width on small screens
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${slideInRight} 1s ease-out`, // Apply the right slide-in animation
  [theme.breakpoints.down(1300)]: {
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  [theme.breakpoints.down(1100)]: {
    width: '100%',
    
  },
  '& img': {
    width: '80%',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      width: '75%', // Reduce image size by 25% on large screens
      alignSelf: 'flex-start', // Align image to the left
    },
    [theme.breakpoints.down(800)]: {
      marginLeft: '1px', // Add margin to the left for small screens
    },
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
              style={{ borderRadius: '10px',backgroundColor: '#3A3A3A', color: '#f5f5dc', marginTop: '20px' }} 
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
