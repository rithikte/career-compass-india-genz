import React from 'react';
import logo from '@/assets/undergraduate-maps-logo.png';

export const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Undergraduate Maps"
            className="w-auto h-28 sm:h-36 md:h-48 lg:h-56 xl:h-64 max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};
