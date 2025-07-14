import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from './services/servicedata';
import InfoDropdown from '../components/infodropdown';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="text-primary hover:text-secondary underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-primary flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-4 -mt-20">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          {/* <p className="text-lg max-w-2xl mx-auto">{service.description}</p> */}
          <p className="text-lg max-w-2xl mx-auto">{service.longDescription}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[100px]">
            <path fill="#f9fafb" d="M0,250 C360,-50 1080,-50 1440,250 L1440,320 L0,320 Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro & Solutions */}
      <section className="px-4 md:px-20 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/src/assets/Servimg1.png"
              alt="Service Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Solution</h2>
            <p className="text-gray-700 mb-4">{service.solutionIntro}</p>
            <div className="space-y-10">
              {service.solutions.map((solution, idx) => (
                <InfoDropdown key={idx} title={solution.title}>
                  {solution.description}
                </InfoDropdown>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-2">
            Our proven step-by-step process ensures consistency and results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {service.process.map((step, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="text-4xl text-primary mb-4">{index + 1}</div>
              <h4 className="font-semibold mb-2">{step.step}</h4>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[500px] px-6 flex items-center"
        style={{ backgroundImage: `url('/src/assets/benefits.png')` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build for the Future.</h2>
          <p className="mb-6 text-lg md:text-xl">
            Discover how our <strong>{service.title}</strong> can help your business grow.
          </p>
          <Link
            to="/contact"
            className="bg-[#D4DBDC] text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-0"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3">
              <div className="text-4xl">{benefit.icon}</div> {/*each benefit has it's own icon and has to be added in serviedata file aswell*/}
              <h4 className="font-semibold text-lg">{benefit.title}</h4>
              <p className="text-sm text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
