import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

// Import the image
const heroImage = `${process.env.PUBLIC_URL}/Images/hero-1.png`;

const ParentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Full viewport height
  backgroundColor: '#F4E1D2', // Ensure background color covers the entire viewport
});

const HeroContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#F4E1D2',
  padding: '100px 200px',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto', // Center horizontally
  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
    padding: '80px 100px',
    minHeight: '70vh',
  },
  [theme.breakpoints.down(800)]: {
    flexDirection: 'column',
    padding: '50px 30px',
    minHeight: '60vh',
  },
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',
  justifyContent: 'center',
  textAlign: 'left',
  [theme.breakpoints.down(1000)]: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  [theme.breakpoints.down(800)]: {
    textAlign: 'center',
    marginBottom: '15px',
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px',
  [theme.breakpoints.down(1000)]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down(800)]: {
    marginTop: '20px',
    width: '100%',
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontSize: '3rem',
  color: 'black',
  fontWeight: 'normal',
  marginBottom: '30px',
  [theme.breakpoints.down(1000)]: {
    fontSize: '2.5rem',
    marginBottom: '25px',
  },
  [theme.breakpoints.down(800)]: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  font: 'inherit',
  backgroundColor: '#3a3a3a',
  color: '#F4E1D2',
  textAlign: 'center',
  width: '170px',
  borderRadius: '10px',
  fontSize: '1rem',
  padding: '10px 20px',
  fontWeight: '600',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
  alignSelf: 'center', // Center button on mobile
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size on hover
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add a shadow for more depth
    backgroundColor: '#F2784B', // Ensure background color stays black
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
    width: '100px', // Reduce button width on small screens
    marginTop: '15px', // Add some spacing above the button on small screens
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
  backgroundColor: '#f5f5dc', // Same beige background
  fontFamily: 'Nunito, sans-serif',

  padding: '30px',
  borderRadius: '10px',
  width: '400px',
  maxWidth: '90%',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  zIndex: 1001,
});

const PopupTitle = styled('h2')({
  
  fontFamily: 'Nunito, sans-serif',
  color: 'black',
  textAlign: 'center',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  fontFamily: 'Nunito, sans-serif',

  marginBottom: '20px',
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      fontFamily: 'Nunito, sans-serif',

      borderColor: 'black',
    },
    '&:hover fieldset': {
      fontFamily: 'Nunito, sans-serif',

      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      fontFamily: 'Nunito, sans-serif',

      borderColor: 'black',
    },
  },
});

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <ParentContainer>
      <HeroContainer container spacing={1}>
        <TextContainer item xs={12} md={6}>
          <Title>Build a website that grows with your business</Title>
          <StyledButton onClick={handleOpenPopup}>Get Started</StyledButton>
        </TextContainer>
        <ImageContainer item xs={12} md={6}>
          <img src={heroImage} alt="People working together" style={{ marginLeft: '30px', width: '80%', borderRadius: '10px' }} />
        </ImageContainer>
      </HeroContainer>
      {isPopupOpen && (
        <PopupOverlay onClick={handleClosePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <PopupTitle>Get Started</PopupTitle>
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
              
              style={{ backgroundColor: '#3A3A3A', color: '#f5f5dc', marginTop: '20px' }} 
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
