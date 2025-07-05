import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vision" className="text-gray-300 hover:text-green-400 transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/archive" className="text-gray-300 hover:text-green-400 transition-colors">
                  Events Archive
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@PhotonSCNSM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/PhotonSCNSM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/107318450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Photon SCNSM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;