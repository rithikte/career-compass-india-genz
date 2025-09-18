
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const securityData = [
  { role: 'Aerospace Engineer', withAI: 88, withoutAI: 52, shortName: 'Aerospace' },
  { role: 'Avionics Engineer', withAI: 91, withoutAI: 45, shortName: 'Avionics' },
  { role: 'Aircraft Maintenance Eng.', withAI: 79, withoutAI: 58, shortName: 'Maintenance' }
];

export const JobSecurity = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Job Security Analysis
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          With vs Without AI Skills • Future-Proofing Your Career
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Job Security Comparison
        </h3>
        <div className="h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={securityData} margin={{ top: 20, right: 10, left: 10, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="shortName" 
                angle={-45}
                textAnchor="end"
                height={60}
                fontSize={12}
              />
              <YAxis fontSize={12} />
              <Tooltip 
                formatter={(value, name) => [`${value}%`, name]}
                labelStyle={{ color: '#1e293b' }}
              />
              <Bar dataKey="withAI" fill="#10b981" name="With AI Skills" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withoutAI" fill="#ef4444" name="Without AI Skills" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {securityData.map((item, index) => (
          <div
            key={item.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4">{item.role}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-gray-600">With AI Skills</span>
                </div>
                <span className="font-bold text-green-600">{item.withAI}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                  <span className="text-gray-600">Without AI Skills</span>
                </div>
                <span className="font-bold text-red-600">{item.withoutAI}%</span>
              </div>
              <div className="border-t pt-3">
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    +{item.withAI - item.withoutAI}%
                  </span>
                  <div className="text-sm text-gray-600">Security Boost</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">The AI Skills Advantage</h3>
          <p className="text-green-200 text-lg mb-6">
            Professionals with AI skills have 30-45% higher job security across all aerospace roles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">91%</div>
              <div className="text-green-200">Avionics Engineers with AI</div>
            </div>
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">88%</div>
              <div className="text-blue-200">Aerospace Engineers with AI</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">79%</div>
              <div className="text-indigo-200">Maintenance Engineers with AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
