import React from 'react';
import { Shield, Building2, AlertTriangle, MapPin, TrendingUp, Users, Plane, Wrench, Radio } from 'lucide-react';
import SourceBadge from './SourceBadge';

const howItWorksData = [
  { layer: 'Layer 1 – Policy Support', whatGovtDoes: 'Makes rules & incentives', simpleMeaning: 'Brings companies to India' },
  { layer: 'Layer 2 – Infrastructure Push', whatGovtDoes: 'Builds airports, parks, corridors', simpleMeaning: 'Companies set up factories & MROs' },
  { layer: 'Layer 3 – No Guarantees', whatGovtDoes: 'No job/salary promise', simpleMeaning: 'Skills decide hiring' },
];

const centralGovtData = [
  { section: 'Main Role of Central Government', meaning: 'Makes national rules and gives large funding to grow aviation & defence industries across India' },
  { section: 'Key Policies', meaning: 'Make in India, Defence Indigenisation Policy, Drone Rules, UDAN, Skill India' },
  { section: 'Money Power', meaning: 'Very large defence budget (₹6+ lakh crore in 2025) supports aircraft, defence systems, and aviation manufacturing' },
  { section: 'Industry Target', meaning: 'Make India self-reliant and grow aerospace & defence industry at national level' },
  { section: 'How this helps Aerospace Engineers', meaning: 'More aircraft & defence projects → more design and manufacturing jobs', icon: Plane, color: 'text-blue-600' },
  { section: 'How this helps Avionics Engineers', meaning: 'More defence electronics & systems → more avionics and testing jobs', icon: Radio, color: 'text-purple-600' },
  { section: 'How this helps AME', meaning: 'More airports & flights → more aircraft maintenance (MRO) jobs', icon: Wrench, color: 'text-amber-600' },
  { section: 'Foreign companies attracted (2020–2025)', meaning: '≈ 90–120 global aerospace, defence & aviation companies entered India' },
  { section: 'Official Sources', meaning: 'Invest India, PIB (Defence & Civil Aviation MoUs), Aero India MoU releases' },
];

const noGuarantees = [
  '❌ No job guarantee',
  '❌ No salary guarantee', 
  '❌ No placement guarantee'
];

const stateData = [
  {
    rank: '🥇',
    state: 'Telangana',
    color: 'from-amber-500 to-yellow-600',
    data: [
      { item: 'Key Policies', value: 'Telangana Aerospace & Defence Policy, Drone Policy' },
      { item: 'Government Goal', value: "Become India's aerospace & defence capital by 2030" },
      { item: 'How this helps aviation jobs', value: 'Aerospace parks + MRO → easier entry-level hiring' },
      { item: 'Foreign companies attracted (2020–2025)', value: '≈25–30 aerospace & defence firms' },
      { item: 'Official Sources', value: 'Invest Telangana, PIB, Aero India MoU releases' },
    ],
    simpleMeaning: 'Best fresher-friendly aviation state today'
  },
  {
    rank: '🥈',
    state: 'Tamil Nadu',
    color: 'from-gray-400 to-gray-500',
    data: [
      { item: 'Key Policies', value: 'TN Defence Corridor Policy' },
      { item: 'Government Target', value: '₹75,000 cr defence & aerospace investment by 2032' },
      { item: 'How this helps aviation jobs', value: 'Manufacturing + MRO → strong AME demand' },
      { item: 'Foreign companies attracted (2020–2025)', value: '≈35–40 firms' },
      { item: 'Official Sources', value: 'PIB, TN Defence Corridor reports' },
    ],
    simpleMeaning: 'Stable long-term jobs, less hype'
  },
  {
    rank: '🥉',
    state: 'Karnataka',
    color: 'from-orange-600 to-amber-700',
    data: [
      { item: 'Key Policies', value: 'Karnataka Aerospace & Defence Policy 2022–27' },
      { item: 'Investment Commitments', value: '₹10,270 cr+' },
      { item: 'How this helps aviation jobs', value: 'Design, R&D, avionics roles' },
      { item: 'Foreign companies attracted (2020–2025)', value: '≈40–45 firms' },
      { item: 'Official Sources', value: 'Invest Karnataka, PIB' },
    ],
    simpleMeaning: 'Highest-level work, toughest competition'
  },
  {
    rank: '4️⃣',
    state: 'Uttar Pradesh',
    color: 'from-blue-500 to-blue-600',
    data: [
      { item: 'Key Policies', value: 'UP Defence Corridor' },
      { item: 'Committed Investment', value: '₹8,658 cr+' },
      { item: 'How this helps aviation jobs', value: 'Manufacturing ecosystem under build' },
      { item: 'Foreign companies attracted (2020–2025)', value: '≈15–18 firms' },
      { item: 'Official Sources', value: 'PIB Defence Corridor disclosures' },
    ],
    simpleMeaning: 'Future-ready, not ideal for immediate jobs'
  },
  {
    rank: '5️⃣',
    state: 'Maharashtra',
    color: 'from-indigo-500 to-indigo-600',
    data: [
      { item: 'Key Policies', value: 'Industrial & Defence Manufacturing Incentives' },
      { item: 'Investment Pattern', value: 'Regional, not corridor-based' },
      { item: 'How this helps aviation jobs', value: 'Strong AME & MRO roles' },
      { item: 'Foreign companies attracted (2020–2025)', value: '≈18–22 firms' },
      { item: 'Official Sources', value: 'Invest India, PIB industry MoUs' },
    ],
    simpleMeaning: 'Good ecosystem, less transparent numbers'
  },
];

export const GovtSupport = () => {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          How Government Support Actually Works
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Very Simple Explanation
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.investindia.gov.in/sector/aerospace-defence" label="Invest India" />
          <SourceBadge href="https://www.pib.gov.in" label="PIB" />
          <SourceBadge href="https://www.makeinindia.com" label="Make in India" />
        </div>
      </div>

      {/* How Government Support Works - Layer Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            Government Support Layers
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="grid grid-cols-3 bg-slate-100 font-semibold text-slate-700">
            <div className="p-4 border-b border-slate-200">Layer</div>
            <div className="p-4 border-b border-slate-200">What Government Does</div>
            <div className="p-4 border-b border-slate-200">Simple Meaning</div>
          </div>
          {howItWorksData.map((row, index) => (
            <div key={index} className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
              <div className="p-4 border-b border-slate-100 font-medium text-slate-900">{row.layer}</div>
              <div className="p-4 border-b border-slate-100 text-slate-700">{row.whatGovtDoes}</div>
              <div className="p-4 border-b border-slate-100 text-slate-600">{row.simpleMeaning}</div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {howItWorksData.map((row, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="font-bold text-slate-900 mb-3">{row.layer}</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">What Govt Does</span>
                  <span className="text-slate-700 text-right">{row.whatGovtDoes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Simple Meaning</span>
                  <span className="text-slate-600 text-right">{row.simpleMeaning}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central Government Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            Central Government – Aviation Industry Contribution (2020–2025)
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="grid grid-cols-2 bg-blue-50 font-semibold text-slate-700">
            <div className="p-4 border-b border-blue-100">Section</div>
            <div className="p-4 border-b border-blue-100">What it means (Simple English)</div>
          </div>
          {centralGovtData.map((row, index) => (
            <div key={index} className="grid grid-cols-2 hover:bg-blue-50/50 transition-colors">
              <div className="p-4 border-b border-slate-100 font-medium text-slate-900 flex items-center gap-2">
                {row.icon && <row.icon className={`w-5 h-5 ${row.color}`} />}
                {row.section}
              </div>
              <div className="p-4 border-b border-slate-100 text-slate-700">{row.meaning}</div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden p-4 space-y-4">
          {centralGovtData.map((row, index) => (
            <div key={index} className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
              <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                {row.icon && <row.icon className={`w-5 h-5 ${row.color}`} />}
                {row.section}
              </div>
              <div className="text-sm text-slate-700">{row.meaning}</div>
            </div>
          ))}
        </div>

        {/* No Guarantees Warning */}
        <div className="bg-red-50 border-t-2 border-red-200 p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-red-800 mb-2">What Government does NOT guarantee</h4>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {noGuarantees.map((item, index) => (
                  <span key={index} className="text-red-700 text-sm sm:text-base font-medium">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final Meaning */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 border-t border-green-200">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-green-800">
              <span className="text-green-600">Final Meaning for Students & Parents:</span>
            </p>
            <p className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
              Government brings companies to India, but skills decide who gets the job
            </p>
          </div>
        </div>
      </div>

      {/* State-Wise Investment Reality */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-700 to-purple-800 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            State-Wise Aviation Investment Reality (2020–2025)
          </h3>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {stateData.map((state, stateIndex) => (
            <div key={stateIndex} className="border border-slate-200 rounded-xl overflow-hidden">
              {/* State Header */}
              <div className={`bg-gradient-to-r ${state.color} p-4`}>
                <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">{state.rank}</span> {state.state}
                </h4>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block">
                <div className="grid grid-cols-2 bg-slate-100 font-semibold text-slate-700">
                  <div className="p-3 sm:p-4 border-b border-slate-200">Item</div>
                  <div className="p-3 sm:p-4 border-b border-slate-200">Data</div>
                </div>
                {state.data.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 hover:bg-slate-50 transition-colors">
                    <div className="p-3 sm:p-4 border-b border-slate-100 font-medium text-slate-900">{row.item}</div>
                    <div className="p-3 sm:p-4 border-b border-slate-100 text-slate-700">{row.value}</div>
                  </div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden p-4 space-y-3">
                {state.data.map((row, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">{row.item}</div>
                    <div className="text-sm text-slate-800">{row.value}</div>
                  </div>
                ))}
              </div>

              {/* Simple Meaning Footer */}
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-600">Simple Meaning:</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">{state.simpleMeaning}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Understanding Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 text-center">
        <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-amber-400" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          What Students & Parents Must Clearly Understand
        </h3>
        <div className="space-y-2 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          <p>Government policies attract companies.</p>
          <p>Companies create jobs.</p>
          <p className="text-amber-400 font-bold text-lg sm:text-xl pt-2">
            Only skills decide who gets hired.
          </p>
        </div>
      </div>
    </div>
  );
};
