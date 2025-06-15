import React from 'react';
import { MapPin, TrendingUp, Building, AlertTriangle } from 'lucide-react';

const statesData = [
  {
    state: 'Karnataka',
    city: 'Bengaluru',
    description: 'Drone & space hub',
    jobs: '45K+',
    companies: ['ISRO', 'HAL', 'Garuda Aerospace'],
    growth: 'High'
  },
  {
    state: 'Telangana',
    city: 'Hyderabad',
    description: 'Aerospace corridor',
    jobs: '35K+',
    companies: ['Boeing', 'Cyient', 'DRDO'],
    growth: 'High'
  },
  {
    state: 'Maharashtra',
    city: 'Mumbai & Pune',
    description: 'Analytics, avionics',
    jobs: '40K+',
    companies: ['Tata', 'L&T', 'Mahindra'],
    growth: 'Medium'
  },
  {
    state: 'Tamil Nadu',
    city: 'Chennai',
    description: 'Component manufacturing',
    jobs: '30K+',
    companies: ['Airbus', 'Boeing', 'Collins'],
    growth: 'Medium'
  },
  {
    state: 'Gujarat',
    city: 'Ahmedabad',
    description: 'Drone corridor, Skyroot',
    jobs: '25K+',
    companies: ['Skyroot', 'Adani', 'Reliance'],
    growth: 'High'
  }
];

export const BestStates = () => {
  // Calculate totals for stats in alert
  const total = 175000; // Sum of jobs from statesData
  const unfilled = 68000;
  const filled = total - unfilled;
  const skillGapPercent = 39;

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Best States in India for Jobs
        </h2>
        <p className="text-xl text-gray-600">
          Geographic job hotspots and aerospace clusters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
              <div className="text-gray-600">{state.description}</div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Building className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Available Jobs</span>
              </div>
              <span className="font-bold text-green-600">{state.jobs}</span>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">Top Companies</div>
              <div className="flex flex-wrap gap-2">
                {state.companies.map((company) => (
                  <span
                    key={company}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 68K Jobs Unfilled Alert */}
      <div className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg shadow-lg p-8 flex flex-col items-center my-6 animate-fade-in">
        <AlertTriangle className="w-14 h-14 mb-4 text-white drop-shadow-md" />
        <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-center">
          68K Jobs Unfilled Due to Skill Gap
        </h3>
        <p className="text-md md:text-lg text-orange-100 font-medium mb-4 text-center">
          A major opportunity lost—skills gap leaves thousands of aerospace jobs open.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
          <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 text-center min-w-[120px]">
            <div className="text-lg font-bold">{total.toLocaleString()}+</div>
            <div className="text-sm text-orange-100">Total Jobs</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 text-center min-w-[120px]">
            <div className="text-lg font-bold">{filled.toLocaleString()}+</div>
            <div className="text-sm text-orange-100">Filled</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 text-center min-w-[120px]">
            <div className="text-lg font-bold">{unfilled.toLocaleString()}+</div>
            <div className="text-sm text-orange-100">Jobs Unfilled Yearly Due to Skills Gap</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 text-center min-w-[120px] border-2 border-orange-300">
            <div className="text-lg font-bold">{skillGapPercent}%</div>
            <div className="text-sm text-orange-100">Skill Gap</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Geographic Advantage</h3>
          <p className="text-blue-200 text-lg">
            South India dominates with 70% of aerospace jobs concentrated in Karnataka, Telangana, and Tamil Nadu
          </p>
        </div>
      </div>
    </div>
  );
};
