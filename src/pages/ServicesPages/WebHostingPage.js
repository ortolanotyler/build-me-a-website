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
    padding: '175px 150px', // Adjusted padding for smaller screens
  },
  [theme.breakpoints.down('sm')]: {
    padding: '150px 75px', // Adjusted padding for smaller screens
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
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
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

const WebHostingPage = () => {
  return (
    <PageContainer>
  <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>
                    Web Hosting
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Web Hosting?
        </SectionTitle>
        <SectionContent variant="body1" gutterBottom>
          Web hosting is a service that allows your website to be accessible on the internet. When you choose a web hosting provider, you are essentially renting space on a server where your website's files and data are stored. This server is connected to the internet, enabling users to access your website from anywhere in the world. Web hosting is the backbone of your online presence, ensuring that your website is available and running smoothly 24/7.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-hosting-1.jpg`} alt="Web Hosting" />

        <SectionTitle variant="h6" gutterBottom>
          Why is Web Hosting Important?
        </SectionTitle>
        <SectionContent variant="body1" gutterBottom>
          Reliable web hosting is crucial for the performance and security of your website. A good hosting provider ensures fast load times, minimal downtime, and protection against cyber threats. Without a reliable hosting service, your website could suffer from slow speeds, frequent outages, or even data breaches, which could damage your brand's reputation and lead to lost revenue. Choosing the right web hosting service is vital for providing a seamless experience to your visitors and ensuring the success of your online business.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-hosting-2.jpg`} alt="Web Hosting" />

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Web Hosting
        </SectionTitle>
        <SectionContent variant="body1" gutterBottom>
          We offer tailored web hosting solutions designed to meet the specific needs of your business. Whether you're running a small blog or a large e-commerce site, we provide scalable hosting options that grow with your business. Our hosting services include robust security features, daily backups, and around-the-clock monitoring to ensure that your website is always up and running. We also offer managed hosting solutions, so you can focus on your business while we take care of the technical details.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/web-hosting-3.jpg`} alt="Web Hosting" />

        <SectionTitle variant="h6" gutterBottom>
          Continuous Support and Optimization
        </SectionTitle>
        <SectionContent variant="body1" gutterBottom>
          We understand that web hosting is not a set-it-and-forget-it service. Our team is dedicated to continuously monitoring and optimizing your hosting environment to ensure peak performance. We provide ongoing support to address any issues that may arise and offer regular updates to keep your website secure and efficient. With our proactive approach, you can trust that your website will always deliver the best possible experience to your visitors, helping your business thrive online.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default WebHostingPage;
