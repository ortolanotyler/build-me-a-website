import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButtonComponent';
import AboutLogosComponent from './AboutLogos';

const TitleBanner = styled.h2`  /* Updated to H2 for consistency */
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  padding: 1rem;
  font-size: 2rem;
  color: #3a3a3a;
  text-align: center;
  background-color: #f8f8f8; /* Light background for the title */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

const IntroParagraph = styled.p`
  font-family: 'League Spartan', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 0 2rem;
  color: #3a3a3a;
  text-align: center;
  line-height: 1.6;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 95%;
  }
`;

const CardContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  background-color: #f8f8f8;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem ;
  }

  @media (max-width: 480px) {
    padding: 1rem ;
  }
`;

const Card = styled.div`
  background-color: #f8f8f8;
  max-width: 70%; /* Ensure the card does not exceed the viewport width */
  margin: 0 auto 1rem auto; /* Center the card with auto margins */
  padding: 1rem; /* Padding inside the card */
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')}; /* Alternate layout */
  align-items: center;
  text-align: left;
  overflow: hidden; /* Prevent content from overflowing */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on smaller screens */
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 2rem; /* Reduce margin for smaller screens */
  }
`;

const CardImageWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  alt: "Process Step Image";  /* Added alt text for SEO */
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const CardTitle = styled.h3`  /* Updated to H3 for consistency */
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const CardWrapper = ({ reversed, children, ...rest }) => (
  <Card reversed={reversed} {...rest}>
    {children}
  </Card>
);

const AboutPageMainContent = () => {
  const cards = [
    { title: "1. Understanding Your Business", description: "We begin by understanding your business and brand, ensuring our strategies align with your goals and resonate with your audience.", href: '#card1', image: '/Images/1.png' },
    { title: "2. Competitor Analysis & SEO Strategy", description: "We analyze competitors and industry trends to develop SEO strategies that position you effectively from the start.", href: '#card2', image: '/Images/2.png' },
    { title: "3. Wireframe & Sitemap Creation", description: "We create a wireframe and sitemap, integrating your ideas seamlessly into the design.", href: '#card3', image: '/Images/3.png' },
    { title: "4. Prototype Development", description: "We bring your design to life with a functional prototype, allowing for review and testing before the final launch.", href: '#card4', image: '/Images/4.png' },
    { title: "5. Site Launch & Testing", description: "We transition your site to the live server, conducting extensive testing to ensure a flawless launch.", href: '#card5', image: '/Images/5.png' },
    { title: "Ongoing Optimization", description: "After launch, we continuously monitor and optimize to enhance your search ranking, user experience, and revenue.", href: '#card6', image: '/Images/6.png' },
  ];

  return (
    <>
      <TitleBanner>Our Process</TitleBanner>
      <div style={{ marginBottom: '1rem' }}>
        <IntroParagraph>
          Our approach is grounded in understanding your unique vision and aligning our strategies to meet your goals. Here’s how we work with you to bring your ideas to life, step by step.
        </IntroParagraph>
      </div>

      <CardContainer>
        {cards.map((card, index) => (
          <CardWrapper key={index} reversed={index % 2 !== 0}>
            <CardImageWrapper>
              <CardImage src={process.env.PUBLIC_URL + card.image} alt={card.title} />
            </CardImageWrapper>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </CardWrapper>
        ))}
      </CardContainer>

      <IntroParagraph>
        Ready to bring your ideas to life? Let's get started!
      </IntroParagraph>
      <div style = {{padding: '5rem'}}>
      <SubmitButton to='/consultation' text="Book a Free Consultation" />
      </div>
    </>
  );
};

export default AboutPageMainContent;
