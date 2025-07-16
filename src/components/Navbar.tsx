import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logod1.png';
import Search from './search';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';
import { Menu, X } from 'lucide-react';

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
    {/* Top bar with contact/socials */}
    <div className="relative bg-[#E5F0F7] px-4 md:px-20 py-4 flex justify-between items-center">
      <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-6 gap-y-2 z-10">
        <span className="flex items-center space-x-1">
          <img src={emailIcon} alt="Email" className="h-6 w-6" />
          <span className="font-semibold text-gray-600">sales@optiseam.com</span>
        </span>
        <span className="flex items-center space-x-1">
          <img src={phoneIcon} alt="Phone" className="h-6 w-6" />
          <span className="font-semibold text-gray-600">(+65) 8837 7071</span>
        </span>
      </div>
      <div className="hidden sm:flex absolute top-0 right-0 h-full w-[30%] bg-[#6A89A7] clip-slant items-center justify-start px-20 space-x-6 z-20">
        <a href="https://www.facebook.com/profile.php?id=61578632121275"><img src={facebookIcon} alt="Facebook" className="h-7 w-7" /></a>
        <a href="https://x.com/optiseam"><img src={twitterIcon} alt="Twitter" className="h-7 w-7" /></a>
        <a href="https://www.linkedin.com/in/optiseam/"><img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" /></a>
      </div>
    </div>

    {/* Main navbar */}
    <nav className="bg-white px-4 md:px-6 py-5 shadow-md relative z-30">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-[70px] overflow-hidden flex items-center">
            <img src={logo} alt="Logo" className="h-[120px] -translate-y-0 scale-5" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 text-purple-850 font-medium ml-20">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/about-us" className="hover:text-gray-500">About us</Link>
          
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setIsServicesOpen(prev => !prev);
                if (!isServicesOpen) setIsIndustriesOpen(false);
              }}
              className="flex items-center hover:text-gray-500"
            >
              Services
              <svg className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 ${isServicesOpen ? 'block' : 'hidden'}`}>
              {services.map((s, idx) => (
                <Link key={idx} to={s === 'View All Services' ? '/services' : `/services/${s.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 hover:bg-[#809497] hover:text-white text-gray-700"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative" ref={industriesRef}>
            <button
              onClick={() => {
                setIsIndustriesOpen(prev => !prev);
                if (!isIndustriesOpen) setIsServicesOpen(false);
              }}
              className="flex items-center hover:text-gray-500"
            >
              Industry
              <svg className={`ml-1 w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 ${isIndustriesOpen ? 'block' : 'hidden'}`}>
              {industries.map(ind => (
                <Link key={ind.id} to={ind.id === 'all-industries' ? '/industries' : `/industries/${ind.id}`}
                  className="block px-4 py-2 hover:bg-[#809497] hover:text-white text-gray-700"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  {ind.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Search (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/contact" className="bg-blue-200 text-black px-4 py-2 rounded-full">
            Contact Us ↗️
          </Link>
          <Search />
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>
    </nav>

    {/* Mobile Slide Menu */}
    <div
      ref={mobileRef}
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={() => setIsOpen(false)}><X size={24} /></button>
      </div>
      <div className="flex flex-col space-y-4 px-6 py-6">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about-us" onClick={() => setIsOpen(false)}>About us</Link>
        <div>
          <button onClick={() => setIsServicesOpenMobile(prev => !prev)} className="flex justify-between w-full">
            Services
            <span>{isServicesOpenMobile ? '▲' : '▼'}</span>
          </button>
          {isServicesOpenMobile && (
            <div className="ml-4 mt-2 space-y-2">
              {services.map((s, idx) => (
                <Link
                  key={idx}
                  to={s === 'View All Services' ? '/services' : `/services/${s.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsOpen(false)}
                >
                  {s}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>
          <button onClick={() => setIsIndustriesOpenMobile(prev => !prev)} className="flex justify-between w-full">
            Industry
            <span>{isIndustriesOpenMobile ? '▲' : '▼'}</span>
          </button>
          {isIndustriesOpenMobile && (
            <div className="ml-4 mt-2 space-y-2">
              {industries.map(ind => (
                <Link
                  key={ind.id}
                  to={ind.id === 'all-industries' ? '/industries' : `/industries/${ind.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {ind.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <div className="flex justify-center space-x-6 pt-6 border-t">
  <a href="https://www.facebook.com/profile.php?id=61578632121275">
    <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
  </a>
  <a href="https://x.com/optiseam">
    <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
  </a>
  <a href="https://www.linkedin.com/in/optiseam/">
    <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
  </a>
</div>

      </div>
    </div>

    {/* Overlay */}
    {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
  </>
);

};

export default Navbar;