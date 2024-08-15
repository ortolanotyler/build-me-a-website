import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled('div')(({ theme }) => ({
    fontFamily: 'Nunito, sans-serif',
    backgroundColor: '#F4E1D2',
    padding: '175px 50px 50px', // Adjusted padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh', // Ensure full viewport height
    [theme.breakpoints.down('md')]: {
      padding: '150px 50px', // Adjusted padding for smaller screens
    },
    [theme.breakpoints.down('sm')]: {
      padding: '150px 50px 50px', // Adjusted padding for smaller screens
    },
  }));

const ContentContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  width: '100%',
  maxWidth: '600px', // Reduced maxWidth to match image width
  backgroundColor: '#f8f8f8',
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

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', // Ensure the image is responsive
  maxWidth: '650px', // Limit the max width of the image
  height: 'auto', // Maintain aspect ratio
  borderRadius: '20px', // Add some border radius for style
  marginTop: '10px', // Add some space between the text and the image
  marginBottom: '10px', // Add some space between the text and the image
  boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',

}));
const WebDesignPage = () => {
  return (
    <PageContainer>
    <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>
                    Web Design
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Web Design?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Web design is the process of planning, conceptualizing, and arranging content intended for the internet. It goes beyond aesthetics, incorporating both the user experience and functionality of the website. Effective web design ensures that your site not only looks great but is also intuitive and user-friendly, guiding visitors seamlessly through your content and driving them toward key actions.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-design-1.jpg`} alt="Web Design" />

        <SectionTitle variant="h6" gutterBottom>
          Why is Web Design Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In today’s fast-paced digital world, first impressions matter. Your website is often the first point of contact between your business and potential customers. A well-designed website can significantly impact how your audience perceives your brand, build trust, and influence their decision to engage with your business. Beyond visual appeal, good web design enhances the usability and accessibility of your site, making it easier for users to navigate and interact with your content.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-design-2.jpg`} alt="Web Design" />

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Web Design
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          We believe in creating designs that are both beautiful and functional. We take a user-centered approach to design, ensuring that every element on your website serves a purpose and enhances the overall user experience. Our designs are responsive, ensuring they look and perform well on all devices, from desktops to smartphones. We also focus on accessibility, making sure that your website is usable by everyone, regardless of their abilities.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-design-3.jpg`} alt="Web Design" />

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
