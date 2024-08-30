import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';

import Header from './components/Header';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import ServicesPage from './pages/Services';
import ConsultationPage from './pages/Consultation';

// Initialize Google Analytics
ReactGA.initialize('G-YYTCRX2PFK');

function App() {
  // Track page views
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Build Me A Website - Professional Web Development Services</title>
          <meta name="description" content="Build Me A Website offers professional and affordable web development services tailored to your business needs. Get in touch with us today!" />
          <meta name="keywords" content="web development, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics" />

          <meta property="og:title" content="Build Me A Website - Professional Web Development Services" />
          <meta property="og:description" content="Build Me A Website offers professional and affordable web development services tailored to your business needs. Get in touch with us today!" />
          <meta property="og:url" content="https://buildmeawebsite.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://buildmeawebsite.com/og-image.jpg" />
          <meta name="robots" content="index, follow" />
          <link rel="preload" href="/assets/styles/main.css" as="style" />
          <link rel="stylesheet" href="https://buildmeawebsite.com/assets/styles/main.css" />
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

        <Header />
        <ScrollToTop />

        <div style={{ background: '#fcfaf4' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
