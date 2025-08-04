import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  UserCheck,
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
  BarChart3,
  Activity,
  Clock,
  MapPin
} from 'lucide-react';

const NatureOfWork = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  
  const workTypes = [
    {
      icon: Monitor,
      type: "Desk-Based",
      subtitle: "Computer-Oriented",
      emoji: "🧑‍💻",
      explanation: "You work full-time on a computer using software tools, mostly sitting indoors in an office.",
      stats: { 
        percentage: "35%", 
        growth: "+12%", 
        avgSalary: "₹8-15 LPA",
        workHours: "9-6 Fixed",
        locations: "Metro Cities"
      },
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      lightBg: "bg-blue-50/80",
      borderColor: "border-blue-200/50",
      shadowColor: "shadow-blue-500/20"
    },
    {
      icon: Building2,
      type: "On-Field",
      subtitle: "Site-Based",
      emoji: "🏗️",
      explanation: "You go to real sites like factories, plants, or construction areas to check or fix machines and systems.",
      stats: { 
        percentage: "28%", 
        growth: "+8%", 
        avgSalary: "₹6-12 LPA",
        workHours: "Flexible",
        locations: "Industrial Areas"
      },
      gradient: "from-orange-500 via-orange-600 to-red-600",
      lightBg: "bg-orange-50/80",
      borderColor: "border-orange-200/50",
      shadowColor: "shadow-orange-500/20"
    },
    {
      icon: TestTube,
      type: "Lab/Equipment",
      subtitle: "Research-Based",
      emoji: "🧪",
      explanation: "You work with machines, circuits, or samples inside a lab using tools and technical equipment.",
      stats: { 
        percentage: "15%", 
        growth: "+15%", 
        avgSalary: "₹7-14 LPA",
        workHours: "9-5 Standard",
        locations: "R&D Centers"
      },
      gradient: "from-green-500 via-green-600 to-emerald-600",
      lightBg: "bg-green-50/80",
      borderColor: "border-green-200/50",
      shadowColor: "shadow-green-500/20"
    },
    {
      icon: Gamepad2,
      type: "Simulation",
      subtitle: "Virtual Modeling",
      emoji: "🎮",
      explanation: "You build and test virtual versions of machines or systems using simulation software before they're real.",
      stats: { 
        percentage: "8%", 
        growth: "+25%", 
        avgSalary: "₹10-18 LPA",
        workHours: "Flexible",
        locations: "Tech Hubs"
      },
      gradient: "from-purple-500 via-purple-600 to-violet-600",
      lightBg: "bg-purple-50/80",
      borderColor: "border-purple-200/50",
      shadowColor: "shadow-purple-500/20"
    },
    {
      icon: Users,
      type: "Client-Facing",
      subtitle: "Communication-Heavy",
      emoji: "🤝",
      explanation: "You explain technical ideas to clients, give demos, or manage project discussions with teams.",
      stats: { 
        percentage: "10%", 
        growth: "+18%", 
        avgSalary: "₹9-16 LPA",
        workHours: "Variable",
        locations: "Corporate Offices"
      },
      gradient: "from-pink-500 via-pink-600 to-rose-600",
      lightBg: "bg-pink-50/80",
      borderColor: "border-pink-200/50",
      shadowColor: "shadow-pink-500/20"
    },
    {
      icon: Settings,
      type: "Operations",
      subtitle: "Back-End Execution",
      emoji: "⚙️",
      explanation: "You handle the working systems behind a company like supply, production, or delivery — mostly coordination work.",
      stats: { 
        percentage: "20%", 
        growth: "+10%", 
        avgSalary: "₹7-13 LPA",
        workHours: "Standard",
        locations: "Manufacturing Hubs"
      },
      gradient: "from-yellow-500 via-yellow-600 to-amber-600",
      lightBg: "bg-yellow-50/80",
      borderColor: "border-yellow-200/50",
      shadowColor: "shadow-yellow-500/20"
    },
    {
      icon: Brain,
      type: "Strategy",
      subtitle: "Think-Tank Roles",
      emoji: "🧠",
      explanation: "You do planning, analysis, or design thinking to improve systems or develop new products and ideas.",
      stats: { 
        percentage: "5%", 
        growth: "+30%", 
        avgSalary: "₹12-22 LPA",
        workHours: "Strategic",
        locations: "Consulting Firms"
      },
      gradient: "from-indigo-500 via-indigo-600 to-blue-600",
      lightBg: "bg-indigo-50/80",
      borderColor: "border-indigo-200/50",
      shadowColor: "shadow-indigo-500/20"
    }
  ];

  const detailedRoles = [
    {
      workType: "Strategy / Think-Tank",
      emoji: "🧠",
      intensity: "70% Strategy – 30% Desk",
      industry: "Product R&D + Simulation Strategy",
      industryIcon: "📊",
      menRole: "Mechanical R&D Strategy Analyst",
      womenRole: "Simulation Data Research Associate",
      whySuits: "Men: Big-picture modeling + field insights\nWomen: Deep research & analytical desk work",
      align: 9.0,
      mathLoad: 85,
      physicsLoad: 60,
      gradient: "from-indigo-500 to-purple-600",
      lightBg: "bg-indigo-50/80",
      borderGlow: "border-indigo-300/50 shadow-indigo-200/50"
    },
    {
      workType: "Operations / Back-End",
      emoji: "⚙️",
      intensity: "60% Ops – 40% Desk",
      industry: "Supply Chain Optimization (Engineering)",
      industryIcon: "🏭",
      menRole: "Mechanical Systems Optimization Engineer",
      womenRole: "Plant Data Operations Analyst",
      whySuits: "Men: Live system flow optimization\nWomen: Stable coordination, process monitoring",
      align: 8.2,
      mathLoad: 80,
      physicsLoad: 40,
      gradient: "from-yellow-500 to-orange-600",
      lightBg: "bg-yellow-50/80",
      borderGlow: "border-yellow-300/50 shadow-yellow-200/50"
    },
    {
      workType: "Simulation / Virtual Modeling",
      emoji: "🎮",
      intensity: "80% Simulation – 20% Field",
      industry: "Digital Twin & System Modeling",
      industryIcon: "🧠",
      menRole: "Digital Twin Systems Developer",
      womenRole: "Model-Based Simulation Specialist",
      whySuits: "Men: Coding + model testing with partial site check\nWomen: Pure software-based modeling",
      align: 10.0,
      mathLoad: 90,
      physicsLoad: 75,
      gradient: "from-purple-500 to-violet-600",
      lightBg: "bg-purple-50/80",
      borderGlow: "border-purple-300/50 shadow-purple-200/50"
    },
    {
      workType: "Lab / Equipment-Based",
      emoji: "🧪",
      intensity: "70% Lab – 30% Desk",
      industry: "Mechatronics Testing & Robotics Labs",
      industryIcon: "🤖",
      menRole: "Automation Testing Engineer",
      womenRole: "Control Systems Lab Analyst",
      whySuits: "Men: Robotics + hardware calibration\nWomen: Sensor tuning & equipment-focused lab work",
      align: 8.8,
      mathLoad: 70,
      physicsLoad: 80,
      gradient: "from-green-500 to-emerald-600",
      lightBg: "bg-green-50/80",
      borderGlow: "border-green-300/50 shadow-green-200/50"
    },
    {
      workType: "Desk-Based / Computer-Oriented",
      emoji: "🧑‍💻",
      intensity: "90% Desk – 10% Meetings",
      industry: "CAD & Simulation Engineering",
      industryIcon: "💻",
      menRole: "CAE Engineer (Computer-Aided Engineering)",
      womenRole: "3D CAD Simulation Designer",
      whySuits: "Men: Full simulation & test validation\nWomen: Calm setup with creative CAD modeling",
      align: 9.5,
      mathLoad: 85,
      physicsLoad: 60,
      gradient: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50/80",
      borderGlow: "border-blue-300/50 shadow-blue-200/50"
    },
    {
      workType: "Client-Facing / Communication",
      emoji: "🤝",
      intensity: "60% Client – 40% Strategy",
      industry: "Techno-Commercial Mechanical Solutions",
      industryIcon: "🏢",
      menRole: "Simulation Strategy Consultant",
      womenRole: "Mechanical Forecast Analyst",
      whySuits: "Men: On-site delivery + client explanations\nWomen: Strategy planning + client report analysis",
      align: 6.8,
      mathLoad: 60,
      physicsLoad: 30,
      gradient: "from-pink-500 to-rose-600",
      lightBg: "bg-pink-50/80",
      borderGlow: "border-pink-300/50 shadow-pink-200/50"
    }
  ];

  const getStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 transition-all duration-300 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg' : 'text-gray-300'}`} 
      />
    ));
  };

  const getProgressGradient = (value: number) => {
    if (value >= 80) return 'from-red-500 to-red-600';
    if (value >= 60) return 'from-orange-500 to-orange-600';
    if (value >= 40) return 'from-yellow-500 to-yellow-600';
    return 'from-green-500 to-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Swiss Typography Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <Target className="h-8 w-8 text-indigo-600" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
          </div>
          
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mb-6 tracking-tight leading-none">
            NATURE OF
          </h1>
          <h2 className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-8 tracking-wider">
            WORK
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Understanding different work environments helps students and parents make 
              <span className="font-semibold text-indigo-600"> informed career decisions</span>
            </p>
          </div>
        </div>

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
              
              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                Seven distinct career paths with interactive insights into industry statistics, 
                growth potential, and work-life dynamics.
              </p>
              
              {/* Mini Statistics Dashboard */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/30">
                  <BarChart3 className="h-8 w-8 text-blue-500 mb-3" />
                  <div className="text-2xl font-black text-slate-800">7</div>
                  <div className="text-sm font-medium text-slate-600">Career Paths</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/30">
                  <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
                  <div className="text-2xl font-black text-slate-800">+15%</div>
                  <div className="text-sm font-medium text-slate-600">Avg Growth</div>
                </div>
              </div>
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
              
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden border-2 transition-all duration-700 cursor-pointer transform hover:scale-[1.02]
                    ${isSelected 
                      ? `${work.borderColor} bg-gradient-to-r ${work.gradient}/5 shadow-2xl scale-[1.02]` 
                      : 'border-slate-200/50 bg-white/80 hover:border-slate-300/50 shadow-xl hover:shadow-2xl'
                    }`}
                  onClick={() => setSelectedWork(isSelected ? null : index)}
                >
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
                      
                      {/* Quick Stats - 5 cols */}
                      <div className="col-span-5 grid grid-cols-5 gap-3">
                        <div className="text-center bg-slate-50/50 rounded-xl p-3 border border-slate-200/30">
                          <Activity className="h-4 w-4 text-slate-500 mx-auto mb-2" />
                          <div className="text-lg font-black text-slate-800">{work.stats.percentage}</div>
                          <div className="text-xs text-slate-500 font-medium">Market</div>
                        </div>
                        <div className="text-center bg-slate-50/50 rounded-xl p-3 border border-slate-200/30">
                          <TrendingUp className="h-4 w-4 text-green-500 mx-auto mb-2" />
                          <div className="text-lg font-black text-green-600">{work.stats.growth}</div>
                          <div className="text-xs text-slate-500 font-medium">Growth</div>
                        </div>
                        <div className="text-center bg-slate-50/50 rounded-xl p-3 border border-slate-200/30">
                          <Target className="h-4 w-4 text-blue-500 mx-auto mb-2" />
                          <div className="text-sm font-black text-slate-800">{work.stats.avgSalary}</div>
                          <div className="text-xs text-slate-500 font-medium">Salary</div>
                        </div>
                        <div className="text-center bg-slate-50/50 rounded-xl p-3 border border-slate-200/30">
                          <Clock className="h-4 w-4 text-purple-500 mx-auto mb-2" />
                          <div className="text-sm font-black text-slate-800">{work.stats.workHours}</div>
                          <div className="text-xs text-slate-500 font-medium">Hours</div>
                        </div>
                        <div className="text-center bg-slate-50/50 rounded-xl p-3 border border-slate-200/30">
                          <MapPin className="h-4 w-4 text-orange-500 mx-auto mb-2" />
                          <div className="text-sm font-black text-slate-800">{work.stats.locations}</div>
                          <div className="text-xs text-slate-500 font-medium">Location</div>
                        </div>
                      </div>
                      
                      {/* Expand Arrow - 1 col */}
                      <div className="col-span-1 flex justify-end">
                        <ChevronRight className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {isSelected && (
                      <div className="mt-8 pt-8 border-t border-slate-200/50 animate-fade-in">
                        <div className="grid grid-cols-3 gap-8">
                          {/* Detailed Stats */}
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/30">
                            <h4 className="text-lg font-bold text-slate-800 mb-4">Market Insights</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-slate-600">Job Availability</span>
                                <span className="font-semibold text-slate-800">{work.stats.percentage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Growth Rate</span>
                                <span className="font-semibold text-green-600">{work.stats.growth}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Starting Salary</span>
                                <span className="font-semibold text-blue-600">{work.stats.avgSalary}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Work Environment */}
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/30">
                            <h4 className="text-lg font-bold text-slate-800 mb-4">Work Style</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-slate-600">Schedule</span>
                                <span className="font-semibold text-slate-800">{work.stats.workHours}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Location Type</span>
                                <span className="font-semibold text-orange-600">{work.stats.locations}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Remote Options</span>
                                <span className="font-semibold text-purple-600">Available</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Career Path */}
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/30">
                            <h4 className="text-lg font-bold text-slate-800 mb-4">Career Progression</h4>
                            <div className="space-y-2">
                              <div className="text-sm text-slate-600">Entry Level → Senior → Lead → Manager</div>
                              <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className={`bg-gradient-to-r ${work.gradient} h-2 rounded-full`} style={{width: `${60 + index * 5}%`}}></div>
                              </div>
                              <div className="text-xs text-slate-500">Typical progression: 3-5 years</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
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

          <div className="space-y-12">
            {detailedRoles.map((role, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-2 ${role.borderGlow} shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white/80 backdrop-blur-sm hover:scale-[1.02]`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-10 relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl filter drop-shadow-lg">{role.emoji}</div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">
                          {role.workType.toUpperCase()}
                        </h3>
                        <Badge 
                          variant="outline" 
                          className={`text-sm font-medium border-2 bg-gradient-to-r ${role.gradient} border-transparent text-white`}
                        >
                          {role.intensity}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Alignment Score */}
                    <div className="mt-6 lg:mt-0 flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-slate-500 mb-2 tracking-widest uppercase">Alignment</div>
                        <div className="flex items-center gap-2 mb-2">
                          {getStarRating(role.align)}
                        </div>
                        <div className="text-2xl font-black text-slate-800">{role.align}/10</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column - Industry & Gender Roles */}
                    <div className="space-y-8">
                      {/* Industry Focus */}
                      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-200/30 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-80"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl filter drop-shadow-lg">{role.industryIcon}</div>
                            <div>
                              <h4 className="text-xl font-black text-slate-800 tracking-wide mb-1">INDUSTRY FOCUS</h4>
                              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                            </div>
                          </div>
                          <p className="text-slate-700 font-semibold text-lg leading-relaxed">
                            {role.industry}
                          </p>
                        </div>
                      </div>
                      
                      {/* Gender Roles - Enhanced Visual Separation */}
                      <div className="space-y-6">
                        {/* Men's Role */}
                        <div className="relative bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-600/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-300/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full -mr-16 -mt-16"></div>
                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                  <User className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">♂</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-black text-blue-800 tracking-wide mb-1">IDEAL ROLE FOR MEN</h4>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                              </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                              <p className="text-blue-900 font-semibold text-lg leading-relaxed">
                                {role.menRole}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Women's Role */}
                        <div className="relative bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-600/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-300/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full -mr-16 -mt-16"></div>
                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                  <UserCheck className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">♀</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-black text-pink-800 tracking-wide mb-1">IDEAL ROLE FOR WOMEN</h4>
                                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                              </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50">
                              <p className="text-pink-900 font-semibold text-lg leading-relaxed">
                                {role.womenRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Why It Suits & Technical Requirements */}
                    <div className="space-y-8">
                      {/* Why It Suits Each Gender - Enhanced */}
                      <div className="relative bg-gradient-to-br from-amber-500/5 via-yellow-500/5 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-amber-300/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full -mr-20 -mt-20"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
                              <Brain className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-black text-amber-800 tracking-wide mb-1">WHY IT SUITS EACH GENDER</h4>
                              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            {role.whySuits.split('\n').map((line, i) => {
                              const isForMen = line.toLowerCase().includes('men:');
                              const isForWomen = line.toLowerCase().includes('women:');
                              
                              return (
                                <div 
                                  key={i} 
                                  className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                                    isForMen 
                                      ? 'bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border-blue-200/50' 
                                      : isForWomen 
                                        ? 'bg-gradient-to-r from-pink-50/80 to-rose-50/80 border-pink-200/50'
                                        : 'bg-white/60 border-slate-200/50'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg ${
                                      isForMen 
                                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                                        : isForWomen 
                                          ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white'
                                          : 'bg-gradient-to-br from-slate-500 to-slate-600 text-white'
                                    }`}>
                                      {isForMen ? '♂' : isForWomen ? '♀' : '●'}
                                    </div>
                                    <p className={`font-semibold leading-relaxed flex-1 ${
                                      isForMen 
                                        ? 'text-blue-900' 
                                        : isForWomen 
                                          ? 'text-pink-900'
                                          : 'text-slate-800'
                                    }`}>
                                      {line}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      
                      {/* Technical Requirements */}
                      <div className="space-y-6">
                        {/* Math Load */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <Calculator className="h-6 w-6 text-blue-600" />
                            <span className="font-bold text-slate-800 tracking-wide">MATH LOAD</span>
                          </div>
                          <div className="relative">
                            <div className="bg-slate-200 rounded-full h-8 relative overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${getProgressGradient(role.mathLoad)} transition-all duration-1000 flex items-center justify-center relative`}
                                style={{ width: `${role.mathLoad}%` }}
                              >
                                <span className="text-white font-bold text-sm z-10">{role.mathLoad}%</span>
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Physics Load */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <Atom className="h-6 w-6 text-purple-600" />
                            <span className="font-bold text-slate-800 tracking-wide">PHYSICS LOAD</span>
                          </div>
                          <div className="relative">
                            <div className="bg-slate-200 rounded-full h-8 relative overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${getProgressGradient(role.physicsLoad)} transition-all duration-1000 flex items-center justify-center relative`}
                                style={{ width: `${role.physicsLoad}%` }}
                              >
                                <span className="text-white font-bold text-sm z-10">{role.physicsLoad}%</span>
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureOfWork;