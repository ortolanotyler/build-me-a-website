import React, { useState } from 'react';

const Gallery = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

  const handleClick = (index) => {
    if (index === 0) return;
    const newPositions = [...positions];
    const heroIndex = newPositions.indexOf(0);
    newPositions[heroIndex] = newPositions[index];
    newPositions[index] = 0;
    setPositions(newPositions);
  };

  const images = [
    'https://images.unsplash.com/photo-1708247874023-f6d71a45113a?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1437751059337-ea72d4f73fcf?q=80&w=2322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515594515116-863345d8507c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517953377824-516f2dca803b?q=80&w=2378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <main
      style={{
        position: 'relative',
        maxWidth: '760px',
        maxHeight: '305px',
        margin: '1rem auto ',
        padding: '0',
        boxSizing: 'border-box',
      }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            transform:
              positions[index] === 0
                ? 'translate(0,0)'
                : positions[index] === 1
                ? 'translate(405px,0)'
                : positions[index] === 2
                ? 'translate(585px,0)'
                : positions[index] === 3
                ? 'translate(405px,155px)'
                : 'translate(585px,155px)',
            width: positions[index] === 0 ? '400px' : '175px',
            height: positions[index] === 0 ? '305px' : '150px',
            zIndex: positions[index] === 0 ? 10 : 1,
            position: 'absolute',
            overflow: 'hidden',
            transition: 'transform 0.9s, width 0.9s, height 0.9s',
            boxSizing: 'border-box',
            cursor: index !== 0 ? 'pointer' : 'default',
          }}
        >
          <img
            src={src}
            alt={`Gallery item ${index}`}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))}
    </main>
  );
};

export default Gallery;
