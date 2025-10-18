import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Zap, Target, Building2, Brain } from 'lucide-react';
import SourceBadge from './SourceBadge';
const growthData = [{
  role: 'Aerospace Engineer',
  cagr: 9,
  reason: 'ISRO, Skyroot, defense aircraft growth',
  trend: 'Steady Growth',
  color: '#3b82f6'
}, {
  role: 'Avionics Engineer',
  cagr: 11,
  reason: 'Embedded systems demand',
  trend: 'High Growth',
  color: '#6366f1'
}, {
  role: 'Aircraft Maintenance Eng.',
  cagr: 13.5,
  reason: 'India becoming global MRO hub',
  trend: 'Boom',
  color: '#8b5cf6'
}];

// New Companies Growth Data
const newCompaniesGrowthData = [
  {
    category: "Foreign/Tier-1/2 Companies",
    icon: Building2,
    color: "#3b82f6",
    baseCAGR: 14,
    rates: {
      "2030": "15",
      "2035": "14–16",
      "2040": "13–14"
    },
    trend: "Steady Entry",
    reason: "Global supply chain shift",
    description: "Established international companies entering Indian market"
  },
  {
    category: "Startups (Aviation/Avionics/AI/MRO-tech)",
    icon: Brain,
    color: "#a855f7",
    baseCAGR: 11,
    rates: {
      "2030": "14–16",
      "2035": "7–10",
      "2040": "11–13"
    },
    trend: "Rapid Growth",
    reason: "Drone and AI boom",
    description: "Aviation, avionics/AI, MRO-tech startups emerging in India"
  }
];

// Generate growth projection data with real job numbers
const projectionData = [{
  role: 'Aerospace Engineer',
  Today: 10000,
  'In 10 Years': 23674,
  'In 15 Years': 30000
}, {
  role: 'Avionics Engineer',
  Today: 8000,
  'In 10 Years': 20526,
  'In 15 Years': 28000
}, {
  role: 'Aircraft Maintenance',
  Today: 12000,
  'In 10 Years': 34000,
  'In 15 Years': 45000
}];
export const GrowthRate = () => {
  return <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          How Fast Is This Career Growing?
        </h2>
        <p className="text-xl text-gray-600">
          CAGR Analysis 2025–2040 • Industry Growth Projections
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.ibef.org/industry/aerospace-defence" label="IBEF Reports" />
          <SourceBadge href="https://www.investindia.gov.in/sector/defence-manufacturing" label="Invest India" />
          <SourceBadge href="https://www.ficci.in/pressrelease/3769/ficci-media-release-june-28-2023.pdf" label="FICCI Aerospace" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">
          Will There Be More Jobs in the Future?
        </h3>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Yes! See how many more jobs will be available over time
        </p>
        
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg mb-8">
          <h4 className="text-center font-bold text-slate-900 mb-4 text-xl">Visual Job Growth</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-center">
                <div className="font-semibold text-slate-700 mb-2">Today</div>
                <div className="text-3xl font-bold text-slate-700">30k+</div>
                <div className="text-sm text-slate-600">Jobs</div>
              </div>
              <div className="relative h-12 bg-slate-200 rounded-lg overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg transition-all duration-1000 ease-out animate-in" style={{
                width: '30%'
              }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">30k+</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-center">
                <div className="font-semibold text-blue-700 mb-2">10 Years</div>
                <div className="text-3xl font-bold text-blue-700">78k+</div>
                <div className="text-sm text-blue-600">Jobs</div>
              </div>
              <div className="relative h-12 bg-blue-100 rounded-lg overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg transition-all duration-1500 ease-out animate-in delay-300" style={{
                width: '65%'
              }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">78k+</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-center">
                <div className="font-semibold text-green-700 mb-2">15 Years</div>
                <div className="text-3xl font-bold text-green-700">1M+</div>
                <div className="text-sm text-green-600">Jobs</div>
              </div>
              <div className="relative h-12 bg-green-100 rounded-lg overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg transition-all duration-2000 ease-out animate-in delay-600" style={{
                width: '100%'
              }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">1M+</div>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-lg font-bold text-green-700">
            🎯 Your chances of getting hired MORE THAN TRIPLE!
          </p>
        </div>

        <div className="relative group max-w-3xl mx-auto mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
          
        </div>

        <div className="h-96 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis label={{
              value: "Number of Jobs",
              angle: -90,
              position: "insideLeft",
              style: {
                textAnchor: "middle"
              }
            }} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => [`${value.toLocaleString()} jobs`, '']} contentStyle={{
              borderRadius: 8,
              fontWeight: 'bold'
            }} />
              <Legend />
              <Bar dataKey="Today" fill="#94a3b8" animationDuration={1000} animationBegin={0} />
              <Bar dataKey="In 10 Years" fill="#3b82f6" animationDuration={1000} animationBegin={300} />
              <Bar dataKey="In 15 Years" fill="#10b981" animationDuration={1000} animationBegin={600} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {growthData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.cagr >= 15 ? 'bg-green-100 text-green-800' : item.cagr >= 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                {item.trend}
              </span>
            </div>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold" style={{
            color: item.color
          }}>
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
                  +{Math.round((Math.pow(1 + item.cagr / 100, 5) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">10 Years</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr / 100, 10) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">15 Years</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr / 100, 15) - 1) * 100)}%
                </span>
              </div>
            </div>
          </div>)}
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

      {/* Real-world Growth Drivers - Swiss Design */}
      <div className="bg-background border-2 border-primary/20 rounded-xl p-8 mb-12 shadow-elegant">
        
        
        
        
        {/* Global vs India Snapshot */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center mb-6">
            <h5 className="text-xl font-black text-foreground mb-2">🌍 GLOBAL VS INDIA SNAPSHOT</h5>
            <p className="text-muted-foreground">Comparative Growth Analysis</p>
          </div>
          <div className="bg-success/10 rounded-xl p-6 border border-success/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-success mb-2">11-13%</div>
                <div className="text-sm text-muted-foreground">India Aerospace CAGR</div>
              </div>
              <div className="text-2xl text-muted-foreground font-light flex items-center justify-center">vs</div>
              <div>
                <div className="text-3xl font-black text-muted-foreground mb-2">7-8%</div>
                <div className="text-sm text-muted-foreground">Global Average CAGR</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-success/20 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Sources:</strong> PwC Global Aerospace Report 2024, FICCI Aerospace Analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Companies Growth Rate by 2040 - Enhanced */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Building2 className="w-7 h-7 text-indigo-600 mr-2" />
            <h3 className="text-3xl font-bold text-slate-900">New Companies Growth Rate by 2040</h3>
          </div>
          <p className="text-gray-600">
            How fast new aerospace companies are entering the Indian market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newCompaniesGrowthData.map((item) => (
            <div key={item.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Header with badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <item.icon className="w-6 h-6 mr-2" style={{color: item.color}} />
                  <h4 className="text-lg font-bold text-slate-900">{item.category}</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.baseCAGR >= 13 ? 'bg-green-100 text-green-800' : 
                  item.baseCAGR >= 10 ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {item.trend}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              {/* Central CAGR */}
              <div className="text-center mb-4">
                <div className="text-4xl font-bold" style={{color: item.color}}>
                  {item.baseCAGR}%
                </div>
                <div className="text-sm text-gray-600">Average Annual Growth Rate</div>
              </div>

              {/* Reason box */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-start">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{item.reason}</p>
                </div>
              </div>

              {/* Year breakdown */}
              <div className="space-y-3 mb-4">
                <div className="text-xs font-semibold text-gray-500">ANNUAL GROWTH BY YEAR</div>
                {Object.entries(item.rates).map(([year, rate]) => (
                  <div key={year} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{year}</span>
                    <span className="font-semibold" style={{color: item.color}}>{rate}%</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Source Documentation */}
      
    </div>
    </div>;
};