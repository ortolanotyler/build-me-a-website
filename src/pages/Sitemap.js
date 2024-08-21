import React from 'react';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Sitemap - Build Me A Website</title>
        <meta
          name="description"
          content="Explore the sitemap of Build Me A Website to navigate through our services, blog, consultation, and more."
        />
        <meta name="keywords" content="sitemap, web development, website design, services, blog, consultation, Build Me A Website" />
        <link rel="canonical" href="https://buildmeawebsite.ca/sitemap" />
        <meta property="og:title" content="Sitemap - Build Me A Website" />
        <meta
          property="og:description"
          content="Explore the sitemap of Build Me A Website to navigate through our services, blog, consultation, and more."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/sitemap" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-sitemap.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sitemap",
            "description": "Explore the sitemap of Build Me A Website to navigate through our services, blog, consultation, and more.",
            "url": "https://buildmeawebsite.ca/sitemap",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": pages.map((page, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": page.title,
                "item": `https://buildmeawebsite.ca${page.url}`
              }))
            },
            "sameAs": [
              "https://www.facebook.com/buildmecanada",
              "https://www.twitter.com/buildmewebsites",
              "https://www.linkedin.com/company/buildmecanada"
            ],
            "author": {
              "@type": "Organization",
              "name": "Build Me A Website"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Build Me A Website",
              "logo": {
                "@type": "ImageObject",
                "url": "https://buildmeawebsite.ca/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
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


