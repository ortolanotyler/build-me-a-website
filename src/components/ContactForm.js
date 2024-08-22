import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Contact = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: 'transparent',
  padding: '2rem 2rem 2rem',
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '40vh',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 2rem 2rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 2rem 2rem',
  },
}));

const FormContainer = styled('form')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '350px',
  backgroundColor: '#transparent',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '1px solid #ECE7E3',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    padding: '20px',
  },
}));

const FieldContainer = styled('div')({
  marginBottom: '20px',
});

const CheckboxContainer = styled('div')({
  fontFamily: 'Nunito, sans-serif',
  marginTop: '20px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#f8f8f8',
  color: '#f8f8f8',
  fontSize: '1rem',
  padding: '1rem 2rem',
  fontWeight: 'normal',
  borderRadius: '20px',
  marginTop: '2rem',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#3a3a3a',
  },
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#3a3a3a',
  },
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: '#f8f8f8',
  '&.Mui-checked': {
    color: '#f8f8f8',
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
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Contact>
      {submitted ? (
        <Typography
          variant="h5"
          align="center"
          style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
        >
          Thank you! We will be in touch within 1 business day.
        </Typography>
      
      ) : (
        <>
     
          <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}>
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
                required
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
                type="email"
                required
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
                required
              />
            </FieldContainer>
            <CheckboxContainer>
              <Typography variant="h5" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}>
                What can we do for you?
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.webDevelopment}
                        onChange={handleCheckboxChange}
                        name="webDevelopment"
                      />
                    }
                    label="Web Development"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.seoOptimization}
                        onChange={handleCheckboxChange}
                        name="seoOptimization"
                      />
                    }
                    label="Search Engine Optimization"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.webDesign}
                        onChange={handleCheckboxChange}
                        name="webDesign"
                      />
                    }
                    label="Web Design"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.uiUxDesign}
                        onChange={handleCheckboxChange}
                        name="uiUxDesign"
                      />
                    }
                    label="UI/UX Design"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.digitalMarketing}
                        onChange={handleCheckboxChange}
                        name="digitalMarketing"
                      />
                    }
                    label="Digital Marketing"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={formValues.services.dnsMigration}
                        onChange={handleCheckboxChange}
                        name="dnsMigration"
                      />
                    }
                    label="DNS Migration"
                    style={{ fontFamily: 'Nunito, sans-serif', color: '#f8f8f8' }}
                  />
                </Grid>
              </Grid>
            </CheckboxContainer>
            <StyledButton type="submit" fullWidth>
              Submit
            </StyledButton>
          </FormContainer>
        </>
      )}
    </Contact>
  );
};

export default ContactForm;
