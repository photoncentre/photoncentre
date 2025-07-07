import React from 'react';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. Elbasher M. E. Ahmed',
      role: 'Founder and Director',
      affiliation: 'African Institute for Mathematical Sciences (AIMS)',
      email: 'elbasher@aims.ac.za',
      image: '/public/media/images/team/Basher_Mohammed.png',
      linkedin: 'https://www.linkedin.com/in/elbasher-mohammed-40b056162',
      website: 'Dr Basher.html'
    },
    {
      name: 'Dr. Abubakr Y. A. Ibrahim',
      role: 'General Manager',
      affiliation: 'PhD, Physics Department, Institute of Space Sciences (ICE-CSIC), Autonomous University of Barcelona (UAB), Spain',
      email: 'abubakryagob@gmail.com',
      website: 'https://www.abubakryagob.com/',
      image: '/public/media/images/team/Abubakr_Ibrahim.png',
      linkedin: 'https://www.linkedin.com/in/abubakr-ibrahim-05505280'
    },
    {
      name: 'Dr. Musa A. M. Hussien',
      role: 'General Consultant',
      affiliation: 'Molecular Foundry and Materials Sciences Division, Lawrence Berkeley National Laboratory & Department of Physics, Omdurman Islamic University',
      email: 'malnourh@gmail.com',
      image: '/public/media/images/team/Musa_Alnour.jpg',
      linkedin: 'https://www.linkedin.com/in/musa-hussien-80b08b76'
    },
    { 
      name: 'Dr. Elaf Musa',
      role: 'General Consultant',
      affiliation: 'Postdoctoral Researcher @ DESY | PETRA IV',
      affiliation2: 'University of Hamburg',
      email: 'physics2harmony@gmail.com',
      image: '/public/media/images/team/X.png',
      linkedin: 'https://www.linkedin.com/in/elaf-musa',
      researchgate: 'https://www.researchgate.net/profile/Elaf_Musa2'
    }
  ];

  const team = [
    {
      name: 'Alaa Mohammed Idris Bakhit',
      role: 'Academic Coordinator',
      affiliation: 'Faculty of Science, University of Khartoum',
      image: '/public/media/images/team/Alaa.jpg'
    },
    {
      name: 'Ebtihal Siraj M.O.',
      role: 'Communication and designing',
      affiliation: '',
      image: '/public/media/images/team/Ebtihal.jpg',
    },
    {
      name: 'Maha M. Mousa',
      role: 'Services Consultant',
      affiliation: 'Faculty of Science, University of Khartoum',
      image: '/public/media/images/team/Maha.png',
    },
    {
      name: 'Mohammed Yahya',
      role: 'Conferences & Workshops Director',
      affiliation: 'Computer Science',
      image: '/public/media/images/team/Mohammed_Yahya.jpg',
    },
    {
      name: 'Hazim Elshiekh',
      role: 'Scientific Projects Manager',
      affiliation: 'Sudan University of Science and Technology',
      image: '/public/media/images/team/Hazim_Elshiekh.jpg',
    },
    {
      name: 'Gotayba A. Mohamed',
      role: 'Student Activities',
      affiliation: 'Sudan University of Science and Technology',
      image: '/public/media/images/team/Gotyba.png',
    },
    {
      name: 'Rayan ImadEldien Hussein Elfaki',
      role: 'Student Activities',
      affiliation: 'Student Activities',
      image: '/public/media/images/team/X.png',
    },
    {
      name: 'Hiba Hassan Hashim Erwa',
      role: 'Student Activities',
      affiliation: 'Computer Science',
      image: '/public/media/images/team/X.png',
    },
  
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Leadership Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Leadership</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the visionaries guiding Photon SCNSM towards excellence in natural sciences and metaphysics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-green-100 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-2 hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-green-600 font-semibold mb-3 text-lg">{member.role}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.affiliation}</p>
                  
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-green-600 transition-colors text-sm mb-6 inline-block"
                  >
                    {member.email}
                  </a>
                  
                  {member.website && (
                    <div className="mb-6">
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-green-600 transition-colors text-sm"
                      >
                        {member.website}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Mail size={18} />
                    </a>
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated team of professionals working together to advance scientific knowledge and understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-green-100 shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.affiliation}</p>
                  
                  <div className="flex justify-center mt-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                      <Linkedin size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;