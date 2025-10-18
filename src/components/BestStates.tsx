import React from 'react';
import { MapPin, TrendingUp, Building, AlertTriangle } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
const statesData = [{
  state: 'Karnataka',
  city: 'Bengaluru',
  description: 'Largest aerospace hub',
  companies: 150,
  marketShare: '~30%',
  aerospaceJobs: 32000,
  avionicsJobs: 13000,
  ameJobs: 20000,
  totalJobs: 65000,
  jobShare: '~31%',
  topCompanies: ['ISRO', 'HAL', 'TATA', 'L&T'],
  jobRatio: {
    aerospace: '1:8 to 1:12',
    avionics: '1:12 to 1:18',
    ame: '1:4 to 1:7'
  },
  newJobsPerYear: {
    ame: '540–660',
    avionics: '180–240',
    aerospace: '300–420'
  },
  growth: 'High'
}, {
  state: 'Telangana',
  city: 'Hyderabad',
  description: 'Avionics & defense cluster',
  companies: 80,
  marketShare: '~18%',
  aerospaceJobs: 13000,
  avionicsJobs: 10000,
  ameJobs: 6000,
  totalJobs: 29000,
  jobShare: '~14%',
  topCompanies: ['Boeing', 'Cyient', 'DRDO'],
  jobRatio: {
    aerospace: '1:10 to 1:15',
    avionics: '1:15 to 1:20',
    ame: '1:5 to 1:9'
  },
  newJobsPerYear: {
    ame: '360–440',
    avionics: '120–160',
    aerospace: '200–280'
  },
  growth: 'High'
}, {
  state: 'Maharashtra',
  city: 'Pune, Mumbai, Nagpur',
  description: 'Manufacturing & MRO hubs',
  companies: 100,
  marketShare: '~20%',
  aerospaceJobs: 11000,
  avionicsJobs: 6000,
  ameJobs: 9000,
  totalJobs: 26000,
  jobShare: '~12%',
  topCompanies: ['Tata', 'L&T', 'GKN', 'Mahindra'],
  jobRatio: {
    aerospace: '1:9 to 1:14',
    avionics: '1:13 to 1:18',
    ame: '1:5 to 1:8'
  },
  newJobsPerYear: {
    ame: '324–396',
    avionics: '108–144',
    aerospace: '180–252'
  },
  growth: 'Medium'
}, {
  state: 'Tamil Nadu',
  city: 'Chennai',
  description: 'Maintenance & aero parks',
  companies: 70,
  marketShare: '~14%',
  aerospaceJobs: 9000,
  avionicsJobs: 2000,
  ameJobs: 10000,
  totalJobs: 21000,
  jobShare: '~10%',
  topCompanies: ['Airbus', 'Boeing', 'Collins'],
  jobRatio: {
    aerospace: '1:10 to 1:14',
    avionics: '1:14 to 1:19',
    ame: '1:4 to 1:7'
  },
  newJobsPerYear: {
    ame: '396–484',
    avionics: '132–176',
    aerospace: '220–308'
  },
  growth: 'Medium'
}, {
  state: 'Delhi NCR',
  city: 'Delhi, Gurgaon, Noida',
  description: 'MRO & defense services',
  companies: 50,
  marketShare: '~8%',
  aerospaceJobs: 5000,
  avionicsJobs: 2000,
  ameJobs: 3500,
  totalJobs: 10500,
  jobShare: '~5%',
  topCompanies: ['Defense MRO', 'Aviation Services'],
  jobRatio: {
    aerospace: '1:11 to 1:16',
    avionics: '1:16 to 1:22',
    ame: '1:5 to 1:9'
  },
  newJobsPerYear: {
    ame: '180–220',
    avionics: '60–80',
    aerospace: '100–140'
  },
  growth: 'Medium'
}];
export const BestStates = () => {
  // Calculate totals for stats in alert
  const total = statesData.reduce((sum, state) => sum + state.totalJobs, 0);
  const unfilled = 68000;
  const filled = total - unfilled;
  const skillGapPercent = 39;
  return <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Best States in India for Jobs
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Geographic job hotspots and aerospace clusters
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.karnataka.gov.in/aerospace" label="Karnataka Aerospace" />
          <SourceBadge href="https://www.telanganatoday.com/aerospace-clusters" label="Telangana Policy" />
          <SourceBadge href="https://www.maharashtra.gov.in/industrial-development" label="Maharashtra Govt" />
        </div>
      </div>

      {/* Top 5 States by Companies and Market Share */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="text-center mb-6">
          <Building className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Top 5 States by Number of Companies (2025)
          </h3>
          <p className="text-purple-100 text-sm sm:text-base mb-4">
            Aerospace, Avionics, and Aircraft Maintenance Companies with Market Share
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-purple-600 hover:bg-purple-600">
                  <TableHead className="text-white font-bold text-center">Rank</TableHead>
                  <TableHead className="text-white font-bold text-center">State</TableHead>
                  <TableHead className="text-white font-bold text-center">Number of Companies</TableHead>
                  <TableHead className="text-white font-bold text-center">Market Share</TableHead>
                  <TableHead className="text-white font-bold text-left">Key Sectors/Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="font-bold text-gray-900 text-center">1</TableCell>
                  <TableCell className="font-semibold text-gray-900 text-center">Karnataka</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">120–150+</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold">~30%</TableCell>
                  <TableCell className="text-gray-700">Largest aerospace hub (Bengaluru) and private startups, ISRO, HAL, TATA, L&T</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="font-bold text-gray-900 text-center">2</TableCell>
                  <TableCell className="font-semibold text-gray-900 text-center">Telangana</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">70–80+</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold">~18%</TableCell>
                  <TableCell className="text-gray-700">Strong avionics & aerospace presence in Hyderabad, defense manufacturing cluster</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="font-bold text-gray-900 text-center">3</TableCell>
                  <TableCell className="font-semibold text-gray-900 text-center">Maharashtra</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">90–100+</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold">~20%</TableCell>
                  <TableCell className="text-gray-700">Manufacturing and MRO clusters in Pune, Mumbai, Nagpur, Tata, L&T, GKN</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="font-bold text-gray-900 text-center">4</TableCell>
                  <TableCell className="font-semibold text-gray-900 text-center">Tamil Nadu</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">60–70+</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold">~14%</TableCell>
                  <TableCell className="text-gray-700">Major aircraft maintenance and avionics hubs in Chennai, aero parks</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="font-bold text-gray-900 text-center">5</TableCell>
                  <TableCell className="font-semibold text-gray-900 text-center">Delhi NCR</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">40–50+</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold">~8%</TableCell>
                  <TableCell className="text-gray-700">MRO services, defense manufacturing, aviation service companies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Average New Jobs Opening Per Year */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="text-center mb-6">
          <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Average New Job Openings Per Year
          </h3>
          <p className="text-emerald-100 text-sm sm:text-base mb-4">
            Expected ~3,400–4,400 new openings annually across India
          </p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold mb-1">1,800–2,200</div>
            <div className="text-emerald-100 text-sm font-medium">AME Jobs/Year</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold mb-1">600–800</div>
            <div className="text-emerald-100 text-sm font-medium">Avionics Jobs/Year</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold mb-1">1,000–1,400</div>
            <div className="text-emerald-100 text-sm font-medium">Aerospace Eng Jobs/Year</div>
          </div>
        </div>

        {/* State-wise Breakdown Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-emerald-600 hover:bg-emerald-600">
                  <TableHead className="text-white font-bold text-center">State</TableHead>
                  <TableHead className="text-white font-bold text-center">AME Jobs/Year</TableHead>
                  <TableHead className="text-white font-bold text-center">Avionics Jobs/Year</TableHead>
                  <TableHead className="text-white font-bold text-center">Aerospace Eng Jobs/Year</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-emerald-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Karnataka (KA)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">540–660</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">180–240</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">300–420</TableCell>
                </TableRow>
                <TableRow className="hover:bg-emerald-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Tamil Nadu (TN)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">396–484</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">132–176</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">220–308</TableCell>
                </TableRow>
                <TableRow className="hover:bg-emerald-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Maharashtra (MH)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">324–396</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">108–144</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">180–252</TableCell>
                </TableRow>
                <TableRow className="hover:bg-emerald-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Telangana (TS)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">360–440</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">120–160</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">200–280</TableCell>
                </TableRow>
                <TableRow className="hover:bg-emerald-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Delhi NCR</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">180–220</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">60–80</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">100–140</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-100 hover:bg-emerald-200 border-t-2 border-emerald-600">
                  <TableCell className="font-bold text-gray-900 text-center text-base">All-India Total</TableCell>
                  <TableCell className="text-center text-blue-800 font-bold text-base">≈1,800–2,200</TableCell>
                  <TableCell className="text-center text-indigo-800 font-bold text-base">≈600–800</TableCell>
                  <TableCell className="text-center text-purple-800 font-bold text-base">≈1,000–1,400</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Future Projections Table */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="text-center mb-6">
          <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            New Job Openings based on New Companies Opening
          </h3>
          <p className="text-blue-100 text-sm sm:text-base mb-4">when this projected Companies & startups Open they Create Extra 1 time New Jobs </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-600 hover:bg-blue-600">
                  <TableHead className="text-white font-bold text-center">Year (Combined new entrants)</TableHead>
                  <TableHead className="text-white font-bold text-center">Total new jobs (3 roles)</TableHead>
                  <TableHead className="text-white font-bold text-center">AME</TableHead>
                  <TableHead className="text-white font-bold text-center">Avionics</TableHead>
                  <TableHead className="text-white font-bold text-center">Aerospace Eng.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-bold text-gray-900 text-center text-base">2030 (40–60 suppliers; 120–180 startups)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">~1,600 – 4,600</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">~650 – 2,000</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">~400 – 1,400</TableCell>
                  <TableCell className="text-center text-teal-700 font-semibold">~400 – 1,200</TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-bold text-gray-900 text-center text-base">2035 (80–120; 250–350)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">~3,300 – 9,000</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">~1,300 – 3,800</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">~800 – 2,700</TableCell>
                  <TableCell className="text-center text-teal-700 font-semibold">~800 – 2,500</TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-bold text-gray-900 text-center text-base">2040 (150–200; 400–500)</TableCell>
                  <TableCell className="text-center text-blue-700 font-semibold">~5,750 – 14,000</TableCell>
                  <TableCell className="text-center text-indigo-700 font-semibold">~2,300 – 5,800</TableCell>
                  <TableCell className="text-center text-purple-700 font-semibold">~1,400 – 4,700</TableCell>
                  <TableCell className="text-center text-teal-700 font-semibold">~1,400 – 3,500</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* No. of Applications for each Job Role */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="text-center mb-6">
          <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            No. of Applications for each Job Role
          </h3>
          <p className="text-orange-100 text-sm sm:text-base mb-2">
            Competition level by state and role
          </p>
          <p className="text-orange-100 text-xs sm:text-sm italic">
            Left number = minimum applicants per job | Right number = maximum applicants per job
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-orange-600 hover:bg-orange-600">
                  <TableHead className="text-white font-bold text-center">State</TableHead>
                  <TableHead className="text-white font-bold text-center">AME (apps per job)</TableHead>
                  <TableHead className="text-white font-bold text-center">Avionics</TableHead>
                  <TableHead className="text-white font-bold text-center">Aerospace Eng.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-orange-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Karnataka (KA)</TableCell>
                  <TableCell className="text-center text-green-700 font-semibold">1–2</TableCell>
                  <TableCell className="text-center text-yellow-700 font-semibold">3–7</TableCell>
                  <TableCell className="text-center text-orange-700 font-semibold">3–6</TableCell>
                </TableRow>
                <TableRow className="hover:bg-orange-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Tamil Nadu (TN)</TableCell>
                  <TableCell className="text-center text-green-700 font-semibold">1–2</TableCell>
                  <TableCell className="text-center text-yellow-700 font-semibold">3–7</TableCell>
                  <TableCell className="text-center text-red-700 font-semibold">4–9</TableCell>
                </TableRow>
                <TableRow className="hover:bg-orange-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Maharashtra (MH)</TableCell>
                  <TableCell className="text-center text-green-700 font-semibold">~2</TableCell>
                  <TableCell className="text-center text-yellow-700 font-semibold">3–7</TableCell>
                  <TableCell className="text-center text-red-700 font-semibold">4–9</TableCell>
                </TableRow>
                <TableRow className="hover:bg-orange-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Telangana (TS)</TableCell>
                  <TableCell className="text-center text-green-700 font-semibold">~1</TableCell>
                  <TableCell className="text-center text-yellow-700 font-semibold">2–5</TableCell>
                  <TableCell className="text-center text-orange-700 font-semibold">2–6</TableCell>
                </TableRow>
                <TableRow className="hover:bg-orange-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Andhra Pradesh (AP)</TableCell>
                  <TableCell className="text-center text-green-700 font-semibold">1–2</TableCell>
                  <TableCell className="text-center text-yellow-700 font-semibold">2–5</TableCell>
                  <TableCell className="text-center text-orange-700 font-semibold">3–8</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Job Share by Each State */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 animate-fade-in">
        <div className="text-center mb-6">
          <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Job Share by Each State
          </h3>
          <p className="text-cyan-100 text-sm sm:text-base mb-4">
            Percentage distribution of aerospace jobs across states
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-cyan-600 hover:bg-cyan-600">
                  <TableHead className="text-white font-bold text-center">State</TableHead>
                  <TableHead className="text-white font-bold text-center">AME Job Share</TableHead>
                  <TableHead className="text-white font-bold text-center">Avionics Job Share</TableHead>
                  <TableHead className="text-white font-bold text-center">Aerospace Eng. Job Share</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-cyan-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Karnataka</TableCell>
                  <TableCell className="text-center text-blue-700 font-bold text-lg">~30%</TableCell>
                  <TableCell className="text-center text-indigo-700 font-bold text-lg">~30%</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold text-lg">~30%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-cyan-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Tamil Nadu</TableCell>
                  <TableCell className="text-center text-blue-700 font-bold text-lg">~22%</TableCell>
                  <TableCell className="text-center text-indigo-700 font-bold text-lg">~22%</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold text-lg">~22%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-cyan-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Maharashtra</TableCell>
                  <TableCell className="text-center text-blue-700 font-bold text-lg">~18%</TableCell>
                  <TableCell className="text-center text-indigo-700 font-bold text-lg">~18%</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold text-lg">~18%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-cyan-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Telangana</TableCell>
                  <TableCell className="text-center text-blue-700 font-bold text-lg">~20%</TableCell>
                  <TableCell className="text-center text-indigo-700 font-bold text-lg">~20%</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold text-lg">~20%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-cyan-50">
                  <TableCell className="font-semibold text-gray-900 text-center">Andhra Pradesh</TableCell>
                  <TableCell className="text-center text-blue-700 font-bold text-lg">~10%</TableCell>
                  <TableCell className="text-center text-indigo-700 font-bold text-lg">~10%</TableCell>
                  <TableCell className="text-center text-purple-700 font-bold text-lg">~10%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Jobs Unfilled Alert */}
      <div className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center my-6 animate-fade-in">
        <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-4 text-white drop-shadow-md" />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-center">
          Jobs Unfilled Due to Skill Gap
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-orange-100 font-medium mb-4 text-center max-w-2xl">
          A major opportunity lost—skills gap leaves thousands of jobs open
        </p>
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 w-full max-w-4xl">
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{total.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Total Jobs</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{filled.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Filled</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-base sm:text-lg font-bold">{unfilled.toLocaleString()}+</div>
            <div className="text-xs sm:text-sm text-orange-100">Unfilled</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center min-w-[100px] sm:min-w-[120px] border-2 border-orange-300">
            <div className="text-base sm:text-lg font-bold">{skillGapPercent}%</div>
            <div className="text-xs sm:text-sm text-orange-100">Skill Gap</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Geographic Advantage</h3>
          <p className="text-blue-200 text-lg mb-6">
            South India dominates with 70% of aerospace jobs concentrated in top 3 states
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">65K</div>
              <div className="text-blue-200">Karnataka Jobs</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">29K</div>
              <div className="text-indigo-200">Telangana Jobs</div>
            </div>
            <div className="bg-purple-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-3xl font-bold">26K</div>
              <div className="text-purple-200">Maharashtra Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};