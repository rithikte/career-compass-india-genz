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
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-enhanced"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-enhanced delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-enhanced delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20 relative z-10">
        {/* Floating Trust Badges with Enhanced Animations */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20 animate-slide-up-fade">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-3 sm:px-4 py-2 shadow-elegant border border-success/20 flex items-center gap-2 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-success animate-scale-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Trusted Platform</span>
            <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
          </div>
        </div>

        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 animate-slide-up-fade delay-200">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-3 sm:px-4 py-2 shadow-elegant border border-accent/20 flex items-center gap-2 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-scale-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">AI Powered</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
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

        {/* Main Hero Section with Enhanced Animated Typography */}
        <div className="text-center mb-12 sm:mb-20 relative px-4">
          {/* Enhanced Floating geometric shapes with varied animations */}
          <div className="absolute -top-16 sm:-top-20 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float-enhanced blur-sm will-change-transform"></div>
          <div className="absolute -top-8 sm:-top-10 right-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/15 to-primary/15 animate-float-enhanced delay-500 will-change-transform" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="absolute top-8 sm:top-10 left-1/6 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-light/20 to-accent/20 rounded-full animate-float-enhanced delay-1000 blur-sm will-change-transform"></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-light/15 to-primary/15 rotate-12 animate-float-enhanced delay-700" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-6 h-20 sm:w-8 sm:h-28 bg-gradient-to-br from-accent/10 to-primary/10 animate-rotate-slow"></div>
          
          {/* Particle effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-enhanced"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            <span className="relative inline-block animate-slide-up-fade will-change-transform">
              India's 1st{' '}
              <span className="relative inline-block">
                <span className="text-shimmer bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent bg-[length:200%_auto]">
                  AI-Powered Platform
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10 animate-glow-pulse"></span>
              </span>
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-slide-up-fade delay-300 inline-block will-change-transform">
              That Maps Your Future from the
            </span>
            <br />
            <span className="relative inline-block animate-slide-up-fade delay-500 will-change-transform">
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Subjects You Love
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 animate-shimmer"></span>
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed mb-4 sm:mb-6 animate-slide-up-fade delay-600 will-change-transform">
              From subjects you love to a future you deserve — made possible for the first time in India.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 sm:mb-8 animate-slide-up-fade delay-800 will-change-transform">
              Powered by AI. Backed by Research. Built for India
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-slide-up-fade delay-1000 will-change-transform">
              We built career mapping on science, Just verified data that connects your subjects to your future.
            </p>
          </div>

          {/* Enhanced Trust indicators with NEP and Skill India */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4">
            <div className="relative group animate-fade-in-scale delay-1200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-success to-success-foreground rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-elegant border border-success/30 flex items-center gap-2 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-success animate-bounce-subtle" />
                <span className="font-semibold text-xs sm:text-sm text-gray-700">Aligned with India's National Education Policy (NEP 2020)</span>
              </div>
            </div>
            <div className="relative group animate-fade-in-scale delay-1500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-elegant border border-primary/30 flex items-center gap-2 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-bounce-subtle" />
                <span className="font-semibold text-xs sm:text-sm text-gray-700">Aligned with India's Skill India Mission</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce-subtle delay-1500 mt-12">
            <div className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-primary transition-colors">
              <span className="text-sm font-medium">Explore More</span>
              <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
            </div>
          </div>
        </div>

        {/* Workflow Diagram - Circular Layout */}
        <div className="mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-16">
            How the Platform Works
          </h2>
          
          {/* Desktop Circular Layout */}
          <div className="hidden lg:block relative max-w-5xl mx-auto">
            <div className="relative w-full aspect-square max-w-[800px] mx-auto">
              {/* Dashed Circle Border */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-300/40"></div>
              
              {/* Center Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white px-6">
                    <Sparkles className="w-16 h-16 mx-auto mb-3" />
                    <p className="font-bold text-lg leading-tight">AI-Powered Career Mapping</p>
                  </div>
                </div>
              </div>

              {/* Workflow Items Positioned in Circle */}
              {/* Item 1 - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl border-4 border-white">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-cyan-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">Choose Your Stream</p>
                    <p className="text-xs text-gray-600">Pick Subjects You Enjoy</p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Top Right */}
              <div className="absolute top-[15%] right-[5%] transform translate-x-1/4">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl border-4 border-white">
                    <Filter className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-purple-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">Pick the Core Topics</p>
                    <p className="text-xs text-gray-600">Topics You're Interested In</p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Right */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl border-4 border-white">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-green-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">Behind every click</p>
                    <p className="text-xs text-gray-600">Science calculates the perfect fit</p>
                  </div>
                </div>
              </div>

              {/* Item 4 - Bottom Right */}
              <div className="absolute bottom-[15%] right-[5%] transform translate-x-1/4">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl border-4 border-white">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-orange-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">Get Your 2 Best-Fit</p>
                    <p className="text-xs text-gray-600">Degrees & Industries</p>
                  </div>
                </div>
              </div>

              {/* Item 5 - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl border-4 border-white">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-indigo-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">See The Careers</p>
                    <p className="text-xs text-gray-600">You're Made For & Growth Ahead</p>
                  </div>
                </div>
              </div>

              {/* Item 6 - Left */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-xl border-4 border-white">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-teal-100 min-w-[200px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">Science-Backed</p>
                    <p className="text-xs text-gray-600">Verified Data & Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Linear Layout */}
          <div className="lg:hidden space-y-6">
            {[
              { icon: Target, title: 'Choose Your Stream', desc: 'Pick Subjects You Enjoy', color: 'from-blue-500 to-cyan-500' },
              { icon: Filter, title: 'Pick the Core Topics', desc: 'Topics You\'re Interested In', color: 'from-purple-500 to-pink-500' },
              { icon: Zap, title: 'Behind every click', desc: 'Science calculates the perfect fit', color: 'from-green-500 to-emerald-500' },
              { icon: Award, title: 'Get Your 2 Best-Fit', desc: 'Degrees & Industries', color: 'from-orange-500 to-red-500' },
              { icon: TrendingUp, title: 'See The Careers', desc: 'You\'re Made For & Growth Ahead', color: 'from-indigo-500 to-purple-600' },
              { icon: BookOpen, title: 'Science-Backed', desc: 'Verified Data & Research', color: 'from-teal-500 to-blue-500' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4 sm:gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  </div>
                  {index < 5 && (
                    <div className="hidden sm:block">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
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