import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';  // Import the ScrollToTop component
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import BlogPage from './pages/Blog';
import ServicesPage from './pages/Services';
import { ContactPage } from '@mui/icons-material';
import ConsultationPage from './pages/Consultation';

function App() {
  return (
    <Router>
      <Header/>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      
      <div

      style = {{ background: '#f8f8f8', padding: '0px, 0px' }}>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />


        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
