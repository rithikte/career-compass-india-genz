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

// Generate growth projection data with real job numbers
const projectionData = [
  {
    role: 'Aerospace Engineer',
    Today: 10000,
    'In 10 Years': 23674,
    'In 15 Years': 30000,
  },
  {
    role: 'Avionics Engineer',
    Today: 8000,
    'In 10 Years': 20526,
    'In 15 Years': 28000,
  },
  {
    role: 'Aircraft Maintenance',
    Today: 12000,
    'In 10 Years': 34000,
    'In 15 Years': 45000,
  }
];
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

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">
          Will There Be More Jobs in the Future?
        </h3>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Yes! See how many more jobs will be available over time
        </p>
        
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg mb-8">
          <h4 className="text-center font-bold text-slate-900 mb-4 text-xl">Visual Job Growth</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-700">👨‍💼 Today:</span>
              <div className="flex items-center space-x-2">
                <div className="bg-slate-400 h-6 w-32 rounded"></div>
                <span className="text-sm font-medium text-slate-700">30,000 jobs</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-700">👨‍💼 In 15 Years:</span>
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 h-6 w-80 rounded"></div>
                <span className="text-sm font-medium text-green-700">103,000 jobs</span>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-lg font-bold text-green-700">
            🎯 Your chances of getting hired MORE THAN TRIPLE!
          </p>
        </div>

        <div className="relative group max-w-3xl mx-auto mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-elegant border border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground text-xl mb-4">What This Means For You</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-baseline gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p><strong className="text-foreground">Today:</strong> <strong>30k+</strong> Jobs</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <p><strong className="text-foreground">In 10 Years:</strong> <strong>78k+</strong> Jobs</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="w-2 h-2 rounded-full bg-success flex-shrink-0 mt-2"></div>
                    <p><strong className="text-foreground">In 15 Years:</strong> <strong>1M+</strong> Jobs</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-bold text-foreground text-lg flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    More jobs = Better chances for you to get hired!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis 
                label={{
                  value: "Number of Jobs",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" }
                }}
                tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number) => [`${value.toLocaleString()} jobs`, '']}
                contentStyle={{ borderRadius: 8, fontWeight: 'bold' }}
              />
              <Legend />
              <Bar dataKey="Today" fill="#94a3b8" />
              <Bar dataKey="In 10 Years" fill="#3b82f6" />
              <Bar dataKey="In 15 Years" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
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

      {/* Comprehensive Source Documentation */}
      
    </div>
    </div>;
};