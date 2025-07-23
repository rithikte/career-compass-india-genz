import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Brain, Cog, Calculator, Wrench, Plane, Zap, Target, Clock, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const BTechMechanical = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section with Core Topic */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-white rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/20 rounded-full px-6 py-2">
            <Plane className="h-6 w-6" />
            <span className="font-semibold">B.Tech Mechanical Engineering</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold">Core Focus Area</h1>
            <div className="bg-white/20 rounded-lg p-4 inline-block">
              <h2 className="text-2xl font-bold text-yellow-300">⚡ Waves & Oscillations</h2>
              <p className="text-lg opacity-90">The Foundation of Modern Aerospace</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5" />
                <span className="font-semibold">Aerospace Engineering</span>
              </div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Defense Systems</span>
              </div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">Aviation Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Waves & Oscillations Matter */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            Why Waves & Oscillations Are Everything in Aerospace
          </CardTitle>
          <CardDescription className="text-lg">
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
              <p className="text-blue-800 text-sm">
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
              <p className="text-green-800 text-sm">
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
              <p className="text-purple-800 text-sm">
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
        <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
          <CardTitle className="flex items-center gap-3 text-2xl text-red-900">
            <div className="p-2 bg-red-100 rounded-lg">
              <Brain className="h-6 w-6 text-red-600" />
            </div>
            What This Degree Will Demand From You
          </CardTitle>
          <CardDescription className="text-red-700 text-lg font-medium">
            Be honest with yourself - can you handle this for 4 years?
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Extreme Patience</h3>
                  <p className="text-gray-600 text-sm">Simulations take hours. Tests fail repeatedly. You'll redo calculations 10 times before getting it right.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Complex Problem Solving</h3>
                  <p className="text-gray-600 text-sm">No Google answers for real engineering problems. You think step-by-step or you fail.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                  <Calculator className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Tool Mastery</h3>
                  <p className="text-gray-600 text-sm">MATLAB, ANSYS, CATIA aren't optional. You'll live in these software tools for 4 years.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                  <Target className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Perfect Accuracy</h3>
                  <p className="text-gray-600 text-sm">One decimal wrong = mission failure. Lives depend on your calculations being exact.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                  <XCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Failure Resilience</h3>
                  <p className="text-gray-600 text-sm">You'll fail often. Designs will break. Code will crash. Can you keep going?</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-yellow-100 rounded-lg flex-shrink-0">
                  <Shield className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Mental Toughness</h3>
                  <p className="text-gray-600 text-sm">Long nights, design failures, software crashes. Your mind must stay sharp under pressure.</p>
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
          <CardDescription className="text-lg">
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

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span><strong>CAD/CAE Software:</strong> CATIA, SolidWorks for designing aircraft components</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Simulation Tools:</strong> ANSYS, MATLAB for testing before building prototypes</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span><strong>Analysis Software:</strong> CFD tools for airflow, structural analysis for safety</span>
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
              <p>❌ You'll pass exams but fail in labs</p>
              <p>❌ You'll blame professors when you struggle</p>
              <p>❌ You'll copy assignments without understanding</p>
              <p>❌ You'll graduate but feel lost in interviews</p>
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
              <p>✅ You'll enjoy solving complex problems</p>
              <p>✅ You'll build strong technical skills</p>
              <p>✅ You'll understand what you're learning</p>
              <p>✅ You'll be job-ready from any college</p>
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
    </div>
  );
};