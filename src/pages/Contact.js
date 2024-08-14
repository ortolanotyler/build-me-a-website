import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CalendarContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '150px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh', // Ensure full viewport height
}));

const FormContainer = styled('form')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '400px', // Reduce the width of the form container
  backgroundColor: '#bbd7ec',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '3px solid #F4E1D2', // Add blue border around the form
}));

const FieldContainer = styled('div')({
  marginBottom: '20px', // Space around each text field
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#3A3A3A',
  color: '#F4E1D2',
  fontSize: '1rem',
  padding: '10px 20px',
  fontWeight: '600',
  borderRadius: '10px',
  marginTop: '20px',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F2784B',
  },
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#3A3A3A',
  },
}));

const CalendarComponent = () => {
  const [formValues, setFormValues] = useState({
    selectedDate: null,
    selectedTime: null,
    name: '',
    businessName: '',
    phoneNumber: '',
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
    // Handle form submission logic (e.g., send to API, clear form, etc.)
  };

  return (
    <CalendarContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Schedule an Appointment
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Select a date and time that works for you.
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Select Date"
                value={formValues.selectedDate}
                onChange={(newValue) => handleChange('selectedDate', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="Select Time"
                value={formValues.selectedTime}
                onChange={(newValue) => handleChange('selectedTime', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
        <FieldContainer>
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.name}
            onChange={(e) => handleChange('name', e.target.value)}
            sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Business Name"
            name="businessName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.businessName}
            onChange={(e) => handleChange('businessName', e.target.value)}
            sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Email Address"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.email}
            onChange={(e) => handleChange('email', e.target.value)}
            sx={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
          />
        </FieldContainer>
        <StyledButton type="submit" fullWidth>
          Submit
        </StyledButton>
      </FormContainer>
    </CalendarContainer>
  );
};

export default CalendarComponent;
