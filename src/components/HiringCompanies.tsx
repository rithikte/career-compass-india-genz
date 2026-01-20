import React from 'react';
import { Building, MapPin, TrendingUp, Users, Briefcase } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Card } from './ui/card';

const employerEcosystemData = [
  {
    role: 'Aerospace Engineer',
    ecosystemSize: 'Large employer ecosystem (~120–150 organizations in India)',
    employers: ['TATA Advanced Systems', 'L&T Defence', 'Godrej Aerospace', 'Mahindra Aerospace', 'Dynamatic Technologies', 'Aequs Aerospace'],
    hubs: ['Bengaluru', 'Mumbai', 'Pune', 'Hyderabad'],
    color: 'blue'
  },
  {
    role: 'Avionics Engineer',
    ecosystemSize: 'Moderate employer ecosystem (~60–80 organizations in India)',
    employers: ['Accord Software & Systems', 'Tata Avionics', 'Paras Defence', 'Alpha Design', 'Kaynes Technology', 'Avionics-focused startups'],
    hubs: ['Bengaluru', 'Chennai', 'Hyderabad', 'Pune'],
    color: 'purple'
  },
  {
    role: 'Aircraft Maintenance Engineer (AME)',
    ecosystemSize: 'Large employer ecosystem (~130–160 organizations in India)',
    employers: ['Air Works Group', 'Indamer MRO', 'GMR Aero Technic', 'Max MRO', 'AI Engineering Services (AIESL)', 'Star Air'],
    hubs: ['Delhi', 'Mumbai', 'Bengaluru', 'Chennai'],
    color: 'amber'
  }
];

const demandPressureData = [
  {
    role: 'Aircraft Maintenance Engineer (AME)',
    hiringCapacity: 'Moderate',
    candidatePool: 'Moderate',
    selectionReality: 'Licensing and safety requirements filter a large share of candidates'
  },
  {
    role: 'Aerospace Engineer',
    hiringCapacity: 'Low',
    candidatePool: 'Very High',
    selectionReality: 'Only a small, highly skilled group progresses into core roles'
  },
  {
    role: 'Avionics Engineer',
    hiringCapacity: 'Low to Moderate',
    candidatePool: 'High',
    selectionReality: 'Strong competition; practical electronics skills decide outcomes'
  }
];

const experiencePreferenceData = [
  {
    level: 'Freshers (0–2 yrs)',
    meaning: 'Mostly trainees, internships, vendor or support roles',
    ame: 'Medium',
    ae: 'Low',
    av: 'Low'
  },
  {
    level: 'Early Experience (2–5 yrs)',
    meaning: 'Hiring starts if tools + practical skills are proven',
    ame: 'High',
    ae: 'Medium',
    av: 'Medium'
  },
  {
    level: 'Mid-Career (5–10 yrs)',
    meaning: 'Core hiring phase; most stable demand',
    ame: 'Very High',
    ae: 'High',
    av: 'High'
  },
  {
    level: 'Senior (10+ yrs)',
    meaning: 'Fewer professionals, but strong demand',
    ame: 'High',
    ae: 'Very High',
    av: 'Very High'
  }
];

const keyStatesData = [
  {
    state: 'Andhra Pradesh',
    sectors: 'Aerospace manufacturing, defence electronics',
    whyMatters: 'A&D Policy 4.0 focuses on integrated supply-chain development'
  },
  {
    state: 'Karnataka',
    sectors: 'Aerospace manufacturing, MRO, avionics',
    whyMatters: 'Largest aerospace base; strong exports and policy continuity'
  },
  {
    state: 'Telangana',
    sectors: 'Aerospace ecosystem, avionics vendors',
    whyMatters: 'Hyderabad cluster supports design and avionics roles'
  },
  {
    state: 'Tamil Nadu',
    sectors: 'Defence corridor, electronics, aerohub manufacturing',
    whyMatters: 'Defence corridor investments support long-term hiring'
  },
  {
    state: 'Maharashtra (Nagpur)',
    sectors: 'MRO and aircraft maintenance',
    whyMatters: 'Growing MRO hub; strong potential for AME roles'
  },
  {
    state: 'Gujarat',
    sectors: 'Defence electronics, manufacturing',
    whyMatters: 'Expanding supplier base for avionics and aerospace roles'
  }
];

const getPreferenceLevelColor = (level: string) => {
  switch (level) {
    case 'Very High':
      return 'bg-emerald-100 text-emerald-700';
    case 'High':
      return 'bg-blue-100 text-blue-700';
    case 'Medium':
      return 'bg-amber-100 text-amber-700';
    case 'Low':
      return 'bg-slate-100 text-slate-600';
    default:
      return 'bg-slate-100 text-slate-600';
  }
};

const getRoleColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'from-blue-50 to-indigo-50 border-blue-200';
    case 'purple':
      return 'from-purple-50 to-violet-50 border-purple-200';
    case 'amber':
      return 'from-amber-50 to-yellow-50 border-amber-200';
    default:
      return 'from-slate-50 to-gray-50 border-slate-200';
  }
};

const getRoleBadgeColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'purple':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'amber':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

export const HiringCompanies = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: Employer Ecosystem */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Who Will Hire Me?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Employer Ecosystem by Role in India
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.hal-india.co.in/careers" label="HAL Careers" />
          <SourceBadge href="https://careers.boeing.com/india" label="Boeing India" />
          <SourceBadge href="https://www.tataaerospace.com/careers" label="TATA Aerospace" />
        </div>
      </div>

      {/* Employer Ecosystem Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {employerEcosystemData.map((item) => (
          <Card key={item.role} className={`bg-gradient-to-br ${getRoleColor(item.color)} p-4 sm:p-6 border`}>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Building className={`w-5 h-5 ${item.color === 'blue' ? 'text-blue-600' : item.color === 'purple' ? 'text-purple-600' : 'text-amber-600'}`} />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.role}</h3>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getRoleBadgeColor(item.color)}`}>
                {item.ecosystemSize}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Major Employers in This Ecosystem
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {item.employers.map((employer) => (
                  <div key={employer} className="bg-white/80 p-2 sm:p-2.5 rounded-lg text-sm text-slate-800 font-medium">
                    {employer}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Major Industry Hubs</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.hubs.map((hub) => (
                  <span key={hub} className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Ecosystem Note */}
      <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
        <p className="text-slate-700 text-sm sm:text-base text-center">
          <span className="font-semibold">Note:</span> Company counts reflect ecosystem size, not annual hiring numbers. Hiring depends on demand, skills, and timing.
        </p>
      </div>

      {/* Section 2: Demand vs Candidate Pressure */}
      <div className="mt-12 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-rose-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Demand vs Candidate Pressure (India)
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
            <div className="font-bold text-slate-900 text-sm text-center">Typical Hiring Capacity</div>
            <div className="font-bold text-slate-900 text-sm text-center">Size of Competing Candidate Pool</div>
            <div className="font-bold text-slate-900 text-sm text-center">Selection Reality (Observed Pattern)</div>
          </div>
          {/* Data Rows */}
          {demandPressureData.map((row, index) => (
            <div key={row.role} className={`grid grid-cols-4 gap-2 p-3 rounded-lg mb-2 transition-all duration-200 hover:shadow-md ${index % 2 === 0 ? 'bg-white' : 'bg-rose-50/50'}`}>
              <div className="font-semibold text-slate-800 text-sm flex items-center">{row.role}</div>
              <div className="text-center flex items-center justify-center">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{row.hiringCapacity}</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">{row.candidatePool}</span>
              </div>
              <div className="text-sm text-gray-700 flex items-center">{row.selectionReality}</div>
            </div>
          ))}
        </div>

        {/* Tablet Grid (md screens) */}
        <div className="hidden md:block lg:hidden space-y-3">
          {demandPressureData.map((row) => (
            <div key={row.role} className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
              <div className="font-bold text-slate-900 text-base mb-3">{row.role}</div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center bg-blue-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">Hiring Capacity</p>
                  <span className="font-bold text-blue-700 text-sm">{row.hiringCapacity}</span>
                </div>
                <div className="text-center bg-amber-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">Candidate Pool</p>
                  <span className="font-bold text-amber-700 text-sm">{row.candidatePool}</span>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Selection Reality</p>
                <p className="text-sm text-gray-700">{row.selectionReality}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {demandPressureData.map((row) => (
            <div key={row.role} className="bg-white rounded-lg p-4 shadow-sm border border-rose-100">
              <div className="font-bold text-slate-900 text-lg mb-3">{row.role}</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Hiring Capacity</span>
                  <span className="font-bold text-blue-700">{row.hiringCapacity}</span>
                </div>
                <div className="flex items-center justify-between bg-amber-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Candidate Pool</span>
                  <span className="font-bold text-amber-700">{row.candidatePool}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Selection Reality</p>
                  <p className="text-sm text-gray-700">{row.selectionReality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Read This Section */}
        <div className="mt-6 bg-white/70 rounded-lg p-4 border border-rose-200">
          <h4 className="font-bold text-slate-900 text-sm mb-3">How to Read This Section</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="font-semibold text-slate-800">Typical Hiring Capacity</span>
              <span className="text-gray-500"> → </span>
              <span>How many roles usually open relative to demand (Low = fewer openings, not zero jobs)</span>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Candidate Pool Size</span>
              <span className="text-gray-500"> → </span>
              <span>How many students usually compete for those roles</span>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Selection Reality</span>
              <span className="text-gray-500"> → </span>
              <span>What actually decides who moves forward (licenses, skills, depth — not luck or marks alone)</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-rose-100 space-y-2 text-sm">
            <div className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">AME</span>
              <span className="text-gray-600">Fewer openings, but licenses reduce competition → clear path if requirements are met</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">Aerospace Engineer</span>
              <span className="text-gray-600">Very few roles + many aspirants → only top-prepared candidates succeed</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">Avionics Engineer</span>
              <span className="text-gray-600">Limited roles + high applicants → hands-on electronics skills are critical</span>
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

      {/* Section 3: Experience Level Preferences */}
      <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-amber-200">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              How Companies Usually Prefer Experience Levels
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          
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
            <div className="font-bold text-slate-900 text-sm">What this means in real life</div>
            <div className="font-bold text-slate-900 text-sm text-center">AME</div>
            <div className="font-bold text-slate-900 text-sm text-center">Aerospace Engineer</div>
            <div className="font-bold text-slate-900 text-sm text-center">Avionics Engineer</div>
          </div>
          {/* Data Rows */}
          {experiencePreferenceData.map((row, index) => (
            <div key={row.level} className={`grid grid-cols-5 gap-2 p-3 rounded-lg mb-2 transition-all duration-200 hover:shadow-md ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}`}>
              <div className="font-semibold text-slate-800 text-sm">{row.level}</div>
              <div className="text-gray-600 text-sm">{row.meaning}</div>
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getPreferenceLevelColor(row.ame)}`}>{row.ame}</span>
              </div>
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getPreferenceLevelColor(row.ae)}`}>{row.ae}</span>
              </div>
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getPreferenceLevelColor(row.av)}`}>{row.av}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid (md screens) */}
        <div className="hidden md:block lg:hidden">
          {experiencePreferenceData.map((row) => (
            <div key={row.level} className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2">{row.level}</div>
              <p className="text-gray-600 text-sm mb-4">{row.meaning}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AME</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.ame)}`}>{row.ame}</span>
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AE</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.ae)}`}>{row.ae}</span>
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">AV</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.av)}`}>{row.av}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {experiencePreferenceData.map((row) => (
            <div key={row.level} className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2">{row.level}</div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{row.meaning}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">AME</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.ame)}`}>{row.ame}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Aerospace Engineer</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.ae)}`}>{row.ae}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">Avionics Engineer</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getPreferenceLevelColor(row.av)}`}>{row.av}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Read This Section */}
        <div className="mt-6 bg-white/70 rounded-lg p-4 border border-amber-200">
          <h4 className="font-bold text-slate-900 text-sm mb-3">How to Read This Section</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-slate-200"></span>
              <span className="text-sm text-gray-600"><span className="font-semibold">Low</span> → Hiring exists, but chances are limited</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-200"></span>
              <span className="text-sm text-gray-600"><span className="font-semibold">Medium</span> → Possible with good skills and preparation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-200"></span>
              <span className="text-sm text-gray-600"><span className="font-semibold">High</span> → Regular hiring happens</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-200"></span>
              <span className="text-sm text-gray-600"><span className="font-semibold">Very High</span> → Strong preference from companies</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 font-medium text-center">
            In aviation careers, hiring grows with experience and skills — not just a degree or marks.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6">
        <h4 className="text-sm font-bold text-slate-900 mb-3">Role Abbreviations:</h4>
        <div className="flex flex-wrap gap-4 text-sm text-slate-700">
          <div><span className="font-semibold text-blue-600">AE</span> - Aerospace Engineer</div>
          <div><span className="font-semibold text-purple-600">AV</span> - Avionics Engineer</div>
          <div><span className="font-semibold text-amber-600">AME</span> - Aircraft Maintenance Engineer</div>
        </div>
      </div>

      {/* Section 4: Key States */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Key States with Strong Long-Term Industry Push
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students choose states and cities with better long-term ecosystem support for studies, internships, and careers.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-2 mb-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-3">
            <div className="font-bold text-white text-sm">State</div>
            <div className="font-bold text-white text-sm">Sectors with Strong Growth Push</div>
            <div className="font-bold text-white text-sm">Why It Matters for Your Roles</div>
          </div>
          {/* Data Rows */}
          {keyStatesData.map((row, index) => (
            <div key={row.state} className={`grid grid-cols-3 gap-2 p-3 rounded-lg mb-2 transition-all duration-200 hover:shadow-md ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
              <div className="font-semibold text-slate-800 text-sm">{row.state}</div>
              <div className="text-gray-700 text-sm">{row.sectors}</div>
              <div className="text-gray-600 text-sm">{row.whyMatters}</div>
            </div>
          ))}
        </div>

        {/* Tablet Grid (md screens) */}
        <div className="hidden md:block lg:hidden space-y-3">
          {keyStatesData.map((row) => (
            <div key={row.state} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-bold text-slate-900 text-base mb-3">{row.state}</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 rounded-lg p-3">
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">Sectors</p>
                  <p className="text-sm text-gray-700">{row.sectors}</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">Why It Matters</p>
                  <p className="text-sm text-gray-600">{row.whyMatters}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {keyStatesData.map((row) => (
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
    </div>
  );
};
