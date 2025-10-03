import React from 'react';
import { MapPin, CheckCircle, XCircle, TrendingUp, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import SourceBadge from './SourceBadge';

const cityData = [
  {
    city: 'Bengaluru',
    avgApplicants: 130,
    getJob: 38,
    getJobPercent: 29,
    rejectedAfterInterview: 50,
    rejectedPercent: 38,
    dontReachFinal: 42,
    dontReachPercent: 33,
    insight: "India's most competitive aerospace job market due to ISRO, HAL, Boeing, Collins, and 150+ private companies."
  },
  {
    city: 'Hyderabad',
    avgApplicants: 110,
    getJob: 35,
    getJobPercent: 32,
    rejectedAfterInterview: 40,
    rejectedPercent: 36,
    dontReachFinal: 35,
    dontReachPercent: 32,
    insight: "Strong MRO, avionics, and defense corridor – heavy competition but good placement chances for skilled candidates."
  },
  {
    city: 'Pune',
    avgApplicants: 95,
    getJob: 30,
    getJobPercent: 32,
    rejectedAfterInterview: 33,
    rejectedPercent: 35,
    dontReachFinal: 32,
    dontReachPercent: 33,
    insight: "Focus on manufacturing and avionics systems – slightly less competitive but rising rapidly with new OEM investments."
  }
];

export const InterviewSituation = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Applicants per Job – City-Wise Aerospace Hiring (2025)
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the competition and your chances in top aerospace cities
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.naukri.com/aerospace-jobs" label="Naukri.com Aerospace Job Trends 2025" />
          <SourceBadge href="https://www.teamlease.com" label="TeamLease Employment Outlook Report 2025" />
          <SourceBadge href="https://msde.gov.in/reports" label="MSDE Aerospace Skill Gap Report 2024" />
        </div>
      </div>

      {/* City Cards - Mobile */}
      <div className="block lg:hidden space-y-4 px-4">
        {cityData.map((city, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-xl font-bold text-slate-900">{city.city}</CardTitle>
                </div>
                <Building2 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Avg. Applicants per Job:</span>{' '}
                <span className="text-lg font-bold text-red-600">{city.avgApplicants}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Get the Job */}
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-900">Get the Job</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    {city.getJob} ({city.getJobPercent}%)
                  </span>
                </div>
              </div>

              {/* Rejected After Interview */}
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-gray-900">Rejected After Interview</span>
                  </div>
                  <span className="text-lg font-bold text-red-600">
                    {city.rejectedAfterInterview} ({city.rejectedPercent}%)
                  </span>
                </div>
              </div>

              {/* Don't Reach Final Round */}
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-semibold text-gray-900">Don't Reach Final Round</span>
                  </div>
                  <span className="text-lg font-bold text-orange-600">
                    {city.dontReachFinal} ({city.dontReachPercent}%)
                  </span>
                </div>
              </div>

              {/* Industry Insight */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-xs font-semibold text-blue-900 mb-2">Industry Insight:</div>
                <div className="text-sm text-blue-800 leading-relaxed">{city.insight}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* City Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">City</th>
                <th className="text-center py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Avg. Applicants per Job</th>
                <th className="text-center py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Get the Job</th>
                <th className="text-center py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Rejected After Interview</th>
                <th className="text-center py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Don't Reach Final Round</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Industry Insight</th>
              </tr>
            </thead>
            <tbody>
              {cityData.map((city, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-900">{city.city}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-bold text-red-600">{city.avgApplicants}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="text-sm font-bold text-green-600">
                      {city.getJob} ({city.getJobPercent}%)
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="text-sm font-bold text-red-600">
                      {city.rejectedAfterInterview} ({city.rejectedPercent}%)
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="text-sm font-bold text-orange-600">
                      {city.dontReachFinal} ({city.dontReachPercent}%)
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs text-gray-700 leading-relaxed">{city.insight}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Insight */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 md:p-10 rounded-lg mx-4">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Final Insight</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <MapPin className="w-8 h-8 mb-3 text-blue-200" />
              <h4 className="text-lg font-bold mb-2">Bengaluru</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                The most competitive aerospace job market
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <CheckCircle className="w-8 h-8 mb-3 text-green-200" />
              <h4 className="text-lg font-bold mb-2">Hyderabad</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Offers balanced opportunities with the right skills
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <TrendingUp className="w-8 h-8 mb-3 text-purple-200" />
              <h4 className="text-lg font-bold mb-2">Pune</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Provides rising chances in a fast-growing manufacturing hub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
