import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);
    const [isPressed, setIsPressed] = useState(false);
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

    const textColor = isSmallScreen ? '#f4e1d2' : '#f4e1d2';
    const headingFontSize = isSmallScreen ? '2.5rem' : '4.5rem';

    return (
        <div style={styles.heroContainer}>
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                style={styles.videoBackground}
            >
                <source src={`${process.env.PUBLIC_URL}/Images/background1.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Laptop image slides in from the left */}
            <img
                src={`${process.env.PUBLIC_URL}/Images/laptop.png`}
                alt="Laptop Image"
                style={{
                    ...styles.image,
                    left: isVisible && scrollY < 100 ? '-150px' : '-100%',
                    top: '30%',
                    maxWidth: isSmallScreen ? '450px': '650px',
                    minWidth: '250px',
                }}
            />

            {/* iPhone image slides in from the right and rotates */}
            <img
                src={`${process.env.PUBLIC_URL}/Images/iphone.png`}
                alt="iPhone Image"
                style={{
                    ...styles.image,
                    right: isVisible && scrollY < 100 ? '-150px' : '-100%',
                    top: '50%',
                    maxWidth: isSmallScreen ? '400px' : '650px',
                    minWidth: '200px',
                    transform: 'rotate(-90deg)',
                }}
            />

            <h2 style={{
                ...styles.heading,
                fontSize: headingFontSize,
                opacity: isVisible ? 1 : 0, // Fade-in effect controlled by opacity
            }}>
                Building bridges <br /> in small business marketing
            </h2>

            <p style={{
                ...styles.subtitle,
                marginTop: '10px', // Reduce the space between heading and subtitle
                color: textColor,
                opacity: isVisible ? 1 : 0,
            }}>
                Websites and SEO
            </p>

            <button
                style={{
                    ...styles.button,
                    backgroundColor: isPressed ? '#f4e1d2' : '#f4e1d2',
                    boxShadow: isPressed ? '0px 1px 2px rgba(0, 0, 0, 0.1)' : '0px 2px 3px rgba(0, 0, 0, 0.25)',
                    transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
                    opacity: isVisible ? 1 : 0, // Fade-in effect for the button
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onClick={() => navigate('/consultation')}
            >
                Free Consultation
            </button>
        </div>
    );
};

const styles = {
    heroContainer: {
        fontFamily: 'Lora, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        paddingTop: '125px', // Adjust padding for the hero section
        paddingLeft: '3rem',
        paddingRight: '3rem',
        backgroundColor: '#fcfaf4',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden', // Prevents scrollbars
    },
    videoBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensure the video covers the entire hero section
        zIndex: 0, // Ensure the video is behind all other elements
    },
    image: {
        position: 'absolute',
        height: 'auto',
        zIndex: 1,
        transition: 'all 1s ease-in-out',
        maxHeight: '90vh', // Limit the height so it doesn't overflow the container
    },
    heading: {
        fontFamily: 'Lora, sans-serif',
        fontWeight: 'normal',
        padding: '1rem 1rem', // Removed large padding, added small padding for responsiveness
        marginBottom: '0rem', //
        color: '#a0d2eb',
        zIndex: 2,
        transition: 'opacity 1s ease-in-out', // Transition for fade-in effect
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        lineHeight: '1.2', // Adjust line-height for better spacing
    },
    subtitle: {
        fontFamily: 'Nunito, sans-serif',
        fontSize: '15px',
        letterSpacing: '0.01rem',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        padding: '0 1rem',
        zIndex: 2,
        opacity: 1,
        transition: 'opacity 1s ease-in-out 1s, color 0.3s ease-in-out', // Delayed fade-in for subtitle
    },
    button: {
        fontFamily: 'Lora, sans-serif',
        fontSize: '1rem',
        fontWeight: '300',
        color: '#3a3a3a',
        backgroundColor: '#fcfad4',
        padding: '0.75rem 1rem',
        borderRadius: '50px',
        border: 'none',
        zIndex: 2,
        marginTop: '1rem', // Bring button closer to the subtitle
        transition: 'opacity 1.5s ease-in-out 2s', // Delayed fade-in for the button
        cursor: 'pointer',
    },
};

export default NewHero;