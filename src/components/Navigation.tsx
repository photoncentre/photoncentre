import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/vision', label: 'Vision & Mission' },
    { path: '/research', label: 'Research Areas' },
    { path: '/programs', label: 'Programs' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Our Team' },
    { path: '/archive', label: 'Archive' },
    { path: '/news', label: 'News & Events' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-teal-500 font-heading flex items-center">
            <img src="/media/images/Photon.jpg" alt="Photon" className="w-8 h-8 mr-2 rounded-full" />
            Photon SCNSM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-colors duration-300 text-sm ${
                  isActive(item.path)
                    ? 'text-teal-500'
                    : 'text-slate-700 hover:text-teal-500'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-teal-500 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-teal-500 bg-teal-50'
                    : 'text-slate-700 hover:text-teal-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;