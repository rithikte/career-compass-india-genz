
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
        {careerData.map((career, index) => (
          <div
            key={career.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow-duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{career.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{career.role}</h3>
                <p className="text-sm text-gray-600">{career.duties}</p>
              </div>
            </div>

            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { level: 'Entry', salary: career.entry },
                    { level: 'Mid', salary: career.mid },
                    { level: 'Senior', salary: career.senior }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`₹${value} LPA`, 'Salary']}
                    labelStyle={{ color: '#1e293b' }}
                  />
                  <Bar dataKey="salary" fill="#1e40af" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-blue-800">₹{career.entry}</div>
                <div className="text-sm text-blue-600">Entry</div>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-indigo-800">₹{career.mid}</div>
                <div className="text-sm text-indigo-600">Mid-Level</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-purple-800">₹{career.senior}+</div>
                <div className="text-sm text-purple-600">Senior</div>
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
