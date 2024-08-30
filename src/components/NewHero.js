import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NewHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setIsVisible(true);

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textColor = isSmallScreen ? '#f4e1d2' : '#3a3a3a';
    const hoverColor = '#f4e1d2'; // Beige color

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
            backgroundColor: '#fcfaf4'
        }}>
            <img
                src={`${process.env.PUBLIC_URL}/Images/laptop.png`}
                alt="Laptop Image"
                style={{
                    position: 'absolute',
                    top: 350,
                    left: isVisible ? '-150px' : '-100%',
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
                    right: isVisible ? '-170px' : '-100%',
                    transform: 'translateY(-50%) rotate(-90deg)',
                    maxWidth: '500px',
                    height: 'auto',
                    zIndex: 1,
                    transition: 'right 1s ease-in-out',
                }}
            />
            <h1 style={{
                fontFamily: 'League Spartan, sans-serif',
                fontSize: '5rem',
                fontWeight: 700,
                color: textColor, // Dynamic text color
                zIndex: 4,
                lineHeight: '4.5rem',
                margin: '0',
                letterSpacing: '-0.2rem',
                position: 'relative',
                top: isVisible ? '0' : '-100px',
                transition: 'top 1s ease-in-out',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' // Text shadow on small screens
            }}>
                Building Bridges
            </h1>

            <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '3rem',
                fontWeight: 700,
                color: '#a0d2eb',
                margin: '1rem 0 1.5rem 0',
                zIndex: 4,
                position: 'relative',
                bottom: isVisible ? '0' : '-100px',
                transition: 'bottom 1s ease-in-out',
                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)' // Text shadow on small screens
            }}>
                in small business digital marketing
            </h2>
            <p style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '1rem',
                color: textColor, // Dynamic text color
                letterSpacing: '0.1rem',
                marginBottom: '2rem',
                textTransform: 'uppercase',
                zIndex: 4,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out 1s',
                textShadow: isSmallScreen ? '1px 1px 3px rgba(0, 0, 0, 0.3)' : 'none', // Text shadow on small screens
            }}>
                ONTARIO WEBSITES AND SEO
            </p>
            <button
                style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#3a3a3a',
                    backgroundColor: '#bbd7ec', // Blue color
                    padding: '0.75rem 2rem',
                    borderRadius: '25px',
                    border: 'none',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.3s ease, opacity 1s ease-in-out 1s',
                    zIndex: 4,
                    opacity: isVisible ? 1 : 0,
                    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor} // Change to beige on hover
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#bbd7ec'} // Revert to blue on hover out
                onClick={() => navigate('/consultation')}
            >
                Free Consultation
            </button>
        </div>
    );
};

export default NewHero;