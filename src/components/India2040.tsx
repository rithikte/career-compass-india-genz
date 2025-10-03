import React from 'react';
import { Plane, Shield, TrendingUp } from 'lucide-react';
import SourceBadge from './SourceBadge';

const visionData = [
  {
    projection: '🇮🇳 70% of aircraft assembled in India by 2040',
    source: 'Government "Vision 2040 for Civil Aviation"',
    meaning: 'Massive demand for aerospace engineers and manufacturing talent'
  },
  {
    projection: '🇮🇳 90% of MRO done domestically by 2040',
    source: 'Government "Vision 2040"',
    meaning: 'Huge growth for AME careers and maintenance companies'
  },
  {
    projection: '📈 Thousands of new aircraft needed in India over next 20 years',
    source: 'Airbus Global Market Forecast',
    meaning: 'Long-term hiring for design, testing, avionics, and production'
  }
];

const careerRoles = [
  {
    icon: Plane,
    title: 'Aerospace Engineers',
    description: 'will design the aircraft India flies and exports.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: TrendingUp,
    title: 'Avionics Engineers',
    description: 'will build the systems that make them smart and safe.',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Shield,
    title: 'Maintenance Engineers (AME)',
    description: 'will keep them flying every single day.',
    color: 'from-green-600 to-green-700'
  }
];

export const India2040 = () => {
  return <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          🇮🇳 2040 Impact Vision
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          India's Long-Term Aviation Blueprint
        </p>
      </div>

      {/* Key Projections Table - Mobile */}
      <div className="block lg:hidden space-y-4 mb-8 px-4">
        {visionData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <div className="mb-3">
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.projection}</h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start">
                <span className="text-gray-600 font-semibold mr-2 flex-shrink-0">Source:</span>
                <span className="text-blue-600">{item.source}</span>
              </div>
              <div className="flex items-start pt-2 border-t">
                <span className="text-gray-600 font-semibold mr-2 flex-shrink-0">Meaning:</span>
                <span className="text-gray-700">{item.meaning}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Projections Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto mb-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Key Projection</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Source</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {visionData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-sm font-bold text-slate-900">{item.projection}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-blue-600">{item.source}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{item.meaning}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What You Will Help Build Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mx-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            What You Will Help Build
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            These careers are not just jobs — they are part of India's long-term plan to become a global aviation power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerRoles.map((role, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className={`bg-gradient-to-r ${role.color} text-white p-4 rounded-lg mb-4 flex items-center justify-center`}>
                <role.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{role.title}</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>;
};