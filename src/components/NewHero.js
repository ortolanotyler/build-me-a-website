import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 900);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textColor = isSmallScreen ? '#f4e1d2' : '#3a3a3a';
    const headingFontSize = isSmallScreen ? '4rem' : '5rem';  // Adjust font size based on screen size

    return (
        <div style={{
            fontFamily: 'Nunito, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100vh',
            position: 'relative',
            backgroundColor: '#fcfaf4',
            padding: '2rem',  // Added padding for consistent spacing on smaller screens
            boxSizing: 'border-box'
        }}>
            <img
                src={`${process.env.PUBLIC_URL}/Images/laptop.png`}
                alt="Laptop Image"
                style={{
                    position: 'absolute',
                    top: 350,
                    left: isVisible && scrollY < 100 ? '-150px' : '-100%', // Slide in from the left, slide out to the left on scroll
                    maxWidth: '550px',
                    height: 'auto',
                    zIndex: 1,
                    transition: 'left 1s ease-in-out',
                }}
            />
            <img
                src={`${process.env.PUBLIC_URL}/Images/iphone.png`}
                alt="iPhone Image"
                style={{
                    position: 'absolute',
                    top: '35%',
                    right: isVisible && scrollY < 100 ? '-170px' : '-100%', // Slide in from the right, slide out to the right on scroll
                    transform: 'translateY(-50%) rotate(-90deg)',
                    maxWidth: '500px',
                    height: 'auto',
                    zIndex: 1,
                    transition: 'right 1s ease-in-out',
                }}
            />

            <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                padding: '2rem 0rem',
                paddingBottom: '0.25rem',
                fontSize: headingFontSize,  // Use dynamic font size
                fontWeight: 600,
                color: '#a0d2eb',
                margin: '0 0 1.5rem 0',  // Consistent margin and padding
                zIndex: 4,
                transition: 'transform 1s ease-in-out, color 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
                Building bridges in small business marketing
            </h2>

            <p style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '1rem',
                color: textColor, // Change color based on screen size
                letterSpacing: '0.1rem',
                marginBottom: '2rem',  // Consistent margin bottom
                padding: '0 1rem',  // Added padding for better readability on small screens
                textTransform: 'uppercase',
                zIndex: 4,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out 1s, color 0.3s ease-in-out',
                textShadow: 'none',
            }}>
                WEBSITES AND SEO
            </p>

            <button
                style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#3a3a3a',
                    backgroundColor: '#bbd7ec',
                    padding: '0.75rem 2rem',
                    borderRadius: '25px',
                    border: 'none',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.3s ease, opacity 1s ease-in-out 1s',
                    zIndex: 4,
                    opacity: isVisible ? 1 : 0,
                    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
                    marginTop: '1.5rem'  // Added margin-top for consistency
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f4e1d2'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#bbd7ec'}
                onClick={() => navigate('/consultation')}
            >
                Free Consultation
            </button>
        </div>
    );
};

export default NewHero;