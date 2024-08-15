import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled, keyframes } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
  justifyContent: 'flex-start', // Align text to the top
  textAlign: 'left',
  animation: `${slideInLeft} 1s ease-out`,
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    justifyContent: 'center', // Center content on smaller screens
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  textAlign: 'left',
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
  width: '200px',
  borderRadius: '20px',
  textAlign: 'right', // Align text to the right
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  alignSelf: 'flex-end', // Align the button to the right
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#F2784B',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  '&:active': {
    transform: 'scale(0.95)',
    backgroundColor: '#3A3A3A',
  },
  [theme.breakpoints.down('md')]: {
    alignSelf: 'center', // Center the button on smaller screens
    marginTop: '20px',
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${slideInRight} 1s ease-out`,
  [theme.breakpoints.up('md')]: {
    width: '50%', // Limit the image container width on large screens
    alignSelf: 'flex-end', // Align image to the right
  },
  '& img': {
    width: '100%',
    maxHeight: '500px', // Limit the maximum height of the image
    borderRadius: '20px',
    marginLeft: '20px',
    marginTop: '-20px',
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
  borderRadius: '20px',
  width: '300px',
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
  backgroundColor: '#f8f8f8',
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
  const [formValues, setFormValues] = useState({
    selectedDate: null,
    selectedTime: null,
    name: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (field, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Format the time to only include the time part (HH:mm:ss)
    const formattedTime = formValues.selectedTime
      ? formValues.selectedTime.format('HH:mm:ss')
      : null;
  
    const updatedFormValues = {
      ...formValues,
      selectedTime: formattedTime,
    };
  
    try {
      const response = await fetch('https://buildmywebsite-server.herokuapp.com/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormValues),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form Submitted:', result);
        setFormStatus({ success: true, error: false });
      } else {
        console.error('Form submission failed:', response.statusText);
        setFormStatus({ success: false, error: true });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ success: false, error: true });
    }
    handleClosePopup();
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
            <PopupTitle>Free Consultation</PopupTitle>
            <StyledTextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={formValues.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <StyledTextField
              label="Business Name"
              variant="outlined"
              fullWidth
              value={formValues.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
            />
            <StyledTextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <StyledTextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formValues.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
            <StyledTextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formValues.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                <DatePicker
  label="Select Date"
  value={formValues.selectedDate}
  onChange={(newValue) => handleChange('selectedDate', newValue)}
  slotProps={{
    textField: {
      fullWidth: true,
      variant: "outlined",
      sx: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
  }}
/>

<TimePicker
  label="Select Time"
  value={formValues.selectedTime}
  onChange={(newValue) => handleChange('selectedTime', newValue)}
  slotProps={{
    textField: {
      fullWidth: true,
      variant: "outlined",
      sx: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
  }}
/>


                </Grid>
              </Grid>
              <Button 
                variant="contained" 
                style={{ borderRadius: '20px', backgroundColor: '#3A3A3A', color: '#f5f5dc', marginTop: '10px' }} 
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </LocalizationProvider>
          </PopupContent>
        </PopupOverlay>
      )}
    </ParentContainer>
  );
};

export default Hero;
