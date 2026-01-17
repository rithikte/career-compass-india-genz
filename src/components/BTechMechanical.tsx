import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Brain, Cog, Wrench, Target, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export const BTechMechanical = () => {
  return <div className="space-y-8">
      {/* Hero Section with Core Topic */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-white rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6 sm:translate-y-9 sm:-translate-x-9 md:translate-y-12 md:-translate-x-12"></div>
        
        <div className="relative text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6">
            
            <span className="font-semibold text-xs sm:text-sm md:text-base">B.Tech Mechanical Engineering</span>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Aviation - Industry</h1>
            
          </div>
        </div>
      </div>

      {/* Focus to Get Into Aviation Industry */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            <span>Focus to Get Into Aviation Industry</span>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg font-semibold">
            Essential Math & Physics foundation for aviation NVH careers
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 md:p-6">
          {/* Essential Math & Physics Foundation Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mb-6">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 font-bold">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <span className="text-xs sm:text-sm md:text-base">Category</span>
                </div>
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <span className="text-xs sm:text-sm md:text-base">Most Important Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm md:text-base">Usage in Aviation NVH Careers</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                <div className="font-bold text-blue-600 text-sm sm:text-base md:text-lg flex items-center gap-2 mb-2 sm:mb-0">
                  <span>Math</span>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Differential Equations</div>
                    <div>• Fourier/Laplace</div>
                    <div>• Matrices/Eigenvalues</div>
                    <div>• Calculus</div>
                  </div>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Vibration modeling</div>
                    <div>• Signal filtering</div>
                    <div>• Modal analysis</div>
                    <div>• Response prediction</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                <div className="font-bold text-green-600 text-sm sm:text-base md:text-lg flex items-center gap-2 mb-2 sm:mb-0">
                  <span>Physics</span>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <div className="space-y-1 rounded-md">
                    <div>• Vibrations & Oscillations</div>
                    <div>• Kinematics of Motion</div>
                    <div>• Material Properties</div>
                    <div>• Thermo-acoustics</div>
                  </div>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm md:text-base">
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
        </CardContent>
      </Card>

      {/* Engineering Subjects Intensity Across 4 Years */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            <span>Engineering Subjects Intensity Across 4 Years</span>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg font-semibold">
            Detailed breakdown of Math & Physics topics by semester and their real-world applications
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 md:p-6">
          {/* Math Topics Table */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Math Topics</h3>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 p-3 sm:p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 font-bold text-xs sm:text-sm">
                  <div>Math Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Calculus (Diff + Int)</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 1–4</div>
                  <div className="font-bold text-blue-600 text-xs sm:text-sm">90%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Thermo, Fluids, Vibrations, HMT</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Differential Equations</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 2–5</div>
                  <div className="font-bold text-green-600 text-xs sm:text-sm">85%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Vibration, Dynamics, FEM</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Linear Algebra / Matrices</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 1, 3, 6</div>
                  <div className="font-bold text-purple-600 text-xs sm:text-sm">75%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">FEA, Design, System Modeling</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Fourier/Laplace</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 4–7</div>
                  <div className="font-bold text-orange-600 text-xs sm:text-sm">70%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Signal systems, control</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Optimization / OR</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 5–6</div>
                  <div className="font-bold text-yellow-600 text-xs sm:text-sm">60%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Manufacturing, Project planning</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Probability & Stats</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 5, 6</div>
                  <div className="font-bold text-red-600 text-xs sm:text-sm">50%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Quality control, failure analysis</div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {[
                { topic: "Calculus (Diff + Int)", sems: "Sem 1–4", intensity: "90%", color: "text-blue-600", usage: "Thermo, Fluids, Vibrations, HMT" },
                { topic: "Differential Equations", sems: "Sem 2–5", intensity: "85%", color: "text-green-600", usage: "Vibration, Dynamics, FEM" },
                { topic: "Linear Algebra / Matrices", sems: "Sem 1, 3, 6", intensity: "75%", color: "text-purple-600", usage: "FEA, Design, System Modeling" },
                { topic: "Fourier/Laplace", sems: "Sem 4–7", intensity: "70%", color: "text-orange-600", usage: "Signal systems, control" },
                { topic: "Optimization / OR", sems: "Sem 5–6", intensity: "60%", color: "text-yellow-600", usage: "Manufacturing, Project planning" },
                { topic: "Probability & Stats", sems: "Sem 5, 6", intensity: "50%", color: "text-red-600", usage: "Quality control, failure analysis" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">{item.topic}</span>
                    <span className={`font-bold ${item.color} text-sm`}>{item.intensity}</span>
                  </div>
                  <div className="text-xs text-gray-600">{item.sems}</div>
                  <div className="text-xs text-gray-700">{item.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Physics Topics Table */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Physics Topics</h3>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 p-3 sm:p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 font-bold text-xs sm:text-sm">
                  <div>Physics Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Kinematics & Laws of Motion</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 1–3</div>
                  <div className="font-bold text-purple-600 text-xs sm:text-sm">70%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Dynamics, Mechanisms</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Thermodynamics</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 2–6</div>
                  <div className="font-bold text-red-600 text-xs sm:text-sm">90%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Engines, Refrigeration, HMT</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Fluid Mechanics</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 3–5</div>
                  <div className="font-bold text-blue-600 text-xs sm:text-sm">85%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Pumps, Pipes, Simulations</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Material Properties</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 2–4</div>
                  <div className="font-bold text-orange-600 text-xs sm:text-sm">70%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Strength of Materials</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Vibrations & Oscillations</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 5–6</div>
                  <div className="font-bold text-green-600 text-xs sm:text-sm">80%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Dynamics of Machines</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Heat Transfer</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 4–6</div>
                  <div className="font-bold text-red-600 text-xs sm:text-sm">90%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Design of heat exchangers, thermal systems</div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {[
                { topic: "Kinematics & Laws of Motion", sems: "Sem 1–3", intensity: "70%", color: "text-purple-600", usage: "Dynamics, Mechanisms" },
                { topic: "Thermodynamics", sems: "Sem 2–6", intensity: "90%", color: "text-red-600", usage: "Engines, Refrigeration, HMT" },
                { topic: "Fluid Mechanics", sems: "Sem 3–5", intensity: "85%", color: "text-blue-600", usage: "Pumps, Pipes, Simulations" },
                { topic: "Material Properties", sems: "Sem 2–4", intensity: "70%", color: "text-orange-600", usage: "Strength of Materials" },
                { topic: "Vibrations & Oscillations", sems: "Sem 5–6", intensity: "80%", color: "text-green-600", usage: "Dynamics of Machines" },
                { topic: "Heat Transfer", sems: "Sem 4–6", intensity: "90%", color: "text-red-600", usage: "Design of heat exchangers, thermal systems" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">{item.topic}</span>
                    <span className={`font-bold ${item.color} text-sm`}>{item.intensity}</span>
                  </div>
                  <div className="text-xs text-gray-600">{item.sems}</div>
                  <div className="text-xs text-gray-700">{item.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chemistry Topics Table */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Chemistry Topics</h3>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 p-3 sm:p-4 shadow-sm">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 font-bold text-xs sm:text-sm">
                  <div>Chemistry Topic</div>
                  <div>Sems Covered</div>
                  <div>Intensity Peak (%)</div>
                  <div>Core Usage in Aviation Industry</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Thermodynamics (Chemistry)</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 2–4</div>
                  <div className="font-bold text-red-600 text-xs sm:text-sm">70%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Jet fuel combustion, energy efficiency, material heat resistance</div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Environmental Chemistry</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sem 5–7</div>
                  <div className="font-bold text-green-600 text-xs sm:text-sm">60%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">Sustainable aviation fuels, emission control, hydrogen propulsion research</div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {[
                { topic: "Thermodynamics (Chemistry)", sems: "Sem 2–4", intensity: "70%", color: "text-red-600", usage: "Jet fuel combustion, energy efficiency, material heat resistance" },
                { topic: "Environmental Chemistry", sems: "Sem 5–7", intensity: "60%", color: "text-green-600", usage: "Sustainable aviation fuels, emission control, hydrogen propulsion research" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-rose-50 to-white border border-rose-100 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">{item.topic}</span>
                    <span className={`font-bold ${item.color} text-sm`}>{item.intensity}</span>
                  </div>
                  <div className="text-xs text-gray-600">{item.sems}</div>
                  <div className="text-xs text-gray-700">{item.usage}</div>
                </div>
              ))}
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
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl leading-tight">
            <span>What You'll Study in College – B.Tech Mechanical (Aviation Industry Focus)</span>
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
              Estimate
            </span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg font-semibold">
            Year-by-year curriculum breakdown with real-world aviation applications
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 md:p-6">
          {/* Mobile: Individual Cards, Desktop: Enhanced Table */}
          
          {/* Desktop & Tablet View - Hidden on Mobile */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 shadow-lg">
            <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white p-4 lg:p-6">
              <div className="grid grid-cols-12 gap-4 font-bold text-sm lg:text-base">
                <div className="col-span-2 flex items-center gap-2">
                  
                  <span>Year</span>
                </div>
                <div className="col-span-5 flex items-center gap-2">
                  
                  <span>Subjects You'll Study</span>
                </div>
                <div className="col-span-5 flex items-center gap-2">
                  
                  <span>What You'll Learn</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {/* 1st Year */}
              <div className="grid grid-cols-12 gap-4 p-4 lg:p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 group">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-sm">
                    1
                  </div>
                </div>
                <div className="col-span-5 space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Engineering Physics & Basics of Mechanics</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Engineering Mathematics I & II</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Engineering Graphics & Workshop</div>
                </div>
                <div className="col-span-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm lg:text-base">
                  <p className="text-base font-medium">How things move, shake, and fly (motion, forces, vibrations, energy).</p>
                  <p className="pt-2 font-medium">Use math to calculate speed, acceleration, pressure, and flight.</p>
                  <p className="pt-2 font-medium">How aircraft parts are shaped and made (design + manufacturing basics).</p>
                </div>
              </div>

              {/* 2nd Year */}
              <div className="grid grid-cols-12 gap-4 p-4 lg:p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 group">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-sm">
                    2
                  </div>
                </div>
                <div className="col-span-5 space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Strength of Materials</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Fluid Mechanics</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Thermodynamics</div>
                </div>
                <div className="col-span-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm lg:text-base">
                  <p className="font-semibold">Strong & safe parts: How wings, body, and engines handle stress and vibration without breaking.</p>
                  <p className="pt-2 font-medium">Air & fluids: How air creates lift/drag and how fuel/hydraulic fluids move.</p>
                  <p className="pt-2 font-medium">Heat & power: How heat and energy make jet engines and turbines work.</p>
                </div>
              </div>

              {/* 3rd Year */}
              <div className="grid grid-cols-12 gap-4 p-4 lg:p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 group">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-sm">
                    3
                  </div>
                </div>
                <div className="col-span-5 space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Machine Dynamics & Vibrations</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Heat Transfer & Applied Thermodynamics</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Aerodynamics & Flight Mechanics</div>
                </div>
                <div className="col-span-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm lg:text-base">
                  <p className="font-medium">Vibrations & control: How engines, landing gear, and moving parts shake—and how we reduce it.</p>
                  <p className="pt-2 font-medium">Temperature control: How we cool jet engines and keep cabins comfortable.</p>
                  <p className="pt-2 font-medium">Flight & forces: How planes fly, how pressure acts, and how design changes performance.</p>
                </div>
              </div>

              {/* 4th Year */}
              <div className="grid grid-cols-12 gap-4 p-4 lg:p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 group">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-sm">
                    4
                  </div>
                </div>
                <div className="col-span-5 space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Aero-Mechanical Design Electives</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm lg:text-base">Project & Internship</div>
                </div>
                <div className="col-span-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm lg:text-base">
                  <p className="font-medium">Focus areas: aircraft strength, noise & vibration control, fatigue testing.</p>
                  <p className="pt-2 font-medium">Do real work: design, analyze, and test aircraft systems on real projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Individual Cards */}
          <div className="md:hidden space-y-4">
            {/* 1st Year Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="font-bold text-xl text-slate-900 dark:text-slate-100">1st Year</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Engineering Physics & Basics of Mechanics</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Engineering Mathematics I & II</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Engineering Graphics & Workshop</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <p>How things move, shake, and fly (motion, forces, vibrations, energy).</p>
                      <p>Use math to calculate speed, acceleration, pressure, and flight.</p>
                      <p>How aircraft parts are shaped and made (design + manufacturing basics).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Year Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="font-bold text-xl text-slate-900 dark:text-slate-100">2nd Year</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Strength of Materials</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Fluid Mechanics</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Thermodynamics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <p>Strong & safe parts: How wings, body, and engines handle stress and vibration without breaking.</p>
                      <p>Air & fluids: How air creates lift/drag and how fuel/hydraulic fluids move.</p>
                      <p>Heat & power: How heat and energy make jet engines and turbines work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Year Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="font-bold text-xl text-slate-900 dark:text-slate-100">3rd Year</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Machine Dynamics & Vibrations</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Heat Transfer & Applied Thermodynamics</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Aerodynamics & Flight Mechanics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <p>Vibrations & control: How engines, landing gear, and moving parts shake—and how we reduce it.</p>
                      <p>Temperature control: How we cool jet engines and keep cabins comfortable.</p>
                      <p>Flight & forces: How planes fly, how pressure acts, and how design changes performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Year Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                  <div className="font-bold text-xl text-slate-900 dark:text-slate-100">4th Year</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Aero-Mechanical Design Electives</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Project & Internship</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <p>Focus areas: aircraft strength, noise & vibration control, fatigue testing.</p>
                      <p>Do real work: design, analyze, and test aircraft systems on real projects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What You'll Actually Learn */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            What You'll Actually Master in 4 Years
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg font-semibold">
            Real skills that aerospace companies need - not just theory
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Core Sciences</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm md:text-base"><strong>Advanced Physics:</strong> Wave mechanics, fluid dynamics, thermodynamics for real aircraft systems</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm md:text-base"><strong>Engineering Mathematics:</strong> Complex analysis, differential equations that solve real flight problems</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm md:text-base"><strong>Materials Science:</strong> How metals behave under extreme stress, heat, and vibration</span>
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
                <p className="text-base font-medium text-gray-800">You'll pass exams but fail in labs</p>
                <p className="font-medium text-gray-800">You'll blame professors when you struggle</p>
                <p className="font-medium text-gray-800">You'll copy assignments without understanding</p>
                <p className="font-medium text-gray-800">You'll graduate but feel lost in interviews</p>
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
                <p className="font-medium text-gray-800"> You'll enjoy solving complex problems</p>
                <p className="font-medium text-gray-800">You'll build strong technical skills</p>
                <p className="font-medium text-gray-800">You'll understand what you're learning</p>
                <p className="font-medium text-gray-800">You'll be job-ready from any college</p>
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
        <CardContent className="p-4 sm:p-6 md:p-8 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Your Decision Moment</h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              This degree isn't about looking cool or following trends
            </p>
            <div className="bg-white/20 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-base sm:text-lg md:text-2xl font-bold leading-relaxed">
                "Choose B.Tech Mechanical only if you're ready to EARN it through dedication, precision, and genuine passion for aerospace engineering."
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg opacity-80 mt-3 sm:mt-4">
              If you're still reading and feeling excited about the challenge → Continue exploring the career information below
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
};