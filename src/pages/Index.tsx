import React, { useState } from 'react';
import Seo from "@/components/Seo";
import { Header } from '../components/Header';
import { HomePage } from '../components/HomePage';
import EmbeddedProductEngineering from '../components/EmbeddedProductEngineering';
import PremiumHomePage from '../components/PremiumHomePage';
import UGHomepage from '../components/UGHomepage';
import SearchDegree from '../components/SearchDegree';
import DomainSubjects from '../components/DomainSubjects';
import DomainChapters from '../components/DomainChapters';
import RoleProfile from '../components/RoleProfile';
import DomainExplore from '../components/DomainExplore';
import EcosystemGrowth from '../components/EcosystemGrowth';
import CareerStabilityCheck from '../components/CareerStabilityCheck';
import FresherDailyWork from '../components/FresherDailyWork';
import EntryBarrierVerdict from '../components/EntryBarrierVerdict';
import WhereFreshersGetHired from '../components/WhereFreshersGetHired';
import HowSubjectsAffectRealWork from '../components/HowSubjectsAffectRealWork';





const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', title: 'Home', component: HomePage },
    { id: 'embedded-product', title: 'Embedded Product Engineering', component: EmbeddedProductEngineering },
    { id: 'home-page', title: 'Home Page', component: PremiumHomePage },
    { id: 'ug-homepage', title: 'UG Homepage', component: () => <UGHomepage onExplore={() => setActiveSection('home')} /> },
    { id: 'search-degree', title: 'Search Degree', component: SearchDegree },
    { id: 'domain-subjects', title: 'Domain subjects', component: DomainSubjects },
    { id: 'domain-chapters', title: 'Domain chapters', component: DomainChapters },
    { id: 'role-profile', title: 'Role Profile', component: () => <RoleProfile onExplore={() => setActiveSection('domain-explore')} /> },
    { id: 'domain-explore', title: 'Domain Explore', component: DomainExplore },
    { id: 'ecosystem-growth', title: 'Ecosystem Growth', component: EcosystemGrowth },
    { id: 'career-stability', title: 'Career Stability Check', component: CareerStabilityCheck },
    { id: 'fresher-daily-work', title: 'What Freshers Actually Do', component: FresherDailyWork },
    { id: 'entry-barrier-verdict', title: 'Entry Barrier Verdict', component: EntryBarrierVerdict },
    { id: 'where-freshers-get-hired', title: 'Where Freshers Get Hired', component: WhereFreshersGetHired },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || HomePage;
  const fullBleedIds = new Set(['ug-homepage', 'search-degree', 'domain-subjects', 'domain-chapters', 'role-profile', 'domain-explore', 'ecosystem-growth', 'career-stability', 'fresher-daily-work', 'entry-barrier-verdict', 'where-freshers-get-hired']);
  const isFullBleed = fullBleedIds.has(activeSection);

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
      <main className={isFullBleed ? 'w-full' : 'max-w-7xl mx-auto px-[0.7rem] sm:px-[1.05rem] lg:px-[1.4rem] py-6 sm:py-8'}>
        <div className="animate-fade-in">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default Index;
