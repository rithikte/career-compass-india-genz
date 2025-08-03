
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar
} from 'recharts';
import { Users, Briefcase, TrendingUp, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const careerData = [
  {
    role: 'Aerospace Engineer',
    duties: 'Designs aircraft, satellites, missiles',
    entry: 4.0,
    mid: 12.0,
    senior: 20.0,
    icon: '✈️',
    growth: 15,
    demand: 95
  },
  {
    role: 'Avionics Engineer',
    duties: 'Manages aircraft electronics',
    entry: 3.5,
    mid: 10.0,
    senior: 18.0,
    icon: '🛩️',
    growth: 18,
    demand: 90
  },
  {
    role: 'Aircraft Maintenance Eng.',
    duties: 'Repairs and inspects aircraft systems',
    entry: 3.0,
    mid: 8.0,
    senior: 15.0,
    icon: '🔧',
    growth: 22,
    demand: 85
  },
  {
    role: 'Flight Test Engineer',
    duties: 'Tests aircraft performance and safety',
    entry: 5.0,
    mid: 14.0,
    senior: 22.0,
    icon: '🧪',
    growth: 12,
    demand: 80
  },
  {
    role: 'Drone/UAV Engineer',
    duties: 'Builds and manages drones',
    entry: 3.0,
    mid: 9.0,
    senior: 16.0,
    icon: '🚁',
    growth: 35,
    demand: 75
  },
  {
    role: 'Data Analyst (Aviation)',
    duties: 'Analyzes flight/fuel/maintenance data',
    entry: 4.0,
    mid: 11.0,
    senior: 18.0,
    icon: '📊',
    growth: 28,
    demand: 88
  }
];

const skillsNeededData = [
  { skill: 'Physics', percentage: 95, color: '#3b82f6' },
  { skill: 'Mathematics', percentage: 90, color: '#6366f1' },
  { skill: 'Programming', percentage: 85, color: '#8b5cf6' },
  { skill: 'Design', percentage: 80, color: '#06b6d4' },
  { skill: 'Communication', percentage: 75, color: '#10b981' }
];

const industryGrowthData = [
  { sector: 'Defense', growth: 25, jobs: 45000, color: '#ef4444' },
  { sector: 'Civil Aviation', growth: 20, jobs: 60000, color: '#3b82f6' },
  { sector: 'Space Tech', growth: 30, jobs: 25000, color: '#8b5cf6' },
  { sector: 'Drones', growth: 45, jobs: 35000, color: '#10b981' }
];

// Prepare the data for the simple bar chart
const mapToBarData = (career: typeof careerData[0]) => [
  { level: 'Entry', salary: career.entry },
  { level: 'Mid', salary: career.mid },
  { level: 'Senior', salary: career.senior },
];

const LEVEL_COLORS = {
  Entry: '#3b82f6',   // blue-500
  Mid: '#6366f1',     // indigo-500
  Senior: '#8b5cf6',  // purple-500
};

const VerticalBarChart = ({ data }: { data: { level: string, salary: number }[] }) => {
  if (!Array.isArray(data)) {
    console.error("VerticalBarChart expected array data but got:", data);
    return null;
  }
  return (
    <ResponsiveContainer width="100%" height={80}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="#e0e7eb" strokeDasharray="4 8" horizontal vertical={false} />
        <XAxis
          type="number"
          dataKey="salary"
          axisLine={false}
          tickLine={false}
          fontSize={13}
          tick={{ fontWeight: 700, fill: "#6366f1" }}
          width={36}
          tickFormatter={(v) => `₹${v}L`}
        />
        <YAxis
          type="category"
          dataKey="level"
          axisLine={false}
          tickLine={false}
          fontSize={14}
          tick={{ fontWeight: 600, fill: "#334155" }}
        />
        <Tooltip
          formatter={(v: number) => [`₹${v} LPA`, "Salary"]}
          labelFormatter={(l) => `${l} Level`}
          contentStyle={{ borderRadius: 8, fontWeight: 'bold' }}
        />
        <Bar 
          dataKey="salary"
          fill="#6366f1"
          radius={[0, 20, 20, 0]}
        >
          <LabelList
            dataKey="salary"
            position="right"
            formatter={(v: number) => `₹${v}L`}
            style={{
              fontWeight: 700,
              fontSize: 15,
              fill: "#4f46e5",
              textShadow: "0 1px 8px #fff"
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const EntryMidSeniorCard = ({ entry, mid, senior }: { entry: number; mid: number; senior: number }) => (
  <div className="grid grid-cols-3 gap-4 text-center mt-2 mb-2">
    <div className="bg-blue-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-blue-800">₹{entry}L</div>
      <div className="text-xs text-blue-600 font-semibold">Entry</div>
    </div>
    <div className="bg-indigo-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-indigo-800">₹{mid}L</div>
      <div className="text-xs text-indigo-600 font-semibold">Mid</div>
    </div>
    <div className="bg-purple-50 p-2 rounded-lg shadow">
      <div className="text-base font-bold text-purple-800">₹{senior}L+</div>
      <div className="text-xs text-purple-600 font-semibold">Senior</div>
    </div>
  </div>
);

export const CareerOutcomes = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
        <div className="py-12">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CAREER OUTCOMES
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            What Can You Become After This Degree?
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">₹20L+</div>
              <div className="text-sm text-gray-600">Max Salary</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Career Paths</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">35%</div>
              <div className="text-sm text-gray-600">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Required Chart - 60% Visual */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                Essential Skills for Aerospace Careers
              </CardTitle>
              <CardDescription className="text-lg">
                What aerospace companies look for in fresh graduates
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={skillsNeededData}>
                  <RadialBar dataKey="percentage" cornerRadius={10} fill="#3b82f6" />
                  <Tooltip formatter={(value) => [`${value}%`, "Importance"]} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {skillsNeededData.map((skill) => (
                  <div key={skill.skill} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: skill.color}}></div>
                    <span className="text-sm font-medium">{skill.skill} ({skill.percentage}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Industry Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              Industry Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">📈 Market Growth</h4>
                <p className="text-blue-800 text-sm">Aerospace industry growing at 15-20% annually in India</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">🎯 Job Security</h4>
                <p className="text-green-800 text-sm">High demand, especially in defense and space sectors</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">💰 Salary Trends</h4>
                <p className="text-purple-800 text-sm">Starting ₹3-5L, reaching ₹20L+ with experience</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">🚀 Future Scope</h4>
                <p className="text-yellow-800 text-sm">Drone tech and space missions creating new opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Enhanced Career Cards with Growth Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {careerData.map((career, index) => (
          <div
            key={career.role}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col gap-4 animate-scale-in"
            style={{animationDelay: `${index * 100}ms`}}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{career.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{career.role}</h3>
                  <p className="text-sm text-gray-600">{career.duties}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-green-600">+{career.growth}%</div>
                <div className="text-xs text-gray-500">Growth</div>
              </div>
            </div>

            {/* Mini Salary Chart */}
            <div className="h-20 mb-2">
              <VerticalBarChart data={mapToBarData(career)} />
            </div>
            
            {/* Salary Progression Cards */}
            <EntryMidSeniorCard entry={career.entry} mid={career.mid} senior={career.senior} />
            
            {/* Demand Indicator */}
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Market Demand</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                      style={{width: `${career.demand}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-green-600">{career.demand}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Industry Growth Visualization - 60% Chart */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                Sector-wise Growth & Job Opportunities
              </CardTitle>
              <CardDescription className="text-lg">
                Which aerospace sectors are hiring the most (2024-2040)
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'growth' ? `${value}%` : `${value} jobs`,
                    name === 'growth' ? 'Growth Rate' : 'Total Jobs'
                  ]} />
                  <Bar dataKey="growth" fill="#8b5cf6" name="growth" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="jobs" fill="#06b6d4" name="jobs" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 40% Content - Success Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              Success Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <div className="text-3xl font-bold text-green-600">25%</div>
                <div className="text-green-700 font-medium">Average Growth Rate</div>
              </div>
              
              <div className="text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <div className="text-3xl font-bold text-blue-600">6</div>
                <div className="text-blue-700 font-medium">Major Career Paths</div>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <div className="text-3xl font-bold text-purple-600">165K</div>
                <div className="text-purple-700 font-medium">Total Job Opportunities</div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 mt-6">
                <h4 className="font-bold text-gray-900 text-center mb-2">🎯 Career Success Formula</h4>
                <p className="text-sm text-gray-700 text-center">
                  <strong>Strong Physics + Math + Programming = Top 10% Salaries</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.

