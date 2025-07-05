import React from 'react';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Vision Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Vision</h1>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 shadow-xl">
            <p className="text-xl text-gray-800 leading-relaxed text-center">
              To foster a deep appreciation for natural sciences, with a particular focus on physics, astronomy, 
              and their transcendent aspects. We're here to illuminate the wonders of the universe and explore 
              the metaphysical frontiers of knowledge.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Rocket className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-5xl font-bold text-blue-900 mb-6">Our Mission</h2>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <p className="text-xl text-gray-800 leading-relaxed mb-8 text-center">
              To bridge the gap between experts in these fields, passionate individuals, and aspiring students. 
              Through a diverse range of activities and specialized training courses, we aim to facilitate 
              knowledge sharing, ignite curiosity, and inspire the next generation of scientific pioneers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-800">Facilitate knowledge sharing across scientific disciplines</p>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-800">Ignite curiosity in natural sciences and metaphysics</p>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-800">Inspire the next generation of scientific pioneers</p>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-800">Bridge the gap between experts and aspiring students</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section>
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Join Our Journey</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white shadow-xl">
            <Lightbulb className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <p className="text-xl leading-relaxed mb-8">
              Join us on this fascinating journey of discovery, exploration, and enlightenment. 
              Together, we can unravel the mysteries of the cosmos and expand the horizons of human understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/team"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;