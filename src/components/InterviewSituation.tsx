import React from 'react';
import { AlertTriangle, Users, XCircle, CheckCircle, Clock, TrendingDown, Brain, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import SourceBadge from './SourceBadge';

const cityWiseData = [
  {
    city: 'Bengaluru',
    applicants: 130,
    gotJob: 38,
    rejectedAfterInterview: 50,
    didntReachFinal: 42,
    insight: "India's most competitive aerospace job market due to ISRO, HAL, Boeing, Collins, and 150+ private companies."
  },
  {
    city: 'Hyderabad',
    applicants: 110,
    gotJob: 35,
    rejectedAfterInterview: 40,
    didntReachFinal: 35,
    insight: 'Strong MRO, avionics, and defense corridor – heavy competition but good placement chances for skilled candidates.'
  },
  {
    city: 'Pune',
    applicants: 95,
    gotJob: 30,
    rejectedAfterInterview: 33,
    didntReachFinal: 32,
    insight: 'Focus on manufacturing and avionics systems – slightly less competitive but rising rapidly with new OEM investments.'
  }
];

const interviewData = [
  {
    role: "Aircraft Maintenance Eng.",
    applicants: 120,
    gotJob: 45,
    rejectedAfterInterview: 42,
    didntReachFinal: 33,
    rejectionReasons: "No DGCA certs, poor MRO tool skills"
  },
  {
    role: "Aerospace Engineer",
    applicants: 100,
    gotJob: 33,
    rejectedAfterInterview: 33,
    didntReachFinal: 34,
    rejectionReasons: "Lacking CAD/CFD, simulation knowledge"
  },
  {
    role: "Avionics Engineer",
    applicants: 110,
    gotJob: 27,
    rejectedAfterInterview: 44,
    didntReachFinal: 39,
    rejectionReasons: "No embedded/VHDL skills, weak circuit logic"
  }
];

export const InterviewSituation = () => {
  // Transform data for chart visualization
  const chartData = interviewData.map(item => ({
    name: item.role.split(' ')[0], // Shortened name for chart
    success: ((item.gotJob / item.applicants) * 100).toFixed(1),
    rejection: ((item.rejectedAfterInterview / item.applicants) * 100).toFixed(1),
    filtered: ((item.didntReachFinal / item.applicants) * 100).toFixed(1),
  }));

  const getSuccessRate = (gotJob: number, applicants: number) => (gotJob / applicants) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          The Interview Reality Check
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          What actually happens when 100+ students compete for aviation jobs
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.aicte-india.org/feedback/placement-statistics" label="AICTE Placement Data" />
          <SourceBadge href="https://www.naukri.com/company-reviews/aerospace-companies" label="Naukri Reviews" />
          <SourceBadge href="https://www.glassdoor.co.in/Interview/aerospace-engineer-interview-questions" label="Glassdoor Interviews" />
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-900">110</div>
            <div className="text-sm text-blue-700">Avg Applicants per Job</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-900">35</div>
            <div className="text-sm text-green-700">Get the Job</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6 text-center">
            <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-900">40</div>
            <div className="text-sm text-red-700">Rejected After Interview</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-900">35</div>
            <div className="text-sm text-orange-700">Don't Reach Final Round</div>
          </CardContent>
        </Card>
      </div>

      {/* Success Rate Chart */}
      <Card className="p-4 sm:p-6">
        <CardHeader>
          <CardTitle className="text-center text-lg sm:text-xl font-bold text-gray-800">
            Success Rate by Job Role
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 sm:h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 60 }}>
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={0}
                  fontSize={10}
                />
                <YAxis fontSize={10} />
                <Bar dataKey="success" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Individual Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {interviewData.map((item, index) => {
          const successRate = getSuccessRate(item.gotJob, item.applicants);
          const rejectionRate = (item.rejectedAfterInterview / item.applicants) * 100;
          const filteredRate = (item.didntReachFinal / item.applicants) * 100;
          
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.role}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{item.applicants} applicants per 100 jobs</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Success Rate */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Got Job</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      {item.gotJob} ({successRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={successRate} className="h-2" />
                </div>

                {/* Rejection After Interview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">Rejected</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      {item.rejectedAfterInterview} ({rejectionRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={rejectionRate} className="h-2" />
                </div>

                {/* Didn't Reach Final */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium">Filtered Out</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">
                      {item.didntReachFinal} ({filteredRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={filteredRate} className="h-2" />
                </div>

                {/* Rejection Reasons */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-600 mb-1">Main Issues:</div>
                  <div className="text-sm text-gray-800">{item.rejectionReasons}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Source */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Source:</strong> Data compiled from surveys, placement reports, and HR feedback from top Indian aviation and aerospace companies, including reports from AICTE, NSDC, and job portals like Naukri.com (2023-2025).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certification Impact */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mb-8">
        <CardContent className="p-8">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-4">Certified vs Non-Certified Reality</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-800">65%</div>
                <div className="text-green-700">Certified Students Placement Success</div>
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-800">30%</div>
                <div className="text-red-700">Non-Certified Students Success</div>
              </div>
            </div>
            <p className="text-green-800 font-semibold mt-4">
              <strong>Certified students placed faster, even from Tier-2 colleges.</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* City-Wise Aerospace Hiring Section */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            City-Wise Aerospace Hiring (2025)
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Applicants per Job Competition Across India's Top Aerospace Hubs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cityWiseData.map((city, index) => {
            const successRate = ((city.gotJob / city.applicants) * 100);
            const rejectionRate = ((city.rejectedAfterInterview / city.applicants) * 100);
            const filteredRate = ((city.didntReachFinal / city.applicants) * 100);
            
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {city.city}
                    </CardTitle>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-200">
                      <div className="text-sm text-gray-600 font-medium">Total Applicants</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {city.applicants}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {city.insight}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Got Job */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-gray-700">Got the Job</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">
                        {city.gotJob} <span className="text-sm">({successRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                        style={{ width: `${successRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Rejected After Interview */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-semibold text-gray-700">Rejected After Interview</span>
                      </div>
                      <span className="text-lg font-bold text-red-600">
                        {city.rejectedAfterInterview} <span className="text-sm">({rejectionRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                        style={{ width: `${rejectionRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Didn't Reach Final */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="text-sm font-semibold text-gray-700">Filtered Out Early</span>
                      </div>
                      <span className="text-lg font-bold text-orange-600">
                        {city.didntReachFinal} <span className="text-sm">({filteredRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                        style={{ width: `${filteredRate}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Source Information */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-blue-900">
                <strong>Source:</strong> Naukri.com Aerospace Job Trends 2025, TeamLease Employment Outlook Report 2025, and MSDE's Aerospace Skill Gap Report 2024.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Insight Box */}
      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
        <CardContent className="p-6 sm:p-8">
          <h4 className="text-lg sm:text-xl font-bold text-indigo-900 mb-4 text-center">Final Insight</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Bengaluru</h5>
              <p className="text-sm text-gray-700">Most competitive aerospace job market</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Hyderabad</h5>
              <p className="text-sm text-gray-700">Balanced opportunities with the right skills</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Pune</h5>
              <p className="text-sm text-gray-700">Rising chances in fast-growing manufacturing hub</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alert Section */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Why 70% Students Don't Get Jobs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">No Real Skills</h4>
                  <p className="text-red-800 text-sm">Just degrees, no hands-on tools or practical experience</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <Brain className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">No AI/Tech Awareness</h4>
                  <p className="text-red-800 text-sm">They fear AI but don't know how to work with it</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Zero Industry Prep</h4>
                  <p className="text-red-800 text-sm">No internships, certifications, or career clarity</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};