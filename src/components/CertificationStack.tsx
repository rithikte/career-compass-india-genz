import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import SourceBadge from './SourceBadge';
const certificationPaths = [{
  role: 'Aerospace Engineer',
  totalDuration: '10 months',
  finalGap: '0-3%',
  certifications: [{
    level: 'Foundation',
    name: 'Aerospace Engineering Basics (NPTEL/IIT)',
    duration: '1.5 months',
    readiness: 55,
    whenToPursue: '🔹 1st–2nd Year (Parallel with degree; helps understand fundamentals)'
  }, {
    level: 'Specialization',
    name: 'CATIA V5 / SolidWorks (Aerospace Modules)',
    duration: '2 months',
    readiness: 75,
    whenToPursue: '🔹 2nd–3rd Year (Parallel; ideal for design software mastery)'
  }, {
    level: 'Advanced',
    name: 'Propulsion & Aerodynamics (Coursera/IIT-M)',
    duration: '2.5 months',
    readiness: 90,
    whenToPursue: '🔹 3rd–Final Year or just After degree (for strong domain expertise)'
  }, {
    level: 'Expert',
    name: 'Aerospace Systems Design (Simulink/Ansys)',
    duration: '3 months',
    readiness: 100,
    whenToPursue: '🔹 After Degree (or Final Semester with internship; simulation-heavy)'
  }, {
    level: 'AI Cert.',
    name: 'AI for CFD & Material Simulation',
    duration: '1 month',
    readiness: 100,
    isAI: true,
    whenToPursue: '🔹 After Degree (Optional but future-proof for AI-based aerospace roles)'
  }]
}, {
  role: 'Avionics Engineer',
  totalDuration: '10 months',
  finalGap: '0-2%',
  certifications: [{
    level: 'Foundation',
    name: 'Intro to Avionics + Digital Circuits',
    duration: '1.5 months',
    readiness: 55,
    whenToPursue: '🔹 1st–2nd Year (Parallel with degree; builds core electronics base)'
  }, {
    level: 'Specialization',
    name: 'Embedded C Programming',
    duration: '2 months',
    readiness: 72,
    whenToPursue: '🔹 2nd–3rd Year (Parallel; essential for avionics software systems)'
  }, {
    level: 'Advanced',
    name: 'VHDL / FPGA for Avionics Systems',
    duration: '2.5 months',
    readiness: 90,
    whenToPursue: '🔹 3rd–Final Year or After Degree (complex but crucial for hardware design)'
  }, {
    level: 'Expert',
    name: 'ARINC Protocols + Avionics Testing',
    duration: '3 months',
    readiness: 100,
    whenToPursue: '🔹 After Degree or Final Year Internship Phase (industry-standard tools)'
  }, {
    level: 'AI Cert.',
    name: 'AI for Fault Detection in Avionics Systems',
    duration: '1 month',
    readiness: 100,
    isAI: true,
    whenToPursue: '🔹 After Degree (Optional; helps in predictive maintenance roles)'
  }]
}, {
  role: 'Aircraft Maintenance Engineer (AME)',
  totalDuration: '10 months',
  finalGap: '0-2%',
  certifications: [{
    level: 'Foundation',
    name: 'AME DGCA Module 1 + Safety Basics',
    duration: '1.5 months',
    readiness: 60,
    whenToPursue: '🔹 1st–2nd Year (Parallel; builds regulatory & safety knowledge)'
  }, {
    level: 'Specialization',
    name: 'Aircraft Systems & CAMO Training',
    duration: '2 months',
    readiness: 75,
    whenToPursue: '🔹 2nd–3rd Year (Parallel or short-term break; key for airworthiness roles)'
  }, {
    level: 'Advanced',
    name: 'MRO Software Tools (Ramco/TRAX)',
    duration: '2.5 months',
    readiness: 90,
    whenToPursue: '🔹 Final Year or Post-degree (used in real-world MRO environments)'
  }, {
    level: 'Expert',
    name: 'Predictive Maintenance Techniques',
    duration: '3 months',
    readiness: 100,
    whenToPursue: '🔹 After Degree or Internship Phase (needed for high-responsibility roles)'
  }, {
    level: 'AI Cert.',
    name: 'AI for Aircraft Maintenance Forecasting',
    duration: '1 month',
    readiness: 100,
    isAI: true,
    whenToPursue: '🔹 After Degree (Optional; boosts skill for future digital aviation MRO)'
  }]
}];
const getLevelColor = (level: string) => {
  switch (level) {
    case 'Foundation':
      return 'bg-blue-100 text-blue-800';
    case 'Specialization':
      return 'bg-green-100 text-green-800';
    case 'Advanced':
      return 'bg-orange-100 text-orange-800';
    case 'Expert':
      return 'bg-purple-100 text-purple-800';
    case 'AI Cert.':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
const universalCertifications = [{
  stage: 'Foundation',
  course: 'AS9100D – Aerospace Quality Management System (QMS)',
  provider: '(TÜV SÜD / BSI / SGS)',
  duration: '1.5 months',
  readiness: 'Builds foundation in aerospace quality & compliance',
  subjectGain: '~20%',
  whenToPursue: '1st Year (Sem 2) – after completing basic Physics/Math/Intro engineering'
}, {
  stage: 'Specialization',
  course: 'ICAO Safety Management System (SMS) + Human Factors',
  provider: '(ICAO / IATA / CAAi)',
  duration: '2 months',
  readiness: 'Adds safety-first mindset & human factor awareness',
  subjectGain: '~20%',
  whenToPursue: '2nd Year (Sem 3) – alongside early core aviation/electronics subjects'
}, {
  stage: 'Advanced',
  course: 'Airworthiness & Certification Awareness (EASA Part-21 / DOA-POA Basics)',
  provider: '(EASA / Sofema / CAAi)',
  duration: '2.5 months',
  readiness: 'Provides regulatory knowledge across design, avionics & maintenance',
  subjectGain: '~15%',
  whenToPursue: '2nd Year (Sem 4 end / summer break) – before entering 3rd year specialization'
}];
export const CertificationStack = () => {
  return <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Certification Stack Roadmap
        </h2>
        <p className="text-xl text-gray-600">
          Your path from 0% to 100% job readiness
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://nptel.ac.in/courses" label="NPTEL Courses" />
          <SourceBadge href="https://www.coursera.org/iit" label="IIT Coursera" />
          <SourceBadge href="https://dgca.gov.in/training" label="DGCA Training" />
        </div>
      </div>

      {/* Reality Insight Callout */}
      <div className="relative mb-8">
        <div className="group relative">
          {/* Gradient Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
          
          {/* Main Content */}
          <div className="relative bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Top Accent Bar */}
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
            
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-5">
                {/* Icon Container */}
                
                
                {/* Text Content */}
                <div className="flex-1 space-y-2 sm:space-y-3">
                  
                  
                  <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium leading-relaxed">
                    In B.Tech Mechanical Engineering, you learn only <span className="font-bold text-amber-600">38–45% basics</span> — not enough for aviation jobs without extra certifications and projects.
                  </p>
                  
                  {/* Bottom Stats */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-slate-200">
                      <span className="text-slate-500 text-[10px] sm:text-xs">Coverage</span>
                      <span className="font-bold text-amber-600 text-xs sm:text-sm">38–45%</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-slate-200">
                      <span className="text-slate-500 text-[10px] sm:text-xs">Gap</span>
                      <span className="font-bold text-red-600 text-xs sm:text-sm">55–62%</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-slate-200">
                      <span className="text-slate-500 text-[10px] sm:text-xs">Solution</span>
                      <span className="font-bold text-emerald-600 text-xs sm:text-sm">Certifications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Universal Certifications Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mb-8">
        <div className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Universal Certifications
            </h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            For Aerospace, Avionics, Aircraft Maintenance Engineering
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows the minimum certifications needed to become job-ready, so students don't rely on degree alone.
              </span>
            </div>
          </div>
        </div>

        {/* Universal Certifications Table - Mobile */}
        <div className="block lg:hidden space-y-4 mb-8">
          {universalCertifications.map((cert, index) => <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
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
            </div>)}
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
              {universalCertifications.map((cert, index) => <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
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
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* What If You Skip Certifications Section */}
        <div className="mt-12 sm:mt-16 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              What If You Skip Certifications?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world impact analysis: with vs without certifications
            </p>
            
            {/* Why this matters */}
            <div className="flex items-center justify-center mt-3">
              <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
                <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                  <span className="font-semibold">Why this matters:</span> Clearly shows the salary loss, role downgrade, and delays students face if they avoid certifications.
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {/* Aerospace Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                
                Aerospace Engineer
              </h4>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-red-900 mb-2 flex items-center">
                    
                    If you skip certification:
                  </h5>
                  <ul className="text-xs sm:text-sm text-red-800 space-y-1 sm:space-y-1.5">
                    <li>• Salary drops ~25–35%</li>
                    <li>• You get only basic design/support jobs</li>
                    <li>• You wait 1–2 years longer for a good role</li>
                    <li>• Competition becomes very high</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-green-900 mb-2 flex items-center">
                    
                    If you do certification (CAD + Simulation + CAE):
                  </h5>
                  <ul className="text-xs sm:text-sm text-green-800 space-y-1 sm:space-y-1.5">
                    <li>• Salary jumps +30–50%</li>
                    <li>• You get core design, CFD, FEA roles</li>
                    <li>• You stand out from 70% of applicants</li>
                    <li>• Faster promotions + better companies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm font-bold text-center leading-relaxed">
                  Skipping certs → basic job.<br />
                  Doing certs → design job + higher salary.
                </p>
              </div>
            </div>

            {/* Avionics Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                <span className="mr-2">
              </span>
                Avionics Engineer
              </h4>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-red-900 mb-2 flex items-center">
                    
                    If you skip certification:
                  </h5>
                  <ul className="text-xs sm:text-sm text-red-800 space-y-1 sm:space-y-1.5">
                    <li>• Salary drops 20–30%</li>
                    <li>• Only junior testing/support roles</li>
                    <li>• Cannot touch avionics systems</li>
                    <li>• Very limited career growth</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-green-900 mb-2 flex items-center">
                    
                    If you do certification (FPGA + Embedded C + ARINC):
                  </h5>
                  <ul className="text-xs sm:text-sm text-green-800 space-y-1 sm:space-y-1.5">
                    <li>• Salary rises +35–55%</li>
                    <li>• You design & test avionics hardware</li>
                    <li>• You become a system specialist</li>
                    <li>• Defence and aviation firms target you</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm font-bold text-center leading-relaxed">
                  Skipping certs → junior support.<br />
                  Doing certs → avionics system engineer + growth.
                </p>
              </div>
            </div>

            {/* Aircraft Maintenance Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                <span className="mr-2">
              </span>
                Aircraft Maintenance Engineer (AME)
              </h4>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-red-900 mb-2 flex items-center">
                    
                    If you skip mandatory AME certifications:
                  </h5>
                  <ul className="text-xs sm:text-sm text-red-800 space-y-1 sm:space-y-1.5">
                    <li>• You cannot work on aircraft</li>
                    <li>• Only ground support / helper roles</li>
                    <li>• Salary becomes ₹15–20k instead of engineering pay</li>
                    <li>• Zero career growth</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded">
                  <h5 className="text-xs sm:text-sm font-bold text-green-900 mb-2 flex items-center">
                    
                    If you complete DGCA/Type-rated certifications:
                  </h5>
                  <ul className="text-xs sm:text-sm text-green-800 space-y-1 sm:space-y-1.5">
                    <li>• Salary becomes ₹40k–₹80k starting</li>
                    <li>• You get licensed AME positions</li>
                    <li>• Airlines prefer you immediately</li>
                    <li>• Growth becomes stable because MRO demand is rising</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm font-bold text-center leading-relaxed">
                  Without certs → you don't enter aviation.<br />
                  With certs → full AME engineer + 2–3× salary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role Fitment Exam Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-purple-700 rounded-2xl shadow-2xl p-8 sm:p-10 border border-blue-400/20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative flex items-start space-x-6">
            <div className="flex-shrink-0">
              
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-bold text-blue-300 mb-4 backdrop-blur-sm">
                NEXT CRITICAL STEP
              </div>
              <h4 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Role Fitment Exam
              </h4>
              
              {/* Why this matters */}
              <div className="flex items-center justify-start mb-6">
                <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
                  <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                    <span className="font-semibold">Why this matters:</span> Helps students identify which role suits them best before wasting time on the wrong career path.
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                <p className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  Finish your 3 Universal Certs, then take the <span className="font-bold text-white">Role Fitment Test</span> — it shows whether you fit best in <span className="font-bold text-blue-300">Aerospace, Avionics, or AME</span>.
                </p>
                <p className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  This test isn't about marks — it's about showing you where you <span className="font-bold text-white">truly shine</span>.
                </p>
                <p className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
                  Next, complete the Fit job-role certifications and be <span className="font-bold text-green-300 text-xl">100% job-ready</span> before placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Career Longevity Score Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Career Longevity Score (2025-2040)
            </h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Understanding long-term career safety and reskilling requirements
          </p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students judge how long the career will stay safe and valuable in the future.
              </span>
            </div>
          </div>
        </div>

        {/* Aerospace Engineer Longevity (implied from summary table) */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            Aerospace Engineer    
          </h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-3 sm:mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-300">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Factor</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Score (1–10)</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Automation Risk</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">4/10 (Low-Medium)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">AI assists but cannot replace creative design and safety judgment.</td>
                </tr>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Reskilling Need</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-orange-600 text-xs sm:text-sm whitespace-nowrap">7/10 (High)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Need to learn AI tools, simulation software, and space systems.</td>
                </tr>
                <tr className="hover:bg-blue-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">Longevity (2040 outlook)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">9/10 (Very Strong)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Space, defence, and commercial aviation projects ensure long-term demand.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-3">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Automation Risk</span>
                <span className="font-bold text-green-600 text-sm">4/10 (Low-Medium)</span>
              </div>
              <p className="text-gray-700 text-xs">AI assists but cannot replace creative design and safety judgment.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Reskilling Need</span>
                <span className="font-bold text-orange-600 text-sm">7/10 (High)</span>
              </div>
              <p className="text-gray-700 text-xs">Need to learn AI tools, simulation software, and space systems.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Longevity (2040)</span>
                <span className="font-bold text-green-600 text-sm">9/10 (Very Strong)</span>
              </div>
              <p className="text-gray-700 text-xs">Space, defence, and commercial aviation projects ensure long-term demand.</p>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
              Summary: Engineers who blend core aerospace with AI, space tech, or advanced materials will thrive for decades.
            </p>
          </div>
        </div>

        {/* Avionics Engineer Longevity */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            Avionics Engineer    
          </h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-3 sm:mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-orange-300">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Factor</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Score (1–10)</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Automation Risk</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">3/10 (Low)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Hardware design + safety-critical systems are too complex for AI alone.</td>
                </tr>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Reskilling Need</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-orange-600 text-xs sm:text-sm whitespace-nowrap">6/10 (Medium-High)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Must learn AI-based fault detection, IoT integration, and next-gen comms.</td>
                </tr>
                <tr className="hover:bg-orange-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">Longevity (2040 outlook)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">9/10 (Very Strong)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Defence, space, and electric aviation expand demand for skilled avionics engineers.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-3">
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Automation Risk</span>
                <span className="font-bold text-green-600 text-sm">3/10 (Low)</span>
              </div>
              <p className="text-gray-700 text-xs">Hardware design + safety-critical systems are too complex for AI alone.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Reskilling Need</span>
                <span className="font-bold text-orange-600 text-sm">6/10 (Medium-High)</span>
              </div>
              <p className="text-gray-700 text-xs">Must learn AI-based fault detection, IoT integration, and next-gen comms.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Longevity (2040)</span>
                <span className="font-bold text-green-600 text-sm">9/10 (Very Strong)</span>
              </div>
              <p className="text-gray-700 text-xs">Defence, space, and electric aviation expand demand for skilled avionics engineers.</p>
            </div>
          </div>
          
          <div className="bg-orange-600 text-white rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
              Summary: Avionics engineers who add AI + embedded systems skills will be irreplaceable.
            </p>
          </div>
        </div>

        {/* AME Longevity */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border-2 border-green-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            Aircraft Maintenance Engineer     
          </h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-3 sm:mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-green-300">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Factor</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Score (1–10)</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Automation Risk</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">3/10 (Low)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Aircraft still need licensed humans for inspection & safety checks.</td>
                </tr>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm">Reskilling Need</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-yellow-600 text-xs sm:text-sm whitespace-nowrap">6/10 (Moderate)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Learn predictive-maintenance software & electronic logbook systems.</td>
                </tr>
                <tr className="hover:bg-green-100/50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">Longevity (2040 outlook)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-bold text-green-600 text-xs sm:text-sm whitespace-nowrap">9/10 (Very Strong)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Global MRO demand rising; job can't be replaced by AI.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-3">
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Automation Risk</span>
                <span className="font-bold text-green-600 text-sm">3/10 (Low)</span>
              </div>
              <p className="text-gray-700 text-xs">Aircraft still need licensed humans for inspection & safety checks.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Reskilling Need</span>
                <span className="font-bold text-yellow-600 text-sm">6/10 (Moderate)</span>
              </div>
              <p className="text-gray-700 text-xs">Learn predictive-maintenance software & electronic logbook systems.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">Longevity (2040)</span>
                <span className="font-bold text-green-600 text-sm">9/10 (Very Strong)</span>
              </div>
              <p className="text-gray-700 text-xs">Global MRO demand rising; job can't be replaced by AI.</p>
            </div>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
            <p className="font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
               Summary: One of the most secure careers — manual expertise + legal certification make it future-proof.
            </p>
          </div>
        </div>

        {/* Quick Platform Summary */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-6 border-2 border-slate-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4 text-center">
            Quick Platform Summary
          </h4>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-100">
                  <th className="text-left py-3 px-4 font-bold text-slate-900 text-sm">Job Role</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900 text-sm">Automation Risk</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900 text-sm">Reskilling Need</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900 text-sm">Longevity (2040)</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900 text-sm">Overall Career Safety</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">Aerospace Engineer</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">4/10</td>
                  <td className="text-center py-3 px-4 font-bold text-orange-600">7/10</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">9/10</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">Very High</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">Avionics Engineer</td>
                  <td className="text-center py-3 px-4 font-bold text-orange-600">6/10</td>
                  <td className="text-center py-3 px-4 font-bold text-red-600">8/10</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">8/10</td>
                  <td className="text-center py-3 px-4 font-bold text-yellow-600">High</td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">AME</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">3/10</td>
                  <td className="text-center py-3 px-4 font-bold text-yellow-600">6/10</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">9/10</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-3 mb-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-3 text-base">Aerospace Engineer</h5>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Automation Risk:</span>
                  <span className="font-bold text-green-600">4/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reskilling Need:</span>
                  <span className="font-bold text-orange-600">7/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Longevity (2040):</span>
                  <span className="font-bold text-green-600">9/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Career Safety:</span>
                  <span className="font-bold text-green-600">Very High</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-3 text-base">Avionics Engineer</h5>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Automation Risk:</span>
                  <span className="font-bold text-orange-600">6/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reskilling Need:</span>
                  <span className="font-bold text-red-600">8/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Longevity (2040):</span>
                  <span className="font-bold text-green-600">8/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Career Safety:</span>
                  <span className="font-bold text-yellow-600">High</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-3 text-base">AME</h5>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Automation Risk:</span>
                  <span className="font-bold text-green-600">3/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reskilling Need:</span>
                  <span className="font-bold text-yellow-600">6/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Longevity (2040):</span>
                  <span className="font-bold text-green-600">9/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Career Safety:</span>
                  <span className="font-bold text-green-600">Very High</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-600 text-white rounded-lg p-4 sm:p-5 mt-4">
            <h5 className="font-bold text-base sm:text-lg lg:text-xl mb-2">Simple takeaway for parents:</h5>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              All three careers are future-safe, but students must keep upgrading their skills every 3–5 years. 
              Aerospace & AME have the longest lifespan, while Avionics needs more AI and electronics upskilling to stay ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Certification Success Formula</h3>
          <p className="text-blue-200 text-lg mb-6">
            Foundation → Specialization → Advanced → Expert → AI = 100% Job Ready
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
            Knowing this early helps students choose the right skills + right role, not just the right degree.
          </p>
        </div>
      </div>
    </div>;
};