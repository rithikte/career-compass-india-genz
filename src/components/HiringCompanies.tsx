
import React, { useState } from 'react';
import { Building, MapPin, TrendingUp, Users, Briefcase } from 'lucide-react';

const publicSectorData = [
  {
    role: 'Aerospace Engineer',
    companies: ['HAL', 'Boeing India', 'Airbus India', 'ISRO', 'DRDO'],
    locations: ['Bengaluru', 'Mumbai', 'Hyderabad']
  },
  {
    role: 'Avionics Engineer',
    companies: ['BEL', 'Collins Aerospace', 'Honeywell', 'L&T', 'Tata Advanced'],
    locations: ['Bengaluru', 'Pune', 'Chennai']
  },
  {
    role: 'Aircraft Maintenance Eng.',
    companies: ['Indigo', 'SpiceJet', 'Air India', 'Lufthansa Technik', 'GMR'],
    locations: ['Delhi', 'Mumbai', 'Bengaluru']
  },
  {
    role: 'Drone/UAV Engineer',
    companies: ['ideaForge', 'Garuda Aerospace', 'Aarav Systems', 'Skylark Drones', 'Quidich'],
    locations: ['Bengaluru', 'Chennai', 'Mumbai']
  },
  {
    role: 'Data Analyst (Aviation)',
    companies: ['Lufthansa Tech', 'Indigo', 'AAI', 'IBM', 'Accenture'],
    locations: ['Bengaluru', 'Gurgaon', 'Hyderabad']
  }
];

const privateSectorData = [
  {
    role: 'Aerospace Engineer',
    companyCount: '120–150+',
    companies: ['TATA Advanced Systems', 'L&T Defence', 'Godrej Aerospace', 'Mahindra Aerospace', 'Dynamatic Tech', 'Aequs Aerospace'],
    locations: ['Bengaluru', 'Mumbai', 'Pune', 'Hyderabad']
  },
  {
    role: 'Avionics Engineer',
    companyCount: '60–80+',
    companies: ['Accord Software & Systems', 'TATA Avionics', 'Paras Defence', 'Alpha Design', 'Kaynes Tech', 'Avionics R&D Startups'],
    locations: ['Bengaluru', 'Chennai', 'Hyderabad', 'Pune']
  },
  {
    role: 'Aircraft Maintenance Engineer',
    companyCount: '130–160+',
    companies: ['Air Works Group', 'Indamer MRO', 'GMR Aero Technic', 'Max MRO', 'AI Engineering Services', 'Star Air'],
    locations: ['Delhi', 'Mumbai', 'Bengaluru', 'Chennai']
  },
  {
    role: 'Flight Test Engineer',
    companyCount: '15–25+',
    companies: ['TATA ASL', 'Mahindra Aerospace', 'Genser Aerospace', 'Kalyani Rafael', 'R&D Aviation Labs', 'Tier-1 Suppliers'],
    locations: ['Bengaluru', 'Pune', 'Chennai', 'Mumbai']
  },
  {
    role: 'Drone/UAV Engineer',
    companyCount: '300–400+',
    companies: ['ideaForge', 'Garuda Aerospace', 'General Aeronautics', 'Throttle Aerospace', 'Aero360', 'Marut Drones', 'TechEagle', 'Omnipresent'],
    locations: ['Bengaluru', 'Chennai', 'Mumbai', 'Hyderabad', 'Pune']
  },
  {
    role: 'Data Analyst (Aviation)',
    companyCount: '100–130+',
    companies: ['GMR Analytics', 'IBS Software', 'Ramco Aviation', 'Amadeus Labs India', 'Sabre India', 'Flydocs', 'Dataevolve'],
    locations: ['Bengaluru', 'Gurgaon', 'Hyderabad', 'Chennai']
  }
];

export const HiringCompanies = () => {
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Who Will Hire Me?
        </h2>
        <p className="text-xl text-gray-600">
          Comprehensive overview of aerospace companies actively recruiting in India
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg flex">
          <button
            onClick={() => setActiveTab('public')}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
              activeTab === 'public'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5" />
              <span>Public Sector & MNCs</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('private')}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
              activeTab === 'private'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Private Sector & Startups</span>
            </div>
          </button>
        </div>
      </div>

      {/* Public Sector Tab */}
      {activeTab === 'public' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publicSectorData.map((item, index) => (
            <div
              key={item.role}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Top Hiring Companies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {item.companies.map((company, idx) => (
                    <div
                      key={company}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg text-center hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
                    >
                      <div className="font-semibold text-slate-800">{company}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Primary Locations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.locations.map((location) => (
                    <span
                      key={location}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Private Sector Tab */}
      {activeTab === 'private' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8">
            <div className="text-center">
              <Briefcase className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Private Sector & Startup Ecosystem</h3>
              <p className="text-purple-200 text-lg">
                1000+ private companies and startups across aerospace sectors in India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {privateSectorData.map((item, index) => (
              <div
                key={item.role}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                    {item.companyCount} Companies
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Example Companies & Startups
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {item.companies.map((company, idx) => (
                      <div
                        key={company}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors duration-200"
                      >
                        <div className="font-semibold text-slate-800 text-sm flex items-center">
                          <span className="text-green-600 mr-2">✅</span>
                          {company}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Key Locations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.locations.map((location) => (
                      <span
                        key={location}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Market Expansion Alert</h3>
          <p className="text-purple-200 text-lg mb-6">
            Private sector aerospace companies are growing 3x faster than public sector
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-purple-200">Total Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">400+</div>
              <div className="text-purple-200">Drone Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-purple-200">Remote/Hybrid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹5-35L</div>
              <div className="text-purple-200">Salary Range</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
