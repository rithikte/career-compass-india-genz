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
    priority: 'High',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    role: 'Avionics Engineer',
    currentSkill: 55,
    requiredSkill: 95,
    gap: 40,
    priority: 'Critical',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    currentSkill: 63,
    requiredSkill: 88,
    gap: 25,
    priority: 'Medium',
    badgeColor: 'bg-amber-100 text-amber-800'
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


      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
              Skill Gap Heat Map
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows the exact gap between current skills and job-ready skills, helping students prepare early and avoid rejection later.
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-slate-700 to-slate-800">
              <TableHead className="text-white font-bold">Job Role</TableHead>
              <TableHead className="text-white font-bold">Current Skills</TableHead>
              <TableHead className="text-white font-bold">Required Skills</TableHead>
              <TableHead className="text-white font-bold">Gap %</TableHead>
              <TableHead className="text-white font-bold">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skillGapData.map((item) => (
              <TableRow key={item.role} className="hover:bg-slate-50">
                <TableCell className="font-medium">{item.role}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-slate-600 h-2 rounded-full" 
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
                        className="bg-slate-800 h-2 rounded-full" 
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

        {/* Reassurance message */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex flex-col items-center bg-slate-50 rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-slate-200">
            <p className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold">
              A skill gap does <span className="text-red-600 font-bold">NOT</span> mean your child will fail.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 font-medium">
              It only means: <span className="font-bold">Extra training is required</span>
            </p>
          </div>
        </div>
      </div>

      {/* Effort Intensity Required Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
              Effort Intensity Required
            </h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students understand the realistic effort each role demands, so they can prepare mentally and choose based on their own capacity.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Aerospace Engineer */}
          <div className="bg-blue-50 rounded-xl p-4 sm:p-5 border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                Aerospace Engineer
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-slate-600 mb-2 font-medium">Effort Level:</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Low
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Medium
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="w-4 h-4 border-2 border-slate-600 rounded-sm bg-slate-600"></span> High
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Extreme
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-700">What this means:</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This role needs strong basics, continuous learning, and patience. Early years involve design reviews, testing, and repeated corrections before growth becomes steady.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium italic">
                High effort means long preparation and consistency — not difficulty beyond your ability.
              </p>
            </div>
          </div>

          {/* Avionics Engineer */}
          <div className="bg-purple-50 rounded-xl p-4 sm:p-5 border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                Avionics Engineer
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-slate-600 mb-2 font-medium">Effort Level:</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Low
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Medium
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> High
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="w-4 h-4 border-2 border-slate-600 rounded-sm bg-slate-600"></span> Extreme
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-700">What this means:</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This role needs very high accuracy, constant upskilling, and mental focus. Small mistakes matter, and learning never really stops in this field.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium italic">
                Extreme effort means high responsibility and deep focus — not pressure without reward.
              </p>
            </div>
          </div>

          {/* Aircraft Maintenance Engineer (AME) */}
          <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                Aircraft Maintenance Engineer (AME)
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-slate-600 mb-2 font-medium">Effort Level:</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Low
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Medium
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="w-4 h-4 border-2 border-slate-600 rounded-sm bg-slate-600"></span> High
                </span>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 border-2 border-slate-300 rounded-sm bg-white"></span> Extreme
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-700">What this means:</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This role needs discipline, routine work, and strict safety practices. Growth is steady but requires consistency and responsibility every day.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium italic">
                High effort means regular hard work and responsibility — not constant stress.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex flex-col items-center bg-slate-50 rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-slate-200">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              This gap is normal for fresh students.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              It reduces with proper learning and consistent practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};