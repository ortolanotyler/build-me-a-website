import React from 'react';

const avatars = [
  {
    alt: 'React',
    src: 'https://cdn.svgporn.com/logos/react.svg',
  },
 
  {
    alt: 'Docker',
    src: 'https://cdn.svgporn.com/logos/docker.svg',
  },
  {
    alt: 'SQL',
    src: 'https://cdn.svgporn.com/logos/mysql.svg',
  },
  {
    alt: 'Jasmine',
    src: 'https://cdn.svgporn.com/logos/jasmine.svg',
  },
  {
    alt: 'Redux',
    src: 'https://cdn.svgporn.com/logos/redux.svg',
  },
  {
    alt: 'Express',
    src: 'https://cdn.svgporn.com/logos/express.svg',
  },
  {
    alt: 'Bootstrap',
    src: 'https://cdn.svgporn.com/logos/bootstrap.svg',
  },
  {
    alt: 'Node.js',
    src: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
  },
  {
    alt: 'Git',
    src: 'https://cdn.svgporn.com/logos/git-icon.svg',
  },
];

const avatarStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px', 
  height: '80px', 
  borderRadius: '20%',
  overflow: 'hidden',
  boxShadow: 'inset 0 0 1px 1px rgba(0, 0, 0, 0.015)',
};

const imgStyle = {
  height: '80%',
  width: '80%',
  zIndex: 2,
  filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.12))',
};

const backgroundStyle = {
  position: 'absolute',
  zIndex: 1,
  pointerEvents: 'none',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transform: 'scale(2)',
  filter: 'blur(13px) opacity(0.2)',
};

const containerStyle = {
  display: 'grid',
  padding: '5rem 0',
  gridTemplateColumns: 'repeat(3, auto)', 
  gridTemplateRows: 'repeat(3, auto)',    
  gridGap: '10px', 
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '40vh', 
};

const AvatarGrid = () => {
  return (
    <div style={containerStyle}>
      {avatars.map((avatar, index) => (
        <div style={avatarStyle} key={index}>
          <img
            alt=""
            aria-hidden
            src={avatar.src}
            style={backgroundStyle}
          />
          <img
            alt={avatar.alt}
            src={avatar.src}
            width="100"
            height="100"
            style={imgStyle}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGrid;
