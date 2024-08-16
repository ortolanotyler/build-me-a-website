import React from 'react';
import { styled } from '@mui/system';



const AboutList = styled('div')({
    maxWidth: '1000px',
  
    color: '#3A3A3A',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: '20px', // Rounded corners for the FAQ container
  
  });

const AboutItem = styled('div')({
  marginBottom: '10px',
  padding: '2rem',
  fontSize: '1rem',
});

const AboutCard = () => {
  return (
    <AboutList>
        <div style = {{ textAlign: 'center' }}>
      <h2>About</h2>
      </div>
      <AboutItem>
        <strong>What services does your web development business offer?</strong>
        <p>
          At Build Me A Website, we offer a comprehensive range of services tailored to help your business thrive online. Our core offerings include custom web design and development, SEO, digital marketing, and web hosting. Whether you need a visually stunning website, want to improve your search engine rankings, or require a complete digital marketing strategy, we’ve got you covered. For example, our SEO services involve a detailed keyword analysis, on-page optimization, and ongoing content creation to ensure your website ranks high on search engines like Google.
        </p>
      </AboutItem>
      <AboutItem>
        <strong>How long does it take to build a website?</strong>
        <p>
          The timeline for building a website varies depending on the project's complexity and your specific requirements. On average, a standard business website takes about 4-6 weeks from initial consultation to launch. This includes time for design, development, revisions, and testing. For example, a basic brochure site might take less time, while an e-commerce site with custom features could take longer. We always keep you informed throughout the process, ensuring timely delivery without compromising on quality.
        </p>
      </AboutItem>
   
   
    </AboutList>
  );
};

export default AboutCard;
