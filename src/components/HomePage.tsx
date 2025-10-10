import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Target, Filter, Award, Building2, ChevronDown, Sparkles, TrendingUp, Users, Shield, BookOpen, Zap } from 'lucide-react';
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
  const [isCareerExplorerOpen, setIsCareerExplorerOpen] = useState(false);
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
  return <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20">
        {/* Floating Trust Badges */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20 animate-float">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-3 sm:px-4 py-2 shadow-lg border border-blue-100 flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Trusted Platform</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 animate-float delay-1000">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-3 sm:px-4 py-2 shadow-lg border border-purple-100 flex items-center gap-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">AI Powered</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* State Selection with Enhanced Design */}
        <div className="flex justify-center mb-12 sm:mb-16 relative z-10 px-4">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="relative flex items-center gap-3 bg-white/95 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl border border-white/50 hover:shadow-2xl hover:bg-white transition-all duration-500 w-full justify-between group-hover:scale-105">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-base sm:text-lg truncate">
                  {selectedState || 'Select Your State'}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && <div className="absolute top-full mt-4 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 max-h-64 sm:max-h-80 overflow-y-auto z-50 animate-scale-in">
                <div className="p-2">
                  {indianStates.map((state, index) => <button key={state} onClick={() => {
                setSelectedState(state);
                setIsStateDropdownOpen(false);
              }} className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-gray-700 rounded-2xl transition-all duration-200 font-medium hover:scale-[1.02] group text-sm sm:text-base" style={{
                animationDelay: `${index * 20}ms`
              }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {state}
                      </div>
                    </button>)}
                </div>
              </div>}
          </div>
        </div>

        {/* Main Hero Section with Animated Typography */}
        <div className="text-center mb-12 sm:mb-20 relative px-4">
          {/* Floating geometric shapes */}
          <div className="absolute -top-16 sm:-top-20 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
          <div className="absolute -top-8 sm:-top-10 right-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rotate-45 animate-float delay-500"></div>
          <div className="absolute top-8 sm:top-10 left-1/6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-float delay-1000"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            <span className="relative inline-block">
              India's 1st{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                AI-Powered Platform
              </span>
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              That Maps Your Future from the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Subjects You Love
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed mb-4 sm:mb-6 animate-fade-in delay-300">
              From subjects you love to a future you deserve — made possible for the first time in India.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 sm:mb-8 animate-fade-in delay-500">
              Powered by AI. Backed by Research. Built for India
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in delay-700">
              We built career mapping on science, Just verified data that connects your subjects to your future.
            </p>
          </div>

          {/* Trust indicators with NEP and Skill India */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 animate-fade-in delay-900 px-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-green-200/50 flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="font-semibold text-xs sm:text-sm text-gray-700">Aligned with India's National Education Policy (NEP 2020)</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-blue-200/50 flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="font-semibold text-xs sm:text-sm text-gray-700">Aligned with India's Skill India Mission</span>
            </div>
          </div>
        </div>

        {/* Workflow Diagram - Swiss Design */}
        <div className="mb-12 sm:mb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header with Swiss Typography */}
            <div className="mb-12 sm:mb-20">
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-1 h-16 sm:h-20 bg-foreground"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight">
                  How the Platform Works
                </h2>
              </div>
            </div>
            
            {/* Swiss Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {workflowStages.map((stage, index) => {
                const Icon = stage.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={stage.stage} 
                    className={`
                      lg:col-span-${index === 2 ? '12' : '6'}
                      ${index === 2 ? 'lg:my-8' : ''}
                      border-l-4 border-foreground
                      ${index < workflowStages.length - 1 ? 'border-b' : ''}
                      border-border
                      p-6 sm:p-8 lg:p-10 xl:p-12
                      group
                      hover:bg-accent/5 transition-all duration-300
                      relative
                    `}
                  >
                    {/* Stage Number - Large Swiss Style */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-5 pointer-events-none">
                      <span className="text-[120px] sm:text-[150px] lg:text-[180px] font-black leading-none">
                        {stage.stage}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      {/* Minimal Icon Container */}
                      <div className="mb-6 sm:mb-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground transition-colors duration-300">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-foreground group-hover:text-background transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* Stage Number Label */}
                      <div className="mb-3 sm:mb-4">
                        <span className="text-sm sm:text-base font-mono font-semibold text-muted-foreground tracking-wider">
                          {stage.stage}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                        {stage.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {stage.description}
                      </p>
                      
                      {/* Geometric Accent */}
                      <div className="mt-6 sm:mt-8 flex gap-2">
                        <div className="w-12 h-1 bg-foreground"></div>
                        <div className="w-6 h-1 bg-foreground/50"></div>
                        <div className="w-3 h-1 bg-foreground/25"></div>
                      </div>
                    </div>
                    
                    {/* Connection Arrow - Minimalist */}
                    {index < workflowStages.length - 1 && index !== 2 && (
                      <div className="hidden lg:flex absolute bottom-6 right-6 items-center gap-2">
                        <div className="w-12 h-[2px] bg-foreground/30"></div>
                        <ArrowRight className="w-5 h-5 text-foreground/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Bottom Accent Line */}
            <div className="mt-12 sm:mt-16 flex items-center gap-2">
              <div className="flex-1 h-[2px] bg-foreground/10"></div>
              <div className="w-8 h-8 border-2 border-foreground"></div>
              <div className="flex-1 h-[2px] bg-foreground/10"></div>
            </div>
          </div>
        </div>

        {/* Platform Workflows */}
        <div className="mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Built for India's New Education Era
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Start My Degree Journey */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="text-left mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 sm:mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Start My Degree Journey</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    <span className="font-semibold">For:</span> Students after Inter / +2
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Find the right degree and career path from the subjects you love.
                  </p>
                </div>
                
                <Button 
                  onClick={() => setIsCareerExplorerOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base"
                >
                  Start My Degree Journey
                </Button>
              </CardContent>
            </Card>

            {/* Plan My Career Path */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="text-left mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-3 sm:mb-4">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Plan My Career Path</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    <span className="font-semibold">For:</span> Students already in a degree
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Explore top career options and industries for your course.
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base">
                  Plan My Career Path
                </Button>
              </CardContent>
            </Card>

            {/* Explore Government Opportunities */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="text-left mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-3 sm:mb-4">
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Explore Government Opportunities</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    <span className="font-semibold">For:</span> Students looking for Govt jobs after degree
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    See government exams and jobs that match your degree.
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base">
                  Explore Government Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section with Animated Counters */}
        <div className="mb-12 sm:mb-16 md:mb-20 relative px-2 sm:px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-cyan-50/50 rounded-2xl sm:rounded-3xl"></div>
          
          <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 py-8 sm:py-12 md:py-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 md:mb-8">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm font-semibold text-blue-600">Live Statistics</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thousands</span>
              <br />
              Across India
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Join the revolution in career guidance and degree selection with our proven track record
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 relative z-10 px-2 sm:px-0">
            {animatedStats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="text-center group animate-fade-in" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br ${stat.gradient} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    
                    {/* Animated Counter */}
                    <div className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300`}>
                      {stat.value.toLocaleString()}+
                    </div>
                    
                    {/* Labels */}
                    <div className="text-xs sm:text-sm md:text-base font-bold text-gray-800 mb-0.5 sm:mb-1">{stat.label}</div>
                    <div className="text-xs sm:text-xs md:text-sm text-gray-600 font-medium">{stat.sublabel}</div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-white/20 to-white/5 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-br from-white/10 to-white/5 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </div>;
          })}
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative z-10 px-2 sm:px-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg border border-green-200/50 flex items-center gap-2 sm:gap-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
              <span className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">100% Secure & Privacy-Protected Platform</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Career Explorer Modal */}
      <CareerExplorer open={isCareerExplorerOpen} onOpenChange={setIsCareerExplorerOpen} />
    </div>;
};