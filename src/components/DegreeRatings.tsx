
import React from 'react';
import { Star, Award, TrendingUp, Target, Zap, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

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

// Enhanced degree analysis data
const degreeChartData = degreeData.map(degree => ({
  degree: degree.degree.replace('B.Tech ', '').replace('B.Sc. ', ''),
  rating: degree.rating,
  careerFit: degree.rating,
  marketValue: degree.rating * 1.1
}));

const skillMatchData = [
  { skill: 'Technical Depth', aerospace: 95, physics: 90, ece: 85, mechanical: 88 },
  { skill: 'Industry Ready', aerospace: 92, physics: 75, ece: 80, mechanical: 85 },
  { skill: 'Salary Potential', aerospace: 90, physics: 82, ece: 85, mechanical: 80 },
  { skill: 'Job Security', aerospace: 88, physics: 85, ece: 82, mechanical: 90 }
];

const degreeDistribution = [
  { name: 'Excellent (9.0+)', count: 1, color: '#10b981' },
  { name: 'Very Good (8.0-8.9)', count: 1, color: '#3b82f6' },
  { name: 'Good (7.0-7.9)', count: 2, color: '#f59e0b' }
];

export const DegreeRatings = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl -z-10"></div>
        <div className="py-12">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            DEGREE ANALYSIS
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            Which Degree Works Best for Aerospace Careers?
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-green-600">9.0/10</div>
              <div className="text-sm text-gray-600">Best Rating</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Degree Options</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-gray-600">Career Match</div>
            </div>
          </div>
        </div>
      </div>

      {/* Degree Rating Charts - 60% Visual */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                Degree Rating Comparison
              </CardTitle>
              <CardDescription className="text-lg">
                Career compatibility scores for aerospace industry entry
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={degreeChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="degree" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip formatter={(value) => [`${value}/10`, "Rating"]} />
                  <Bar dataKey="rating" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                Rating Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={degreeDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="count"
                  >
                    {degreeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-2 mt-4">
                {degreeDistribution.map((item) => (
                  <div key={item.name} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-xs">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Degree Cards */}
        <div className="space-y-6">
          {degreeData.map((degree, index) => (
            <Card key={degree.degree} className="card-hover animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{degree.degree}</h3>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                {renderStars(degree.rating, degree.maxRating)}
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  {degree.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-3">{degree.careerFit}</p>
                <div className={`bg-gradient-to-r ${degree.color} text-white p-3 rounded-lg text-center`}>
                  <div className="text-lg font-bold">{degree.rating}/10</div>
                  <div className="text-xs opacity-90">Compatibility Score</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
