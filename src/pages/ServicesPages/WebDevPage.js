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
    padding: '125px 50px', // Reduce padding for smaller screens
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
  border: '3px solid #F4E1D2', // Add border to match other components
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%', // Decrease content width on smaller screens
    padding: '20px', // Reduce padding on smaller screens
  },
}));

const SectionTitle = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  marginTop: '30px', // Increase margin to create more space
  fontWeight: '600',
});

const SectionContent = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  marginBottom: '20px', // Add margin to the bottom for consistent spacing
  lineHeight: '1.6',
});

const WebDevPage = () => {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        Web Development Services
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Web Development?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Web development is the process of creating and maintaining websites that are accessible, functional, and visually appealing across all devices. It involves coding, designing, and managing a website’s structure and layout, as well as ensuring it performs well in terms of speed, usability, and functionality. In today’s digital world, a well-developed website is the cornerstone of any successful business, serving as both a digital storefront and a vital communication tool.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Why is Web Development Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In an increasingly competitive online landscape, your website is often the first interaction a potential customer has with your brand. A professionally developed website not only helps you stand out from the competition but also builds trust with your audience by providing a seamless and intuitive user experience. Beyond aesthetics, good web development ensures that your site is optimized for performance, search engines, and mobile devices, driving more traffic and conversions.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Web Development
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          At [Your Firm Name], we don’t just build websites—we build platforms that grow with your business. Using React, a powerful and flexible framework, we create sites that are easily scalable and can be consistently integrated with new features as your business evolves. Our approach ensures that your website remains dynamic and relevant, capable of adapting to new trends and technologies while delivering a consistently high-quality user experience.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Continuous Support and Feature Integration
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          We believe that web development doesn’t end at the launch of your site. Our team is committed to providing ongoing support and maintenance, ensuring that your website stays up-to-date and continues to meet your business needs. Whether it’s implementing new features, enhancing security, or optimizing performance, we are always here to help your site evolve with your business. Our partnership doesn’t stop at delivery—we are with you every step of the way to ensure your website grows alongside your goals.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default WebDevPage;
