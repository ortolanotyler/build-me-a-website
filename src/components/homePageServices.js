import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButtonComponent';

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
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')}; /* Alternate layout */
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
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const CardsSection = () => {
  const cards = [
    {  description: 'Building bridges in small business digital marketing.', href: '#card1', image: '/Images/websites1.jpg' },
    { description: 'We are a digital marketing company from Ontario. We consult with small business owners to provide them expertise in the fields of web development, digital marketing, and search engine optimization.', href: '#card2', image: '/Images/seo1.jpg' },
    {  description: 'Our aim is to build lasting relationships with the people we work with and support them on their journey to small-business success.', href: '#card3', image: '/Images/sem1.jpg' },
    {  description: "Whether your small business is your life's work or just beginning, we can help you to increase your revenue both online and in person.", href: '#card4', image: '/Images/19.jpg' },
    {  description: 'Book a free consultation, we will go ahead and analyze your current presence and come to you with a plan at a date and time that works for you.', href: '#card5', image: '/Images/20.jpg' },
    { description: 'Thanks for stopping by.', href: '#card6', image: '/Images/21.jpg' },
  ];

  return (
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
  );
};

export default CardsSection;
