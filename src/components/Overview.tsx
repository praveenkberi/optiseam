import React from 'react';

const Overview = () => {
  return (
    <section className="py-12 md:py-16 bg-soft-blue animate-slide-in-right">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Back-Office & Operational Excellence for Startups and SMEs
          </h2>
          <p className="text-lg text-tertiary leading-relaxed">
            Optiseam specializes in providing end-to-end back-office and operational support for innovative startups and SMEs. Leveraging a dynamic network of skilled students and experienced professionals, we deliver services such as Invoice Processing, AP/AR Support, Client & Operational Data Management, Compliance Documentation, Appointment Scheduling, Freight Broking, Document Verification, Insurance Processing, and more. Our expertise spans Retail & E-commerce, Education, Staffing, Logistics & Transportation, Legal Services, Landscaping, and Manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-primary mb-3">Efficiency Boost</h3>
            <p className="text-tertiary">
              Streamline your operations and focus on core business activities while we handle the backend processes with precision.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-primary mb-3">Student Talent</h3>
            <p className="text-tertiary">
              Access our vibrant community of skilled students, bringing fresh perspectives and innovative solutions.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-primary mb-3">Cost-Effective</h3>
            <p className="text-tertiary">
              Reduce operational costs without compromising on quality, with our flexible and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;