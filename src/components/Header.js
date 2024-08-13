import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center all content horizontally
    alignItems: 'center',
    padding: isMobile ? '20px' : '20px',
    backgroundColor: '#f5f5dc', // Beige background to match the page
    position: 'fixed', // Fix the header to the top of the screen
    top: '0',
    left: '0',
    width: '100%', // Ensure the header spans the full width of the screen
    zIndex: '1000', // Ensure the header stays on top of other content
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
  };

  const logoStyle = {
    width: '250px', // Set the logo width
    height: 'auto', // Maintain aspect ratio
    position: 'absolute',
    left: '50px', // Adjust left margin
    top: '50%', // Align vertically in the center of the header
    transform: 'translateY(-50%)', // Adjust for accurate vertical centering
    display: isMobile ? 'none' : 'block', // Hide the logo on screens smaller than 900px
  };

  const navStyle = {
    display: 'flex',
    gap: '10px', // Increased gap for better spacing
    justifyContent: 'center', // Center the nav links
    margin: '0 auto', // Center the nav links within the header
    padding: isMobile ? '10px 0' : '0', // Add padding on mobile
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black', // Text color
    fontFamily: 'Nunito, sans-serif', // Correctly specify the font family
    fontSize: isMobile ? '1.25rem' : '1.25rem', // Adjust font size for mobile
    fontWeight: '700',
    padding: isMobile ? '10px' : '8px', // Adjust padding for mobile
    borderRadius: '4px',
    transition: 'transform 0.3s ease', // Transition for the transform effect
    textAlign: 'center', // Center text alignment on mobile
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)'; // Shift up on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'; // Reset position when not hovered
  };

  return (
    <header style={headerStyle}>
      <Link to="/">
        <img src={logo} alt="Logo" style={logoStyle} />
      </Link>
      <nav style={navStyle}>
        <Link 
          to="/" 
          style={linkStyle} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          style={linkStyle} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Services
        </Link>
        <Link 
          to="/portfolio" 
          style={linkStyle} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Portfolio
        </Link>
        <Link 
          to="/contact" 
          style={linkStyle} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

