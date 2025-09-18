import React from 'react';
import { Users } from 'lucide-react';
import { Logo } from './Logo';
export const Header = () => {
  return <header className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Undergraduate Maps</p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0 text-blue-200">
            <div className="flex items-center text-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">Core Subject Physics • Core Topic Waves & Oscillation • B.Tech Mechanical</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};