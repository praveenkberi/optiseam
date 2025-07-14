import React from 'react';
import { Link } from 'react-router-dom';
import { services } from './services/servicedata';
import InfoDropdown from '../components/infodropdown';


const Services = () => {
  


  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section
          className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
          style={{ backgroundImage: `url('/src/assets/Servimg.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center px-4 -mt-20">
            <p className="uppercase tracking-widest text-md mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Streamline Your Revenue Cycle<br />with Accurate Billing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Helping healthcare providers focus on care while we manage compliant billing and coding.
              Our expertise ensures accuracy and efficiency in every transaction.
            </p>
          </div>

          {/* Curved Bottom (inward) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-[100px]"
            >
              <path
                fill="#f9fafb"
                d="M0,250 C360,-50 1080,-50 1440,250 L1440,320 L0,320 Z"
              ></path>
            </svg>
          </div>
      </section>

      <section className="px-4 md:px-20 py-16 bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src="/src/assets/Servimg1.png" 
                alt="Revenue growth laptop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                Explore Our Comprehensive <br />
                <span className="text-black">Services for Your Business Needs</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Helping healthcare providers focus on care while we manage compliant billing and coding.
                Our expertise ensures accuracy and efficiency in every transaction.
                At Optiseam, our mission is to enhance healthcare efficiency through advanced IT solutions.
                We envision a future where technology seamlessly supports healthcare providers, allowing them to focus on patient care.
              </p>

              <div className="space-y-4">
                {[
                    {
                      title: 'ICD-10, CPT, and HCPCS Expertise',
                      icon: '/src/assets/sol1.png',
                      content: 'Our experts handle industry-standard codes to ensure accurate billing and compliance.'
                    },
                    {
                      title: 'Efficient Claim Management',
                      icon: '/src/assets/sol2.png',
                      content: 'We streamline the claim lifecycle to reduce rejections and improve turnaround times.'
                    },
                    {
                      title: 'Dedicated Accounts Receivable Support',
                      icon: '/src/assets/sol3.png',
                      content: 'Our AR specialists help improve your cash flow and reduce outstanding balances.'
                    }
                  ].map((item, index) => (
                  <InfoDropdown
                    key={index}
                    title={
                      <div className="flex items-center space-x-3">
                        <img src={item.icon} alt={item.title} className="h-6 w-6" />
                        <span className="font-medium text-sm text-gray-800">{item.title}</span>
                      </div>
                    }
                    children={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>
        {/* How it works */}
      <section className="bg-white py-20 px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-gray-600 mt-2">
              Our medical billing and coding services ensure accuracy and compliance. We streamline your revenue cycle, allowing you to focus on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <img src="/src/assets/step1.png" alt="Step 1" className="h-28 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Step 1: Billing operations with accuracy</h3>
              <p className="text-sm text-gray-600">
                Onboarding & Setup – We assess your current system and set up secure data access tailored to your workflow.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <img src="/src/assets/step2.png" alt="Step 2" className="h-28 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Step 2: Patient Data & Coding</h3>
              <p className="text-sm text-gray-600">
                We receive patient records and apply accurate ICD-10, CPT, and HCPCS codes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <img src="/src/assets/step3.png" alt="Step 3" className="h-28 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Step 3: Claims Submission & Tracking</h3>
              <p className="text-sm text-gray-600">
                Claims are submitted electronically with active tracking and status monitoring.
              </p>
            </div>
          </div>
      </section>
        {/* Let's Build for the Future Section */}
      <section
          className="relative bg-cover bg-center bg-no-repeat text-white min-h-[600px] px-6"
          style={{ backgroundImage: `url('/src/assets/benefits.png')` }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build for the Future.</h2>
            <p className="mb-6 text-lg md:text-xl">
              Helping healthcare providers focus on care while we manage compliant billing and coding.
              Our expertise ensures accuracy and efficiency in every transaction.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#34D399] text-white px-6 py-2 rounded-full">Get Started &rarr;</button>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full">Explore More</button>
            </div>
          </div>
      </section>
          {/* Benefits Section */}
      <section className="bg-white py-16 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '/src/assets/icons/claim-denial.png',
                title: 'Reduced Claim Denials',
                desc: 'Clean claim submissions with correct coding and validation.',
              },
              {
                icon: '/src/assets/icons/faster-reimbursement.png',
                title: 'Faster Reimbursements',
                desc: 'Speedy claim processing and active AR follow-ups.',
              },
              {
                icon: '/src/assets/icons/medical-coding.png',
                title: 'Accurate Medical Coding',
                desc: 'Certified coders using ICD-10, CPT, HCPCS codes.',
              },
              {
                icon: '/src/assets/icons/hipaa.png',
                title: 'HIPAA-Compliant Systems',
                desc: 'Secure data handling and regulatory compliance.',
              },
              {
                icon: '/src/assets/icons/cost-scalability.png',
                title: 'Cost-Effective Scalability',
                desc: 'Affordable growth through our student support model.',
              },
              {
                icon: '/src/assets/icons/reporting.png',
                title: 'Transparent Reporting',
                desc: 'Real-time metrics and performance dashboards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default Services;