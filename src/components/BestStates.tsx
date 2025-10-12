import React from 'react';
import { MapPin, TrendingUp, Building, AlertTriangle } from 'lucide-react';
import SourceBadge from './SourceBadge';

const statesData = [
  {
    state: 'Karnataka',
    city: 'Bengaluru',
    description: 'Largest aerospace hub',
    companies: 120,
    totalJobs: 65000,
    topCompanies: ['ISRO', 'HAL'],
    growth: 'High',
    chances: 'Excellent Chances',
    chancesColor: 'bg-green-100 text-green-800',
    why: 'Home to ISRO headquarters and largest job market'
  },
  {
    state: 'Telangana',
    city: 'Hyderabad',
    description: 'Avionics & defense cluster',
    companies: 75,
    totalJobs: 29000,
    topCompanies: ['Boeing', 'Cyient'],
    growth: 'High',
    chances: 'Good Chances',
    chancesColor: 'bg-blue-100 text-blue-800',
    why: 'Growing defense sector with global partnerships'
  },
  {
    state: 'Maharashtra',
    city: 'Pune, Mumbai, Nagpur',
    description: 'Manufacturing & MRO hubs',
    companies: 95,
    totalJobs: 26000,
    topCompanies: ['Tata', 'L&T'],
    growth: 'Medium',
    chances: 'Good Chances',
    chancesColor: 'bg-blue-100 text-blue-800',
    why: 'Multiple cities with strong manufacturing base'
  },
  {
    state: 'Tamil Nadu',
    city: 'Chennai',
    description: 'Maintenance & aero parks',
    companies: 65,
    totalJobs: 21000,
    topCompanies: ['Airbus', 'Boeing'],
    growth: 'Medium',
    chances: 'Good Chances',
    chancesColor: 'bg-blue-100 text-blue-800',
    why: 'Strong MRO sector with global presence'
  },
  {
    state: 'Andhra Pradesh',
    city: 'Emerging clusters',
    description: 'Strong govt support',
    companies: 45,
    totalJobs: 10500,
    topCompanies: ['Govt projects', 'Defense'],
    growth: 'High',
    chances: 'Competitive',
    chancesColor: 'bg-orange-100 text-orange-800',
    why: 'New opportunities with government backing'
  }
];

export const BestStates = () => {
  // Calculate totals for stats in alert
  const total = statesData.reduce((sum, state) => sum + state.totalJobs, 0);
  const unfilled = 68000;
  const filled = total - unfilled;
  const skillGapPercent = 39;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Best States in India for Jobs
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Geographic job hotspots and aerospace clusters
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.karnataka.gov.in/aerospace" label="Karnataka Aerospace" />
          <SourceBadge href="https://www.telanganatoday.com/aerospace-clusters" label="Telangana Policy" />
          <SourceBadge href="https://www.maharashtra.gov.in/industrial-development" label="Maharashtra Govt" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {statesData.map((state, index) => (
          <div
            key={state.state}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">{state.state}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                state.growth === 'High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {state.growth} Growth
              </span>
            </div>

            <div className="mb-4">
              <div className="text-lg font-semibold text-indigo-600">{state.city}</div>
              <div className="text-gray-600 text-sm">{state.description}</div>
            </div>

            {/* Jobs Available - Prominent Display */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4 border-2 border-green-200">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Jobs Available</div>
                <div className="text-3xl font-bold text-green-700">
                  {(state.totalJobs/1000).toFixed(0)}K
                </div>
                <div className="text-xs text-gray-500 mt-1">{state.companies}+ Companies Hiring</div>
              </div>
            </div>

            {/* Your Chances Indicator */}
            <div className={`p-3 rounded-lg mb-4 ${state.chancesColor}`}>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🎯</span>
                <div>
                  <div className="text-xs font-semibold">Your Chances</div>
                  <div className="font-bold">{state.chances}</div>
                </div>
              </div>
            </div>

            {/* Why This State */}
            <div className="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-200">
              <div className="text-xs font-semibold text-gray-700 mb-1">💡 Why This State?</div>
              <div className="text-sm text-gray-700">{state.why}</div>
            </div>

            {/* Top Companies */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">Top Companies</div>
              <div className="flex flex-wrap gap-2">
                {state.topCompanies.map((company) => (
                  <span
                    key={company}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Jobs Unfilled Alert */}
      <div className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center my-6 animate-fade-in">
        <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-4 text-white drop-shadow-md" />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-center">
          Jobs Unfilled Due to Skill Gap
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-orange-100 font-medium mb-4 text-center max-w-2xl">
          A major opportunity lost—skills gap leaves thousands of jobs open
        </p>
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 w-full max-w-4xl">
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{total.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Total Jobs</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{filled.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Filled</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{unfilled.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Unfilled</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px] border-2 border-orange-300">
            <div className="text-base sm:text-lg font-bold">{skillGapPercent}%</div>
            <div className="text-xs sm:text-sm text-orange-100">Skill Gap</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Geographic Advantage</h3>
          <p className="text-blue-200 text-lg mb-6">
            South India dominates with 70% of aerospace jobs concentrated in top 3 states
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">65K</div>
              <div className="text-blue-200">Karnataka Jobs</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">29K</div>
              <div className="text-indigo-200">Telangana Jobs</div>
            </div>
            <div className="bg-purple-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">26K</div>
              <div className="text-purple-200">Maharashtra Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
