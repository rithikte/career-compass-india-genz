
import React from 'react';
import { Building, MapPin, TrendingUp } from 'lucide-react';

const companiesData = [
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

export const HiringCompanies = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Who Will Hire Me?
        </h2>
        <p className="text-xl text-gray-600">
          Top companies actively recruiting aerospace professionals in India
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {companiesData.map((item, index) => (
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

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Hiring Trend Alert</h3>
          <p className="text-purple-200 text-lg">
            85% of these companies are actively expanding their aerospace teams in 2024-25
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">2.5L+</div>
              <div className="text-purple-200">New Openings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">45%</div>
              <div className="text-purple-200">Remote/Hybrid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹8-25L</div>
              <div className="text-purple-200">Salary Range</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
