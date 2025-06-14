
import React from 'react';
import { CheckCircle, Clock, Target, Award } from 'lucide-react';

const certificationPaths = [
  {
    role: 'Aerospace Engineer',
    totalDuration: '10 months',
    finalGap: '0-3%',
    certifications: [
      { level: 'Foundation', name: 'Aerospace Basics (NPTEL/IIT)', duration: '1.5 months', readiness: 55 },
      { level: 'Specialization', name: 'CATIA / SolidWorks Aerospace Modules', duration: '2 months', readiness: 75 },
      { level: 'Advanced', name: 'Propulsion & Aerodynamics (Coursera/IIT-M)', duration: '2.5 months', readiness: 90 },
      { level: 'Expert', name: 'Systems Design (Simulink/Ansys)', duration: '3 months', readiness: 100 },
      { level: 'AI Cert.', name: 'AI for CFD & Material Simulation', duration: '1 month', readiness: 100, isAI: true }
    ]
  },
  {
    role: 'Drone/UAV Engineer',
    totalDuration: '10 months',
    finalGap: '0-2%',
    certifications: [
      { level: 'Foundation', name: 'Drone Assembly + Basics', duration: '1.5 months', readiness: 60 },
      { level: 'Specialization', name: 'PX4 / Ardupilot Programming', duration: '2 months', readiness: 78 },
      { level: 'Advanced', name: 'DGCA + BVLOS Training', duration: '2.5 months', readiness: 92 },
      { level: 'Expert', name: 'Swarm UAVs + Navigation Systems', duration: '3 months', readiness: 100 },
      { level: 'AI Cert.', name: 'AI for Object Detection in UAVs', duration: '1 month', readiness: 100, isAI: true }
    ]
  },
  {
    role: 'Data Analyst (Aviation)',
    totalDuration: '10 months',
    finalGap: '0-2%',
    certifications: [
      { level: 'Foundation', name: 'Excel + SQL for Aviation', duration: '1.5 months', readiness: 60 },
      { level: 'Specialization', name: 'Python + Tableau + Dashboards', duration: '2 months', readiness: 78 },
      { level: 'Advanced', name: 'ML Forecasting (Pandas + Scikit-Learn)', duration: '2.5 months', readiness: 90 },
      { level: 'Expert', name: 'GenAI for Airline Ops', duration: '3 months', readiness: 100 },
      { level: 'AI Cert.', name: 'Deep Learning for Aviation Insights', duration: '1 month', readiness: 100, isAI: true }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Foundation': return 'bg-blue-100 text-blue-800';
    case 'Specialization': return 'bg-green-100 text-green-800';
    case 'Advanced': return 'bg-orange-100 text-orange-800';
    case 'Expert': return 'bg-purple-100 text-purple-800';
    case 'AI Cert.': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const CertificationStack = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Certification Stack Roadmap
        </h2>
        <p className="text-xl text-gray-600">
          Your path from 0% to 100% job readiness
        </p>
      </div>

      {certificationPaths.map((path, pathIndex) => (
        <div key={path.role} className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{path.role}</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Total Duration: {path.totalDuration}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Final Gap: {path.finalGap}</span>
                </div>
              </div>
            </div>
            <Award className="w-12 h-12 text-yellow-500" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>
            
            <div className="flex justify-between items-start">
              {path.certifications.map((cert, certIndex) => (
                <div key={certIndex} className="flex flex-col items-center relative">
                  {/* Timeline dot */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                    cert.isAI ? 'bg-red-600' : 'bg-blue-600'
                  }`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Certification card */}
                  <div className="mt-4 bg-gray-50 rounded-lg p-4 w-48 text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <div className="text-xs text-gray-600 mb-2">{cert.duration}</div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full ${cert.isAI ? 'bg-red-600' : 'bg-blue-600'}`}
                        style={{ width: `${cert.readiness}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-bold text-gray-700">{cert.readiness}% Ready</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-semibold text-gray-900">
                  Final Skill Gap: {path.finalGap}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Total Investment</div>
                <div className="font-bold text-lg text-green-600">{path.totalDuration}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Target className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Certification Success Formula</h3>
          <p className="text-blue-200 text-lg mb-6">
            Foundation → Specialization → Advanced → Expert → AI = 100% Job Ready
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">10 Months</div>
              <div className="text-blue-200">Average Timeline</div>
            </div>
            <div className="bg-purple-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">0-3%</div>
              <div className="text-purple-200">Final Skill Gap</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-indigo-200">Job Readiness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
