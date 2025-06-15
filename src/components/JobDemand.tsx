
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Briefcase } from 'lucide-react';

const demandData = [
  {
    role: 'Aerospace Engineer',
    '2025': 90000,
    '2040': 250000,
    growth: 178,
    shortName: 'Aerospace',
    why: 'ISRO missions + defense expansion'
  },
  {
    role: 'Avionics Engineer',
    '2025': 35000,
    '2040': 140000,
    growth: 300,
    shortName: 'Avionics',
    why: 'Smart aircraft systems boom'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    '2025': 60000,
    '2040': 250000,
    growth: 317,
    shortName: 'Maintenance',
    why: 'India becoming global MRO hub'
  },
  {
    role: 'Flight Test Engineer',
    '2025': 6000,
    '2040': 18000,
    growth: 200,
    shortName: 'Flight Test',
    why: 'More indigenous aircraft development'
  },
  {
    role: 'Drone/UAV Engineer',
    '2025': 25000,
    '2040': 500000,
    growth: 1900,
    shortName: 'Drone/UAV',
    why: '1000+ drone startups launching'
  },
  {
    role: 'Data Analyst (Aviation)',
    '2025': 18000,
    '2040': 300000,
    growth: 1567,
    shortName: 'Data Analyst',
    why: 'AI-driven predictive maintenance'
  }
];

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

export const JobDemand = () => {
  const totalJobs2025 = demandData.reduce((sum, item) => sum + item['2025'], 0);
  const totalJobs2040 = demandData.reduce((sum, item) => sum + item['2040'], 0);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Job Demand Forecast
        </h2>
        <p className="text-xl text-gray-600">
          2025 vs 2040 • Market Explosion Analysis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">{(totalJobs2025/1000).toFixed(0)}K</div>
          <div className="text-blue-200">Jobs in 2025</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">{(totalJobs2040/100000).toFixed(1)}M</div>
          <div className="text-green-200">Jobs in 2040</div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-lg text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">{Math.round(((totalJobs2040/totalJobs2025) - 1) * 100)}%</div>
          <div className="text-purple-200">Total Growth</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Job Demand Comparison: 2025 vs 2040
        </h3>
        <div className="h-96 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demandData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="shortName" />
              <YAxis tickFormatter={(value) => `${value/1000}K`} />
              <Tooltip 
                formatter={(value: number, name: string) => [`${(value/1000).toFixed(0)}K jobs`, name]}
                labelStyle={{ color: '#1e293b' }}
              />
              <Bar dataKey="2025" fill="#3b82f6" name="2025" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2040" fill="#10b981" name="2040" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {demandData.map((item, index) => (
          <div
            key={item.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4">{item.role}</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">2025 Jobs</span>
                <span className="font-bold text-blue-600">
                  {(item['2025']/1000).toFixed(0)}K
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">2040 Jobs</span>
                <span className="font-bold text-green-600">
                  {item['2040'] >= 100000 ? `${(item['2040']/100000).toFixed(1)}M` : `${(item['2040']/1000).toFixed(0)}K`}
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Growth</span>
                  <span className={`font-bold px-3 py-1 rounded-full text-sm ${
                    item.growth >= 1000 ? 'bg-red-100 text-red-800' :
                    item.growth >= 300 ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    +{item.growth}%
                  </span>
                </div>
                <div
                  className="mt-3 flex justify-center items-center text-center font-semibold text-sm rounded-md py-2 px-2"
                  style={{
                    background: 'linear-gradient(90deg, #e0ecff 0%, #f0fff4 100%)',
                  }}
                >
                  Why: {item.why}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 Demand Explosion Alert</h3>
          <p className="text-red-200 text-lg mb-6">
            Drone/UAV Engineering will see 1900% growth - from 25K to 5 Lakh jobs!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">5 Lakh</div>
              <div className="text-red-200">Drone Jobs by 2040</div>
            </div>
            <div className="bg-orange-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">3 Lakh</div>
              <div className="text-orange-200">Data Analyst Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
