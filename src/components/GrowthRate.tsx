import React from 'react';
import { TrendingUp, Zap, Shield, ShieldCheck, CheckCircle2, AlertTriangle, Globe, Building2, Plane } from 'lucide-react';
import SourceBadge from './SourceBadge';

// Jobs Growth Rate data with new structure
const jobsGrowthData = [
  {
    role: 'Aerospace Engineer',
    color: 'slate',
    metrics: [
      { label: 'Industry (India Aviation/Defense/Space market)', cagr: '5.84%', period: '2025→2030' },
      { label: 'Sub-industry (India Aerospace & Defence market)', cagr: '6.8%', period: '2024→2032' },
      { label: 'Cluster (India Aerospace Engineering Services Outsourcing)', cagr: '28.9%', period: '2024→2030' }
    ],
    summary: 'Steady aerospace growth and fast engineering-services growth mean more design and analysis jobs over time.'
  },
  {
    role: 'Avionics Engineer',
    color: 'emerald',
    metrics: [
      { label: 'Industry (India Aviation market)', cagr: '11.86%', period: '2026→2031' },
      { label: 'Sub-industry (Aerospace Avionics in India)', cagr: '12.0%', period: '2025→2035' },
      { label: 'Cluster (India Avionics market)', cagr: '>11%', period: '2024→2029' }
    ],
    summary: 'Fast aviation and avionics growth creates strong demand for electronics, systems, and testing engineers.'
  },
  {
    role: 'Aircraft Maintenance Engineer (AME)',
    color: 'amber',
    metrics: [
      { label: 'Industry (India Aviation market)', cagr: '11.86%', period: '2026→2031' },
      { label: 'Sub-industry (India MRO market)', cagr: '8.9%', period: '2021→2031' },
      { label: 'Cluster (India MRO market—same driver for AME demand)', cagr: '8.9%', period: '2021→2031' }
    ],
    summary: 'More aircraft flying means more maintenance work, so AME jobs stay stable and in demand.'
  }
];

// Global vs India Snapshot data
const snapshotData = [
  { scope: '🇮🇳 India', market: 'Aviation, Defence & Space (Combined)', cagr: '~5.84%' },
  { scope: '🇮🇳 India', market: 'Aerospace & Defence', cagr: '~6.99%' },
  { scope: '🇮🇳 India', market: 'Civil Aviation', cagr: '~12.21%' },
  { scope: '🌍 Global', market: 'Aerospace & Defence', cagr: '~8.2%' },
  { scope: '🌍 Global', market: 'Aerospace (Overall)', cagr: '~7.7%' },
  { scope: '🌍 Global', market: 'Civil Aviation', cagr: '~9.2%' }
];

// Career Safety data
const careerSafetyData = [
  {
    role: 'Aerospace Engineer',
    color: 'slate',
    safetyLevel: 'Stable & Long-Term Career',
    safetyIcon: Shield,
    metrics: [
      { label: 'Job demand in India', value: 'Medium but steady' },
      { label: 'Long-term stability', value: 'High' },
      { label: 'Global relevance', value: 'Very high' },
      { label: 'Dependence on economy', value: 'Low', note: 'mostly government & defence driven' },
      { label: 'Automation / AI risk', value: 'Low', note: 'core engineering decisions still human-led' }
    ],
    summary: 'If you choose this career, jobs may not come in large numbers every year, but once you enter, the career is stable, respected, and lasts long. Good for students who are patient and skill-focused.'
  },
  {
    role: 'Avionics Engineer',
    color: 'emerald',
    safetyLevel: 'Growth + Stability Career',
    safetyIcon: TrendingUp,
    metrics: [
      { label: 'Job demand in India', value: 'High' },
      { label: 'Long-term stability', value: 'Medium to high' },
      { label: 'Global relevance', value: 'High' },
      { label: 'Dependence on economy', value: 'Medium', note: 'linked to airline growth' },
      { label: 'Automation / AI risk', value: 'Medium', note: 'testing & systems need skill upgrades' }
    ],
    summary: 'This career grows faster because aircraft electronics are increasing. Jobs are available, but you must keep learning new systems and tools to stay relevant.'
  },
  {
    role: 'Aircraft Maintenance Engineer (AME)',
    color: 'amber',
    safetyLevel: 'Very Safe & Stable Career',
    safetyIcon: ShieldCheck,
    metrics: [
      { label: 'Job demand in India', value: 'High' },
      { label: 'Long-term stability', value: 'Very high' },
      { label: 'Global relevance', value: 'Very high' },
      { label: 'Dependence on economy', value: 'Very low', note: 'aircraft must be maintained always' },
      { label: 'Automation / AI risk', value: 'Very low', note: 'licensed human responsibility' }
    ],
    summary: 'Aircraft maintenance jobs do not disappear. Planes must be checked and repaired by licensed engineers. This is one of the safest careers in aviation.'
  }
];

const getRoleColorClasses = (color: string) => {
  switch (color) {
    case 'slate':
      return {
        bg: 'bg-slate-100',
        border: 'border-slate-300',
        text: 'text-slate-700',
        accent: 'bg-slate-600',
        light: 'bg-slate-50'
      };
    case 'emerald':
      return {
        bg: 'bg-emerald-100',
        border: 'border-emerald-300',
        text: 'text-emerald-700',
        accent: 'bg-emerald-600',
        light: 'bg-emerald-50'
      };
    case 'amber':
      return {
        bg: 'bg-amber-100',
        border: 'border-amber-300',
        text: 'text-amber-700',
        accent: 'bg-amber-600',
        light: 'bg-amber-50'
      };
    default:
      return {
        bg: 'bg-slate-100',
        border: 'border-slate-300',
        text: 'text-slate-700',
        accent: 'bg-slate-600',
        light: 'bg-slate-50'
      };
  }
};

export const GrowthRate = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          How Fast Is This Career Growing?
        </h2>
        <p className="text-xl text-gray-600">
          CAGR Analysis 2025–2040 • Industry Growth Projections
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.ibef.org/industry/aerospace-defence" label="IBEF Reports" />
          <SourceBadge href="https://www.investindia.gov.in/sector/defence-manufacturing" label="Invest India" />
          <SourceBadge href="https://www.ficci.in/pressrelease/3769/ficci-media-release-june-28-2023.pdf" label="FICCI Aerospace" />
        </div>
      </div>

      {/* Jobs Growth Rate by 2040 */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Jobs Growth Rate by 2040
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Industry, sub-industry, and cluster growth rates for aerospace careers
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how many job opportunities will increase in the future, helping students choose a career with long-term demand.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {jobsGrowthData.map((item) => {
            const colors = getRoleColorClasses(item.color);
            return (
              <div key={item.role} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className={`${colors.accent} px-4 py-3`}>
                  <h4 className="text-base sm:text-lg font-bold text-white">{item.role}</h4>
                </div>
                
                {/* Metrics */}
                <div className="p-4 sm:p-5 space-y-3">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className={`${colors.light} rounded-lg p-3 border ${colors.border}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-slate-600 font-medium">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm sm:text-base font-bold ${colors.text}`}>{metric.cagr}</span>
                          <span className="text-[10px] sm:text-xs text-slate-500">CAGR</span>
                          <span className="text-[10px] sm:text-xs text-slate-400">({metric.period})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Summary */}
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global vs India Snapshot */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">🌍 GLOBAL VS INDIA SNAPSHOT</h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">CAGR = the average yearly growth</p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students understand how India's growth compares to global markets.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <div className="px-4 py-3 text-sm font-semibold">Scope</div>
              <div className="px-4 py-3 text-sm font-semibold">Market / Industry</div>
              <div className="px-4 py-3 text-sm font-semibold text-right">CAGR</div>
            </div>
            {/* Table Body */}
            {snapshotData.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-t border-slate-200`}>
                <div className="px-4 py-3 text-sm font-medium text-slate-700">{row.scope}</div>
                <div className="px-4 py-3 text-sm text-slate-600">{row.market}</div>
                <div className="px-4 py-3 text-sm font-bold text-emerald-600 text-right">{row.cagr}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {snapshotData.map((row, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{row.scope}</span>
                <span className="text-lg font-bold text-emerald-600">{row.cagr}</span>
              </div>
              <p className="text-sm text-slate-600">{row.market}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Safety & Future Stability Check */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Career Safety & Future Stability Check
            </h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Long-term career security assessment for each role
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students and parents understand which careers offer long-term security and minimal risk from economic or technological changes.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {careerSafetyData.map((item) => {
            const colors = getRoleColorClasses(item.color);
            const SafetyIcon = item.safetyIcon;
            return (
              <div key={item.role} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className={`${colors.accent} px-4 py-3`}>
                  <h4 className="text-base sm:text-lg font-bold text-white">{item.role}</h4>
                </div>
                
                <div className="p-4 sm:p-5">
                  {/* Safety Level Badge */}
                  <div className={`${colors.bg} ${colors.border} border rounded-lg p-3 mb-4 flex items-center gap-2`}>
                    <SafetyIcon className={`w-5 h-5 ${colors.text}`} />
                    <span className={`text-sm sm:text-base font-semibold ${colors.text}`}>
                      {item.safetyLevel}
                    </span>
                  </div>
                  
                  {/* Metrics */}
                  <div className="space-y-2 mb-4">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-2 py-2 border-b border-slate-100 last:border-0">
                        <span className="text-xs sm:text-sm text-slate-600">{metric.label}</span>
                        <div className="flex flex-col items-start sm:items-end">
                          <span className={`text-xs sm:text-sm font-semibold ${colors.text}`}>{metric.value}</span>
                          {metric.note && (
                            <span className="text-[10px] sm:text-xs text-slate-400">({metric.note})</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Summary */}
                  <div className={`${colors.light} rounded-lg p-3 border ${colors.border}`}>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mb-1">What this means in simple words:</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing these growth trends before choosing a degree helps students invest effort in careers that will still matter in 10–15 years.
          </p>
        </div>
      </div>
    </div>
  );
};
