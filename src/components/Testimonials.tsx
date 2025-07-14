import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Optiseam has transformed our backend operations. Their student talent pool brings fresh perspectives while maintaining professional standards.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "HealthCare Connect",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The data management services provided by Optiseam have significantly improved our operational efficiency. Highly recommended for SMEs looking to optimize their processes.",
      author: "Michael Chen",
      position: "CEO",
      company: "TechRetail Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "Working with Optiseam has been a game-changer for our compliance documentation needs. Their attention to detail and industry knowledge is impressive.",
      author: "Jessica Patel",
      position: "Compliance Manager",
      company: "Telecom Innovations",
      image: "https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how Optiseam has helped businesses across various industries streamline their operations and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-8">Ready to streamline your operations or have questions? Reach out to our team today and discover how Optiseam can help your business grow.</p>
          <a href="/contact" className="inline-block bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md transition-colors">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;