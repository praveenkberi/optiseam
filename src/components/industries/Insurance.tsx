import React from 'react';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const features = [
    {
      title: 'Claims Processing',
      description: 'Efficient and accurate processing of insurance claims to ensure timely settlements and customer satisfaction.'
    },
    {
      title: 'Policy Management',
      description: 'Comprehensive policy administration system to handle policy creation, updates, and renewals.'
    },
    {
      title: 'Customer Service',
      description: 'Dedicated customer support solutions to address inquiries and provide policy information.'
    },
    {
      title: 'Document Processing',
      description: 'Streamlined handling of insurance documents, forms, and compliance paperwork.'
    },
    {
      title: 'Compliance Support',
      description: 'Expert assistance in maintaining regulatory compliance and documentation requirements.'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics tools to assess risk, track performance, and make data-driven decisions.'
    }
  ];

  const benefits = [
    'Faster claims processing',
    'Improved customer satisfaction',
    'Enhanced compliance management',
    'Reduced operational costs',
    'Better risk assessment',
    'Streamlined policy administration'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Streamline insurance processes with our specialized documentation and compliance management solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Insurance Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Insurance Operations?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your insurance processes and improve customer service.
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

export default Insurance; 