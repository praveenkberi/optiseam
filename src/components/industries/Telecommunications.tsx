import React from 'react';
import { Link } from 'react-router-dom';

const Telecommunications = () => {
  const features = [
    {
      title: 'Customer Support',
      description: '24/7 customer service solutions to handle inquiries, technical issues, and service requests efficiently.'
    },
    {
      title: 'Technical Assistance',
      description: 'Expert technical support for troubleshooting and resolving complex network and service issues.'
    },
    {
      title: 'Billing Support',
      description: 'Streamlined billing operations to ensure accurate invoicing and efficient payment processing.'
    },
    {
      title: 'Network Monitoring',
      description: 'Real-time monitoring and management of network infrastructure to ensure optimal performance.'
    },
    {
      title: 'Service Activation',
      description: 'Efficient handling of new service activations and account management processes.'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality control measures to maintain high service standards and customer satisfaction.'
    }
  ];

  const benefits = [
    'Enhanced customer satisfaction',
    'Improved service delivery',
    'Reduced operational costs',
    'Increased efficiency in support operations',
    'Better network performance monitoring',
    'Streamlined billing processes'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telecommunications Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Optimize your telecom operations with our advanced scheduling and customer support solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Telecommunications Solutions</h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Benefits</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Telecom Operations?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your telecommunications services and improve customer experience.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telecommunications; 