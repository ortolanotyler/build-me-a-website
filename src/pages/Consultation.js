import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CalendarContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '12.5rem 5rem 5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '80vh',
  [theme.breakpoints.down('md')]: {
    padding: '12.5rem 5rem 5rem',
},
  [theme.breakpoints.down('sm')]: {
    padding: '12.5rem 5rem 5rem',
},
}));

const FormContainer = styled('form')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#bbd7ec',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '1px solid #ECE7E3',
}));

const FieldContainer = styled('div')({
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#f8f8f8',
  borderRadius: '10px',
  '& label.Mui-focused': {
    color: '#3a3a3a',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#3a3a3a',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3a3a3a',
    },
    '&:hover fieldset': {
      borderColor: '#3a3a3a',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3a3a3a',
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#3A3A3A',
  color: '#f8f8f8',
  fontSize: '1rem',
  padding: '10px 20px',
  fontWeight: '600',
  borderRadius: '10px',
  marginTop: '20px',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
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

const CheckboxContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
});

const SuccessMessage = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  color: '#3A3A3A',
  backgroundColor: '#bbd7ec',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
}));

const CalendarComponent = () => {
  const [formValues, setFormValues] = useState({
    selectedDate: null,
    selectedTime: null,
    name: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    message: '',
    services: {
      websiteDevelopment: false,
      seoOptimization: false,
      brandingConsultation: false,
    },
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field) => {
    setFormValues((prevState) => ({
      ...prevState,
      services: {
        ...prevState.services,
        [field]: !prevState.services[field],
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://buildmywebsite-server-231b6957e9dd.herokuapp.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <CalendarContainer style={{ minHeight: '7vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Schedule an Appointment
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'Nunito, sans-serif' }}>
        Select a date and time that works for you.
      </Typography>
      {!formSubmitted ? (
        <FormContainer style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
          <FieldContainer>
            <StyledTextField
              label="Full Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formValues.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledTextField
              label="Business Name"
              name="businessName"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formValues.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledTextField
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formValues.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledTextField
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formValues.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledTextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formValues.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </FieldContainer>
          <CheckboxContainer>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.services.websiteDevelopment}
                  onChange={() => handleCheckboxChange('websiteDevelopment')}
                  color="primary"
                />
              }
              label="Website Development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.services.seoOptimization}
                  onChange={() => handleCheckboxChange('seoOptimization')}
                  color="primary"
                />
              }
              label="SEO Optimization"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.services.brandingConsultation}
                  onChange={() => handleCheckboxChange('brandingConsultation')}
                  color="primary"
                />
              }
              label="Branding Consultation"
            />
              <FormControlLabel
            control={
              <Checkbox
                checked={formValues.services.brandingConsultation}
                onChange={() => handleCheckboxChange('brandingConsultation')}
                color="primary"
              />
            }
            label="Search Engine Marketing"
          />
         
           <FormControlLabel
            control={
              <Checkbox
                checked={formValues.services.brandingConsultation}
                onChange={() => handleCheckboxChange('brandingConsultation')}
                color="primary"
              />
            }
            label="Web Hosting"
          />
           <FormControlLabel
            control={
              <Checkbox
                checked={formValues.services.brandingConsultation}
                onChange={() => handleCheckboxChange('brandingConsultation')}
                color="primary"
              />
            }
            label="DNS Migration"
          />
          </CheckboxContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Select Date"
                  value={formValues.selectedDate}
                  onChange={(newValue) => handleChange('selectedDate', newValue)}
                  renderInput={(params) => (
                    <StyledTextField
                      {...params}
                      fullWidth
                      variant="outlined"
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
                    <StyledTextField
                      {...params}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              
            </Grid>
          </LocalizationProvider>
          <StyledButton type="submit" fullWidth>
            Submit
          </StyledButton>
        </FormContainer>
      ) : (
        <SuccessMessage variant="h5">
          Thanks! We'll be in touch within 1 business day.
        </SuccessMessage>
      )}
    </CalendarContainer>
  );
};

export default CalendarComponent;
