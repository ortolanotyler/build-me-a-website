import React from 'react';
import { styled } from '@mui/system';

const FAQList = styled('div')({
    maxWidth: '100%',
    color: '#3A3A3A',
    fontFamily: 'Nunito, sans-serif',
    padding: '5rem',
    borderRadius: '10px', // Rounded corners for the About container
    justifyContent: 'center',

});

const FAQItem = styled('div')({
  marginBottom: '1rem',
  fontSize: '1rem',
});

const FAQs = () => {
  return (
    <FAQList>
      <h2>Frequently Asked Questions</h2>
      <FAQItem>
        <strong>What services does your web development business offer?</strong>
        <p>
          At Build Me A Website, we offer a comprehensive range of services tailored to help your business thrive online. Our core offerings include custom web design and development, SEO, digital marketing, and web hosting. Whether you need a visually stunning website, want to improve your search engine rankings, or require a complete digital marketing strategy, we’ve got you covered. For example, our SEO services involve a detailed keyword analysis, on-page optimization, and ongoing content creation to ensure your website ranks high on search engines like Google.
        </p>
      </FAQItem>
      <FAQItem>
        <strong>How long does it take to build a website?</strong>
        <p>
          The timeline for building a website varies depending on the project's complexity and your specific requirements. On average, a standard business website takes about 4-6 weeks from initial consultation to launch. This includes time for design, development, revisions, and testing. For example, a basic brochure site might take less time, while an e-commerce site with custom features could take longer. We always keep you informed throughout the process, ensuring timely delivery without compromising on quality.
        </p>
      </FAQItem>
      <FAQItem>
        <strong>Do you offer custom website designs, or do you use templates?</strong>
        <p>
          We believe every business is unique, so we offer fully custom website designs tailored to your brand and goals. While templates can be a starting point for some, we prefer to create designs from scratch to ensure your site stands out and aligns perfectly with your vision. For instance, if you’re in the fashion industry, we might design a visually rich, mobile-responsive site that highlights your products in a sleek, modern layout, reflecting the essence of your brand.
        </p>
      </FAQItem>
      <FAQItem>
        <strong>What platforms do you build websites on?</strong>
        <p>
          We’re versatile in the platforms we use, tailoring our approach based on your needs. We have expertise in building custom solutions using platforms like WordPress for content-driven sites, Shopify for e-commerce, and custom-coded websites using React for more complex requirements. For example, if you need an e-commerce store, we might recommend Shopify for its robust, user-friendly platform that scales with your business.
        </p>
      </FAQItem>
      <FAQItem>
        <strong>What is your pricing structure?</strong>
        <p>
          Our pricing is transparent and tailored to the specific needs of your project. We offer both fixed-price packages for standard services, like a basic business website or SEO audit, and custom quotes for more complex or unique projects. For instance, a standard 5-page business website might start at $2,500, while a fully custom e-commerce platform with advanced integrations could be priced higher. We’re always upfront about costs, so there are no surprises.
        </p>
      </FAQItem>
     
    </FAQList>
  );
};

export default FAQs;
