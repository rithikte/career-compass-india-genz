
import React, { useState } from 'react';
import Seo from "@/components/Seo";
import { Header } from '../components/Header';
import { HomePage } from '../components/HomePage';
import { BTechMechanical } from '../components/BTechMechanical';
import { CareerOutcomes } from '../components/CareerOutcomes';
import { CareerInsights } from '../components/CareerInsights';
import { HiringCompanies } from '../components/HiringCompanies';
import { GrowthRate } from '../components/GrowthRate';
import { JobDemand } from '../components/JobDemand';
import { BestStates } from '../components/BestStates';
import { AIImpact } from '../components/AIImpact';
import { JobSecurity } from '../components/JobSecurity';
import { CertificationStack } from '../components/CertificationStack';
import JobRealityExpectation from '../components/JobRealityExpectation';
import CareerRealityCheck from '../components/CareerRealityCheck';
import JobLifestyle from '../components/JobLifestyle';
import { GovtSupport } from '../components/GovtSupport';
import { India2040 } from '../components/India2040';
import { WhereToLearn } from '../components/WhereToLearn';
import { InterviewSituation } from '../components/InterviewSituation';
import IndustryAdvice from '../components/IndustryAdvice';
import GroundReality from '../components/GroundReality';
import CollegeDetails from '../components/CollegeDetails';
import AboutUs from '../components/AboutUs';
import CoreVsIT from '../components/CoreVsIT';
import { BTechCivil } from '../components/BTechCivil';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', title: 'Home', component: HomePage },
    { id: 'btech-mechanical', title: 'Degree B.Tech Mechanical', component: BTechMechanical },
    { id: 'job-reality', title: 'Job Reality vs Expectation', component: JobRealityExpectation },
    { id: 'career-reality-check', title: 'Career Reality Check', component: CareerRealityCheck },
    { id: 'job-lifestyle', title: 'Job Lifestyle & Stability', component: JobLifestyle },
    { id: 'career-outcomes', title: 'Career Outcomes', component: CareerOutcomes },
    { id: 'career-insights', title: 'Career Insights', component: CareerInsights },
    { id: 'hiring-companies', title: 'Hiring Companies', component: HiringCompanies },
    { id: 'growth-rate', title: 'Growth Rate', component: GrowthRate },
    { id: 'job-demand', title: 'Job Demand', component: JobDemand },
    { id: 'best-states', title: 'Best States', component: BestStates },
    { id: 'ai-impact', title: 'AI Impact', component: AIImpact },
    { id: 'job-security', title: 'Job Security', component: JobSecurity },
    { id: 'certification-stack', title: 'Certification Stack', component: CertificationStack },
    { id: 'govt-support', title: 'Govt Support', component: GovtSupport },
    { id: 'india-2040', title: 'India 2040', component: India2040 },
    { id: 'interview-situation', title: 'Interview Situation', component: InterviewSituation },
    { id: 'core-vs-it', title: 'Why NOT Choose IT Blindly', component: CoreVsIT },
    { id: 'industry-advice', title: '20 Years Industry Advice', component: IndustryAdvice },
    { id: 'where-to-learn', title: 'Where to Learn', component: WhereToLearn },
    { id: 'ground-reality', title: 'Ground Reality for Parents', component: GroundReality },
    { id: 'college-details', title: 'B.Tech – Degree Landing Page', component: CollegeDetails },
    { id: 'about-us', title: 'About Us', component: AboutUs },
    { id: 'btech-civil', title: 'B.Tech Civil Eng', component: BTechCivil },
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
