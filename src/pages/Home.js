import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';
import HomeServices from '../components/homePageServices';

function HomePage() {
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
    <div className="App" style={{ backgroundColor: '#f8f8f8', padding: '0px' }}>
      <Helmet>
        {/* Title Tag */}
        <title>Build Me A Website - Top Web Development & Digital Marketing Agency</title>
        
        {/* Meta Description */}
        <meta
          name="description"
          content="Build Me A Website offers cutting-edge web development and digital marketing services. Boost your online presence alongside a team that cares about your success."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://buildmeawebsite.ca/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Build Me A Website - Top Web Development & Digital Marketing Agency" />
        <meta
          property="og:description"
          content="Build Me A Website offers cutting-edge web development and digital marketing services. Boost your online presence alongside a team that cares about your success."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-home.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Build Me A Website",
            "url": "https://buildmeawebsite.ca/",
            "sameAs": [
              "https://www.facebook.com/buildmecanada",
              "https://www.twitter.com/buildmewebsites",
              "https://www.linkedin.com/company/buildmecanada"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://buildmeawebsite.ca/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
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
            },
            "description": "Build Me A Website offers cutting-edge web development and digital marketing services.",
            "image": "https://buildmeawebsite.ca/og-image-home.jpg"
          })}
        </script>

        {/* Google Analytics */}
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

      {/* Parallax Section with Images */}
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/14.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/15.jpg`} />
        </>
      )}
      
      {/* Home Services Section */}
      <HomeServices />
    </div>
  );
}

export default HomePage;
