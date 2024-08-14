import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled('div')(({ theme }) => ({
    fontFamily: 'Nunito, sans-serif',
    backgroundColor: '#F4E1D2',
    padding: '175px 50px', // Adjusted padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh', // Ensure full viewport height
    [theme.breakpoints.down('md')]: {
      padding: '175px 125px', // Adjusted padding for smaller screens
    },
    [theme.breakpoints.down('sm')]: {
      padding: '150px 50px', // Adjusted padding for smaller screens
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
  border: '3px solid #F4E1D2', // Add blue border around the content
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Decrease content width on smaller screens
  },
}));

const SectionTitle = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  margin: '10px auto', // Increase margin to create more space before section
  fontWeight: 'normal',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)', // Add text shadow
  textAlign: 'left', // Align the title text to the left
});

const SectionContent = styled('div')({
  fontFamily: 'Nunito, sans-serif',
  marginBottom: '20px', // Add margin to the bottom for consistent spacing
  lineHeight: '1.5',
  maxWidth: '100%', // Adjust maximum width for better readability
  justifyContent: 'center', // Center the content within the container
  textAlign: 'left', // Align text and image to the left
});

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', // Ensure the image is responsive
  maxWidth: '600px', // Limit the max width of the image
  height: 'auto', // Maintain aspect ratio
  borderRadius: '20px', // Add some border radius for style
  marginTop: '20px', // Add some space between the text and the image
  marginBottom: '20px', // Add some space between the text and the image
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',

}));

const WebDevPage = () => {
  return (
    <PageContainer>
  <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>
                    Web Development Services
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Web Development?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Web development is the process of creating and maintaining websites that are accessible, functional, and visually appealing across all devices. It involves coding, designing, and managing a website’s structure and layout, as well as ensuring it performs well in terms of speed, usability, and functionality. In today’s digital world, a well-developed website is the cornerstone of any successful business, serving as both a digital storefront and a vital communication tool.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-development-1.jpg`} alt="Web Development" />

        <SectionTitle variant="h6" gutterBottom>
          Why is Web Development Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In an increasingly competitive online landscape, your website is often the first interaction a potential customer has with your brand. A professionally developed website not only helps you stand out from the competition but also builds trust with your audience by providing a seamless and intuitive user experience. Beyond aesthetics, good web development ensures that your site is optimized for performance, search engines, and mobile devices, driving more traffic and conversions.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-development-2.jpg`} alt="Web Development" />

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Web Development
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          We don’t just build websites—we build platforms that grow with your business. Using React, a powerful and flexible framework, we create sites that are easily scalable and can be consistently integrated with new features as your business evolves. Our approach ensures that your website remains dynamic and relevant, capable of adapting to new trends and technologies while delivering a consistently high-quality user experience.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-development-3.jpg`} alt="Web Development" />

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
