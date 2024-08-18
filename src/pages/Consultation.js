import React from 'react';
import ParallaxSection from './Parallax';

import AboutPageMainContent from '../components/aboutPageMainContent';

function ConsultationPage() {

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`}> </ParallaxSection>

     
        
     

    
        
      
 
      
        
        
        <AboutPageMainContent/>
  
   
    </div>
  );
}

export default ConsultationPage;
