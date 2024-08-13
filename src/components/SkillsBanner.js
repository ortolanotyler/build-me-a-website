import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSearch, faBullhorn, faCogs } from '@fortawesome/free-solid-svg-icons';

const SkillsBanner = () => {
  const skillsBannerStyle = {
    backgroundColor: '#f5f5dc', // Match the background color of the hero section
    padding: '30px 0', // Padding around the skills section
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const skillStyle = {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Nunito, sans-serif', // Correctly specify the font family
    fontWeight: '700'
  };

  const iconStyle = {
    fontSize: '3rem', // Adjust icon size
    color: 'black', 
    marginBottom: '10px',
  };

  return (
    <div style={skillsBannerStyle}>
      <div style={skillStyle}>
        <FontAwesomeIcon icon={faLaptopCode} style={iconStyle} />
        <p>Web Design</p>
      </div>
      <div style={skillStyle}>
        <FontAwesomeIcon icon={faSearch} style={iconStyle} />
        <p>SEO</p>
      </div>
      <div style={skillStyle}>
        <FontAwesomeIcon icon={faBullhorn} style={iconStyle} />
        <p>Digital Marketing</p>
      </div>
      <div style={skillStyle}>
        <FontAwesomeIcon icon={faCogs} style={iconStyle} />
        <p>Solutions</p>
      </div>
    </div>
  );
};

export default SkillsBanner;
