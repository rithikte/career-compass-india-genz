
import React from 'react';
import { CheckCircle, Clock, Target, Award } from 'lucide-react';
import SourceBadge from './SourceBadge';

const certificationPaths = [
  {
    role: 'Aerospace Engineer',
    totalDuration: '10 months',
    finalGap: '0-3%',
    certifications: [
      { 
        level: 'Foundation', 
        name: 'Aerospace Engineering Basics (NPTEL/IIT)', 
        duration: '1.5 months', 
        readiness: 55,
        whenToPursue: '🔹 1st–2nd Year (Parallel with degree; helps understand fundamentals)'
      },
      { 
        level: 'Specialization', 
        name: 'CATIA V5 / SolidWorks (Aerospace Modules)', 
        duration: '2 months', 
        readiness: 75,
        whenToPursue: '🔹 2nd–3rd Year (Parallel; ideal for design software mastery)'
      },
      { 
        level: 'Advanced', 
        name: 'Propulsion & Aerodynamics (Coursera/IIT-M)', 
        duration: '2.5 months', 
        readiness: 90,
        whenToPursue: '🔹 3rd–Final Year or just After degree (for strong domain expertise)'
      },
      { 
        level: 'Expert', 
        name: 'Aerospace Systems Design (Simulink/Ansys)', 
        duration: '3 months', 
        readiness: 100,
        whenToPursue: '🔹 After Degree (or Final Semester with internship; simulation-heavy)'
      },
      { 
        level: 'AI Cert.', 
        name: 'AI for CFD & Material Simulation', 
        duration: '1 month', 
        readiness: 100, 
        isAI: true,
        whenToPursue: '🔹 After Degree (Optional but future-proof for AI-based aerospace roles)'
      }
    ]
  },
  {
    role: 'Avionics Engineer',
    totalDuration: '10 months',
    finalGap: '0-2%',
    certifications: [
      { 
        level: 'Foundation', 
        name: 'Intro to Avionics + Digital Circuits', 
        duration: '1.5 months', 
        readiness: 55,
        whenToPursue: '🔹 1st–2nd Year (Parallel with degree; builds core electronics base)'
      },
      { 
        level: 'Specialization', 
        name: 'Embedded C Programming', 
        duration: '2 months', 
        readiness: 72,
        whenToPursue: '🔹 2nd–3rd Year (Parallel; essential for avionics software systems)'
      },
      { 
        level: 'Advanced', 
        name: 'VHDL / FPGA for Avionics Systems', 
        duration: '2.5 months', 
        readiness: 90,
        whenToPursue: '🔹 3rd–Final Year or After Degree (complex but crucial for hardware design)'
      },
      { 
        level: 'Expert', 
        name: 'ARINC Protocols + Avionics Testing', 
        duration: '3 months', 
        readiness: 100,
        whenToPursue: '🔹 After Degree or Final Year Internship Phase (industry-standard tools)'
      },
      { 
        level: 'AI Cert.', 
        name: 'AI for Fault Detection in Avionics Systems', 
        duration: '1 month', 
        readiness: 100, 
        isAI: true,
        whenToPursue: '🔹 After Degree (Optional; helps in predictive maintenance roles)'
      }
    ]
  },
  {
    role: 'Aircraft Maintenance Engineer (AME)',
    totalDuration: '10 months',
    finalGap: '0-2%',
    certifications: [
      { 
        level: 'Foundation', 
        name: 'AME DGCA Module 1 + Safety Basics', 
        duration: '1.5 months', 
        readiness: 60,
        whenToPursue: '🔹 1st–2nd Year (Parallel; builds regulatory & safety knowledge)'
      },
      { 
        level: 'Specialization', 
        name: 'Aircraft Systems & CAMO Training', 
        duration: '2 months', 
        readiness: 75,
        whenToPursue: '🔹 2nd–3rd Year (Parallel or short-term break; key for airworthiness roles)'
      },
      { 
        level: 'Advanced', 
        name: 'MRO Software Tools (Ramco/TRAX)', 
        duration: '2.5 months', 
        readiness: 90,
        whenToPursue: '🔹 Final Year or Post-degree (used in real-world MRO environments)'
      },
      { 
        level: 'Expert', 
        name: 'Predictive Maintenance Techniques', 
        duration: '3 months', 
        readiness: 100,
        whenToPursue: '🔹 After Degree or Internship Phase (needed for high-responsibility roles)'
      },
      { 
        level: 'AI Cert.', 
        name: 'AI for Aircraft Maintenance Forecasting', 
        duration: '1 month', 
        readiness: 100, 
        isAI: true,
        whenToPursue: '🔹 After Degree (Optional; boosts skill for future digital aviation MRO)'
      }
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

const universalCertifications = [
  {
    stage: 'Foundation',
    course: 'AS9100D – Aerospace Quality Management System (QMS)',
    provider: '(TÜV SÜD / BSI / SGS)',
    duration: '1.5 months',
    readiness: 'Builds foundation in aerospace quality & compliance',
    subjectGain: '~20%',
    whenToPursue: '1st Year (Sem 2) – after completing basic Physics/Math/Intro engineering'
  },
  {
    stage: 'Specialization',
    course: 'ICAO Safety Management System (SMS) + Human Factors',
    provider: '(ICAO / IATA / CAAi)',
    duration: '2 months',
    readiness: 'Adds safety-first mindset & human factor awareness',
    subjectGain: '~20%',
    whenToPursue: '2nd Year (Sem 3) – alongside early core aviation/electronics subjects'
  },
  {
    stage: 'Advanced',
    course: 'Airworthiness & Certification Awareness (EASA Part-21 / DOA-POA Basics)',
    provider: '(EASA / Sofema / CAAi)',
    duration: '2.5 months',
    readiness: 'Provides regulatory knowledge across design, avionics & maintenance',
    subjectGain: '~15%',
    whenToPursue: '2nd Year (Sem 4 end / summer break) – before entering 3rd year specialization'
  }
];

export const CertificationStack = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Certification Stack Roadmap
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Your path from 0% to 100% job readiness
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://nptel.ac.in/courses" label="NPTEL Courses" />
          <SourceBadge href="https://www.coursera.org/iit" label="IIT Coursera" />
          <SourceBadge href="https://dgca.gov.in/training" label="DGCA Training" />
        </div>
      </div>

      {/* Universal Certifications Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Universal Certifications
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            For Aerospace, Avionics, Aircraft Maintenance Engineering
          </p>
        </div>

        {/* Universal Certifications Table - Mobile */}
        <div className="block lg:hidden space-y-4 mb-8">
          {universalCertifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(cert.stage)}`}>
                  {cert.stage}
                </span>
                <span className="text-sm font-bold text-blue-600">{cert.duration}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{cert.course}</h4>
              <p className="text-xs text-gray-500 mb-3">{cert.provider}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Readiness:</span>
                  <span className="text-gray-900">{cert.readiness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Subject Gain:</span>
                  <span className="text-green-600 font-bold">{cert.subjectGain}</span>
                </div>
                <div className="pt-2 border-t">
                  <span className="text-gray-600 font-medium block mb-1">When to Pursue:</span>
                  <span className="text-gray-700">{cert.whenToPursue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Universal Certifications Table - Desktop */}
        <div className="hidden lg:block overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Stage</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Course / Focus</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Readiness After Completion</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">Subject Gain %</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-gray-900 border-b-2 border-gray-300">When to Pursue</th>
              </tr>
            </thead>
            <tbody>
              {universalCertifications.map((cert, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(cert.stage)}`}>
                      {cert.stage}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <div className="text-sm font-bold text-gray-900 mb-1">{cert.course}</div>
                      <div className="text-xs text-gray-500">{cert.provider}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-bold text-blue-600">{cert.duration}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-700">{cert.readiness}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-bold text-green-600">{cert.subjectGain}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs text-gray-700 leading-relaxed">{cert.whenToPursue}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Fitment Exam Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8 border-2 border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Role Fitment Exam
              </h4>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  ✅ After you smash the 3 Universal Certs, you'll take a <span className="font-bold">Role Fitment Exam</span>.
                </p>
                <p>
                  ✅ This test isn't about marks — it's about showing you where you truly shine: <span className="font-bold">Aerospace, Avionics, or AME</span>.
                </p>
                <p>
                  ✅ No more guesswork, no more pressure — just a career path that matches your real skills + strengths.
                </p>
                <p>
                  ✅ And once you know your fit, you'll dive into <span className="font-bold">3 Job-Role Specific Certifications</span> — making you <span className="font-bold text-green-600">100% job-ready</span> before college placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Specific Certifications Section */}
      <div className="text-center mb-8 px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Job-Role Specific Certifications
        </h3>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          After identifying your ideal role, complete these specialized certifications
        </p>
      </div>

      {certificationPaths.map((path, pathIndex) => (
        <div key={path.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{path.role}</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <span className="text-sm sm:text-base text-gray-600">Total Duration: {path.totalDuration}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <span className="text-sm sm:text-base text-gray-600">Final Gap: {path.finalGap}</span>
                </div>
              </div>
            </div>
            <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Mobile/Small Screen: Vertical Layout */}
            <div className="block md:hidden space-y-6">
              {path.certifications.map((cert, certIndex) => (
                <div key={certIndex} className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    cert.isAI ? 'bg-red-600' : 'bg-blue-600'
                  }`}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <div className="text-xs text-gray-600 mb-2">{cert.duration}</div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full ${cert.isAI ? 'bg-red-600' : 'bg-blue-600'}`}
                        style={{ width: `${cert.readiness}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-bold text-gray-700 mb-3">{cert.readiness}% Ready</div>
                    
                    <div className="border-t pt-2 mt-2">
                      <div className="text-xs font-semibold text-gray-600 mb-1">When to Pursue:</div>
                      <div className="text-xs text-gray-700 leading-tight">{cert.whenToPursue}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Timeline */}
            <div className="hidden md:block">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>
              
              <div className="flex justify-between items-start">
                {path.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="flex flex-col items-center relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      cert.isAI ? 'bg-red-600' : 'bg-blue-600'
                    }`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="mt-4 bg-gray-50 rounded-lg p-3 w-40 lg:w-48 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                      <h4 className="text-xs lg:text-sm font-bold text-gray-900 mb-2 leading-tight">{cert.name}</h4>
                      <div className="text-xs text-gray-600 mb-2">{cert.duration}</div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full ${cert.isAI ? 'bg-red-600' : 'bg-blue-600'}`}
                          style={{ width: `${cert.readiness}%` }}
                        ></div>
                      </div>
                      <div className="text-xs font-bold text-gray-700 mb-3">{cert.readiness}% Ready</div>
                      
                      <div className="border-t pt-2 mt-2">
                        <div className="text-xs font-semibold text-gray-600 mb-1">When to Pursue:</div>
                        <div className="text-xs text-gray-700 leading-tight">{cert.whenToPursue}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
