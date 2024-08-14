import React, { useEffect, useState, useRef } from 'react';
import { styled, keyframes } from '@mui/system';

// Import image
const AboutImage = `${process.env.PUBLIC_URL}/Images/digital-marketing.jpg`;

// Slide-in keyframe animation from below
const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#bbd7ec',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px',
  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',
  },
}));

const AboutCard = styled('div')(({ theme, isVisible }) => ({
  border: '3px solid #ECE7E3',
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '20px',
  width: '100%',
  maxWidth: '700px',
  margin: '0 auto 20px auto',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
  textAlign: 'left',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    marginBottom: '10px',
  },
}));

const CardsContainer = styled('div')(({ theme, isVisible }) => ({
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  display: 'flex',
  padding: '50px',
  justifyContent: 'space-between',
  gap: '20px',
  width: '100%',
  maxWidth: '800px',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${slideInUp} 1s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    gap: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const FAQList = styled('div')({
  maxWidth: '800px',
  color: '#3A3A3A',
  fontFamily: 'Nunito, sans-serif',
  margin: '0 auto',
  marginTop: '20px',
});

const FAQItem = styled('div')({
  marginBottom: '10px',
  fontSize: '1rem',
});

const AboutAndReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <AboutContainer ref={containerRef}>
      <AboutCard isVisible={isVisible}>
        <h2>About Us</h2>
        <p>
          Welcome to Build Me A Website, where creativity meets technology to bring your digital vision to life. We're not just another web development agency; we're your partners in crafting online experiences that grow with your business. Founded with a passion for helping businesses thrive in the digital world, our team of dedicated professionals is committed to delivering websites that are not only beautiful but also functional and scalable.
        </p>
        <p>
          At Build Me A Website, we believe in building lasting relationships with our clients. We don’t just create a site and disappear—we’re here for the long haul, ready to help you adapt and evolve your online presence as your business grows. Whether it's integrating new features, optimizing for search engines, or simply giving your site a fresh look, we’ve got you covered.
        </p>
        <p>
          Our approach is simple: we listen to your needs, understand your goals, and work closely with you to create a digital solution that’s tailored to your unique business. We take pride in our attention to detail and our commitment to delivering projects on time and within budget. And because we know that your website is a critical part of your business, we’re always available to provide ongoing support and ensure that your site remains a valuable asset.
        </p>
        <p>
          Thank you for considering us as your digital partner. We’re excited to work with you and help you achieve your online goals!
        </p>
      </AboutCard>
      <CardsContainer isVisible={isVisible}>
      <FAQList>
          <h3>Frequently Asked Questions</h3>
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
          <FAQItem>
            <strong>Do you offer ongoing maintenance and support?</strong>
            <p>
              Absolutely! We offer various maintenance and support packages to ensure your website stays updated, secure, and running smoothly. This includes regular updates, security monitoring, backups, and content updates. For example, we can take care of everything from updating your site’s content and plugins to ensuring your SSL certificate is always up to date, giving you peace of mind to focus on your business.
            </p>
          </FAQItem>
          <FAQItem>
            <strong>How do you ensure my website will be SEO-friendly?</strong>
            <p>
              SEO is integrated into our development process from the start. We conduct thorough keyword research, optimize your website’s architecture, ensure mobile responsiveness, and implement clean, fast-loading code. For instance, we’ll optimize your site’s meta tags, headings, and image alt texts to align with your targeted keywords. We also ensure your site is set up for Google Analytics and Search Console, so you can track your SEO performance.
            </p>
          </FAQItem>
          <FAQItem>
            <strong>Can you integrate e-commerce functionality into my website?</strong>
            <p>
              Yes, we specialize in integrating e-commerce functionality, whether you need a simple online store or a full-fledged e-commerce platform. We can set up secure payment gateways, manage product inventory, and design user-friendly checkout processes. For instance, if you’re a retailer, we can build an online store using Shopify or WooCommerce, complete with product variations, discount codes, and customer reviews, all tailored to your brand.
            </p>
          </FAQItem>
          <FAQItem>
            <strong>What information do you need from me to get started?</strong>
            <p>
              To get started, we typically need an overview of your business, your goals for the website, and any specific features you’d like to include. If you have branding materials like a logo, color scheme, or content, that’s also helpful. For example, if you’re launching a new product, we’ll need product descriptions, images, and any promotional materials you want to feature on the site. The more detailed the information, the better we can tailor the site to your needs.
            </p>
          </FAQItem>
          <FAQItem>
            <strong>Can you provide examples of past projects?</strong>
            <p>
              Certainly! We’re proud of the work we’ve done and happy to share examples of past projects that demonstrate our expertise. You can view our portfolio on our website, where we showcase a variety of websites across different industries. For example, we recently designed a custom website for a boutique fashion brand that includes an integrated e-commerce platform, social media feeds, and a blog—all optimized for SEO and mobile devices.
            </p>
          </FAQItem>
          {/* Add other FAQItems here */}
        </FAQList>
      </CardsContainer>
    </AboutContainer>
  );
};

export default AboutAndReviews;
