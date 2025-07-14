import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import Healthcare from './components/industries/Healthcare';
import RetailEcommerce from './components/industries/RetailEcommerce';
import Telecommunications from './components/industries/Telecommunications';
import Insurance from './components/industries/Insurance';
import EducationEdTech from './components/industries/EducationEdTech';
import LogisticsTransportation from './components/industries/LogisticsTransportation';
import LegalServices from './components/industries/LegalServices';
import LandscapingFieldServices from './components/industries/LandscapingFieldServices';
import { services } from './components/services/servicedata';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/telecommunications" element={<Telecommunications />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/education-edtech" element={<EducationEdTech />} />
          <Route path="/industries/logistics-transportation" element={<LogisticsTransportation />} />
          <Route path="/industries/legal-services" element={<LegalServices />} />
          <Route path="/industries/landscaping-field-services" element={<LandscapingFieldServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
