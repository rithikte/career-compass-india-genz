import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Brain, Cog, Calculator, Wrench, Plane, Zap, Target, Clock, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export const BTechMechanical = () => {
  return <div className="space-y-8">
      {/* Hero Section with Core Topic */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-white rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6 sm:translate-y-9 sm:-translate-x-9 md:translate-y-12 md:-translate-x-12"></div>
        
        <div className="relative text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6">
            <Plane className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="font-semibold text-xs sm:text-sm md:text-base">B.Tech Mechanical Engineering</span>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Aviation - Industry</h1>
            
          </div>
        </div>
      </div>

      {/* Focus to Get Into Aviation Industry */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            Focus to Get Into Aviation Industry
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Essential Math & Physics foundation for aviation NVH careers
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Essential Math & Physics Foundation Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mb-6">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 font-bold text-sm sm:text-base md:text-lg">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">Category</span>
                </div>
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">Most Important Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">Usage in Aviation NVH Careers</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                <div className="font-bold text-blue-600 text-base sm:text-lg flex items-center gap-2 mb-2 sm:mb-0">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Math</span>
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Differential Equations</div>
                    <div>• Fourier/Laplace</div>
                    <div>• Matrices/Eigenvalues</div>
                    <div>• Calculus</div>
                  </div>
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Vibration modeling</div>
                    <div>• Signal filtering</div>
                    <div>• Modal analysis</div>
                    <div>• Response prediction</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                <div className="font-bold text-green-600 text-base sm:text-lg flex items-center gap-2 mb-2 sm:mb-0">
                  <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Physics</span>
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Vibrations & Oscillations</div>
                    <div>• Kinematics of Motion</div>
                    <div>• Material Properties</div>
                    <div>• Thermo-acoustics</div>
                  </div>
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Structural vibration</div>
                    <div>• Fatigue testing</div>
                    <div>• Noise/vibration diagnosis</div>
                    <div>• Damping systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          
        </CardContent>
      </Card>

      {/* Engineering Subjects Intensity Across 4 Years */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            Engineering Subjects Intensity Across 4 Years
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Detailed breakdown of Math & Physics topics by semester and their real-world applications
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Math Topics Table */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Math Topics</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-4 font-bold text-sm">
                  <div>Math Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Calculus (Diff + Int)</div>
                  <div className="text-gray-700">Sem 1–4</div>
                  <div className="font-bold text-blue-600">90%</div>
                  <div className="text-gray-700 text-sm">Thermo, Fluids, Vibrations, HMT</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Differential Equations</div>
                  <div className="text-gray-700">Sem 2–5</div>
                  <div className="font-bold text-green-600">85%</div>
                  <div className="text-gray-700 text-sm">Vibration, Dynamics, FEM</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Linear Algebra / Matrices</div>
                  <div className="text-gray-700">Sem 1, 3, 6</div>
                  <div className="font-bold text-purple-600">75%</div>
                  <div className="text-gray-700 text-sm">FEA, Design, System Modeling</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Fourier/Laplace</div>
                  <div className="text-gray-700">Sem 4–7</div>
                  <div className="font-bold text-orange-600">70%</div>
                  <div className="text-gray-700 text-sm">Signal systems, control</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Optimization / OR</div>
                  <div className="text-gray-700">Sem 5–6</div>
                  <div className="font-bold text-yellow-600">60%</div>
                  <div className="text-gray-700 text-sm">Manufacturing, Project planning</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Probability & Stats</div>
                  <div className="text-gray-700">Sem 5, 6</div>
                  <div className="font-bold text-red-600">50%</div>
                  <div className="text-gray-700 text-sm">Quality control, failure analysis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Physics Topics Table */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Physics Topics</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-4 font-bold text-sm">
                  <div>Physics Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Kinematics & Laws of Motion</div>
                  <div className="text-gray-700">Sem 1–3</div>
                  <div className="font-bold text-purple-600">70%</div>
                  <div className="text-gray-700 text-sm">Dynamics, Mechanisms</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Thermodynamics</div>
                  <div className="text-gray-700">Sem 2–6</div>
                  <div className="font-bold text-red-600">90%</div>
                  <div className="text-gray-700 text-sm">Engines, Refrigeration, HMT</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Fluid Mechanics</div>
                  <div className="text-gray-700">Sem 3–5</div>
                  <div className="font-bold text-blue-600">85%</div>
                  <div className="text-gray-700 text-sm">Pumps, Pipes, Simulations</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Material Properties</div>
                  <div className="text-gray-700">Sem 2–4</div>
                  <div className="font-bold text-orange-600">70%</div>
                  <div className="text-gray-700 text-sm">Strength of Materials</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Vibrations & Oscillations</div>
                  <div className="text-gray-700">Sem 5–6</div>
                  <div className="font-bold text-green-600">80%</div>
                  <div className="text-gray-700 text-sm">Dynamics of Machines</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Heat Transfer</div>
                  <div className="text-gray-700">Sem 4–6</div>
                  <div className="font-bold text-red-600">90%</div>
                  <div className="text-gray-700 text-sm">Design of heat exchangers, thermal systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chemistry Topics Table */}
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Chemistry Topics</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-4 font-bold text-sm">
                  <div>Chemistry Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage in Aviation Industry</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Thermodynamics (Chemistry)</div>
                  <div className="text-gray-700">Sem 2–4</div>
                  <div className="font-bold text-red-600">70%</div>
                  <div className="text-gray-700 text-sm">Jet fuel combustion, energy efficiency, material heat resistance</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Environmental Chemistry</div>
                  <div className="text-gray-700">Sem 5–7</div>
                  <div className="font-bold text-green-600">60%</div>
                  <div className="text-gray-700 text-sm">Sustainable aviation fuels, emission control, hydrogen propulsion research</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Waves & Oscillations Matter */}
      <Card className="border-2 border-primary/20">
        
        
      </Card>

      {/* What This Field Demands - Reality Check */}
      <Card className="border-2 border-red-200">
        
        
      </Card>

      {/* What You'll Study in College - B.Tech Mechanical (Aviation Industry Focus) */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            What You'll Study in College – B.Tech Mechanical (Aviation Industry Focus)
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Year-by-year curriculum breakdown with real-world aviation applications
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Subjects You'll Study</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  <span>What You'll Learn (Simple English)</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {/* 1st Year */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="font-bold text-blue-600 text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">1</div>
                  <span>1st Year</span>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Engineering Physics & Basics of Mechanics</div>
                  <div className="font-semibold text-gray-900">Engineering Mathematics I & II</div>
                  <div className="font-semibold text-gray-900">Engineering Graphics & Workshop</div>
                </div>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>How things move, shake, and fly (motion, forces, vibrations, energy).</p>
                  <p className="pt-2">Use math to calculate speed, acceleration, pressure, and flight.</p>
                  <p className="pt-2">How aircraft parts are shaped and made (design + manufacturing basics).</p>
                </div>
              </div>

              {/* 2nd Year */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="font-bold text-green-600 text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">2</div>
                  <span>2nd Year</span>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Strength of Materials</div>
                  <div className="font-semibold text-gray-900">Fluid Mechanics</div>
                  <div className="font-semibold text-gray-900">Thermodynamics</div>
                </div>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Strong & safe parts: How wings, body, and engines handle stress and vibration without breaking.</p>
                  <p className="pt-2">Air & fluids: How air creates lift/drag and how fuel/hydraulic fluids move.</p>
                  <p className="pt-2">Heat & power: How heat and energy make jet engines and turbines work.</p>
                </div>
              </div>

              {/* 3rd Year */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="font-bold text-purple-600 text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm">3</div>
                  <span>3rd Year</span>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Machine Dynamics & Vibrations</div>
                  <div className="font-semibold text-gray-900">Heat Transfer & Applied Thermodynamics</div>
                  <div className="font-semibold text-gray-900">Aerodynamics & Flight Mechanics</div>
                </div>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Vibrations & control: How engines, landing gear, and moving parts shake—and how we reduce it.</p>
                  <p className="pt-2">Temperature control: How we cool jet engines and keep cabins comfortable.</p>
                  <p className="pt-2">Flight & forces: How planes fly, how pressure acts, and how design changes performance.</p>
                </div>
              </div>

              {/* 4th Year */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="font-bold text-orange-600 text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">4</div>
                  <span>4th Year</span>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Aero-Mechanical Design Electives</div>
                  <div className="font-semibold text-gray-900">Project & Internship</div>
                </div>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Focus areas: aircraft strength, noise & vibration control, fatigue testing.</p>
                  <p className="pt-2">Do real work: design, analyze, and test aircraft systems on real projects.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What You'll Actually Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            What You'll Actually Master in 4 Years
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Real skills that aerospace companies need - not just theory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Sciences</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span><strong>Advanced Physics:</strong> Wave mechanics, fluid dynamics, thermodynamics for real aircraft systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span><strong>Engineering Mathematics:</strong> Complex analysis, differential equations that solve real flight problems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span><strong>Materials Science:</strong> How metals behave under extreme stress, heat, and vibration</span>
                </div>
              </div>
            </div>

            
          </div>
        </CardContent>
      </Card>

      {/* Decision Point - Are You Ready? */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            Decision Point - Are You Ready?
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Two paths ahead - choose wisely based on your commitment level
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Not Ready */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">If You're NOT Ready...</h3>
              </div>
              <div className="space-y-3 bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-base font-medium text-gray-800">❌ You'll pass exams but fail in labs</p>
                <p className="font-medium text-gray-800">❌ You'll blame professors when you struggle</p>
                <p className="font-medium text-gray-800">❌ You'll copy assignments without understanding</p>
                <p className="font-medium text-gray-800">❌ You'll graduate but feel lost in interviews</p>
                <div className="mt-4 pt-4 border-t border-red-300">
                  <p className="font-bold text-red-900">Result: Wasted 4 years and frustrated with engineering</p>
                </div>
              </div>
            </div>

            {/* Ready */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">If You ARE Ready...</h3>
              </div>
              <div className="space-y-3 bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-medium text-gray-800">✅ You'll enjoy solving complex problems</p>
                <p className="font-medium text-gray-800">✅ You'll build strong technical skills</p>
                <p className="font-medium text-gray-800">✅ You'll understand what you're learning</p>
                <p className="font-medium text-gray-800">✅ You'll be job-ready from any college</p>
                <div className="mt-4 pt-4 border-t border-green-300">
                  <p className="font-bold text-green-900">Result: Strong engineer ready for ISRO, HAL, or aerospace startups</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Call to Action */}
      <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-0">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-4">Your Decision Moment</h2>
            <p className="text-xl mb-6 opacity-90">
              This degree isn't about looking cool or following trends
            </p>
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold">
                "Choose B.Tech Mechanical only if you're ready to EARN it through dedication, precision, and genuine passion for aerospace engineering."
              </p>
            </div>
            <p className="text-lg opacity-80 mt-4">
              If you're still reading and feeling excited about the challenge → Continue exploring the career information below
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
};