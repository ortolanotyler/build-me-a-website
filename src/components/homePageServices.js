import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButtonComponent';

const CardContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  background-color: #f8f8f8;
font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 100%;
`;

const Card = styled.div`
  background-color: #f8f8f8;
  min-width: 100%;
  width: 100%;
  margin: 0;
  text-align: center;
  transition: transform 0.3s ease;
  margin-bottom: 5rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 50%;
  height: auto;
  margin-left: 2rem;
  margin-bottom: 5rem;
`;

const CardTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-weight: 1.5rem;

  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled.a`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  background-color: #000000;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333333;
  }
`;

const CardsSection = () => {
  const cards = [
    { title: 'Web Development', description: 'This is a description for Web Development.', href: '#card1', image: '/Images/1.png' },
    { title: 'Card 2', description: 'This is a description for Card 2.', href: '#card2', image: '/Images/2.png' },
    { title: 'Card 3', description: 'This is a description for Card 3.', href: '#card3', image: '/Images/3.png' },
    { title: 'Card 4', description: 'This is a description for Card 4.', href: '#card4', image: '/Images/4.png' },
    { title: 'Card 5', description: 'This is a description for Card 5.', href: '#card5', image: '/Images/5.png' },
    { title: 'Card 6', description: 'This is a description for Card 6.', href: '#card6', image: '/Images/6.png' },
  ];

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage src={process.env.PUBLIC_URL + card.image} alt={card.title} />
          <div>
          <CardDescription>{card.description}</CardDescription>

          </div>
          
<SubmitButton
color = "black"
/>
 </Card>
      ))}
    </CardContainer>
  );
};

export default CardsSection;
