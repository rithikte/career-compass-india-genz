import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Zap, Target } from 'lucide-react';

const growthData = [
  {
    role: 'Aerospace Engineer',
    cagr: 9,
    reason: 'ISRO, Skyroot, defense aircraft growth',
    trend: 'Steady Growth',
    color: '#3b82f6'
  },
  {
    role: 'Avionics Engineer',
    cagr: 11,
    reason: 'Embedded systems demand',
    trend: 'High Growth',
    color: '#6366f1'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    cagr: 13.5,
    reason: 'India becoming global MRO hub',
    trend: 'Boom',
    color: '#8b5cf6'
  }
];

// Generate growth projection data
const projectionData = growthData.map(item => ({
  role: item.role.split(' ')[0],
  cagr: item.cagr,
  year1: 100,
  year5: 100 * Math.pow(1 + item.cagr/100, 5),
  year10: 100 * Math.pow(1 + item.cagr/100, 10),
  year15: 100 * Math.pow(1 + item.cagr/100, 15)
}));

export const GrowthRate = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          How Fast Is This Career Growing?
        </h2>
        <p className="text-xl text-gray-600">
          CAGR Analysis 2025–2040 • Industry Growth Projections
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {growthData.map((item, index) => (
          <div
            key={item.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.cagr >= 15 ? 'bg-green-100 text-green-800' :
                item.cagr >= 10 ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {item.trend}
              </span>
            </div>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold" style={{ color: item.color }}>
                {item.cagr}%
              </div>
              <div className="text-sm text-gray-600">Annual Growth Rate</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{item.reason}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">5 Years</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr/100, 5) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">10 Years</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr/100, 10) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">15 Years</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr/100, 15) - 1) * 100)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
          Growth Projection Comparison
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" label={{ value: "Career Role", position: "insideBottom", offset: -4 }} />
              <YAxis 
                label={{
                  value: "Growth Index (100 = baseline jobs)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" }
                }}
                tickFormatter={(v) => `${Math.round(v)}`}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  `${Math.round(value)} (Growth Index)`,
                  name
                ]}
                labelFormatter={label => `Role: ${label}`}
                contentStyle={{ borderRadius: 8, fontWeight: 'bold' }}
              />
              <Line type="monotone" dataKey="year5" stroke="#3b82f6" strokeWidth={2} name="5 Years" />
              <Line type="monotone" dataKey="year10" stroke="#10b981" strokeWidth={2} name="10 Years" />
              <Line type="monotone" dataKey="year15" stroke="#f59e0b" strokeWidth={2} name="15 Years" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-blue-50 mt-8 rounded p-4 max-w-2xl mx-auto border border-blue-200">
          <span className="font-bold block mb-4 text-blue-900 text-lg text-center w-full">How to understand it easily:</span>
          <div className="flex flex-col gap-3 text-base sm:text-lg">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-blue-900" style={{ minWidth: 100 }}>
                0
              </span>
              <span className="text-blue-900 font-normal">= Same number of jobs as today</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-green-900" style={{ minWidth: 100 }}>
                200
              </span>
              <span className="text-green-900 font-normal">= Double the jobs!</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-yellow-900" style={{ minWidth: 100 }}>
                Bigger number
              </span>
              <span className="text-yellow-900 font-normal">= More job chances for you in future!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Target className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Growth Spotlight</h3>
          <p className="text-green-200 text-lg mb-6">
            Aircraft Maintenance Engineering leads with 13.5% CAGR - fastest growing aerospace career
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">13.5%</div>
              <div className="text-green-200">Aircraft Maintenance</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">11%</div>
              <div className="text-green-200">Avionics Engineering</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">9%</div>
              <div className="text-green-200">Aerospace Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
