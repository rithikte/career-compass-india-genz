import React from 'react';
import logo from '@/assets/ug-logo.png';

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Under Graduate Maps"
            className="w-auto h-12 sm:h-16 md:h-20 lg:h-24 max-w-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};
