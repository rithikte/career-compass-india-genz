import React from 'react';
import { AlertTriangle, Users, XCircle, CheckCircle, Clock, TrendingDown, Brain } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

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
  },
  {
    role: "Ground Ops / Cabin Crew",
    applicants: 130,
    gotJob: 45,
    rejectedAfterInterview: 30,
    didntReachFinal: 55,
    rejectionReasons: "Weak soft skills, poor English, no DGCA cert"
  },
  {
    role: "Pilot Trainee (CPL track)",
    applicants: 150,
    gotJob: 23,
    rejectedAfterInterview: 88,
    didntReachFinal: 39,
    rejectionReasons: "No CPL, medical disqualifications"
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
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          The Interview Reality Check
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          What actually happens when 100+ students compete for aviation jobs
        </p>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-900">116</div>
            <div className="text-sm text-blue-700">Avg Applicants per Job</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-900">31</div>
            <div className="text-sm text-green-700">Get the Job</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6 text-center">
            <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-900">50</div>
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
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-gray-800">
            Success Rate by Job Role
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={0}
                  fontSize={12}
                />
                <YAxis />
                <Bar dataKey="success" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Individual Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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