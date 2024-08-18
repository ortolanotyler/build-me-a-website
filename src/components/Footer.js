import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg);
  display: grid;
  grid-template-rows: 2fr auto;
  grid-template-areas: "main" "footer";
  overflow-x: hidden;
  background: #f8f8f1;
  min-height: 10vh;
  font-family: 'Nunito', sans-serif;
`;

const Main = styled.div`
  grid-area: main;
`;

const FooterContainer = styled.div`
  z-index: 2;
  --footer-background: #bbd7ec;
  display: grid;
  position: relative;
  grid-area: footer;
  background: var(--footer-background); /* Ensure footer background is light blue */
  padding: 3rem; /* Increased padding to make the blue area taller */
`;

const Content = styled.div`
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
    justify-content: center;

    .image {
      align-self: center;
      width: 5rem;
      height: 10rem;
      background-size: cover;
      background-position: center;
    }

    b {
      margin-bottom: 0.5rem; /* Add space below each bold title */
    }

    a {
      margin-top: 0.5rem; /* Add space between the links */
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
          </div>
          <div>
            <b>Services</b>
          
          </div>
          <div>
            <b>Contact</b>
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
    </Body>
  );
};

export default App;
