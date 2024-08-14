import React, { useState } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FooterContainer = styled(Box)({
  backgroundColor: '#BBD7EC', // Dark background color for the footer
  color: '#3a3a3a', // Text color
  padding: '100px 0', // Padding for the footer
  display: 'flex',
  justifyContent: 'center', // Center the content
  alignItems: 'center',
  width: '100%', // Ensure the footer spans the full width of the page
});

const FooterFormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row', // Arrange form elements horizontally
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F4E1D2', // Same background as the popup
  padding: '20px',
  borderRadius: '20px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  gap: '10px', // Space between elements
});

const StyledTextField = styled(TextField)({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#f8f8f8',
 
  '& label.Mui-focused': {
    color: '#f4eid2',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f8f8f8',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#f4eid2',
    },
    '&:hover fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#f4eid2',
    },
    '&.Mui-focused fieldset': {
      fontFamily: 'Nunito, sans-serif',
      borderColor: '#f4eid2',
    },
  },
  maxWidth: '200px', // Adjust max width for better alignment
});

const StyledButton = styled(Button)({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#3a3a3a',
  color: '#F4E1D2',
  fontSize: '1rem',
  padding: '10px 20px',
  fontWeight: '500',
  borderRadius: '20px',
 
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    color: '#3A3A3A',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F2784B',
  },
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F2784B',
  },
});

const Footer = () => {
  const [formValues, setFormValues] = useState({
    selectedDate: null,
    selectedTime: null,
    name: '',
    email: ''
  });

  const handleChange = (field, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formValues);
    // Handle form submission logic here
  };

  return (
    <FooterContainer>
      <FooterFormContainer>
        <StyledTextField
          label="Your Name"
          variant="outlined"
          value={formValues.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <StyledTextField
          label="Email Address"
          variant="outlined"
          value={formValues.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
          <StyledTextField
          label="Phone Number"
          variant="outlined"
          value={formValues.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={formValues.selectedDate}
            onChange={(newValue) => handleChange('selectedDate', newValue)}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                variant="outlined"
              />
            )}
          />
          <TimePicker
            label="Select Time"
            value={formValues.selectedTime}
            onChange={(newValue) => handleChange('selectedTime', newValue)}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                variant="outlined"
              />
            )}
          />
        </LocalizationProvider>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </FooterFormContainer>
    </FooterContainer>
  );
};

export default Footer;

