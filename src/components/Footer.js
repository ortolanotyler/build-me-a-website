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

const Body = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg);

  display: grid;
  grid-template-rows: 1fr 10rem auto;
  grid-template-areas: "main" "." "footer";
  overflow-x: hidden;
  background: #f8f8f1;
  min-height: 5vh;
  font-family: 'Open Sans', sans-serif;
`;

const Main = styled.div`
margin-top: 50px;

  grid-area: main;
`;

const FooterContainer = styled.div`
  z-index: 2;
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
  height: 5px;
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
`;

const Content = styled.div`
  z-index: 2;
  font-family: 'Nunito', sans-serif;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 5rem;
  padding: 2rem;
  background: var(--footer-background);

  a, p {
    color: #3a3a3a ;
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
    justify-content: center;

    > div {
     

      > * {
        margin-right: .5rem;
      }
    }

    .image {
      align-self: center;
      width: 5rem;
      height: 10rem;
 
      background-size: cover;
      background-position: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
   
      <Content>
        <div>
          <div>
            <b>Home</b>
            
        
            
          </div>
          <div>
            <b>About</b>
            <a href="#">Blog</a>

          </div>
          <div>
            <b>Services</b>
            <a href="#">Websites</a>
            <a href="#">SEO</a>
            <a href="#">SEM</a>
           
            <a href="#">Hosting</a>
            <a href="#">Design</a>
            <a href="#">DNS Migration</a>
          </div>
          <div>
            <b>Contact</b>
            <a href="#">Consultation</a>
         
          </div>
        </div>
       
      </Content>
    </FooterContainer>
  );
};

const App = () => {
  return (
    <Body>
      <Main />
      <Footer />
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </Body>
  );
};

export default App;
