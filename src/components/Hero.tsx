import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <section
      className="relative pt-16 pb-8 md:pt-24 md:pb-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-80 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
            Optiseam: Your Partner in Software Development & Business Operations
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in-up delay-100">
            We empower startups and SMEs with end-to-end software development and back-office support—delivered by a unique blend of passionate student talent and seasoned professionals. Focus on scaling your vision while we handle the tech and operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-200">
            <Link 
              to="/" 
              className="bg-secondary hover:bg-tertiary text-white font-medium py-3 px-6 rounded-md text-center transition-colors "
            >
              Get Started
            </Link>
            <Link 
              to="/about-us" 
              className="bg-dark hover:bg-accent text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;