
import React from 'react';
import { Users } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <Logo />
          </div>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Swiss-Style Career Guidance for Indian Undergraduates
          </p>
          <div className="flex justify-center items-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>B.Sc Physics • B.Tech Aerospace • Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
