import React from 'react';
import { Link } from 'react-router-dom';

const RetailEcommerce = () => {
  const features = [
    {
      title: 'Order Processing',
      description: 'Streamlined order management system to handle high volumes of orders efficiently and accurately.'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and management to optimize stock levels and prevent stockouts.'
    },
    {
      title: 'Customer Service',
      description: '24/7 customer support solutions to enhance customer satisfaction and build brand loyalty.'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive analytics tools to gain insights into customer behavior and business performance.'
    },
    {
      title: 'Market Research',
      description: 'In-depth market analysis to identify trends and opportunities for business growth.'
    },
    {
      title: 'Content Management',
      description: 'Efficient management of product information and digital content across multiple platforms.'
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced customer satisfaction',
    'Improved inventory management',
    'Better decision-making through data insights',
    'Reduced operational costs',
    'Scalable solutions for business growth'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail & E-commerce Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Enhance your retail and e-commerce operations with our comprehensive data management and customer service solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Retail & E-commerce Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Retail Business?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your retail operations and drive growth.
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

export default RetailEcommerce; 