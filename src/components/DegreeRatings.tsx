
import React from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';

const degreeData = [
  {
    degree: 'B.Sc. Physics',
    rating: 8.0,
    maxRating: 10,
    tags: ['Core Physics', 'Data Fit', 'Best for Drones'],
    careerFit: 'Excellent for aerospace data analysis and drone engineering',
    salaryNote: 'B.Sc. + Certifications = 80-90% of B.Tech salaries in 3-5 years',
    topRoles: ['Data Analyst', 'Drone Engineer', 'Flight Test Engineer'],
    color: 'from-blue-600 to-blue-700'
  },
  {
    degree: 'B.Tech Aerospace',
    rating: 9.0,
    maxRating: 10,
    tags: ['Direct Match', 'Core Engineering', 'Industry Ready'],
    careerFit: 'Perfect alignment with aerospace engineering roles',
    salaryNote: 'Highest starting salaries and fastest career progression',
    topRoles: ['Aerospace Engineer', 'Flight Test Engineer', 'Avionics Engineer'],
    color: 'from-green-600 to-green-700'
  },
  {
    degree: 'B.Tech ECE',
    rating: 7.5,
    maxRating: 10,
    tags: ['Avionics Fit', 'Embedded Systems', 'Good Foundation'],
    careerFit: 'Strong foundation for avionics and embedded aerospace systems',
    salaryNote: 'Competitive salaries with electronics industry crossover',
    topRoles: ['Avionics Engineer', 'Data Analyst', 'Drone Engineer'],
    color: 'from-purple-600 to-purple-700'
  },
  {
    degree: 'B.Tech Mechanical',
    rating: 7.0,
    maxRating: 10,
    tags: ['Design Focus', 'Manufacturing', 'Maintenance'],
    careerFit: 'Good for aircraft design and maintenance engineering',
    salaryNote: 'Steady growth with manufacturing and design opportunities',
    topRoles: ['Aircraft Maintenance Eng.', 'Aerospace Engineer'],
    color: 'from-orange-600 to-orange-700'
  }
];

const renderStars = (rating: number, maxRating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <Star className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-gray-300" />
      ))}
      <span className="ml-2 text-lg font-bold">{rating}/10</span>
    </div>
  );
};

export const DegreeRatings = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Degree Ratings & Career Fit
        </h2>
        <p className="text-xl text-gray-600">
          Which degree works best for aerospace careers?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {degreeData.map((degree, index) => (
          <div
            key={degree.degree}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">{degree.degree}</h3>
              <Award className="w-8 h-8 text-yellow-500" />
            </div>

            <div className="mb-6">
              {renderStars(degree.rating, degree.maxRating)}
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {degree.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">CAREER FIT</h4>
                <p className="text-gray-700">{degree.careerFit}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">SALARY OUTLOOK</h4>
                <p className="text-gray-700">{degree.salaryNote}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">TOP ROLES</h4>
                <div className="flex flex-wrap gap-2">
                  {degree.topRoles.map((role, roleIndex) => (
                    <span
                      key={roleIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-r ${degree.color} text-white p-4 rounded-lg text-center`}>
              <div className="text-lg font-bold">Rating: {degree.rating}/10</div>
              <div className="text-sm opacity-90">Career Compatibility Score</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Key Insight</h3>
          <p className="text-green-200 text-lg mb-6">
            B.Sc. Physics + Strategic Certifications can match 80-90% of B.Tech aerospace salaries within 3-5 years
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">9.0/10</div>
              <div className="text-green-200">B.Tech Aerospace</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">8.0/10</div>
              <div className="text-green-200">B.Sc. Physics</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 p-4 rounded-lg">
              <div className="text-2xl font-bold">7.5/10</div>
              <div className="text-green-200">B.Tech ECE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
