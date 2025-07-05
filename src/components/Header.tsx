import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-8 text-center border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/Photon.jpg" 
            alt="Photon Scientific Centre Logo" 
            className="w-20 h-20 mr-4 rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-500 mb-2 font-heading tracking-tight">
              The Photon Scientific Centre
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 mb-2">
              for Natural Sciences and Metaphysics
            </h2>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl text-teal-500 mt-4" dir="rtl">
          مركز فوتون للعلوم الطبيعية والميتافيزيقا
        </h2>
      </div>
    </header>
  );
};

export default Header;