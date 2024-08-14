import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '150px 50px', // Adjusted padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh', // Ensure full viewport height
  [theme.breakpoints.down('sm')]: {
    padding: '125px 50px', // Adjusted padding for smaller screens
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '800px',
  backgroundColor: '#bbd7ec',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '3px solid #F4E1D2', // Add blue border around the content
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%', // Decrease content width on smaller screens
    padding: '20px', // Reduce padding on smaller screens
  },
}));

const SectionTitle = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  marginTop: '30px', // Increase margin to create more space before section
  fontWeight: '600',
});

const SectionContent = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  marginBottom: '20px', // Add margin to the bottom for consistent spacing
  lineHeight: '1.6',
});

const WebDesignPage = () => {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        Web Design
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Web Design?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Web design is the process of planning, conceptualizing, and arranging content intended for the internet. It goes beyond aesthetics, incorporating both the user experience and functionality of the website. Effective web design ensures that your site not only looks great but is also intuitive and user-friendly, guiding visitors seamlessly through your content and driving them toward key actions.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Why is Web Design Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In today’s fast-paced digital world, first impressions matter. Your website is often the first point of contact between your business and potential customers. A well-designed website can significantly impact how your audience perceives your brand, build trust, and influence their decision to engage with your business. Beyond visual appeal, good web design enhances the usability and accessibility of your site, making it easier for users to navigate and interact with your content.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Web Design
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          At [Your Firm Name], we believe in creating designs that are both beautiful and functional. We take a user-centered approach to design, ensuring that every element on your website serves a purpose and enhances the overall user experience. Our designs are responsive, ensuring they look and perform well on all devices, from desktops to smartphones. We also focus on accessibility, making sure that your website is usable by everyone, regardless of their abilities.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Continuous Improvement and Adaptability
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Web design is not a one-time project but an ongoing process. As your business grows and evolves, so too should your website. We are committed to providing continuous support, helping you update and improve your site as needed. Whether it’s refreshing the design, adding new features, or optimizing for new devices, we are always here to ensure your website remains current, competitive, and aligned with your business goals.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default WebDesignPage;
