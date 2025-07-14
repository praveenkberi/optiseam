import React from 'react';
import { Link } from 'react-router-dom';

const LogisticsTransportation = () => {
  const features = [
    {
      title: 'Order Tracking',
      description: 'Real-time tracking and monitoring of shipments and deliveries for enhanced visibility.'
    },
    {
      title: 'Route Optimization',
      description: 'Advanced route planning and optimization to improve delivery efficiency and reduce costs.'
    },
    {
      title: 'Customer Service',
      description: '24/7 customer support for shipment inquiries, tracking updates, and issue resolution.'
    },
    {
      title: 'Document Processing',
      description: 'Efficient handling of shipping documents, customs paperwork, and compliance forms.'
    },
    {
      title: 'Data Management',
      description: 'Comprehensive management of logistics data for better decision-making and performance tracking.'
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed analytics and reporting tools to monitor and improve operational efficiency.'
    }
  ];

  const benefits = [
    'Improved delivery efficiency',
    'Enhanced customer satisfaction',
    'Reduced operational costs',
    'Better route optimization',
    'Streamlined documentation',
    'Increased operational visibility'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics & Transportation Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Optimize logistics operations with our comprehensive scheduling and tracking solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Logistics & Transportation Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Logistics Operations?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your logistics and transportation processes.
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

export default LogisticsTransportation; 