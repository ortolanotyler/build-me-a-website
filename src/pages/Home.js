import React from 'react';
import ParallaxSection from './Parallax';
import HomeServices from '../components/homePageServices';

function HomePage() {
  return (
    <div className="App" style={{ background: '#f8f8f8', padding: '0px' }}>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
      <HomeServices />
    </div>
  );
}

export default HomePage;
