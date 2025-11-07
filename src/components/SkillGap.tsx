import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';
import SourceBadge from './SourceBadge';

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
  if (gap <= 25) return 'bg-success';
  if (gap <= 35) return 'bg-warning';
  return 'bg-destructive';
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
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.nasscom.in/knowledge-center/publications/skill-development-reports" label="NASSCOM Skills" />
          <SourceBadge href="https://www.skillscouncil.in/aerospace-sector-skill-council" label="ASSC Reports" />
          <SourceBadge href="https://www.teamlease.com/reports/job-and-salary-primer" label="TeamLease Study" />
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Skill Gap Heat Map
        </h3>
        <div className="overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-slate-50 to-slate-100 shadow-sm border-b-2 border-slate-200">
              <TableHead className="text-slate-700 font-bold">Job Role</TableHead>
              <TableHead className="text-slate-700 font-bold">Current Skills</TableHead>
              <TableHead className="text-slate-700 font-bold">Required Skills</TableHead>
              <TableHead className="text-slate-700 font-bold">Gap %</TableHead>
              <TableHead className="text-slate-700 font-bold">Priority</TableHead>
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

      <div className="bg-gradient-accent text-white p-8 rounded-lg">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Critical Skills Alert</h3>
          <p className="text-white/90 text-lg mb-6">
            Avionics Engineering has the highest skill gap at 40% - immediate action needed!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">40%</div>
              <div className="text-white/80">Avionics Gap</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">34%</div>
              <div className="text-white/80">Aerospace Gap</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-white/80">Maintenance Gap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
