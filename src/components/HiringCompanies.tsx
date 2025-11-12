import React, { useState } from 'react';
import { Building, MapPin, TrendingUp, Users, Briefcase, Zap, Building2, Rocket } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
const publicSectorData = [{
  role: 'Aerospace Engineer',
  companies: ['HAL', 'Boeing India', 'Airbus India', 'ISRO', 'DRDO'],
  locations: ['Bengaluru', 'Mumbai', 'Hyderabad']
}, {
  role: 'Avionics Engineer',
  companies: ['BEL', 'Collins Aerospace', 'Honeywell', 'L&T', 'Tata Advanced'],
  locations: ['Bengaluru', 'Pune', 'Chennai']
}, {
  role: 'Aircraft Maintenance Eng.',
  companies: ['Indigo', 'SpiceJet', 'Air India', 'Lufthansa Technik', 'GMR'],
  locations: ['Delhi', 'Mumbai', 'Bengaluru']
}];
const privateSectorData = [{
  role: 'Aerospace Engineer',
  companyCount: '120-150+',
  companies: ['TATA Advanced Systems', 'L&T Defence', 'Godrej Aerospace', 'Mahindra Aerospace', 'Dynamatic Tech', 'Aequs Aerospace'],
  locations: ['Bengaluru', 'Mumbai', 'Pune', 'Hyderabad']
}, {
  role: 'Avionics Engineer',
  companyCount: '60-80+',
  companies: ['Accord Software & Systems', 'TATA Avionics', 'Paras Defence', 'Alpha Design', 'Kaynes Tech', 'Avionics R&D Startups'],
  locations: ['Bengaluru', 'Chennai', 'Hyderabad', 'Pune']
}, {
  role: 'Aircraft Maintenance Engineer',
  companyCount: '130-160+',
  companies: ['Air Works Group', 'Indamer MRO', 'GMR Aero Technic', 'Max MRO', 'AI Engineering Services', 'Star Air'],
  locations: ['Delhi', 'Mumbai', 'Bengaluru', 'Chennai']
}];

const statesBoomData = [
  {
    state: 'Andhra Pradesh',
    sectors: 'Aerospace manufacturing & defence electronics',
    whyMatters: "The state's A&D Policy 4.0 (2025-30) targets large investments and an integrated supply-chain ecosystem."
  },
  {
    state: 'Karnataka',
    sectors: 'Aerospace manufacturing + MRO + avionics systems',
    whyMatters: "Karnataka already contributes major share of India's aerospace exports and has strong policy support."
  },
  {
    state: 'Telangana',
    sectors: 'Aerospace & defence ecosystem + avionics vendors',
    whyMatters: "Hyderabad's aerospace cluster is strong; good for design and avionics roles."
  },
  {
    state: 'Tamil Nadu',
    sectors: 'Defence industrial corridor + electronics + aerohub manufacturing',
    whyMatters: 'Large investments aimed via defence corridor by 2032.'
  },
  {
    state: 'Maharashtra (Nagpur region)',
    sectors: 'MRO hub + aircraft maintenance growth',
    whyMatters: "Nagpur's MRO facility growth signals strong AME job potential."
  },
  {
    state: 'Gujarat',
    sectors: 'Defence electronics + manufacturing base',
    whyMatters: 'Supports avionics and aerospace supplier roles.'
  }
];

export const HiringCompanies = () => {
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');
  return <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Who Will Hire Me?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Comprehensive overview of aerospace companies actively recruiting in India
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.hal-india.co.in/careers" label="HAL Careers" />
          <SourceBadge href="https://careers.boeing.com/india" label="Boeing India" />
          <SourceBadge href="https://www.tataaerospace.com/careers" label="TATA Aerospace" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4">
        <div className="bg-gray-100 p-1 rounded-lg flex flex-col sm:flex-row w-full sm:w-auto">
          <button onClick={() => setActiveTab('public')} className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-200 mb-1 sm:mb-0 ${activeTab === 'public' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-indigo-600'}`}>
            <div className="flex items-center justify-center space-x-2">
              <Building className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-sm sm:text-base">Public Sector & MNCs</span>
            </div>
          </button>
          <button onClick={() => setActiveTab('private')} className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-200 ${activeTab === 'private' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-indigo-600'}`}>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-sm sm:text-base">Private Sector & Startups</span>
            </div>
          </button>
        </div>
      </div>

      {/* Public Sector Tab */}
      {activeTab === 'public' && <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {publicSectorData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.role}</h3>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Top Hiring Companies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {item.companies.map((company, idx) => <div key={company} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 sm:p-3 rounded-lg text-center hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
                      <div className="font-semibold text-slate-800 text-sm sm:text-base">{company}</div>
                    </div>)}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Primary Locations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.locations.map(location => <span key={location} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {location}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>}

      {/* Private Sector Tab */}
      {activeTab === 'private' && <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {privateSectorData.map((item, index) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.role}</h3>
                </div>
                <div className="bg-indigo-100 text-red-600 px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                  {item.companyCount} Companies
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Top Hiring Companies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {item.companies.map((company, idx) => <div key={company} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 sm:p-3 rounded-lg text-center hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
                      <div className="font-semibold text-slate-800 text-sm sm:text-base">{company}</div>
                    </div>)}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Primary Locations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.locations.map(location => <span key={location} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {location}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>}

      {/* Key States Industry Boom Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key States Industry Boom 2025 - 2040
            </h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Strategic locations where aerospace & defence industries are expected to grow significantly
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-slate-900">State</TableHead>
                <TableHead className="font-bold text-slate-900">Sector(s) Likely to Boom</TableHead>
                <TableHead className="font-bold text-slate-900">Why It Matters (for your roles)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statesBoomData.map((row) => (
                <TableRow key={row.state} className="hover:bg-gray-50">
                  <TableCell className="font-semibold text-slate-800">{row.state}</TableCell>
                  <TableCell className="text-gray-700">{row.sectors}</TableCell>
                  <TableCell className="text-gray-600">{row.whyMatters}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

    </div>;
};