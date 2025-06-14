import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LabelList,
} from 'recharts';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

const careerData = [
  {
    role: 'Aerospace Engineer',
    duties: 'Designs aircraft, satellites, missiles',
    entry: 4.0,
    mid: 12.0,
    senior: 20.0,
    icon: '✈️'
  },
  {
    role: 'Avionics Engineer',
    duties: 'Manages aircraft electronics',
    entry: 3.5,
    mid: 10.0,
    senior: 18.0,
    icon: '🛩️'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    duties: 'Repairs and inspects aircraft systems',
    entry: 3.0,
    mid: 8.0,
    senior: 15.0,
    icon: '🔧'
  },
  {
    role: 'Flight Test Engineer',
    duties: 'Tests aircraft performance and safety',
    entry: 5.0,
    mid: 14.0,
    senior: 22.0,
    icon: '🧪'
  },
  {
    role: 'Drone/UAV Engineer',
    duties: 'Builds and manages drones',
    entry: 3.0,
    mid: 9.0,
    senior: 16.0,
    icon: '🚁'
  },
  {
    role: 'Data Analyst (Aviation)',
    duties: 'Analyzes flight/fuel/maintenance data',
    entry: 4.0,
    mid: 11.0,
    senior: 18.0,
    icon: '📊'
  }
];

// Format the salary data for line charting
const mapToLineData = (career: typeof careerData[0]) => [
  { level: 'Entry', salary: career.entry },
  { level: 'Mid', salary: career.mid },
  { level: 'Senior', salary: career.senior },
];

const EntryMidSeniorCard = ({ entry, mid, senior }: { entry: number; mid: number; senior: number }) => (
  <div className="grid grid-cols-3 gap-4 text-center mt-4">
    <div className="bg-blue-50 p-3 rounded-lg shadow">
      <div className="text-lg font-bold text-blue-800">₹{entry}</div>
      <div className="text-sm text-blue-600 font-semibold">Entry</div>
    </div>
    <div className="bg-indigo-50 p-3 rounded-lg shadow">
      <div className="text-lg font-bold text-indigo-800">₹{mid}</div>
      <div className="text-sm text-indigo-600 font-semibold">Mid</div>
    </div>
    <div className="bg-purple-50 p-3 rounded-lg shadow">
      <div className="text-lg font-bold text-purple-800">₹{senior}+</div>
      <div className="text-sm text-purple-600 font-semibold">Senior</div>
    </div>
  </div>
);

const SalaryLineChart = ({ data }: { data: { level: string, salary: number }[] }) => (
  <ResponsiveContainer width="100%" minWidth={240} height={120}>
    <LineChart data={data} margin={{ left: 12, right: 16, top: 16, bottom: 4 }}>
      <CartesianGrid stroke="#e0e7eb" strokeDasharray="4 8" vertical={false} />
      <XAxis
        dataKey="level"
        tick={{ fontWeight: 700, fill: "#1e293b", fontSize: 16 }}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        width={50}
        tick={{ fontWeight: 600, fill: "#334155", fontSize: 14 }}
        tickFormatter={v => `₹${v}L`}
        domain={['auto', 'auto']}
      />
      <Tooltip
        formatter={(v: number) => [`₹${v} LPA`, "Salary"]}
        labelFormatter={l => `${l} Level`}
        contentStyle={{ borderRadius: 8, fontWeight: 'bold' }}
      />
      <Line
        type="monotone"
        dataKey="salary"
        stroke="#2563eb"
        strokeWidth={3}
        dot={{ stroke: "#2563eb", fill: "#fff", strokeWidth: 2, r: 6 }}
        activeDot={{ r: 8, stroke: "#1e40af" }}
        isAnimationActive={true}
      >
        <LabelList
          dataKey="salary"
          position="top"
          formatter={(v: number) => `₹${v}L`}
          style={{
            fontWeight: 700,
            fontSize: 15,
            fill: "#2563eb",
          }}
        />
      </Line>
    </LineChart>
  </ResponsiveContainer>
);

export const CareerOutcomes = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          What Can I Become After This Degree?
        </h2>
        <p className="text-xl text-gray-600">
          Explore high-growth aerospace careers with competitive salaries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {careerData.map((career) => (
          <div key={career.role} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-3">{career.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{career.role}</h3>
                <p className="text-sm text-gray-600">{career.duties}</p>
              </div>
            </div>
            <div className="mt-2">
              <SalaryLineChart data={mapToLineData(career)} />
            </div>
            <EntryMidSeniorCard entry={career.entry} mid={career.mid} senior={career.senior} />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mt-10">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">15-20%</div>
            <div className="text-blue-200">Average Growth</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">6</div>
            <div className="text-blue-200">Career Paths</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">50L+</div>
            <div className="text-blue-200">Jobs by 2040</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The file is getting lengthy. For best maintainability, consider splitting components (like SalaryLineChart and EntryMidSeniorCard) into their own files.
