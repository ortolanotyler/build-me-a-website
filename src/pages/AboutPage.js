import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';

function AboutPage() {

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}> </ParallaxSection>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}>
      
      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>

  
 
      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
        
        </ParallaxSection>

    
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg`}>
        
      </ParallaxSection>
  
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg`}>
      <SkillsBanner/>
        </ParallaxSection>
        <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg`}>
        <SubmitButton
        text = "Free Consultation"
        type = "button"
        onClick = {() => alert('Free consultation requested')}
        >
          </SubmitButton>

        </ParallaxSection>
      
        
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/beachrocksbackground.jpg`}>
        
        <HomeServices/>
  
      </ParallaxSection>
   
    </div>
  );
}

export default AboutPage;
