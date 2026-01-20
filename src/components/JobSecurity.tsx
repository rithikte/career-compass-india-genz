import React from 'react';
import { CheckCircle, XCircle, TrendingUp, AlertTriangle, Award } from 'lucide-react';
import SourceBadge from './SourceBadge';

const getResilienceColor = (level: string) => {
  switch (level) {
    case 'Very high resilience': return 'text-emerald-600';
    case 'High resilience': return 'text-green-600';
    case 'Moderate resilience': return 'text-amber-600';
    case 'Low–moderate resilience': return 'text-orange-600';
    default: return 'text-slate-600';
  }
};

const getAdaptabilityColor = (level: string) => {
  switch (level) {
    case 'Very High': return 'text-emerald-600';
    case 'High': return 'text-green-600';
    case 'Medium': return 'text-amber-600';
    case 'Low–Medium': return 'text-orange-600';
    default: return 'text-slate-600';
  }
};

const getGapColor = (level: string) => {
  switch (level) {
    case 'Very Large': return 'bg-red-100 text-red-700 border-red-200';
    case 'Large': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
    default: return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
    case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
    default: return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

const getLongevityColor = (level: string) => {
  switch (level) {
    case 'Very Strong': return 'text-emerald-600';
    case 'Strong': return 'text-green-600';
    default: return 'text-slate-600';
  }
};

export const JobSecurity = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Job Security Analysis
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          With vs Without AI Skills • Future-Proofing Your Career
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www2.deloitte.com/us/en/insights/focus/technology-and-the-future-of-work" label="Deloitte Future Work" />
          <SourceBadge href="https://www.linkedin.com/business/learning/blog/learning-and-development/workplace-learning-report" label="LinkedIn Skills Gap" />
        </div>
      </div>

      {/* Important Job Security Reality */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-amber-200">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4">
            Important Job Security Reality
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-amber-800 font-medium">
              AI skills do not automatically make you safe.
            </p>
            <p className="text-base sm:text-lg text-slate-700">
              Only <span className="font-bold text-amber-900">role-specific AI skills</span> actually used in real aerospace jobs increase long-term job security.
            </p>
          </div>
        </div>
      </div>

      {/* Career Resilience with AI Skills */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Career Resilience with AI Skills
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">(Qualitative estimate, not a guarantee)</p>
          
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how AI skills affect long-term career stability for each role.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Job Role</th>
                <th className="text-center py-3 px-4 font-semibold">With AI Skills</th>
                <th className="text-center py-3 px-4 font-semibold">Without AI Skills</th>
                <th className="text-left py-3 px-4 font-semibold rounded-tr-lg">What actually changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('High resilience')}`}>High resilience</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('Moderate resilience')}`}>Moderate resilience</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">AI-skilled engineers stay in core design & systems roles</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('Very high resilience')}`}>Very high resilience</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('Low–moderate resilience')}`}>Low–moderate resilience</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Automation favors engineers who can work with AI-driven systems</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">AME</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('High resilience')}`}>High resilience</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getResilienceColor('Moderate resilience')}`}>Moderate resilience</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">AI skills help shift into predictive & reliability roles</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">With AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('High resilience')}`}>High resilience</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Without AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('Moderate resilience')}`}>Moderate resilience</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">AI-skilled engineers stay in core design & systems roles</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">With AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('Very high resilience')}`}>Very high resilience</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Without AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('Low–moderate resilience')}`}>Low–moderate resilience</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">Automation favors engineers who can work with AI-driven systems</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">AME</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">With AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('High resilience')}`}>High resilience</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Without AI Skills:</span>
                <span className={`font-bold ${getResilienceColor('Moderate resilience')}`}>Moderate resilience</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">AI skills help shift into predictive & reliability roles</p>
            </div>
          </div>
        </div>

        {/* Resilience Advantage Meaning */}
        <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 sm:p-6 border border-indigo-200">
          <h4 className="text-lg font-bold text-indigo-900 mb-4">What "Resilience Advantage" really means</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-sm sm:text-base">Better chance of staying in core engineering roles</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-sm sm:text-base">Lower risk of being pushed into support / low-growth roles</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-sm sm:text-base">Faster recovery after industry slowdowns</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 text-sm sm:text-base">Easier shift into higher-responsibility work</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Traditional Skills vs AI-Enhanced Skills — Career Adaptability */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Traditional Skills vs AI-Enhanced Skills — Career Adaptability
            </h3>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">What this shows:</span> Explains how upgrading skills affects long-term relevance, not career length guarantees.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Role</th>
                <th className="text-center py-3 px-4 font-semibold">Traditional Skill Adaptability</th>
                <th className="text-center py-3 px-4 font-semibold">AI-Enhanced Skill Adaptability</th>
                <th className="text-left py-3 px-4 font-semibold rounded-tr-lg">What actually changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('Medium')}`}>Medium</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('High')}`}>High</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Better fit for advanced design & validation roles</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('Low–Medium')}`}>Low–Medium</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('High')}`}>High</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Can move with automation & smart systems</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">AME</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('Medium')}`}>Medium</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getAdaptabilityColor('Very High')}`}>Very High</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Shifts into predictive & reliability roles</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Traditional:</span>
                <span className={`font-bold ${getAdaptabilityColor('Medium')}`}>Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AI-Enhanced:</span>
                <span className={`font-bold ${getAdaptabilityColor('High')}`}>High</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">Better fit for advanced design & validation roles</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Traditional:</span>
                <span className={`font-bold ${getAdaptabilityColor('Low–Medium')}`}>Low–Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AI-Enhanced:</span>
                <span className={`font-bold ${getAdaptabilityColor('High')}`}>High</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">Can move with automation & smart systems</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">AME</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Traditional:</span>
                <span className={`font-bold ${getAdaptabilityColor('Medium')}`}>Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AI-Enhanced:</span>
                <span className={`font-bold ${getAdaptabilityColor('Very High')}`}>Very High</span>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-200 mt-2">Shifts into predictive & reliability roles</p>
            </div>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-orange-800 text-sm sm:text-base font-medium">
              Traditional skills → risk becoming narrow over time
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-800 text-sm sm:text-base font-medium">
              AI-enhanced skills → help you move across roles as work changes
            </p>
          </div>
        </div>
      </div>

      {/* Skill Gap Heat Map */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Skill Gap Heat Map
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">(Qualitative estimate, based on hiring feedback & curriculum gaps)</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Job Role</th>
                <th className="text-center py-3 px-4 font-semibold">Typical Graduate Readiness</th>
                <th className="text-center py-3 px-4 font-semibold">Industry Job Readiness</th>
                <th className="text-center py-3 px-4 font-semibold">Skill Gap Level</th>
                <th className="text-center py-3 px-4 font-semibold rounded-tr-lg">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4 text-slate-600">Moderate</td>
                <td className="text-center py-4 px-4 text-slate-600">High</td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getGapColor('Large')}`}>Large</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor('High')}`}>High</span>
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4 text-slate-600">Low–Moderate</td>
                <td className="text-center py-4 px-4 text-slate-600">Very High</td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getGapColor('Very Large')}`}>Very Large</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor('Critical')}`}>Critical</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">AME</td>
                <td className="text-center py-4 px-4 text-slate-600">Moderate</td>
                <td className="text-center py-4 px-4 text-slate-600">High</td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getGapColor('Medium')}`}>Medium</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor('Medium')}`}>Medium</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Graduate Readiness</p>
                <p className="font-medium text-slate-800">Moderate</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Industry Readiness</p>
                <p className="font-medium text-slate-800">High</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Skill Gap</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getGapColor('Large')}`}>Large</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Priority</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor('High')}`}>High</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Graduate Readiness</p>
                <p className="font-medium text-slate-800">Low–Moderate</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Industry Readiness</p>
                <p className="font-medium text-slate-800">Very High</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Skill Gap</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getGapColor('Very Large')}`}>Very Large</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Priority</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor('Critical')}`}>Critical</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">AME</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Graduate Readiness</p>
                <p className="font-medium text-slate-800">Moderate</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Industry Readiness</p>
                <p className="font-medium text-slate-800">High</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Skill Gap</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getGapColor('Medium')}`}>Medium</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Priority</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor('Medium')}`}>Medium</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to read this */}
        <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">How to read this</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Typical Graduate Readiness</strong> → What most students have after college</li>
            <li><strong>Industry Job Readiness</strong> → What companies expect for entry-level roles</li>
            <li><strong>Skill Gap Level</strong> → How much extra learning is needed</li>
            <li><strong>Priority</strong> → How urgently you should close the gap</li>
          </ul>
        </div>
      </div>

      {/* Career Longevity Outlook (2025–2040) */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Career Longevity Outlook (2025–2040)
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">Based on regulation, demand stability, and reskilling needs</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Job Role</th>
                <th className="text-center py-3 px-4 font-semibold">Automation Risk</th>
                <th className="text-center py-3 px-4 font-semibold">Reskilling Need</th>
                <th className="text-center py-3 px-4 font-semibold">Longevity Outlook</th>
                <th className="text-left py-3 px-4 font-semibold rounded-tr-lg">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4 text-amber-600 font-medium">Low–Medium</td>
                <td className="text-center py-4 px-4 text-orange-600 font-medium">High</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getLongevityColor('Very Strong')}`}>Very Strong</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Defence, space, and long project cycles</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4 text-amber-600 font-medium">Medium</td>
                <td className="text-center py-4 px-4 text-orange-600 font-medium">Medium–High</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getLongevityColor('Strong')}`}>Strong</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Growth tied to smart systems + skills</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-800">AME</td>
                <td className="text-center py-4 px-4 text-green-600 font-medium">Low</td>
                <td className="text-center py-4 px-4 text-amber-600 font-medium">Medium</td>
                <td className="text-center py-4 px-4">
                  <span className={`font-bold ${getLongevityColor('Very Strong')}`}>Very Strong</span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-sm">Legal licensing + global MRO demand</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Aerospace Engineer</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Automation Risk</p>
                <p className="font-medium text-amber-600">Low–Medium</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Reskilling Need</p>
                <p className="font-medium text-orange-600">High</p>
              </div>
              <div className="col-span-2">
                <p className="text-slate-500 text-xs">Longevity Outlook</p>
                <p className={`font-bold ${getLongevityColor('Very Strong')}`}>Very Strong</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-2 pt-2 border-t border-slate-200">Defence, space, and long project cycles</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Avionics Engineer</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Automation Risk</p>
                <p className="font-medium text-amber-600">Medium</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Reskilling Need</p>
                <p className="font-medium text-orange-600">Medium–High</p>
              </div>
              <div className="col-span-2">
                <p className="text-slate-500 text-xs">Longevity Outlook</p>
                <p className={`font-bold ${getLongevityColor('Strong')}`}>Strong</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-2 pt-2 border-t border-slate-200">Growth tied to smart systems + skills</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">AME</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Automation Risk</p>
                <p className="font-medium text-green-600">Low</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Reskilling Need</p>
                <p className="font-medium text-amber-600">Medium</p>
              </div>
              <div className="col-span-2">
                <p className="text-slate-500 text-xs">Longevity Outlook</p>
                <p className={`font-bold ${getLongevityColor('Very Strong')}`}>Very Strong</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-2 pt-2 border-t border-slate-200">Legal licensing + global MRO demand</p>
          </div>
        </div>

        {/* How to read this */}
        <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">How to read this</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Automation Risk</strong> → How much AI changes tasks</li>
            <li><strong>Reskilling Need</strong> → How often skills must be updated</li>
            <li><strong>Longevity Outlook</strong> → Long-term relevance, not guarantees</li>
          </ul>
        </div>
      </div>

      {/* Career Outcome Improvement with Skill Upgrades */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Career Outcome Improvement with Skill Upgrades
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">(Qualitative impact, not guaranteed results)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Aerospace Engineer */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6 border border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <h4 className="font-bold text-blue-900">Aerospace Engineer</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Promotion Impact:</span>
                <span className="font-bold text-blue-700">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Salary Impact:</span>
                <span className="font-bold text-blue-700">Strong improvement</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Interview Impact:</span>
                <span className="font-bold text-blue-700">Significantly better</span>
              </div>
              <div className="border-t border-blue-200 pt-3 mt-3">
                <p className="text-slate-600 text-xs mb-1">Typical salary shift (entry-level):</p>
                <p className="font-bold text-slate-800">₹4–5L → ₹5–7L</p>
                <p className="text-slate-500 text-xs">(company & location dependent)</p>
              </div>
              <div className="border-t border-blue-200 pt-3">
                <p className="text-slate-600 text-xs mb-1">Career progression:</p>
                <p className="font-medium text-slate-800 text-xs">Junior → Senior → Lead Engineer</p>
              </div>
            </div>
          </div>

          {/* Avionics Engineer */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 sm:p-6 border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-purple-900">Avionics Engineer</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Promotion Impact:</span>
                <span className="font-bold text-purple-700">Medium–High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Salary Impact:</span>
                <span className="font-bold text-purple-700">Moderate to strong</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Interview Impact:</span>
                <span className="font-bold text-purple-700">Better screening</span>
              </div>
              <div className="border-t border-purple-200 pt-3 mt-3">
                <p className="text-slate-600 text-xs mb-1">Typical salary shift (entry-level):</p>
                <p className="font-bold text-slate-800">₹3–4L → ₹4.5–6L</p>
              </div>
              <div className="border-t border-purple-200 pt-3">
                <p className="text-slate-600 text-xs mb-1">Career progression:</p>
                <p className="font-medium text-slate-800 text-xs">Trainee → Engineer → Senior Engineer</p>
              </div>
            </div>
          </div>

          {/* AME */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 sm:p-6 border border-amber-200">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-amber-900">Aircraft Maintenance Engineer (AME)</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Promotion Impact:</span>
                <span className="font-bold text-amber-700">Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Salary Impact:</span>
                <span className="font-bold text-amber-700">Moderate improvement</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Interview Impact:</span>
                <span className="font-bold text-amber-700">Higher selection</span>
              </div>
              <div className="border-t border-amber-200 pt-3 mt-3">
                <p className="text-slate-600 text-xs mb-1">Typical salary shift (entry-level):</p>
                <p className="font-bold text-slate-800">₹3–4L → ₹4–6L</p>
              </div>
              <div className="border-t border-amber-200 pt-3">
                <p className="text-slate-600 text-xs mb-1">Career progression:</p>
                <p className="font-medium text-slate-800 text-xs">Technician → Engineer → Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What happens if you don't upgrade skills */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-red-200">
        <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-6 text-center">
          What happens if you don't upgrade skills
        </h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Traditional skills alone lose value faster</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Job security reduces</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-100">
            <p className="text-slate-800 text-base sm:text-lg">Career durability can drop below <span className="font-bold text-red-600">40–50%</span></p>
          </div>
        </div>
        
        <div className="mt-8 bg-white border-l-4 border-amber-500 p-4 sm:p-6 rounded-r-lg max-w-3xl mx-auto">
          <p className="text-slate-800 text-base sm:text-lg mb-2">
            <span className="font-bold">AI does not kill careers.</span>
          </p>
          <p className="text-slate-800 text-base sm:text-lg mb-2">
            <span className="font-bold text-red-700">Refusing to learn kills careers.</span>
          </p>
          <p className="text-slate-700 text-base sm:text-lg">
            Engineers who learn AI tools stay relevant much longer.
          </p>
        </div>
      </div>

      {/* Binary Career Reality - NEW SECTION */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Binary Career Reality
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 flex-shrink-0" />
              <span className="text-green-300 font-bold text-base sm:text-lg">AI-enabled engineers</span>
            </div>
            <p className="text-green-200 text-sm sm:text-base">
              → remain in core, high-impact roles
            </p>
          </div>
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-400 flex-shrink-0" />
              <span className="text-red-300 font-bold text-base sm:text-lg">Non-AI engineers</span>
            </div>
            <p className="text-red-200 text-sm sm:text-base">
              → gradually pushed out of high-impact roles
            </p>
          </div>
        </div>
        <p className="text-center text-slate-400 mt-6 text-sm sm:text-base">
          This shift is slow, but real.
        </p>
      </div>

      {/* Final Job Security Truth - NEW SECTION */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-emerald-200">
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4 text-center">
          Final Job Security Truth
        </h3>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
            Job security in the next 20 years will belong to engineers who combine <span className="font-bold text-emerald-800">domain knowledge</span> with <span className="font-bold text-emerald-800">AI</span> — not one without the other.
          </p>
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing this early helps students choose future-proof skills, not just a degree name.
          </p>
        </div>
      </div>
    </div>
  );
};
