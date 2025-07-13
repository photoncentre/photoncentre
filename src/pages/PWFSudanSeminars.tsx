import React, { useState, useEffect } from 'react';
import { Calendar, User, ExternalLink, ArrowRight, MapPin } from 'lucide-react';

interface Seminar {
  topic: string;
  title: string;
  speaker: string;
  affiliation: string;
  datetime: string;
  abstract: string;
  keywords: string[];
  indico_link: string;
  screenshot_image: string;
}

const PWFSudanSeminars: React.FC = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSeminars = async () => {
      try {
        const response = await fetch('/media/documents/pwf_sudan_seminars.json');
        const data = await response.json();
        // Sort by date descending (most recent first)
        const sortedData = data.sort((a: Seminar, b: Seminar) => {
          const dateA = new Date(a.datetime.split(',')[0]);
          const dateB = new Date(b.datetime.split(',')[0]);
          return dateB.getTime() - dateA.getTime();
        });
        setSeminars(sortedData);
      } catch (error) {
        console.error('Error loading seminars:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSeminars();
  }, []);

  const formatDateTime = (datetime: string) => {
    // Extract date and time from the format "14 July 2025, 11:00 AM – 12:30 PM (GMT+2:00) Khartoum"
    const parts = datetime.split(',');
    const datePart = parts[0].trim();
    const timePart = parts[1]?.trim() || '';
    return { date: datePart, time: timePart };
  };

  const getTopicColor = (topic: string) => {
    const colors = {
      'Environmental Science': 'from-green-400 to-emerald-500',
      'Experimental Physics': 'from-blue-400 to-indigo-500',
      'Condensed Matter Physics': 'from-purple-400 to-pink-500',
      'Theoretical Physics': 'from-teal-400 to-cyan-500',
      'Astronomy': 'from-yellow-400 to-orange-500',
      'Cosmology': 'from-indigo-400 to-purple-500'
    };
    return colors[topic as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading seminars...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Physics Without Frontiers
            </span>
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">PWF-Sudan: Full Seminar Series</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive archive of all seminars from the Physics Without Frontiers - Sudan initiative. 
            Explore talks by world-class scientists covering diverse fields from environmental science to cosmology.
          </p>
          
          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="https://indico.ictp.it/event/11030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🌍 Explore the Full PWF-Sudan Initiative on ICTP
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">{seminars.length}</div>
            <div className="text-slate-600">Total Seminars</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">6</div>
            <div className="text-slate-600">Research Areas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">6 weeks</div>
            <div className="text-slate-600">Duration</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">Global</div>
            <div className="text-slate-600">Reach</div>
          </div>
        </div>

        {/* Seminars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {seminars.map((seminar, index) => {
            const { date, time } = formatDateTime(seminar.datetime);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={seminar.screenshot_image}
                    alt={seminar.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      (e.target as HTMLImageElement).src = '/media/images/Photon.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${getTopicColor(seminar.topic)} px-3 py-1 rounded-full text-white text-xs font-semibold`}>
                      {seminar.topic}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date and Time */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      GMT+2 Khartoum
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 leading-tight">
                    {seminar.title}
                  </h3>

                  {/* Speaker */}
                  <div className="flex items-start gap-2 mb-4">
                    <User className="w-4 h-4 text-slate-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-700">{seminar.speaker}</p>
                      <p className="text-sm text-slate-500">{seminar.affiliation}</p>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {seminar.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {seminar.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">
                      {time}
                    </span>
                    {seminar.indico_link ? (
                      <a
                        href={seminar.indico_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Interested in More?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Explore more seminars, workshops, and collaborations at the Photon Scientific Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/news"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300"
              >
                View All News
              </a>
              <a
                href="/archive"
                className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                Browse Archive
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWFSudanSeminars;
