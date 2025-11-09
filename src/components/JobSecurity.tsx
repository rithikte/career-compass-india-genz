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
              <Bar dataKey="withAI" fill="hsl(142 76% 42%)" name="With AI Skills" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withoutAI" fill="hsl(0 72% 51%)" name="Without AI Skills" radius={[4, 4, 0, 0]} />
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

      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 rounded-xl shadow-xl p-6 sm:p-8 mb-8 border border-border/50">
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Difference between Traditional Skills and AI-Enhanced Skill Career Durability
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Compare how traditional skills and AI-enhanced skills impact your career longevity.
          </p>
          
          <div className="overflow-x-auto backdrop-blur-sm bg-background/50 rounded-lg border border-border/50 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Role</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Traditional Skill</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">AI-Enhanced Skill</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Career Durability Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">Aerospace Engineer</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-base font-bold text-muted-foreground">7–8 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="font-bold text-foreground">15–18 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-success/20 to-success/30 font-bold text-success border border-success/30">88%</span>
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">Avionics Engineer</td>
                  <td className="text-center py-4 px-4">
                    <span className="font-bold text-muted-foreground">6–7 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="font-bold text-foreground">14–16 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-success/20 to-success/30 font-bold text-success border border-success/30">85%</span>
                  </td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">AME</td>
                  <td className="text-center py-4 px-4">
                    <span className="font-bold text-muted-foreground">8–9 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="font-bold text-foreground">16–20 yrs</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-success/20 to-success/30 font-bold text-success border border-success/30">90%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-l-4 border-primary p-6 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-foreground mb-3 text-lg">What It Means</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">Traditional Skill:</strong> Shows how quickly skills lose value without continuous learning.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-success/10 via-success/5 to-background border-l-4 border-success p-6 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-foreground mb-3 text-lg">Why It Matters</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">AI-Enhanced Skill:</strong> Proves that learning new technologies can double your career life and job security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>;
};