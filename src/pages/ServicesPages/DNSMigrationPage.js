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

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', // Ensure the image is responsive
  maxWidth: '650px', // Limit the max width of the image
  height: 'auto', // Maintain aspect ratio
  borderRadius: '20px', // Add some border radius for style
  marginTop: '10px', // Add some space between the text and the image
  marginBottom: '10px', // Add some space between the text and the image
  boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',

}));

const DNSMigrationPage = () => {
  return (
    <PageContainer>
  <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>
          DNS Migration
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is DNS Migration?
        </SectionTitle>
        <SectionContent>
          <Typography variant="body1" paragraph>
            DNS (Domain Name System) migration is the process of transferring your website’s DNS records from one hosting provider to another. This is a critical step when moving your website to a new server or when changing domain registrars. The DNS migration process involves ensuring that all traffic directed to your website or email systems is accurately routed to the correct servers, maintaining uninterrupted access and service.
          </Typography>
          <StyledImage src={`${process.env.PUBLIC_URL}/Images/dns-migration-1.jpg`} alt="DNS Migration Process" />
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Why is DNS Migration Important?
        </SectionTitle>
        <SectionContent>
          <Typography variant="body1" paragraph>
            DNS migration is critical to ensure your website remains accessible during a server transition or domain registrar change. A smooth DNS migration prevents downtime, reduces the risk of errors, and ensures that your website, emails, and other services are consistently available to your users. Proper management of DNS records during migration is crucial to maintain search engine rankings, protect your brand’s reputation, and ensure that your business operations are not disrupted.
          </Typography>
          <StyledImage src={`${process.env.PUBLIC_URL}/Images/dns-migration-2.jpg`} alt="Importance of DNS Migration" />
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to DNS Migration
        </SectionTitle>
        <SectionContent>
          <Typography variant="body1" paragraph>
            We approach DNS migration with precision and care. We begin by conducting a thorough audit of your current DNS settings to ensure a complete understanding of your existing setup. Our team then meticulously plans the migration, taking steps to minimize downtime and prevent any potential issues. We also provide guidance on best practices to ensure that your DNS records are correctly configured and optimized for performance.
          </Typography>
          <StyledImage src={`${process.env.PUBLIC_URL}/Images/dns-migration-3.jpg`} alt="DNS Migration Approach" />
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Continuous Support and Monitoring
        </SectionTitle>
        <SectionContent>
          <Typography variant="body1" paragraph>
            DNS migration doesn’t end once the records are transferred. We offer continuous support to monitor the propagation process, ensuring that your new DNS settings are correctly reflected across the internet. Our team is on standby to address any issues that may arise, providing you with peace of mind that your website and services remain operational throughout the transition. With our proactive approach, you can trust that your DNS migration will be handled smoothly and efficiently.
          </Typography>
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default DNSMigrationPage;
