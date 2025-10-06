import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Target, Filter, Award, Building2, ChevronDown, Sparkles, TrendingUp, Users, Shield, BookOpen, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
const indianStates = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'];
const workflowStages = [{
  stage: '01',
  title: 'Choose Stream',
  description: 'Select your preferred academic stream',
  icon: Target,
  color: 'from-blue-500 to-cyan-500'
}, {
  stage: '02',
  title: 'Choose Core Topic',
  description: 'Pick your area of specialization',
  icon: Filter,
  color: 'from-purple-500 to-pink-500'
}, {
  stage: '03',
  title: 'Core Topic Analysis',
  description: 'Deep dive into subject expertise',
  icon: Award,
  color: 'from-green-500 to-emerald-500'
}, {
  stage: '04',
  title: 'Accuracy Filtration',
  description: 'AI-powered precision matching',
  icon: Target,
  color: 'from-orange-500 to-red-500'
}, {
  stage: '05',
  title: 'Best Aligned Degrees',
  description: 'Top 2 perfect degree matches',
  icon: Award,
  color: 'from-indigo-500 to-purple-500'
}, {
  stage: '06',
  title: 'Industry Alignment',
  description: 'Matching industries for your degree',
  icon: Building2,
  color: 'from-teal-500 to-blue-500'
}];
export const HomePage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  useEffect(() => {
    // Animate stats when component mounts
    const timer = setTimeout(() => {
      setAnimatedStats([{
        value: 1247,
        label: 'Colleges',
        sublabel: 'Collaborated',
        gradient: 'from-blue-600 to-cyan-600',
        icon: Shield
      }, {
        value: 856,
        label: 'Institutes',
        sublabel: 'Collaborated',
        gradient: 'from-purple-600 to-pink-600',
        icon: Building2
      }, {
        value: 342,
        label: 'Online',
        sublabel: 'Institutes',
        gradient: 'from-green-600 to-emerald-600',
        icon: BookOpen
      }, {
        value: 189,
        label: 'Degrees',
        sublabel: 'Available',
        gradient: 'from-orange-600 to-red-600',
        icon: Award
      }, {
        value: 467,
        label: 'Industries',
        sublabel: 'Covered',
        gradient: 'from-indigo-600 to-purple-600',
        icon: TrendingUp
      }, {
        value: 2834,
        label: 'Job Roles',
        sublabel: 'Men & Women',
        gradient: 'from-teal-600 to-blue-600',
        icon: Users
      }, {
        value: 15678,
        label: 'Happy',
        sublabel: 'Students',
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
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              India's Most Advanced Career Platform
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 mb-6 sm:mb-8 leading-[0.9] tracking-tight">
            <div className="relative inline-block group">
              <span className="relative z-10">A </span>
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                Game Changer
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <br />
            <span className="relative inline-block group">
              in Degree Selection
              <div className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </span>
            <br />
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Like Never Before
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed mb-4 sm:mb-6 animate-fade-in delay-300">
              Navigate your academic future with <span className="text-blue-600 font-semibold">purpose</span>
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate-fade-in delay-500">
              Our AI-powered platform analyzes your interests, aligns them with market trends, 
              and guides you to the perfect degree and career path with unmatched accuracy.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-12 animate-fade-in delay-700">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="font-semibold text-sm sm:text-base">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="font-semibold text-sm sm:text-base">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="font-semibold text-sm sm:text-base">Built for Gen Z</span>
            </div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-12 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-16">
            How Our Platform Works
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {workflowStages.map((stage, index) => {
            const Icon = stage.icon;
            return <Card key={stage.stage} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    {/* Stage Number */}
                    <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stage.color} opacity-10 rounded-bl-3xl`}></div>
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stage.color} mb-4 sm:mb-6`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                          {stage.stage}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{stage.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed font-medium text-sm sm:text-base">{stage.description}</p>
                    </div>
                    
                    {/* Connection Arrow */}
                    {index < workflowStages.length - 1 && <div className="hidden lg:block absolute -right-3 sm:-right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-3 sm:border-4 border-blue-200 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                        </div>
                      </div>}
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Flow Lines for Mobile */}
          <div className="lg:hidden flex justify-center">
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              {Array.from({
              length: workflowStages.length - 1
            }).map((_, index) => <div key={index} className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"></div>)}
            </div>
          </div>
        </div>

        {/* Platform Workflows */}
        <div className="mb-12 sm:mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Explore Career Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 sm:mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Explore Career</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base">
                  Explore Career
                </Button>
              </CardContent>
            </Card>

            {/* Wished Degree Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-3 sm:mb-4">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Wished Degree</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base">
                  Wished Degree
                </Button>
              </CardContent>
            </Card>

            {/* Government Jobs Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-3 sm:mb-4">
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Government Jobs</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base">
                  Government Jobs
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
              <span className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Government Approved</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg border border-blue-200/50 flex items-center gap-2 sm:gap-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
              <span className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">AI-Verified Data</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg border border-purple-200/50 flex items-center gap-2 sm:gap-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-500 flex-shrink-0" />
              <span className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Real Student Reviews</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Explore Career Paths
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          
          <p className="text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm">
            Start your journey towards the perfect degree and career alignment
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
    </div>;
};