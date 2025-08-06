import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Monitor, Building2, TestTube, Gamepad2, Users, Settings, Brain, Star, Calculator, Atom, User, UserCheck, Zap, Target, TrendingUp, ChevronRight, BarChart3, Activity, Clock, MapPin, ChevronDown, Users2, UserX } from 'lucide-react';
const NatureOfWork = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const workTypes = [{
    icon: Brain,
    type: "Strategy",
    subtitle: "Think-Tank Roles",
    emoji: "🧠",
    explanation: "You do planning, analysis, or design thinking to improve systems or develop new products and ideas.",
    breakdown: "70% Strategy – 30% Desk",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: Settings,
    type: "Operations",
    subtitle: "Back-End Execution",
    emoji: "⚙️",
    explanation: "You handle the working systems behind a company like supply, production, or delivery — mostly coordination work.",
    breakdown: "60% Ops – 40% Desk",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: Gamepad2,
    type: "Simulation",
    subtitle: "Virtual Modeling",
    emoji: "🎮",
    explanation: "You build and test virtual versions of machines or systems using simulation software before they're real.",
    breakdown: "80% Simulation – 20% Field",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: TestTube,
    type: "Lab/Equipment",
    subtitle: "Research-Based",
    emoji: "🧪",
    explanation: "You work with machines, circuits, or samples inside a lab using tools and technical equipment.",
    breakdown: "70% Lab – 30% Desk",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: Monitor,
    type: "Desk-Based",
    subtitle: "Computer-Oriented",
    emoji: "🧑‍💻",
    explanation: "You work full-time on a computer using software tools, mostly sitting indoors in an office.",
    breakdown: "90% Desk – 10% Meetings",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: Users,
    type: "Client-Facing",
    subtitle: "Communication-Heavy",
    emoji: "🤝",
    explanation: "You explain technical ideas to clients, give demos, or manage project discussions with teams.",
    breakdown: "60% Client – 40% Strategy",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }, {
    icon: Building2,
    type: "On-Field",
    subtitle: "Site-Based",
    emoji: "🏗️",
    explanation: "You go to real sites like factories, plants, or construction areas to check or fix machines and systems.",
    breakdown: "80% Field – 20% Office",
    gradient: "from-slate-200 via-white to-slate-100",
    lightBg: "bg-slate-50/80",
    borderColor: "border-slate-200/50",
    shadowColor: "shadow-slate-500/20"
  }];
  // Map work types to detailed role data
  const workTypeMapping = {
    "Strategy": 0,      // Strategy / Think-Tank
    "Operations": 1,    // Operations / Back-End  
    "Simulation": 2,    // Simulation / Virtual Modeling
    "Lab/Equipment": 3, // Lab / Equipment-Based
    "Desk-Based": 4,    // Desk-Based / Computer-Oriented
    "Client-Facing": 5, // Client-Facing / Communication
    "On-Field": 6       // Create separate entry for On-Field
  };

  const detailedRoles = [{
    workType: "Strategy",
    emoji: "🧠",
    intensity: "Strategy / Think-Tank",
    industry: "📊 Product R&D + Simulation Strategy",
    menRole: "Mechanical R&D Strategy Analyst",
    womenRole: "Simulation Data Research Associate",
    menWhySuits: "Big-picture modeling + field insights",
    womenWhySuits: "Deep research & analytical desk work",
    align: 9.0,
    mathLoad: 85,
    physicsLoad: 60,
    gradient: "from-indigo-500 to-purple-600"
  }, {
    workType: "Operations",
    emoji: "⚙️",
    intensity: "Operations / Back-End",
    industry: "🏭 Supply Chain Optimization (Engineering)",
    menRole: "Mechanical Systems Optimization Engineer",
    womenRole: "Plant Data Operations Analyst",
    menWhySuits: "Live system flow optimization",
    womenWhySuits: "Stable coordination, process monitoring",
    align: 8.2,
    mathLoad: 80,
    physicsLoad: 40,
    gradient: "from-yellow-500 to-orange-600"
  }, {
    workType: "Simulation",
    emoji: "🎮",
    intensity: "Simulation / Virtual Modeling",
    industry: "🧠 Digital Twin & System Modeling",
    menRole: "Digital Twin Systems Developer",
    womenRole: "Model-Based Simulation Specialist",
    menWhySuits: "Coding + model testing with partial site check",
    womenWhySuits: "Pure software-based modeling",
    align: 10.0,
    mathLoad: 90,
    physicsLoad: 75,
    gradient: "from-purple-500 to-violet-600"
  }, {
    workType: "Lab/Equipment",
    emoji: "🧪",
    intensity: "Lab / Equipment-Based",
    industry: "🤖 Mechatronics Testing & Robotics Labs",
    menRole: "Automation Testing Engineer",
    womenRole: "Control Systems Lab Analyst",
    menWhySuits: "Robotics + hardware calibration",
    womenWhySuits: "Sensor tuning & equipment-focused lab work",
    align: 8.8,
    mathLoad: 70,
    physicsLoad: 80,
    gradient: "from-green-500 to-emerald-600"
  }, {
    workType: "Desk-Based",
    emoji: "🧑‍💻",
    intensity: "Desk-Based / Computer-Oriented",
    industry: "💻 CAD & Simulation Engineering",
    menRole: "CAE Engineer (Computer-Aided Engineering)",
    womenRole: "3D CAD Simulation Designer",
    menWhySuits: "Full simulation & test validation",
    womenWhySuits: "Calm setup with creative CAD modeling",
    align: 9.5,
    mathLoad: 85,
    physicsLoad: 60,
    gradient: "from-blue-500 to-indigo-600"
  }, {
    workType: "Client-Facing",
    emoji: "🤝",
    intensity: "Client-Facing / Communication",
    industry: "🏢 Techno-Commercial Mechanical Solutions",
    menRole: "Simulation Strategy Consultant",
    womenRole: "Mechanical Forecast Analyst",
    menWhySuits: "On-site delivery + client explanations",
    womenWhySuits: "Strategy planning + client report analysis",
    align: 6.8,
    mathLoad: 60,
    physicsLoad: 30,
    gradient: "from-pink-500 to-rose-600"
  }, {
    workType: "On-Field",
    emoji: "🏗️",
    intensity: "On-Field / Site-Based",
    industry: "🏭 Manufacturing & Construction Sites",
    menRole: "Site Engineering Supervisor",
    womenRole: "Project Coordination Specialist",
    menWhySuits: "Physical site management + equipment handling",
    womenWhySuits: "Site documentation + team coordination",
    align: 7.5,
    mathLoad: 65,
    physicsLoad: 70,
    gradient: "from-orange-500 to-red-600"
  }];
  const getStarRating = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, i) => <Star key={i} className={`h-5 w-5 transition-all duration-300 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg' : 'text-gray-300'}`} />);
  };
  const getProgressGradient = (value: number) => {
    if (value >= 80) return 'from-red-500 to-red-600';
    if (value >= 60) return 'from-orange-500 to-orange-600';
    if (value >= 40) return 'from-yellow-500 to-yellow-600';
    return 'from-green-500 to-green-600';
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Swiss Typography Header */}
        

        {/* Work Environment Types - Vertical Interactive Cards */}
        <div className="mb-32">
          {/* Header with 60-40 Rule Layout */}
          <div className="grid grid-cols-5 gap-8 mb-20">
            {/* 60% Content Side */}
            <div className="col-span-3 space-y-8">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                <Zap className="h-8 w-8 text-orange-500" />
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              </div>
              
              <h3 className="text-5xl font-black text-slate-800 tracking-tight leading-none mb-6">
                WORK ENVIRONMENT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  TYPES
                </span>
              </h3>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-slate-700 mb-2">
                  "From Your Desk to the Factory Floor"
                </p>
                <p className="text-lg text-orange-600 font-medium italic">
                  Discover where your engineering career will take you daily
                </p>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                Seven distinct career paths with interactive insights into industry statistics, 
                growth potential, and work-life dynamics.
              </p>
              
              {/* Mini Statistics Dashboard */}
              
            </div>
            
            {/* 40% Visual Side */}
            <div className="col-span-2 relative">
              <div className="sticky top-20">
                {/* Geometric Infographic */}
                <div className="relative w-full h-80 bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-3xl border border-slate-200/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-pink-100/30 to-purple-100/30"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-12 left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-20 rotate-12"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-10"></div>
                  
                  {/* Central Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl shadow-2xl">
                      <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                        <Target className="h-8 w-8 text-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Vertical Cards */}
          <div className="space-y-6">
            {workTypes.map((work, index) => {
            const IconComponent = work.icon;
            const isSelected = selectedWork === index;
            return <Card key={index} className={`group relative overflow-hidden border-2 transition-all duration-700 cursor-pointer transform hover:scale-[1.02]
                    ${isSelected ? `${work.borderColor} bg-gradient-to-r ${work.gradient}/5 shadow-2xl scale-[1.02]` : 'border-slate-200/50 bg-white/80 hover:border-slate-300/50 shadow-xl hover:shadow-2xl'}`} onClick={() => setSelectedWork(isSelected ? null : index)}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${work.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Main Content Row */}
                    <div className="grid grid-cols-12 gap-6 items-center">
                      {/* Icon & Emoji Section - 2 cols */}
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="text-5xl filter drop-shadow-lg">{work.emoji}</div>
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${work.gradient} rounded-2xl shadow-xl ${isSelected ? 'rotate-12' : 'rotate-6 group-hover:rotate-12'} transition-transform duration-500`}>
                          <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-slate-700" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title & Description - 4 cols */}
                      <div className="col-span-4 space-y-3">
                        <div>
                          <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-1">
                            {work.type.toUpperCase()}
                          </h3>
                          <p className="text-sm font-medium text-slate-500 tracking-wider uppercase">
                            {work.subtitle}
                          </p>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-light">
                          {work.explanation}
                        </p>
                      </div>
                      
                       {/* Work Breakdown - Centered */}
                      <div className="col-span-5 flex justify-center">
                        <div className="text-center bg-slate-50/50 rounded-xl p-6 border border-slate-200/30 min-w-[300px]">
                          <Activity className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                          <div className="text-2xl font-black text-slate-800 mb-2">{work.breakdown}</div>
                          <div className="text-sm text-slate-500 font-medium">Work Distribution</div>
                        </div>
                      </div>
                      
                      {/* Expand Arrow - 1 col */}
                      <div className="col-span-1 flex justify-end">
                        <ChevronRight className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                    
                    {/* Expanded Content - Gender-Specific Role Tables */}
                    {isSelected && (() => {
                      const roleData = detailedRoles.find(role => role.workType === work.type);
                      if (!roleData) return null;
                      
                      return (
                        <div className="mt-8 pt-8 border-t border-slate-200/50">
                          {/* Section Header */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center gap-4">
                              <div className="text-3xl">{roleData.emoji}</div>
                              <h4 className="text-2xl font-black text-slate-800 tracking-tight">
                                {roleData.intensity}
                              </h4>
                              <div className="text-3xl">{roleData.emoji}</div>
                            </div>
                          </div>

                          {/* Industry Header */}
                          <div className="text-center mb-8">
                            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${roleData.gradient} rounded-full shadow-lg`}>
                              <Target className="h-5 w-5 text-white" />
                              <span className="text-white font-bold text-lg">{roleData.industry}</span>
                            </div>
                          </div>

                          {/* Gender-Specific Tables */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Men's Table */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-6">
                                <Users2 className="h-6 w-6 text-blue-600" />
                                <h5 className="text-xl font-black text-slate-800 tracking-tight">
                                  MEN SPECIFIC CAREER ROLES
                                </h5>
                              </div>
                              
                              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 overflow-hidden shadow-lg">
                                <Table>
                                  <TableHeader>
                                    <TableRow className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-600">
                                      <TableHead className="text-white font-bold">Criteria</TableHead>
                                      <TableHead className="text-white font-bold">Details</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">🧠 Work Nature</TableCell>
                                      <TableCell className="font-medium">{roleData.intensity}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">🎯 Industry</TableCell>
                                      <TableCell className="font-medium">{roleData.industry}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">👨‍🔧 Role</TableCell>
                                      <TableCell className="font-medium text-blue-700">{roleData.menRole}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">💡 Why It Suits</TableCell>
                                      <TableCell className="font-medium">{roleData.menWhySuits}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">⭐ Alignment</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-lg">{roleData.align}/10</span>
                                          <div className="flex">{getStarRating(roleData.align)}</div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">🔢 Math Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold">{roleData.mathLoad}%</span>
                                          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.mathLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.mathLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-blue-50/50">
                                      <TableCell className="font-semibold text-slate-700">⚛️ Physics Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold">{roleData.physicsLoad}%</span>
                                          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.physicsLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.physicsLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>

                            {/* Women's Table */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="h-6 w-6 text-pink-600" />
                                <h5 className="text-xl font-black text-slate-800 tracking-tight">
                                  WOMEN SPECIFIC CAREER ROLES
                                </h5>
                              </div>
                              
                              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-200/50 overflow-hidden shadow-lg">
                                <Table>
                                  <TableHeader>
                                    <TableRow className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-500 hover:to-rose-600">
                                      <TableHead className="text-white font-bold">Criteria</TableHead>
                                      <TableHead className="text-white font-bold">Details</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">🧠 Work Nature</TableCell>
                                      <TableCell className="font-medium">{roleData.intensity}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">🎯 Industry</TableCell>
                                      <TableCell className="font-medium">{roleData.industry}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">👩‍💻 Role</TableCell>
                                      <TableCell className="font-medium text-pink-700">{roleData.womenRole}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">💡 Why It Suits</TableCell>
                                      <TableCell className="font-medium">{roleData.womenWhySuits}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">⭐ Alignment</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-lg">{roleData.align}/10</span>
                                          <div className="flex">{getStarRating(roleData.align)}</div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">🔢 Math Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold">{roleData.mathLoad}%</span>
                                          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.mathLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.mathLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-pink-50/50">
                                      <TableCell className="font-semibold text-slate-700">⚛️ Physics Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold">{roleData.physicsLoad}%</span>
                                          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.physicsLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.physicsLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>;
            })}
          </div>
        </div>

        {/* Detailed Roles Analysis - Swiss Card Design */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-purple-500" />
              <h3 className="text-3xl font-bold text-slate-800 tracking-wide">DETAILED ROLE ANALYSIS</h3>
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-lg text-slate-600 font-light">with Gender Alignment & Technical Requirements</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
          </div>

          
        </div>
      </div>
    </div>;
};
export default NatureOfWork;