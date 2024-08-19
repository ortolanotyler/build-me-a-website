import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButtonComponent';
import AboutLogosComponent from './AboutLogos';



const TitleBanner = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: normal;
  padding: 1rem;
  font-size: 2.5rem;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 2rem; /* Space between the title and the cards */

  background-color: #f8f8f8; /* Light background for the title */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const IntroParagraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
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
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 5; /* Adjust padding to ensure even spacing */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  background-color: #f8f8f8;
  max-width: 70%; /* Ensure the card does not exceed the viewport width */
  margin: 0 auto 5rem auto; /* Center the card with auto margins */
  padding: 0 1rem; /* Adjust padding inside the card to balance space */
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')}; /* Alternate layout */
  align-items: center;
  text-align: left;
  overflow: hidden; /* Prevent content from overflowing */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on smaller screens */
    text-align: center;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 2rem; /* Reduce margin for smaller screens */
  }
`;

const CardImageWrapper = styled.div`
  flex: 1;
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
  padding: 1rem;

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
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: #3a3a3a;
  margin-bottom: 1rem;
`;

const AboutPageMainContent = () => {
  const cards = [
    {  description: "We start by getting to know your business, your brand, and who you are at the core. This understanding is essential, guiding all our strategic and design decisions to ensure they align with your goals. By uncovering your unique vision, we can craft marketing strategies that resonate with your audience long before the creative work begins.", href: '#card1', image: '/Images/1.png' },
    { description: "We analyze your key competitors to understand their marketing tactics and identify industry-specific design trends that resonate with your audience. This research informs our approach, allowing us to plan and implement on-site SEO strategies that position you to compete effectively from the start.", href: '#card2', image: '/Images/2.png' },
    {  description: "We take the ideas you have given us and turn them into an outline that includes a wireframe and sitemap, ensuring that each section of your site integrates seemlessly with the design you choose.", href: '#card3', image: '/Images/3.png' },
    {  description: "We bring your design to life, allowing you to interact with a fully functional version of your website. This gives you the opportunity to review and suggest improvements before final adjustments. The site is hosted on our private development server, providing ample time to explore the prototype and ensure it meets your expectations. We also conduct rigorous testing to resolve any issues, ensuring a smooth launch when the new design goes live.", href: '#card4', image: '/Images/4.png' },
    {  description: "We transition the new website to the live server and conduct extensive testing across multiple platforms to ensure it performs flawlessly. Our quality assurance process is designed to catch any last-minute issues, ensuring your site is ready for a smooth public launch. To prevent any hiccups, we follow a thorough pre-launch checklist during deployment, verifying that everything is correctly set up and functioning as expected before your website goes live.", href: '#card5', image: '/Images/5.png' },
    { description: "For us, the project doesn't end with the launch. Continuous monitoring and iteration allows us to ensure you rank high on search engines, improve your user experience, and get the support you need to see an increase in both traffic and revenue. ", href: '#card6', image: '/Images/6.png' },
  ];

  return (
    <>
    <TitleBanner>Our Process</TitleBanner>
    <IntroParagraph>
        Our approach is grounded in understanding your unique vision and aligning our strategies to meet your goals. Here’s how we work with you to bring your ideas to life, step by step.
      </IntroParagraph>
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
    <div 
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/consultation.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
            border: "3px solid #3a3a3a",
            textAlign: 'center',
            width: '80%',        // Responsive width for the image section
            maxWidth: '400px',   // Max width to avoid too wide on large screens
            height: '4rem',      // Adjust the height as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem auto',  // Center the section horizontally
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(2px)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onClick={() => alert('Button Clicked!')}
        >
          {/* Button Text */}
        </div>
        <IntroParagraph>
       Ready to bring your ideas to life? Let's get started!
      </IntroParagraph>
      <AboutLogosComponent/>

    </>
  
  );
};

export default AboutPageMainContent;
