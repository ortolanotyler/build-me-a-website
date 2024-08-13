import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';

const logo = `${process.env.PUBLIC_URL}/Images/logo.png`;

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#bbd7ec', // Dropdown menu background color
    color: '#3A3A3A',
    fontSize: '1.2rem', // Font size for dropdown menu
    fontFamily: 'Nunito, sans-serif', // Font family for dropdown text
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Add text shadow
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'Nunito, sans-serif', // Font family for each menu item
  '& a': {
    textDecoration: 'none',
    color: '#3A3A3A', // Text color for links
    width: '100%',
    display: 'block',
    padding: '8px 16px',
  },
});

const linkStyle = {
  textDecoration: 'none',
  color: '#3A3A3A', // Text color
  fontFamily: 'Nunito, sans-serif', // Font family
  fontSize: '1.25rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px', // Add some padding to the links
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [anchorEl, setAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setServicesAnchorEl(null);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and navigation
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#bbd7ec', // Background color to match the page
    position: 'fixed', // Fix the header to the top of the screen
    top: '0',
    left: '0',
    width: '100%', // Ensure the header spans the full width of the screen
    zIndex: '1000', // Ensure the header stays on top of other content
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
  };

  const logoContainerStyle = {
    flex: '0', // Only take up as much space as needed for the logo
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-start', // Center logo on mobile, left-align on larger screens
    alignItems: 'center',
  };

  const logoStyle = {
    width: isMobile ? '125px' : '250px', // Adjust logo width for mobile
    height: 'auto', // Maintain aspect ratio
    cursor: 'pointer',
  };

  const navContainerStyle = {
    display: 'flex',
    marginRight: '3rem', // Add some margin to the left for navigation links
    justifyContent: 'right', // Center navigation links
    flex: '1', // Take up remaining space
  };

  const navLinksWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1, // Allow this section to grow and take up space
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle} onClick={handleLogoClick}>
        <img src={logo} alt="Logo" style={logoStyle} />
        {isMobile && <ArrowDropDownIcon />}
      </div>
      <div style={navLinksWrapperStyle}>
        {!isMobile && (
          <nav style={navContainerStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <div onClick={handleServicesClick} style={linkStyle}>
              Services <ArrowDropDownIcon />
            </div>
            <StyledMenu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/web-development">Web Development</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/ui-ux-design">UI/UX Design</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/seo-optimization">SEO Optimization</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/content-creation">Content Creation</Link>
              </StyledMenuItem>
            </StyledMenu>
            <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </nav>
        )}
        {isMobile && (
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <StyledMenuItem onClick={handleMenuClose}>
              <Link to="/">Home</Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleServicesClick}>
              Services <ArrowDropDownIcon />
            </StyledMenuItem>
            <StyledMenu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/web-development">Web Development</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/ui-ux-design">UI/UX Design</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/seo-optimization">SEO Optimization</Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <Link to="/content-creation">Content Creation</Link>
              </StyledMenuItem>
            </StyledMenu>
            <StyledMenuItem onClick={handleMenuClose}>
              <Link to="/portfolio">Portfolio</Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleMenuClose}>
              <Link to="/contact">Contact</Link>
            </StyledMenuItem>
          </StyledMenu>
        )}
      </div>
    </header>
  );
};

export default Header;


