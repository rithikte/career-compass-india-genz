import React from 'react';
import { Users } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-foreground text-background">
      <div className="swiss-container py-swiss-2xl">
        <div className="text-center space-y-swiss-lg">
          <h1 className="text-swiss-display font-light tracking-tight">
            Undergraduate Maps
          </h1>
          <div className="flex justify-center items-center text-swiss-body">
            <Users className="w-4 h-4 mr-2" />
            <span>Core Subject Physics • Core Topic Waves & Oscillation • B.Tech Mechanical</span>
          </div>
        </div>
      </div>
    </header>
  );
};