import React from 'react';
import { Link } from 'react-router-dom';

const LandscapingFieldServices = () => {
  const features = [
    {
      title: 'Scheduling Management',
      description: 'Efficient scheduling and dispatch system for field service operations and maintenance tasks.'
    },
    {
      title: 'Customer Service',
      description: 'Professional customer support for service inquiries, scheduling, and issue resolution.'
    },
    {
      title: 'Field Operations',
      description: 'Comprehensive management of field service teams, equipment, and resources.'
    },
    {
      title: 'Data Collection',
      description: 'Accurate collection and management of field service data and customer information.'
    },
    {
      title: 'Quality Control',
      description: 'Rigorous quality assurance measures to maintain service standards and customer satisfaction.'
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed monitoring and reporting of service performance and operational metrics.'
    }
  ];

  const benefits = [
    'Improved service efficiency',
    'Enhanced customer satisfaction',
    'Better resource utilization',
    'Reduced operational costs',
    'Streamlined scheduling',
    'Increased service quality'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Landscaping & Field Services Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Streamline field service operations with our comprehensive scheduling and management solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Landscaping & Field Services Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Field Services?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your landscaping and field service operations.
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

export default LandscapingFieldServices; 