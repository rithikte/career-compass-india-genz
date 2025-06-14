
import React from 'react';
import { Shield, Users, TrendingUp, Globe, Flag, Award } from 'lucide-react';

const supportReasons = [
  {
    icon: Shield,
    title: 'National Security',
    description: 'Critical to defense, satellites, surveillance systems',
    impact: 'Strategic Defense Capability',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Users,
    title: 'High Job Potential',
    description: 'Millions of jobs across R&D, drones, data analytics',
    impact: '2+ Million Jobs by 2040',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: TrendingUp,
    title: 'GDP Growth Driver',
    description: 'Boosts economy through exports and infrastructure',
    impact: '+2.5% GDP Contribution',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Globe,
    title: 'Global Leadership',
    description: 'ISRO, HAL, DRDO elevate India\'s global standing',
    impact: 'Space Superpower Status',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Flag,
    title: 'Tech Innovation',
    description: 'Aligned with AI, Atmanirbhar Bharat, Drone Policy 2021',
    impact: 'Self-Reliant Innovation',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Award,
    title: 'Export Excellence',
    description: 'Aerospace exports contributing to trade balance',
    impact: '$5B+ Export Target',
    color: 'from-indigo-600 to-indigo-700'
  }
];

const govtInitiatives = [
  {
    initiative: 'Drone Policy 2021',
    budget: '₹120 Cr',
    impact: 'PLI scheme for drone manufacturing',
    beneficiaries: '1000+ startups'
  },
  {
    initiative: 'Skill India - Aerospace',
    budget: '₹500 Cr',
    impact: 'Training centers across India',
    beneficiaries: '50,000 students/year'
  },
  {
    initiative: 'ISRO Workforce Expansion',
    budget: '₹2000 Cr',
    impact: 'Space missions & satellite programs',
    beneficiaries: '25,000 engineers'
  },
  {
    initiative: 'Defense Production',
    budget: '₹1500 Cr',
    impact: 'Indigenous aircraft manufacturing',
    beneficiaries: '1 Lakh jobs'
  }
];

export const GovtSupport = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Government Support & Vision
        </h2>
        <p className="text-xl text-gray-600">
          Why Indian Government is Investing Heavily in Aerospace
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {supportReasons.map((reason, index) => (
          <div
            key={reason.title}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className={`bg-gradient-to-r ${reason.color} text-white p-4 rounded-lg mb-4`}>
              <reason.icon className="w-8 h-8 mx-auto" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
            <p className="text-gray-600 mb-4">{reason.description}</p>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-semibold text-gray-600">IMPACT</div>
              <div className="text-lg font-bold text-slate-900">{reason.impact}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Major Government Initiatives & Budgets
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {govtInitiatives.map((initiative, index) => (
            <div
              key={initiative.initiative}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4">{initiative.initiative}</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Budget Allocation</span>
                  <span className="font-bold text-green-600">{initiative.budget}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Key Impact</span>
                  <span className="font-semibold text-blue-600 text-right">{initiative.impact}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Beneficiaries</span>
                  <span className="font-bold text-purple-600">{initiative.beneficiaries}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Flag className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🇮🇳 Atmanirbhar Bharat Vision</h3>
          <p className="text-orange-200 text-lg mb-6">
            India aims to become a global aerospace manufacturing hub by 2030
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-orange-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">₹4000 Cr</div>
              <div className="text-orange-200">Total Investment</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">3+ Million</div>
              <div className="text-red-200">Jobs Created</div>
            </div>
            <div className="bg-orange-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">$10B</div>
              <div className="text-orange-200">Export Target</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-red-200">Training Centers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Student Support Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">₹50,000</div>
              <div className="text-blue-200">Annual Scholarship</div>
              <div className="text-xs text-blue-300">For aerospace students</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">100%</div>
              <div className="text-indigo-200">Placement Guarantee</div>
              <div className="text-xs text-indigo-300">In PSUs & defense</div>
            </div>
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">Free</div>
              <div className="text-blue-200">DGCA Training</div>
              <div className="text-xs text-blue-300">At govt centers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
