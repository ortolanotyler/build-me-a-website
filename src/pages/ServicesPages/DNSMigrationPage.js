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

const DNSMigrationPage = () => {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        DNS Migration
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is DNS Migration?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          DNS (Domain Name System) migration is the process of transferring your website’s DNS records from one hosting provider to another. This is a critical step when moving your website to a new server or when changing domain registrars. DNS migration ensures that all traffic directed to your website or email systems is accurately routed to the correct servers, maintaining uninterrupted access and service.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Why is DNS Migration Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          DNS migration is essential to ensure your website remains accessible during a server transition or domain registrar change. A smooth DNS migration prevents downtime, reduces the risk of errors, and ensures that your website, emails, and other services are consistently available to your users. Proper management of DNS records during migration is crucial to maintain search engine rankings, protect your brand’s reputation, and ensure that your business operations are not disrupted.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to DNS Migration
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          At [Your Firm Name], we approach DNS migration with precision and care. We begin by conducting a thorough audit of your current DNS settings to ensure a complete understanding of your existing setup. Our team then meticulously plans the migration, taking steps to minimize downtime and prevent any potential issues. We also provide guidance on best practices to ensure that your DNS records are correctly configured and optimized for performance.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Continuous Support and Monitoring
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          DNS migration doesn’t end once the records are transferred. We offer continuous support to monitor the propagation process, ensuring that your new DNS settings are correctly reflected across the internet. Our team is on standby to address any issues that may arise, providing you with peace of mind that your website and services remain operational throughout the transition. With our proactive approach, you can trust that your DNS migration will be handled smoothly and efficiently.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default DNSMigrationPage;
