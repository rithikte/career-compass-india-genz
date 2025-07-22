
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BTechMechanical } from '../components/BTechMechanical';
import { CareerOutcomes } from '../components/CareerOutcomes';
import { HiringCompanies } from '../components/HiringCompanies';
import { GrowthRate } from '../components/GrowthRate';
import { JobDemand } from '../components/JobDemand';
import { BestStates } from '../components/BestStates';
import { AIImpact } from '../components/AIImpact';
import { JobSecurity } from '../components/JobSecurity';
import { SkillGap } from '../components/SkillGap';
import { DegreeRatings } from '../components/DegreeRatings';
import { CertificationStack } from '../components/CertificationStack';
import { PostCertBenefits } from '../components/PostCertBenefits';
import { GovtSupport } from '../components/GovtSupport';
import { India2040 } from '../components/India2040';
import { WhereToLearn } from '../components/WhereToLearn';
import { InterviewSituation } from '../components/InterviewSituation';
import IndustryAdvice from '../components/IndustryAdvice';

const Index = () => {
  const [activeSection, setActiveSection] = useState('btech-mechanical');

  const sections = [
    { id: 'btech-mechanical', title: 'Degree B.Tech Mechanical', component: BTechMechanical },
    { id: 'career-outcomes', title: 'Career Outcomes', component: CareerOutcomes },
    { id: 'hiring-companies', title: 'Hiring Companies', component: HiringCompanies },
    { id: 'growth-rate', title: 'Growth Rate', component: GrowthRate },
    { id: 'job-demand', title: 'Job Demand', component: JobDemand },
    { id: 'best-states', title: 'Best States', component: BestStates },
    { id: 'ai-impact', title: 'AI Impact', component: AIImpact },
    { id: 'job-security', title: 'Job Security', component: JobSecurity },
    { id: 'skill-gap', title: 'Skill Gap', component: SkillGap },
    { id: 'degree-ratings', title: 'Degree Ratings', component: DegreeRatings },
    { id: 'certification-stack', title: 'Certification Stack', component: CertificationStack },
    { id: 'post-cert-benefits', title: 'Post-Cert Benefits', component: PostCertBenefits },
    { id: 'govt-support', title: 'Govt Support', component: GovtSupport },
    { id: 'india-2040', title: 'India 2040', component: India2040 },
    { id: 'interview-situation', title: 'Interview Situation', component: InterviewSituation },
    { id: 'industry-advice', title: '20 Years Industry Advice', component: IndustryAdvice },
    { id: 'where-to-learn', title: 'Where to Learn', component: WhereToLearn },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || BTechMechanical;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors duration-200 ${
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
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default Index;
