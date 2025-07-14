import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logod1.png';

const Footer = () => {
  return (
    <footer className="bg-[#022A2F] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            {/*<img src={logo} alt="Anu Tech Solutions Logo" className="h-30 w-25 object-contain mb-2" /> */}
            <h3 className="text-xl font-bold italic -skew-x-6 mb-4">Optiseam</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative technology solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/optiseam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://x.com/optiseam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46 6c-.8.35-1.64.59-2.5.66a3.78 3.78 0 0 0 1.65-2.38c-.92.55-1.93.95-2.99 1.16a3.78 3.78 0 0 0-6.47 3.44A10.76 10.76 0 0 1 3.03 4.5a3.78 3.78 0 0 0 1.17 5.06 3.76 3.76 0 0 1-1.71-.47v.05a3.79 3.79 0 0 0 3.04 3.71 3.77 3.77 0 0 1-1.7.07 3.81 3.81 0 0 0 3.54 2.64 7.57 7.57 0 0 1-4.69 1.6A10.76 10.76 0 0 0 2.5 19.51a10.75 10.75 0 0 0 16.4-15.6c.83-.6 1.56-1.36 2.14-2.16z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.893 3.776-3.893 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22c4.78-.75 8.437-4.887 8.437-9.878Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/transcription-services" className="text-gray-400 hover:text-white transition-colors">
                  Transcription Services
                </Link>
              </li>
              <li>
                <Link to="/services/appointment-scheduling-calendar-management" className="text-gray-400 hover:text-white transition-colors">
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link to="/services/client-operational-data-management" className="text-gray-400 hover:text-white transition-colors">
                  Data Management
                </Link>
              </li>
              <li>
                <Link to="/services/compliance-documentation-support" className="text-gray-400 hover:text-white transition-colors">
                  Compliance Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

           <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/retail-ecommerce" className="text-gray-400 hover:text-white transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link to="/industries/telecommunications" className="text-gray-400 hover:text-white transition-colors">
                  Telecommunications
                </Link>
              </li>
              <li>
                <Link to="/industries/insurance" className="text-gray-400 hover:text-white transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link to="/industries/education-edtech" className="text-gray-400 hover:text-white transition-colors">
                  Education & EdTech
                </Link>
              </li>
               <li>
                <Link to="/industries/logistics-transportation" className="text-gray-400 hover:text-white transition-colors">
                  Logistics & Transportation
                </Link>
              </li>
               <li>
                <Link to="/industries/legal-services" className="text-gray-400 hover:text-white transition-colors">
                  Legal Services
                </Link>
              </li>
               <li>
                <Link to="/industries/landscaping-field-services" className="text-gray-400 hover:text-white transition-colors">
                  Landscaping & Field Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transition-colors">
                  View All Industries
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@optiseam.com" className="hover:text-white transition-colors">
                  info@optiseam.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (+65) 8837 7071
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Optiseam. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm cursor-not-allowed">Privacy Policy (Coming Soon)</span>
              <span className="text-gray-400 text-sm cursor-not-allowed">Terms of Service (Coming Soon)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
