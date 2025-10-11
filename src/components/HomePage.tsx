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

  return <div className="relative bg-white min-h-screen">
      {/* Swiss Design Hero Section - Phase 1-7 Complete */}
      <div className="min-h-screen flex items-center justify-center relative">
        
        {/* Top-Right State Selector - Fixed Position */}
        <div className="fixed top-8 right-8 z-30 hidden md:block">
          <div className="relative">
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="flex items-center gap-2 bg-white rounded-full shadow-sm border border-border hover:shadow-md transition-all duration-300 px-4 py-2 w-[180px]">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground truncate">
                {selectedState || 'Select State'}
              </span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ml-auto flex-shrink-0 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-lg border border-border max-h-64 overflow-y-auto z-50 animate-fade-in w-[200px]">
                <div className="p-2">
                  {indianStates.map(state => <button key={state} onClick={() => {
                setSelectedState(state);
                setIsStateDropdownOpen(false);
              }} className="w-full text-left px-3 py-2 hover:bg-muted text-foreground rounded-lg transition-all duration-200 text-sm font-medium">
                      {state}
                    </button>)}
                </div>
              </div>}
          </div>
        </div>

        {/* Hero Content - Centered with Massive Whitespace */}
        <div className="max-w-5xl mx-auto px-8 text-center">
          
          {/* Headline - Swiss Design Typography */}
          <h1 className="headline-swiss headline-hover mb-12 md:mb-16">
            <span className="text-foreground">
              India's <span className="accent-gradient">AI-Powered</span>
              <br />
              Career Platform
            </span>
          </h1>
          
          {/* Supporting Subtitle */}
          <p className="supporting-text max-w-2xl mx-auto mb-16 px-4">
            From subjects you love to careers you deserve
          </p>

          {/* CTA Button - Apple Style */}
          <button onClick={() => setIsCareerExplorerOpen(true)} className="btn-swiss-primary mb-16 md:mb-20">
            Start Your Journey
          </button>

          {/* Trust Badges - Minimal Pills */}
          <div className="flex flex-wrap gap-4 justify-center items-center px-4">
            <div className="badge-swiss flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>NEP 2020</span>
            </div>
            <div className="badge-swiss flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Skill India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-foreground mb-20">
          How It Works
        </h2>
        
        {/* Desktop Circular Layout */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="relative w-full aspect-square max-w-[800px] mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/20"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <div className="text-center text-white px-6">
                  <Sparkles className="w-16 h-16 mx-auto mb-3" />
                  <p className="font-bold text-lg leading-tight">AI-Powered Career Mapping</p>
                </div>
              </div>
            </div>

            {/* Workflow Items */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md border-4 border-white">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">Choose Your Stream</p>
                  <p className="text-xs text-muted-foreground">Pick Subjects You Enjoy</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[15%] right-[5%] transform translate-x-1/4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md border-4 border-white">
                  <Filter className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">Pick the Core Topics</p>
                  <p className="text-xs text-muted-foreground">Topics You're Interested In</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md border-4 border-white">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">Behind every click</p>
                  <p className="text-xs text-muted-foreground">Science calculates the perfect fit</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[15%] right-[5%] transform translate-x-1/4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md border-4 border-white">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">Get Your 2 Best-Fit</p>
                  <p className="text-xs text-muted-foreground">Degrees & Industries</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md border-4 border-white">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">See The Careers</p>
                  <p className="text-xs text-muted-foreground">You're Made For & Growth Ahead</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-md border-4 border-white">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="text-center bg-white rounded-2xl px-4 py-2 shadow-sm border border-border min-w-[200px]">
                  <p className="font-bold text-foreground text-sm mb-1">Science-Backed</p>
                  <p className="text-xs text-muted-foreground">Verified Data & Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Linear Layout */}
        <div className="lg:hidden space-y-6">
          {[{
          icon: Target,
          title: 'Choose Your Stream',
          desc: 'Pick Subjects You Enjoy',
          color: 'from-blue-500 to-cyan-500'
        }, {
          icon: Filter,
          title: 'Pick the Core Topics',
          desc: 'Topics You\'re Interested In',
          color: 'from-purple-500 to-pink-500'
        }, {
          icon: Zap,
          title: 'Behind every click',
          desc: 'Science calculates the perfect fit',
          color: 'from-green-500 to-emerald-500'
        }, {
          icon: Award,
          title: 'Get Your 2 Best-Fit',
          desc: 'Degrees & Industries',
          color: 'from-orange-500 to-red-500'
        }, {
          icon: TrendingUp,
          title: 'See The Careers',
          desc: 'You\'re Made For & Growth Ahead',
          color: 'from-indigo-500 to-purple-600'
        }, {
          icon: BookOpen,
          title: 'Science-Backed',
          desc: 'Verified Data & Research',
          color: 'from-teal-500 to-blue-500'
        }].map((item, index) => {
          const Icon = item.icon;
          return <div key={index} className="flex items-center gap-4 sm:gap-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-border">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                </div>
              </div>;
        })}
        </div>
      </div>

      {/* Platform Workflows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-muted">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-foreground mb-4">
          Built for India's New Education Era
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {/* Start My Degree Journey */}
          <Card className="relative overflow-hidden group border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-left mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Start My Degree Journey</h3>
                <p className="text-base text-muted-foreground mb-2">
                  <span className="font-semibold">For:</span> Students after Inter / +2
                </p>
              </div>
              
              <Button onClick={() => setIsCareerExplorerOpen(true)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Start My Degree Journey
              </Button>
            </CardContent>
          </Card>

          {/* Plan My Career Path */}
          <Card className="relative overflow-hidden group border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-left mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Plan My Career Path</h3>
                <p className="text-base text-muted-foreground mb-2">
                  <span className="font-semibold">For:</span> Students already in a degree
                </p>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Plan My Career Path
              </Button>
            </CardContent>
          </Card>

          {/* Explore Government Opportunities */}
          <Card className="relative overflow-hidden group border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="text-left mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Govt Opportunities</h3>
                <p className="text-base text-muted-foreground mb-2">
                  <span className="font-semibold">For:</span> Students looking for Govt jobs after degree
                </p>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Explore Government Opportunities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-6 py-2 mb-8 shadow-sm">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-foreground">Live Statistics</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight px-4">
            Trusted by <span className="accent-gradient">Thousands</span>
            <br />
            Across India
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join the revolution in career guidance and degree selection
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 mb-16">
          {animatedStats.map((stat, index) => {
          const Icon = stat.icon;
          return <div key={index} className="text-center group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative bg-white rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3`}>
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
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-6 py-3 shadow-sm border border-success/30 flex items-center gap-3">
            <Shield className="w-6 h-6 text-success" />
            <span className="font-bold text-foreground">100% Secure Platform</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Career Explorer Modal */}
      <CareerExplorer open={isCareerExplorerOpen} onOpenChange={setIsCareerExplorerOpen} />
    </div>;
};
