import React, { useState } from 'react';
import { Play, Calendar, User, Youtube, Facebook } from 'lucide-react';

const Archive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const videos = [
    {
      id: 1,
      title: 'Seminar 10: An overview of condensed matter physics and density function theory',
      speaker: 'Dr. Musa A. M. Hussien',
      date: 'December 16, 2023',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/hWdKHTveEUQ/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/hWdKHTveEUQ',
      facebookUrl: 'https://www.facebook.com/Photon.SCNSM/videos/668538618801087',
      description: 'A comprehensive overview of condensed matter physics from theoretical and computational perspectives, focusing on the complexity of materials with numerous components and their interactions.'
    },
    {
      id: 2,
      title: 'Seminar 13: Electromagnetic Theory and Maxwell\'s Equations',
      speaker: 'Prof. Arbab Ibrahim',
      date: 'January 13, 2024',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/NNji_Egh0Ec/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/NNji_Egh0Ec',
      facebookUrl: 'https://www.facebook.com/Photon.SCNSM/videos/1210213166602420',
      description: 'An exploration of electromagnetic theory\'s completeness and its potential connections to other physical theories through modifications of Maxwell\'s equations.'
    },
    {
      id: 3,
      title: 'Seminar 1: The Similarities Between Gravity and Electromagnetism',
      speaker: 'Prof. Arbab Ibrahim',
      date: 'September 6, 2023',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/mRwTBmUp4aY/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/mRwTBmUp4aY',
      facebookUrl: 'https://www.facebook.com/Photon.SCNSM/videos/653607096744300',
      description: 'An insightful exploration of the fascinating parallels between gravity and electromagnetism, examining how these fundamental forces shape our universe.'
    },
    {
      id: 4,
      title: 'Seminar 2: Unification of gauge coupling constants beyond the standard model',
      speaker: 'Dr. Ammar Ibrahim',
      date: 'October 7, 2023',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/7uBJbUXPgVs/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/7uBJbUXPgVs',
      facebookUrl: 'https://www.facebook.com/61551543201104/videos/844712177286570',
      description: 'A deep dive into particle physics, exploring atomic nucleus components, their interactions, and their relationship with nature\'s four fundamental forces.'
    },
    {
      id: 5,
      title: 'Seminar 8: Extraction physics from future surveys with artificial intelligence',
      speaker: 'Dr. Sultan Hassan',
      date: 'November 25, 2023',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/zx08QVpEX3E/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/zx08QVpEX3E',
      facebookUrl: 'https://fb.watch/oycAKTBrpu/',
      description: 'Exploring how AI algorithms and supercomputers are revolutionizing scientific research, enabling data extraction and predictions based on past research data.'
    },
    {
      id: 6,
      title: 'Seminar 1, S2: The Role of Renewable Energy in Development',
      speaker: 'Prof. Adel Haseep',
      date: 'February 15, 2025',
      category: 'seminar',
      thumbnail: 'https://img.youtube.com/vi/xZUCsZPzX_g/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/xZUCsZPzX_g',
      facebookUrl: 'https://www.facebook.com/watch/?v=1173610900795521',
      description: 'A comprehensive exploration of renewable energy\'s role in sustainable development, stability, and environmental protection, featuring expert discussions and insights.'
    }
  ];

  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'lecture', label: 'Lectures' },
    { id: 'seminar', label: 'Seminars' },
    { id: 'workshop', label: 'Workshops' }
  ];

  const handlePWFSudanClick = () => {
    window.location.href = '/archive/pwf-sudan-seminars';
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Content Archive</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Access our library of recorded lectures, seminars, and workshops
          </p>

          {/* Featured PWF-Sudan Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">🌟</span>
              <h2 className="text-3xl font-bold">Featured Collection</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Physics Without Frontiers - Sudan</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive archive of the PWF-Sudan seminar series featuring world-class scientists covering diverse fields from environmental science to cosmology.
            </p>
            <a
              href="/archive/pwf-sudan-seminars"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore PWF-Sudan Seminars
              <Play className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.youtube.com/@PhotonSCNSM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Youtube size={20} />
              YouTube Channel
            </a>
            <a
              href="https://www.facebook.com/PhotonSCNSM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Facebook size={20} />
              Facebook Page
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-blue-900 border-2 border-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
          
          {/* PWF-Sudan Special Button */}
          <button
            onClick={handlePWFSudanClick}
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg transform hover:scale-105 flex items-center gap-2"
          >
            🌟 PWF-Sudan
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Video Thumbnail */}
              <div className="relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors transform hover:scale-110"
                  >
                    <Play size={24} />
                  </a>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{video.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{video.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-6 leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Youtube size={16} />
                    YouTube
                  </a>
                  <a
                    href={video.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Facebook size={16} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No content found</h3>
            <p className="text-gray-500">Try selecting a different filter or check back later for new content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;