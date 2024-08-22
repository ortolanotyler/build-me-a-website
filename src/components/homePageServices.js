import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButtonComponent';

const TitleBanner = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  padding: 1rem;
  font-size: 2rem;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 1rem;
  background-color: #f8f8f8;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem 1rem;
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
      padding: 1 2rem;

  color: #3a3a3a;
  text-align: center;
  margin-bottom: 2rem;
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
  margin-right: 1rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

const Card = styled.div`
  background-color: #f8f8f8;
  max-width: 70%; /* Ensure the card does not exceed the viewport width */
  margin: 0 auto 1rem auto; /* Center the card with auto margins */
  padding: 2rem; /* Padding inside the card */
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
  alt: "Description of the image for SEO";
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

const CardTitle = styled.h3`
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

const CardsSection = () => {
  const cards = [
    { description: 'We are a digital marketing company from Ontario. We consult with small business owners to provide them expertise in the fields of web development, digital marketing, search engine optimization, and more.', href: '#card1', image: '/Images/websites1.jpg' },
    { description: "We recognize the immense time and effort it takes to turn your idea into a profitable business, because we've been there ourselves", href: '#card2', image: '/Images/seo1.jpg' },
    { description: 'Our aim is to build lasting relationships with the people we work with and support them on their journey to small-business success.', href: '#card3', image: '/Images/sem1.jpg' },
    { description: "Whether your small business is your life's work or just beginning, we can help you to increase your revenue both online and in person.", href: '#card4', image: '/Images/19.jpg' },
    { description: 'Book a free consultation, we will go ahead and analyze your current presence and come to you with a plan at a date and time that works for you.', href: '#card5', image: '/Images/20.jpg' },
    { description: 'Thanks for stopping by.', href: '#card6', image: '/Images/21.jpg' },
  ];

  return (
    <>
      <TitleBanner
      style = {{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1) '}}
      >
      Building bridges in digital marketing</TitleBanner>
      <IntroParagraph>
     We’re a small business just like you. We understand the challenges you face and are dedicated to providing a personalized, hands-on digital solution that will help your business grow. Your success is our success.     </IntroParagraph>


      <CardContainer>
        {cards.map((card, index) => (
          <Card key={index} reversed={index % 2 !== 0}>
            <CardImageWrapper>
              <CardImage src={process.env.PUBLIC_URL + card.image} alt={card.description} />
            </CardImageWrapper>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      <SubmitButton to='/consultation' text="Book a Free Consultation" />
    </>
  );
};

export default CardsSection;
