
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList
} from 'recharts';
import { Users, Briefcase, TrendingUp } from 'lucide-react';
import SourceBadge from './SourceBadge';

const careerData = [
  {
    role: 'Aerospace Engineer',
    duties: 'Design/Systems/Structures/Propulsion',
    levels: [
      { level: 'Entry/Junior', title: 'Jr. Aerospace Engineer / Graduate Engineer Trainee', salary: '4.5–7', time: '0–2 years', reach: '100%' },
      { level: 'Mid/Associate', title: 'Aerospace Engineer II / Systems Engineer', salary: '8–15', time: '2–5 years', reach: '65%' },
      { level: 'Senior', title: 'Senior Aerospace Engineer / Lead Engineer', salary: '15–25+', time: '5–10 years', reach: '30%' },
      { level: 'Expert/Principal', title: 'Principal Engineer / Specialist', salary: '25–40+', time: '10–15 years', reach: '10–15%' },
      { level: 'Leadership', title: 'Engineering Manager / Head / Director', salary: '40–60+', time: '12–20+ years', reach: '5%' }
    ],
    entry: 5.75,
    mid: 11.5,
    senior: 20,
    icon: '✈️'
  },
  {
    role: 'Avionics Engineer',
    duties: 'Aircraft electronics & systems',
    levels: [
      { level: 'Entry/Junior', title: 'Jr. Avionics Engineer / Test Engineer', salary: '5–8', time: '0–2 years', reach: '100%' },
      { level: 'Mid', title: 'Avionics Engineer / Systems Engineer', salary: '10–15', time: '2–5 years', reach: '65%' },
      { level: 'Senior', title: 'Senior Avionics / Lead', salary: '15–23+', time: '5–10 years', reach: '30%' },
      { level: 'Principal/Expert', title: 'Principal Avionics Architect/Specialist', salary: '23–33+', time: '10–15 years', reach: '10–15%' },
      { level: 'Leadership', title: 'Avionics Manager / Head', salary: '33–50+', time: '12–20+ years', reach: '5%' }
    ],
    entry: 6.5,
    mid: 12.5,
    senior: 19,
    icon: '🛩️'
  },
  {
    role: 'Aircraft Maintenance Engineer',
    duties: 'Maintenance, Repair, Operations',
    levels: [
      { level: 'Entry/Technician', title: 'Jr. AME / Trainee / License Holder', salary: '4–6', time: '0–2 years', reach: '100%' },
      { level: 'Mid/Experienced', title: 'Senior AME / Inspector', salary: '6–10', time: '2–5 years', reach: '65%' },
      { level: 'Senior/Lead', title: 'Lead Maintenance Engineer', salary: '10–18+', time: '5–10 years', reach: '30%' },
      { level: 'Specialist', title: 'Reliability/Cert. Lead/Overhaul', salary: '18–25+', time: '10–15 years', reach: '10–15%' },
      { level: 'Management', title: 'Maintenance Manager/Director', salary: '25–40+', time: '12–20+ years', reach: '5%' }
    ],
    entry: 5,
    mid: 8,
    senior: 14,
    icon: '🔧'
  }
];

// Prepare the data for the simple bar chart
const mapToBarData = (career: typeof careerData[0]) => [
  { level: 'Entry', salary: career.entry },
  { level: 'Mid', salary: career.mid },
  { level: 'Senior', salary: career.senior },
];

const LEVEL_COLORS = {
  Entry: '#3b82f6',   // blue-500
  Mid: '#6366f1',     // indigo-500
  Senior: '#8b5cf6',  // purple-500
};

const VerticalBarChart = ({ data }: { data: { level: string, salary: number }[] }) => {
  if (!Array.isArray(data)) {
    console.error("VerticalBarChart expected array data but got:", data);
    return null;
  }
  return (
    <ResponsiveContainer width="100%" height={80}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="#e0e7eb" strokeDasharray="4 8" horizontal vertical={false} />
        <XAxis
          type="number"
          dataKey="salary"
          axisLine={false}
          tickLine={false}
          fontSize={13}
          tick={{ fontWeight: 700, fill: "#6366f1" }}
          width={36}
          tickFormatter={(v) => `₹${v}L`}
        />
        <YAxis
          type="category"
          dataKey="level"
          axisLine={false}
          tickLine={false}
          fontSize={14}
          tick={{ fontWeight: 600, fill: "#334155" }}
        />
        <Tooltip
          formatter={(v: number) => [`₹${v} LPA`, "Salary"]}
          labelFormatter={(l) => `${l} Level`}
          contentStyle={{ borderRadius: 8, fontWeight: 'bold' }}
        />
        <Bar 
          dataKey="salary"
          fill="#6366f1"
          radius={[0, 20, 20, 0]}
        >
          <LabelList
            dataKey="salary"
            position="right"
            formatter={(v: number) => `₹${v}L`}
            style={{
              fontWeight: 700,
              fontSize: 15,
              fill: "#4f46e5",
              textShadow: "0 1px 8px #fff"
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const EntryMidSeniorCard = ({ entry, mid, senior }: { entry: number; mid: number; senior: number }) => (
  <div className="grid grid-cols-3 gap-4 text-center mt-2 mb-2">
    <div className="bg-blue-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-blue-800">₹{entry}L</div>
      <div className="text-xs text-blue-600 font-semibold">Entry</div>
    </div>
    <div className="bg-indigo-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-indigo-800">₹{mid}L</div>
      <div className="text-xs text-indigo-600 font-semibold">Mid</div>
    </div>
    <div className="bg-purple-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-purple-800">₹{senior}L+</div>
      <div className="text-xs text-purple-600 font-semibold">Senior</div>
    </div>
  </div>
);

export const CareerOutcomes = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 px-4">
          What Can I Become After This Degree?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 px-4">
          Explore high-growth aerospace careers with competitive salaries
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.jobted.in/salary/aerospace-engineer" label="Jobted India" />
          <SourceBadge href="https://6figr.com/india/salary/aerospace-engineer" label="6figr" />
          <SourceBadge href="https://www.indeedcareers.co.in/careers/aerospace" label="Indeed Careers India" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {careerData.map((career) => (
          <div
            key={career.role}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col gap-2"
          >
            <div className="flex items-start sm:items-center mb-3">
              <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 flex-shrink-0">{career.icon}</span>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{career.role}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">{career.duties}</p>
              </div>
            </div>
            
            {/* Detailed Career Levels Table */}
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-2 font-semibold text-gray-700">Level</th>
                    <th className="text-left p-2 font-semibold text-gray-700">Salary (LPA)</th>
                    <th className="text-left p-2 font-semibold text-gray-700">Time</th>
                    <th className="text-left p-2 font-semibold text-gray-700">% Reach</th>
                  </tr>
                </thead>
                <tbody>
                  {career.levels.map((lvl, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-semibold text-gray-800">{lvl.level}</div>
                        <div className="text-xs text-gray-600">{lvl.title}</div>
                      </td>
                      <td className="p-2 font-bold text-green-700">₹{lvl.salary}</td>
                      <td className="p-2 text-gray-600">{lvl.time}</td>
                      <td className="p-2">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                          lvl.reach === '100%' ? 'bg-green-100 text-green-800' :
                          lvl.reach === '65%' ? 'bg-blue-100 text-blue-800' :
                          lvl.reach === '30%' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {lvl.reach}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Summary Chart */}
            <div className="w-full">
              <VerticalBarChart data={mapToBarData(career)} />
              <EntryMidSeniorCard entry={career.entry} mid={career.mid} senior={career.senior} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg mt-6 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">15-20%</div>
            <div className="text-blue-200 text-sm sm:text-base">Average Growth</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">3</div>
            <div className="text-blue-200 text-sm sm:text-base">Career Paths</div>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">64L+</div>
            <div className="text-blue-200 text-sm sm:text-base">Jobs by 2040</div>
          </div>
        </div>
      </div>

      {/* Data Sources Section */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">📊 Data Sources & Methodology</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Salary Data:</h5>
            <div className="flex flex-wrap gap-2">
              <SourceBadge href="https://www.jobted.in/salary/aerospace-engineer" label="Jobted India" />
              <SourceBadge href="https://6figr.com/india/salary/aerospace-engineer" label="6figr" />
              <SourceBadge href="https://www.indeedcareers.co.in/careers/aerospace" label="Indeed Careers" />
            </div>
            <p className="text-xs text-gray-600 mt-2 italic">*Figures vary by city, company tier, and specialization.</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Job Growth:</h5>
            <div className="flex flex-wrap gap-2">
              <SourceBadge href="https://careers.isro.gov.in" label="ISRO" />
              <SourceBadge href="https://www.hal-india.co.in/careers" label="HAL" />
              <SourceBadge href="https://www.drdo.gov.in/careers" label="DRDO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.

