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
          <h3 className="text-xl text-secondary">Industry: Aerospace & Aviation</h3>
        </div>
      </div>

      {/* What's This Degree About */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What's This Degree Really About? (Simple & Honest)</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Waves & Oscillations are not just a school chapter — they are the heart of Aerospace Engineering.
          </p>
          <p className="text-gray-700 font-medium">They help in:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Keeping planes stable
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Reducing engine noise
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Testing aircraft during flight
            </li>
          </ul>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <p className="font-bold text-gray-900">Let's Be Real:</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-700">Liking the topic is not enough.</p>
              <p className="text-gray-700">This degree doesn't accept "time-pass" students.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What This Degree Will Demand */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-gray-900">📌 What This Degree Will Demand From You:</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">What It Demands</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🕒</span>
                    <span className="font-medium">Time & Patience</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  You'll repeat tests, projects, and wait for results. Quick shortcuts won't work.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🧠</span>
                    <span className="font-medium">Sharp Thinking</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Problems won't have direct answers. You must think step by step.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💻</span>
                    <span className="font-medium">Learning Tools</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Tools like MATLAB, ANSYS, CATIA are not optional — they're part of the real job.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">❌</span>
                    <span className="font-medium">No Fear of Mistakes</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  You'll fail, fix, and fail again. If you give up easily, this field is not for you.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span className="font-medium">Extreme Accuracy</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  One decimal mistake in calculation can fail a mission. Precision is survival.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🤯</span>
                    <span className="font-medium">Mental Strength</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  Long nights, design errors, software crashes — you need focus and grit.
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
          <h2 className="text-2xl font-bold text-gray-900">What You'll Actually Learn (Short & Simple)</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span><strong>Physics</strong> – To solve real problems in planes and rockets, not just write theory</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span><strong>Math</strong> – To calculate how things move, shake, or stay balanced</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span><strong>Mechanics</strong> – To understand how parts work, break, and how to make them safe</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span><strong>Software Tools</strong> – To design and test aircraft systems using real industry software like MATLAB and CATIA</span>
          </li>
        </ul>
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
              You'll clear exams, but struggle in labs and blame the college — not realizing you never gave what the degree demands.
            </p>
          </div>

          {/* If you are ready */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-900">If you are:</h3>
            </div>
            <p className="text-green-800">
              You'll enjoy learning, build strong skills, and be job-ready — even from a small college.
            </p>
          </div>
        </div>
      </div>

      {/* Final Truth Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💥</span>
          <h2 className="text-2xl font-bold">Final Truth (One-Line):</h2>
        </div>
        <p className="text-lg font-semibold">
          Don't choose this degree because it sounds cool — choose it only if you're ready to earn it.
        </p>
      </div>
    </div>
  );
};