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

const SEMPage = () => {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        Search Engine Marketing
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is Search Engine Marketing?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Search Engine Marketing (SEM) is a digital marketing strategy that aims to increase a website's visibility on search engine results pages (SERPs) through paid advertising. Unlike SEO, which focuses on organic search results, SEM involves paying for ads that appear at the top or bottom of search results. These ads are typically labeled as "sponsored" or "ad," and they help drive targeted traffic to your website, leading to increased brand awareness and potential conversions.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Why is Search Engine Marketing Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In an increasingly competitive online marketplace, SEM offers a direct and effective way to reach potential customers who are actively searching for products or services like yours. By bidding on specific keywords, you can ensure that your ads appear in front of a highly relevant audience. This targeted approach not only maximizes your return on investment but also provides immediate visibility, allowing you to quickly attract new customers and grow your business.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to Search Engine Marketing
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          At [Your Firm Name], we take a data-driven approach to SEM. We begin by conducting thorough keyword research to identify the most effective terms for your industry. Our team then creates compelling ad copy that resonates with your target audience and drives clicks. We also set up detailed tracking to monitor the performance of your ads, ensuring that every dollar you spend is working towards achieving your business goals.
        </SectionContent>

        <SectionTitle variant="h6" gutterBottom>
          Continuous Optimization and Reporting
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          SEM is not a set-it-and-forget-it strategy; it requires continuous monitoring and optimization to deliver the best results. We regularly analyze your campaign data to identify opportunities for improvement, such as adjusting bids, refining ad copy, or targeting new keywords. Our team provides transparent reporting, so you always know how your campaigns are performing and where your budget is being allocated. With our ongoing support, you can trust that your SEM efforts will remain effective and aligned with your business objectives.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default SEMPage;

