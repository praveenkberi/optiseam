import React from 'react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
  const features = [
    {
      title: 'Patient Data Management',
      description: 'Secure and efficient management of patient records, ensuring HIPAA compliance and easy access to critical information.'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Streamlined scheduling system for patient appointments, reducing no-shows and optimizing healthcare provider time.'
    },
    {
      title: 'Medical Transcription',
      description: 'Accurate and timely transcription of medical records, notes, and reports to maintain comprehensive patient documentation.'
    },
    {
      title: 'Claims Processing',
      description: 'Efficient handling of insurance claims, reducing processing time and improving reimbursement rates.'
    },
    {
      title: 'Compliance Documentation',
      description: 'Comprehensive documentation support to ensure adherence to healthcare regulations and standards.'
    },
    {
      title: 'Healthcare Analytics',
      description: 'Data-driven insights to improve patient care, operational efficiency, and business performance.'
    }
  ];

  const benefits = [
    'Improved patient care and satisfaction',
    'Enhanced operational efficiency',
    'Reduced administrative burden',
    'Better compliance with healthcare regulations',
    'Increased revenue through optimized billing',
    'Streamlined communication between healthcare providers'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Streamline your healthcare operations with our specialized solutions designed for medical practices, hospitals, and healthcare providers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Healthcare Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your healthcare practice and improve patient care.
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

export default Healthcare; 