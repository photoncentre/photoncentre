import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'Breakthrough in Quantum Computing Research at Photon SCNSM',
      excerpt: 'Our research team has achieved a significant milestone in quantum information processing, developing new algorithms that could revolutionize computational physics.',
      content: 'The Photon Scientific Centre has announced a major breakthrough in quantum computing research...',
      date: '2024-02-28',
      author: 'Dr. Sarah Ahmed',
      category: 'Research',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'New International Collaboration with European Research Centers',
      excerpt: 'Photon SCNSM announces strategic partnerships with leading European institutions to advance collaborative research in theoretical physics.',
      content: 'We are excited to announce new collaborative agreements with several prestigious European research centers...',
      date: '2024-02-25',
      author: 'Prof. Mohamed Hassan',
      category: 'Collaboration',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      featured: false
    },
    {
      id: 3,
      title: 'Spring 2024 Educational Programs Registration Opens',
      excerpt: 'Registration is now open for our comprehensive spring semester programs, including advanced physics courses and computational workshops.',
      content: 'We are pleased to announce that registration for our Spring 2024 educational programs is now open...',
      date: '2024-02-20',
      author: 'Dr. Fatima Al-Zahra',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Photon SCNSM Hosts International Physics Symposium',
      excerpt: 'Over 200 researchers from 30 countries gathered for our annual international symposium on modern physics and emerging technologies.',
      content: 'The annual International Physics Symposium hosted by Photon SCNSM was a tremendous success...',
      date: '2024-02-15',
      author: 'Dr. Ahmed Khalil',
      category: 'Events',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'New Publication in Nature Physics on Dark Matter Research',
      excerpt: 'Our astrophysics team publishes groundbreaking research on dark matter detection methods in the prestigious Nature Physics journal.',
      content: 'We are proud to announce that our research on novel dark matter detection methods has been published...',
      date: '2024-02-10',
      author: 'Dr. Omar Mansour',
      category: 'Research',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Student Achievement: International Physics Olympiad Success',
      excerpt: 'Students from our educational programs achieve outstanding results at the International Physics Olympiad, bringing home multiple medals.',
      content: 'We are delighted to share the exceptional achievements of our students at this year\'s International Physics Olympiad...',
      date: '2024-02-05',
      author: 'Dr. Layla Ibrahim',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      featured: false
    }
  ];

  const categories = ['all', 'Research', 'Education', 'Collaboration', 'Events'];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">News & Events</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, research breakthroughs, and events at Photon Scientific Centre.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-gray-300 hover:border-teal-500 hover:text-teal-500'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {featuredArticle.category}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-lg opacity-90 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm opacity-80 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm inline-flex items-center gap-1 transition-colors">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Stay Updated</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, research updates, and event announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;