import React from 'react';

const PortfolioSlider = () => {
  const galleryContainerStyle = {
    display: 'flex',
    gap: '1vw',
    maxWidth: '1200px',
    minWidth: '1000px',
    height: '100vh',
    transform: 'translate(5%, -25%) rotate(-6deg) rotateX(10deg) rotateY(20deg)',
  };

  const galleryLineStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1vw',
    height: 'fit-content',
    animation: 'slide 30s linear infinite',
  };

  const reverseAnimationStyle = {
    ...galleryLineStyle,
    animationDirection: 'reverse',
  };

  const imageStyle = {
    flex: '1 1 auto',
    width: '100%',
    height: '200px',  // Set a fixed height for all images
    objectFit: 'cover',  // Maintain aspect ratio while covering the area
  };

  const galleryLineImages = [
    [
      `${process.env.PUBLIC_URL}/Images/1.png`,
      `${process.env.PUBLIC_URL}/Images/2.png`,
      `${process.env.PUBLIC_URL}/Images/3.png`,
      `${process.env.PUBLIC_URL}/Images/4.png`,
      `${process.env.PUBLIC_URL}/Images/5.png`,
      `${process.env.PUBLIC_URL}/Images/6.png`,
    ],
    [
      `${process.env.PUBLIC_URL}/Images/2.png`,
      `${process.env.PUBLIC_URL}/Images/3.png`,
      `${process.env.PUBLIC_URL}/Images/1.png`,
      `${process.env.PUBLIC_URL}/Images/6.png`,
      `${process.env.PUBLIC_URL}/Images/5.png`,
      `${process.env.PUBLIC_URL}/Images/4.png`,
    ],
    [
      `${process.env.PUBLIC_URL}/Images/1.png`,
      `${process.env.PUBLIC_URL}/Images/5.png`,
      `${process.env.PUBLIC_URL}/Images/4.png`,
      `${process.env.PUBLIC_URL}/Images/3.png`,
      `${process.env.PUBLIC_URL}/Images/2.png`,
      `${process.env.PUBLIC_URL}/Images/6.png`,
    ],
  ];

  const keyframesStyle = `
    @keyframes slide {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
  `;

  return (
    <>
      <style>
        {keyframesStyle}
      </style>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: '50px', // Adding padding around the gallery to center it nicely
          width: '100vw',
          height: '50vh', // Adjusted height to take full viewport height
          fontFamily: 'Poppins, sans-serif',
          overflow: 'hidden',
          perspective: 'clamp(400px, 100vw, 1000px)',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        <div className="gallery" style={galleryContainerStyle}>
          {galleryLineImages.map((images, index) => (
            <div
              key={index}
              className="gallery_line"
              style={index % 2 === 0 ? galleryLineStyle : reverseAnimationStyle}
            >
              {images.concat(images).map((src, imgIndex) => (
                <img key={imgIndex} src={src} alt="" style={imageStyle} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;
