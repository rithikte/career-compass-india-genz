import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Zap, Target, Award, Rocket, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  },
  {
    role: 'Flight Test Engineer',
    cagr: 7,
    reason: 'HAL, DRDO test labs',
    trend: 'Moderate',
    color: '#06b6d4'
  },
  {
    role: 'Drone/UAV Engineer',
    cagr: 20,
    reason: '1000+ drone startups',
    trend: 'Explosive',
    color: '#10b981'
  },
  {
    role: 'Data Analyst (Aviation)',
    cagr: 15,
    reason: 'Predictive maintenance, data ops',
    trend: 'Boom',
    color: '#f59e0b'
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

// Enhanced growth analytics
const growthTierData = [
  { tier: 'Explosive (20%+)', count: 1, color: '#ef4444' },
  { tier: 'High (15-19%)', count: 2, color: '#f59e0b' },
  { tier: 'Steady (10-14%)', count: 2, color: '#10b981' },
  { tier: 'Moderate (7-9%)', count: 1, color: '#3b82f6' }
];

const cagrComparisonData = growthData.map(item => ({
  role: item.role.split(' ')[0],
  cagr: item.cagr,
  color: item.color,
  category: item.cagr >= 20 ? 'Explosive' : item.cagr >= 15 ? 'High' : item.cagr >= 10 ? 'Steady' : 'Moderate'
}));

export const GrowthRate = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl -z-10"></div>
        <div className="py-12">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            GROWTH ANALYSIS
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            How Fast Is This Career Growing?
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-red-600">20%</div>
              <div className="text-sm text-gray-600">Max CAGR</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-orange-600">13.5%</div>
              <div className="text-sm text-gray-600">Avg Growth</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-green-600">15yrs</div>
              <div className="text-sm text-gray-600">Time Horizon</div>
            </div>
          </div>
        </div>
      </div>

      {/* CAGR Visualization - 60% Charts */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main CAGR Comparison Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Rocket className="h-6 w-6 text-orange-600" />
                </div>
                CAGR Comparison Across Aerospace Roles
              </CardTitle>
              <CardDescription className="text-lg">
                Annual growth rates showing career acceleration potential
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cagrComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis label={{ value: 'CAGR (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value}%`, "Annual Growth"]} />
                  <Bar dataKey="cagr" radius={[8, 8, 0, 0]}>
                    {cagrComparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Growth Tiers Distribution */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                Growth Rate Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={growthTierData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="count"
                    label={({tier, count}) => `${tier}: ${count}`}
                  >
                    {growthTierData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Individual Role Cards */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                Growth Leaders
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {growthData.slice(0, 3).map((item, index) => (
                  <div key={item.role} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-sm text-slate-900">{item.role.split(' ')[0]}</h4>
                      <span className="text-lg font-bold" style={{ color: item.color }}>
                        {item.cagr}%
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">{item.reason}</p>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      15-year growth: +{Math.round((Math.pow(1 + item.cagr/100, 15) - 1) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building className="h-5 w-5 text-purple-600" />
                </div>
                Market Drivers
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-900 text-sm">🚀 Space Missions</h4>
                  <p className="text-green-800 text-xs">ISRO expanding rapidly</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-900 text-sm">🛡️ Defense Growth</h4>
                  <p className="text-blue-800 text-xs">Military modernization</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-900 text-sm">🤖 Tech Innovation</h4>
                  <p className="text-purple-800 text-xs">AI & automation</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h4 className="font-bold text-orange-900 text-sm">📊 Data Analytics</h4>
                  <p className="text-orange-800 text-xs">Predictive maintenance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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
            Drone/UAV Engineering leads with 20% CAGR - fastest growing aerospace career
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">20%</div>
              <div className="text-green-200">Drone Engineering</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">15%</div>
              <div className="text-green-200">Data Analytics</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">13.5%</div>
              <div className="text-green-200">Aircraft Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
