import React from 'react';

const ProfileCard = () => {
  const cardStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    overflowY: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.2)',
    transition: '0.3s',
    maxHeight: '300px',
  };

  const cardHeaderStyle = {
    position: 'relative',
    display: 'flex',
    height: '200px',
    flexShrink: 0,
    width: '100%',
    transition: '0.3s',
  };

  const cardCoverStyle = {
    width: '100%',
    height: '160px',
    position: 'absolute',
    top: '-20%',
    left: 0,
    willChange: 'top',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(30px)',
    transform: 'scale(1.2)',
    transition: '0.5s',
    backgroundImage: `url(${process.env.PUBLIC_URL}/Images/profilebackground.png)`,
};

  const cardAvatarStyle = {
    width: '100px',
    height: '100px',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    objectPosition: 'center',
    objectFit: 'cover',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-64px)',
  };

  const cardFullnameStyle = {
    position: 'absolute',
    bottom: 0,
    margin: '10px auto',
    fontSize: '26px',
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transform: 'translateY(-10px) translateX(-50%)',
    left: '50%',
  };

  const cardJobtitleStyle = {
    position: 'absolute',
    bottom: 0,
    fontSize: '11px',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    opacity: 0.5,
    textTransform: 'uppercase',
    letterSpacing: '1.25px',
    margin: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-7px)',
  };

  const cardMainStyle = {
    position: 'relative',
    flex: 1,
    display: 'flex',
    paddingTop: '1px',
    flexDirection: 'column',
  };



  const cardContentStyle = {
    padding: '20px',
  };

  const cardDescStyle = {
    lineHeight: 1.6,
    color: '#636b6f',
    fontSize: '14px',
    margin: 0,
    fontWeight: 400,
  };

  const cardSocialStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    marginBottom: '20px',
  };

  const cardSocialIconStyle = {
    fill: 'rgb(165, 181, 206)',
    width: '20px',
    display: 'block',
    transition: '0.3s',
  };

  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <div style={cardCoverStyle}></div>
        <img
          style={cardAvatarStyle}
          src={`${process.env.PUBLIC_URL}/Images/linkedin.jpeg`}
          alt="avatar"
        />
        <h1 style={cardFullnameStyle}>Tyler</h1>
        <h2 style={cardJobtitleStyle}>Founder</h2>
      </div>
      <div style={cardMainStyle}>
        <div style={{ display: 'block' }}>
          <div style={cardContentStyle}>
            <p style={cardDescStyle}>
              I live in Canada, I am married (see tuxedo), and I have two cats. I like to play golf and I am considering getting another cat.
            </p>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
