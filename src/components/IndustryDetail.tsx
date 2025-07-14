import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IndustryDetail = () => {
  const { industryId } = useParams();

  const industries = {
    'e-commerce': {
      title: "E-Commerce",
      icon: "🛍️",
      description: "Custom e-commerce solutions, payment gateway integration, and inventory management systems.",
      longDescription: "Our e-commerce solutions help businesses establish and grow their online presence. We create custom e-commerce platforms that are secure, scalable, and user-friendly, enabling businesses to reach more customers and increase sales.",
      features: [
        "Online store development",
        "Payment processing",
        "Inventory tracking",
        "Customer management"
      ],
      solutions: [
        "Custom e-commerce platforms",
        "Shopping cart systems",
        "Payment gateway integration",
        "Inventory management",
        "Order processing",
        "Customer relationship management"
      ],
      benefits: [
        "Increased online sales",
        "Improved customer experience",
        "Better inventory management",
        "Enhanced security",
        "Mobile-friendly shopping",
        "Analytics and reporting"
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Stripe",
        "PayPal",
        "AWS"
      ]
    },
    'healthcare': {
      title: "Healthcare",
      icon: "🏥",
      description: "Digital solutions for healthcare providers, patient management, and telemedicine platforms.",
      longDescription: "Our healthcare technology solutions help medical practices and healthcare providers deliver better patient care through innovative digital tools. We create secure, compliant, and user-friendly systems that streamline healthcare operations.",
      features: [
        "Patient portal development",
        "Appointment scheduling",
        "Medical records management",
        "Telehealth solutions"
      ],
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine platforms",
        "Patient management systems",
        "Medical billing software",
        "Healthcare analytics",
        "Compliance management"
      ],
      benefits: [
        "Improved patient care",
        "Enhanced efficiency",
        "Better data security",
        "Reduced administrative costs",
        "Increased accessibility",
        "Better patient engagement"
      ],
      technologies: [
        "HIPAA Compliance",
        "HL7 Integration",
        "FHIR Standards",
        "Cloud Computing",
        "Mobile Health",
        "AI/ML"
      ]
    },
    'education': {
      title: "Education",
      icon: "📚",
      description: "Learning management systems, educational apps, and digital learning platforms.",
      longDescription: "Our education technology solutions help educational institutions deliver better learning experiences through innovative digital platforms. We create engaging, interactive, and accessible learning environments for students and educators.",
      features: [
        "E-learning platforms",
        "Student management systems",
        "Online assessment tools",
        "Virtual classroom solutions"
      ],
      solutions: [
        "Learning Management Systems",
        "Educational apps",
        "Virtual classrooms",
        "Student information systems",
        "Assessment platforms",
        "Educational analytics"
      ],
      benefits: [
        "Enhanced learning experience",
        "Improved accessibility",
        "Better student engagement",
        "Efficient administration",
        "Data-driven insights",
        "Scalable solutions"
      ],
      technologies: [
        "Moodle",
        "Canvas",
        "Blackboard",
        "Google Classroom",
        "Microsoft Teams",
        "Zoom"
      ]
    },
    'manufacturing': {
      title: "Manufacturing",
      icon: "🏭",
      description: "Industry 4.0 solutions, process automation, and supply chain management systems.",
      longDescription: "Our manufacturing technology solutions help businesses optimize their operations through automation, data analytics, and smart manufacturing practices. We create systems that improve efficiency, reduce costs, and enhance quality control.",
      features: [
        "Process automation",
        "Quality control systems",
        "Supply chain tracking",
        "Equipment monitoring"
      ],
      solutions: [
        "Manufacturing Execution Systems",
        "Quality Management Systems",
        "Supply Chain Management",
        "Equipment Maintenance",
        "Production Planning",
        "Inventory Control"
      ],
      benefits: [
        "Increased efficiency",
        "Reduced costs",
        "Better quality control",
        "Improved safety",
        "Real-time monitoring",
        "Predictive maintenance"
      ],
      technologies: [
        "IoT",
        "Industry 4.0",
        "Machine Learning",
        "Cloud Computing",
        "Big Data",
        "Robotics"
      ]
    },
    'finance': {
      title: "Finance",
      icon: "💳",
      description: "Financial technology solutions, banking applications, and payment processing systems.",
      longDescription: "Our financial technology solutions help financial institutions and businesses manage their operations more efficiently. We create secure, compliant, and innovative systems that streamline financial processes and enhance customer experience.",
      features: [
        "Mobile banking apps",
        "Payment processing",
        "Financial analytics",
        "Transaction management"
      ],
      solutions: [
        "Banking applications",
        "Payment gateways",
        "Financial analytics",
        "Risk management",
        "Compliance systems",
        "Customer portals"
      ],
      benefits: [
        "Enhanced security",
        "Improved efficiency",
        "Better customer service",
        "Reduced operational costs",
        "Real-time processing",
        "Regulatory compliance"
      ],
      technologies: [
        "Blockchain",
        "AI/ML",
        "Cloud Computing",
        "API Integration",
        "Big Data",
        "Cybersecurity"
      ]
    },
    'real-estate': {
      title: "Real Estate",
      icon: "🏠",
      description: "Property management systems, virtual tours, and real estate marketplaces.",
      longDescription: "Our real estate technology solutions help property managers, agents, and developers streamline their operations and enhance customer experience. We create innovative platforms that make property management and real estate transactions more efficient.",
      features: [
        "Property listing platforms",
        "Virtual tour technology",
        "Property management systems",
        "Market analysis tools"
      ],
      solutions: [
        "Property Management Systems",
        "Virtual Tour Platforms",
        "Real Estate Marketplaces",
        "CRM Systems",
        "Analytics Tools",
        "Document Management"
      ],
      benefits: [
        "Improved efficiency",
        "Better customer experience",
        "Enhanced marketing",
        "Streamlined operations",
        "Data-driven insights",
        "Increased sales"
      ],
      technologies: [
        "Virtual Reality",
        "Augmented Reality",
        "Cloud Computing",
        "Mobile Apps",
        "AI/ML",
        "Big Data"
      ]
    }
  };

  const industry = industries[industryId as keyof typeof industries];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Industry Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The industry you're looking for doesn't exist.</p>
            <Link to="/industries" className="text-primary hover:text-secondary">
              Back to Industries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">{industry.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{industry.title}</h1>
            <p className="text-xl text-gray-100">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{industry.longDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {industry.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Our Solutions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-600">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {industry.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Technologies We Use</h2>
              <div className="flex flex-wrap gap-4">
                {industry.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your {industry.title} Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our solutions can help your business grow
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail; 