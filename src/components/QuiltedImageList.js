import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const imageListData = [
  {
    img: `${process.env.PUBLIC_URL}/Images/buildme-branding-1.png`,
    title: 'Image 1',
  },
  {
    img: `${process.env.PUBLIC_URL}/Images/buildme-branding-1.png`,
    title: 'Image 2',
  },
  {
    img: `${process.env.PUBLIC_URL}/Images/buildme-branding-1.png`,
    title: 'Image 3',
  },
  {
    img: `${process.env.PUBLIC_URL}/Images/buildme-branding-1.png`,
    title: 'Image 4',
  },
  // Add more images as needed
];

const QuiltedImageList = () => {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={121}>
      {imageListData.map((item, index) => (
        <ImageListItem key={index} cols={1} rows={1}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default QuiltedImageList;
