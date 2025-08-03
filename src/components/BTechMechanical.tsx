import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Brain, Cog, Calculator, Wrench, Plane, Zap, Target, Clock, BookOpen, Shield, Users, Building, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, LineChart, Line } from 'recharts';
// Enhanced data for visualizations
const skillDemandData = [
  { skill: 'Physics', demand: 95, color: '#3b82f6' },
  { skill: 'Mathematics', demand: 90, color: '#6366f1' },
  { skill: 'Software', demand: 85, color: '#8b5cf6' },
  { skill: 'Design', demand: 80, color: '#06b6d4' },
  { skill: 'Testing', demand: 75, color: '#10b981' }
];

const careerProgressionData = [
  { year: 0, salary: 4, title: 'Entry' },
  { year: 3, salary: 8, title: 'Mid' },
  { year: 7, salary: 15, title: 'Senior' },
  { year: 12, salary: 25, title: 'Lead' },
  { year: 20, salary: 45, title: 'Expert' }
];

const subjectComplexityData = [
  { subject: 'Physics', complexity: 85, timeHours: 120 },
  { subject: 'Math', complexity: 90, timeHours: 140 },
  { subject: 'Design', complexity: 75, timeHours: 100 },
  { subject: 'Software', complexity: 80, timeHours: 110 }
];

const industryDistribution = [
  { name: 'Defense', value: 35, color: '#ef4444' },
  { name: 'Civil Aviation', value: 30, color: '#3b82f6' },
  { name: 'Space', value: 20, color: '#8b5cf6' },
  { name: 'Research', value: 15, color: '#10b981' }
];

export const BTechMechanical = () => {
  return <div className="space-y-12 animate-fade-in">
      {/* Enhanced Hero Section with Live Stats */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-white rounded-2xl p-8 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 bg-white/20 rounded-lg px-3 py-1 animate-pulse">
          <span className="text-sm font-semibold">Live: 2.5L+ Jobs</span>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-float"></div>
        
        <div className="relative text-center space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur rounded-full px-6 py-3 animate-scale-in">
            <Plane className="h-7 w-7" />
            <span className="font-bold text-lg">B.Tech Mechanical Engineering</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              AVIATION INDUSTRY
            </h1>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 inline-block">
              <h2 className="text-3xl font-bold text-yellow-300 mb-2">⚡ Waves & Oscillations</h2>
              <p className="text-xl opacity-90">The Foundation of Modern Aerospace</p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-80">Physics Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15L+</div>
                  <div className="text-sm opacity-80">Avg Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-sm opacity-80">Growth Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Distribution Mini Chart */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {industryDistribution.map((item, index) => (
              <div key={item.name} className="bg-white/20 backdrop-blur rounded-xl p-4 animate-scale-in" 
                   style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{backgroundColor: item.color}}></div>
                <div className="text-center">
                  <div className="text-lg font-bold">{item.value}%</div>
                  <div className="text-sm opacity-90">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Demand Visualization - 60% Chart */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-2 border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                Skills Demand in Aerospace Industry
              </CardTitle>
              <CardDescription className="text-lg">
                What skills aerospace companies value most (2024 Analysis)
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillDemandData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, "Demand"]} />
                  <Bar dataKey="demand" fill="#3b82f6" radius={[8, 8, 0, 0]}>
                    {skillDemandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* 40% Content */}
        <Card className="border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-xl text-blue-900">Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Target className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900">Physics = 95% Demand</h4>
                  <p className="text-sm text-blue-800">Wave mechanics are core to aircraft stability</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <Calculator className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900">Math = 90% Demand</h4>
                  <p className="text-sm text-green-800">Complex equations solve real flight problems</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Cog className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-bold text-purple-900">Software = 85% Demand</h4>
                  <p className="text-sm text-purple-800">MATLAB, ANSYS are industry standard</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Progression Chart - 60% Visual */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                Career Progression & Salary Growth
              </CardTitle>
              <CardDescription className="text-green-700 text-lg">
                Your 20-year journey in aerospace engineering
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={careerProgressionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Years Experience', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Salary (LPA)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`₹${value}L`, "Salary"]} />
                  <Line type="monotone" dataKey="salary" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - What This Field Demands */}
        <Card className="border-2 border-red-200">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
            <CardTitle className="flex items-center gap-3 text-xl text-red-900">
              <div className="p-2 bg-red-100 rounded-lg">
                <Brain className="h-6 w-6 text-red-600" />
              </div>
              Reality Check
            </CardTitle>
            <CardDescription className="text-red-700 font-medium">
              Can you handle this for 4 years?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Extreme Patience</h4>
                  <p className="text-gray-600 text-xs">Simulations take hours. You'll redo calculations 10+ times.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                  <Brain className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Complex Problem Solving</h4>
                  <p className="text-gray-600 text-xs">No Google answers for real engineering problems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                  <Calculator className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Tool Mastery</h4>
                  <p className="text-gray-600 text-xs">MATLAB, ANSYS, CATIA - you'll live in these for 4 years.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                  <Target className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Perfect Accuracy</h4>
                  <p className="text-gray-600 text-xs">One decimal wrong = mission failure.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Complexity Analysis - 60% Chart */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                Subject Difficulty & Time Investment
              </CardTitle>
              <CardDescription className="text-blue-700 text-lg">
                What you'll actually face in 4 years - hour by hour breakdown
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={subjectComplexityData}>
                  <RadialBar dataKey="complexity" cornerRadius={10} fill="#3b82f6" />
                  <Tooltip formatter={(value) => [`${value}%`, "Difficulty"]} />
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Year-wise Study Plan */}
        <Card className="border-2 border-indigo-200">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="text-xl text-indigo-900">4-Year Study Roadmap</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="font-bold text-blue-600 text-lg">1st Year</div>
                <div className="text-sm text-gray-700">
                  <strong>Engineering Physics</strong> – Wave mechanics, vibrations (120 hrs)
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="font-bold text-green-600 text-lg">2nd Year</div>
                <div className="text-sm text-gray-700">
                  <strong>Strength of Materials</strong> – Material vibration behavior (140 hrs)
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="font-bold text-purple-600 text-lg">3rd Year</div>
                <div className="text-sm text-gray-700">
                  <strong>Vibrations & Dynamics</strong> – Engine oscillations (100 hrs)
                </div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="font-bold text-orange-600 text-lg">4th Year</div>
                <div className="text-sm text-gray-700">
                  <strong>Aero-mechanical Electives</strong> – Fatigue analysis (110 hrs)
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-bold text-yellow-900 text-sm">Reality Check:</span>
                </div>
                <p className="text-yellow-800 text-sm mt-2">
                  Only <span className="font-bold">20-30%</span> covers Waves & Oscillations directly. Need extra certifications for aviation jobs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Industry Distribution Chart - 60% Visual */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                Aerospace Industry Job Distribution
              </CardTitle>
              <CardDescription className="text-lg">
                Where aerospace engineers actually work - real industry data
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {industryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Jobs"]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {industryDistribution.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-sm">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Skills Mastery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              Skills You'll Master
            </CardTitle>
            <CardDescription>
              Real capabilities aerospace companies need
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-gray-900">Core Sciences</h4>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm"><strong>Advanced Physics:</strong> Wave mechanics for aircraft systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm"><strong>Engineering Math:</strong> Differential equations for flight</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm"><strong>Materials Science:</strong> Metal behavior under stress</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-gray-900">Industry Tools</h4>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm"><strong>CAD Software:</strong> CATIA, SolidWorks</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm"><strong>Simulation:</strong> ANSYS, MATLAB</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm"><strong>Analysis:</strong> CFD, structural testing</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decision Point - Are You Ready? */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Not Ready */}
        <Card className="border-2 border-red-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-3 text-red-900">
              <XCircle className="h-6 w-6 text-red-600" />
              If You're NOT Ready...
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3 text-red-800">
              <p className="text-base font-medium">❌ You'll pass exams but fail in labs</p>
              <p className="font-medium">❌ You'll blame professors when you struggle</p>
              <p className="font-medium">❌ You'll copy assignments without understanding</p>
              <p className="font-medium">❌ You'll graduate but feel lost in interviews</p>
              <p className="font-bold mt-4">Result: Wasted 4 years and frustrated with engineering</p>
            </div>
          </CardContent>
        </Card>

        {/* Ready */}
        <Card className="border-2 border-green-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-3 text-green-900">
              <CheckCircle className="h-6 w-6 text-green-600" />
              If You ARE Ready...
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3 text-green-800">
              <p className="font-medium">✅ You'll enjoy solving complex problems</p>
              <p className="font-medium">✅ You'll build strong technical skills</p>
              <p className="font-medium">✅ You'll understand what you're learning</p>
              <p className="font-medium">✅ You'll be job-ready from any college</p>
              <p className="font-bold mt-4">Result: Strong engineer ready for ISRO, HAL, or aerospace startups</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Call to Action */}
      <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-0">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-4">Your Decision Moment</h2>
            <p className="text-xl mb-6 opacity-90">
              This degree isn't about looking cool or following trends
            </p>
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold">
                "Choose B.Tech Mechanical only if you're ready to EARN it through dedication, precision, and genuine passion for aerospace engineering."
              </p>
            </div>
            <p className="text-lg opacity-80 mt-4">
              If you're still reading and feeling excited about the challenge → Continue exploring the career information below
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
};