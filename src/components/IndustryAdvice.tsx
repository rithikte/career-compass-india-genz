import { AlertTriangle, CheckCircle, XCircle, Zap, Heart, Target, Trophy, BookOpen, Clock, Users, TrendingDown, TrendingUp, Brain, Lightbulb, Shield, Flame, GraduationCap, FileText, UserCheck, Edit3, PenTool, Award, Calendar, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SourceBadge from './SourceBadge';

const IndustryAdvice = () => {
  const brutalTruths = [
    {
      icon: Flame,
      text: "This field is not about big names — it's about pressure, focus, and precision",
      impact: "High Stress"
    },
    {
      icon: Brain,
      text: "It won't work if you're doing it for fun — it needs full effort", 
      impact: "100% Commitment"
    },
    {
      icon: TrendingDown,
      text: "No shortcuts — if you skip tools or deep learning, you'll fall behind",
      impact: "Skill Gaps = Failure"
    }
  ];

  const fieldRespects = [
    {
      icon: Heart,
      text: "If you truly love machines and solving problems, it will become your strength",
      reward: "Passion = Power"
    },
    {
      icon: Trophy,
      text: "If you learn tools and stay serious, you can match any IIT student",
      reward: "Skills Beat Brands"
    },
    {
      icon: TrendingUp,
      text: "If you give it your best, this degree will give you a future — HAL, ISRO, DRDO, UAV startups",
      reward: "Real Opportunities"
    }
  ];

  const realityChecks = [
    { stat: "70%", desc: "Pass exams but fail interviews", icon: XCircle, color: "text-red-500" },
    { stat: "60%", desc: "Feel lost in practical labs", icon: AlertTriangle, color: "text-orange-500" },
    { stat: "50%", desc: "Waste years following hype", icon: Clock, color: "text-yellow-600" },
    { stat: "40%", desc: "End up unemployed despite jobs existing", icon: Users, color: "text-red-600" }
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-18 h-18 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-9 -translate-x-9 sm:translate-y-12 sm:-translate-x-12"></div>
          
          <div className="relative text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3">
              <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-bold text-sm sm:text-base">STOP & READ THIS FIRST</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">20 Years Industry Veteran Speaks</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                The harsh realities no one tells you about Aerospace careers
              </p>
            </div>
          </div>
        </div>

        {/* CRITICAL DECISION SECTION */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-red-200">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                "Beta… You're not picking a degree. You're picking a <span className="text-red-600">LIFE</span>."
              </blockquote>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                This field will reward you if you earn your way in. But if you're doing it for hype, it will burn your time. Only walk into Aerospace when you're ready to walk in <span className="font-bold text-orange-600">FULLY</span>. Otherwise — pause now, save years, and choose better.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* THE HARSH REALITY STATS */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl sm:text-3xl text-center justify-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              IF YOU'RE NOT READY...
            </CardTitle>
            <CardDescription className="text-center text-lg font-semibold">
              The statistics that prove why passion matters
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {realityChecks.map((check, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center space-y-3 hover:bg-gray-100 transition-colors">
                  <check.icon className={`w-12 h-12 mx-auto ${check.color}`} />
                  <div className={`text-4xl font-black ${check.color}`}>{check.stat}</div>
                  <p className="text-sm font-semibold text-gray-700">{check.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* TWO PATHS COMPARISON */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* PATH 1: NOT READY */}
          <Card className="bg-white rounded-2xl shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-red-600">IF YOU'RE DOING IT FOR HYPE</CardTitle>
              </div>
              <CardDescription className="text-base font-medium">The harsh truths you need to hear</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {brutalTruths.map((truth, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <truth.icon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{truth.text}</p>
                    <span className="text-xs sm:text-sm font-bold text-red-600 mt-1 inline-block">{truth.impact}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* PATH 2: READY */}
          <Card className="bg-white rounded-2xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-green-600">IF YOU'RE TRULY PASSIONATE</CardTitle>
              </div>
              <CardDescription className="text-base font-medium">What the field offers to those who earn it</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {fieldRespects.map((respect, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <respect.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{respect.text}</p>
                    <span className="text-xs sm:text-sm font-bold text-green-600 mt-1 inline-block">{respect.reward}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* FINAL WAKE-UP CALL */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">FINAL REALITY CHECK</h3>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto text-orange-50">
              "Beta, I'm not trying to scare you. I'm trying to protect your time, energy, and future. If you're truly ready to give what this field demands — effort, patience, real skill — then walk in proudly. But if you're only here because someone told you 'Aerospace sounds cool' — please stop. Don't choose regret."
            </blockquote>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                "No degree will give you a job — only the subject you truly EARN will open doors."
              </p>
            </div>
          </div>
        </div>

        {/* NEXT STEPS - PRACTICAL ADVICE */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">NEXT STEPS</CardTitle>
            </div>
            <CardDescription className="text-lg font-semibold">Actionable advice for those who are ready</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-700">If Serious About This Field:</h4>
                </div>
                <p className="text-gray-800 font-semibold mb-2">
                  → Start CAD + DGCA license early
                </p>
                <p className="text-gray-600 text-sm">Build practical skills from day one</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-bold text-purple-700">Career Reality:</h4>
                </div>
                <p className="text-gray-800 font-semibold mb-2">
                  Placements at HAL/DRDO possible even from private colleges if skills strong
                </p>
                <p className="text-gray-600 text-sm">Skills matter more than college brand</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ADMISSION PROCESS */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Admission Process</CardTitle>
            </div>
            <CardDescription className="text-lg font-semibold">Step-by-step guide to secure your admission</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Finish +2 (MPC Stream)
                  </h4>
                  <p className="text-slate-700">You must take Maths, Physics, Chemistry in Intermediate.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <Edit3 className="w-5 h-5 text-purple-600" />
                    Write Entrance Exam
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>TG students:</strong> TS EAPCET</li>
                    <li><strong>Optional:</strong> JEE Main for NITs, IIITs, and top private colleges</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-green-600" />
                    Check Eligibility
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li>45% or more in PCM (40% for reserved categories)</li>
                    <li>Must be a local student of TG (for state quota)</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    Apply Online
                  </h4>
                  <p className="text-slate-700">Fill EAPCET form → Upload photo/sign → Pay fee → Select exam center.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-red-600" />
                    Prepare for Exam
                  </h4>
                  <p className="text-slate-700">Focus on Maths (most weightage), then Physics, Chemistry. Use previous papers & mock tests for speed and accuracy.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-cyan-600" />
                    Write Exam & Get Rank
                  </h4>
                  <p className="text-slate-700">After results, download Rank Card.</p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-600" />
                    Attend Counselling
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li>Pay counselling fee online</li>
                    <li>Verify certificates (online/offline)</li>
                    <li>Choose colleges and branches (web options)</li>
                    <li>Wait for seat allotment</li>
                  </ul>
                </div>
              </div>

              {/* Step 8 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border-2 border-teal-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">8</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    Confirm Admission
                  </h4>
                  <p className="text-slate-700">Once seat allotted → pay college fee → report to college with documents.</p>
                </div>
              </div>

              {/* Step 9 */}
              <div className="flex gap-4 items-start p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">9</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-amber-600" />
                    Submit Documents & Join
                  </h4>
                  <p className="text-slate-700 mb-2">Carry originals + photocopies:</p>
                  <p className="text-slate-700">Aadhar, 10th & Inter marks, TC, EAPCET rank card, income & caste certificate (if any).</p>
                  <p className="text-slate-700 font-semibold mt-2">Join the College on the Date of Opening</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CUTOFF REQUIREMENTS */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-blue-600">
                  Top Government (IITs)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-blue-50 rounded-lg p-6">
                <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-2">&lt; 5,000</div>
                <p className="text-sm font-semibold text-gray-600">JEE Advanced Rank Required</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-purple-600">
                  Top Private (TS/AP)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-purple-50 rounded-lg p-6">
                <div className="text-4xl sm:text-5xl font-black text-purple-600 mb-2">&lt; 10,000</div>
                <p className="text-sm font-semibold text-gray-600">EAMCET Rank Required</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SOURCE ATTRIBUTION */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">Data Sources & Attribution</h4>
                <div className="flex flex-wrap gap-3">
                  <SourceBadge href="#" label="Industry Veterans Survey 2024" />
                  <SourceBadge href="#" label="AICTE Career Statistics" />
                  <SourceBadge href="#" label="Aerospace Hiring Trends Report" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default IndustryAdvice;