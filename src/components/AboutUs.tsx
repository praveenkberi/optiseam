import React from 'react';
import WhyAnuTech from './WhyAnuTech';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Optiseam Tech Solutions</h1>
            <p className="text-xl text-gray-100">Smart Solutions for Great Future</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower startups & SMEs by delivering efficient, cost-effective back-office and technology support services, driven by our dynamic student community and innovative solutions, enabling clients to focus on their core business growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading partner for SMEs seeking transformative back-office solutions, recognized for our innovation, quality, and commitment to fostering student talent and strong experienced talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a team of four friends with strong backgrounds in IT, management, business, and marketing. Our diverse expertise and collaborative spirit allow us to deliver balanced, innovative, and client-focused solutions. As founders, we combine technical know-how, people skills, entrepreneurial drive, and marketing acumen to add real value to our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Jawahar Reddy */}
            {/*<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden"> */}
                {/* Replace src with your image */}
               {/*} <img src="/assets/jawahar-placeholder.png" alt="Jawahar Reddy" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-primary">Jawahar Reddy</h3>
              <span className="text-sm text-gray-600 mb-2">Founder & Community Leader</span>
              <p className="text-gray-700 text-center text-sm">6+ years of experience in building startups. Visionary leader passionate about empowering communities and driving innovation.</p>
            </div> */}
            {/* Cleveland Law Hong */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/rishi-placeholder.png" alt="Rishi Preetham" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-primary">Cleveland Law Hong</h3>
              <span className="text-sm text-gray-600 mb-2">Founder & Community Builder</span>
              <p className="text-gray-700 text-center text-sm">People's person with 4 years of experience in IT development and management. Expert in building strong, collaborative teams.</p>
            </div> */}
            {/* Gopi G 
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/gopi-placeholder.png" alt="Gopi G" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-primary">Gopi G</h3>
              <span className="text-sm text-gray-600 mb-2">Founder</span>
              <p className="text-gray-700 text-center text-sm">3+ years of experience in building and managing businesses. Brings operational excellence and a growth mindset to the team.</p>
            </div> */}
            {/* Daniel 
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/daniel-placeholder.png" alt="Daniel" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-primary">Daniel</h3>
              <span className="text-sm text-gray-600 mb-2">Founder</span>
              <p className="text-gray-700 text-center text-sm">UW Madison alum with 3+ years of experience in marketing. Creative strategist focused on brand growth and client success.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* What We Do */}
      
      {/* Why Choose Us */}
      <WhyAnuTech />

      {/* Student Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission for Students</h2>
            <p className="text-lg text-gray-700 mb-8">
              To empower students by providing real-world opportunities to apply their skills, gain hands-on experience, and contribute to impactful business projects. We are committed to nurturing the next generation of professionals by fostering a culture of learning, innovation, and mentorship.
            </p>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Vision for Students</h2>
            <p className="text-lg text-gray-700">
              To build a vibrant community where students are recognized as valuable contributors to business success, equipped with the knowledge, confidence, and professional network to excel in their future careers. We envision a future where every student has access to meaningful work experiences and the support needed to thrive in a dynamic workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Student Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Benefits for Students</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Real Experience</h3>
              <p className="text-gray-600">
                Work on actual business projects and build a professional portfolio while studying.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Mentorship</h3>
              <p className="text-gray-600">
                Learn from industry experts and receive guidance throughout your project journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Enhance your skills and increase your employability with practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 