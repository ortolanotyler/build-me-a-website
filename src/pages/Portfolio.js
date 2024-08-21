import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';

function PortfolioPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Portfolio - Build Me A Website | Our Work & Case Studies</title>
        <meta
          name="description"
          content="Explore our portfolio of web development and digital marketing projects. See how Build Me A Website has helped businesses achieve their online goals."
        />
      <meta name="keywords" content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics" />

        <link rel="canonical" href="https://buildmeawebsite.ca/portfolio" />
        <meta property="og:title" content="Portfolio - Build Me A Website | Our Work & Case Studies" />
        <meta
          property="og:description"
          content="Explore our portfolio of web development and digital marketing projects. See how Build Me A Website has helped businesses achieve their online goals."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-portfolio.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio",
            "url": "https://buildmeawebsite.ca/portfolio",
            "sameAs": [
              "https://www.facebook.com/buildmecanada",
              "https://www.twitter.com/buildmewebsites",
              "https://www.linkedin.com/company/buildmecanada"
            ],
            "description": "Explore our portfolio of web development and digital marketing projects. See how Build Me A Website has helped businesses achieve their online goals.",
            "about": {
              "@type": "Organization",
              "name": "Build Me A Website",
              "url": "https://buildmeawebsite.ca",
              "logo": "https://buildmeawebsite.ca/logo.png"
            }
          })}
        </script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-YYTCRX2PFK`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYTCRX2PFK');
          `}
        </script>
      </Helmet>

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Portfolio.jpg`} />
        </>
      )}
    </div>
  );
}

export default PortfolioPage;


