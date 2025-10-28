import React from 'react';
import { MapPin, TrendingUp, Building, AlertTriangle } from 'lucide-react';
import SourceBadge from './SourceBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
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
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Building className="w-7 h-7 text-purple-600 mr-2" />
            <h3 className="text-3xl font-bold text-slate-900">Top 5 States by Number of Companies (2025)</h3>
          </div>
          <p className="text-gray-600">
            Aerospace, Avionics, and Aircraft Maintenance Companies with Market Share
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Karnataka - Rank 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-purple-600 mr-2">#1</span>
                <h4 className="text-lg font-bold text-slate-900">Karnataka</h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Leader
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">Largest aerospace hub (Bengaluru) and private startups</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-purple-600">
                120–150+
              </div>
              <div className="text-sm text-gray-600">Number of Companies</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Market Share</span>
                <span className="text-2xl font-bold text-purple-600">~30%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500">TOP COMPANIES</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">ISRO</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">HAL</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">TATA</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">L&T</span>
              </div>
            </div>
          </div>

          {/* Maharashtra - Rank 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600 mr-2">#2</span>
                <h4 className="text-lg font-bold text-slate-900">Maharashtra</h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                Strong
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">Manufacturing and MRO clusters in Pune, Mumbai, Nagpur</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-indigo-600">
                90–100+
              </div>
              <div className="text-sm text-gray-600">Number of Companies</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Market Share</span>
                <span className="text-2xl font-bold text-indigo-600">~20%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500">TOP COMPANIES</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Tata</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">L&T</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">GKN</span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Mahindra</span>
              </div>
            </div>
          </div>

          {/* Telangana - Rank 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">#3</span>
                <h4 className="text-lg font-bold text-slate-900">Telangana</h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                Growing
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">Strong avionics & aerospace presence in Hyderabad</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600">
                70–80+
              </div>
              <div className="text-sm text-gray-600">Number of Companies</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Market Share</span>
                <span className="text-2xl font-bold text-blue-600">~18%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500">TOP COMPANIES</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Boeing</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Cyient</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">DRDO</span>
              </div>
            </div>
          </div>

          {/* Tamil Nadu - Rank 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-teal-600 mr-2">#4</span>
                <h4 className="text-lg font-bold text-slate-900">Tamil Nadu</h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Emerging
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">Major aircraft maintenance and avionics hubs in Chennai</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-teal-600">
                60–70+
              </div>
              <div className="text-sm text-gray-600">Number of Companies</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Market Share</span>
                <span className="text-2xl font-bold text-teal-600">~14%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500">TOP COMPANIES</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded">Airbus</span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded">Boeing</span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded">Collins</span>
              </div>
            </div>
          </div>

          {/* Delhi NCR - Rank 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-cyan-600 mr-2">#5</span>
                <h4 className="text-lg font-bold text-slate-900">Delhi NCR</h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Steady
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">MRO services, defense manufacturing, aviation services</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-cyan-600">
                40–50+
              </div>
              <div className="text-sm text-gray-600">Number of Companies</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Market Share</span>
                <span className="text-2xl font-bold text-cyan-600">~8%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500">KEY SECTORS</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded">Defense MRO</span>
                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded">Aviation Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart for Companies by State */}
        <div className="mt-8 bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Companies & Market Share Comparison</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={[
                { state: 'Karnataka', companies: 150, marketShare: 30 },
                { state: 'Maharashtra', companies: 100, marketShare: 20 },
                { state: 'Telangana', companies: 80, marketShare: 18 },
                { state: 'Tamil Nadu', companies: 70, marketShare: 14 },
                { state: 'Delhi NCR', companies: 50, marketShare: 8 }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="state" tick={{ fill: '#475569', fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fill: '#475569', fontSize: 12 }} label={{ value: 'Number of Companies', angle: -90, position: 'insideLeft', style: { fill: '#475569' } }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#475569', fontSize: 12 }} label={{ value: 'Market Share (%)', angle: 90, position: 'insideRight', style: { fill: '#475569' } }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                labelStyle={{ fontWeight: 'bold', color: '#1e293b' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar yAxisId="left" dataKey="companies" fill="#8b5cf6" name="Number of Companies" radius={[8, 8, 0, 0]} />
              <Bar yAxisId="right" dataKey="marketShare" fill="#06b6d4" name="Market Share (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            Karnataka leads with the highest number of companies and market share
          </p>
        </div>
      </div>

      {/* Average New Jobs Opening Per Year */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center p-6 sm:p-8">
          <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Average New Job Openings Per Year
          </h3>
          <p className="text-emerald-100 text-sm sm:text-base mb-4">
            Expected ~3,400–4,400 new openings annually across India
          </p>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
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
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 shadow-sm border-b-2 border-teal-100">
                <TableHead className="text-teal-600 font-bold text-center">State</TableHead>
                <TableHead className="text-teal-600 font-bold text-center">AME Jobs/Year</TableHead>
                <TableHead className="text-teal-600 font-bold text-center">Avionics Jobs/Year</TableHead>
                <TableHead className="text-teal-600 font-bold text-center">Aerospace Eng Jobs/Year</TableHead>
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

        {/* Chart for Average New Jobs Per Year */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
          <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Job Openings Distribution by State & Role</h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                { state: 'Karnataka', AME: 600, Avionics: 210, Aerospace: 360 },
                { state: 'Tamil Nadu', AME: 440, Avionics: 154, Aerospace: 264 },
                { state: 'Maharashtra', AME: 360, Avionics: 126, Aerospace: 216 },
                { state: 'Telangana', AME: 400, Avionics: 140, Aerospace: 240 },
                { state: 'Delhi NCR', AME: 200, Avionics: 70, Aerospace: 120 }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
              <XAxis dataKey="state" tick={{ fill: '#047857', fontSize: 12 }} />
              <YAxis tick={{ fill: '#047857', fontSize: 12 }} label={{ value: 'Jobs Per Year', angle: -90, position: 'insideLeft', style: { fill: '#047857' } }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #a7f3d0', borderRadius: '8px' }}
                labelStyle={{ fontWeight: 'bold', color: '#065f46' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="AME" fill="#3b82f6" name="AME Jobs/Year" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Avionics" fill="#6366f1" name="Avionics Jobs/Year" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Aerospace" fill="#8b5cf6" name="Aerospace Eng Jobs/Year" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            Karnataka offers the highest job openings across all three roles
          </p>
        </div>
      </div>

      {/* Future Projections Table */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <TrendingUp className="w-7 h-7 text-blue-600 mr-2" />
            <h3 className="text-3xl font-bold text-slate-900">New Job Openings based on New Companies Opening</h3>
          </div>
          <p className="text-gray-600">
            When these projected companies & startups open, they create extra one-time new jobs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 2030 Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-900">2030</h4>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Near Term
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">40–60 suppliers; 120–180 startups entering market</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600">
                1,600–4,600
              </div>
              <div className="text-sm text-gray-600">Total New Jobs</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="text-xs font-semibold text-gray-500 mb-2">JOB BREAKDOWN</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AME</span>
                  <span className="font-semibold text-indigo-600">650–2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avionics</span>
                  <span className="font-semibold text-purple-600">400–1,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Aerospace Eng.</span>
                  <span className="font-semibold text-teal-600">400–1,200</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2035 Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-900">2035</h4>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                Mid Term
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">80–120 suppliers; 250–350 startups expanding presence</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600">
                3,300–9,000
              </div>
              <div className="text-sm text-gray-600">Total New Jobs</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="text-xs font-semibold text-gray-500 mb-2">JOB BREAKDOWN</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AME</span>
                  <span className="font-semibold text-indigo-600">1,300–3,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avionics</span>
                  <span className="font-semibold text-purple-600">800–2,700</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Aerospace Eng.</span>
                  <span className="font-semibold text-teal-600">800–2,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2040 Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-900">2040</h4>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Long Term
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">150–200 suppliers; 400–500 startups full ecosystem</p>

            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600">
                5,750–14,000
              </div>
              <div className="text-sm text-gray-600">Total New Jobs</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="text-xs font-semibold text-gray-500 mb-2">JOB BREAKDOWN</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AME</span>
                  <span className="font-semibold text-indigo-600">2,300–5,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avionics</span>
                  <span className="font-semibold text-purple-600">1,400–4,700</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Aerospace Eng.</span>
                  <span className="font-semibold text-teal-600">1,400–3,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart for Future Job Projections */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Job Growth Trajectory (2030-2040)</h4>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={[
                { year: '2030', AME: 2000, Avionics: 1400, Aerospace: 1200, Total: 4600 },
                { year: '2035', AME: 3800, Avionics: 2700, Aerospace: 2500, Total: 9000 },
                { year: '2040', AME: 5800, Avionics: 4700, Aerospace: 3500, Total: 14000 }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorAME" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorAvionics" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorAerospace" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
              <XAxis dataKey="year" tick={{ fill: '#1e40af', fontSize: 12 }} />
              <YAxis tick={{ fill: '#1e40af', fontSize: 12 }} label={{ value: 'Number of Jobs', angle: -90, position: 'insideLeft', style: { fill: '#1e40af' } }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #bfdbfe', borderRadius: '8px' }}
                labelStyle={{ fontWeight: 'bold', color: '#1e3a8a' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Area type="monotone" dataKey="AME" stroke="#6366f1" fillOpacity={1} fill="url(#colorAME)" name="AME Jobs" />
              <Area type="monotone" dataKey="Avionics" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorAvionics)" name="Avionics Jobs" />
              <Area type="monotone" dataKey="Aerospace" stroke="#14b8a6" fillOpacity={1} fill="url(#colorAerospace)" name="Aerospace Eng Jobs" />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            Exponential growth expected across all roles with AME jobs leading the expansion
          </p>
        </div>
      </div>


      {/* No. of Applications for each Job Role */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center p-6 sm:p-8">
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

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 shadow-sm border-b-2 border-amber-100">
                <TableHead className="text-amber-600 font-bold text-center">State</TableHead>
                <TableHead className="text-amber-600 font-bold text-center">AME (apps per job)</TableHead>
                <TableHead className="text-amber-600 font-bold text-center">Avionics</TableHead>
                <TableHead className="text-amber-600 font-bold text-center">Aerospace Eng.</TableHead>
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

      {/* Job Share by Each State */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center p-6 sm:p-8">
          <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Job Share by Each State
          </h3>
          <p className="text-cyan-100 text-sm sm:text-base">
            Percentage distribution of aerospace jobs across states
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 shadow-sm border-b-2 border-blue-100">
                <TableHead className="text-blue-600 font-bold text-center">State</TableHead>
                <TableHead className="text-blue-600 font-bold text-center">AME Job Share</TableHead>
                <TableHead className="text-blue-600 font-bold text-center">Avionics Job Share</TableHead>
                <TableHead className="text-blue-600 font-bold text-center">Aerospace Eng. Job Share</TableHead>
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

        {/* Chart for Job Share by State */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
          <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Job Share Distribution Across States</h4>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Karnataka', value: 30, fill: '#8b5cf6' },
                  { name: 'Tamil Nadu', value: 22, fill: '#06b6d4' },
                  { name: 'Telangana', value: 20, fill: '#3b82f6' },
                  { name: 'Maharashtra', value: 18, fill: '#6366f1' },
                  { name: 'Andhra Pradesh', value: 10, fill: '#14b8a6' }
                ]}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={130}
                dataKey="value"
              >
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #bae6fd', borderRadius: '8px' }}
                formatter={(value) => `${value}%`}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            Karnataka and Tamil Nadu together account for more than 50% of aerospace jobs in India
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {statesData.map((state, index) => <div key={state.state} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">{state.state}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${state.growth === 'High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {state.growth} Growth
              </span>
            </div>

            <div className="mb-4">
              <div className="text-lg font-semibold text-indigo-600">{state.city}</div>
              <div className="text-gray-600 text-sm">{state.description}</div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Companies</span>
                <span className="font-bold text-blue-600">{state.companies}+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Market Share</span>
                <span className="font-bold text-purple-600">{state.marketShare}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-2">
                <span className="text-sm text-gray-600">Total Jobs (2026)</span>
                <span className="font-bold text-green-600">{(state.totalJobs / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Job Share</span>
                <span className="font-bold text-indigo-600">{state.jobShare}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Job Distribution:</div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold text-blue-700">{(state.aerospaceJobs / 1000).toFixed(0)}K</div>
                  <div className="text-gray-600">Aerospace</div>
                </div>
                <div>
                  <div className="font-bold text-indigo-700">{(state.avionicsJobs / 1000).toFixed(0)}K</div>
                  <div className="text-gray-600">Avionics</div>
                </div>
                <div>
                  <div className="font-bold text-purple-700">{(state.ameJobs / 1000).toFixed(0)}K</div>
                  <div className="text-gray-600">AME</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg mb-4 border border-yellow-200">
              <div className="text-xs font-semibold text-gray-700 mb-2">Job:Applicant Ratio:</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Aerospace:</span>
                  <span className="font-semibold text-orange-700">{state.jobRatio.aerospace}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avionics:</span>
                  <span className="font-semibold text-orange-700">{state.jobRatio.avionics}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AME:</span>
                  <span className="font-semibold text-orange-700">{state.jobRatio.ame}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-3 rounded-lg mb-4 border border-green-200">
              <div className="text-xs font-semibold text-gray-700 mb-2">New Jobs/Year:</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">AME:</span>
                  <span className="font-semibold text-green-700">{state.newJobsPerYear.ame}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avionics:</span>
                  <span className="font-semibold text-green-700">{state.newJobsPerYear.avionics}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aerospace Eng:</span>
                  <span className="font-semibold text-green-700">{state.newJobsPerYear.aerospace}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">Top Companies</div>
              <div className="flex flex-wrap gap-2">
                {state.topCompanies.map(company => <span key={company} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {company}
                  </span>)}
              </div>
            </div>
          </div>)}
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