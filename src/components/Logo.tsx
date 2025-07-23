import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Location Pin with Graduation Cap */}
      <div className="relative mr-4">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Location Pin Shape */}
          <path 
            d="M32 8C22.6 8 15 15.6 15 25C15 38 32 56 32 56S49 38 49 25C49 15.6 41.4 8 32 8Z" 
            fill="hsl(var(--primary))" 
            stroke="white" 
            strokeWidth="2"
          />
          
          {/* Inner Circle Background */}
          <circle 
            cx="32" 
            cy="25" 
            r="12" 
            fill="white"
          />
          
          {/* Graduation Cap */}
          <g transform="translate(24, 17)">
            {/* Cap Base */}
            <path 
              d="M2 8L8 6L14 8L8 10L2 8Z" 
              fill="hsl(var(--primary))"
            />
            {/* Cap Top */}
            <path 
              d="M2 8L14 8L12 12L4 12L2 8Z" 
              fill="hsl(var(--primary))"
            />
            {/* Tassel */}
            <circle 
              cx="13" 
              cy="9" 
              r="1" 
              fill="hsl(var(--primary))"
            />
            <line 
              x1="13" 
              y1="10" 
              x2="13" 
              y2="14" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
      
      {/* Text Logo */}
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Undergraduate Maps
        </h1>
      </div>
    </div>
  );
};