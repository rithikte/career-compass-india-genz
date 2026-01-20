import React from 'react';
import SourceBadge from './SourceBadge';

export const BestStates = () => {
  // Helper function for opportunity level colors
  const getOpportunityColor = (level: string) => {
    switch (level) {
      case 'Very High': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'High': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Low': return 'bg-red-100 text-red-800 border-red-200';
      case 'Low (Emerging)': return 'bg-red-100 text-red-800 border-red-200';
      case 'Low (Early Stage)': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getOpportunityEmoji = (level: string) => {
    switch (level) {
      case 'Very High': return '🟢';
      case 'High': return '🟡';
      case 'Medium': return '🟠';
      case 'Low': return '🔴';
      case 'Low (Emerging)': return '🔴';
      case 'Low (Early Stage)': return '🔴';
      default: return '⚪';
    }
  };

  const getDifficultyEmoji = (level: string) => {
    if (level.includes('High')) return '🔴';
    if (level.includes('Medium')) return '🟠';
    return '🟢';
  };

  const getStabilityEmoji = (level: string) => {
    if (level.includes('High')) return '🟢';
    if (level.includes('Medium')) return '🟡';
    return '🟠';
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Best States in India for Jobs
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.karnataka.gov.in/aerospace" label="Karnataka Aerospace" />
          <SourceBadge href="https://www.telanganatoday.com/aerospace-clusters" label="Telangana Policy" />
          <SourceBadge href="https://www.maharashtra.gov.in/industrial-development" label="Maharashtra Govt" />
        </div>
      </div>

      {/* Top States by Ecosystem Presence */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-slate-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Top States by Aerospace & Aviation Ecosystem Presence (India)
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">(Estimated, based on observed industry concentration)</p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> States with larger ecosystems generally provide more learning exposure and entry points, not guaranteed hiring.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Karnataka */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-purple-600">#1</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Largest Ecosystem
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Karnataka</h4>
            <div className="text-3xl font-bold text-purple-600 mb-3">~120–150</div>
            <p className="text-sm text-slate-600 mb-3">Estimated active organizations</p>
            <div className="bg-slate-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">WHY</p>
              <p className="text-sm text-slate-700">Bengaluru is India's main aerospace & avionics hub</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">MAJOR ECOSYSTEM PLAYERS</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-200">ISRO</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-200">HAL</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-200">Tata</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-200">L&T</span>
              </div>
            </div>
          </div>

          {/* Maharashtra */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-indigo-600">#2</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">
                Strong Manufacturing & MRO
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Maharashtra</h4>
            <div className="text-3xl font-bold text-indigo-600 mb-3">~90–100</div>
            <p className="text-sm text-slate-600 mb-3">Estimated active organizations</p>
            <div className="bg-slate-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">WHY</p>
              <p className="text-sm text-slate-700">Pune–Mumbai–Nagpur manufacturing & MRO clusters</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">MAJOR ECOSYSTEM PLAYERS</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded border border-indigo-200">Tata</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded border border-indigo-200">L&T</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded border border-indigo-200">GKN</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded border border-indigo-200">Mahindra</span>
              </div>
            </div>
          </div>

          {/* Telangana */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-blue-600">#3</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                Fast-Growing Cluster
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Telangana</h4>
            <div className="text-3xl font-bold text-blue-600 mb-3">~70–80</div>
            <p className="text-sm text-slate-600 mb-3">Estimated active organizations</p>
            <div className="bg-slate-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">WHY</p>
              <p className="text-sm text-slate-700">Hyderabad's defence & avionics ecosystem</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">MAJOR ECOSYSTEM PLAYERS</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200">Boeing</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200">Cyient</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200">DRDO</span>
              </div>
            </div>
          </div>

          {/* Tamil Nadu */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-teal-600">#4</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                Emerging Aviation & MRO
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Tamil Nadu</h4>
            <div className="text-3xl font-bold text-teal-600 mb-3">~60–70</div>
            <p className="text-sm text-slate-600 mb-3">Estimated active organizations</p>
            <div className="bg-slate-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">WHY</p>
              <p className="text-sm text-slate-700">Chennai-based MRO & electronics activity</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">MAJOR ECOSYSTEM PLAYERS</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded border border-teal-200">Airbus</span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded border border-teal-200">Boeing</span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded border border-teal-200">Collins</span>
              </div>
            </div>
          </div>

          {/* Delhi NCR */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-cyan-600">#5</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 border border-cyan-200">
                Steady Defence & Services
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Delhi NCR</h4>
            <div className="text-3xl font-bold text-cyan-600 mb-3">~40–50</div>
            <p className="text-sm text-slate-600 mb-3">Estimated active organizations</p>
            <div className="bg-slate-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">WHY</p>
              <p className="text-sm text-slate-700">Defence manufacturing & aviation services</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">KEY SECTORS</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded border border-cyan-200">MRO</span>
                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded border border-cyan-200">Defence Systems</span>
                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded border border-cyan-200">Airport Services</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 text-center mt-6 italic">
          Company counts reflect ecosystem size, not annual hiring numbers. Hiring depends on demand, skills, and timing.
        </p>
      </div>

      {/* State-wise Job Availability Index */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-slate-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              State-wise Job Availability Index
            </h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800">
                <th className="px-4 py-3 text-left text-sm font-semibold text-white rounded-tl-lg">State</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">AME (Maintenance)</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Avionics Engineer</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Aerospace Engineer</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white rounded-tr-lg">Why this state matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Karnataka</td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Very High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Very High</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Largest aerospace & avionics ecosystem (Bengaluru)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Tamil Nadu</td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Very High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Strong MRO + manufacturing + electronics</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Maharashtra</td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Manufacturing + MRO clusters (Pune, Nagpur)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Telangana</td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Defence & avionics hub (Hyderabad)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Delhi NCR</td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span></td>
                <td className="px-4 py-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">Low</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Defence services, MRO coordination, aviation services</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {[
            { state: 'Karnataka', ame: 'High', avionics: 'Very High', aerospace: 'Very High', why: 'Largest aerospace & avionics ecosystem (Bengaluru)' },
            { state: 'Tamil Nadu', ame: 'Very High', avionics: 'High', aerospace: 'Medium', why: 'Strong MRO + manufacturing + electronics' },
            { state: 'Maharashtra', ame: 'High', avionics: 'Medium', aerospace: 'Medium', why: 'Manufacturing + MRO clusters (Pune, Nagpur)' },
            { state: 'Telangana', ame: 'Medium', avionics: 'High', aerospace: 'High', why: 'Defence & avionics hub (Hyderabad)' },
            { state: 'Delhi NCR', ame: 'Medium', avionics: 'Medium', aerospace: 'Low', why: 'Defence services, MRO coordination, aviation services' },
          ].map((item) => (
            <div key={item.state} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 text-lg mb-3">{item.state}</h4>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">AME</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getOpportunityColor(item.ame)}`}>{item.ame}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Avionics</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getOpportunityColor(item.avionics)}`}>{item.avionics}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Aerospace</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getOpportunityColor(item.aerospace)}`}>{item.aerospace}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">{item.why}</p>
            </div>
          ))}
        </div>

        {/* How to read the index */}
        <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">How to read the index (very simple)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Very High</span>
              <span className="text-sm text-slate-600">→ Strong, consistent hiring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">High</span>
              <span className="text-sm text-slate-600">→ Regular hiring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Medium</span>
              <span className="text-sm text-slate-600">→ Selective hiring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">Low</span>
              <span className="text-sm text-slate-600">→ Limited openings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role-wise Entry Pressure vs Stability */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-slate-200">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Role-wise Entry Pressure vs Stability
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800">
                <th className="px-4 py-3 text-left text-sm font-semibold text-white rounded-tl-lg">Role</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Entry Difficulty</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Long-Term Stability</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white rounded-tr-lg">Why this is accurate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Aerospace Engineer</td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🔴</span> <span className="text-sm text-slate-700">High</span></td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🟡</span> <span className="text-sm text-slate-700">Medium–High</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Few entry roles; demand grows with experience</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Avionics Engineer</td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🟠</span> <span className="text-sm text-slate-700">Medium–High</span></td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🟡</span> <span className="text-sm text-slate-700">Medium–High</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Skill-driven hiring; steady tech upgrades</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Aircraft Maintenance Engineer (AME)</td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🟠</span> <span className="text-sm text-slate-700">Medium</span></td>
                <td className="px-4 py-3 text-center"><span className="text-lg">🟢</span> <span className="text-sm text-slate-700">High</span></td>
                <td className="px-4 py-3 text-sm text-slate-600">Licensing controls entry; safety ensures demand</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {[
            { role: 'Aerospace Engineer', entry: 'High', entryEmoji: '🔴', stability: 'Medium–High', stabilityEmoji: '🟡', why: 'Few entry roles; demand grows with experience' },
            { role: 'Avionics Engineer', entry: 'Medium–High', entryEmoji: '🟠', stability: 'Medium–High', stabilityEmoji: '🟡', why: 'Skill-driven hiring; steady tech upgrades' },
            { role: 'Aircraft Maintenance Engineer (AME)', entry: 'Medium', entryEmoji: '🟠', stability: 'High', stabilityEmoji: '🟢', why: 'Licensing controls entry; safety ensures demand' },
          ].map((item) => (
            <div key={item.role} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">{item.role}</h4>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Entry Difficulty</p>
                  <span className="text-lg">{item.entryEmoji}</span>
                  <p className="text-sm font-medium text-slate-700">{item.entry}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Long-Term Stability</p>
                  <span className="text-lg">{item.stabilityEmoji}</span>
                  <p className="text-sm font-medium text-slate-700">{item.stability}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">{item.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Role-Wise State Opportunity Heatmap */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-slate-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Role-Wise State Opportunity Heatmap (India)
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm">Based on ecosystem concentration (not job counts)</p>
        </div>

        {/* Legend */}
        <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">How to read the heatmap (very simple)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🟢</span>
              <span className="text-sm text-slate-600">Very High → Strong opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🟡</span>
              <span className="text-sm text-slate-600">High → Good opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🟠</span>
              <span className="text-sm text-slate-600">Medium → Selective opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔴</span>
              <span className="text-sm text-slate-600">Low / Emerging → Future potential</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Aerospace Engineer */}
          <div className="bg-white rounded-xl shadow-md border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-center">
              <h4 className="text-lg font-bold text-white">Aerospace Engineer</h4>
              <p className="text-blue-100 text-xs">(Design • Structures • Systems)</p>
            </div>
            <div className="p-4 space-y-2">
              {[
                { state: 'Karnataka', level: 'Very High' },
                { state: 'Tamil Nadu', level: 'High' },
                { state: 'Telangana', level: 'High' },
                { state: 'Maharashtra', level: 'Medium' },
                { state: 'Andhra Pradesh', level: 'Low (Emerging)' },
              ].map((item) => (
                <div key={item.state} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-medium text-slate-800">{item.state}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-lg">{getOpportunityEmoji(item.level)}</span>
                    <span className="text-xs text-slate-600">{item.level}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-3 border-t border-blue-100">
              <p className="text-xs text-blue-700 font-medium">
                <span className="font-semibold">Bottom line:</span> Core aerospace design is heavily concentrated in Karnataka. Other states support manufacturing and suppliers.
              </p>
            </div>
          </div>

          {/* Avionics Engineer */}
          <div className="bg-white rounded-xl shadow-md border border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-center">
              <h4 className="text-lg font-bold text-white">Avionics Engineer</h4>
              <p className="text-purple-100 text-xs">(Aircraft electronics • Integration • Testing)</p>
            </div>
            <div className="p-4 space-y-2">
              {[
                { state: 'Karnataka', level: 'Very High' },
                { state: 'Telangana', level: 'Very High' },
                { state: 'Tamil Nadu', level: 'Medium' },
                { state: 'Maharashtra', level: 'Medium' },
                { state: 'Andhra Pradesh', level: 'Low (Early Stage)' },
              ].map((item) => (
                <div key={item.state} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-medium text-slate-800">{item.state}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-lg">{getOpportunityEmoji(item.level)}</span>
                    <span className="text-xs text-slate-600">{item.level}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-purple-50 p-3 border-t border-purple-100">
              <p className="text-xs text-purple-700 font-medium">
                <span className="font-semibold">Bottom line:</span> Avionics opportunities are split mainly between Karnataka & Telangana.
              </p>
            </div>
          </div>

          {/* AME */}
          <div className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-center">
              <h4 className="text-lg font-bold text-white">Aircraft Maintenance Engineer (AME)</h4>
              <p className="text-amber-100 text-xs">(Line • Base • Heavy Maintenance)</p>
            </div>
            <div className="p-4 space-y-2">
              {[
                { state: 'Telangana', level: 'Very High' },
                { state: 'Maharashtra', level: 'Very High' },
                { state: 'Karnataka', level: 'High' },
                { state: 'Tamil Nadu', level: 'Medium' },
                { state: 'Andhra Pradesh', level: 'Low (Emerging)' },
              ].map((item) => (
                <div key={item.state} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-medium text-slate-800">{item.state}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-lg">{getOpportunityEmoji(item.level)}</span>
                    <span className="text-xs text-slate-600">{item.level}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 p-3 border-t border-amber-100">
              <p className="text-xs text-amber-700 font-medium">
                <span className="font-semibold">Bottom line:</span> AME roles cluster around major MRO hubs, not design centers.
              </p>
            </div>
          </div>
        </div>

        {/* Role Recommendation Summary */}
        <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-1">Want Aerospace Design?</p>
              <p className="font-bold text-blue-700">→ Karnataka</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-1">Want Avionics / Electronics?</p>
              <p className="font-bold text-purple-700">→ Karnataka or Telangana</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-1">Want AME / Maintenance?</p>
              <p className="font-bold text-amber-700">→ Telangana or Maharashtra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Advantage */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Geographic Advantage</h3>
          <p className="text-blue-200 text-lg mb-6">
            South India dominates with 70% of aerospace jobs concentrated in top 3 states
          </p>
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing this data early helps students choose the right role + right state, not just the right degree.
          </p>
        </div>
      </div>
    </div>
  );
};