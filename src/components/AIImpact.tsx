import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { Brain, AlertTriangle, Shield, TrendingUp, AlertCircle } from 'lucide-react';
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
const COLORS = ['#ef4444', '#10b981'];
export const AIImpact = () => {
  return <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Impact on Aerospace Jobs</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Automation timeline and job security analysis
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.mckinsey.com/featured-insights/artificial-intelligence/the-age-of-ai" label="McKinsey AI Report" />
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-and-workforce-evolution" label="PwC AI Workforce" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 mb-8 border-2 border-blue-200">
        <div className="flex items-start gap-4 mb-6">
          <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">AI Impact on Indian Aerospace Industry</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              AI is changing how India makes aircraft and spacecraft. Companies like HAL and DRDO are using AI to design better, check quality, and build faster.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">₹23,000 Cr+</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">India's AI Aerospace Market by 2030 ($2.8B)</div>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">60%</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">Indian Aerospace Leaders Adopting AI</div>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">2x</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">Market Growth 2024 to 2030</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
          <p className="text-base sm:text-lg font-semibold text-slate-900">
            💡 Indian engineers with AI skills earn 35-50% more in aerospace companies
          </p>
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

      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">AI Impact on Job Roles</h3>
        
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-30">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-white" />
              <div className="text-sm text-white opacity-90">5-Year Average</div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white">30%</div>
            <div className="text-sm text-white opacity-80 mt-1">Jobs at Risk</div>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-30">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-white" />
              <div className="text-sm text-white opacity-90">10-Year Average</div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white">40%</div>
            <div className="text-sm text-white opacity-80 mt-1">Jobs at Risk</div>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-30">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-white" />
              <div className="text-sm text-white opacity-90">Highest Risk</div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">43%</div>
            <div className="text-sm text-white opacity-80 mt-1">Avionics by 2030</div>
          </div>
        </div>

        {/* Chart and Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-30">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Impact Comparison</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={[
                    { role: 'Aerospace', fiveYear: 28, tenYear: 38 },
                    { role: 'Avionics', fiveYear: 33, tenYear: 43 },
                    { role: 'AME', fiveYear: 30, tenYear: 38 }
                  ]}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" stroke="#fff" />
                  <YAxis dataKey="role" type="category" stroke="#fff" width={80} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Bar dataKey="fiveYear" fill="#fb923c" name="5 Years" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="tenYear" fill="#dc2626" name="10 Years" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Enhanced Table */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-30">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Detailed Breakdown</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-white border-opacity-30">
                    <th className="text-left py-3 px-2 text-white font-bold text-sm">Role</th>
                    <th className="text-center py-3 px-2 text-white font-bold text-sm">5Y</th>
                    <th className="text-center py-3 px-2 text-white font-bold text-sm">10Y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 transition-colors">
                    <td className="py-3 px-2 font-medium text-white text-sm">Aerospace Engineer</td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-orange-500 text-white font-bold px-2 py-1 rounded text-sm">28%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '28%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded text-sm">38%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 transition-colors">
                    <td className="py-3 px-2 font-medium text-white text-sm">Avionics Engineer</td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-orange-500 text-white font-bold px-2 py-1 rounded text-sm">33%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded text-sm">43%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '43%' }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                    <td className="py-3 px-2 font-medium text-white text-sm">AME</td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-orange-500 text-white font-bold px-2 py-1 rounded text-sm">30%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2">
                      <div className="space-y-1">
                        <span className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded text-sm">38%</span>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
                          <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Comparison Callout */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">AI Skills Make the Difference</h4>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-bold text-green-600">With AI Skills:</span>
                  <span className="text-slate-800"> 72% job security in 5 years</span>
                </p>
                <p className="text-lg">
                  <span className="font-bold text-red-600">Without AI Skills:</span>
                  <span className="text-slate-800"> Only 60% security</span>
                </p>
                <p className="text-base text-orange-600 font-bold mt-4">
                  ⚠️ Ignoring AI skills reduces hiring chances by 40%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <div className="flex items-start space-x-3 sm:space-x-4">
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
              <p className="text-gray-700">
                Companies still hiring but only for students who are skilled and know the latest tools.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-success flex-shrink-0 mt-1" />
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
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 sm:p-8 rounded-lg">
        <div className="text-center">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold mb-2">AI Disruption Alert</h3>
          <p className="text-orange-100 text-base sm:text-lg">
            47% of aerospace jobs will be impacted by AI in 10 years. Upskill now to stay relevant!
          </p>
        </div>
      </div>
    </div>;
};