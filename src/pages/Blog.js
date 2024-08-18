import React from 'react';
import ParallaxSection from './Parallax';
import SkillsBanner from '../components/SkillsBanner';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';
import AboutPageMainContent from '../components/aboutPageMainContent';

function BlogPage() {

  

  return (
    <div className="App">
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`}> </ParallaxSection>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`}> </ParallaxSection>

     
        
     

    
        
      
 
      
        
        
  
   
    </div>
  );
}

export default BlogPage;
