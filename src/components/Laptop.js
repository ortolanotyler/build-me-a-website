import React from 'react';
import { styled, keyframes } from '@mui/system';

// Import images
const Image1 = `${process.env.PUBLIC_URL}/Images/laptop.png`;
const Image2 = `${process.env.PUBLIC_URL}/Images/laptop.png`;

// Keyframes for sliding animations
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled container for the images
const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh', // Height of the container

  position: 'relative',
  overflow: 'hidden', // Hide any overflow
  backgroundColor: '#bbd7ec', // Light blue background color for the entire container
  padding: '0 20px', // Add some padding to avoid images being too close to the edges
});

// Styled components for each image
const Image = styled('img')(({ animation }) => ({
  width: 'auto',
  height: '400px', // Set a fixed height for the images
  animation: `${animation} 1.5s ease-out forwards`,
  margin: '0 10px', // Add some margin between the images
}));

const Laptops = () => {
  return (
    <Container>
      <Image src={Image1} alt="Image 1" animation={slideInLeft} />
      <Image src={Image2} alt="Image 2" animation={slideInRight} />
    </Container>
  );
};

export default Laptops;
