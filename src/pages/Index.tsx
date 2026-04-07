
import React, { useState } from 'react';
import Seo from "@/components/Seo";
import { Header } from '../components/Header';
import { HomePage } from '../components/HomePage';
import ECEEmbeddedSystems from '../components/ECEEmbeddedSystems';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', title: 'Home', component: HomePage },
    { id: 'ece-embedded', title: 'ECE – Embedded Systems', component: ECEEmbeddedSystems },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || HomePage;

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title="Undergraduate Maps — Home" description="Pick the right degree with clear career outcomes." />
      <Header />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex overflow-x-auto py-3 sm:py-4 space-x-4 sm:space-x-6 lg:space-x-8 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="animate-fade-in">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default Index;
