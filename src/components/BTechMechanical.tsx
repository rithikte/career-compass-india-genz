import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Brain, Cog, Calculator, Wrench } from 'lucide-react';

export const BTechMechanical = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">B.Tech Mechanical</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-primary">Core Topic: Waves & Oscillations</h2>
          <h3 className="text-xl text-secondary">Aerospace & Aviation Industry</h3>
        </div>
      </div>

      {/* What's This Degree About */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What's This Degree Really About?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Waves & Oscillations are not just a school chapter — they are the foundation of Aerospace Engineering.
          </p>
          <p className="text-gray-700 font-medium">They are used for:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Keeping planes stable during flight
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Reducing noise and vibrations in engines
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Testing how aircraft and drones handle motion and shock
            </li>
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-6">
            <p className="font-medium text-gray-900">But let's be clear:</p>
            <div className="space-y-1 mt-2">
              <p className="text-gray-700">👉 Liking the topic is not enough.</p>
              <p className="text-gray-700">👉 This degree doesn't accept "time-pass" students.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mindset Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-gray-900">The Mindset You MUST Have</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">What's Needed</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Be Patient</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  You'll repeat tests and projects. Results take time. No shortcuts here.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Think Clearly</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  You'll face hard problems. If you can't break them down step by step, you'll get stuck.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Learn Tools</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Using design and testing software is not optional — it's a must.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Accept Mistakes</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  If you fear failure or quit after one error, you won't survive in this field.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Be Accurate</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Even a small mistake can cause big failure in real systems. Every decimal matters.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Cog className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-gray-900">What You'll Actually Learn & Do</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Subject</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">What You'll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Physics</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Use it to solve real aircraft problems — not just write theory.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Maths</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Use formulas to understand how machines move or shake.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Cog className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Mechanics</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Learn how parts vibrate, balance, or fail during motion.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Practical Work</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Use software tools to test, design, and simulate real systems.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Are You Ready Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-8 w-8 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-900">Are You Truly Ready?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* If you're not ready */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-900">If you're not:</h3>
            </div>
            <p className="text-red-800">
              You'll pass theory exams, but fail in real-world tasks. You'll get confused in labs, 
              lost in teamwork, and blame the college — but truth is, you were never serious about 
              what this degree demands.
            </p>
          </div>

          {/* If you are ready */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-900">If you are:</h3>
            </div>
            <p className="text-green-800">
              You'll enjoy labs, build strong skills, and graduate confidently — even from a small college. 
              You'll be career-ready in a field that respects effort and talent, not just marks.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Short Version (Direct & Honest):</h2>
        <div className="space-y-4 text-lg">
          <p>This degree is not for "just curious" or "cool name" students.</p>
          <p>It's for those who are ready to work hard, stay patient, think sharp, and learn from failure.</p>
          <p className="font-semibold">If that's not you — don't waste your 4 years here.</p>
          <p className="font-semibold">But if that is you — this degree will shape your future.</p>
        </div>
      </div>
    </div>
  );
};