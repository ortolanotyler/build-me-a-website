import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';
import AboutPageMainContent from '../components/aboutPageMainContent';

function ContactPage() {

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Contact.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Contact.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Contact.jpg`}> </ParallaxSection>

     
        
     

    
        
      
 
      
        
        
        <AboutPageMainContent/>
  
   
    </div>
  );
}

export default ContactPage;