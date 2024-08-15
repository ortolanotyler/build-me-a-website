import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import FAQs from '../components/FAQ';

const PageContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '12.5rem 5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '50vh', // Ensure full viewport height
  [theme.breakpoints.down('md')]: {
    padding: '12.5rem 5rem ',
},
  [theme.breakpoints.down('sm')]: {
    padding: '12.5rem 5rem',
},
}));

const ContentContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '600px', // Reduced maxWidth to match image width
  backgroundColor: '#bbd7ec',
  padding: '30px', // Adjusted padding for better spacing
  borderRadius: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '5px',
  border: '1px solid #ECE7E3',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Decrease content width on smaller screens
  },
}));

const SectionTitle = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  margin: '10px auto', // Increase margin to create more space before section
  fontWeight: 'normal',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
  textAlign: 'left', // Align the title text to the left
});

const SectionContent = styled('div')({
  fontFamily: 'Nunito, sans-serif',
  marginBottom: '10px', // Add margin to the bottom for consistent spacing
  lineHeight: '1.5',
  maxWidth: '100%', // Adjust maximum width for better readability
  justifyContent: 'center', // Center the content within the container
  textAlign: 'left', // Align text and image to the left
});

const FAQListContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '600px', // Reduced maxWidth to match content width
  backgroundColor: '#bbd7ec', // Matching the background color of the content
  padding: '30px', // Adjusted padding for consistency
  borderRadius: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px', // Spacing between content and FAQ
  border: '1px solid #ECE7E3',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Decrease content width on smaller screens
  },
}));

const AboutPage = () => {
  return (
    <PageContainer>
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom 
        style={{ 
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
          fontFamily: 'Nunito, sans-serif' 
        }}>
        About Us
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          Welcome to Build Me A Website
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Welcome to Build Me A Website, where creativity meets technology to bring your digital vision to life. We're not just another web development agency; we're your partners in crafting online experiences that grow with your business. Founded with a passion for helping businesses thrive in the digital world, our team of dedicated professionals is committed to delivering websites that are not only beautiful but also functional and scalable.
        </SectionContent>
        
        <SectionTitle variant="h6" gutterBottom>
          Our Approach
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Our approach is simple: we listen to your needs, understand your goals, and work closely with you to create a digital solution that’s tailored to your unique business. We take pride in our attention to detail and our commitment to delivering projects on time and within budget. And because we know that your website is a critical part of your business, we’re always available to provide ongoing support and ensure that your site remains a valuable asset.
        </SectionContent>
      </ContentContainer>
      
      <FAQListContainer>
        <FAQs />
      </FAQListContainer>
    </PageContainer>
  );
};

export default AboutPage;
