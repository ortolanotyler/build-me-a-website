import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';
import AboutPageMainContent from '../components/aboutPageMainContent';

function AboutPage() {
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
    <div className="App" style = {{paddingTop: '250px'}}>
      <Helmet>
        {/* Title Tag */}
        <title>About Us - Build Me A Website</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn more about Build Me A Website, a leading web development and digital marketing agency. Discover our mission, values, and team."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://buildmeawebsite.com/about" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Build Me A Website" />
        <meta
          property="og:description"
          content="Learn more about Build Me A Website, a leading web development and digital marketing agency. Discover our mission, values, and team."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-about.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Build Me A Website",
            "url": "https://buildmeawebsite.ca/",
            "logo": "https://buildmeawebsite.ca/logo.png",
            "sameAs": [
              "https://www.facebook.com/buildmecanada",
              "https://www.twitter.com/buildmewebsites",
              "https://www.linkedin.com/company/buildmecanada"
            ],
            "description": "Build Me A Website is a leading web development and digital marketing agency committed to delivering top-notch services.",
            "founder": {
              "@type": "BusinessEntity",
              "name": "BuildMe Digital Marketing"
            },
            "foundingDate": "2024",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "contact@buildmeawebsite.ca"
            }
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

      <AboutPageMainContent />


      {/* About Page Main Content */}
    </div>
  );
}

export default AboutPage;
