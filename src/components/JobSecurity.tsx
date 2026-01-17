import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import SourceBadge from './SourceBadge';

const securityData = [{
  role: 'Aerospace Engineer',
  withAI: 88,
  withoutAI: 52,
  shortName: 'Aerospace'
}, {
  role: 'Avionics Engineer',
  withAI: 91,
  withoutAI: 45,
  shortName: 'Avionics'
}, {
  role: 'Aircraft Maintenance Eng.',
  withAI: 79,
  withoutAI: 58,
  shortName: 'Maintenance'
}];

export const JobSecurity = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Job Security Analysis
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          With vs Without AI Skills • Future-Proofing Your Career
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www2.deloitte.com/us/en/insights/focus/technology-and-the-future-of-work" label="Deloitte Future Work" />
          <SourceBadge href="https://www.linkedin.com/business/learning/blog/learning-and-development/workplace-learning-report" label="LinkedIn Skills Gap" />
        </div>
      </div>

      {/* Important Job Security Reality - NEW SECTION */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-amber-200">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4">
            Important Job Security Reality
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-amber-800 font-medium">
              AI skills do not automatically make you safe.
            </p>
            <p className="text-base sm:text-lg text-slate-700">
              Only <span className="font-bold text-amber-900">role-specific AI skills</span> actually used in real aerospace jobs increase long-term job security.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
              Job Security Comparison
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how learning AI skills greatly improves long-term job safety before students plan their career path.
              </span>
            </div>
          </div>
        </div>
        <div className="h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={securityData} margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 40
            }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="shortName" angle={-45} textAnchor="end" height={60} fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip formatter={(value, name) => [`${value}%`, name]} labelStyle={{
                color: '#1e293b'
              }} />
              <Bar dataKey="withAI" fill="hsl(142 76% 42%)" name="With AI Skills" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withoutAI" fill="hsl(0 72% 51%)" name="Without AI Skills" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {securityData.map((item, index) => (
          <div key={item.role} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-slate-900 mb-4">{item.role}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-gray-600">With AI Skills</span>
                </div>
                <span className="font-bold text-green-600">{item.withAI}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                  <span className="text-gray-600">Without AI Skills</span>
                </div>
                <span className="font-bold text-red-600">{item.withoutAI}%</span>
              </div>
              <div className="border-t pt-3">
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    +{item.withAI - item.withoutAI}%
                  </span>
                  <div className="text-sm text-gray-600">Security Boost</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Boost Meaning - NEW SECTION */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-indigo-200">
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4 text-center">
          What a +36% / +46% / +21% security boost really means
        </h3>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-base sm:text-lg">Higher chance of staying in core engineering roles</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-base sm:text-lg">Lower risk of being pushed into support or low-growth roles</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-base sm:text-lg">Faster recovery after industry slowdowns</span>
            </li>
          </ul>
          <div className="mt-6 bg-white border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <p className="text-indigo-900 font-bold text-base sm:text-lg">
              This boost is earned, not automatic.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">Difference between Traditional Skills and AI-Enhanced Skill Career Durability</h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Compare how traditional skills and AI-enhanced skills impact your career longevity.
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students understand that upgrading skills can double career life and reduce job loss risk.
              </span>
            </div>
          </div>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 text-slate-900 font-bold">Role</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">Traditional Skill</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">AI-Enhanced Skill</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">Career Durability Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="text-base font-bold text-slate-900">7–8 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">15–18 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-green-600">88%</span>
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">6–7 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">14–16 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-green-600">85%</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">AME</td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">8–9 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">16–20 yrs</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-green-600">90%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-slate-500 mb-1">Traditional</p>
                <p className="font-bold text-slate-900 text-sm">7–8 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">AI-Enhanced</p>
                <p className="font-bold text-slate-900 text-sm">15–18 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Durability</p>
                <p className="font-bold text-green-600 text-sm">88%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-slate-500 mb-1">Traditional</p>
                <p className="font-bold text-slate-900 text-sm">6–7 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">AI-Enhanced</p>
                <p className="font-bold text-slate-900 text-sm">14–16 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Durability</p>
                <p className="font-bold text-green-600 text-sm">85%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">AME</h4>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-slate-500 mb-1">Traditional</p>
                <p className="font-bold text-slate-900 text-sm">8–9 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">AI-Enhanced</p>
                <p className="font-bold text-slate-900 text-sm">16–20 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Durability</p>
                <p className="font-bold text-green-600 text-sm">90%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded">
            <div className="flex items-start space-x-3">
              <div>
                <h4 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">What It Means</h4>
                <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
                  <strong>Traditional Skill:</strong> Shows how quickly skills lose value without continuous learning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-5 rounded">
            <div className="flex items-start space-x-3">
              <div>
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Why It Matters</h4>
                <p className="text-green-800 text-xs sm:text-sm leading-relaxed">
                  <strong>AI-Enhanced Skill:</strong> Proves that learning new technologies can double your career life and job security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What happens if you don't upgrade skills - NEW SECTION */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-red-200">
        <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-6 text-center">
          What happens if you don't upgrade skills
        </h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Traditional skills alone lose value faster</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Job security reduces</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Career durability can drop below <span className="font-bold text-red-600">40–50%</span></p>
          </div>
        </div>
        
        <div className="mt-8 bg-white border-l-4 border-amber-500 p-4 sm:p-6 rounded-r-lg max-w-3xl mx-auto">
          <p className="text-slate-800 text-base sm:text-lg mb-2">
            <span className="font-bold">AI does not kill careers.</span>
          </p>
          <p className="text-slate-800 text-base sm:text-lg mb-2">
            <span className="font-bold text-red-700">Refusing to learn kills careers.</span>
          </p>
          <p className="text-slate-700 text-base sm:text-lg">
            Engineers who learn AI tools stay relevant much longer.
          </p>
        </div>
      </div>

      {/* Binary Career Reality - NEW SECTION */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Binary Career Reality
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 flex-shrink-0" />
              <span className="text-green-300 font-bold text-base sm:text-lg">AI-enabled engineers</span>
            </div>
            <p className="text-green-200 text-sm sm:text-base">
              → remain in core, high-impact roles
            </p>
          </div>
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-400 flex-shrink-0" />
              <span className="text-red-300 font-bold text-base sm:text-lg">Non-AI engineers</span>
            </div>
            <p className="text-red-200 text-sm sm:text-base">
              → gradually pushed out of high-impact roles
            </p>
          </div>
        </div>
        <p className="text-center text-slate-400 mt-6 text-sm sm:text-base">
          This shift is slow, but real.
        </p>
      </div>

      {/* Final Job Security Truth - NEW SECTION */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-emerald-200">
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4 text-center">
          Final Job Security Truth
        </h3>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
            Job security in the next 20 years will belong to engineers who combine <span className="font-bold text-emerald-800">domain knowledge</span> with <span className="font-bold text-emerald-800">AI</span> — not one without the other.
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
            Knowing this early helps students choose future-proof skills, not just a degree name.
          </p>
        </div>
      </div>
    </div>
  );
};
