import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
    <Box
      sx={{
        padding: '150px 20px',
        backgroundColor: '#F4E1D2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Schedule an Appointment
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Select a date and time that works for you.
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <DatePicker
              label="Select Date"
              value={formValues.selectedDate}
              onChange={(newValue) => handleChange('selectedDate', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: '#F8F8F8',
                    fontFamily: 'Nunito, sans-serif',
                    textAlign: 'right', // Align text to the right
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5} sx={{ marginLeft: '-10px' }}> {/* Negative margin to bring time picker closer */}
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
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '40px', width: '100%', maxWidth: '600px' }}>
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
        <Button type="submit" fullWidth sx={{ marginTop: '20px', backgroundColor: '#3A3A3A', color: '#F4E1D2' }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CalendarComponent;
