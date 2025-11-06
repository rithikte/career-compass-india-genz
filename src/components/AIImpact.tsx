import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { AlertTriangle, Shield } from 'lucide-react';
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
const COLORS = ['hsl(0 72% 51%)', 'hsl(142 76% 42%)'];
export const AIImpact = () => {
  return <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Impact on Aerospace Jobs</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.mckinsey.com/featured-insights/artificial-intelligence/the-age-of-ai" label="McKinsey AI Report" />
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-and-workforce-evolution" label="PwC AI Workforce" />
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-primary rounded-t-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">AI Impact on Indian Aerospace Industry</h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                AI is changing how India makes aircraft and spacecraft. Companies like HAL and DRDO are using AI to design better, check quality, and build faster.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-primary-light rounded-lg p-4 sm:p-6 border-2 border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹23,000 Cr+</div>
              <div className="text-sm sm:text-base text-foreground font-medium">India's AI Aerospace Market by 2030 ($2.8B)</div>
            </div>
            <div className="bg-primary-light rounded-lg p-4 sm:p-6 border-2 border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm sm:text-base text-foreground font-medium">Indian Aerospace Leaders Adopting AI</div>
            </div>
            <div className="bg-accent-light rounded-lg p-4 sm:p-6 border-2 border-accent/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">2x</div>
              <div className="text-sm sm:text-base text-foreground font-medium">Market Growth 2024 to 2030</div>
            </div>
          </div>

          <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
            <p className="text-base sm:text-lg font-semibold text-slate-900">
              💡 Indian engineers with AI skills earn 35-50% more in aerospace companies
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {aiImpactData.map((data, index) => <div key={data.timeframe} className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">{data.timeframe}</h3>
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
            <div className="text-center mt-4">
              <div className="text-2xl sm:text-3xl font-bold text-red-600">{data.impact}%</div>
              <div className="text-sm sm:text-base text-gray-600">Jobs at Risk</div>
            </div>
          </div>)}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">AI Impact on Job Roles</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 text-slate-900 font-bold">Job Role</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">AI Impact (5 Years)</th>
                <th className="text-center py-4 px-4 text-slate-900 font-bold">AI Impact (10 Years)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">28%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">38%</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">33%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">43%</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aircraft Maintenance Engineer (AME)</td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">30%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-bold text-slate-900">38%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 text-center">AI Impact Comparison Chart</h4>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 sm:p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[{
              role: 'Aerospace',
              '5 Years': 28,
              '10 Years': 38
            }, {
              role: 'Avionics',
              '5 Years': 33,
              '10 Years': 43
            }, {
              role: 'AME',
              '5 Years': 30,
              '10 Years': 38
            }]} margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="role" tick={{
                fill: 'hsl(var(--foreground))'
              }} axisLine={{
                stroke: 'hsl(var(--border))'
              }} />
                <YAxis label={{
                value: 'AI Impact (%)',
                angle: -90,
                position: 'insideLeft',
                fill: 'hsl(var(--foreground))'
              }} tick={{
                fill: 'hsl(var(--foreground))'
              }} axisLine={{
                stroke: 'hsl(var(--border))'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} formatter={value => `${value}%`} />
                <Legend wrapperStyle={{
                paddingTop: '20px'
              }} iconType="rect" />
                <Bar dataKey="5 Years" fill="hsl(221 83% 53%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="10 Years" fill="hsl(0 72% 51%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-base sm:text-lg font-bold text-red-600">
            ⚠️ Ignoring AI skills reduces hiring chances by 40%.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">Cause of Impact</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 sm:p-6 rounded-r-lg">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-indigo-700">5-year impact:</span>
                <p className="text-gray-700 mt-1">Partial automation. Engineers still essential for oversight and certification.</p>
              </div>
              <div>
                <span className="font-semibold text-indigo-700">10-year impact:</span>
                <p className="text-gray-700 mt-1">Structural shift. Routine, repetitive, and documentation-heavy tasks get automated; roles evolve toward system supervision, AI-model validation, and integration oversight.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 sm:p-6 rounded-r-lg">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-blue-700">5-year impact:</span>
                <p className="text-gray-700 mt-1">AI will handle most system checks and flight data analysis, while engineers watch and verify.</p>
              </div>
              <div>
                <span className="font-semibold text-blue-700">10-year impact:</span>
                <p className="text-gray-700 mt-1">Smart, self-learning avionics will do much of the troubleshooting automatically, reducing manual work.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-teal-500 bg-teal-50 p-4 sm:p-6 rounded-r-lg">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Aircraft Maintenance Engineer (AME)</h4>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-teal-700">5-year impact:</span>
                <p className="text-gray-700 mt-1">AI and sensors will spot faults early, so engineers spend less time on manual checks.</p>
              </div>
              <div>
                <span className="font-semibold text-teal-700">10-year impact:</span>
                <p className="text-gray-700 mt-1">Robots and smart systems will do most inspections and small repairs, while engineers handle data-based maintenance work.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
            <p className="text-base sm:text-lg font-bold text-amber-900">
              ⚠️ Caution: Job count may reduce slightly, but value of human-AI hybrid engineers will rise. Adapt or be replaced.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <div className="flex items-start space-x-3 sm:space-x-4 mb-6">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">What's Really Happening:</h4>
            <div className="space-y-4">
              <p className="text-gray-800 text-base sm:text-lg">
                <strong>AI is replacing tasks, not engineers. Skilled graduates remain essential.</strong>
              </p>
              <p className="text-gray-800 text-base sm:text-lg">
                AI is not killing jobs — it's killing <strong>unskilled jobs</strong>.
              </p>
              <p className="text-gray-700 font-medium">
                Companies still hiring but only for students who are skilled and know the latest tools.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-success flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h5 className="text-2xl font-bold text-slate-900 mb-4">Solution:</h5>
              <p className="text-lg font-bold text-slate-900 mb-3">
                Upskill + Certify + Know Your Role → You get hired.
              </p>
              <p className="text-base text-gray-700 font-medium">
                90% Companies Expecting Certifications to Get Job in 2-3 Attempts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-accent text-white p-6 sm:p-8 rounded-lg">
        <div className="text-center">
          
          <h3 className="text-xl sm:text-2xl font-bold mb-2">AI Disruption Alert</h3>
          <p className="text-white/90 text-base sm:text-lg">
            47% of aerospace jobs will be impacted by AI in 10 years. Upskill now to stay relevant!
          </p>
        </div>
      </div>
    </div>;
};