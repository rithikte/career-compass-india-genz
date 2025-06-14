
import React from 'react';
import { TrendingUp, Users, Globe, Target, Flag, Award } from 'lucide-react';

const india2040Metrics = [
  {
    metric: 'GDP Contribution',
    current: '0.8%',
    projected: '2.5%',
    impact: '+₹5 Lakh Cr to economy',
    icon: TrendingUp,
    color: 'from-green-600 to-green-700'
  },
  {
    metric: 'Employment Generation',
    current: '2.3L jobs',
    projected: '15-20L jobs',
    impact: 'Support 1.5-2 million families',
    icon: Users,
    color: 'from-blue-600 to-blue-700'
  },
  {
    metric: 'Global Market Share',
    current: '2%',
    projected: '8%',
    impact: 'Among top 5 aerospace nations',
    icon: Globe,
    color: 'from-purple-600 to-purple-700'
  },
  {
    metric: 'Export Revenue',
    current: '$1.6B',
    projected: '$10B+',
    impact: 'Major forex contributor',
    icon: Target,
    color: 'from-orange-600 to-orange-700'
  }
];

const nationalImpact = [
  {
    area: 'Rural Connectivity',
    description: 'Drone delivery networks connecting remote villages',
    benefit: '1000+ villages connected',
    icon: Flag
  },
  {
    area: 'Defense Capability',
    description: 'Indigenous fighter jets, satellites, and surveillance systems',
    benefit: '100% self-reliance in critical defense',
    icon: Award
  },
  {
    area: 'Disaster Management',
    description: 'AI-powered drones for rescue and relief operations',
    benefit: '10x faster emergency response',
    icon: Target
  },
  {
    area: 'Space Leadership',
    description: 'Moon missions, Mars exploration, satellite constellations',
    benefit: 'Top 3 space nations globally',
    icon: Globe
  }
];

const tierCityImpact = [
  {
    tier: 'Tier 1 Cities',
    description: 'R&D headquarters, innovation hubs',
    jobs: '8L+ jobs',
    focus: 'Design & Development'
  },
  {
    tier: 'Tier 2 Cities',
    description: 'Manufacturing centers, component production',
    jobs: '7L+ jobs',
    focus: 'Manufacturing & Testing'
  },
  {
    tier: 'Tier 3 Cities',
    description: 'Maintenance hubs, training centers',
    jobs: '5L+ jobs',
    focus: 'Maintenance & Services'
  }
];

export const India2040 = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          India 2040 Vision Impact
        </h2>
        <p className="text-xl text-gray-600">
          How Aerospace Will Transform India by 2040
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {india2040Metrics.map((metric, index) => (
          <div
            key={metric.metric}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
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
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          National Transformation Areas
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nationalImpact.map((impact, index) => (
            <div
              key={impact.area}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <impact.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-lg font-bold text-slate-900">{impact.area}</h4>
              </div>
              
              <p className="text-gray-600 mb-4">{impact.description}</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-sm font-semibold text-blue-900">{impact.benefit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Tier-wise City Development Impact
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tierCityImpact.map((tier, index) => (
            <div
              key={tier.tier}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6"
            >
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
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Flag className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🇮🇳 Vision 2040 Highlights</h3>
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

      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Your Role in India's Growth Story</h3>
          <p className="text-green-200 text-lg mb-6">
            Every aerospace professional contributes to India's journey from developing to developed nation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">Innovation</div>
              <div className="text-green-200">Drive technological advancement</div>
            </div>
            <div className="bg-teal-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">Employment</div>
              <div className="text-teal-200">Create jobs for millions</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">Export</div>
              <div className="text-green-200">Earn foreign exchange</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
