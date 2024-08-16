import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4e1d2;
  width: 100%;
  min-height: 20vh;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    color: #3a3a3a;
    font-size: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #F2784B;
    }
  }
`;

const SocialMediaBanner = () => {
  return (
    <BannerContainer>
      <IconWrapper>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </IconWrapper>
    </BannerContainer>
  );
};

export default SocialMediaBanner;
