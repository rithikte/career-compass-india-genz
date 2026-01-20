import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { Users, Briefcase, TrendingUp } from 'lucide-react';
import SourceBadge from './SourceBadge';
const careerData = [{
  role: 'Aerospace Engineer',
  duties: 'Design/Systems/Structures/Propulsion',
  levels: [{
    level: 'Entry/Junior',
    title: 'Jr. Aerospace Engineer / Graduate Engineer Trainee',
    salary: '4.5–7',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid/Associate',
    title: 'Aerospace Engineer II / Systems Engineer',
    salary: '8–15',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior',
    title: 'Senior Aerospace Engineer / Lead Engineer',
    salary: '15–25+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Expert/Principal',
    title: 'Principal Engineer / Specialist',
    salary: '25–40+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Leadership',
    title: 'Engineering Manager / Head / Director',
    salary: '40–60+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 5.75,
  mid: 11.5,
  senior: 20
}, {
  role: 'Avionics Engineer',
  duties: 'Aircraft electronics & systems',
  levels: [{
    level: 'Entry/Junior',
    title: 'Jr. Avionics Engineer / Test Engineer',
    salary: '5–8',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid',
    title: 'Avionics Engineer / Systems Engineer',
    salary: '10–15',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior',
    title: 'Senior Avionics / Lead',
    salary: '15–23+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Principal/Expert',
    title: 'Principal Avionics Architect/Specialist',
    salary: '23–33+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Leadership',
    title: 'Avionics Manager / Head',
    salary: '33–50+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 6.5,
  mid: 12.5,
  senior: 19
}, {
  role: 'Aircraft Maintenance Engineer',
  duties: 'Maintenance, Repair, Operations',
  levels: [{
    level: 'Entry/Technician',
    title: 'Jr. AME / Trainee / License Holder',
    salary: '4–6',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid/Experienced',
    title: 'Senior AME / Inspector',
    salary: '6–10',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior/Lead',
    title: 'Lead Maintenance Engineer',
    salary: '10–18+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Specialist',
    title: 'Reliability/Cert. Lead/Overhaul',
    salary: '18–25+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Management',
    title: 'Maintenance Manager/Director',
    salary: '25–40+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 5,
  mid: 8,
  senior: 14
}];

// Prepare the data for the simple bar chart
const mapToBarData = (career: typeof careerData[0]) => [{
  level: 'Entry',
  salary: career.entry
}, {
  level: 'Mid',
  salary: career.mid
}, {
  level: 'Senior',
  salary: career.senior
}];
const LEVEL_COLORS = {
  Entry: 'hsl(238 90% 60%)',
  Mid: 'hsl(238 85% 50%)',
  Senior: 'hsl(275 85% 65%)'
};
const VerticalBarChart = ({
  data
}: {
  data: {
    level: string;
    salary: number;
  }[];
}) => {
  if (!Array.isArray(data)) {
    console.error("VerticalBarChart expected array data but got:", data);
    return null;
  }
  return <ResponsiveContainer width="100%" height={80}>
      <BarChart data={data} layout="vertical" margin={{
      top: 8,
      right: 24,
      left: 0,
      bottom: 0
    }}>
        <CartesianGrid stroke="#e0e7eb" strokeDasharray="4 8" horizontal vertical={false} />
        <XAxis type="number" dataKey="salary" axisLine={false} tickLine={false} fontSize={13} tick={{
        fontWeight: 700,
        fill: "#6366f1"
      }} width={36} tickFormatter={v => `₹${v}L`} />
        <YAxis type="category" dataKey="level" axisLine={false} tickLine={false} fontSize={14} tick={{
        fontWeight: 600,
        fill: "#334155"
      }} />
        <Tooltip formatter={(v: number) => [`₹${v} LPA`, "Salary"]} labelFormatter={l => `${l} Level`} contentStyle={{
        borderRadius: 8,
        fontWeight: 'bold'
      }} />
        <Bar dataKey="salary" fill="#6366f1" radius={[0, 20, 20, 0]}>
          <LabelList dataKey="salary" position="right" formatter={(v: number) => `₹${v}L`} style={{
          fontWeight: 700,
          fontSize: 15,
          fill: "#4f46e5",
          textShadow: "0 1px 8px #fff"
        }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>;
};
const EntryMidSeniorCard = ({
  entry,
  mid,
  senior
}: {
  entry: number;
  mid: number;
  senior: number;
}) => <div className="grid grid-cols-3 gap-4 text-center mt-2 mb-2">
    <div className="bg-primary-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-primary">₹{entry}L</div>
      <div className="text-xs text-primary font-semibold">Entry</div>
    </div>
    <div className="bg-primary-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-primary">₹{mid}L</div>
      <div className="text-xs text-primary font-semibold">Mid</div>
    </div>
    <div className="bg-accent-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-accent">₹{senior}L+</div>
      <div className="text-xs text-accent font-semibold">Senior</div>
    </div>
  </div>;
// Career data for each role
const aerospaceCareerData = [
  { level: 'Entry / Junior', title: 'Jr. Aerospace Engineer / Graduate Engineer Trainee', salary: '₹4.5–7', time: '0–2 yrs', reach: 'Common' },
  { level: 'Mid / Associate', title: 'Aerospace Engineer II / Systems Engineer', salary: '₹8–15', time: '2–5 yrs', reach: 'Likely' },
  { level: 'Senior', title: 'Senior Aerospace Engineer / Lead Engineer', salary: '₹15–25+', time: '5–10 yrs', reach: 'Selective' },
  { level: 'Expert / Principal', title: 'Principal Engineer / Specialist', salary: '₹25–40+', time: '10–15 yrs', reach: 'Rare' },
  { level: 'Leadership', title: 'Engineering Manager / Head / Director', salary: '₹40–60+', time: '12–20+ yrs', reach: 'Very Rare' },
];

const avionicsCareerData = [
  { level: 'Entry / Junior', title: 'Jr. Avionics Engineer / Test Engineer', salary: '₹5–8', time: '0–2 yrs', reach: 'Common' },
  { level: 'Mid / Associate', title: 'Avionics Engineer / Systems Engineer', salary: '₹10–15', time: '2–5 yrs', reach: 'Likely' },
  { level: 'Senior', title: 'Senior Avionics Engineer / Lead', salary: '₹15–23+', time: '5–10 yrs', reach: 'Selective' },
  { level: 'Principal / Expert', title: 'Principal Avionics Architect / Specialist', salary: '₹23–33+', time: '10–15 yrs', reach: 'Rare' },
  { level: 'Leadership', title: 'Avionics Manager / Head', salary: '₹33–50+', time: '12–20+ yrs', reach: 'Very Rare' },
];

const ameCareerData = [
  { level: 'Entry / Technician', title: 'Jr. AME / Trainee / Licensed AME', salary: '₹4–6', time: '0–2 yrs', reach: 'Common' },
  { level: 'Mid / Experienced', title: 'Senior AME / Inspector', salary: '₹6–10', time: '2–5 yrs', reach: 'Likely' },
  { level: 'Senior / Lead', title: 'Lead Maintenance Engineer', salary: '₹10–18+', time: '5–10 yrs', reach: 'Selective' },
  { level: 'Specialist', title: 'Reliability / Certification / Overhaul Lead', salary: '₹18–25+', time: '10–15 yrs', reach: 'Rare' },
  { level: 'Management', title: 'Maintenance Manager / Director', salary: '₹25–40+', time: '12–20+ yrs', reach: 'Very Rare' },
];

// Helper function for reach likelihood colors
const getReachColor = (reach: string) => {
  switch (reach) {
    case 'Common': return 'bg-green-100 text-green-700';
    case 'Likely': return 'bg-blue-100 text-blue-700';
    case 'Selective': return 'bg-yellow-100 text-yellow-700';
    case 'Rare': return 'bg-orange-100 text-orange-700';
    case 'Very Rare': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

// Career table component for reusability
const CareerTable = ({ data, role, subtitle, realityNote, bgGradient, borderColor }: {
  data: typeof aerospaceCareerData;
  role: string;
  subtitle: string;
  realityNote: string;
  bgGradient: string;
  borderColor: string;
}) => (
  <div className={`${bgGradient} rounded-2xl p-4 sm:p-6 border ${borderColor}`}>
    <div className="mb-4">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{role}</h3>
      <p className="text-xs sm:text-sm text-slate-600">({subtitle})</p>
    </div>

    {/* Desktop Table */}
    <div className="hidden md:block mb-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
        <div className="grid grid-cols-5 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold text-sm">
          <div className="p-3 border-r border-slate-600">Level</div>
          <div className="p-3 border-r border-slate-600">Typical Role Titles</div>
          <div className="p-3 border-r border-slate-600 text-center">Salary (LPA)</div>
          <div className="p-3 border-r border-slate-600 text-center">Time</div>
          <div className="p-3 text-center">Reach Likelihood</div>
        </div>
        <div className="divide-y divide-gray-100">
          {data.map((item, idx) => (
            <div key={idx} className="grid grid-cols-5 hover:bg-slate-50/50 transition-colors">
              <div className="p-3 font-semibold text-gray-800">{item.level}</div>
              <div className="p-3 text-gray-700 text-sm">{item.title}</div>
              <div className="p-3 text-center font-bold text-green-700">{item.salary}</div>
              <div className="p-3 text-center text-gray-600">{item.time}</div>
              <div className="p-3 text-center">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getReachColor(item.reach)}`}>
                  {item.reach}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-3 mb-4">
      {data.map((item, idx) => (
        <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-gray-800 text-sm">{item.level}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getReachColor(item.reach)}`}>
              {item.reach}
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-2">{item.title}</p>
          <div className="flex gap-4 text-xs">
            <span className="font-bold text-green-700">{item.salary}</span>
            <span className="text-gray-500">{item.time}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Reality Note */}
    <div className="bg-slate-100 rounded-lg p-3 border border-slate-200">
      <p className="text-xs sm:text-sm text-slate-700">
        <span className="font-semibold">Reality note:</span> {realityNote}
      </p>
    </div>
  </div>
);

export const CareerOutcomes = () => {
  return <div className="space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 px-4">
          How Career Grows Over Time
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 px-4">
          Explore realistic career paths, salary growth, and progression timelines
        </p>

        {/* Why this matters */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4 mx-4">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Helps students clearly see real career paths, growth levels, and salary reality before choosing the degree.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.jobted.in/salary/aerospace-engineer" label="Jobted India" />
          <SourceBadge href="https://6figr.com/india/salary/aerospace-engineer" label="6figr" />
          <SourceBadge href="https://www.indeedcareers.co.in/careers/aerospace" label="Indeed Careers India" />
        </div>
      </div>

      {/* Career Growth Tables */}
      <div className="space-y-6">
        <CareerTable
          data={aerospaceCareerData}
          role="Aerospace Engineer"
          subtitle="Design • Systems • Structures • Propulsion"
          realityNote="Aerospace growth depends on strong technical skills, patience with long projects, and the ability to take design and safety responsibility."
          bgGradient="bg-gradient-to-br from-blue-50 to-indigo-50"
          borderColor="border-blue-200"
        />

        <CareerTable
          data={avionicsCareerData}
          role="Avionics Engineer"
          subtitle="Aircraft Electronics • Embedded Systems • Integration"
          realityNote="Avionics careers reward engineers who continuously upgrade skills in embedded systems, automation, and system integration."
          bgGradient="bg-gradient-to-br from-purple-50 to-violet-50"
          borderColor="border-purple-200"
        />

        <CareerTable
          data={ameCareerData}
          role="Aircraft Maintenance Engineer (AME)"
          subtitle="Maintenance • Repair • Operations"
          realityNote="AME progression depends strongly on licensing, aircraft type ratings, and years of hands-on responsibility."
          bgGradient="bg-gradient-to-br from-emerald-50 to-teal-50"
          borderColor="border-emerald-200"
        />
      </div>

      {/* How to Read Reach Likelihood */}
      <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-4 text-base sm:text-lg">How to Read "Reach Likelihood" (Show Once for All)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Common</span>
            <span className="text-xs text-slate-600">Most professionals reach this level</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Likely</span>
            <span className="text-xs text-slate-600">Achievable with steady skills and experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Selective</span>
            <span className="text-xs text-slate-600">Only well-performing engineers reach here</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">Rare</span>
            <span className="text-xs text-slate-600">Requires deep specialization and long experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Very Rare</span>
            <span className="text-xs text-slate-600">Limited leadership positions</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-4 text-center">
          Career growth depends on skills, performance, opportunity, and discipline — not everyone reaches the top levels.
        </p>
      </div>

      {/* Why Many People Don't Reach the Next Level */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
            Why Many People Don't Reach the Next Level
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            This explains why the number of people reduces at every stage, even when salary and titles look attractive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Entry → Mid Level */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🟢</span>
              <h4 className="font-bold text-green-800 text-base sm:text-lg">Entry → Mid Level</h4>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-green-700 mb-2">Why some don't move ahead</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-green-800 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>Rely only on the degree, not skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>Weak basics (math, physics, electronics)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>No internships or practical work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>Expect growth just by waiting</span>
              </li>
            </ul>
            <div className="bg-green-100 rounded-lg p-2.5 border border-green-300">
              <p className="text-xs sm:text-sm text-green-900 font-medium">
                <span className="font-bold">Simple truth:</span> A degree helps you start. Skills decide if you move ahead.
              </p>
            </div>
          </div>

          {/* Mid → Senior Level */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 sm:p-5 border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🟡</span>
              <h4 className="font-bold text-yellow-800 text-base sm:text-lg">Mid → Senior Level</h4>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-yellow-700 mb-2">Why many stop here</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-yellow-800 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Stay comfortable with routine tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Avoid bigger responsibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Don't learn new tools or methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Struggle with pressure and deadlines</span>
              </li>
            </ul>
            <div className="bg-yellow-100 rounded-lg p-2.5 border border-yellow-300">
              <p className="text-xs sm:text-sm text-yellow-900 font-medium">
                <span className="font-bold">Simple truth:</span> Senior roles need thinking and ownership, not just work done.
              </p>
            </div>
          </div>

          {/* Senior → Expert / Principal */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-5 border border-orange-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🟠</span>
              <h4 className="font-bold text-orange-800 text-base sm:text-lg">Senior → Expert / Principal</h4>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-orange-700 mb-2">Why very few reach this level</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-orange-800 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>Needs deep knowledge in one area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>Takes many years of focus and patience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>Trust must be earned over time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>Very limited expert positions</span>
              </li>
            </ul>
            <div className="bg-orange-100 rounded-lg p-2.5 border border-orange-300">
              <p className="text-xs sm:text-sm text-orange-900 font-medium">
                <span className="font-bold">Simple truth:</span> Real expertise takes time and commitment.
              </p>
            </div>
          </div>

          {/* Expert → Leadership */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 sm:p-5 border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🔴</span>
              <h4 className="font-bold text-red-800 text-base sm:text-lg">Expert → Leadership</h4>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-red-700 mb-2">Why this is rare</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-red-800 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Very few leadership positions exist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Needs people skills plus technical strength</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>High pressure and responsibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Not everyone wants to manage people</span>
              </li>
            </ul>
            <div className="bg-red-100 rounded-lg p-2.5 border border-red-300">
              <p className="text-xs sm:text-sm text-red-900 font-medium">
                <span className="font-bold">Simple truth:</span> Leadership means responsibility first, salary second.
              </p>
            </div>
          </div>
        </div>

        {/* Final Summary */}
        <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-sm sm:text-base text-slate-700 font-medium">
            Higher levels exist, but fewer people reach them —<br className="hidden sm:block" />
            <span className="font-bold">because effort, skill depth, and responsibility increase at every step.</span>
          </p>
        </div>
      </div>

      {/* Truth Curve Sections */}
      <div className="space-y-6 sm:space-y-8">
        {/* Why this matters - Truth Curve */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Shows the real effort vs reward timeline so students don't quit early due to false expectations.
          </p>
        </div>

        {/* Aerospace Engineer Truth Curve */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Aerospace Engineer — Truth Curve
            </h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-4 border border-blue-300 mb-6">
            <p className="text-sm sm:text-base text-blue-900 font-semibold">
              <span className="font-bold">Reality in one line:</span> Slow start, brutal learning, massive payoff — only if you survive the middle years.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mb-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-blue-100">
              <div className="grid grid-cols-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm">
                <div className="p-3 border-r border-blue-500">Career Year</div>
                <div className="p-3 border-r border-blue-500 text-center">Effort Level</div>
                <div className="p-3 border-r border-blue-500 text-center">Salary Growth</div>
                <div className="p-3">What ACTUALLY happens</div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-4 hover:bg-blue-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">0–2 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Low</span></div>
                  <div className="p-3 text-gray-700 text-sm">Heavy CAD, simulations, reviews, documentation. You design small parts, not aircraft. Ego dies here.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-blue-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">3–5 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">🟠 High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-gray-700 text-sm">Start owning subsystems. Mistakes reduce. Reputation begins internally.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-blue-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">6–10 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 High</span></div>
                  <div className="p-3 text-gray-700 text-sm">You become hard to replace. Firms depend on your judgement, not just tools.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-blue-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">10+ yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Low</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Very High</span></div>
                  <div className="p-3 text-gray-700 text-sm">Authority roles: Lead Engineer, Chief Designer, Review Head. Paid for decisions, not hours.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-6">
            <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">0–2 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Effort: Very High</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Salary: Low</span>
              </div>
              <p className="text-gray-600 text-sm">Heavy CAD, simulations, reviews, documentation. You design small parts, not aircraft. Ego dies here.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">3–5 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">🟠 Effort: High</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Salary: Medium</span>
              </div>
              <p className="text-gray-600 text-sm">Start owning subsystems. Mistakes reduce. Reputation begins internally.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">6–10 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Effort: Medium</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Salary: High</span>
              </div>
              <p className="text-gray-600 text-sm">You become hard to replace. Firms depend on your judgement, not just tools.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">10+ yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Effort: Low</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Salary: Very High</span>
              </div>
              <p className="text-gray-600 text-sm">Authority roles: Lead Engineer, Chief Designer, Review Head. Paid for decisions, not hours.</p>
            </div>
          </div>

          {/* Hidden Truth */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 border border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3 text-base sm:text-lg">Hidden truth (99% don't know)</h4>
            <ul className="space-y-2 text-sm sm:text-base text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Aerospace rewards patience + precision, not speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Most drop out in Year 2–3 because effort feels "not worth it"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Survivors control projects, reviews, and approvals later</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Avionics Engineer Truth Curve */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-200">
          <div className="flex items-center gap-2 mb-4">
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Avionics Engineer — Truth Curve
            </h3>
          </div>
          
          <div className="bg-purple-100 rounded-lg p-4 border border-purple-300 mb-6">
            <p className="text-sm sm:text-base text-purple-900 font-semibold">
              <span className="font-bold">Reality in one line:</span> Mentally exhausting early, highly paid if you master complexity.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mb-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-purple-100">
              <div className="grid grid-cols-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-sm">
                <div className="p-3 border-r border-purple-500">Career Year</div>
                <div className="p-3 border-r border-purple-500 text-center">Effort Level</div>
                <div className="p-3 border-r border-purple-500 text-center">Salary Growth</div>
                <div className="p-3">What ACTUALLY happens</div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-4 hover:bg-purple-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">0–2 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Low</span></div>
                  <div className="p-3 text-gray-700 text-sm">Constant debugging, failures, test benches. Nothing works first time.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-purple-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">3–5 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-gray-700 text-sm">Embedded + safety systems + standards. Pressure increases, skills deepen.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-purple-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">6–10 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 High</span></div>
                  <div className="p-3 text-gray-700 text-sm">You handle critical avionics modules. Fewer people can do your job.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-purple-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">10+ yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Low</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Very High</span></div>
                  <div className="p-3 text-gray-700 text-sm">Systems Architect, Safety Lead, Defence Avionics Head. Your logic is paid for.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-6">
            <div className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">0–2 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Effort: Very High</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Salary: Low</span>
              </div>
              <p className="text-gray-600 text-sm">Constant debugging, failures, test benches. Nothing works first time.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">3–5 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Effort: Very High</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Salary: Medium</span>
              </div>
              <p className="text-gray-600 text-sm">Embedded + safety systems + standards. Pressure increases, skills deepen.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">6–10 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Effort: Medium</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Salary: High</span>
              </div>
              <p className="text-gray-600 text-sm">You handle critical avionics modules. Fewer people can do your job.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">10+ yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Effort: Low</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Salary: Very High</span>
              </div>
              <p className="text-gray-600 text-sm">Systems Architect, Safety Lead, Defence Avionics Head. Your logic is paid for.</p>
            </div>
          </div>

          {/* Hidden Truth */}
          <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-xl p-4 border border-purple-300">
            <h4 className="font-bold text-purple-900 mb-3 text-base sm:text-lg">Hidden truth (99% don't know)</h4>
            <ul className="space-y-2 text-sm sm:text-base text-purple-800">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Avionics is cognitively harder than Aerospace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Fewer people survive → less crowd later</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>One small mistake can delay projects by months → responsibility is huge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AME Truth Curve */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200">
          <div className="flex items-center gap-2 mb-4">
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Aircraft Maintenance Engineer (AME) — Truth Curve
            </h3>
          </div>
          
          <div className="bg-emerald-100 rounded-lg p-4 border border-emerald-300 mb-6">
            <p className="text-sm sm:text-base text-emerald-900 font-semibold">
              <span className="font-bold">Reality in one line:</span> Physically hard early, mentally demanding forever, one of the most stable careers.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mb-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-emerald-100">
              <div className="grid grid-cols-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm">
                <div className="p-3 border-r border-emerald-500">Career Year</div>
                <div className="p-3 border-r border-emerald-500 text-center">Effort Level</div>
                <div className="p-3 border-r border-emerald-500 text-center">Salary Growth</div>
                <div className="p-3">What ACTUALLY happens</div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-4 hover:bg-emerald-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">0–2 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Low</span></div>
                  <div className="p-3 text-gray-700 text-sm">Night shifts, physical work, inspections, zero error tolerance.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-emerald-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">3–5 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">🟠 High</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-gray-700 text-sm">Licensed responsibilities increase. Trust builds fast.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-emerald-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">6–10 yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 High</span></div>
                  <div className="p-3 text-gray-700 text-sm">You sign off aircraft. Airlines depend on you legally.</div>
                </div>
                <div className="grid grid-cols-4 hover:bg-emerald-50/50 transition-colors">
                  <div className="p-3 font-semibold text-gray-800">10+ yrs</div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Low</span></div>
                  <div className="p-3 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Very High</span></div>
                  <div className="p-3 text-gray-700 text-sm">Maintenance Head, QA Head, MRO Manager. Job security beats most fields.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-6">
            <div className="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">0–2 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Effort: Very High</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔻 Salary: Low</span>
              </div>
              <p className="text-gray-600 text-sm">Night shifts, physical work, inspections, zero error tolerance.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">3–5 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">🟠 Effort: High</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Salary: Medium</span>
              </div>
              <p className="text-gray-600 text-sm">Licensed responsibilities increase. Trust builds fast.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">6–10 yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Effort: Medium</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Salary: High</span>
              </div>
              <p className="text-gray-600 text-sm">You sign off aircraft. Airlines depend on you legally.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">10+ yrs</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Effort: Low</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">🔥 Salary: Very High</span>
              </div>
              <p className="text-gray-600 text-sm">Maintenance Head, QA Head, MRO Manager. Job security beats most fields.</p>
            </div>
          </div>

          {/* Hidden Truth */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-300">
            <h4 className="font-bold text-emerald-900 mb-3 text-base sm:text-lg">Hidden truth (99% don't know)</h4>
            <ul className="space-y-2 text-sm sm:text-base text-emerald-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>AME salaries grow slower initially but never collapse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Automation cannot replace licensed human responsibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>This is one of the most legally protected careers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demand–Supply Index Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-indigo-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            Each role is evaluated on three defensible indicators
          </p>

          {/* Why this matters - Demand–Supply Index */}
          <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
            <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
              <span className="font-semibold">Why this matters:</span> Helps students understand competition pressure and job chances instead of assuming "degree = job."
            </p>
          </div>
        </div>

        {/* Indicator Explanation Table - Desktop */}
        <div className="hidden md:block mb-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-indigo-100">
            <div className="grid grid-cols-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm">
              <div className="p-3 border-r border-indigo-500">Indicator</div>
              <div className="p-3">What it measures</div>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="grid grid-cols-2 hover:bg-indigo-50/50 transition-colors">
                <div className="p-3 font-semibold text-indigo-700 border-r border-gray-100">Hiring Volume</div>
                <div className="p-3 text-gray-700">How many openings exist (trend)</div>
              </div>
              <div className="grid grid-cols-2 hover:bg-indigo-50/50 transition-colors">
                <div className="p-3 font-semibold text-indigo-700 border-r border-gray-100">Talent Supply</div>
                <div className="p-3 text-gray-700">How many job-ready candidates exist</div>
              </div>
              <div className="grid grid-cols-2 hover:bg-indigo-50/50 transition-colors">
                <div className="p-3 font-semibold text-indigo-700 border-r border-gray-100">Entry Difficulty</div>
                <div className="p-3 text-gray-700">How hard it is for freshers to enter</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center italic">
            This matches how students experience competition in real life.
          </p>
        </div>

        {/* Indicator Explanation - Mobile Cards */}
        <div className="md:hidden space-y-3 mb-6">
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm">
            <div className="font-semibold text-indigo-700 text-sm mb-1">Hiring Volume</div>
            <div className="text-gray-600 text-xs">How many openings exist (trend)</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm">
            <div className="font-semibold text-indigo-700 text-sm mb-1">Talent Supply</div>
            <div className="text-gray-600 text-xs">How many job-ready candidates exist</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm">
            <div className="font-semibold text-indigo-700 text-sm mb-1">Entry Difficulty</div>
            <div className="text-gray-600 text-xs">How hard it is for freshers to enter</div>
          </div>
          <p className="text-xs text-gray-500 text-center italic">
            This matches how students experience competition in real life.
          </p>
        </div>

        {/* Role-wise Data Cards */}
        <div className="text-center mb-4">
          <h4 className="text-lg sm:text-xl font-bold text-slate-800">
            Role-wise Corrected Data (India, 2024–25)
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Aerospace Engineer Card */}
          <div className="bg-white rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-xl">
              <div className="flex items-center gap-2">
                
                <span className="font-bold text-base sm:text-lg">Aerospace Engineer</span>
              </div>
              <p className="text-blue-100 text-xs mt-1">Demand–Supply Reality</p>
            </div>
            <div className="p-4">
              {/* Desktop Table */}
              <div className="hidden sm:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Factor</th>
                      <th className="text-center py-2 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Simple meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Hiring Volume</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></td>
                      <td className="py-2 text-gray-600 text-xs">Steady openings in aero-structures, manufacturing</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Talent Supply</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 High</span></td>
                      <td className="py-2 text-gray-600 text-xs">Many graduates, few job-ready</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-800">Entry Difficulty</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 High</span></td>
                      <td className="py-2 text-gray-600 text-xs">Tools + standards required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Mobile Cards */}
              <div className="sm:hidden space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Hiring Volume</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">Steady openings in aero-structures, manufacturing</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Talent Supply</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 High</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">Many graduates, few job-ready</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Entry Difficulty</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 High</span>
                </div>
                <p className="text-gray-600 text-xs">Tools + standards required</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Competition Pressure:</span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">High</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-blue-800 text-sm font-medium italic">
                    "Jobs exist, but companies hire only well-prepared candidates."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avionics Engineer Card */}
          <div className="bg-white rounded-xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-t-xl">
              <div className="flex items-center gap-2">
                
                <span className="font-bold text-base sm:text-lg">Avionics Engineer</span>
              </div>
              <p className="text-purple-100 text-xs mt-1">Demand–Supply Reality</p>
            </div>
            <div className="p-4">
              {/* Desktop Table */}
              <div className="hidden sm:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Factor</th>
                      <th className="text-center py-2 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Simple meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Hiring Volume</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></td>
                      <td className="py-2 text-gray-600 text-xs">Defense, embedded, avionics labs</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Talent Supply</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></td>
                      <td className="py-2 text-gray-600 text-xs">Fewer graduates than aerospace</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-800">Entry Difficulty</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span></td>
                      <td className="py-2 text-gray-600 text-xs">Safety-critical skills needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Mobile Cards */}
              <div className="sm:hidden space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Hiring Volume</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">Defense, embedded, avionics labs</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Talent Supply</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">Fewer graduates than aerospace</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Entry Difficulty</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">🔴 Very High</span>
                </div>
                <p className="text-gray-600 text-xs">Safety-critical skills needed</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Competition Pressure:</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Medium–High</span>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="text-purple-800 text-sm font-medium italic">
                    "Fewer people apply, but skills required are much deeper."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AME Card */}
          <div className="bg-white rounded-xl border-2 border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-t-xl">
              <div className="flex items-center gap-2">
                
                <span className="font-bold text-base sm:text-lg">Aircraft Maintenance Engineer</span>
              </div>
              <p className="text-emerald-100 text-xs mt-1">Demand–Supply Reality</p>
            </div>
            <div className="p-4">
              {/* Desktop Table */}
              <div className="hidden sm:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Factor</th>
                      <th className="text-center py-2 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Simple meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Hiring Volume</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 High</span></td>
                      <td className="py-2 text-gray-600 text-xs">Airlines, MROs, fleet expansion</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-800">Talent Supply</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Low</span></td>
                      <td className="py-2 text-gray-600 text-xs">License limits supply</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-800">Entry Difficulty</td>
                      <td className="py-2 text-center"><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span></td>
                      <td className="py-2 text-gray-600 text-xs">Structured but strict path</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Mobile Cards */}
              <div className="sm:hidden space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Hiring Volume</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 High</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">Airlines, MROs, fleet expansion</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Talent Supply</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">🟢 Low</span>
                </div>
                <p className="text-gray-600 text-xs pb-2">License limits supply</p>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800 text-sm">Entry Difficulty</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">🟡 Medium</span>
                </div>
                <p className="text-gray-600 text-xs">Structured but strict path</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Competition Pressure:</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Low–Medium</span>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <p className="text-emerald-800 text-sm font-medium italic">
                    "Not crowded because licensing controls entry."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-start gap-3">
            
            <div>
              <p className="text-sm sm:text-base text-amber-900 font-semibold mb-1">
                Why some people earn less or more:
              </p>
              <p className="text-xs sm:text-sm text-amber-800">
                Salary depends on <span className="font-semibold">skills, certifications, project depth, and responsibility level</span> — not just degree or college name.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-line Truth - At bottom of page */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-[0.6875rem] sm:text-xs lg:text-sm font-bold text-white/90 uppercase tracking-wide mb-0.5 sm:mb-1">
              Bottom-line Truth
            </h3>
            <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-white font-medium leading-relaxed">
              Knowing these before choosing a degree prevents career shock, regret, and wrong long-term decisions.
            </p>
          </div>
        </div>
      </div>
    </div>;
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.