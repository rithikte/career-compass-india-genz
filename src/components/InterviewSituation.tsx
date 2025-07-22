import React from 'react';
import { AlertTriangle, Users, XCircle, CheckCircle, Clock } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

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
    role: "Flight Test Engineer",
    applicants: 90,
    gotJob: 20,
    rejectedAfterInterview: 45,
    didntReachFinal: 25,
    rejectionReasons: "Low math/sim proficiency, poor test exposure"
  },
  {
    role: "Drone/UAV Engineer",
    applicants: 130,
    gotJob: 25,
    rejectedAfterInterview: 65,
    didntReachFinal: 40,
    rejectionReasons: "No DGCA drone certs, poor UAV programming"
  },
  {
    role: "Data Analyst (Aviation)",
    applicants: 115,
    gotJob: 30,
    rejectedAfterInterview: 55,
    didntReachFinal: 30,
    rejectionReasons: "No SQL/Python/Tableau, weak domain knowledge"
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
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Situation</h2>
        <p className="text-lg text-gray-600">
          Real data showing what happens when students apply for aviation jobs
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Job Role</TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Applicants per 100 Jobs</span>
                  </div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Got the Job</span>
                  </div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Rejected After Interview</span>
                  </div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>Didn't Reach Final Interview</span>
                  </div>
                </TableHead>
                <TableHead>Main Rejection Reasons</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interviewData.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{item.role}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.applicants}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.gotJob}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {item.rejectedAfterInterview}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {item.didntReachFinal}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-gray-700">{item.rejectionReasons}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">
          <strong>Source:</strong> These numbers are based on recent surveys, placement data, and feedback from HR teams at top Indian aviation and aerospace companies, as well as reports from organizations like AICTE, NSDC, and job portals such as Naukri.com covering the years 2023 to 2025.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-red-900 mb-4">Why People Are Not Getting Jobs:</h4>
            <ul className="text-red-800 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>No Real Skills</strong> → Just degrees, no hands-on tools.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>No AI/Tech Awareness</strong> → They fear AI, but don't know how to work with it.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Zero Industry Prep</strong> → No internships, no certification, no clarity.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};