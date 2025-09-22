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
    breakdown: "70% Strategy – 30% Desk"
  }, {
    icon: Settings,
    type: "Operations", 
    subtitle: "Back-End Execution",
    emoji: "⚙️",
    explanation: "You handle the working systems behind a company like supply, production, or delivery — mostly coordination work.",
    breakdown: "60% Ops – 40% Desk"
  }, {
    icon: Gamepad2,
    type: "Simulation",
    subtitle: "Virtual Modeling",
    emoji: "🎮",
    explanation: "You build and test virtual versions of machines or systems using simulation software before they're real.",
    breakdown: "80% Simulation – 20% Field"
  }, {
    icon: TestTube,
    type: "Lab/Equipment",
    subtitle: "Research-Based", 
    emoji: "🧪",
    explanation: "You work with machines, circuits, or samples inside a lab using tools and technical equipment.",
    breakdown: "70% Lab – 30% Desk"
  }, {
    icon: Monitor,
    type: "Desk-Based",
    subtitle: "Computer-Oriented",
    emoji: "🧑‍💻",
    explanation: "You work full-time on a computer using software tools, mostly sitting indoors in an office.",
    breakdown: "90% Desk – 10% Meetings"
  }, {
    icon: Users,
    type: "Client-Facing",
    subtitle: "Communication-Heavy",
    emoji: "🤝",
    explanation: "You explain technical ideas to clients, give demos, or manage project discussions with teams.",
    breakdown: "60% Client – 40% Strategy"
  }, {
    icon: Building2,
    type: "On-Field",
    subtitle: "Site-Based",
    emoji: "🏗️", 
    explanation: "You go to real sites like factories, plants, or construction areas to check or fix machines and systems.",
    breakdown: "80% Field – 20% Office"
  }];

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
    return Array.from({ length: 5 }, (_, i) => 
      <Star key={i} className={`h-4 w-4 transition-all duration-300 ${i < Math.floor(rating) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} />
    );
  };

  const getProgressGradient = (value: number) => {
    if (value >= 80) return 'from-destructive to-destructive/80';
    if (value >= 60) return 'from-warning to-warning/80';
    if (value >= 40) return 'from-accent to-accent/80';
    return 'from-success to-success/80';
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Swiss Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Swiss Typography Header */}
        <div className="mb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-primary"></div>
              <Target className="w-6 h-6 text-primary" />
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
              WORK ENVIRONMENT
              <br />
              <span className="text-primary">TYPES</span>
            </h1>
            
            <p className="text-xl font-light text-muted-foreground mb-8 leading-relaxed">
              From Your Desk to the Factory Floor
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seven distinct career paths with interactive insights into industry statistics, 
              growth potential, and work-life dynamics.
            </p>
          </div>
        </div>

        {/* Work Environment Types - Responsive Grid */}
        <div className="mb-32">
          {/* Interactive Responsive Cards */}
          <div className="space-y-8">
            {workTypes.map((work, index) => {
            const IconComponent = work.icon;
            const isSelected = selectedWork === index;
            return <Card key={index} className={`group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer hover-scale
                    ${isSelected ? 'border-primary bg-primary/5 shadow-elegant' : 'border-border bg-card hover:border-primary/50 shadow-soft hover:shadow-elegant'}`} 
                    onClick={() => setSelectedWork(isSelected ? null : index)}>
                  
                  <CardContent className="p-6 md:p-8 relative z-10">
                    {/* Mobile Layout (< md) */}
                    <div className="block md:hidden space-y-6">
                      {/* Mobile Header */}
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{work.emoji}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-foreground tracking-tight mb-1">
                            {work.type.toUpperCase()}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                            {work.subtitle}
                          </p>
                        </div>
                        <div className={`w-12 h-12 bg-primary rounded-xl flex items-center justify-center ${isSelected ? 'rotate-12' : 'rotate-6 group-hover:rotate-12'} transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      {/* Mobile Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {work.explanation}
                      </p>
                      
                      {/* Mobile Work Breakdown */}
                      <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                        <Activity className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                        <div className="text-lg font-black text-foreground text-center mb-1">{work.breakdown}</div>
                        <div className="text-xs text-muted-foreground text-center">Work Distribution</div>
                      </div>
                      
                      {/* Mobile Expand Arrow */}
                      <div className="flex justify-center">
                        <ChevronDown className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {/* Desktop Layout (>= md) */}
                    <div className="hidden md:grid grid-cols-12 gap-6 items-center">
                      {/* Icon & Emoji Section */}
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="text-5xl">{work.emoji}</div>
                        <div className={`w-16 h-16 bg-primary rounded-xl flex items-center justify-center ${isSelected ? 'rotate-12' : 'rotate-6 group-hover:rotate-12'} transition-transform duration-300 shadow-soft`}>
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <div className="col-span-4 space-y-3">
                        <div>
                          <h3 className="text-2xl font-black text-foreground tracking-tight mb-1">
                            {work.type.toUpperCase()}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                            {work.subtitle}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {work.explanation}
                        </p>
                      </div>
                      
                      {/* Work Breakdown */}
                      <div className="col-span-5 flex justify-center">
                        <div className="text-center bg-secondary/50 rounded-xl p-6 border border-border min-w-[280px]">
                          <Activity className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                          <div className="text-2xl font-black text-foreground mb-2">{work.breakdown}</div>
                          <div className="text-sm text-muted-foreground font-medium">Work Distribution</div>
                        </div>
                      </div>
                      
                      {/* Expand Arrow */}
                      <div className="col-span-1 flex justify-end">
                        <ChevronRight className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>

                    {/* Expanded Content - Gender-Specific Role Tables */}
                    {isSelected && (() => {
                      const roleData = detailedRoles.find(role => role.workType === work.type);
                      if (!roleData) return null;
                      
                      return (
                        <div className="mt-8 pt-8 border-t border-border">
                          {/* Section Header */}
                          <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-4 mb-4">
                              <div className="text-3xl">{roleData.emoji}</div>
                              <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                                {roleData.intensity}
                              </h4>
                              <div className="text-3xl">{roleData.emoji}</div>
                            </div>

                            {/* Industry Badge */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary rounded-full shadow-soft">
                              <Target className="h-4 w-4 text-primary-foreground" />
                              <span className="text-primary-foreground font-bold text-sm md:text-base">{roleData.industry}</span>
                            </div>
                          </div>

                          {/* Responsive Tables Grid */}
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                            {/* Men's Table */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-6">
                                <Users2 className="h-5 w-5 text-primary" />
                                <h5 className="text-lg font-black text-foreground tracking-tight">
                                  MEN SPECIFIC ROLES
                                </h5>
                              </div>
                              
                              <div className="bg-secondary/30 rounded-xl border border-border overflow-hidden shadow-soft">
                                <Table>
                                  <TableHeader>
                                    <TableRow className="bg-primary hover:bg-primary">
                                      <TableHead className="text-primary-foreground font-bold text-xs md:text-sm">Criteria</TableHead>
                                      <TableHead className="text-primary-foreground font-bold text-xs md:text-sm">Details</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🧠 Work Nature</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.intensity}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🎯 Industry</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.industry}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">👨‍🔧 Role</TableCell>
                                      <TableCell className="font-medium text-primary text-xs md:text-sm">{roleData.menRole}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">💡 Why It Suits</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.menWhySuits}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">⭐ Alignment</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-sm md:text-base">{roleData.align}/10</span>
                                          <div className="flex">{getStarRating(roleData.align)}</div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🔢 Math Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold text-xs md:text-sm">{roleData.mathLoad}%</span>
                                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.mathLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.mathLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-secondary/50">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">⚛️ Physics Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold text-xs md:text-sm">{roleData.physicsLoad}%</span>
                                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
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
                                <UserCheck className="h-5 w-5 text-accent" />
                                <h5 className="text-lg font-black text-foreground tracking-tight">
                                  WOMEN SPECIFIC ROLES
                                </h5>
                              </div>
                              
                              <div className="bg-accent/10 rounded-xl border border-border overflow-hidden shadow-soft">
                                <Table>
                                  <TableHeader>
                                    <TableRow className="bg-accent hover:bg-accent">
                                      <TableHead className="text-accent-foreground font-bold text-xs md:text-sm">Criteria</TableHead>
                                      <TableHead className="text-accent-foreground font-bold text-xs md:text-sm">Details</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🧠 Work Nature</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.intensity}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🎯 Industry</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.industry}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">👩‍💻 Role</TableCell>
                                      <TableCell className="font-medium text-accent text-xs md:text-sm">{roleData.womenRole}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">💡 Why It Suits</TableCell>
                                      <TableCell className="font-medium text-xs md:text-sm">{roleData.womenWhySuits}</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">⭐ Alignment</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-sm md:text-base">{roleData.align}/10</span>
                                          <div className="flex">{getStarRating(roleData.align)}</div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">🔢 Math Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold text-xs md:text-sm">{roleData.mathLoad}%</span>
                                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                            <div 
                                              className={`h-full bg-gradient-to-r ${getProgressGradient(roleData.mathLoad)} transition-all duration-500`}
                                              style={{ width: `${roleData.mathLoad}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-accent/5">
                                      <TableCell className="font-semibold text-foreground text-xs md:text-sm">⚛️ Physics Load</TableCell>
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <span className="font-bold text-xs md:text-sm">{roleData.physicsLoad}%</span>
                                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
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

        {/* Instructions Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-secondary/30 rounded-xl p-8 border border-border">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-black text-foreground mb-4">DETAILED ANALYSIS</h3>
            <p className="text-muted-foreground mb-4">
              Click on any work environment type above to view detailed role breakdowns, 
              gender-specific career paths, and technical requirements.
            </p>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureOfWork;