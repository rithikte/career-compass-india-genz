import React, { useState, useEffect } from 'react';
import { MapPin, ArrowDown, Target, Filter, Award, ChevronDown, Sparkles, TrendingUp, Users, Shield, BookOpen, Zap, Instagram, Twitter, Linkedin, AlertTriangle, Heart, Eye, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CareerExplorer } from './CareerExplorer';

const indianStates = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'];

const workflowStages = [
  {
    stage: 1,
    title: 'Subjects You Like',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    stage: 2,
    title: 'Core Topics You Enjoy',
    icon: Heart,
    color: 'from-purple-500 to-pink-500'
  },
  {
    stage: 3,
    title: 'Career Reality Engine™',
    icon: Target,
    color: 'from-amber-500 to-orange-500'
  },
  {
    stage: 4,
    title: '2 Best Degrees Only',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-500'
  },
  {
    stage: 5,
    title: 'Real Careers + Reality Check',
    icon: Briefcase,
    color: 'from-indigo-500 to-purple-600'
  }
];

const degreeWarnings = [
  { text: 'Degree alone does NOT guarantee a job', icon: AlertTriangle },
  { text: 'Colleges teach syllabus, not job reality', icon: BookOpen },
  { text: '70% students regret degree choice by 2nd year', icon: Users },
  { text: 'Wrong degree = 4 years wasted', icon: TrendingUp }
];

const platformPromises = [
  {
    dont: "We don't promise jobs",
    instead: "Instead, we show job reality early"
  },
  {
    dont: "We don't sell fake guarantees",
    instead: "Instead, we reduce risk before mistakes happen"
  },
  {
    dont: "We don't push trending degrees",
    instead: "Instead, we match the best fit degrees, not the market hype"
  }
];

export const HomePage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [showCareerExplorer, setShowCareerExplorer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-20 relative z-10">
        
        {/* Centered State Selector */}
        <div className="flex justify-center mb-6 sm:mb-10 z-30">
          <div className="relative group">
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="magnetic-container flex items-center gap-2 bg-white/95 backdrop-blur-xl rounded-full shadow-layer-2 border border-border/50 hover:shadow-layer-3 hover:scale-105 transition-all duration-300 px-5 py-2.5 sm:px-6 sm:py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {selectedState || 'Select State'}
              </span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && (
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-layer-3 border border-border/50 max-h-64 overflow-y-auto z-50 animate-spring-up min-w-[200px]">
                <div className="p-2">
                  {indianStates.map(state => (
                    <button key={state} onClick={() => {
                      setSelectedState(state);
                      setIsStateDropdownOpen(false);
                    }} className="w-full text-left px-3 py-2 hover:bg-accent/10 text-foreground rounded-lg transition-all duration-200 text-sm font-medium">
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-12 sm:mb-20 relative px-4">
          {/* Minimal Floating Shapes */}
          <div className="absolute -top-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float-gentle blur-sm will-change-transform hidden sm:block"></div>
          <div className="absolute top-10 right-1/3 w-16 h-16 bg-accent/10 animate-float-gentle will-change-transform hidden sm:block" style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animationDelay: '1s'
          }}></div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight px-2 sm:px-4 mb-6 sm:mb-8">
            <span className="animate-spring-up inline-block will-change-transform text-foreground animation-delay-100">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer-subtle">
                India's 1st AI-Powered
              </span>
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-200">
              Platform That Maps
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-300">
              Your Future from the
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-400">
              Subjects You Love
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-bold leading-relaxed animate-spring-up will-change-transform animation-delay-500">
              Pick Core Topics. Get 2 Best-Fit Degrees and 2 Best-Fit Careers.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 animate-spring-up animation-delay-500 px-4">
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-success to-success/60 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-layer-2 border border-success/30 flex items-center gap-2 sm:gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                <span className="font-bold text-sm sm:text-base text-foreground">Aligned with NEP 2020</span>
              </div>
            </div>
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-layer-2 border border-primary/30 flex items-center gap-2 sm:gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="font-bold text-sm sm:text-base text-foreground">Skill India Mission</span>
              </div>
            </div>
          </div>
        </div>

        {/* How the Platform Works - Workflow Section */}
        <div className="mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-center text-foreground mb-10 sm:mb-14">
            How the Platform Works
          </h2>
          
          {/* Vertical Flow Layout */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-5 max-w-lg mx-auto">
            {workflowStages.map((stage, index) => (
              <React.Fragment key={stage.stage}>
                <div className="w-full">
                  <div className={`bg-gradient-to-r ${stage.color} p-4 sm:p-5 rounded-2xl shadow-layer-2 transform hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-white/70 text-xs sm:text-sm font-medium">Step {stage.stage}</span>
                        <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">{stage.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between stages */}
                {index < workflowStages.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Degree Warning Section */}
        <div className="mb-12 sm:mb-20 px-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 sm:p-10 border border-red-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">
              Before choosing any degree, know this:
            </h2>
            
            {/* Warning Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {degreeWarnings.map((warning, index) => (
                <div 
                  key={index}
                  className="bg-white border-l-4 border-red-500 rounded-xl p-4 sm:p-5 shadow-layer-1 hover:shadow-layer-2 transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <warning.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <p className="text-foreground font-medium text-sm sm:text-base">{warning.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-layer-2">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Undergraduate Maps fixes this mistake before it happens.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Built for India's New Education Era */}
        <div className="mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-center text-foreground mb-6 sm:mb-10">
            Built for India's New Education Era
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Start My Degree Journey */}
            <Card className="magnetic-container relative overflow-hidden group hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Start My Degree Journey</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Plan My Career Path</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <span className="font-semibold">For:</span> Students already in a degree
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                  Plan My Career Path
                </Button>
              </CardContent>
            </Card>

            {/* Govt Opportunities */}
            <Card className="magnetic-container relative overflow-hidden group hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm md:col-span-2 lg:col-span-1 shadow-layer-2">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Govt Opportunities</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
        <div className="mb-12 sm:mb-20 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl"></div>
          
          <div className="relative z-10 text-center py-10 sm:py-16">
            <div className={`transform transition-all duration-1000 ${animatedStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10 max-w-xl mx-auto shadow-layer-2 border border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">15,678+</span>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-foreground font-bold">
                  "15,678+ students avoided wrong degree choices"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Promise Section */}
        <div className="mb-12 sm:mb-20 px-4">
          {/* Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
            {platformPromises.map((promise, index) => (
              <div 
                key={index}
                className="bg-white/95 rounded-2xl p-5 sm:p-6 shadow-layer-2 hover:shadow-layer-3 transition-shadow border border-border"
              >
                <div>
                  <p className="text-red-500 font-semibold text-sm sm:text-base mb-2 line-through opacity-70">
                    {promise.dont}
                  </p>
                  <p className="text-success font-bold text-sm sm:text-base flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    {promise.instead}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-6">
              "Every degree has strong careers. Most people are not aware of them."
            </p>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 max-w-2xl mx-auto shadow-layer-1">
              <p className="text-foreground font-semibold mb-4 text-sm sm:text-base">The real difference is:</p>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base">How well the degree fits the student</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base">How clearly the career path is understood</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base">How much effort the student puts in</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Statement */}
          <div className="text-center bg-gradient-to-r from-success to-emerald-500 text-white rounded-2xl p-6 sm:p-8 shadow-layer-2">
            <Eye className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4" />
            <p className="text-base sm:text-lg lg:text-xl font-bold">
              "Undergraduate Maps clearly shows the real career paths inside every degree."
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-10 sm:mb-16 px-4">
          <div className="flex justify-center">
            <div className="magnetic-container bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-layer-2 border border-success/30 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" />
              <span className="font-bold text-foreground text-sm sm:text-base text-center">100% Secure & Privacy-Protected Platform</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-5 sm:gap-6 py-6 sm:py-8 relative z-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
        </div>

        {/* Career Explorer Integration */}
        {showCareerExplorer && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-6xl my-8">
              <CareerExplorer />
              <button
                onClick={() => setShowCareerExplorer(false)}
                className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
