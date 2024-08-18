import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';
import AboutPageMainContent from '../components/aboutPageMainContent';

function AboutPage() {

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`}> </ParallaxSection>

     
        
     

    
        
      
 
      
        
        
        <AboutPageMainContent/>
  
   
    </div>
  );
}

export default AboutPage;
