
import React from 'react';
import { TrendingUp, Users, Briefcase, DollarSign } from 'lucide-react';
import SourceBadge from './SourceBadge';

const benefitsData = [
  {
    role: 'Aerospace Engineer',
    promotionBoost: 32,
    salaryHike: 40,
    interviewBoost: 3.5,
    details: {
      before: '₹4L entry level',
      after: '₹5.6L starting salary',
      careerPath: 'Junior → Senior → Lead Engineer'
    }
  },
  {
    role: 'Avionics Engineer',
    promotionBoost: 30,
    salaryHike: 35,
    interviewBoost: 3.0,
    details: {
      before: '₹3.5L entry level',
      after: '₹4.7L starting salary',
      careerPath: 'Trainee → Engineer → Senior Engineer'
    }
  },
  {
    role: 'Aircraft Maintenance Eng.',
    promotionBoost: 29,
    salaryHike: 32,
    interviewBoost: 2.8,
    details: {
      before: '₹3L entry level',
      after: '₹4L starting salary',
      careerPath: 'Technician → Engineer → Manager'
    }
  }
];

const roiMetrics = [
  {
    metric: 'Average Salary Increase',
    value: '₹1.5L',
    description: 'Additional annual income',
    icon: DollarSign,
    color: 'from-green-600 to-green-700'
  },
  {
    metric: 'Interview Success Rate',
    value: '3.4x',
    description: 'Higher callback rates',
    icon: Users,
    color: 'from-blue-600 to-blue-700'
  },
  {
    metric: 'Promotion Timeline',
    value: '33%',
    description: 'Faster career progression',
    icon: TrendingUp,
    color: 'from-purple-600 to-purple-700'
  }
];

export const PostCertBenefits = () => {
  const avgSalaryHike = Math.round(benefitsData.reduce((sum, item) => sum + item.salaryHike, 0) / benefitsData.length);
  const avgPromotionBoost = Math.round(benefitsData.reduce((sum, item) => sum + item.promotionBoost, 0) / benefitsData.length);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Post-Certification Benefits
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          ROI Analysis • Before vs After Certification Impact
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.payscale.com/research/IN/Certification" label="PayScale Certification" />
          <SourceBadge href="https://www.glassdoor.co.in/Salaries/aerospace-engineer-salary" label="Glassdoor India" />
          <SourceBadge href="https://www.ambitionbox.com/profiles/aerospace-engineer/salary" label="AmbitionBox" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {roiMetrics.map((metric, index) => (
          <div
            key={metric.metric}
            className={`bg-gradient-to-r ${metric.color} text-white p-6 rounded-lg text-center`}
          >
            <metric.icon className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold">{metric.value}</div>
            <div className="text-sm opacity-90">{metric.description}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefitsData.map((item, index) => (
          <div
            key={item.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">{item.role}</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Promotion Boost</span>
                </div>
                <span className="font-bold text-green-600">+{item.promotionBoost}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Salary Hike</span>
                </div>
                <span className="font-bold text-blue-600">+{item.salaryHike}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-gray-600">Interview Boost</span>
                </div>
                <span className="font-bold text-purple-600">{item.interviewBoost}x</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-3">SALARY COMPARISON</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Before</span>
                  <span className="text-sm text-red-600">{item.details.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">After</span>
                  <span className="text-sm font-bold text-green-600">{item.details.after}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <h4 className="text-xs font-semibold text-gray-600 mb-1">CAREER PROGRESSION</h4>
              <p className="text-xs text-gray-700">{item.details.careerPath}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <DollarSign className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">ROI Spotlight</h3>
          <p className="text-green-200 text-lg mb-6">
            Aerospace Engineer roles show highest returns: 40% salary hike + 3.5x interview success rate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">{avgSalaryHike}%</div>
              <div className="text-green-200">Avg Salary Increase</div>
            </div>
            <div className="bg-teal-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">{avgPromotionBoost}%</div>
              <div className="text-teal-200">Avg Promotion Boost</div>
            </div>
            <div className="bg-emerald-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">6-12</div>
              <div className="text-emerald-200">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
