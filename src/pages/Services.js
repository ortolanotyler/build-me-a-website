import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';
import ServicesPageMain from '../components/servicesPageMainContent';

function ServicesPage() {
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
        <title>Services - Build Me A Website | Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Discover the services offered by Build Me A Website, including web development, SEO optimization, digital marketing strategies, and more."
        />
      <meta name="keywords" content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics" />

        <link rel="canonical" href="https://buildmeawebsite.ca/services" />
        <meta property="og:title" content="Services - Build Me A Website | Web Development & Digital Marketing" />
        <meta
          property="og:description"
          content="Discover the services offered by Build Me A Website, including web development, SEO optimization, digital marketing strategies, and more."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-services.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development & Digital Marketing",
            "provider": {
              "@type": "Organization",
              "name": "Build Me A Website",
              "url": "https://buildmeawebsite.ca/",
              "logo": "https://buildmeawebsite.ca/logo.png",
              "sameAs": [
                "https://www.facebook.com/buildmecanada",
                "https://www.twitter.com/buildmewebsites",
                "https://www.linkedin.com/company/buildmecanada"
              ]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Canada"
            },
            "description": "Build Me A Website provides expert web development and digital marketing services tailored to your business needs."
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

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Services.jpg`} />
        </>
      )}
      <ServicesPageMain />
    </div>
  );
}

export default ServicesPage;
