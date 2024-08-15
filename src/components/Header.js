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

const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const StyledLink = styledComponents(Link)`
  text-decoration: none;
  color: #3A3A3A;
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f8f8f8;
  }
`;

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
    padding: '25px',
    backgroundColor: '#bbd7ec',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    maxWidth: '100vw',
    zIndex: '1000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };

  const logoContainerStyle = {
    flex: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const logoStyle = {
    width: isMobile ? '180px' : '250px',
    height: 'auto',
  };

  const navContainerStyle = {
    display: isMobile ? 'none' : 'flex',
    justifyContent: 'flex-end',
    flex: '1',
    gap: '1rem',
  };

  const mobileMenuIconStyle = {
    display: isMobile ? 'block' : 'none',
  };

  const drawerListStyle = {
    width: '250px',
    color: '#3A3A3A',
  };

  const renderDrawerList = () => (
    <List style={drawerListStyle}>
      <ListItem button component={StyledLink} to="/" onClick={closeDrawerOnClick}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={StyledLink} to="/about" onClick={closeDrawerOnClick}>
        <ListItemText primary="About" />
      </ListItem>
      {/* Only show individual service links on smaller screens */}
      {isMobile && (
        <>
          <ListItem button component={StyledLink} to="/services" onClick={closeDrawerOnClick}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component={StyledLink} to="/contact" onClick={closeDrawerOnClick}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={StyledLink} to="/web-development" onClick={closeDrawerOnClick}>
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem button component={StyledLink} to="/search-engine-optimization" onClick={closeDrawerOnClick}>
            <ListItemText primary="SEO" />
          </ListItem>
          <ListItem button component={StyledLink} to="/web-design" onClick={closeDrawerOnClick}>
            <ListItemText primary="Web Design" />
          </ListItem>
          <ListItem button component={StyledLink} to="/web-hosting" onClick={closeDrawerOnClick}>
            <ListItemText primary="Web Hosting" />
          </ListItem>
          <ListItem button component={StyledLink} to="/search-engine-marketing" onClick={closeDrawerOnClick}>
            <ListItemText primary="Search Engine Marketing" />
          </ListItem>
          <ListItem button component={StyledLink} to="/dns-migration" onClick={closeDrawerOnClick}>
            <ListItemText primary="DNS Migration" />
          </ListItem>
          <ListItem button component={StyledLink} to="/consultation" onClick={closeDrawerOnClick}>
            <ListItemText primary="Free Consultation" />
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <StyledLink to="/">
          <img src={logo} alt="Logo" style={logoStyle} />
        </StyledLink>
      </div>
      <nav style={navContainerStyle}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
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
            backgroundColor: '#bbd7ec',
            color: '#3A3A3A',
          },
        }}
      >
        {renderDrawerList()}
      </Drawer>
    </header>
  );
};

export default Header;
