import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const SeoContainer = styled('div')(({ theme }) => ({
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

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#bbd7ec',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  border: '3px solid #F4E1D2', // Add border to match other components
  maxWidth: '800px', // Maximum width of the content box
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%', // Adjust width for smaller screens
    padding: '20px', // Reduce padding on smaller screens
  },
}));

const SeoPage = () => {
  return (
    <SeoContainer>
      <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Nunito, sans-serif' }}>
        SEO Services
      </Typography>
      <ContentBox>
        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
          What is SEO?
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Nunito, sans-serif' }}>
          Search Engine Optimization (SEO) is the process of enhancing your website to increase its visibility on search engines like Google. When your site ranks higher in search results, it becomes more accessible to potential customers, driving organic traffic and increasing your chances of conversion. SEO is a blend of art and science, requiring a deep understanding of search engine algorithms and user behavior to effectively position your business online.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
          Why is SEO Important?
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Nunito, sans-serif' }}>
          In today’s digital landscape, being found online is critical to success. With billions of searches conducted every day, a strong SEO strategy ensures that your business stands out among the competition. Effective SEO not only boosts your website's visibility but also enhances user experience, builds trust with your audience, and drives sustainable growth by attracting quality leads to your site.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
          Our Approach to SEO
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Nunito, sans-serif' }}>
          At [Your Firm Name], we believe in a comprehensive and tailored approach to SEO. Our unique solutions start with in-depth research and analysis, allowing us to craft a strategy that aligns with your business goals. We focus on both on-page and off-page optimization, ensuring that every aspect of your website—from content and keywords to backlinks and social signals—is optimized to perform at its best.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
          Continuous Monitoring and Adjustments
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Nunito, sans-serif' }}>
          SEO is not a one-time effort but an ongoing process. Our team continually monitors your website's performance, using advanced analytics tools to track key metrics and identify areas for improvement. As search algorithms evolve, we make proactive adjustments to keep your site ahead of the curve. This commitment to ongoing optimization ensures that your business remains visible, competitive, and poised for long-term success.
        </Typography>
      </ContentBox>
    </SeoContainer>
  );
};

export default SeoPage;
