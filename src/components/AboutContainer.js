import React from 'react';
import { styled } from '@mui/system';

// Import image
const AboutImage = `${process.env.PUBLIC_URL}/Images/about-image.jpg`;

// Styled container for the About section
const AboutContainer = styled('div')(({ theme }) => ({
    backgroundColor: '#bbd7ec',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '100vh',
    padding: '20px',
    marginBottom: '20px', // Add some margin to separate from the next section
    [theme.breakpoints.down('md')]: {
        padding: '10px',
    },
}));

// Main horizontal card for the About text
const AboutCard = styled('div')(({ theme }) => ({
    backgroundColor: '#f5f5f4',
    padding: '20px',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto 20px auto', // Auto margin for left and right centering, margin-bottom of 20px
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Nunito, sans-serif',
    textAlign: 'center', // Center the title and text
    [theme.breakpoints.down('md')]: {
        marginBottom: '10px',
    },
}));

// Container for the two cards below the main card
const CardsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

// Styled card for the image
const ImageCard = styled('div')(({ theme }) => ({
    backgroundColor: '#f5f5f4',
    padding: '20px',
    width: '48%',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: '10px',
    },
}));

// Styled image
const Image = styled('img')({
    width: '100%',
    borderRadius: '20px',
});

// Bullet points list
const BulletList = styled('ul')({
    listStyleType: 'disc',
    margin: '0 auto', // Center the list horizontally
    padding: '0', // Remove padding to align with center
    textAlign: 'center', // Center the text and bullet points
    width: 'fit-content', // Make the list width fit its content
});

const BulletListItem = styled('li')({
    textAlign: 'left', // Align text of the list item to the left within its centered container
});

// Styled card for the bullet points
const BulletPointsCard = styled('div')(({ theme }) => ({
    backgroundColor: '#f5f5f4',
    padding: '10px',
    width: '48%',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Nunito, sans-serif',
    textAlign: 'center', // Center the text in the bullet points card
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: '10px',
    },
}));

const About = () => {
    return (
        <AboutContainer>
            <AboutCard>
                <h2>About Us</h2>
                <p>
                    Welcome to our company! We are dedicated to providing top-notch web design, SEO, and digital marketing services. Our team of experts works tirelessly to ensure that our clients achieve their business goals and stand out in the digital landscape.
                </p>
            </AboutCard>
            <CardsContainer>
                <BulletPointsCard>
                    <h3>Why Choose Us?</h3>
                    <BulletList>
                        <BulletListItem>Experienced professionals</BulletListItem>
                        <BulletListItem>Customer-focused approach</BulletListItem>
                        <BulletListItem>Innovative solutions</BulletListItem>
                        <BulletListItem>Proven track record</BulletListItem>
                        <BulletListItem>Competitive pricing</BulletListItem>
                    </BulletList>
                </BulletPointsCard>
                <ImageCard>
                    <Image src={AboutImage} alt="About Us" />
                </ImageCard>
            </CardsContainer>
        </AboutContainer>
    );
};

export default About;
