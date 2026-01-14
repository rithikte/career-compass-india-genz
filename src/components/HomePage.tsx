import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Target, Filter, Award, Building2, ChevronDown, Sparkles, TrendingUp, Users, Shield, BookOpen, Zap, Instagram, Twitter, Linkedin, Settings, Search, CheckSquare, FileText, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CareerExplorer } from './CareerExplorer';
const indianStates = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'];
const workflowStages = [{
  stage: '01',
  title: 'Choose Your Stream',
  description: 'Pick Subjects You Enjoy',
  icon: Target,
  color: 'from-blue-500 to-cyan-500'
}, {
  stage: '02',
  title: 'Pick the Core Topics',
  description: 'Pick the Core Topics You\'re Interested In',
  icon: Filter,
  color: 'from-purple-500 to-pink-500'
}, {
  stage: '03',
  title: 'Behind every click',
  description: 'Science calculates the perfect fit',
  icon: Award,
  color: 'from-green-500 to-emerald-500'
}, {
  stage: '04',
  title: 'Get Your 2 Best-Fit',
  description: 'Degrees & Industries',
  icon: Target,
  color: 'from-orange-500 to-red-500'
}, {
  stage: '05',
  title: 'See The Careers',
  description: 'You\'re Made For and the Growth Ahead',
  icon: Award,
  color: 'from-indigo-500 to-purple-500'
}];
export const HomePage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const [showCareerExplorer, setShowCareerExplorer] = useState(false);
  useEffect(() => {
    // Animate stats when component mounts
    const timer = setTimeout(() => {
      setAnimatedStats([{
        value: 247,
        label: 'Colleges',
        sublabel: 'Collaborated',
        gradient: 'from-blue-600 to-cyan-600',
        icon: Shield
      }, {
        value: 156,
        label: 'Institutes',
        sublabel: 'Partnered',
        gradient: 'from-purple-600 to-pink-600',
        icon: Building2
      }, {
        value: 142,
        label: 'Online Institutes',
        sublabel: 'Listed',
        gradient: 'from-green-600 to-emerald-600',
        icon: BookOpen
      }, {
        value: 189,
        label: 'Degrees',
        sublabel: 'Available',
        gradient: 'from-orange-600 to-red-600',
        icon: Award
      }, {
        value: 117,
        label: 'Industries',
        sublabel: 'Covered',
        gradient: 'from-indigo-600 to-purple-600',
        icon: TrendingUp
      }, {
        value: 834,
        label: 'Job Roles',
        sublabel: 'Covered',
        gradient: 'from-teal-600 to-blue-600',
        icon: Users
      }, {
        value: 15678,
        label: 'Students',
        sublabel: 'Guided',
        gradient: 'from-pink-600 to-rose-600',
        icon: Sparkles
      }]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen overflow-hidden">
      {/* Subtle Background Elements - Reduced Visual Noise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Hero Section with Enhanced Vertical Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 relative z-10">
        
        {/* Centered State Selector */}
        <div className="flex justify-center mb-8 sm:mb-12 z-30">
          <div className="relative group">
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="magnetic-container flex items-center gap-2 bg-white/95 backdrop-blur-xl rounded-full shadow-layer-2 border border-border/50 hover:shadow-layer-3 hover:scale-105 transition-all duration-300 px-6 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {selectedState || 'Select State'}
              </span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-layer-3 border border-border/50 max-h-64 overflow-y-auto z-50 animate-spring-up min-w-[200px]">
                <div className="p-2">
                  {indianStates.map(state => <button key={state} onClick={() => {
                setSelectedState(state);
                setIsStateDropdownOpen(false);
              }} className="w-full text-left px-3 py-2 hover:bg-accent/10 text-foreground rounded-lg transition-all duration-200 text-sm font-medium">
                      {state}
                    </button>)}
                </div>
              </div>}
          </div>
        </div>

        {/* Main Hero Content - Swiss Design Typography */}
        <div className="text-center mb-16 sm:mb-24 relative px-4 mt-12 sm:mt-0">
          {/* Minimal Floating Shapes - Only 3 */}
          <div className="absolute -top-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float-gentle blur-sm will-change-transform"></div>
          <div className="absolute top-10 right-1/3 w-16 h-16 bg-accent/10 animate-float-gentle will-change-transform" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-12 h-32 bg-primary/8 animate-float-gentle" style={{
          animationDelay: '1.5s'
        }}></div>
          
          {/* Headline - Mostly Black with ONE Gradient Word */}
          <h1 className="headline-interactive text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight px-4 mb-10 sm:mb-12">
            <span className="animate-spring-up inline-block will-change-transform text-foreground animation-delay-100">
              From{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer-subtle">
                Core Topics
              </span>
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-200">
              2 Best-Fit Degrees
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-300">
              2 Best-Fit Careers
            </span>
          </h1>
          
          {/* Subtitle - Clear Hierarchy */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-bold leading-relaxed mb-6 animate-spring-up will-change-transform animation-delay-500">
              From subjects you love to a future you deserve
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed animate-spring-up will-change-transform animation-delay-500">
              Powered by AI. Backed by Research. Built for India.
            </p>
          </div>

          {/* Enlarged Trust Badges - More Visual Weight */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 animate-spring-up animation-delay-500 px-4">
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-success to-success/60 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-layer-2 border border-success/30 flex items-center gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Shield className="w-6 h-6 text-success" />
                <span className="font-bold text-base text-foreground">Aligned with NEP 2020</span>
              </div>
            </div>
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-layer-2 border border-primary/30 flex items-center gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Zap className="w-6 h-6 text-primary" />
                <span className="font-bold text-base text-foreground">Skill India Mission</span>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex justify-center animate-scroll-bounce mt-16">
            
          </div>
        </div>

        {/* Degree Truth Section - Swiss Design */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Main Statement */}
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    Every degree has strong careers.
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    Most people are not aware of them.
                  </p>
                </div>
              </div>

              {/* Right Column - The Difference */}
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  The real difference is
                </p>
                
                <div className="space-y-0">
                  {/* Point 1 */}
                  <div className="group border-t border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        01
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How well the degree fits the student
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="group border-t border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        02
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How clearly the career path is understood
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="group border-t border-b border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        03
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How much effort the student puts in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How the Platform Works - Swiss Design */}
        <div className="mb-16 sm:mb-24 px-4">
          {/* Swiss 12-Column Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left 6 Columns - Text Content */}
              <div className="lg:col-span-6 flex flex-col justify-center py-8 lg:py-16">
                {/* Logo/Brand */}
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-8 lg:mb-12">
                  Undergraduate Maps
                </p>
                
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-6 lg:mb-8">
                  Choose the Right Degree — Backed by Science
                </h2>
                
                {/* Subtext */}
                <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed mb-8 lg:mb-10 max-w-xl">
                  From stream selection to best-fit degrees and real career outcomes.
                </p>
                
                {/* CTA Button - Academic Green */}
                <div>
                  <Button 
                    onClick={() => setShowCareerExplorer(true)}
                    className="bg-success hover:bg-success/90 text-white font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 shadow-layer-1 hover:shadow-layer-2"
                  >
                    Find My Best-Fit Career
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right 6 Columns - System Illustration */}
              <div className="lg:col-span-6 relative">
                <div className="relative py-8 lg:py-12">
                  
                  {/* Main Illustration Container */}
                  <div className="relative flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                    
                    {/* Left Input Cards */}
                    <div className="w-full lg:w-auto flex flex-col gap-3 lg:gap-4">
                      {/* Stream Selection Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1 min-w-[200px]">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Choose Your Stream</p>
                        <div className="flex flex-wrap gap-2">
                          {['MPC', 'BiPC', 'MEC', 'CEC'].map((stream) => (
                            <span key={stream} className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-lg">
                              {stream}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Subjects Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Pick Subjects You Enjoy</p>
                        <div className="space-y-2">
                          {['Maths', 'Physics', 'Biology', 'Commerce'].map((subject) => (
                            <div key={subject} className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-border rounded flex items-center justify-center">
                                <CheckSquare className="w-3 h-3 text-success" />
                              </div>
                              <span className="text-sm text-foreground">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Core Topics Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Pick Core Topics</p>
                        <p className="text-xs text-muted-foreground">Topics you're interested in</p>
                      </div>
                    </div>

                    {/* Center - Career Fit Engine */}
                    <div className="w-full lg:w-auto flex flex-col items-center gap-3 lg:gap-4 lg:self-center">
                      {/* Center Overlay Label */}
                      <p className="text-[10px] sm:text-xs text-muted-foreground italic text-center max-w-[180px] leading-relaxed hidden lg:block">
                        Behind every click — Science calculates the perfect fit
                      </p>
                      
                      {/* Main Engine Card */}
                      <div className="bg-success text-white rounded-xl p-5 sm:p-6 shadow-layer-2 text-center min-w-[180px] sm:min-w-[200px]">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Settings className="w-5 h-5" />
                          <Search className="w-4 h-4" />
                        </div>
                        <p className="text-sm sm:text-base font-bold mb-1">Career Fit Engine</p>
                        <p className="text-[10px] sm:text-xs opacity-90">Science-powered decision system</p>
                      </div>
                      
                      {/* Center Label - Mobile */}
                      <p className="text-[10px] sm:text-xs text-muted-foreground italic text-center max-w-[200px] leading-relaxed lg:hidden">
                        Behind every click — Science calculates the perfect fit
                      </p>
                    </div>

                    {/* Right Output Cards */}
                    <div className="w-full lg:w-auto flex flex-col gap-3 lg:gap-4">
                      {/* Best-Fit Degrees Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1 min-w-[200px]">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">2 Best-Fit Degrees</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-success/10 text-success text-xs font-medium rounded-lg border border-success/20">
                            Degree 1
                          </span>
                          <span className="px-3 py-1.5 bg-success/10 text-success text-xs font-medium rounded-lg border border-success/20">
                            Degree 2
                          </span>
                        </div>
                      </div>
                      
                      {/* Industries & Careers Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Industries & Careers</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Careers you're made for & growth ahead</p>
                          </div>
                          <BarChart3 className="w-5 h-5 text-success flex-shrink-0" />
                        </div>
                      </div>
                      
                      {/* Science-Backed Card */}
                      <div className="bg-white border border-border rounded-xl p-4 shadow-layer-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Science-Backed</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Verified Data & Research</p>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <FileText className="w-4 h-4 text-success" />
                            <Shield className="w-4 h-4 text-success" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Platform Workflows */}
        <div className="mb-16 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-foreground mb-4">
            Built for India's New Education Era
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Start My Degree Journey */}
            <Card className="magnetic-container relative overflow-hidden group hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2">
              <CardContent className="p-8 my-0 px-[30px]">
                <div className="text-left mb-6">
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">Start My Degree Journey</h3>
                  <p className="text-base text-muted-foreground mb-2 mx-[40px]">
                    <span className="font-semibold">For:</span> Students after Inter / +2
                  </p>
                  
                </div>
                
                <Button onClick={() => setShowCareerExplorer(true)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                  Start My Degree Journey
                </Button>
              </CardContent>
            </Card>

            {/* Plan My Career Path */}
            <Card className="magnetic-container relative overflow-hidden group hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2">
              <CardContent className="p-8">
                <div className="text-left mb-6">
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 my-0 mx-[25px]">Plan My Career Path</h3>
                  <p className="text-base text-muted-foreground mb-2 mx-[25px]">
                    <span className="font-semibold">For:</span> Students already in a degree
                  </p>
                  
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                  Plan My Career Path
                </Button>
              </CardContent>
            </Card>

            {/* Explore Government Opportunities */}
            <Card className="magnetic-container relative overflow-hidden group hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm md:col-span-2 lg:col-span-1 shadow-layer-2">
              <CardContent className="p-8">
                <div className="text-left mb-6">
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 mx-[30px]">Govt Opportunities</h3>
                  <p className="text-base text-muted-foreground mb-2">
                    <span className="font-semibold">For:</span> Students looking for Govt jobs after degree
                  </p>
                  
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                  Explore Government Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16 sm:mb-24 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-cyan-50/30 rounded-3xl"></div>
          
          <div className="relative z-10 text-center mb-12 sm:mb-16 py-12 sm:py-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-border rounded-full px-6 py-2 mb-8 shadow-layer-1">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-foreground">Live Statistics</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight px-4">
              Trusted by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thousands</span>
              <br />
              Across India
            </h2>
            
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 mb-12 sm:mb-16 relative z-10">
            {animatedStats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="magnetic-container text-center group animate-spring-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 lg:p-6 shadow-layer-2 hover:shadow-layer-3 transition-all duration-500 border border-border overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}></div>
                    
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 shadow-layer-1`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value.toLocaleString()}+
                    </div>
                    
                    <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.sublabel}</div>
                  </div>
                </div>;
          })}
          </div>
          
          {/* Trust Indicator */}
          <div className="flex justify-center relative z-10 my-0 px-4 sm:px-0 py-0 mx-auto w-full">
            <div className="magnetic-container bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-layer-2 border border-success/30 flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" />
              <span className="font-bold text-foreground text-xs sm:text-sm md:text-base text-center">100% Secure & Privacy-Protected Platform</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 py-8 relative z-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
        </div>

        {/* Career Explorer Integration */}
        {showCareerExplorer && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-6xl my-8">
              <CareerExplorer />
              <button onClick={() => setShowCareerExplorer(false)} className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>}

      </div>

    </div>;
};