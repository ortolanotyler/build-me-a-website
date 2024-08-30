import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styledComponents from 'styled-components';

const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const StyledLink = styledComponents(Link)`
  text-decoration: none;
  color: #3a3a3a;
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem; /* Increased font size */
  font-weight: 100;
  transition: color 0.3s ease-in-out;
  cursor: pointer; /* Ensure the hand cursor is always visible on hover */

  &:hover {
    color: #a0d2eb; /* Pastel blue */
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
        setLastScrollY(window.scrollY);
        return;
      }

      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const closeDrawerOnClick = () => {
    setDrawerOpen(false);
  };

  const headerStyle = {
    fontFamily: "Merriweather, serif", // Apply Merriweather font
    display: 'flex',
    justifyContent: 'space-between', // Adjusted to add space for logo
    alignItems: 'center',
    padding: '1.25rem', // Increased padding for bigger size
    marginBottom: '2rem',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2.5px)',
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
    boxShadow: 'none', // Removed box shadow
  };

  const navContainerStyle = {
    marginRight: '1rem',
    fontFamily: "Merriweather, serif", // Apply Merriweather font
    fontSize: '1.25rem', // Increased font size
    textShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    display: isMobile ? 'none' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  };

  const mobileMenuIconStyle = {
    display: isMobile ? 'block' : 'none',
    color: '#3a3a3a',
    fontSize: '3rem',
  };

  const drawerListStyle = {
    fontFamily: "Merriweather, serif", // Apply Merriweather font
    textShadow: '1px 2px 2px rgba(0, 0, 0, 0.1)',
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
      <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <img src={logo} alt="Logo" style={{ height: '80px' }} /> {/* Adjust the height as needed */}
      </Link>
      <nav style={navContainerStyle}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/consultation">Free Consultation</StyledLink>
      </nav>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={mobileMenuIconStyle}
        onClick={toggleDrawer(true)}
        onMouseEnter={(e) => e.currentTarget.style.color = '#a0d2eb'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#3a3a3a'}
        style={{ cursor: 'pointer' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(20px)',
            color: 'transparent',
          },
        }}
      >
        {renderDrawerList()}
      </Drawer>
    </header>
  );
};

export default Header;