import React from 'react';
import styled, { keyframes } from 'styled-components';

const bubbleSize = keyframes`
  0%, 75% {
    width: var(--size, 4rem);
    height: var(--size, 2rem);
  }
  100% {
    width: 0rem;
    height: 0rem;
  }
`;

const bubbleMove = keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom: var(--distance, 10rem);
  }
`;

const FooterContainer = styled.div`
  z-index: 1;
  --footer-background: #bbd7ec;
  display: grid;
  position: relative;
  grid-area: footer;
`;

const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: var(--footer-background);
  filter: url("#blob");

  .bubble {
    position: absolute;
    left: var(--position, 50%);
    background: var(--footer-background);
    border-radius: 100%;
    animation: ${bubbleSize} var(--time, 4s) ease-in infinite var(--delay, 0s),
               ${bubbleMove} var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform: translate(-50%, 100%);
  }

  /* Hide bubbles on mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  z-index: 2;
  font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: space-between; /* Aligns items to both sides */
  padding: 2rem;
  background: var(--footer-background);

  a, p {
    color: #3a3a3a;
    text-decoration: none;
  }

  b {
    color: white;
    font-weight: 300;
  }

  p {
    margin: 0;
    font-size: .75rem;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    display: flex;
    flex-direction: column; /* Stack logo and email vertically */
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 4rem;
    height: 4rem;
    background-size: cover;
    background-position: center;
    margin-bottom: 0.5rem; /* Space between logo and email */
  }

  .email {
    font-size: 0.75rem;
    color: #3a3a3a;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
     
      <Content>
        <div>
          <div>
            <a href="/"> <b>Home</b> </a>            
          </div>
          <div>
            <a href="/about"> <b>About</b> </a>
            <a href="/blog">Blog</a>
          </div>
          <div>
            <a href="/services"> <b>Services</b> </a>
          </div>
          <div>
            <a href="/consultation"> <b>Contact</b> </a>
            <a href="/consultation">Consultation</a>
          </div>
        </div>
        <div className="logo-container">
          <div className="logo" style={{ minWidth: '200px', backgroundImage: 'url(/Images/logo.png)' }} />
          <div className="email">contact@buildmeawebsite.ca</div> {/* Email rendered below the logo */}
        </div>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
