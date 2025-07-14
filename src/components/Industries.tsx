import React from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Streamline healthcare operations with our specialized solutions for medical practices, hospitals, and healthcare providers.',
      icon: '🏥'
    },
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      description: 'Enhance your retail and e-commerce operations with our comprehensive data management and customer service solutions.',
      icon: '🛍️'
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Optimize your telecom operations with our advanced scheduling and customer support solutions.',
      icon: '📱'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Streamline insurance processes with our specialized documentation and compliance management solutions.',
      icon: '📋'
    },
    {
      id: 'education-edtech',
      title: 'Education & EdTech',
      description: 'Transform educational institutions with our innovative scheduling and data management solutions.',
      icon: '🎓'
    },
    {
      id: 'logistics-transportation',
      title: 'Logistics & Transportation',
      description: 'Optimize logistics operations with our comprehensive scheduling and tracking solutions.',
      icon: '🚚'
    },
    {
      id: 'legal-services',
      title: 'Legal Services',
      description: 'Enhance legal practice management with our specialized documentation and scheduling solutions.',
      icon: '⚖️'
    },
    {
      id: 'landscaping-field-services',
      title: 'Landscaping & Field Services',
      description: 'Streamline field service operations with our comprehensive scheduling and management solutions.',
      icon: '🌳'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Discover how our specialized solutions can transform your industry operations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/industries/${industry.id}`}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry Operations?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our solutions can help streamline your business processes and drive growth.
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
  );
};

export default Industries;