import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styledComponents from 'styled-components';

// Import Nunito font from Google Fonts in your index.html or main CSS file
// <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;600;700;800&display=swap" rel="stylesheet">

const StyledLink = styledComponents(Link)`
  text-decoration: none;
  color: #f8f8f8;
  font-family: 'Nunito', sans-serif; /* Ensure the correct syntax with quotes */
  font-size: 1.25rem;
  font-weight: 100;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #bbd7ec;
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(null);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY;
    };

    const handleHeaderVisibility = () => {
      if (window.scrollY === 0) {
        // Always show the header when at the top of the page
        setShowHeader(true);
      } else if (scrollDirection === 'down') {
        setShowHeader(false);
      } else if (scrollDirection === 'up') {
        setShowHeader(true);
      }

      // Fade out after stopping scroll
      clearTimeout(window.hideHeaderTimeout);
      window.hideHeaderTimeout = setTimeout(() => {
        if (window.scrollY !== 0) {
          setShowHeader(false);
        }
      }, 2000);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleHeaderVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleHeaderVisibility);
    };
  }, [scrollDirection]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const closeDrawerOnClick = () => {
    setDrawerOpen(false);
  };

  const headerStyle = {
    fontFamily: "'Nunito', sans-serif", // Ensure correct syntax with quotes
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 1rem',
    backgroundColor: 'transparent',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    maxWidth: '100%',
    zIndex: '1000',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out, opacity 0.5s ease-in-out',
    transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
    opacity: showHeader ? '1' : '0',
  };

  const navContainerStyle = {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '1.25rem',
    textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)',
    display: isMobile ? 'none' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const mobileMenuIconStyle = {
    display: isMobile ? 'block' : 'none',
    color: '#f8f8f8',
    fontSize: '3rem',
  };

  const drawerListStyle = {
    fontFamily: "'Nunito', sans-serif",
    textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)',
    minWidth: '250px',
    color: '#f8f8f8',
  };

  const renderDrawerList = () => (
    <List style={drawerListStyle}>
      <ListItem button component={StyledLink} to="/" onClick={closeDrawerOnClick}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={StyledLink} to="/about" onClick={closeDrawerOnClick}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={StyledLink} to="/services" onClick={closeDrawerOnClick}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component={StyledLink} to="/blog" onClick={closeDrawerOnClick}>
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem button component={StyledLink} to="/consultation" onClick={closeDrawerOnClick}>
        <ListItemText primary="Free Consultation" />
      </ListItem>
    </List>
  );

  return (
    <header style={headerStyle}>
      <nav style={navContainerStyle}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/consultation">Free Consultation</StyledLink>
      </nav>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={mobileMenuIconStyle} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black background for drawer
            color: '#f8f8f8',
          },
        }}
      >
        {renderDrawerList()}
      </Drawer>
    </header>
  );
};

export default Header;

