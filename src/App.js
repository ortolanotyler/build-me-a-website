import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import CalendarComponent from './pages/Consultation';
import Footer from './components/Footer';
import SeoPage from './pages/ServicesPages/SEOPage';
import WebDev from './pages/ServicesPages/WebDevPage';
import SEMPage from './pages/ServicesPages/SEMPage';
import WebDesignPage from './pages/ServicesPages/WebDesignPage';
import WebHostingPage from './pages/ServicesPages/WebHostingPage';
import DNSMigrationPage from './pages/ServicesPages/DNSMigrationPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';  // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <Header/>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<CalendarComponent />} />
          <Route path="/search-engine-optimization" element={<SeoPage />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/search-engine-marketing" element={<SEMPage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/web-hosting" element={<WebHostingPage />} />
          <Route path="/dns-migration" element={<DNSMigrationPage />} />
        
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
