import React from 'react';
import { Link } from 'react-router-dom';

const LegalServices = () => {
  const features = [
    {
      title: 'Document Processing',
      description: 'Efficient handling of legal documents, contracts, and case files with strict confidentiality.'
    },
    {
      title: 'Case Management',
      description: 'Comprehensive case tracking and management system to streamline legal operations.'
    },
    {
      title: 'Legal Transcription',
      description: 'Accurate and timely transcription of legal proceedings, depositions, and meetings.'
    },
    {
      title: 'Data Entry',
      description: 'Precise data entry services for legal records, client information, and case documentation.'
    },
    {
      title: 'Compliance Support',
      description: 'Expert assistance in maintaining legal compliance and regulatory documentation.'
    },
    {
      title: 'Client Communication',
      description: 'Professional handling of client communications and correspondence management.'
    }
  ];

  const benefits = [
    'Enhanced operational efficiency',
    'Improved document management',
    'Better case organization',
    'Reduced administrative burden',
    'Increased client satisfaction',
    'Streamlined compliance processes'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Services Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Enhance legal practice management with our specialized documentation and scheduling solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Legal Services Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Legal Practice?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your legal operations and improve client service.
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

export default LegalServices; 