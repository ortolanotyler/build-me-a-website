import React from 'react';

const ComponentA = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headingWrapper}>
        <p style={styles.subHeading}>WHAT WE DO</p>
        <h1 style={styles.mainHeading}>OUR SERVICES & EXPERTISE</h1>
      </div>
      <div style={styles.servicesWrapper}>
        <div style={styles.serviceColumn}>
          <h2 style={styles.serviceTitle}>01</h2>
          <h3 style={styles.serviceName}>Branding</h3>
          <p style={styles.serviceDescription}>Empathic</p>
          <p style={styles.serviceDescription}>Enriching</p>
          <p style={styles.serviceDescription}>Dynamic</p>
          <p style={styles.serviceDescription}>Provocative</p>
        </div>
        <div style={styles.serviceColumn}>
          <h2 style={styles.serviceTitle}>02</h2>
          <h3 style={styles.serviceName}>UXD</h3>
          <p style={styles.serviceDescription}>Simple</p>
          <p style={styles.serviceDescription}>Perceptive</p>
          <p style={styles.serviceDescription}>Intuitive</p>
          <p style={styles.serviceDescription}>User-first</p>
        </div>
        <div style={styles.serviceColumn}>
          <h2 style={styles.serviceTitle}>03</h2>
          <h3 style={styles.serviceName}>Web Dev</h3>
          <p style={styles.serviceDescription}>Narrative</p>
          <p style={styles.serviceDescription}>Engaging</p>
          <p style={styles.serviceDescription}>Forward-thinking</p>
          <p style={styles.serviceDescription}>Distinctive</p>
        </div>
        <div style={styles.serviceColumn}>
          <h2 style={styles.serviceTitle}>04</h2>
          <h3 style={styles.serviceName}>XR/VR/AR</h3>
          <p style={styles.serviceDescription}>Frameless</p>
          <p style={styles.serviceDescription}>Immersive</p>
          <p style={styles.serviceDescription}>Pioneering</p>
          <p style={styles.serviceDescription}>Impactful</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#3a3a3a',
    fontFamily : 'Nunito, sans-serif',
    fontWeight: '300',
    color: '#bbd7ec',
    textAlign: 'center',
    padding: '2rem',
  },
  headingWrapper: {
    marginBottom: '3rem',
  },
  subHeading: {
    fontFamily : 'Nunito, sans-serif',

    fontSize: '1rem',
    fontWeight: 'bold',
    letterSpacing: '0.1rem',
    marginBottom: '1rem',
  },
  mainHeading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
  },
  servicesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  serviceColumn: {
    flex: '1 1 20%',
    minWidth: '220px',
    margin: '1rem 0',
  },
  serviceTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  serviceName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  serviceDescription: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
};

export default ComponentA;