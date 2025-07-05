import React from 'react';
import { BarChart3, Monitor, Palette, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis & Consultation',
      description: 'Expert data analysis services and consultation for research projects, experiments, and scientific studies.',
      features: ['Statistical Analysis', 'Data Visualization', 'Research Consultation', 'Results Interpretation'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Monitor,
      title: 'Computing Short Courses',
      description: 'Practical computing courses designed for scientists and researchers.',
      features: ['Linux Operating System', 'LaTeX Document Preparation', 'Python Programming', 'Machine Learning'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Professional website design services for academic and scientific institutions.',
      features: ['Responsive Design', 'Content Management', 'SEO Optimization', 'Modern UI/UX'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: BookOpen,
      title: 'Teaching & Tutoring',
      description: 'Specialized physics education and tutoring services.',
      features: ['One-on-One Sessions', 'Group Workshops', 'Exam Preparation', 'Custom Learning Plans'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of scientific services and educational programs designed to advance 
            knowledge and support researchers, students, and institutions in their scientific endeavors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-blue-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-br ${service.color} rounded-full`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/contact"
                  className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and learn how our services can support your scientific goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;