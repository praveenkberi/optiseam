import React from 'react';
import { Link } from 'react-router-dom';

const EducationEdTech = () => {
  const features = [
    {
      title: 'Student Support',
      description: 'Comprehensive support services for student inquiries, enrollment, and academic assistance.'
    },
    {
      title: 'Content Management',
      description: 'Efficient management of educational content, course materials, and digital resources.'
    },
    {
      title: 'Administrative Support',
      description: 'Streamlined administrative processes for enrollment, scheduling, and record management.'
    },
    {
      title: 'Data Processing',
      description: 'Accurate processing of student records, grades, and academic performance data.'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical assistance for educational platforms and digital learning tools.'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality control measures to ensure educational excellence and compliance.'
    }
  ];

  const benefits = [
    'Enhanced student experience',
    'Improved administrative efficiency',
    'Better resource management',
    'Streamlined communication',
    'Reduced operational costs',
    'Increased educational accessibility'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education & EdTech Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transform educational institutions with our innovative scheduling and data management solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Education & EdTech Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Educational Institution?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help streamline your educational operations and enhance learning experiences.
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

export default EducationEdTech; 