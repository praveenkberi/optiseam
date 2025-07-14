import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logod1.png';
import Search from './search';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isIndustriesOpenMobile, setIsIndustriesOpenMobile] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const mobileIndustriesRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsServicesOpenMobile(false);
      setIsIndustriesOpenMobile(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIsIndustriesOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsServicesOpenMobile(false);
    setIsIndustriesOpenMobile(false);
  }, [location.pathname]);

  const services = [
  'View All Services',
  'Billing and Invoicing Services',
  'Data and Records Management',
  'Scheduling and Coordination',
  'Compliance and Documentation',
  'Inventory and Supply Chain Management',
  'Claims Processing and Adjudication',
  'Contract Lifecycle Management',
  'Payroll and Time Tracking',
  'Transcription Services',
  'Vendor Management Support',
  'Customer and Subscriber Support',
  'Reporting and Data Analysis'
];


  const industries = [
    { id: 'all-industries', title: 'View All Industries' },
    { id: 'healthcare', title: 'Healthcare' },
    { id: 'retail-ecommerce', title: 'Retail & E-commerce' },
    { id: 'telecommunications', title: 'Telecommunications' },
    { id: 'insurance', title: 'Insurance' },
    { id: 'education-edtech', title: 'Education & EdTech' },
    { id: 'logistics-transportation', title: 'Logistics & Transportation' },
    { id: 'legal-services', title: 'Legal Services' },
    { id: 'landscaping-field-services', title: 'Landscaping & Field Services' }
  ];

  const textColor = isScrolled ? 'text-gray-700' : 'text-white';
  const logoColor = isScrolled ? 'text-gray-600' : 'text-white';
  const isHomePage = location.pathname === '/';
  const navBg = isScrolled ? 'bg-[#6A89A7] shadow-md' : isHomePage ? 'bg-transparent' : 'bg-[#6A89A7]';

  return (
    <>
      <div className="relative bg-[#E5F0F7] px-4 md:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6 z-10">
          <span className="flex items-center space-x-1">
            <img src={emailIcon} alt="Email" className="h-6 w-6" />
            <span className="font-semibold text-gray-600">info@optiseam.org</span>
          </span>
          <span className="flex items-center space-x-1">
            <img src={phoneIcon} alt="Phone" className="h-6 w-6" />
            <span className="font-semibold text-gray-600">(+65) 8837 7071</span>
          </span>
        </div>
        <div className="absolute top-0 right-0 h-full w-[30%] bg-[#6A89A7] clip-slant flex items-center justify-start px-20 space-x-6 z-0">
          <a href="https://www.facebook.com/profile.php?id=61578632121275"><img src={facebookIcon} alt="Facebook" className="h-7 w-7" /></a>
          <a href="https://x.com/optiseam"><img src={twitterIcon} alt="Twitter" className="h-7 w-7" /></a>
          <a href="https://www.linkedin.com/in/optiseam/"><img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" /></a>
          {/*<a href="#"><img src="/src/assets/instagram.png" alt="Instagram" className="h-7 w-7" /></a> */}
        </div>
      </div>

      <nav className="bg-[#ffffff] px-4 md:px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex mr-10">
            <Link to="/" className="flex items-center focus:outline-none focus:ring-0">
              <div className="h-[70px] overflow-hidden flex items-center">
                  <img src={logo} alt="Logo" className="h-[120px] -translate-y-0 scale-5" />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-12 text-purple-850 font-medium ml-20">
            <Link to="/" className='hover:text-gray-500 focus:outline-none focus:ring-0'>Home</Link>
            <Link to="/about-us" className='hover:text-gray-500 focus:outline-none focus:ring-0'>About us</Link>

            <div className="relative" ref={servicesRef}>
              <button
                className={`text-purple-850  flex items-center hover:text-gray-500 transition-colors focus:outline-none focus:ring-0`}
                onClick={() => {
                  setIsServicesOpen(prev => !prev);
                  if (!isServicesOpen) setIsIndustriesOpen(false);
                }}
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition duration-200 z-50 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {services.map((s, idx) => (
                  <Link
                    key={idx}
                    to={s === 'View All Services' ? '/services' : `/services/${s.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:text-white hover:bg-[#809497] text-gray-700"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative" ref={industriesRef}>
              <button
                className={`text-purple-850  flex items-center hover:text-gray-500 transition-colors focus:outline-none focus:ring-0`}
                onClick={() => {
                  setIsIndustriesOpen(prev => !prev);
                  if (!isIndustriesOpen) setIsServicesOpen(false);
                }}
              >
                Industry
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition duration-200 z-50 ${
                  isIndustriesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {industries.map(ind => (
                  <Link
                    key={ind.id}
                    to={ind.id === 'all-industries' ? '/industries' : `/industries/${ind.id}`}
                    className="block px-4 py-2 hover:text-white hover:bg-[#809497] text-gray-700"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/contact" className="bg-blue-200 text-black px-4 py-2 rounded-full flex items-center space-x-1 focus:outline-none focus:ring-0">
              <span>Contact Us</span>
              <span>↗️</span>
            </Link>
            <div className="hidden md:block ">
              <Search />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;