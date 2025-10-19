import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';
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
  return <div className="space-y-6 sm:space-y-8">
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

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Job Security Comparison
        </h3>
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
              <Bar dataKey="withAI" fill="#10b981" name="With AI Skills" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withoutAI" fill="#ef4444" name="Without AI Skills" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {securityData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
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
          </div>)}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">How Long Will Your Skills Stay Relevant?</h3>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Your skills can become outdated fast. Here's how learning AI can double your career lifespan.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 text-slate-900 font-bold">Role</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">Skills Become Outdated In</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">Skills Stay Relevant For</th>
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
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
          <div className="flex items-start space-x-3">
            <span className="text-3xl">💡</span>
            <div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">The Difference</h4>
              <p className="text-blue-800 text-base">
                Learning AI doubles how long your skills stay valuable — from 7 years to 16 years on average.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Without AI Skills</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  Your technical knowledge becomes outdated in just 6-9 years. Companies won't hire engineers with outdated skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-green-900 mb-2">With AI Skills</h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  Your skills stay valuable for 14-20 years. You stay employable and grow your career faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">The AI Skills Advantage</h3>
          <p className="text-green-200 text-lg mb-6">
            <strong>AI-trained engineers have 30-45% higher security.</strong> Professionals with AI skills have significantly better job security across all aerospace roles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">91%</div>
              <div className="text-green-200">Avionics Engineers with AI</div>
            </div>
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">88%</div>
              <div className="text-blue-200">Aerospace Engineers with AI</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">79%</div>
              <div className="text-indigo-200">Maintenance Engineers with AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};