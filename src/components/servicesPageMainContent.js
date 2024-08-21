import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButtonComponent';

const TitleBanner = styled.h1`  /* Updated to H1 for SEO */
  font-family: 'Nunito', sans-serif;
  font-weight: normal;
  padding: 1rem;
  font-size: 2.5rem;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 1rem; /* Space between the title and the cards */
  background-color: #f8f8f8; /* Light background for the title */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const IntroParagraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 60%;
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
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  background-color: #f8f8f8;
  max-width: 70%;
  font-family: 'Nunito', sans-serif;
  margin: 0 auto 5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  align-items: center;
  text-align: left;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const CardImageWrapper = styled.div`
  flex: 1;
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
  alt: "Service image";  /* Added alt text for SEO */
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const CardTitle = styled.h2`  /* Updated to H2 for SEO */
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  font-weight: normal;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const ServicesPageMain = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Web Development", description: "We create and maintain functional, visually appealing websites that work on all devices. Our flexible approach ensures your site grows with your business.", href: '#card1', image: '/Images/service1.jpg' },
    { title: "Web Design", description: "We design user-friendly websites that balance aesthetics and functionality, creating a great first impression while guiding visitors to key actions.", href: '#card2', image: '/Images/service6.jpg' },
    { title: "SEO Optimization", description: "Our tailored SEO strategies boost your website's visibility, driving organic traffic and enhancing your online presence.", href: '#card3', image: '/Images/service2.jpg' },
    { title: "SEM Campaigns", description: "We manage SEM campaigns that drive targeted traffic to your site, increasing brand awareness and delivering measurable results.", href: '#card4', image: '/Images/service3.jpg' },
    { title: "Hosting Solutions", description: "Our hosting solutions ensure your website is fast, secure, and always available, providing a strong foundation for your online presence.", href: '#card5', image: '/Images/service4.jpg' },
    { title: "DNS Management", description: "We handle DNS migrations seamlessly, ensuring your website remains accessible and downtime is minimized during transitions.", href: '#card6', image: '/Images/service5.jpg' },
  ];

  return (
    <>
      <TitleBanner>Our Services</TitleBanner>
      <IntroParagraph>
        At BuildMe, we build more than just websites. We provide continuous monitoring and expertise to ensure you get the best possible results from your digital marketing efforts.
      </IntroParagraph>
      <CardContainer>
        {cards.map((card, index) => (
          <Card key={index} isReversed={index % 2 !== 0}>
            <CardImageWrapper>
              <CardImage src={process.env.PUBLIC_URL + card.image} alt={card.title} />
            </CardImageWrapper>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      <IntroParagraph>
        Ready to bring your ideas to life? Let's get started!
      </IntroParagraph>
      <SubmitButton to='/consultation' text="Book a Free Consultation" />
    </>
  );
};

export default ServicesPageMain;
