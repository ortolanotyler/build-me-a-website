import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <h1 style={{
                fontFamily: 'League Spartan, sans-serif',
                fontSize: '5rem',
                fontWeight: 700,
                padding: '1rem',
                color: '#3a3a3a',
                zIndex: 4,
                lineHeight: '4.5rem',
                margin: '0',
                letterSpacing: '-0.2rem',
                position: 'relative',
                top: isVisible ? '0' : '-100px',
                transition: 'top 1s ease-in-out',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
                Building Bridges
            </h1>

            <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                padding: '1rem',
                fontSize: '3rem',
                fontWeight: 700,
                color: '#a0d2eb',
                margin: '1rem 0 1.5rem 0',
                zIndex: 4,
                position: 'relative',
                bottom: isVisible ? '0' : '-100px',
                transition: 'bottom 1s ease-in-out',
                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                in small business digital marketing
            </h2>
            <p style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '1rem',
                color: '#3a3a3a',
                letterSpacing: '0.1rem',
                marginBottom: '2rem',
                textTransform: 'uppercase',
                zIndex: 4,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out 1s',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}>
                ONTARIO WEBSITES AND SEO
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
                    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
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