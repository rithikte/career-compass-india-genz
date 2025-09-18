import React from 'react';
import { School, Globe, MapPin, Award } from 'lucide-react';

const topColleges = [
  {
    name: 'Malla Reddy College of Engineering',
    program: 'B.Tech Aerospace Engineering',
    location: 'Gandimaisamma, RR District, Hyderabad',
    logoInitial: 'MR',
    fees: '₹1.3L/year',
    placement: '₹6L average'
  },
  {
    name: 'CVR College of Engineering',
    program: 'B.Tech Aeronautical Engineering',
    location: 'Mangalpally, Ibrahimpatnam, Hyderabad',
    logoInitial: 'CV',
    fees: '₹1.2L/year',
    placement: '₹5.5L average'
  },
  {
    name: 'GRIET (Gokaraju Rangaraju Institute)',
    program: 'B.Tech Aeronautical Engineering',
    location: 'Bachupally, Hyderabad',
    logoInitial: 'GR',
    fees: '₹1.4L/year',
    placement: '₹5.8L average'
  },
  {
    name: 'CBIT (Chaitanya Bharathi Institute)',
    program: 'B.E Aerospace/Aeronautical',
    location: 'Gandipet, Hyderabad',
    logoInitial: 'CB',
    fees: '₹1.6L/year',
    placement: '₹6.2L average'
  },
  {
    name: 'VNR VJIET (Vallurupalli Nageswara Rao Vignana Jyothi Institute)',
    program: 'B.Tech Aeronautical Engineering',
    location: 'Bachupally, Hyderabad',
    logoInitial: 'VN',
    fees: '₹1.5L/year',
    placement: '₹6L average'
  }
];

const onlinePlatforms = [
  {
    platform: 'NPTEL (IIT/IISc)',
    courses: 'Aerospace Fundamentals, Flight Mechanics',
    duration: '12 weeks each',
    cost: 'Free + ₹1000 for certificate',
    certification: 'IIT Certificate',
    rating: 4.8,
    students: '50K+ enrolled'
  },
  {
    platform: 'Coursera',
    courses: 'Introduction to Aeronautics, Propulsion',
    duration: '4-6 weeks each',
    cost: '₹3000/month',
    certification: 'University Certificate',
    rating: 4.6,
    students: '20K+ enrolled'
  },
  {
    platform: 'Great Learning',
    courses: 'Aerospace Data Analytics, Drone Programming',
    duration: '6 months',
    cost: '₹75K complete program',
    certification: 'Industry Certificate',
    rating: 4.5,
    students: '15K+ enrolled'
  },
  {
    platform: 'Udemy',
    courses: 'CATIA, SolidWorks for Aerospace',
    duration: '20-40 hours',
    cost: '₹1500-3000 per course',
    certification: 'Course Certificate',
    rating: 4.3,
    students: '30K+ enrolled'
  }
];

const offlineCenters = [
  {
    center: 'DGCA Training Centers',
    location: 'Pan India (15+ centers)',
    programs: 'Aircraft Maintenance Engineering',
    duration: '3 years',
    fees: '₹8-15L total',
    placement: '95% in airlines'
  },
  {
    center: 'Drone Training Academies',
    location: 'Bangalore, Pune, Hyderabad',
    programs: 'DGCA Remote Pilot License',
    duration: '3-6 months',
    fees: '₹50K-1L',
    placement: '80% in drone companies'
  },
  {
    center: 'Skill India Centers',
    location: 'All major cities',
    programs: 'Aerospace Manufacturing Skills',
    duration: '6-12 months',
    fees: 'Free (govt sponsored)',
    placement: '70% placement guarantee'
  }
];

export const WhereToLearn = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Where to Learn & Get Certified
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Complete Learning Pathways • Colleges, Online & Offline Options
        </p>
      </div>

      {/* Hyderabad Colleges Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <School className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Colleges Hyderabad</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {topColleges.map((college, index) => (
            <div
              key={college.name}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                {/* Circular logo/initials placeholder */}
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2 font-bold text-blue-700 text-lg shadow-md">
                  {college.logoInitial}
                </div>
                <h4 className="text-lg font-bold text-slate-900 flex-1 text-right">{college.name}</h4>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-600">{college.program}</div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {college.location}
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Fees</span>
                  <span className="text-sm font-bold text-orange-600">{college.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg Package</span>
                  <span className="text-sm font-bold text-green-600">{college.placement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Platforms Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Online Learning Platforms</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {onlinePlatforms.map((platform, index) => (
            <div
              key={platform.platform}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-slate-900">{platform.platform}</h4>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold">{platform.rating}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Courses</div>
                  <div className="text-sm font-semibold">{platform.courses}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-600">Duration</div>
                    <div className="text-sm font-semibold">{platform.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Cost</div>
                    <div className="text-sm font-bold text-green-600">{platform.cost}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-600">Certification</div>
                    <div className="text-sm font-semibold">{platform.certification}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">Students</div>
                    <div className="text-sm font-bold text-blue-600">{platform.students}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Centers Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Offline Training Centers</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {offlineCenters.map((center, index) => (
            <div
              key={center.center}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4">{center.center}</h4>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-sm font-semibold">{center.location}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Programs</div>
                  <div className="text-sm font-semibold">{center.programs}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-xs text-gray-600">Duration</div>
                    <div className="text-sm font-semibold">{center.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Fees</div>
                    <div className="text-sm font-bold text-orange-600">{center.fees}</div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Placement Rate</div>
                  <div className="text-sm font-bold text-green-700">{center.placement}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Learning Path Recommendation</h3>
          <p className="text-blue-200 text-lg mb-6">
            For B.Sc. Physics students: Start with NPTEL + DGCA certifications for fastest entry
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">6 Months</div>
              <div className="text-blue-200">Online Foundation</div>
              <div className="text-xs text-blue-300">NPTEL + Coursera</div>
            </div>
            <div className="bg-purple-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">3 Months</div>
              <div className="text-purple-200">Hands-on Training</div>
              <div className="text-xs text-purple-300">DGCA/Drone Centers</div>
            </div>
            <div className="bg-indigo-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-xl font-bold">1 Month</div>
              <div className="text-indigo-200">AI Specialization</div>
              <div className="text-xs text-indigo-300">Industry Certificate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
