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

      {/* Hiring Direction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Aerospace Engineer */}
        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Aerospace Engineer</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Hiring Direction</span>
              <span className="font-semibold text-blue-700 text-sm">Steady Long-Term Increase</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Growth Strength</span>
              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2.5 py-0.5 text-xs font-medium">
                Medium
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Key Growth Drivers:</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                Defence manufacturing expansion
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                ISRO missions & space programs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                Indigenous aircraft & systems development
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-amber-800">
              <span className="font-semibold">Reality Check:</span> Hiring is selective. Core roles grow slowly but consistently. Strong fundamentals and design skills are essential.
            </p>
          </div>
        </div>

        {/* Avionics Engineer */}
        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-t-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Avionics Engineer</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Hiring Direction</span>
              <span className="font-semibold text-indigo-700 text-sm">Moderate to Strong Increase</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Growth Strength</span>
              <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-0.5 text-xs font-medium">
                Medium–High
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Key Growth Drivers:</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                Smart aircraft systems
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                Defence electronics & avionics upgrades
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                UAVs, sensors, and embedded systems
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-amber-800">
              <span className="font-semibold">Reality Check:</span> Jobs grow with technology adoption, but skills must stay updated. Practical electronics and testing experience matters more than degree name.
            </p>
          </div>
        </div>

        {/* Aircraft Maintenance Engineer (AME) */}
        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-t-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Aircraft Maintenance Engineer (AME)</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Hiring Direction</span>
              <span className="font-semibold text-emerald-700 text-sm">Strong & Continuous Increase</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Growth Strength</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-xs font-medium">
                High
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Key Growth Drivers:</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                Airline fleet expansion
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                India developing as a global MRO hub
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                Mandatory maintenance & safety regulations
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-amber-800">
              <span className="font-semibold">Reality Check:</span> Entry is controlled by licensing, but once qualified, demand remains stable across economic cycles.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {demandData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
            
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2025 Hires/Year</span>
                <span className="font-bold text-blue-600">
                  {item['2025'].toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">2030 Hires/Year</span>
                
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