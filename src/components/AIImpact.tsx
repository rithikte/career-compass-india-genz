import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Brain, AlertTriangle, Shield } from 'lucide-react';
import SourceBadge from './SourceBadge';
const aiImpactData = [{
  timeframe: '5 Years',
  impact: 28,
  safe: 72,
  name: '5Y Impact'
}, {
  timeframe: '10 Years',
  impact: 47,
  safe: 53,
  name: '10Y Impact'
}];
const COLORS = ['#0f172a', '#94a3b8'];
export const AIImpact = () => {
  return <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-slate-400" />
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">AI Impact Analysis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Impact on Aerospace Jobs</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Automation timeline and job security analysis
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <SourceBadge href="https://www.mckinsey.com/featured-insights/artificial-intelligence/the-age-of-ai" label="McKinsey AI Report" />
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-and-workforce-evolution" label="PwC AI Workforce" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {aiImpactData.map((data, index) => <div key={data.timeframe} className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">{data.timeframe} Projection</span>
            </div>
            <div className="h-48 sm:h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={[{
                name: 'AI Impact',
                value: data.impact
              }, {
                name: 'Human Jobs',
                value: data.safe
              }]} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                    {[data.impact, data.safe].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                  </Pie>
                  <Tooltip formatter={value => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-6 space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900">{data.impact}%</div>
              <div className="text-sm text-slate-600 font-medium">Tasks at Risk of Automation</div>
            </div>
          </div>)}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Role-Specific Analysis</span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">AI Impact on Job Roles</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-4 text-slate-600 font-semibold text-sm uppercase tracking-wider">Job Role</th>
                <th className="text-center py-4 px-4 text-slate-600 font-semibold text-sm uppercase tracking-wider">5 Years</th>
                <th className="text-center py-4 px-4 text-slate-600 font-semibold text-sm uppercase tracking-wider">10 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-100 text-slate-900 font-bold px-3 py-1 rounded">28%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-900 text-white font-bold px-3 py-1 rounded">38%</span>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-100 text-slate-900 font-bold px-3 py-1 rounded">33%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-900 text-white font-bold px-3 py-1 rounded">43%</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900">Aircraft Maintenance Engineer (AME)</td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-100 text-slate-900 font-bold px-3 py-1 rounded">30%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="inline-block bg-slate-900 text-white font-bold px-3 py-1 rounded">38%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Reality Check</span>
              <h4 className="text-lg font-bold text-slate-900 mt-2 mb-4">What's Really Happening:</h4>
              <div className="space-y-3 text-slate-600">
                <p className="font-medium text-slate-900">
                  AI is replacing tasks, not engineers. Skilled graduates remain essential.
                </p>
                <p>
                  AI is not killing jobs — it's killing <span className="font-semibold text-slate-900">unskilled jobs</span>.
                </p>
                <p>
                  Companies still hiring but only for students who are skilled and know the latest tools.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-900">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Solution Path</span>
              <p className="text-slate-900 font-bold text-lg mt-2 mb-3">
                Upskill + Certify + Know Your Role → You get hired.
              </p>
              <p className="text-slate-600 font-medium">
                90% Companies Expecting Certifications to Get Job in 2-3 Attempts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-800">
        <div className="text-center max-w-2xl mx-auto">
          <Shield className="w-10 h-10 mx-auto mb-4 text-slate-400" />
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">Key Insight</span>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Stay Ahead of Automation</h3>
          <p className="text-slate-300 text-base sm:text-lg">
            47% of aerospace tasks will be impacted by AI in 10 years. Upskill now to stay relevant and secure your career.
          </p>
        </div>
      </div>
    </div>;
};