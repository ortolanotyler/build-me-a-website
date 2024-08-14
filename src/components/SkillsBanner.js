import React from 'react';
import { HiCode, HiSearch, HiSpeakerphone, HiCog } from 'react-icons/hi';

const SkillsBanner = () => {
  const wrapperStyle = {
    backgroundColor: '#bbd7ec', // Match the background color of the hero section
    minHeight: '20vh',
    padding: '50px 0', // Padding around the skills section
    width: '100%', // Make sure it spans the full width
  };

  const skillsBannerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '800px', // Adjusted max-width for large screens
    margin: '0 auto',
    flexWrap: 'wrap', // Allow wrapping to the next line
  };

  const skillStyle = {
    textAlign: 'center',
    color: '#3A3A3A',
    fontFamily: 'Nunito, sans-serif', // Correctly specify the font family
    fontWeight: '700',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', // Add text shadow
    flex: '1 1 20%', // Make each icon take up 20% of the width, allowing for horizontal layout on large screens
    marginBottom: '20px', // Add margin between rows on smaller screens
    maxWidth: '200px', // Limit the width of each icon box
  };

  const iconStyle = {
    fontSize: '3rem', // Adjust icon size
    color: '#F2784B', // Ensure background color goes orange
    marginBottom: '10px',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.05)', // Add text shadow
  };

  return (
    <div style={wrapperStyle}>
      <div style={skillsBannerStyle}>
        <div style={skillStyle}>
          <HiCode style={iconStyle} />
          <p>Web Design</p>
        </div>
        <div style={skillStyle}>
          <HiSearch style={iconStyle} />
          <p>SEO</p>
        </div>
        <div style={skillStyle}>
          <HiSpeakerphone style={iconStyle} />
          <p>Digital Marketing</p>
        </div>
        <div style={skillStyle}>
          <HiCog style={iconStyle} />
          <p>Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsBanner;
