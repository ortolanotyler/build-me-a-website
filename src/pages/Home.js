import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';

function HomePage() {

  

  return (
    <div className="App"
    style = {{ background: '#f8f8f8', padding: '0px, 0px' }}>
    
    
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}> </ParallaxSection>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/4.png`}>
      
      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>

  
 
      </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
        
        </ParallaxSection>

    
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/10.png`}>
        
      </ParallaxSection>
  
      
       
      <SkillsBanner/>
     
      <HomeServices/>
    </div>
  );
}

export default HomePage;
