
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadialBarChart, RadialBar } from 'recharts';
import { TrendingUp, Users, Briefcase, Target, Zap, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

// Enhanced demand visualization data
const jobGrowthProjection = demandData.map(item => ({
  role: item.shortName,
  current: item['2025'],
  projected: item['2040'],
  growth: ((item['2040'] / item['2025'] - 1) * 100).toFixed(0)
}));

const demandCategoryData = [
  { category: 'High Demand', count: 4, color: '#10b981' },
  { category: 'Medium Demand', count: 2, color: '#f59e0b' },
  { category: 'Emerging', count: 1, color: '#3b82f6' }
];

export const JobDemand = () => {
  const totalJobs2025 = demandData.reduce((sum, item) => sum + item['2025'], 0);
  const totalJobs2040 = demandData.reduce((sum, item) => sum + item['2040'], 0);

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl -z-10"></div>
        <div className="py-12">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            JOB DEMAND FORECAST
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            2025 vs 2040 • Market Explosion Analysis
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg animate-pulse-glow">
              <div className="text-3xl font-bold text-green-600">{Math.round(((totalJobs2040/totalJobs2025) - 1) * 100)}%</div>
              <div className="text-sm text-gray-600">Growth Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{(totalJobs2040/100000).toFixed(1)}M</div>
              <div className="text-sm text-gray-600">Jobs by 2040</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">Career Paths</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visualization - 60% Charts */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Large Chart Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                Job Demand Growth Projection (2025-2040)
              </CardTitle>
              <CardDescription className="text-lg">
                Massive opportunity explosion across all aerospace roles
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={jobGrowthProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis tickFormatter={(value) => `${value/1000}K`} />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      `${(value/1000).toFixed(0)}K jobs`, 
                      name === 'current' ? 'Current (2025)' : 'Projected (2040)'
                    ]}
                  />
                  <Line type="monotone" dataKey="current" stroke="#3b82f6" strokeWidth={3} name="current" />
                  <Line type="monotone" dataKey="projected" stroke="#10b981" strokeWidth={3} name="projected" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Demand Categories Pie Chart */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                Market Demand Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demandCategoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="count"
                  >
                    {demandCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {demandCategoryData.map((item) => (
                  <div key={item.category} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-sm">{item.category} ({item.count})</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Key Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              Market Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center bg-blue-50 p-4 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-blue-600">{(totalJobs2025/1000).toFixed(0)}K</div>
                <div className="text-blue-700 font-medium">Jobs in 2025</div>
              </div>
              
              <div className="text-center bg-green-50 p-4 rounded-lg">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-green-600">{(totalJobs2040/100000).toFixed(1)}M</div>
                <div className="text-green-700 font-medium">Jobs in 2040</div>
              </div>
              
              <div className="text-center bg-purple-50 p-4 rounded-lg">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold text-purple-600">{Math.round(((totalJobs2040/totalJobs2025) - 1) * 100)}%</div>
                <div className="text-purple-700 font-medium">Total Growth</div>
              </div>

              <div className="space-y-3 mt-6">
                <h4 className="font-bold text-gray-900">Growth Drivers:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">ISRO missions expansion</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Defense modernization</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Drone technology boom</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">AI in aviation</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
