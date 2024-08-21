import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';
import ContactForm from '../components/ContactForm';

function ConsultationPage() {
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
        <title>Free Consultation - Build Me A Website | Get Expert Advice</title>
        <meta
          name="description"
          content="Book a free consultation with Build Me A Website to discuss your web development and digital marketing needs. Get expert advice tailored to your business."
        />
      <meta name="keywords" content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics" />

        <link rel="canonical" href="https://buildmeawebsite.ca/consultation" />
        <meta property="og:title" content="Free Consultation - Build Me A Website | Get Expert Advice" />
        <meta
          property="og:description"
          content="Book a free consultation with Build Me A Website to discuss your web development and digital marketing needs. Get expert advice tailored to your business."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/consultation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-consultation.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Consultation",
            "name": "Free Consultation",
            "description": "Book a free consultation with Build Me A Website to discuss your web development and digital marketing needs.",
            "url": "https://buildmeawebsite.ca/consultation",
            "sameAs": [
              "https://www.facebook.com/buildmecanada",
              "https://www.twitter.com/buildmewebsites",
              "https://www.linkedin.com/company/buildmecanada"
            ],
            "provider": {
              "@type": "Organization",
              "name": "Build Me A Website",
              "url": "https://buildmeawebsite.ca",
              "logo": "https://buildmeawebsite.ca/logo.png"
            },
            "potentialAction": {
              "@type": "CommunicateAction",
              "target": "mailto:support@buildmeawebsite.ca"
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

      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`} />
      {!isMobile && (
        <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/freeconsultation.jpg`} />
      )}
      
      <ContactForm />
    </div>
  );
}

export default ConsultationPage;

