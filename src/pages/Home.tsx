import React from 'react';
import { Calendar, Users, BookOpen, Globe, ArrowRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const upcomingEvents = [
    {
      date: '2024-03-15',
      title: 'Quantum Mechanics in Modern Physics',
      speaker: 'Dr. Sarah Ahmed',
      time: '14:00 GMT',
      type: 'Seminar'
    },
    {
      date: '2024-03-22',
      title: 'AI Applications in Astrophysics',
      speaker: 'Prof. Mohamed Hassan',
      time: '15:30 GMT',
      type: 'Workshop'
    },
    {
      date: '2024-03-29',
      title: 'Renewable Energy Technologies',
      speaker: 'Dr. Fatima Al-Zahra',
      time: '13:00 GMT',
      type: 'Lecture'
    }
  ];

  const researchAreas = [
    {
      title: 'Theoretical Physics',
      description: 'Quantum mechanics, relativity, and fundamental particle physics',
      icon: '⚛️',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Astrophysics',
      description: 'Stellar evolution, cosmology, and observational astronomy',
      icon: '🌌',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Condensed Matter',
      description: 'Materials science, nanotechnology, and quantum materials',
      icon: '🔬',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Computational Physics',
      description: 'Numerical simulations, machine learning, and data analysis',
      icon: '💻',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const latestNews = [
    {
      date: '2024-02-28',
      title: 'New Research Collaboration with International Universities',
      excerpt: 'Photon SCNSM announces partnerships with leading institutions worldwide...',
      category: 'Collaboration'
    },
    {
      date: '2024-02-25',
      title: 'Breakthrough in Quantum Computing Research',
      excerpt: 'Our team publishes groundbreaking results in quantum information processing...',
      category: 'Research'
    },
    {
      date: '2024-02-20',
      title: 'Spring 2024 Educational Programs Now Open',
      excerpt: 'Registration is now open for our comprehensive physics and mathematics courses...',
      category: 'Education'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <img
              src="/media/images/Photon.jpg"
              alt="Photon Scientific Centre"
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Advancing Scientific Knowledge
            <span className="text-teal-500 block">Through Research & Education</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A leading center for natural sciences and metaphysics, fostering innovation, 
            collaboration, and the next generation of scientific minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/research"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Research
            </a>
            <a
              href="/programs"
              className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Research Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exploring the frontiers of science across multiple disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/research"
              className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
            >
              View All Research Areas
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Events List */}
            <div className="lg:w-2/3">
              <div className="flex items-center mb-8">
                <Calendar className="w-8 h-8 text-teal-500 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Upcoming Events</h2>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.type}
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <div className="text-slate-500 text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                    <p className="text-slate-600">Speaker: {event.speaker}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="/archive"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
                >
                  View All Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Latest News */}
            <div className="lg:w-1/3">
              <div className="flex items-center mb-8">
                <BookOpen className="w-8 h-8 text-teal-500 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Latest News</h2>
              </div>
              
              <div className="space-y-6">
                {latestNews.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {news.category}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{news.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-3">{news.excerpt}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="/news"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
                >
                  Read All News
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in the scientific community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">International Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Seminars Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-12">
            <Globe className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Join Our Global Community</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with researchers, students, and institutions worldwide. 
              Be part of the next breakthrough in science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/programs"
                className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;