import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Zap, Target, Building2, Brain } from 'lucide-react';
import SourceBadge from './SourceBadge';
const growthData = [{
  role: 'Aerospace Engineer',
  cagr: 9,
  reason: 'ISRO, Skyroot, defense aircraft growth',
  trend: 'Steady Growth',
  color: 'hsl(238 90% 60%)'
}, {
  role: 'Avionics Engineer',
  cagr: 11,
  reason: 'Embedded systems demand',
  trend: 'High Growth',
  color: 'hsl(238 85% 50%)'
}, {
  role: 'Aircraft Maintenance Eng.',
  cagr: 13.5,
  reason: 'India becoming global MRO hub',
  trend: 'Boom',
  color: 'hsl(275 85% 65%)'
}];

// New Companies Growth Data
const newCompaniesGrowthData = [{
  category: "Foreign/Tier-1/2 Companies",
  icon: Building2,
  color: "hsl(238 90% 60%)",
  baseCAGR: 14,
  rates: {
    "2030": "15",
    "2035": "14–16",
    "2040": "13–14"
  },
  trend: "Steady Entry",
  reason: "Global supply chain shift",
  description: "Established international companies entering Indian market"
}, {
  category: "Startups",
  icon: Brain,
  color: "hsl(275 85% 65%)",
  baseCAGR: 11,
  rates: {
    "2030": "14–16",
    "2035": "7–10",
    "2040": "11–13"
  },
  trend: "Rapid Growth",
  reason: "Drone and AI boom",
  description: "Newer, smaller firms that build specific products or software"
}];

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

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-3xl font-bold text-slate-900">
              Jobs Growth Rate by 2040
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600">
            Annual growth rates and projections for aerospace careers
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how many job opportunities will increase in the future, helping students choose a career with long-term demand.
              </span>
            </div>
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
                <span className="text-sm text-gray-600">2030</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr / 100, 5) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">2035</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr / 100, 10) - 1) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">2040</span>
                <span className="font-semibold text-green-600">
                  +{Math.round((Math.pow(1 + item.cagr / 100, 15) - 1) * 100)}%
                </span>
              </div>
            </div>
          </div>)}
        </div>
      </div>

      {/* Global vs India Snapshot */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h5 className="text-xl font-black text-foreground">🌍 GLOBAL VS INDIA SNAPSHOT</h5>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-muted-foreground">CAGR = the average yearly growth</p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students understand why India offers stronger career growth compared to global markets.
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-success mb-2">11-13%</div>
              <div className="text-sm text-muted-foreground">India Aerospace CAGR</div>
            </div>
            <div className="text-2xl text-muted-foreground font-light flex items-center justify-center">vs</div>
            <div>
              <div className="text-3xl font-black text-success mb-2">7-8%</div>
              <div className="text-sm text-muted-foreground">Global Average CAGR</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Sources:</strong> PwC Global Aerospace Report 2024, FICCI Aerospace Analysis
            </p>
          </div>
        </div>
      </div>

      {/* New Companies Growth Rate by 2040 - Enhanced */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <Building2 className="w-7 h-7 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">New Companies Growth Rate by 2040</h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600">
            How fast new aerospace companies are entering the Indian market
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how many new companies will enter the industry, increasing hiring opportunities over time.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newCompaniesGrowthData.map(item => <div key={item.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Header with badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <item.icon className="w-6 h-6 mr-2" style={{
                color: item.color
              }} />
                  <h4 className="text-lg font-bold text-slate-900">{item.category}</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.baseCAGR >= 13 ? 'bg-green-100 text-green-800' : item.baseCAGR >= 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                  {item.trend}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              {/* Central CAGR */}
              <div className="text-center mb-4">
                <div className="text-4xl font-bold" style={{
              color: item.color
            }}>
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
                {Object.entries(item.rates).map(([year, rate]) => <div key={year} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{year}</span>
                    <span className="font-semibold" style={{
                color: item.color
              }}>{rate}%</span>
                  </div>)}
              </div>

            </div>)}
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing these growth trends before choosing a degree helps students invest effort in careers that will still matter in 10–15 years.
          </p>
        </div>
      </div>
      
    </div>;
};