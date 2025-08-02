import React from 'react';
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
  TrendingUp
} from 'lucide-react';

const NatureOfWork = () => {
  const workTypes = [
    {
      icon: Monitor,
      type: "Desk-Based",
      subtitle: "Computer-Oriented",
      emoji: "🧑‍💻",
      explanation: "You work full-time on a computer using software tools, mostly sitting indoors in an office.",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      lightBg: "bg-blue-50/80",
      borderColor: "border-blue-200/50",
      shadowColor: "shadow-blue-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: Building2,
      type: "On-Field",
      subtitle: "Site-Based",
      emoji: "🏗️",
      explanation: "You go to real sites like factories, plants, or construction areas to check or fix machines and systems.",
      gradient: "from-orange-500 via-orange-600 to-red-600",
      lightBg: "bg-orange-50/80",
      borderColor: "border-orange-200/50",
      shadowColor: "shadow-orange-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: TestTube,
      type: "Lab/Equipment",
      subtitle: "Research-Based",
      emoji: "🧪",
      explanation: "You work with machines, circuits, or samples inside a lab using tools and technical equipment.",
      gradient: "from-green-500 via-green-600 to-emerald-600",
      lightBg: "bg-green-50/80",
      borderColor: "border-green-200/50",
      shadowColor: "shadow-green-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: Gamepad2,
      type: "Simulation",
      subtitle: "Virtual Modeling",
      emoji: "🎮",
      explanation: "You build and test virtual versions of machines or systems using simulation software before they're real.",
      gradient: "from-purple-500 via-purple-600 to-violet-600",
      lightBg: "bg-purple-50/80",
      borderColor: "border-purple-200/50",
      shadowColor: "shadow-purple-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: Users,
      type: "Client-Facing",
      subtitle: "Communication-Heavy",
      emoji: "🤝",
      explanation: "You explain technical ideas to clients, give demos, or manage project discussions with teams.",
      gradient: "from-pink-500 via-pink-600 to-rose-600",
      lightBg: "bg-pink-50/80",
      borderColor: "border-pink-200/50",
      shadowColor: "shadow-pink-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: Settings,
      type: "Operations",
      subtitle: "Back-End Execution",
      emoji: "⚙️",
      explanation: "You handle the working systems behind a company like supply, production, or delivery — mostly coordination work.",
      gradient: "from-yellow-500 via-yellow-600 to-amber-600",
      lightBg: "bg-yellow-50/80",
      borderColor: "border-yellow-200/50",
      shadowColor: "shadow-yellow-500/20",
      hoverScale: "hover:scale-105"
    },
    {
      icon: Brain,
      type: "Strategy",
      subtitle: "Think-Tank Roles",
      emoji: "🧠",
      explanation: "You do planning, analysis, or design thinking to improve systems or develop new products and ideas.",
      gradient: "from-indigo-500 via-indigo-600 to-blue-600",
      lightBg: "bg-indigo-50/80",
      borderColor: "border-indigo-200/50",
      shadowColor: "shadow-indigo-500/20",
      hoverScale: "hover:scale-105"
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

        {/* Work Types Overview - Swiss Grid Layout */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-orange-500" />
              <h3 className="text-3xl font-bold text-slate-800 tracking-wide">WORK ENVIRONMENT TYPES</h3>
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {workTypes.map((work, index) => {
              const IconComponent = work.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm ${work.shadowColor} shadow-2xl ${work.hoverScale} hover:shadow-3xl transition-all duration-500 cursor-pointer`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    {/* Large Emoji Display */}
                    <div className="mb-6">
                      <div className="text-6xl mb-4 filter drop-shadow-lg">{work.emoji}</div>
                    </div>
                    
                    {/* Geometric Icon Container */}
                    <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${work.gradient} rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
                      <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-slate-700" />
                      </div>
                    </div>
                    
                    {/* Swiss Typography */}
                    <div className="space-y-2 mb-6">
                      <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
                        {work.type.toUpperCase()}
                      </h3>
                      <p className="text-sm font-light text-slate-500 tracking-widest uppercase">
                        {work.subtitle}
                      </p>
                    </div>
                    
                    {/* Clean Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {work.explanation}
                    </p>
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Industry & Roles */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Industry Focus */}
                      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-2xl">{role.industryIcon}</div>
                          <h4 className="text-lg font-bold text-slate-800 tracking-wide">INDUSTRY FOCUS</h4>
                        </div>
                        <p className="text-slate-700 font-medium text-lg">
                          {role.industry}
                        </p>
                      </div>
                      
                      {/* Gender Roles */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <User className="h-5 w-5 text-blue-600" />
                            <h4 className="font-bold text-blue-800 tracking-wide">ROLE FOR MEN</h4>
                          </div>
                          <p className="text-blue-900 font-medium leading-relaxed">
                            {role.menRole}
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <UserCheck className="h-5 w-5 text-pink-600" />
                            <h4 className="font-bold text-pink-800 tracking-wide">ROLE FOR WOMEN</h4>
                          </div>
                          <p className="text-pink-900 font-medium leading-relaxed">
                            {role.womenRole}
                          </p>
                        </div>
                      </div>
                      
                      {/* Why It Suits */}
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border-2 border-amber-200/50">
                        <h4 className="font-bold text-amber-800 mb-4 tracking-wide">WHY IT SUITS EACH GENDER</h4>
                        <div className="space-y-2">
                          {role.whySuits.split('\n').map((line, i) => (
                            <p key={i} className="text-amber-900 font-medium">
                              {line}
                            </p>
                          ))}
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