import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Contact = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '150px 40px', // Adjusted padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh', // Ensure full viewport height
  [theme.breakpoints.down('sm')]: {
    padding: '80px 10px', // Reduce padding for smaller screens
  },
}));

const FormContainer = styled('form')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '#bbd7ec',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '3px solid #F4E1D2', // Add blue border around the form
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%', // Decrease form width on smaller screens
    padding: '20px', // Reduce padding on smaller screens
  },
}));

const FieldContainer = styled('div')({
  marginBottom: '20px', // Space around each text field
});

const CheckboxContainer = styled('div')({
  fontFamily: 'Nunito, sans-serif',
  marginTop: '20px',
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

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      webDevelopment: false,
      seoOptimization: false,
      uiUxDesign: false,
      digitalMarketing: false,
      webDesign: false,
      dnsMigration: false,
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({
      ...formValues,
      services: {
        ...formValues.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formValues);
    // Handle form submission logic (e.g., send to API, clear form, etc.)
  };

  return (
    <Contact>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        Fill out the form below to get in touch with us and let us know how we can assist you.
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <FieldContainer>
          <TextField
            style={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formValues.name}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontFamily: 'Nunito, sans-serif' },
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            style={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
            label="Email Address"
            name="email"
            variant="outlined"
            fullWidth
            value={formValues.email}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontFamily: 'Nunito, sans-serif' },
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            style={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
            label="Business Number"
            name="businessNumber"
            variant="outlined"
            fullWidth
            value={formValues.businessNumber}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontFamily: 'Nunito, sans-serif' },
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            style={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
            label="Business Name"
            name="businessName"
            variant="outlined"
            fullWidth
            value={formValues.businessName}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontFamily: 'Nunito, sans-serif' },
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            style={{ backgroundColor: '#F8F8F8', fontFamily: 'Nunito, sans-serif' }}
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            InputLabelProps={{
              style: { fontFamily: 'Nunito, sans-serif' },
            }}
          />
        </FieldContainer>
        <CheckboxContainer>
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
            What services are you interested in?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.webDevelopment}
                    onChange={handleCheckboxChange}
                    name="webDevelopment"
                  />
                }
                label="Web Development"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.seoOptimization}
                    onChange={handleCheckboxChange}
                    name="seoOptimization"
                  />
                }
                label="Search Engine Optimization"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.webDesign}
                    onChange={handleCheckboxChange}
                    name="webDesign"
                  />
                }
                label="Web Design"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.uiUxDesign}
                    onChange={handleCheckboxChange}
                    name="uiUxDesign"
                  />
                }
                label="Search Engine Marketing"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.digitalMarketing}
                    onChange={handleCheckboxChange}
                    name="digitalMarketing"
                  />
                }
                label="Web Hosting"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.services.dnsMigration}
                    onChange={handleCheckboxChange}
                    name="dnsMigration"
                  />
                }
                label="DNS Migration"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
            </Grid>
          </Grid>
        </CheckboxContainer>
        <StyledButton type="submit" fullWidth>
          Submit
        </StyledButton>
      </FormContainer>
    </Contact>
  );
};

export default ContactForm;
