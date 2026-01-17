import React from 'react';
import { AlertTriangle, Users, MapPin, Award, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import SourceBadge from './SourceBadge';

// Competition Range Data
const competitionRangeData = [
  { role: 'Aerospace Engineer', range: '8–12 candidates per core opening', color: 'blue' },
  { role: 'Avionics Engineer', range: '5–8 candidates per core opening', color: 'purple' },
  { role: 'AME', range: '3–6 candidates per licensed opening', color: 'amber' }
];

// Aerospace Engineer City Data
const aerospaceEngineerCityData = [
  { city: 'Bengaluru', range: '10–14', meaning: 'Largest hub, toughest competition' },
  { city: 'Hyderabad', range: '6–9', meaning: 'Best balance for freshers' },
  { city: 'Pune', range: '7–10', meaning: 'Manufacturing + design roles' },
  { city: 'Chennai', range: '6–9', meaning: 'Stable aerospace growth' },
  { city: 'Nagpur', range: '4–7', meaning: 'Easier entry, MRO/manufacturing' }
];

// Avionics Engineer City Data
const avionicsEngineerCityData = [
  { city: 'Bengaluru', range: '8–12', meaning: 'High-end avionics & defence work' },
  { city: 'Hyderabad', range: '5–8', meaning: 'Growing avionics ecosystem' },
  { city: 'Pune', range: '6–9', meaning: 'Embedded & testing roles' },
  { city: 'Chennai', range: '5–8', meaning: 'Steady avionics hiring' },
  { city: 'Kochi', range: '4–6', meaning: 'Naval & maintenance avionics' }
];

// AME City Data
const ameCityData = [
  { city: 'Delhi-NCR', range: '5–7', meaning: 'High traffic, more licensed AMEs' },
  { city: 'Mumbai', range: '4–6', meaning: 'Busy MRO hub, steady demand' },
  { city: 'Hyderabad', range: '3–5', meaning: 'Less crowded, good entry chances' },
  { city: 'Bengaluru', range: '4–6', meaning: 'Mixed civil + defence work' },
  { city: 'Nagpur', range: '2–4', meaning: 'Strong MRO demand, low crowd' }
];

export const InterviewSituation = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Competition Range (India)
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Core-role competition ranges across aviation careers
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.aicte-india.org/feedback/placement-statistics" label="AICTE Placement Data" />
          <SourceBadge href="https://www.naukri.com/company-reviews/aerospace-companies" label="Naukri Reviews" />
          <SourceBadge href="https://www.glassdoor.co.in/Interview/aerospace-engineer-interview-questions" label="Glassdoor Interviews" />
        </div>
      </div>

      {/* Competition Range Overview */}
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">
              Competition Range Overview
            </CardTitle>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <div className="p-4 font-semibold text-sm sm:text-base">Role</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Competition Range</div>
              </div>
              {competitionRangeData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0`}
                >
                  <div className="p-4 flex items-center gap-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      item.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {item.role}
                    </span>
                  </div>
                  <div className="p-4 text-sm sm:text-base text-slate-700 font-medium">
                    {item.range}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {competitionRangeData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    item.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.role}
                  </span>
                </div>
                <div className="text-slate-700 font-medium">{item.range}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-100 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> These are core-role only, not all applicants on portals.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Aerospace Engineer City-Wise */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">✈️ Aerospace Engineer</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-blue-900">
            Aerospace Engineer — City-wise Competition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-blue-200">
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="p-4 font-semibold text-sm sm:text-base">City / Hub</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Competition Range</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Simple Meaning</div>
              </div>
              {aerospaceEngineerCityData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'} hover:bg-blue-100/50 transition-colors border-b border-blue-100 last:border-b-0`}
                >
                  <div className="p-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-slate-800">{item.city}</span>
                  </div>
                  <div className="p-4 text-sm sm:text-base text-slate-700 font-semibold">
                    {item.range}
                  </div>
                  <div className="p-4 text-sm text-slate-600">
                    {item.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {aerospaceEngineerCityData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-bold text-blue-900">{item.city}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Competition:</span>
                    <span className="font-bold text-blue-800 text-base">{item.range}</span>
                  </div>
                  <div className="pt-2 border-t border-blue-100">
                    <p className="text-slate-600">{item.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Avionics Engineer City-Wise */}
      <Card className="border-purple-200 bg-purple-50/30">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">🛰️ Avionics Engineer</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-purple-900">
            Avionics Engineer — City-wise Competition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-purple-200">
              <div className="grid grid-cols-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <div className="p-4 font-semibold text-sm sm:text-base">City / Hub</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Competition Range</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Simple Meaning</div>
              </div>
              {avionicsEngineerCityData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50/50'} hover:bg-purple-100/50 transition-colors border-b border-purple-100 last:border-b-0`}
                >
                  <div className="p-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-slate-800">{item.city}</span>
                  </div>
                  <div className="p-4 text-sm sm:text-base text-slate-700 font-semibold">
                    {item.range}
                  </div>
                  <div className="p-4 text-sm text-slate-600">
                    {item.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {avionicsEngineerCityData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <h4 className="font-bold text-purple-900">{item.city}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Competition:</span>
                    <span className="font-bold text-purple-800 text-base">{item.range}</span>
                  </div>
                  <div className="pt-2 border-t border-purple-100">
                    <p className="text-slate-600">{item.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AME City-Wise */}
      <Card className="border-amber-200 bg-amber-50/30">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">🛠️ AME</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-amber-900">
            Aircraft Maintenance Engineer (AME) — City-wise Competition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-amber-200">
              <div className="grid grid-cols-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                <div className="p-4 font-semibold text-sm sm:text-base">City / Hub</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Competition Range</div>
                <div className="p-4 font-semibold text-sm sm:text-base">Simple Meaning</div>
              </div>
              {ameCityData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'} hover:bg-amber-100/50 transition-colors border-b border-amber-100 last:border-b-0`}
                >
                  <div className="p-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="font-medium text-slate-800">{item.city}</span>
                  </div>
                  <div className="p-4 text-sm sm:text-base text-slate-700 font-semibold">
                    {item.range}
                  </div>
                  <div className="p-4 text-sm text-slate-600">
                    {item.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {ameCityData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <h4 className="font-bold text-amber-900">{item.city}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Competition:</span>
                    <span className="font-bold text-amber-800 text-base">{item.range}</span>
                  </div>
                  <div className="pt-2 border-t border-amber-100">
                    <p className="text-slate-600">{item.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Simple Flow Explanation */}
      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-indigo-600" />
            <CardTitle className="text-xl sm:text-2xl font-bold text-indigo-900">
              Simple Flow to Understand It
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-indigo-100">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Even if <strong>100+ people apply online</strong>, most are rejected early due to wrong degree, missing tools, or weak basics.
              Only a small, job-ready group reaches interviews.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-indigo-100">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              The numbers shown (like <strong>10–14</strong>) mean how many people you actually compete with at interview stage — <strong>not total applicants</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Certification Note */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3">
                About Certifications
              </h3>
              <p className="text-green-800 leading-relaxed text-sm sm:text-base">
                <strong>Certifications don't give jobs.</strong> They help you get shortlisted, perform better in interviews, and grow faster early on.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
