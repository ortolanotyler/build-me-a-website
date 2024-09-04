import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styledComponents from 'styled-components';

// Import logo image
const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const StyledLink = styledComponents(Link)`
  text-decoration: none;
  color: #ffffff;
  font-family: 'Lora', sans-serif;
  font-size: 1.25rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #3a3a3a;
  }
`;

const NavigationMenuBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header style={styles.header}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContainer}>
          <span style={styles.topBarItem}>
            Book your free consultation today
          </span>
          <span style={styles.topBarItem}>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:contact@buildmeawebsite.ca';
                e.preventDefault();
              }}
              style={styles.emailLink}
            >
              contact@bookmeawebsite.ca
            </Link>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={isMobile ? styles.mobileToolbar : styles.toolbar}>
          {!isMobile && (
            <div style={styles.logoContainer}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={logo} alt="BuildMe Logo" style={styles.logo} />
              </Link>
            </div>
          )}
          <nav style={styles.navMenu}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/consultation">Free Consultation</StyledLink>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    zIndex: 1000,
    position: 'fixed',
    color: '#fcfaf4',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#bb7dec',
  },
  topBar: {
    backgroundColor: '#F4E1D1',
    color: '#3a3a3a',
    padding: '10px 0',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '.75rem',
  },
  topBarContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0.25rem 1.5rem',
  },
  topBarItem: {
    marginLeft: '20px',
  },
  emailLink: {
    color: '#3a3a3a',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  appBar: {
    backgroundColor: '#bbd7ec',
    boxShadow: 'none',
    width: '100%',
    color: '#ffffff',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
  },
  mobileToolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Align navigation links centrally
    padding: '10px 0', // Reduced padding on mobile
  },
  logoContainer: {
    marginBottom: '0.25rem',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: '75px',
  },
  navMenu: {
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
};

export default NavigationMenuBar;