import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Building2, 
  TestTube, 
  Gamepad2, 
  Users, 
  Settings, 
  Brain,
  Star,
  Calculator,
  Atom,
  User,
  UserCheck
} from 'lucide-react';

const NatureOfWork = () => {
  const workTypes = [
    {
      icon: Monitor,
      type: "🧑‍💻 Desk-Based / Computer-Oriented",
      explanation: "You work full-time on a computer using software tools, mostly sitting indoors in an office.",
      color: "bg-blue-500"
    },
    {
      icon: Building2,
      type: "🏗️ On-Field / Site-Based",
      explanation: "You go to real sites like factories, plants, or construction areas to check or fix machines and systems.",
      color: "bg-orange-500"
    },
    {
      icon: TestTube,
      type: "🧪 Lab/Equipment-Based",
      explanation: "You work with machines, circuits, or samples inside a lab using tools and technical equipment.",
      color: "bg-green-500"
    },
    {
      icon: Gamepad2,
      type: "🎮 Simulation / Virtual Modeling",
      explanation: "You build and test virtual versions of machines or systems using simulation software before they're real.",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      type: "🤝 Client-Facing / Communication-Heavy",
      explanation: "You explain technical ideas to clients, give demos, or manage project discussions with teams.",
      color: "bg-pink-500"
    },
    {
      icon: Settings,
      type: "⚙️ Operations / Back-End Execution",
      explanation: "You handle the working systems behind a company like supply, production, or delivery — mostly coordination work.",
      color: "bg-yellow-500"
    },
    {
      icon: Brain,
      type: "🧠 Strategy / Think-Tank Roles",
      explanation: "You do planning, analysis, or design thinking to improve systems or develop new products and ideas.",
      color: "bg-indigo-500"
    }
  ];

  const detailedRoles = [
    {
      workType: "🧠 Strategy / Think-Tank",
      intensity: "70% Strategy – 30% Desk",
      industry: "📊 Product R&D + Simulation Strategy",
      menRole: "Mechanical R&D Strategy Analyst",
      womenRole: "Simulation Data Research Associate",
      whySuits: "Men: Big-picture modeling + field insights\nWomen: Deep research & analytical desk work",
      align: 9.0,
      mathLoad: 85,
      physicsLoad: 60,
      color: "border-indigo-200 bg-indigo-50"
    },
    {
      workType: "⚙️ Operations / Back-End",
      intensity: "60% Ops – 40% Desk",
      industry: "🏭 Supply Chain Optimization (Engineering)",
      menRole: "Mechanical Systems Optimization Engineer",
      womenRole: "Plant Data Operations Analyst",
      whySuits: "Men: Live system flow optimization\nWomen: Stable coordination, process monitoring",
      align: 8.2,
      mathLoad: 80,
      physicsLoad: 40,
      color: "border-yellow-200 bg-yellow-50"
    },
    {
      workType: "🎮 Simulation / Virtual Modeling",
      intensity: "80% Simulation – 20% Field",
      industry: "🧠 Digital Twin & System Modeling",
      menRole: "Digital Twin Systems Developer",
      womenRole: "Model-Based Simulation Specialist",
      whySuits: "Men: Coding + model testing with partial site check\nWomen: Pure software-based modeling",
      align: 10.0,
      mathLoad: 90,
      physicsLoad: 75,
      color: "border-purple-200 bg-purple-50"
    },
    {
      workType: "🧪 Lab / Equipment-Based",
      intensity: "70% Lab – 30% Desk",
      industry: "🤖 Mechatronics Testing & Robotics Labs",
      menRole: "Automation Testing Engineer",
      womenRole: "Control Systems Lab Analyst",
      whySuits: "Men: Robotics + hardware calibration\nWomen: Sensor tuning & equipment-focused lab work",
      align: 8.8,
      mathLoad: 70,
      physicsLoad: 80,
      color: "border-green-200 bg-green-50"
    },
    {
      workType: "🧑‍💻 Desk-Based / Computer-Oriented",
      intensity: "90% Desk – 10% Meetings",
      industry: "💻 CAD & Simulation Engineering",
      menRole: "CAE Engineer (Computer-Aided Engineering)",
      womenRole: "3D CAD Simulation Designer",
      whySuits: "Men: Full simulation & test validation\nWomen: Calm setup with creative CAD modeling",
      align: 9.5,
      mathLoad: 85,
      physicsLoad: 60,
      color: "border-blue-200 bg-blue-50"
    },
    {
      workType: "🤝 Client-Facing / Communication",
      intensity: "60% Client – 40% Strategy",
      industry: "🏢 Techno-Commercial Mechanical Solutions",
      menRole: "Simulation Strategy Consultant",
      womenRole: "Mechanical Forecast Analyst",
      whySuits: "Men: On-site delivery + client explanations\nWomen: Strategy planning + client report analysis",
      align: 6.8,
      mathLoad: 60,
      physicsLoad: 30,
      color: "border-pink-200 bg-pink-50"
    }
  ];

  const getStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getProgressColor = (value: number) => {
    if (value >= 80) return 'bg-red-500';
    if (value >= 60) return 'bg-orange-500';
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nature of Work in Mechanical Engineering
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding different work environments helps students and parents make informed career decisions
          </p>
        </div>

        {/* Work Types Overview - 60% Visual Focus */}
        <Card className="mb-12 border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-2xl text-blue-900 text-center">
              🔧 Work Environment Types - Simple Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {workTypes.map((work, index) => {
                const IconComponent = work.icon;
                return (
                  <Card key={index} className="h-full border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      {/* Large Visual Icon - 60% focus */}
                      <div className={`${work.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Work Type Title */}
                      <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                        {work.type}
                      </h3>
                      
                      {/* Simple Explanation - 40% content */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {work.explanation}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Roles Analysis */}
        <Card className="border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-2xl text-purple-900 text-center">
              🎯 Detailed Role Analysis with Gender Alignment
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {detailedRoles.map((role, index) => (
                <Card key={index} className={`border-2 ${role.color} hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6">
                    {/* Header with Work Type and Intensity */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {role.workType}
                        </h3>
                        <Badge variant="outline" className="text-sm">
                          {role.intensity}
                        </Badge>
                      </div>
                      
                      {/* Alignment Score - Visual Element */}
                      <div className="mt-4 lg:mt-0 flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Alignment:</span>
                        <div className="flex items-center gap-1">
                          {getStarRating(role.align)}
                        </div>
                        <span className="text-lg font-bold text-gray-900">{role.align}/10</span>
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Industry & Roles */}
                      <div className="lg:col-span-2">
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">🎯 Industry Focus:</h4>
                          <p className="text-gray-700 bg-white p-3 rounded-lg border">
                            {role.industry}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                              <User className="h-4 w-4" />
                              👨‍🔧 Role for Men:
                            </h4>
                            <p className="text-gray-700 bg-blue-50 p-3 rounded-lg border border-blue-200">
                              {role.menRole}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                              <UserCheck className="h-4 w-4" />
                              👩‍💻 Role for Women:
                            </h4>
                            <p className="text-gray-700 bg-pink-50 p-3 rounded-lg border border-pink-200">
                              {role.womenRole}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">💡 Why It Suits Each Gender:</h4>
                          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                            {role.whySuits.split('\n').map((line, i) => (
                              <p key={i} className="text-gray-700 text-sm mb-1 last:mb-0">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Math & Physics Load - Visual Progress Bars */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calculator className="h-5 w-5 text-blue-600" />
                            <span className="font-semibold text-gray-800">Math Load</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                            <div 
                              className={`h-full ${getProgressColor(role.mathLoad)} transition-all duration-1000 flex items-center justify-center`}
                              style={{ width: `${role.mathLoad}%` }}
                            >
                              <span className="text-white font-bold text-sm">{role.mathLoad}%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Atom className="h-5 w-5 text-purple-600" />
                            <span className="font-semibold text-gray-800">Physics Load</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                            <div 
                              className={`h-full ${getProgressColor(role.physicsLoad)} transition-all duration-1000 flex items-center justify-center`}
                              style={{ width: `${role.physicsLoad}%` }}
                            >
                              <span className="text-white font-bold text-sm">{role.physicsLoad}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NatureOfWork;