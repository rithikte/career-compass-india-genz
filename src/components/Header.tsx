import React from 'react';
import logo from '@/assets/undergraduate-maps-logo.png';

export const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Undergraduate Maps"
            className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 max-w-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};
