import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Briefcase } from 'lucide-react';
import SourceBadge from './SourceBadge';
const demandData = [{
  role: 'Aerospace Engineer',
  '2025': 1200,
  '2030': 1450,
  '2035': 1700,
  '2040': 1900,
  growth: 58,
  shortName: 'Aerospace',
  why: 'ISRO missions + defense expansion'
}, {
  role: 'Avionics Engineer',
  '2025': 700,
  '2030': 800,
  '2035': 950,
  '2040': 1050,
  growth: 50,
  shortName: 'Avionics',
  why: 'Smart aircraft systems boom'
}, {
  role: 'Aircraft Maintenance Eng.',
  '2025': 2000,
  '2030': 2400,
  '2035': 2800,
  '2040': 3000,
  growth: 50,
  shortName: 'Maintenance',
  why: 'India becoming global MRO hub'
}];
const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
export const JobDemand = () => {
  const totalJobs2025 = demandData.reduce((sum, item) => sum + item['2025'], 0);
  const totalJobs2040 = demandData.reduce((sum, item) => sum + item['2040'], 0);
  return <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          New Hires Per Year Forecast
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          2025 vs 2040 • Annual Hiring Growth Analysis
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.assocham.org/reports/aerospace-defence-in-india" label="ASSOCHAM Report" />
          <SourceBadge href="https://www.pwc.in/research-and-insights-hub/aerospace-and-defence" label="PwC India Analysis" />
          <SourceBadge href="https://www.skillscouncil.in/aerospace-reports" label="Skills Council" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">Average Yearly Hiring : 2025 vs 2040</h3>
        <div className="h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demandData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="shortName" />
              <YAxis tickFormatter={value => value.toLocaleString()} />
              <Tooltip formatter={(value: number, name: string) => [`${value.toLocaleString()} hires/year`, name]} labelStyle={{
              color: '#1e293b'
            }} />
              <Bar dataKey="2025" fill="#3b82f6" name="2025" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2040" fill="#10b981" name="2040" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {demandData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">{item.role}</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2025 Hires/Year</span>
                <span className="font-bold text-blue-600">
                  {item['2025'].toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2030 Hires/Year</span>
                <span className="font-bold text-indigo-600">
                  {item['2030'].toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2035 Hires/Year</span>
                <span className="font-bold text-purple-600">
                  {item['2035'].toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2040 Hires/Year</span>
                <span className="font-bold text-green-600">
                  {item['2040'].toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Growth</span>
                  <span className={`font-bold px-3 py-1 rounded-full text-sm ${item.growth >= 1000 ? 'bg-red-100 text-red-800' : item.growth >= 300 ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                    +{item.growth}%
                  </span>
                </div>
                <div className="mt-3 flex justify-center items-center text-center font-semibold text-sm rounded-md py-2 px-2" style={{
              background: 'linear-gradient(90deg, #e0ecff 0%, #f0fff4 100%)'
            }}>
                  Why: {item.why}
                </div>
              </div>
            </div>
          </div>)}
      </div>

      
    </div>;
};