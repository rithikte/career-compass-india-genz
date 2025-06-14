
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
          <div
            key={career.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col gap-2"
          >
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-3">{career.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{career.role}</h3>
                <p className="text-sm text-gray-600">{career.duties}</p>
              </div>
            </div>
            {/* Chart + Card together */}
            <div className="w-full mb-1">
              <VerticalBarChart data={mapToBarData(career)} />
              <EntryMidSeniorCard entry={career.entry} mid={career.mid} senior={career.senior} />
            </div>
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

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.

