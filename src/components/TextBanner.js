import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  width: 100vw;
  font-family: 'Montserrat', sans-serif;
  background-color: #bbd7ec; /* Dark background to contrast the text */
  color: #3a3a3a; /* Light text color */
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  font-family: 'Nunito', sans-serif;
`;

const BannerText = styled.h2`
  font-family: 'Montserrat', sans-serif;

  font-size: 5rem;
  margin: 0;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further adjustment for mobile devices */
  }
`;

const TextBanner = ({ text }) => {
  return (
    <BannerWrapper>
      <BannerText>{text}</BannerText>
    </BannerWrapper>
  );
};

export default TextBanner;
