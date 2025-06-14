
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Legend
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

const BAR_COLORS = ['#4f46e5', '#0ea5e9', '#a21caf']; // Entry, Mid, Senior
const LEVEL_COLORS = {
  Entry: '#4f46e5',
  Mid: '#0ea5e9',
  Senior: '#a21caf'
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg shadow-lg px-4 py-2 bg-white border border-blue-100">
        <div className="font-bold text-blue-800">{label} Level</div>
        <div className="text-slate-700 text-lg font-semibold">
          <span className="text-blue-700">₹{payload[0].value} LPA</span>
        </div>
      </div>
    );
  }
  return null;
};

export const CareerOutcomes = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
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
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{career.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{career.role}</h3>
                <p className="text-sm text-gray-600">{career.duties}</p>
              </div>
            </div>

            <div className="relative h-64 mb-4 animate-fade-in">
              <div className="absolute left-3 top-2 z-10">
                <span className="bg-blue-100 text-blue-700 uppercase text-xs px-3 py-1 rounded-full font-semibold tracking-wider shadow-sm">
                  Salary Growth by Experience
                </span>
              </div>
              <ResponsiveContainer width="100%" height="95%">
                <BarChart
                  data={[
                    { level: 'Entry', salary: career.entry },
                    { level: 'Mid', salary: career.mid },
                    { level: 'Senior', salary: career.senior }
                  ]}
                  margin={{ top: 40, right: 20, left: 10, bottom: 24 }}
                  barSize={38}
                >
                  <defs>
                    <linearGradient id="entryGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={0.92}/>
                      <stop offset="100%" stopColor="#7dd3fc" stopOpacity={0.52}/>
                    </linearGradient>
                    <linearGradient id="midGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.94}/>
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.58}/>
                    </linearGradient>
                    <linearGradient id="seniorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d946ef" stopOpacity={0.93}/>
                      <stop offset="100%" stopColor="#a21caf" stopOpacity={0.64}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#e0e7ff" />
                  <XAxis dataKey="level" tick={{fontWeight: 600, fill: '#3730a3', fontSize: 16}} axisLine={false} tickLine={false}/>
                  <YAxis
                    width={55}
                    tick={{fontWeight: 500, fill: '#334155', fontSize: 15}}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={v => `₹${v}L`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: '#e0e7ff', opacity: 0.19}} />
                  <Legend
                    formatter={(value) => {
                      return <span className="font-semibold text-sm text-gray-600">{value} Level</span>;
                    }}
                    iconType="circle"
                    verticalAlign="top"
                    align="center"
                  />
                  <Bar
                    dataKey="salary"
                    radius={[16, 16, 8, 8]}
                    isAnimationActive={true}
                    animationDuration={1200}
                    fill={
                      career.role === 'Aerospace Engineer' ? 'url(#entryGradient)' :
                      career.role === 'Avionics Engineer' ? 'url(#midGradient)' :
                      'url(#seniorGradient)'
                    }
                  >
                    <LabelList
                      dataKey="salary"
                      position="top"
                      formatter={(val: number) => `₹${val}L`}
                      className="font-bold text-base text-gray-900"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-blue-800">₹{career.entry}</div>
                <div className="text-sm text-blue-600 font-semibold">Entry</div>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-indigo-800">₹{career.mid}</div>
                <div className="text-sm text-indigo-600 font-semibold">Mid-Level</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-purple-800">₹{career.senior}+</div>
                <div className="text-sm text-purple-600 font-semibold">Senior</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
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
