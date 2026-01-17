import React from 'react';
import { Building, MapPin, TrendingUp, Users, Briefcase } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

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

const hiringRealityData = [
  {
    level: 'Freshers (0–2 yrs)',
    meaning: 'Direct hiring is limited. Mostly internships, trainees, vendors.',
    ame: '20–25%',
    ae: '10–15%',
    av: '10–15%'
  },
  {
    level: 'Early Experience (2–5 yrs)',
    meaning: 'Real hiring starts opening if skills + tools are strong.',
    ame: '35–40%',
    ae: '30–35%',
    av: '30–35%'
  },
  {
    level: 'Mid-Career (5–10 yrs)',
    meaning: 'Core hiring phase. Most companies prefer this level.',
    ame: '40–45%',
    ae: '35–40%',
    av: '35–40%'
  },
  {
    level: 'Senior (10+ yrs)',
    meaning: 'Fewer people reach here, but demand is strong.',
    ame: '30–35%',
    ae: '40–45%',
    av: '40–45%'
  }
];

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
  return <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Who Will Hire Me?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Private Sector & Startups – Aerospace Companies Actively Recruiting in India
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.hal-india.co.in/careers" label="HAL Careers" />
          <SourceBadge href="https://careers.boeing.com/india" label="Boeing India" />
          <SourceBadge href="https://www.tataaerospace.com/careers" label="TATA Aerospace" />
        </div>
      </div>

      {/* Private Sector Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {privateSectorData.map((item) => <div key={item.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
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
                {item.companies.map((company) => <div key={company} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 sm:p-3 rounded-lg text-center hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
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
      </div>

      {/* Corrected Demand vs Supply Stress Section */}
      <div className="mt-12 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-rose-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              CORRECTED DEMAND vs SUPPLY STRESS
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students understand real competition levels so they don't assume "degree = job."
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-2 mb-3 bg-rose-100/80 rounded-lg p-3">
            <div className="font-bold text-slate-900 text-sm">Role</div>
            <div className="font-bold text-slate-900 text-sm text-center">Jobs / Year (India)</div>
            <div className="font-bold text-slate-900 text-sm text-center">Eligible Candidates / Year</div>
            <div className="font-bold text-slate-900 text-sm text-center">Selection Reality</div>
          </div>
          {/* Data Rows */}
          <div className="grid grid-cols-4 gap-2 p-3 rounded-lg mb-2 bg-white transition-all duration-200 hover:shadow-md">
            <div className="font-semibold text-slate-800 text-sm flex items-center">AME</div>
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">2,000 – 3,000</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">6,000 – 8,000</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">License filters ~60–65%</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 p-3 rounded-lg mb-2 bg-rose-50/50 transition-all duration-200 hover:shadow-md">
            <div className="font-semibold text-slate-800 text-sm flex items-center">Aviation Engineer (AE)</div>
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">800 – 1,200</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">15,000 – 20,000</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Top ~5–8% survive</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 p-3 rounded-lg mb-2 bg-white transition-all duration-200 hover:shadow-md">
            <div className="font-semibold text-slate-800 text-sm flex items-center">Avionics Engineer (AV)</div>
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">600 – 1,000</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">10,000 – 15,000</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Top ~6–10% survive</span>
            </div>
          </div>
        </div>

        {/* Tablet Grid (md screens) */}
        <div className="hidden md:block lg:hidden space-y-3">
          {/* AME */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-base mb-3">AME</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center bg-blue-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Jobs/Year</p>
                <span className="font-bold text-blue-700 text-sm">2,000 – 3,000</span>
              </div>
              <div className="text-center bg-amber-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Candidates/Year</p>
                <span className="font-bold text-amber-700 text-sm">6,000 – 8,000</span>
              </div>
              <div className="text-center bg-yellow-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Selection</p>
                <span className="font-bold text-yellow-700 text-xs">~60–65% filtered</span>
              </div>
            </div>
          </div>
          {/* Aviation Engineer */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-base mb-3">Aviation Engineer (AE)</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center bg-blue-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Jobs/Year</p>
                <span className="font-bold text-blue-700 text-sm">800 – 1,200</span>
              </div>
              <div className="text-center bg-amber-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Candidates/Year</p>
                <span className="font-bold text-amber-700 text-sm">15,000 – 20,000</span>
              </div>
              <div className="text-center bg-red-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Selection</p>
                <span className="font-bold text-red-700 text-xs">Top ~5–8% survive</span>
              </div>
            </div>
          </div>
          {/* Avionics Engineer */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-base mb-3">Avionics Engineer (AV)</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center bg-blue-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Jobs/Year</p>
                <span className="font-bold text-blue-700 text-sm">600 – 1,000</span>
              </div>
              <div className="text-center bg-amber-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Candidates/Year</p>
                <span className="font-bold text-amber-700 text-sm">10,000 – 15,000</span>
              </div>
              <div className="text-center bg-red-50 rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-1">Selection</p>
                <span className="font-bold text-red-700 text-xs">Top ~6–10% survive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {/* AME Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-lg mb-3">AME</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Jobs / Year (India)</span>
                <span className="font-bold text-blue-700">2,000 – 3,000</span>
              </div>
              <div className="flex items-center justify-between bg-amber-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Eligible Candidates / Year</span>
                <span className="font-bold text-amber-700">6,000 – 8,000</span>
              </div>
              <div className="flex items-center justify-between bg-yellow-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Selection Reality</span>
                <span className="font-bold text-yellow-700 text-sm">License filters ~60–65%</span>
              </div>
            </div>
          </div>
          {/* Aviation Engineer Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-lg mb-3">Aviation Engineer (AE)</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Jobs / Year (India)</span>
                <span className="font-bold text-blue-700">800 – 1,200</span>
              </div>
              <div className="flex items-center justify-between bg-amber-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Eligible Candidates / Year</span>
                <span className="font-bold text-amber-700">15,000 – 20,000</span>
              </div>
              <div className="flex items-center justify-between bg-red-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Selection Reality</span>
                <span className="font-bold text-red-700 text-sm">Top ~5–8% survive</span>
              </div>
            </div>
          </div>
          {/* Avionics Engineer Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
            <div className="font-bold text-slate-900 text-lg mb-3">Avionics Engineer (AV)</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Jobs / Year (India)</span>
                <span className="font-bold text-blue-700">600 – 1,000</span>
              </div>
              <div className="flex items-center justify-between bg-amber-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Eligible Candidates / Year</span>
                <span className="font-bold text-amber-700">10,000 – 15,000</span>
              </div>
              <div className="flex items-center justify-between bg-red-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-700">Selection Reality</span>
                <span className="font-bold text-red-700 text-sm">Top ~6–10% survive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire-Ready Requirements Section */}
      <div className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-emerald-200">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
            To be hire-ready for the companies listed above, you must have:
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="flex items-start bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-emerald-100">
            <span className="text-emerald-600 font-bold text-lg mr-2 sm:mr-3 flex-shrink-0">✔</span>
            <span className="text-slate-700 text-sm sm:text-base">At least 1–2 real internships or practical exposures</span>
          </div>
          <div className="flex items-start bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-emerald-100">
            <span className="text-emerald-600 font-bold text-lg mr-2 sm:mr-3 flex-shrink-0">✔</span>
            <span className="text-slate-700 text-sm sm:text-base">A project portfolio based on real problems (not copy-paste)</span>
          </div>
          <div className="flex items-start bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-emerald-100">
            <span className="text-emerald-600 font-bold text-lg mr-2 sm:mr-3 flex-shrink-0">✔</span>
            <span className="text-slate-700 text-sm sm:text-base">Role-aligned certifications or training</span>
          </div>
          <div className="flex items-start bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-emerald-100">
            <span className="text-emerald-600 font-bold text-lg mr-2 sm:mr-3 flex-shrink-0">✔</span>
            <span className="text-slate-700 text-sm sm:text-base">Comfort with industry tools, not just theory</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 bg-red-50 rounded-lg p-3 sm:p-4 border border-red-200 max-w-3xl mx-auto">
          <p className="text-center text-red-700 font-semibold text-sm sm:text-base">
            Without these, most companies on this page will not shortlist you.
          </p>
        </div>
      </div>

      {/* Company Hiring Reality by Experience Level */}
      <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-amber-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Company Hiring Reality by Experience Level
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            (Across ~600+ aviation ecosystem companies)
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Makes students realize freshers face limits and long-term growth comes with skills and experience.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Grid Table */}
        <div className="hidden lg:block">
          {/* Header Row */}
          <div className="grid grid-cols-5 gap-2 mb-3 bg-amber-100/80 rounded-lg p-3">
            <div className="font-bold text-slate-900 text-sm">Experience Level</div>
            <div className="font-bold text-slate-900 text-sm">What this means</div>
            <div className="font-bold text-slate-900 text-sm text-center">AME</div>
            <div className="font-bold text-slate-900 text-sm text-center">Aerospace (AE)</div>
            <div className="font-bold text-slate-900 text-sm text-center">Avionics (AV)</div>
          </div>
          {/* Data Rows */}
          {hiringRealityData.map((row, index) => (
            <div key={row.level} className={`grid grid-cols-5 gap-2 p-3 rounded-lg mb-2 transition-all duration-200 hover:shadow-md ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}`}>
              <div className="font-semibold text-slate-800 text-sm">{row.level}</div>
              <div className="text-gray-600 text-sm">{row.meaning}</div>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{row.ame}</span>
              </div>
              <div className="text-center">
                <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">{row.ae}</span>
              </div>
              <div className="text-center">
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">{row.av}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid (md screens) */}
        <div className="hidden md:block lg:hidden">
          {hiringRealityData.map((row, index) => (
            <div key={row.level} className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2">{row.level}</div>
              <p className="text-gray-600 text-sm mb-4">{row.meaning}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-blue-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AME</p>
                  <span className="font-bold text-blue-700 text-sm">{row.ame}</span>
                </div>
                <div className="text-center bg-emerald-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AE</p>
                  <span className="font-bold text-emerald-700 text-sm">{row.ae}</span>
                </div>
                <div className="text-center bg-purple-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AV</p>
                  <span className="font-bold text-purple-700 text-sm">{row.av}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {hiringRealityData.map((row) => (
            <div key={row.level} className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2">{row.level}</div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{row.meaning}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">AME</span>
                  <span className="font-bold text-blue-700">{row.ame}</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Aerospace Engineer (AE)</span>
                  <span className="font-bold text-emerald-700">{row.ae}</span>
                </div>
                <div className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Avionics Engineer (AV)</span>
                  <span className="font-bold text-purple-700">{row.av}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-6 bg-white/70 rounded-lg p-4 border border-amber-200">
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Percentages = share of companies that hire at that experience level</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Not all companies hire at all levels</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="font-medium">Hiring chances increase with experience + skills, not just time.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6">
        <h4 className="text-sm font-bold text-slate-900 mb-3">Role Abbreviations:</h4>
        <div className="flex flex-wrap gap-4 text-sm text-slate-700">
          <div><span className="font-semibold text-indigo-600">AE</span> - Aerospace Engineer</div>
          <div><span className="font-semibold text-indigo-600">AV</span> - Avionics Engineer</div>
          <div><span className="font-semibold text-indigo-600">AME</span> - Aircraft Maintenance Engineer</div>
        </div>
      </div>

      {/* Key States Industry Boom Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Key States Industry Boom 2025 - 2040
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Strategic locations where aerospace & defence industries are expected to grow significantly
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students choose the right state and city for studies, internships, and future jobs.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {statesBoomData.map((row) => (
            <div key={row.state} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-bold text-slate-900 text-lg mb-2">{row.state}</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide">Sectors</p>
                  <p className="text-sm text-gray-700">{row.sectors}</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide">Why It Matters</p>
                  <p className="text-sm text-gray-600">{row.whyMatters}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Boom Clarification */}
      <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 sm:p-6 border border-amber-200">
        <div className="flex items-start sm:items-center">
          <span className="text-amber-600 text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">⚠️</span>
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
            Industry "boom" means <span className="font-bold text-amber-700">gradual expansion over many years</span>, not instant mass hiring.
          </p>
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing this early helps students plan skills, location, and effort realistically instead of chasing false hope.
          </p>
        </div>
      </div>

    </div>;
};