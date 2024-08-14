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

const SeoPage = () => {
  return (
    <PageContainer>
  <Typography variant="h3" align="center" gutterBottom style={{ 
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow

        fontFamily: 'Nunito, sans-serif' }}>
        SEO Services
      </Typography>
      <ContentContainer>
        <SectionTitle variant="h6" gutterBottom>
          What is SEO?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          Search Engine Optimization (SEO) is the process of enhancing your website to increase its visibility on search engines like Google. When your site ranks higher in search results, it becomes more accessible to potential customers, driving organic traffic and increasing your chances of conversion. SEO is a blend of art and science, requiring a deep understanding of search engine algorithms and user behavior to effectively position your business online.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/search-engine-optimization-2.jpg`} alt="Search Engine Optimization" />

        <SectionTitle variant="h6" gutterBottom>
          Why is SEO Important?
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          In today’s digital landscape, being found online is critical to success. With billions of searches conducted every day, a strong SEO strategy ensures that your business stands out among the competition. Effective SEO not only boosts your website's visibility but also enhances user experience, builds trust with your audience, and drives sustainable growth by attracting quality leads to your site.
        </SectionContent>
          <StyledImage src={`${process.env.PUBLIC_URL}/Images/search-engine-optimization-3.jpg`} alt="Search Engine Optimization" />

        <SectionTitle variant="h6" gutterBottom>
          Our Approach to SEO
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          We believe in a comprehensive and tailored approach to SEO. Our unique solutions start with in-depth research and analysis, allowing us to craft a strategy that aligns with your business goals. We focus on both on-page and off-page optimization, ensuring that every aspect of your website—from content and keywords to backlinks and social signals—is optimized to perform at its best.
        </SectionContent>
        <StyledImage src={`${process.env.PUBLIC_URL}/Images/search-engine-optimization-1.jpg`} alt="Search Engine Optimization" />

        <SectionTitle variant="h6" gutterBottom>
          Continuous Monitoring and Adjustments
        </SectionTitle>
        <SectionContent variant="body1" paragraph>
          SEO is not a one-time effort but an ongoing process. Our team continually monitors your website's performance, using advanced analytics tools to track key metrics and identify areas for improvement. As search algorithms evolve, we make proactive adjustments to keep your site ahead of the curve. This commitment to ongoing optimization ensures that your business remains visible, competitive, and poised for long-term success.
        </SectionContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default SeoPage;
