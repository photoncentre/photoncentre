import React from 'react';
import { Atom, Telescope, Microscope, Cpu, Zap, Globe, Users, BookOpen } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      icon: Atom,
      title: 'Theoretical Physics',
      description: 'Advancing our understanding of fundamental physics through theoretical research and mathematical modeling.',
      topics: ['Quantum Field Theory', 'General Relativity', 'Particle Physics', 'String Theory'],
      publications: 15,
      researchers: 8,
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Telescope,
      title: 'Astrophysics & Cosmology',
      description: 'Exploring the universe from stellar evolution to the large-scale structure of the cosmos.',
      topics: ['Dark Matter', 'Black Holes', 'Galaxy Formation', 'Cosmic Microwave Background'],
      publications: 12,
      researchers: 6,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Microscope,
      title: 'Condensed Matter Physics',
      description: 'Investigating the properties of matter and materials at the quantum and macroscopic scales.',
      topics: ['Quantum Materials', 'Superconductivity', 'Nanotechnology', 'Phase Transitions'],
      publications: 18,
      researchers: 10,
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Computational Physics',
      description: 'Using advanced computational methods to solve complex physical problems and analyze data.',
      topics: ['Machine Learning', 'Numerical Simulations', 'Data Analysis', 'High-Performance Computing'],
      publications: 10,
      researchers: 7,
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Energy & Environment',
      description: 'Developing sustainable energy solutions and understanding environmental physics.',
      topics: ['Solar Energy', 'Energy Storage', 'Climate Modeling', 'Renewable Technologies'],
      publications: 8,
      researchers: 5,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Metaphysics & Philosophy',
      description: 'Exploring the philosophical foundations of physics and the nature of reality.',
      topics: ['Consciousness Studies', 'Philosophy of Science', 'Quantum Consciousness', 'Reality Theory'],
      publications: 6,
      researchers: 4,
      color: 'from-rose-400 to-red-500'
    }
  ];

  const collaborations = [
    {
      institution: 'CERN',
      country: 'Switzerland',
      focus: 'Particle Physics Research',
      status: 'Active'
    },
    {
      institution: 'MIT',
      country: 'United States',
      focus: 'Quantum Computing',
      status: 'Active'
    },
    {
      institution: 'University of Cambridge',
      country: 'United Kingdom',
      focus: 'Theoretical Physics',
      status: 'Active'
    },
    {
      institution: 'Max Planck Institute',
      country: 'Germany',
      focus: 'Astrophysics',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Research Areas</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our research spans multiple disciplines in physics and related fields, 
            from fundamental theoretical work to applied research with real-world impact.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{area.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Research Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-slate-500 text-sm">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {area.publications} Publications
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {area.researchers} Researchers
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* International Collaborations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">International Collaborations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We work with leading institutions worldwide to advance scientific knowledge and foster global cooperation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                    {collab.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{collab.institution}</h3>
                <p className="text-slate-500 text-sm mb-3">{collab.country}</p>
                <p className="text-slate-600 text-sm">{collab.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Research Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our research contributes to scientific advancement and has real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">69+</div>
              <div className="text-lg text-slate-600">Research Publications</div>
              <div className="text-sm text-slate-500 mt-2">In peer-reviewed journals</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">40+</div>
              <div className="text-lg text-slate-600">Active Researchers</div>
              <div className="text-sm text-slate-500 mt-2">Faculty and graduate students</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">15+</div>
              <div className="text-lg text-slate-600">International Partners</div>
              <div className="text-sm text-slate-500 mt-2">Collaborative institutions</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Research Community</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a student, researcher, or institution, we welcome collaboration 
              and participation in our research programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Collaborate With Us
              </a>
              <a
                href="/programs"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
              >
                View Research Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;