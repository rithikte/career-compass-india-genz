import React from 'react';
import { CheckCircle, Clock, Target, Award, AlertTriangle } from 'lucide-react';
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

      {/* Critical Reality Check Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl shadow-xl p-6 sm:p-8 mb-8 border-2 border-red-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100/30 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Critical Reality Check
            </h3>
            <div className="space-y-3 text-base text-slate-800 leading-relaxed">
              <p className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-red-100">
                <span className="text-red-600 font-bold mr-2 text-xl">•</span>
                <span>
                  In B.Tech Mechanical Engineering, you learn only 38–45% basics — not enough for aviation jobs without extra certifications and projects.
                </span>
              </p>
            </div>
          </div>
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
        <div className="mt-16 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What If You Skip Certifications?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world impact analysis: with vs without certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aerospace Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-2">🚀</span>
                Aerospace Engineer
              </h4>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    If you skip certification:
                  </h5>
                  <ul className="text-sm text-red-800 space-y-1.5">
                    <li>• Salary drops ~25–35%</li>
                    <li>• You get only basic design/support jobs</li>
                    <li>• You wait 1–2 years longer for a good role</li>
                    <li>• Competition becomes very high</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-green-900 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    If you do certification (CAD + Simulation + CAE):
                  </h5>
                  <ul className="text-sm text-green-800 space-y-1.5">
                    <li>• Salary jumps +30–50%</li>
                    <li>• You get core design, CFD, FEA roles</li>
                    <li>• You stand out from 70% of applicants</li>
                    <li>• Faster promotions + better companies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg">
                <p className="text-sm font-bold text-center">
                  Skipping certs → basic job.<br />
                  Doing certs → design job + higher salary.
                </p>
              </div>
            </div>

            {/* Avionics Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-2">⚙️</span>
                Avionics Engineer
              </h4>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    If you skip certification:
                  </h5>
                  <ul className="text-sm text-red-800 space-y-1.5">
                    <li>• Salary drops ~30–40%</li>
                    <li>• You get stuck in testing assistant / wiring roles</li>
                    <li>• Very low growth because avionics is skill-heavy</li>
                    <li>• AI tools replace many basic testing tasks</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-green-900 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    If you do certification (Embedded + Testing + Automation):
                  </h5>
                  <ul className="text-sm text-green-800 space-y-1.5">
                    <li>• Salary goes up +40–60%</li>
                    <li>• You move into R&D, embedded system design, advanced testing</li>
                    <li>• You become AI-resistant because you understand automation tools</li>
                    <li>• Better companies + faster job calls</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-lg">
                <p className="text-sm font-bold text-center">
                  Without certs → low-skill testing.<br />
                  With certs → high-skill R&D roles + 2× salary.
                </p>
              </div>
            </div>

            {/* Aircraft Maintenance Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-2">🔧</span>
                Aircraft Maintenance Engineer (AME)
              </h4>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    If you skip mandatory AME certifications:
                  </h5>
                  <ul className="text-sm text-red-800 space-y-1.5">
                    <li>• You cannot work on aircraft</li>
                    <li>• Only ground support / helper roles</li>
                    <li>• Salary becomes ₹15–20k instead of engineering pay</li>
                    <li>• Zero career growth</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h5 className="text-sm font-bold text-green-900 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    If you complete DGCA/Type-rated certifications:
                  </h5>
                  <ul className="text-sm text-green-800 space-y-1.5">
                    <li>• Salary becomes ₹40k–₹80k starting</li>
                    <li>• You get licensed AME positions</li>
                    <li>• Airlines prefer you immediately</li>
                    <li>• Growth becomes stable because MRO demand is rising</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-lg">
                <p className="text-sm font-bold text-center">
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
              <h4 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Role Fitment Exam
              </h4>
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
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Career Longevity Score (2025-2040)
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            Understanding long-term career safety and reskilling requirements
          </p>
        </div>

        {/* Aerospace Engineer Longevity (implied from summary table) */}
        <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            ✈️ Aerospace Engineer – Career Longevity Score
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Score (1–10)</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-green-600">4/10 (Low-Medium)</td>
                  <td className="py-3 px-4 text-gray-700">AI assists but cannot replace creative design and safety judgment.</td>
                </tr>
                <tr className="border-b border-blue-200 hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Reskilling Need</td>
                  <td className="py-3 px-4 font-bold text-orange-600">7/10 (High)</td>
                  <td className="py-3 px-4 text-gray-700">Need to learn AI tools, simulation software, and space systems.</td>
                </tr>
                <tr className="hover:bg-blue-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Longevity (2040 outlook)</td>
                  <td className="py-3 px-4 font-bold text-green-600">9/10 (Very Strong)</td>
                  <td className="py-3 px-4 text-gray-700">Space, defence, and commercial aviation projects ensure long-term demand.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-600 text-white rounded-lg p-4 mt-4">
            <p className="font-bold text-base sm:text-lg">
              💡 Summary: Engineers who blend core aerospace with AI, space tech, or advanced materials will thrive for decades.
            </p>
          </div>
        </div>

        {/* Avionics Engineer Longevity */}
        <div className="mb-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            ⚙️ Avionics Engineer – Career Longevity Score
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-orange-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Score (1–10)</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-orange-600">6/10 (Medium-High)</td>
                  <td className="py-3 px-4 text-gray-700">Routine testing will be automated by AI tools and robots.</td>
                </tr>
                <tr className="border-b border-orange-200 hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Reskilling Need</td>
                  <td className="py-3 px-4 font-bold text-red-600">8/10 (High)</td>
                  <td className="py-3 px-4 text-gray-700">Must upgrade into embedded AI, automation, and cybersecurity for avionics.</td>
                </tr>
                <tr className="hover:bg-orange-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Longevity (2040 outlook)</td>
                  <td className="py-3 px-4 font-bold text-green-600">8/10 (Strong)</td>
                  <td className="py-3 px-4 text-gray-700">Still solid because aircraft electronics will keep advancing.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-orange-600 text-white rounded-lg p-4 mt-4">
            <p className="font-bold text-base sm:text-lg">
              💡 Summary: More automation threat, but skilled engineers who learn AI, ML, or drone electronics will stay in high demand.
            </p>
          </div>
        </div>

        {/* AME Longevity */}
        <div className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            🔧 Aircraft Maintenance Engineer (AME) – Career Longevity Score
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-green-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Score (1–10)</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Simple Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Automation Risk</td>
                  <td className="py-3 px-4 font-bold text-green-600">3/10 (Low)</td>
                  <td className="py-3 px-4 text-gray-700">Aircraft still need licensed humans for inspection & safety checks.</td>
                </tr>
                <tr className="border-b border-green-200 hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Reskilling Need</td>
                  <td className="py-3 px-4 font-bold text-yellow-600">6/10 (Moderate)</td>
                  <td className="py-3 px-4 text-gray-700">Learn predictive-maintenance software & electronic logbook systems.</td>
                </tr>
                <tr className="hover:bg-green-100/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Longevity (2040 outlook)</td>
                  <td className="py-3 px-4 font-bold text-green-600">9/10 (Very Strong)</td>
                  <td className="py-3 px-4 text-gray-700">Global MRO demand rising; job can't be replaced by AI.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg p-4 mt-4">
            <p className="font-bold text-base sm:text-lg">
              💡 Summary: One of the most secure careers — manual expertise + legal certification make it future-proof.
            </p>
          </div>
        </div>

        {/* Quick Platform Summary */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200">
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 text-center">
            🧭 Quick Platform Summary
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-100">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Job Role</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">Automation Risk</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">Reskilling Need</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">Longevity (2040)</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">Overall Career Safety</th>
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
          
          <div className="bg-indigo-600 text-white rounded-lg p-5 mt-4">
            <h5 className="font-bold text-lg sm:text-xl mb-2">📝 Simple takeaway for parents:</h5>
            <p className="text-base sm:text-lg leading-relaxed">
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
    </div>;
};