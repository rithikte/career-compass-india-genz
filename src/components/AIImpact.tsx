import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { AlertTriangle, Shield } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
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


      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">AI Impact on Job Roles</h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how much each role will change, helping students choose roles that stay relevant long-term.
              </span>
            </div>
          </div>
        </div>
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
            Ignoring AI skills reduces hiring chances by 40%.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-xl p-6 sm:p-8 mb-8 border border-border/50">
        <div className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Cause of Impact</h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Explains why AI affects some tasks, so students know what skills they must upgrade early.
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 p-6 sm:p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 relative z-10">Aerospace Engineer</h4>
            <div className="space-y-4 relative z-10">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-primary text-base sm:text-lg">5-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">Partial automation. Engineers still essential for oversight and certification.</p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-primary text-base sm:text-lg">10-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">Structural shift. Routine, repetitive, and documentation-heavy tasks get automated; roles evolve toward system supervision, AI-model validation, and integration oversight.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-cyan-500/5 p-6 sm:p-8 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 relative z-10">Avionics Engineer</h4>
            <div className="space-y-4 relative z-10">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-blue-600 text-base sm:text-lg">5-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">AI will handle most system checks and flight data analysis, while engineers watch and verify.</p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-blue-600 text-base sm:text-lg">10-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">Smart, self-learning avionics will do much of the troubleshooting automatically, reducing manual work.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-success/5 via-success/10 to-emerald-500/5 p-6 sm:p-8 border-2 border-success/20 hover:border-success/40 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl"></div>
            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 relative z-10">Aircraft Maintenance Engineer (AME)</h4>
            <div className="space-y-4 relative z-10">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-success text-base sm:text-lg">5-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">AI and sensors will spot faults early, so engineers spend less time on manual checks.</p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <span className="font-bold text-success text-base sm:text-lg">10-year impact:</span>
                <p className="text-muted-foreground mt-2 leading-relaxed">Robots and smart systems will do most inspections and small repairs, while engineers handle data-based maintenance work.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-warning/10 to-destructive/10 p-6 border-2 border-warning/40 hover:border-warning/60 transition-all duration-300">
            <div className="absolute top-0 left-0 w-24 h-24 bg-warning/20 rounded-full blur-2xl"></div>
            <p className="text-base sm:text-lg font-bold text-foreground relative z-10">
              Caution: Job count may reduce slightly, but value of human-AI hybrid engineers will rise. Adapt or be replaced.
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

      {/* Job Safety Meter Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">Job Safety Meter</h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-2">Understanding AI risk and job security across aerospace roles (2025-2040)</p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students and parents judge how secure each job is in the AI future.
              </span>
            </div>
          </div>
        </div>

        {/* Aerospace Engineer Safety Meter */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Aerospace Engineer – Job Safety Meter</h4>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Rating</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">AI/Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-green-600">Low (30–35%)</td>
                  <td className="py-3 px-4 text-gray-700">AI can help in design, but it can't replace human creativity or safety logic.</td>
                </tr>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Role Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">Very High</td>
                  <td className="py-3 px-4 text-gray-700">Engineers still needed for testing, validation, and final design approval.</td>
                </tr>
                <tr className="hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Safety Level (2025–2040)</td>
                  <td className="py-3 px-4 font-bold text-green-600">8.5/10 – Very Safe</td>
                  <td className="py-3 px-4 text-gray-700">New aerospace, space, and defence projects keep long-term demand strong.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">AI/Automation Risk</div>
              <div className="font-bold text-green-600 text-base mb-1">Low (30–35%)</div>
              <div className="text-gray-700 text-xs">AI can help in design, but it can't replace human creativity or safety logic.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Human Role Importance</div>
              <div className="font-bold text-blue-600 text-base mb-1">Very High</div>
              <div className="text-gray-700 text-xs">Engineers still needed for testing, validation, and final design approval.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Safety Level (2025–2040)</div>
              <div className="font-bold text-green-600 text-base mb-1">8.5/10 – Very Safe</div>
              <div className="text-gray-700 text-xs">New aerospace, space, and defence projects keep long-term demand strong.</div>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white rounded-lg p-3 sm:p-4 mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg">
              Parent Message: Aerospace jobs are safe. AI is a tool, not a threat. Human design judgment stays valuable.
            </p>
          </div>
        </div>

        {/* Avionics Engineer Safety Meter */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Avionics Engineer – Job Safety Meter</h4>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-orange-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Rating</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">AI/Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-orange-600">Medium (45–50%)</td>
                  <td className="py-3 px-4 text-gray-700">AI will take over testing and monitoring, but skilled engineers can adapt easily.</td>
                </tr>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Role Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">High</td>
                  <td className="py-3 px-4 text-gray-700">Still need humans for system design, troubleshooting, and safety integration.</td>
                </tr>
                <tr className="hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Safety Level (2025–2040)</td>
                  <td className="py-3 px-4 font-bold text-green-600">7/10 – Stable but evolving</td>
                  <td className="py-3 px-4 text-gray-700">Need to keep learning embedded AI, automation tools to stay future-ready.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">AI/Automation Risk</div>
              <div className="font-bold text-orange-600 text-base mb-1">Medium (45–50%)</div>
              <div className="text-gray-700 text-xs">AI will take over testing and monitoring, but skilled engineers can adapt easily.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Human Role Importance</div>
              <div className="font-bold text-blue-600 text-base mb-1">High</div>
              <div className="text-gray-700 text-xs">Still need humans for system design, troubleshooting, and safety integration.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Safety Level (2025–2040)</div>
              <div className="font-bold text-green-600 text-base mb-1">7/10 – Stable but evolving</div>
              <div className="text-gray-700 text-xs">Need to keep learning embedded AI, automation tools to stay future-ready.</div>
            </div>
          </div>
          
          <div className="bg-orange-600 text-white rounded-lg p-3 sm:p-4 mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg">
              Parent Message: Safe career with strong demand — but students must keep updating their tech skills.
            </p>
          </div>
        </div>

        {/* AME Safety Meter */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border-2 border-green-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Aircraft Maintenance Engineer (AME) – Job Safety Meter</h4>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-green-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Rating</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">AI/Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-green-600">Very Low (25–30%)</td>
                  <td className="py-3 px-4 text-gray-700">AI can predict faults, but only licensed humans can inspect and certify.</td>
                </tr>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Role Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">Extremely High</td>
                  <td className="py-3 px-4 text-gray-700">Physical inspection and safety clearance cannot be automated.</td>
                </tr>
                <tr className="hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Safety Level (2025–2040)</td>
                  <td className="py-3 px-4 font-bold text-green-600">9.5/10 – Highly Safe</td>
                  <td className="py-3 px-4 text-gray-700">Global shortage of AMEs + legal requirement ensures job security.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-green-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">AI/Automation Risk</div>
              <div className="font-bold text-green-600 text-base mb-1">Very Low (25–30%)</div>
              <div className="text-gray-700 text-xs">AI can predict faults, but only licensed humans can inspect and certify.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-green-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Human Role Importance</div>
              <div className="font-bold text-blue-600 text-base mb-1">Extremely High</div>
              <div className="text-gray-700 text-xs">Physical inspection and safety clearance cannot be automated.</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-green-200">
              <div className="font-semibold text-slate-800 text-sm mb-1">Safety Level (2025–2040)</div>
              <div className="font-bold text-green-600 text-base mb-1">9.5/10 – Highly Safe</div>
              <div className="text-gray-700 text-xs">Global shortage of AMEs + legal requirement ensures job security.</div>
            </div>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg p-3 sm:p-4 mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg">
              Parent Message: AME is one of the most protected jobs — legally required, respected, and AI-proof.
            </p>
          </div>
        </div>

        {/* Platform Summary Table */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-6 border-2 border-slate-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4 text-center">🧭 Platform Summary Table</h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-slate-900">Job Role</TableHead>
                  <TableHead className="font-bold text-slate-900">AI Risk</TableHead>
                  <TableHead className="font-bold text-slate-900">Safety Level</TableHead>
                  <TableHead className="font-bold text-slate-900">Simple Parent Insight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-slate-100">
                  <TableCell className="font-semibold text-slate-800">Aerospace Engineer</TableCell>
                  <TableCell className="font-bold text-green-600">Low (30–35%)</TableCell>
                  <TableCell className="font-bold text-green-600">8.5/10</TableCell>
                  <TableCell className="text-gray-700">Human creativity keeps this job safe.</TableCell>
                </TableRow>
                <TableRow className="hover:bg-slate-100">
                  <TableCell className="font-semibold text-slate-800">Avionics Engineer</TableCell>
                  <TableCell className="font-bold text-orange-600">Medium (45–50%)</TableCell>
                  <TableCell className="font-bold text-yellow-600">7/10</TableCell>
                  <TableCell className="text-gray-700">Safe with continuous tech learning.</TableCell>
                </TableRow>
                <TableRow className="hover:bg-slate-100">
                  <TableCell className="font-semibold text-slate-800">AME</TableCell>
                  <TableCell className="font-bold text-green-600">Very Low (25–30%)</TableCell>
                  <TableCell className="font-bold text-green-600">9.5/10</TableCell>
                  <TableCell className="text-gray-700">One of the safest, AI-proof careers.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">Aerospace Engineer</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500">AI Risk:</span> <span className="font-bold text-green-600">Low (30–35%)</span></div>
                <div><span className="text-gray-500">Safety:</span> <span className="font-bold text-green-600">8.5/10</span></div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Human creativity keeps this job safe.</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">Avionics Engineer</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500">AI Risk:</span> <span className="font-bold text-orange-600">Medium (45–50%)</span></div>
                <div><span className="text-gray-500">Safety:</span> <span className="font-bold text-yellow-600">7/10</span></div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Safe with continuous tech learning.</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">AME</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500">AI Risk:</span> <span className="font-bold text-green-600">Very Low (25–30%)</span></div>
                <div><span className="text-gray-500">Safety:</span> <span className="font-bold text-green-600">9.5/10</span></div>
              </div>
              <div className="text-gray-700 text-xs mt-2">One of the safest, AI-proof careers.</div>
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

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing AI impact early helps students adapt, upskill, and stay employable, instead of being replaced.
          </p>
        </div>
      </div>
    </div>;
};