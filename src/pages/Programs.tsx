import React from 'react';
import { GraduationCap, Clock, Users, Calendar, Award, BookOpen, Laptop, Globe } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Advanced Physics Research Program',
      duration: '12 months',
      level: 'Graduate',
      participants: '15-20',
      startDate: 'September 2024',
      description: 'Intensive research program for graduate students and early-career researchers in theoretical and experimental physics.',
      modules: [
        'Quantum Field Theory',
        'Advanced Statistical Mechanics',
        'Computational Physics Methods',
        'Research Methodology',
        'Scientific Writing'
      ],
      requirements: [
        'Master\'s degree in Physics or related field',
        'Strong mathematical background',
        'Research experience preferred',
        'English proficiency'
      ],
      color: 'from-teal-400 to-cyan-500',
      icon: GraduationCap
    },
    {
      title: 'Computational Physics Workshop Series',
      duration: '6 weeks',
      level: 'Intermediate',
      participants: '25-30',
      startDate: 'Monthly',
      description: 'Hands-on workshops covering modern computational methods in physics, including machine learning applications.',
      modules: [
        'Python for Physics',
        'Numerical Methods',
        'Data Analysis & Visualization',
        'Machine Learning in Physics',
        'High-Performance Computing'
      ],
      requirements: [
        'Basic programming knowledge',
        'Undergraduate physics background',
        'Own laptop required',
        'Enthusiasm for learning'
      ],
      color: 'from-blue-400 to-indigo-500',
      icon: Laptop
    },
    {
      title: 'International Summer School',
      duration: '4 weeks',
      level: 'All Levels',
      participants: '40-50',
      startDate: 'July 2024',
      description: 'Annual summer school bringing together students and researchers from around the world for intensive learning.',
      modules: [
        'Modern Physics Frontiers',
        'Astrophysics & Cosmology',
        'Quantum Technologies',
        'Energy & Environment',
        'Science Communication'
      ],
      requirements: [
        'Undergraduate degree in science',
        'International applicants welcome',
        'Scholarship opportunities available',
        'Cultural exchange component'
      ],
      color: 'from-purple-400 to-pink-500',
      icon: Globe
    },
    {
      title: 'Physics Education Certificate',
      duration: '8 months',
      level: 'Professional',
      participants: '20-25',
      startDate: 'February 2024',
      description: 'Professional development program for physics educators and science communicators.',
      modules: [
        'Modern Pedagogy in Physics',
        'Educational Technology',
        'Assessment Methods',
        'Curriculum Development',
        'Science Outreach'
      ],
      requirements: [
        'Teaching experience',
        'Physics or education background',
        'Commitment to education',
        'Portfolio submission'
      ],
      color: 'from-green-400 to-emerald-500',
      icon: BookOpen
    }
  ];

  const scholarships = [
    {
      name: 'Photon Excellence Fellowship',
      amount: '$15,000',
      duration: '1 year',
      eligibility: 'Outstanding graduate students',
      deadline: 'March 31, 2024'
    },
    {
      name: 'International Student Grant',
      amount: '$8,000',
      duration: '6 months',
      eligibility: 'International participants',
      deadline: 'May 15, 2024'
    },
    {
      name: 'Research Innovation Award',
      amount: '$5,000',
      duration: 'Project-based',
      eligibility: 'Novel research proposals',
      deadline: 'Rolling basis'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Educational Programs</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to advance knowledge and skills in physics, 
            from foundational courses to cutting-edge research opportunities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.level}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{program.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
                
                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-slate-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-teal-500" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Users className="w-4 h-4 mr-2 text-teal-500" />
                    {program.participants}
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                    {program.startDate}
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Award className="w-4 h-4 mr-2 text-teal-500" />
                    Certificate
                  </div>
                </div>
                
                {/* Modules */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Program Modules:</h4>
                  <div className="space-y-2">
                    {program.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center text-slate-600 text-sm">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                        {module}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Requirements:</h4>
                  <div className="space-y-2">
                    {program.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-slate-600 text-sm">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href="/contact"
                    className={`flex-1 bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}
                  >
                    Apply Now
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scholarships & Financial Aid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in making quality education accessible. Various funding opportunities are available for qualified students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">{scholarship.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Amount:</span>
                    <span className="font-semibold text-teal-600">{scholarship.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration:</span>
                    <span className="font-semibold">{scholarship.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Deadline:</span>
                    <span className="font-semibold text-red-600">{scholarship.deadline}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{scholarship.eligibility}</p>
                <a
                  href="/contact"
                  className="block text-center bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Application Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple steps to join our educational programs and start your journey in advanced physics education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Choose Program</h3>
              <p className="text-slate-600 text-sm">Select the program that best fits your goals and background.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Submit Application</h3>
              <p className="text-slate-600 text-sm">Complete the online application form with required documents.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Review Process</h3>
              <p className="text-slate-600 text-sm">Our admissions committee reviews applications and conducts interviews.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Start Learning</h3>
              <p className="text-slate-600 text-sm">Begin your educational journey with our expert faculty and peers.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Physics Education?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of learners and researchers. Take the next step in your scientific journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
              >
                Request Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;