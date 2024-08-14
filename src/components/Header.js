import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const linkStyle = {
  textDecoration: 'none',
  color: '#3A3A3A', // Text color
  fontFamily: 'Nunito, sans-serif', // Font family
  fontSize: '1.35rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  padding: '8px', // Removed padding from the left and right to prevent overflow
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px', // Removed extra padding on the sides
    backgroundColor: '#bbd7ec', // Background color to match the page
    position: 'fixed', // Fix the header to the top of the screen
    top: '0',
    left: '0',
    right: '0',
    maxWidth: '100vw', // Ensure the header spans the full width of the screen
    zIndex: '1000', // Ensure the header stays on top of other content
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
    overflow: 'hidden', // Prevents overflow beyond the viewport
  };

  const logoContainerStyle = {
    flex: '0', // Only take up as much space as needed for the logo
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const logoStyle = {
    width: isMobile ? '180px' : '250px', // Adjust logo width for mobile
    height: 'auto', // Maintain aspect ratio
    cursor: 'pointer',
  };

  const navContainerStyle = {
    display: isMobile ? 'none' : 'flex', // Hide navigation links on mobile screens
    justifyContent: 'flex-end',
    flex: '1',
    gap: '1rem', // Add gap between navigation links
  };

  const mobileMenuIconStyle = {
    display: isMobile ? 'block' : 'none', // Show hamburger menu on mobile
  };

  const drawerListStyle = {
    width: '250px',
    color: '#3A3A3A', // Grey text color
  };

  const renderDrawerList = () => (
    <List style={drawerListStyle}>
      <ListItem button component={Link} to="/" onClick={closeDrawerOnClick}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={closeDrawerOnClick}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/services" onClick={closeDrawerOnClick}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={closeDrawerOnClick}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/consultation" onClick={closeDrawerOnClick}>
        <ListItemText primary="Free Consultation" />
      </ListItem>
    </List>
  );

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <nav style={navContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/consultation" style={linkStyle}>Free Consultation</Link>
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
            backgroundColor: '#bbd7ec', // Light blue background
            color: '#3A3A3A', // Grey text color
          },
        }}
      >
        {renderDrawerList()}
      </Drawer>
    </header>
  );
};

export default Header;
