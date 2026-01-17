import React from 'react';
import { MapPin } from 'lucide-react';
import SourceBadge from './SourceBadge';

const visionPoints = [
  {
    number: 1,
    title: 'India becoming a global aerospace powerhouse by 2040',
    explanations: [
      'This is a national ambition, not a guarantee.',
      'It will happen only if policies work and skilled engineers are available.'
    ]
  },
  {
    number: 2,
    title: '70% of aircraft built in India by 2040',
    explanations: [
      'This depends on foreign aircraft companies choosing India and costs staying low.'
    ]
  },
  {
    number: 3,
    title: '90% of aircraft maintenance (MRO) done in India',
    explanations: [
      'India is cheaper for maintenance and has a fast-growing aircraft fleet.',
      'Good long-term sign for AME careers.'
    ]
  },
  {
    number: 4,
    title: 'Thousands of new aircraft needed over the next 20 years',
    explanations: [
      'Air travel is increasing every year.',
      'Jobs will grow slowly over 20 years, not suddenly.'
    ]
  },
  {
    number: 5,
    title: 'Aviation share in GDP rising from 0.8% to 2.5%',
    explanations: [
      'Shows the sector may become more important, but this level is not guaranteed.'
    ]
  },
  {
    number: 6,
    title: 'Jobs growing from 2.3 lakh to 15–20 lakh',
    explanations: [
      'This includes supply chain, services, and support roles.',
      'Not all jobs are engineering jobs.'
    ]
  },
  {
    number: 7,
    title: 'Global market share rising from 2% to 8%',
    explanations: [
      'Depends on exports, quality, and global competition.'
    ]
  },
  {
    number: 8,
    title: 'Export revenue growing from $1.6B to $10B+',
    explanations: [
      'Possible only if India becomes globally reliable and cost-competitive.'
    ]
  },
  {
    number: 9,
    title: 'India among top 3–5 aerospace nations',
    explanations: [
      'Rank depends on technology, patents, and exports — not only size.'
    ]
  }
];

const tierData = [
  {
    tier: 'Tier-1 cities',
    focus: 'R&D, avionics, design',
    note: 'high skill, high competition'
  },
  {
    tier: 'Tier-2 cities',
    focus: 'Manufacturing and testing',
    note: ''
  },
  {
    tier: 'Tier-3 cities',
    focus: 'Maintenance (AME) and training',
    note: ''
  }
];

export const India2040 = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            India 2040 Aviation Vision
          </h2>
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
            Projection
          </span>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          What Is a Goal vs What Is Real
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.niti.gov.in/reports" label="NITI Aayog Reports" />
          <SourceBadge href="https://www.vision2047.gov.in" label="Vision 2047 Portal" />
        </div>
      </div>

      {/* Vision Points Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-indigo-200">
        <div className="space-y-4 sm:space-y-6">
          {visionPoints.map((point) => (
            <div
              key={point.number}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  {point.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-indigo-900 mb-2 sm:mb-3">
                    {point.title}
                  </h4>
                  <div className="space-y-2">
                    {point.explanations.map((explanation, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {explanation}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where Jobs Will Actually Be Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-green-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Where Jobs Will Actually Be
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-base sm:text-lg text-green-700 font-medium">
            (This Is Real)
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-hidden rounded-lg border border-green-200">
          <div className="grid grid-cols-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold text-sm">
            <div className="p-4">City Tier</div>
            <div className="p-4">Focus Areas</div>
            <div className="p-4">Note</div>
          </div>
          {tierData.map((tier, index) => (
            <div key={index} className="grid grid-cols-3 hover:bg-green-50/50 transition-colors bg-white">
              <div className="p-4 border-b border-green-100 font-bold text-slate-900">
                {tier.tier}
              </div>
              <div className="p-4 border-b border-green-100 text-slate-700">
                {tier.focus}
              </div>
              <div className="p-4 border-b border-green-100 text-slate-600 italic">
                {tier.note || '—'}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {tierData.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-green-100 shadow-sm">
              <div className="font-bold text-green-800 text-lg mb-2">
                {tier.tier}
              </div>
              <div className="text-slate-700 mb-1">
                <span className="font-medium text-slate-900">Focus:</span> {tier.focus}
              </div>
              {tier.note && (
                <div className="text-slate-600 text-sm italic">
                  ({tier.note})
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pattern Note */}
        <div className="mt-6 bg-white border-l-4 border-green-500 p-4 rounded-r-lg">
          <p className="text-slate-700 text-sm sm:text-base font-medium">
            This pattern is already happening in India.
          </p>
        </div>
      </div>
    </div>
  );
};
