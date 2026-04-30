import React from 'react';
import logo from '@/assets/undergraduate-maps-logo.png';

export const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-[0.7rem] sm:px-[1.05rem] lg:px-[1.4rem] py-[1.4rem] sm:py-[2.1rem] md:py-[2.8rem] lg:py-[3.5rem]">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Undergraduate Maps"
            style={{ transform: 'scaleX(1.5) scaleY(1.3)', transformOrigin: 'center' }}
            className="w-auto h-28 sm:h-36 md:h-48 lg:h-56 xl:h-64 max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};
