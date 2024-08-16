import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styledComponents from 'styled-components';

const StyledLink = styledComponents(Link)`
  text-decoration: none;
  color: #f8f8f8;
      font-family: 'Nunito, sans-serif', 
  font-size: 1rem;
  font-weight: 100;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #bbd7ec;
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const closeDrawerOnClick = () => {
    setDrawerOpen(false);
  };

  const headerStyle = {
    fontFamily: 'League Spartan, sans-serif',
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
  };

  const navContainerStyle = {
    fontFamily: 'League Spartan, sans-serif',
    fontSize: '1.5rem',
    textShadow : '2px 4px 2px rgba(0, 0, 0, 0.1)',
    display: isMobile ? 'none' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const mobileMenuIconStyle = {
    display: isMobile ? 'block' : 'none',
    color: '#f8f8f8',
    fontSize: '2rem',
  };

  const drawerListStyle = {
    fontFamily: 'League Spartan, sans-serif',

    width: '250px',
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
      <ListItem button component={StyledLink} to="/portfolio" onClick={closeDrawerOnClick}>
        <ListItemText primary="Portfolio" />
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
        <StyledLink to="/portfolio">Portfolio</StyledLink>
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background for drawer
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
