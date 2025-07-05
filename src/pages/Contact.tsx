import React from 'react';
import { Mail, MapPin, Youtube, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for inquiries, collaborations, or to learn more about our services.
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-6">Send us your questions or proposals</p>
                
                <a
                  href="mailto:info3photon@gmail.com"
                  className="text-blue-600 hover:text-green-600 transition-colors font-semibold text-lg"
                >
                  info3photon@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Location</h3>
                <p className="text-gray-600 mb-2">Khartoum, Sudan</p>
                <p className="text-gray-500 text-sm">Science Complex Building</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Follow us on social media to stay updated with our latest activities and discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Photon.SCNSM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Facebook className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">Facebook</h3>
              <p className="text-gray-600">Follow us for updates and events</p>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@photonscnsm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                <Youtube className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-red-600 transition-colors">YouTube</h3>
              <p className="text-gray-600">Watch our lectures and tutorials</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/107318450"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                <Linkedin className="w-10 h-10 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">LinkedIn</h3>
              <p className="text-gray-600">Connect with us professionally</p>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a researcher, student, or institution, we'd love to hear from you and explore potential collaborations.
            </p>
            <a
              href="mailto:info3photon@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Send us an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;