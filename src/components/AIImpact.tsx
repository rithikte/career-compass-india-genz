
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Brain, AlertTriangle, Shield } from 'lucide-react';
import SourceBadge from './SourceBadge';

const aiImpactData = [
  { timeframe: '5 Years', impact: 28, safe: 72, name: '5Y Impact' },
  { timeframe: '10 Years', impact: 47, safe: 53, name: '10Y Impact' }
];

const COLORS = ['#ef4444', '#10b981'];

export const AIImpact = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          AI Impact on Jobs
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Automation timeline and job security analysis
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.mckinsey.com/featured-insights/artificial-intelligence/the-age-of-ai" label="McKinsey AI Report" />
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-and-workforce-evolution" label="PwC AI Workforce" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {aiImpactData.map((data, index) => (
          <div key={data.timeframe} className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">{data.timeframe}</h3>
            <div className="h-48 sm:h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'AI Impact', value: data.impact },
                      { name: 'Human Jobs', value: data.safe }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {[data.impact, data.safe].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <div className="text-2xl sm:text-3xl font-bold text-red-600">{data.impact}%</div>
              <div className="text-sm sm:text-base text-gray-600">Jobs at Risk</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">AI Impact on Job Roles</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 text-slate-900 font-bold">Job Role</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">AI Impact (5 Years)</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">AI Impact (10 Years)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded">28%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-red-100 text-red-800 font-bold px-3 py-1 rounded">38%</span>
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded">33%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-red-100 text-red-800 font-bold px-3 py-1 rounded">43%</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aircraft Maintenance Engineer (AME)</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded">30%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-red-100 text-red-800 font-bold px-3 py-1 rounded">38%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-red-600">
            ⚠️ Ignoring AI skills reduces hiring chances by 40%.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">AI Replace Reports Source:</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• NITI Aayog AI for All Reports</li>
          <li>• World Economic Forum India Data</li>
          <li>• Aviation Ministry's Civil Aviation Vision 2040</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-3">What's Really Happening:</h4>
            <p className="text-blue-800 text-lg mb-4">
              <strong>AI is replacing tasks, not engineers. Skilled graduates remain essential.</strong>
            </p>
            <p className="text-blue-800 text-lg mb-4">
              AI is not killing jobs — it's killing <strong>unskilled jobs</strong>.
            </p>
            <p className="text-blue-700 mb-4">
              Companies still hiring but only for students who are skilled and know the latest tools.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h5 className="font-semibold text-green-800 mb-2">Solution:</h5>
              <p className="text-green-700 mb-2">
                <strong>Upskill + Certify + Know Your Role → You get hired.</strong>
              </p>
              <p className="text-green-600 font-medium">
                90% Companies Expecting Certifications to Get Job in 2-3 Attempts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Brain className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">AI Disruption Alert</h3>
          <p className="text-orange-200 text-lg">
            47% of aerospace jobs will be impacted by AI in 10 years. Upskill now to stay relevant!
          </p>
        </div>
      </div>
    </div>
  );
};
