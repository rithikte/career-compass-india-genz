import React from 'react';
import { TrendingUp, Users, Globe, Target, Flag, Award } from 'lucide-react';
import SourceBadge from './SourceBadge';
const visionImpactData = [{
  icon: '🇮🇳',
  projection: '70% of aircraft assembled in India by 2040',
  source: 'Government "Vision 2040 for Civil Aviation"',
  meaning: 'Massive demand for aerospace engineers and manufacturing talent'
}, {
  icon: '🇮🇳',
  projection: '90% of MRO done domestically by 2040',
  source: 'Government "Vision 2040"',
  meaning: 'Huge growth for AME careers and maintenance companies'
}, {
  icon: '📈',
  projection: 'Thousands of new aircraft needed in India over next 20 years',
  source: 'Airbus Global Market Forecast',
  meaning: 'Long-term hiring for design, testing, avionics, and production'
}];
const careerImpacts = [{
  role: 'Aerospace Engineers',
  description: 'will design the aircraft India flies and exports'
}, {
  role: 'Avionics Engineers',
  description: 'will build the systems that make them smart and safe'
}, {
  role: 'Maintenance Engineers (AME)',
  description: 'will keep them flying every single day'
}];
const india2040Metrics = [{
  metric: 'GDP Contribution',
  current: '0.8%',
  projected: '2.5%',
  impact: '+₹5 Lakh Cr to economy',
  icon: TrendingUp,
  color: 'from-green-600 to-green-700'
}, {
  metric: 'Employment Generation',
  current: '2.3L jobs',
  projected: '15-20L jobs',
  impact: 'Support 1.5-2 million families',
  icon: Users,
  color: 'from-blue-600 to-blue-700'
}, {
  metric: 'Global Market Share',
  current: '2%',
  projected: '8%',
  impact: 'Among top 5 aerospace nations',
  icon: Globe,
  color: 'from-purple-600 to-purple-700'
}, {
  metric: 'Export Revenue',
  current: '$1.6B',
  projected: '$10B+',
  impact: 'Major forex contributor',
  icon: Target,
  color: 'from-orange-600 to-orange-700'
}];
const nationalImpact = [{
  area: 'Rural Connectivity',
  description: 'Drone delivery networks connecting remote villages',
  benefit: '1000+ villages connected',
  icon: Flag
}, {
  area: 'Defense Capability',
  description: 'Indigenous fighter jets, satellites, and surveillance systems',
  benefit: '100% self-reliance in critical defense',
  icon: Award
}, {
  area: 'Disaster Management',
  description: 'AI-powered drones for rescue and relief operations',
  benefit: '10x faster emergency response',
  icon: Target
}, {
  area: 'Space Leadership',
  description: 'Moon missions, Mars exploration, satellite constellations',
  benefit: 'Top 3 space nations globally',
  icon: Globe
}];
const tierCityImpact = [{
  tier: 'Tier 1 Cities',
  description: 'R&D headquarters, innovation hubs',
  jobs: '8L+ jobs',
  focus: 'Design & Development'
}, {
  tier: 'Tier 2 Cities',
  description: 'Manufacturing centers, component production',
  jobs: '7L+ jobs',
  focus: 'Manufacturing & Testing'
}, {
  tier: 'Tier 3 Cities',
  description: 'Maintenance hubs, training centers',
  jobs: '5L+ jobs',
  focus: 'Maintenance & Services'
}];
export const India2040 = () => {
  return <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          India 2040 Vision Impact
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          How Aerospace Will Transform India by 2040
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.niti.gov.in/reports" label="NITI Aayog Reports" />
          <SourceBadge href="https://www.vision2047.gov.in" label="Vision 2047 Portal" />
          <SourceBadge href="https://www.ey.com/en_in/aerospace-defense" label="EY India Research" />
        </div>
      </div>

      {/* 2040 Impact Vision Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-indigo-200">
        <div className="text-center mb-6">
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            2040 Impact Vision
          </h3>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            India's strategic roadmap to become a global aerospace powerhouse
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {visionImpactData.map((item, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
              
              <h4 className="text-base sm:text-lg font-bold text-indigo-900 mb-3">{item.projection}</h4>
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-500 mb-1">SOURCE</div>
                <p className="text-sm text-gray-600">{item.source}</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
                <div className="text-xs font-semibold text-indigo-700 mb-1">CAREER IMPACT</div>
                <p className="text-sm text-gray-700 font-medium">{item.meaning}</p>
              </div>
            </div>)}
        </div>
      </div>

      {/* What You Will Help Build Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-blue-200">
        <div className="text-center mb-6">
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            What You Will Help Build
          </h3>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            These careers are not just jobs — they are part of India's long-term plan to become a global aviation power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {careerImpacts.map((career, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <h4 className="text-lg font-bold text-blue-900 mb-2">{career.role}</h4>
              <p className="text-gray-700">{career.description}</p>
            </div>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {india2040Metrics.map((metric, index) => <div key={metric.metric} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className={`bg-gradient-to-r ${metric.color} text-white p-3 rounded-lg mb-4`}>
              <metric.icon className="w-6 h-6 mx-auto" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-3">{metric.metric}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Current</span>
                <span className="text-sm font-semibold text-red-600">{metric.current}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">2040 Target</span>
                <span className="text-sm font-bold text-green-600">{metric.projected}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs font-semibold text-gray-600 mb-1">NATIONAL IMPACT</div>
              <div className="text-sm text-gray-700">{metric.impact}</div>
            </div>
          </div>)}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          National Transformation Areas
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {nationalImpact.map((impact, index) => <div key={impact.area} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                
                <h4 className="text-lg font-bold text-slate-900">{impact.area}</h4>
              </div>
              
              <p className="text-gray-600 mb-4">{impact.description}</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-sm font-semibold text-blue-900">{impact.benefit}</div>
              </div>
            </div>)}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Tier-wise City Development Impact
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tierCityImpact.map((tier, index) => <div key={tier.tier} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">{tier.tier}</h4>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Job Creation</span>
                  <span className="font-bold text-green-600">{tier.jobs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Primary Focus</span>
                  <span className="font-semibold text-blue-600">{tier.focus}</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Flag className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🇮🇳 Vision 2040 Highlights</h3>
          <p className="text-orange-200 text-lg mb-4">
            <strong>Global Benchmark:</strong> India CAGR 11% vs US 6%, China 9%
          </p>
          <p className="text-orange-200 text-lg mb-6">
            India will become the world's 3rd largest aerospace economy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-orange-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">₹5L Cr</div>
              <div className="text-orange-200">Added to GDP</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">2 Million</div>
              <div className="text-red-200">Families Supported</div>
            </div>
            <div className="bg-orange-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">Top 3</div>
              <div className="text-orange-200">Global Ranking</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-red-200">Villages Connected</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>;
};