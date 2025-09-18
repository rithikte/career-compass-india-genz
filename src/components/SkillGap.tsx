import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';

const skillGapData = [
  {
    role: 'Aerospace Engineer',
    currentSkill: 58,
    requiredSkill: 92,
    gap: 34,
    priority: 'High'
  },
  {
    role: 'Avionics Engineer',
    currentSkill: 55,
    requiredSkill: 95,
    gap: 40,
    priority: 'Critical'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    currentSkill: 63,
    requiredSkill: 88,
    gap: 25,
    priority: 'Medium'
  }
];

const getGapColor = (gap: number) => {
  if (gap <= 25) return 'bg-green-500';
  if (gap <= 35) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Low': return 'bg-green-100 text-green-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Critical': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const SkillGap = () => {
  const avgGap = Math.round(skillGapData.reduce((sum, item) => sum + item.gap, 0) / skillGapData.length);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Skill Gap Analysis
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Current vs Required Skills • India 2025 Assessment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">{avgGap}%</div>
          <div className="text-red-200">Average Skill Gap</div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">6-12</div>
          <div className="text-blue-200">Months to Bridge</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold">85%</div>
          <div className="text-green-200">Success Rate</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Skill Gap Heat Map
        </h3>
        <div className="overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Role</TableHead>
              <TableHead>Current Skills</TableHead>
              <TableHead>Required Skills</TableHead>
              <TableHead>Gap %</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skillGapData.map((item) => (
              <TableRow key={item.role}>
                <TableCell className="font-medium">{item.role}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.currentSkill}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{item.currentSkill}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${item.requiredSkill}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{item.requiredSkill}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${getGapColor(item.gap)}`}></div>
                    <span className="font-bold">{item.gap}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Critical Skills Alert</h3>
          <p className="text-orange-200 text-lg mb-6">
            Avionics Engineering has the highest skill gap at 40% - immediate action needed!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">40%</div>
              <div className="text-red-200">Avionics Gap</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">34%</div>
              <div className="text-red-200">Aerospace Gap</div>
            </div>
            <div className="bg-red-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-red-200">Maintenance Gap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
