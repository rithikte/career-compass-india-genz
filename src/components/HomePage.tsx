import React, { useState } from 'react';
import { MapPin, ArrowRight, Target, Filter, Award, Building2, ChevronDown } from 'lucide-react';
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
  return <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        {/* State Selection */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 min-w-[200px] justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  {selectedState || 'Select Your State'}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-200 max-h-60 overflow-y-auto z-50">
                {indianStates.map(state => <button key={state} onClick={() => {
              setSelectedState(state);
              setIsStateDropdownOpen(false);
            }} className="w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 first:rounded-t-2xl last:rounded-b-2xl transition-colors">
                    {state}
                  </button>)}
              </div>}
          </div>
        </div>

        {/* Main Tagline */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            A <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Game Changer</span>
            <br />
            in Degree Selection
            <br />
            <span className="text-blue-600">Like Never Before</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate your academic future with precision. Our AI-powered platform analyzes your interests, 
            aligns them with market trends, and guides you to the perfect degree and career path.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How Our Platform Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {workflowStages.map((stage, index) => {
            const Icon = stage.icon;
            return <Card key={stage.stage} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Stage Number */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stage.color} opacity-10 rounded-bl-3xl`}></div>
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} mb-6`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                          {stage.stage}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                    </div>
                    
                    {/* Connection Arrow */}
                    {index < workflowStages.length - 1 && <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>}
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Flow Lines for Mobile */}
          <div className="lg:hidden flex justify-center">
            <div className="flex flex-col items-center gap-4">
              {Array.from({
              length: workflowStages.length - 1
            }).map((_, index) => <div key={index} className="w-1 h-8 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"></div>)}
            </div>
          </div>
        </div>

        {/* Platform Workflows */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explore Career Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Career</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl">
                  Explore Career
                </Button>
              </CardContent>
            </Card>

            {/* Wished Degree Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Wished Degree</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl">
                  Wished Degree
                </Button>
              </CardContent>
            </Card>

            {/* Government Jobs Workflow */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Jobs</h3>
                </div>
                
                
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl">
                  Government Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands Across India
            </h2>
            <p className="text-xl text-gray-600">
              Join the revolution in career guidance and degree selection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            {/* Colleges Collaborated */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  1,247+
                </div>
                <div className="text-sm font-medium text-gray-700">Colleges</div>
                <div className="text-xs text-gray-500">Collaborated</div>
              </div>
            </div>

            {/* Institutes Collaborated */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  856+
                </div>
                <div className="text-sm font-medium text-gray-700">Institutes</div>
                <div className="text-xs text-gray-500">Collaborated</div>
              </div>
            </div>

            {/* Online Institutes */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  342+
                </div>
                <div className="text-sm font-medium text-gray-700">Online</div>
                <div className="text-xs text-gray-500">Institutes</div>
              </div>
            </div>

            {/* Degrees */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  189+
                </div>
                <div className="text-sm font-medium text-gray-700">Degrees</div>
                <div className="text-xs text-gray-500">Available</div>
              </div>
            </div>

            {/* Industries */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  467+
                </div>
                <div className="text-sm font-medium text-gray-700">Industries</div>
                <div className="text-xs text-gray-500">Covered</div>
              </div>
            </div>

            {/* Job Roles */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  2,834+
                </div>
                <div className="text-sm font-medium text-gray-700">Job Roles</div>
                <div className="text-xs text-gray-500">Men & Women</div>
              </div>
            </div>

            {/* Happy Students */}
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  15,678+
                </div>
                <div className="text-sm font-medium text-gray-700">Happy</div>
                <div className="text-xs text-gray-500">Students</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Explore Career Paths
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-gray-500 mt-6 text-sm">
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