import React from 'react';

const Sitemap = () => {
  const pages = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About Us' },
    { url: '/services', title: 'Services' },
    { url: '/blog', title: 'Blog' },
    { url: '/consultation', title: 'Consultation' },
    // Add other pages as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
      <h1>Sitemap</h1>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.url}>{page.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
