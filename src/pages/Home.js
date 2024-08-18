import React from 'react';
import ParallaxSection from './Parallax';
import HomeServices from '../components/homePageServices';
import SubmitButton from '../components/SubmitButtonComponent';
import Reviews from '../components/Reviews';

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

      {/* Background Image Section with Reviews at the Top and Submit Button at the Bottom */}
      <div 
        style={{
          position: 'relative',
          textAlign: 'center',
          color: '#3A3A3A',
          margin: '2rem',
        }}
      >
        {/* Image Styled as a Button */}
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
      </div>

      {/* Reviews Section */}
      <div 
        style={{
          marginTop: '2rem',
          width: '90%',        // Responsive width
          maxWidth: '800px',   // Max width to avoid too wide on large screens
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Reviews />
      </div>
    </div>
  );
}

export default HomePage;
