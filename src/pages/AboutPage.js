import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import FAQs from '../components/FAQ';
import SocialMediaBanner from '../components/SocialIcons';
import ProjectCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';

const PageContainer = styled('div')(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  backgroundColor: '#F4E1D2',
  padding: '15rem 7.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '60vh',
  [theme.breakpoints.down('md')]: {
    padding: '15rem 2rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '15rem 2rem',
  },
}));



const ProjectCardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '600px',

  width: '100%',
});

const AboutPage = () => {
  return (
    <PageContainer>
     
     <Grid container spacing={1} justifyContent="center" style={{ marginTop: '20px' }}>
     <ProjectCardContainer>
        <ProjectCard />
      </ProjectCardContainer>
        <Grid item xs={12} md={6}>
            
          <AboutCard />
        </Grid>

        <Grid item xs={12} md={6}>
          <FAQs />
        </Grid>
      </Grid>
     

    
        
        <SocialMediaBanner />
        
    

    </PageContainer>
  );
};

export default AboutPage;
