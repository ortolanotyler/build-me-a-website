import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff; // Assuming the background is white
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 400px; // Adjust as needed
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  position: absolute;
  max-width: 100%;
  height: auto;
  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 120px; // Adjust size and position based on the layout
  }
  &:nth-child(2) {
    top: 50px;
    left: 50px;
    width: 180px;
  }
  &:nth-child(3) {
    bottom: 50px;
    left: 20px;
    width: 150px;
  }
  &:nth-child(4) {
    bottom: 0;
    right: 0;
    width: 250px;
  }
  &:nth-child(5) {
    bottom: -50px;
    left: 100px;
    width: 180px;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-left: 2rem;
  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Heading = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #1f1f1f;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  color: #4a4a4a;
  line-height: 1.5;
`;

const EmphasizedText = styled.span`
  font-weight: bold;
  color: #1a1a6c; // Emphasized color (dark blue)
`;

const ComponentA = () => {
  return (
    <Container>
      <ImagesWrapper>
        <Image src={`${process.env.PUBLIC_URL}/Images/jackiewyers.png`} alt="hello 1" />
        <Image src={`${process.env.PUBLIC_URL}/Images/image2.png`} alt="Image 2" />
        <Image src={`${process.env.PUBLIC_URL}/Images/image3.png`} alt="Image 3" />
        <Image src={`${process.env.PUBLIC_URL}/Images/image4.png`} alt="Image 4" />
        <Image src={`${process.env.PUBLIC_URL}/Images/image5.png`} alt="Image 5" />
      </ImagesWrapper>
      <TextWrapper>
        <Heading>
insert text here for a hero        </Heading>
        <Paragraph>
we're a small business..         </Paragraph>
        <Paragraph>
come check us out.. 
        </Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default ComponentA;