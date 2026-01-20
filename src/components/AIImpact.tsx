import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import SourceBadge from './SourceBadge';

export const AIImpact = () => {
  const getExposureColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-amber-600';
      case 'Medium–High': return 'text-orange-600';
      case 'High': return 'text-red-600';
      case 'Very Low': return 'text-green-700';
      default: return 'text-slate-600';
    }
  };

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'Very Safe': return 'text-green-600';
      case 'Safe with Skill Upgrading': return 'text-amber-600';
      case 'Highly Protected': return 'text-green-700';
      default: return 'text-slate-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Impact on Aerospace Jobs</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.mckinsey.com/featured-insights/artificial-intelligence/the-age-of-ai" label="McKinsey AI Report" />
          <SourceBadge href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" label="WEF Jobs Report" />
          <SourceBadge href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-and-workforce-evolution" label="PwC AI Workforce" />
        </div>
      </div>

      {/* AI Exposure Level by Role */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
        <div className="text-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">AI Exposure Level by Role</h3>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">(Estimated task-level impact, not job loss)</p>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Shows how work inside each role may change, so students pick roles that stay relevant.
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-4 font-bold text-slate-900">Job Role</th>
                <th className="text-center py-3 px-4 font-bold text-slate-900">Near Term (Next 5 Years)</th>
                <th className="text-center py-3 px-4 font-bold text-slate-900">Long Term (10+ Years)</th>
                <th className="text-left py-3 px-4 font-bold text-slate-900">What actually changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-800">Aerospace Engineer</td>
                <td className="text-center py-4 px-4 font-bold text-amber-600">Medium</td>
                <td className="text-center py-4 px-4 font-bold text-orange-600">Medium–High</td>
                <td className="py-4 px-4 text-slate-700">More AI tools for simulation, design assistance</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-800">Avionics Engineer</td>
                <td className="text-center py-4 px-4 font-bold text-orange-600">Medium–High</td>
                <td className="text-center py-4 px-4 font-bold text-red-600">High</td>
                <td className="py-4 px-4 text-slate-700">Testing, diagnostics, and embedded workflows get automated</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-800">Aircraft Maintenance Engineer (AME)</td>
                <td className="text-center py-4 px-4 font-bold text-amber-600">Medium</td>
                <td className="text-center py-4 px-4 font-bold text-orange-600">Medium–High</td>
                <td className="py-4 px-4 text-slate-700">Predictive maintenance tools assist inspections</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="font-bold text-slate-900 text-base mb-3">Aerospace Engineer</div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">Near Term (5Y)</div>
                <div className="font-bold text-amber-600">Medium</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Long Term (10+Y)</div>
                <div className="font-bold text-orange-600">Medium–High</div>
              </div>
            </div>
            <div className="text-slate-700 text-sm">More AI tools for simulation, design assistance</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="font-bold text-slate-900 text-base mb-3">Avionics Engineer</div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">Near Term (5Y)</div>
                <div className="font-bold text-orange-600">Medium–High</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Long Term (10+Y)</div>
                <div className="font-bold text-red-600">High</div>
              </div>
            </div>
            <div className="text-slate-700 text-sm">Testing, diagnostics, and embedded workflows get automated</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="font-bold text-slate-900 text-base mb-3">Aircraft Maintenance Engineer (AME)</div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">Near Term (5Y)</div>
                <div className="font-bold text-amber-600">Medium</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Long Term (10+Y)</div>
                <div className="font-bold text-orange-600">Medium–High</div>
              </div>
            </div>
            <div className="text-slate-700 text-sm">Predictive maintenance tools assist inspections</div>
          </div>
        </div>

        {/* How to Read Index */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
          <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-4">How to Read This Index (Very Simple)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold text-green-600 shrink-0">Low →</span>
              <span className="text-slate-700">AI has limited effect on daily work</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-amber-600 shrink-0">Medium →</span>
              <span className="text-slate-700">AI helps with tools and speed, but humans stay in control</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-orange-600 shrink-0">Medium–High →</span>
              <span className="text-slate-700">Many tasks change; skills must be upgraded regularly</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-red-600 shrink-0">High →</span>
              <span className="text-slate-700">Workflows change significantly; continuous learning is required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role-wise AI Impact Details */}
      <div className="space-y-6">
        {/* Aerospace Engineer */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-blue-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Aerospace Engineer</h4>
          <div className="space-y-4">
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
              <span className="font-bold text-blue-600 text-sm sm:text-base">Next 5 years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">AI assists with simulations, documentation, and analysis. Engineers remain essential for design decisions, safety oversight, and certification.</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
              <span className="font-bold text-blue-600 text-sm sm:text-base">10+ years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">Routine and documentation-heavy tasks reduce. Roles shift toward system supervision, AI-model validation, and integration oversight.</p>
            </div>
          </div>
        </div>

        {/* Avionics Engineer */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-orange-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Avionics Engineer</h4>
          <div className="space-y-4">
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <span className="font-bold text-orange-600 text-sm sm:text-base">Next 5 years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">AI supports system checks and flight data analysis. Engineers verify, interpret, and control outputs.</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <span className="font-bold text-orange-600 text-sm sm:text-base">10+ years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">Smarter avionics systems assist in diagnostics and fault isolation. Engineers focus more on system logic, validation, and integration.</p>
            </div>
          </div>
        </div>

        {/* AME */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-green-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Aircraft Maintenance Engineer (AME)</h4>
          <div className="space-y-4">
            <div className="bg-white/70 rounded-lg p-4 border border-green-200">
              <span className="font-bold text-green-600 text-sm sm:text-base">Next 5 years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">Sensors and AI help detect faults earlier. Engineers spend less time on manual checks, more on analysis and planning.</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-green-200">
              <span className="font-bold text-green-600 text-sm sm:text-base">10+ years:</span>
              <p className="text-slate-700 mt-1 text-sm sm:text-base">Automation supports inspections and monitoring. Engineers remain responsible for decision-making, safety, and approvals.</p>
            </div>
          </div>
        </div>

        {/* Important Clarity */}
        <div className="bg-slate-100 rounded-xl p-4 sm:p-6 border border-slate-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">Important clarity</h4>
              <p className="text-slate-700 text-sm sm:text-base">AI changes how work is done, not the need for skilled engineers. Those who upgrade skills remain valuable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Safety Meter */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">Job Safety Meter</h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">Based on regulation, skill dependence, and task nature</p>
          
          {/* What this shows */}
          <div className="mt-4 text-left sm:text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base mb-2">
              <span className="font-semibold">What this shows:</span> This section explains how secure each role is in an AI-driven future, based on how much human judgment, safety responsibility, and regulation the job requires.
            </p>
          </div>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students and parents understand long-term career safety, without exaggeration or fear.
              </span>
            </div>
          </div>
          
          <p className="text-slate-600 text-xs sm:text-sm mt-3 italic">Job safety here means resilience to automation — not guaranteed employment.</p>
        </div>

        {/* Aerospace Engineer Safety */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Aerospace Engineer — Job Safety</h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-blue-200">
                  <td className="py-3 px-4 font-semibold text-slate-800 w-1/3">AI Exposure Level</td>
                  <td className="py-3 px-4 font-bold text-green-600">Low</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">Very High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Overall Safety</td>
                  <td className="py-3 px-4 font-bold text-green-600">Very Safe</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200 text-center">
              <div className="text-xs text-slate-500 mb-1">AI Exposure</div>
              <div className="font-bold text-green-600 text-sm">Low</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Human Role</div>
              <div className="font-bold text-blue-600 text-sm">Very High</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-blue-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Safety</div>
              <div className="font-bold text-green-600 text-sm">Very Safe</div>
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-blue-200 mb-4">
            <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Why:</h5>
            <ul className="space-y-1 text-slate-700 text-sm sm:text-base">
              <li>• AI supports simulations and analysis</li>
              <li>• Humans are still required for design decisions, certification, and safety approval</li>
              <li>• Defence, space, and aerospace programs have long development cycles</li>
            </ul>
          </div>
          
          <div className="bg-blue-600 text-white rounded-lg p-3 sm:p-4">
            <p className="font-bold text-sm sm:text-base">
              <span className="text-blue-200">Parent clarity:</span> Aerospace engineers remain essential because safety and accountability cannot be automated.
            </p>
          </div>
        </div>

        {/* Avionics Engineer Safety */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Avionics Engineer — Job Safety</h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-orange-200">
                  <td className="py-3 px-4 font-semibold text-slate-800 w-1/3">AI Exposure Level</td>
                  <td className="py-3 px-4 font-bold text-amber-600">Medium</td>
                </tr>
                <tr className="border-b border-orange-200">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Overall Safety</td>
                  <td className="py-3 px-4 font-bold text-amber-600">Safe with Skill Upgrading</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200 text-center">
              <div className="text-xs text-slate-500 mb-1">AI Exposure</div>
              <div className="font-bold text-amber-600 text-sm">Medium</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Human Role</div>
              <div className="font-bold text-blue-600 text-sm">High</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-orange-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Safety</div>
              <div className="font-bold text-amber-600 text-xs">Safe w/ Upskill</div>
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-orange-200 mb-4">
            <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Why:</h5>
            <ul className="space-y-1 text-slate-700 text-sm sm:text-base">
              <li>• AI assists testing, monitoring, and diagnostics</li>
              <li>• Humans are needed for system design, troubleshooting, and integration</li>
              <li>• Skills must evolve with embedded systems and automation tools</li>
            </ul>
          </div>
          
          <div className="bg-orange-600 text-white rounded-lg p-3 sm:p-4">
            <p className="font-bold text-sm sm:text-base">
              <span className="text-orange-200">Parent clarity:</span> Avionics is stable, but students must keep updating technical skills.
            </p>
          </div>
        </div>

        {/* AME Safety */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border-2 border-green-200">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Aircraft Maintenance Engineer (AME) — Job Safety</h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-green-200">
                  <td className="py-3 px-4 font-semibold text-slate-800 w-1/3">AI Exposure Level</td>
                  <td className="py-3 px-4 font-bold text-green-700">Very Low</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 px-4 font-semibold text-slate-800">Human Importance</td>
                  <td className="py-3 px-4 font-bold text-blue-600">Extremely High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Overall Safety</td>
                  <td className="py-3 px-4 font-bold text-green-700">Highly Protected</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/70 rounded-lg p-3 border border-green-200 text-center">
              <div className="text-xs text-slate-500 mb-1">AI Exposure</div>
              <div className="font-bold text-green-700 text-sm">Very Low</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-green-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Human Role</div>
              <div className="font-bold text-blue-600 text-xs">Extremely High</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-green-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Safety</div>
              <div className="font-bold text-green-700 text-xs">Highly Protected</div>
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-green-200 mb-4">
            <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Why:</h5>
            <ul className="space-y-1 text-slate-700 text-sm sm:text-base">
              <li>• AI predicts faults, but only licensed humans can inspect and certify aircraft</li>
              <li>• Maintenance is governed by strict aviation laws and safety rules</li>
              <li>• Global demand for licensed AMEs remains strong</li>
            </ul>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg p-3 sm:p-4">
            <p className="font-bold text-sm sm:text-base">
              <span className="text-green-200">Parent clarity:</span> AME roles are legally protected and remain critical for flight safety.
            </p>
          </div>
        </div>

        {/* Platform Summary Table */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-6 border-2 border-slate-200 mb-6">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4 text-center">Platform Summary (Simple)</h4>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Job Role</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">AI Exposure</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-900">Safety Level</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Key Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">Aerospace Engineer</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">Low</td>
                  <td className="text-center py-3 px-4 font-bold text-green-600">Very Safe</td>
                  <td className="py-3 px-4 text-slate-700">Human design judgment & certification</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">Avionics Engineer</td>
                  <td className="text-center py-3 px-4 font-bold text-amber-600">Medium</td>
                  <td className="text-center py-3 px-4 font-bold text-amber-600">Safe with upskilling</td>
                  <td className="py-3 px-4 text-slate-700">Skill-driven system responsibility</td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td className="py-3 px-4 font-semibold text-slate-800">AME</td>
                  <td className="text-center py-3 px-4 font-bold text-green-700">Very Low</td>
                  <td className="text-center py-3 px-4 font-bold text-green-700">Highly Protected</td>
                  <td className="py-3 px-4 text-slate-700">Legal licensing & safety rules</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">Aerospace Engineer</div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div><span className="text-slate-500">AI Exposure:</span> <span className="font-bold text-green-600">Low</span></div>
                <div><span className="text-slate-500">Safety:</span> <span className="font-bold text-green-600">Very Safe</span></div>
              </div>
              <div className="text-slate-700 text-xs">Human design judgment & certification</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">Avionics Engineer</div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div><span className="text-slate-500">AI Exposure:</span> <span className="font-bold text-amber-600">Medium</span></div>
                <div><span className="text-slate-500">Safety:</span> <span className="font-bold text-amber-600">Safe w/ upskill</span></div>
              </div>
              <div className="text-slate-700 text-xs">Skill-driven system responsibility</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-800 text-sm mb-2">AME</div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div><span className="text-slate-500">AI Exposure:</span> <span className="font-bold text-green-700">Very Low</span></div>
                <div><span className="text-slate-500">Safety:</span> <span className="font-bold text-green-700">Highly Protected</span></div>
              </div>
              <div className="text-slate-700 text-xs">Legal licensing & safety rules</div>
            </div>
          </div>
        </div>

        {/* How to Read Meter */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
          <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-4">How to Read This Meter (Very Simple)</h4>
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex items-start gap-2">
              <span className="font-bold text-slate-700 shrink-0">AI Exposure →</span>
              <span className="text-slate-600">How much AI changes daily tasks</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-slate-700 shrink-0">Human Importance →</span>
              <span className="text-slate-600">How necessary humans remain for safety & decisions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-slate-700 shrink-0">Safety Level →</span>
              <span className="text-slate-600">Long-term career resilience, not job guarantees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-line Truth */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Bottom-line Truth
          </h3>
          <p className="text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Knowing AI impact early helps students adapt, upskill, and stay employable, instead of being replaced.
          </p>
        </div>
      </div>
    </div>
  );
};