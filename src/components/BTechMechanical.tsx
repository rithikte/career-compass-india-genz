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
            <div className="bg-white/20 rounded-lg p-3 sm:p-4 inline-block max-w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">⚡ Waves & Oscillations</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90">The Foundation of Modern Aerospace</p>
            </div>
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
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
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
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
        </CardContent>
      </Card>

      {/* Why Waves & Oscillations Matter */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            Why Waves & Oscillations Are Everything in Aerospace
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            This isn't just physics theory - it's the core science behind every flying machine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-blue-900">Aircraft Stability</h3>
              </div>
              <p className="text-blue-800 text-sm font-medium">
                Understanding vibrations keeps planes stable during turbulence and prevents dangerous oscillations
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Cog className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-bold text-green-900">Engine Optimization</h3>
              </div>
              <p className="text-green-800 text-sm font-medium">
                Wave analysis reduces engine noise, improves fuel efficiency, and prevents mechanical failures
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-purple-900">Safety Testing</h3>
              </div>
              <p className="text-purple-800 text-sm font-medium">
                Oscillation testing ensures aircraft can handle extreme conditions before human lives depend on it
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-orange-900 mb-2">Reality Check:</h3>
                <p className="text-orange-800">
                  This isn't about memorizing formulas. You'll spend 4 years learning how wave physics saves lives and builds the future of flight. 
                  <span className="font-semibold"> If you're not genuinely fascinated by how things work at this level, this degree will feel like torture.</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What This Field Demands - Reality Check */}
      <Card className="border-2 border-red-200">
        
        
      </Card>

      {/* What You'll Study in College */}
      <Card className="border-2 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            What You'll Study in College (Related to Waves & Oscillations)
          </CardTitle>
          
        </CardHeader>
        <CardContent className="p-6">
          {/* Year-wise curriculum table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <div className="grid grid-cols-2 gap-4 font-bold text-lg">
                <div>Year</div>
                <div>Subjects You'll Touch</div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50">
                <div className="font-bold text-blue-600 text-lg">1st Year</div>
                <div className="text-gray-700 rounded-md">
                  <strong>Engineering Physics</strong> – Basics of waves, vibrations, resonance (how things shake or vibrate)
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50">
                <div className="font-bold text-green-600 text-lg">2nd Year</div>
                <div className="text-gray-700 rounded-md">
                  <strong>Strength of Materials</strong> – How materials behave when they vibrate or face repeated stress
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50">
                <div className="font-bold text-purple-600 text-lg">3rd Year</div>
                <div className="text-gray-700 rounded-md">
                  <strong>Vibrations & Dynamics</strong> – How engines, wings, and moving parts oscillate (vibrate) during flight
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50">
                <div className="font-bold text-orange-600 text-lg">4th Year</div>
                <div className="text-gray-700 rounded-md">
                  <strong>Aero-mechanical Electives</strong> (if available) – Sound vibration control, aircraft structure response, fatigue analysis
                </div>
              </div>
            </div>
          </div>

          {/* Important Reality Check */}
          <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-7 w-7 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-3">Critical Reality Check:</h3>
                <p className="text-yellow-800 text-base font-medium leading-relaxed">
                  In B.Tech Mechanical Engineering, you'll learn only <span className="font-bold text-orange-700">20–30% about Waves & Oscillations</span> — enough to understand the basics, but not enough to get an aviation job directly unless you do extra certifications and projects.
                </p>
              </div>
            </div>
          </div>

          {/* Important Quote */}
          
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
      <div className="grid md:grid-cols-2 gap-8">
        {/* Not Ready */}
        <Card className="border-2 border-red-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-3 text-red-900">
              <XCircle className="h-6 w-6 text-red-600" />
              If You're NOT Ready...
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3 text-red-800">
              <p className="text-base font-medium">❌ You'll pass exams but fail in labs</p>
              <p className="font-medium">❌ You'll blame professors when you struggle</p>
              <p className="font-medium">❌ You'll copy assignments without understanding</p>
              <p className="font-medium">❌ You'll graduate but feel lost in interviews</p>
              <p className="font-bold mt-4">Result: Wasted 4 years and frustrated with engineering</p>
            </div>
          </CardContent>
        </Card>

        {/* Ready */}
        <Card className="border-2 border-green-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-3 text-green-900">
              <CheckCircle className="h-6 w-6 text-green-600" />
              If You ARE Ready...
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3 text-green-800">
              <p className="font-medium">✅ You'll enjoy solving complex problems</p>
              <p className="font-medium">✅ You'll build strong technical skills</p>
              <p className="font-medium">✅ You'll understand what you're learning</p>
              <p className="font-medium">✅ You'll be job-ready from any college</p>
              <p className="font-bold mt-4">Result: Strong engineer ready for ISRO, HAL, or aerospace startups</p>
            </div>
          </CardContent>
        </Card>
      </div>

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