import { AlertTriangle, CheckCircle, XCircle, Zap, Heart, Target, Trophy, BookOpen, Clock, Users, TrendingDown, TrendingUp, Brain, Lightbulb, Shield, Flame } from 'lucide-react';
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-warning/5 rounded-full blur-3xl animate-float-gentle animation-delay-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 relative z-10 space-y-12 sm:space-y-16">
        
        {/* STOP SIGN Header */}
        <div className="text-center space-y-6 animate-spring-up will-change-transform">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-destructive text-destructive-foreground rounded-full w-32 h-32 mx-auto flex items-center justify-center text-4xl font-black border-8 border-white shadow-layer-3">
              STOP
            </div>
          </div>
          <h1 className="headline-interactive text-4xl sm:text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-destructive via-warning to-destructive bg-clip-text text-transparent">
              REALITY CHECK
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground">
            20 Years Industry Veteran Speaks
          </p>
        </div>

        {/* CRITICAL DECISION SECTION */}
        <Card className="relative bg-gradient-to-r from-destructive/10 via-warning/10 to-destructive/10 border-2 border-destructive/20 animate-scale-in will-change-transform shadow-layer-3 magnetic-container">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-destructive text-destructive-foreground px-6 py-2 rounded-full font-bold text-sm shadow-layer-2">
              LIFE-CHANGING DECISION AHEAD
            </div>
          </div>
          
          <CardContent className="text-center space-y-6 pt-12 pb-8">
            <div className="p-3 bg-destructive/10 rounded-lg inline-block">
              <Heart className="w-16 h-16 text-destructive animate-pulse" />
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              "Beta… You're not picking a degree. You're picking a <span className="text-destructive">LIFE</span>."
            </blockquote>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This field will reward you if you earn your way in. But if you're doing it for hype, it will burn your time. Only walk into Aerospace when you're ready to walk in <span className="font-bold text-warning">FULLY</span>. Otherwise — pause now, save years, and choose better.
            </p>
          </CardContent>
        </Card>

        {/* THE HARSH REALITY STATS */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black text-center text-destructive">IF YOU'RE NOT READY...</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realityChecks.map((check, index) => {
              const gradients = [
                'from-red-500/10 to-red-600/5',
                'from-orange-500/10 to-orange-600/5',
                'from-yellow-500/10 to-yellow-600/5',
                'from-red-600/10 to-red-700/5'
              ];
              const delayClasses = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400'];
              return (
                <Card 
                  key={index} 
                  className={`magnetic-container bg-gradient-to-br ${gradients[index]} border-2 border-destructive/20 hover:shadow-layer-3 transition-all duration-300 animate-spring-up will-change-transform ${delayClasses[index]}`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="p-3 bg-white/80 rounded-lg inline-block shadow-layer-1">
                      <check.icon className={`w-12 h-12 ${check.color}`} />
                    </div>
                    <div className={`text-4xl font-black ${check.color}`}>{check.stat}</div>
                    <p className="text-sm font-semibold text-foreground">{check.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* TWO PATHS COMPARISON */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* PATH 1: NOT READY */}
          <Card className="magnetic-container bg-gradient-to-br from-red-500/10 to-red-600/5 border-2 border-red-500/30 animate-spring-up will-change-transform shadow-layer-2 hover:shadow-layer-3 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="p-3 bg-red-500/10 rounded-lg inline-block mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-layer-2">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-black text-red-500">IF YOU'RE DOING IT FOR HYPE</CardTitle>
              <CardDescription className="text-base font-medium mt-2">The harsh truths you need to hear</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {brutalTruths.map((truth, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-500/5 rounded-lg border border-red-500/10 hover:bg-red-500/10 transition-colors">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <truth.icon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-relaxed">{truth.text}</p>
                    <span className="text-sm font-bold text-red-500 mt-1 inline-block">{truth.impact}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* PATH 2: READY */}
          <Card className="magnetic-container bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 animate-spring-up will-change-transform animation-delay-100 shadow-layer-2 hover:shadow-layer-3 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="p-3 bg-green-500/10 rounded-lg inline-block mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-layer-2">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-black text-green-500">IF YOU'RE TRULY PASSIONATE</CardTitle>
              <CardDescription className="text-base font-medium mt-2">What the field offers to those who earn it</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {fieldRespects.map((respect, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/10 hover:bg-green-500/10 transition-colors">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <respect.icon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-relaxed">{respect.text}</p>
                    <span className="text-sm font-bold text-green-500 mt-1 inline-block">{respect.reward}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* FINAL WAKE-UP CALL */}
        <Card className="magnetic-container bg-gradient-to-r from-warning/20 via-destructive/20 to-warning/20 border-2 border-warning/40 animate-scale-in will-change-transform shadow-layer-3">
          <CardContent className="p-8 sm:p-10 lg:p-12 text-center space-y-8">
            <div className="p-3 bg-warning/10 rounded-lg inline-block">
              <Lightbulb className="w-16 h-16 sm:w-20 sm:h-20 text-warning animate-pulse" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-warning">FINAL REALITY CHECK</h3>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-relaxed max-w-4xl mx-auto">
              "Beta, I'm not trying to scare you. I'm trying to protect your time, energy, and future. If you're truly ready to give what this field demands — effort, patience, real skill — then walk in proudly. But if you're only here because someone told you 'Aerospace sounds cool' — please stop. Don't choose regret."
            </blockquote>
            
            <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 shadow-layer-2">
              <CardContent className="p-6 sm:p-8">
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-primary leading-tight">
                  "No degree will give you a job — only the subject you truly EARN will open doors."
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* NEXT STEPS - PRACTICAL ADVICE */}
        <Card className="magnetic-container bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border-2 border-primary/30 shadow-layer-2 hover:shadow-layer-3 transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-black text-primary">NEXT STEPS</CardTitle>
            <CardDescription className="text-base sm:text-lg font-medium mt-2">Actionable advice for those who are ready</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-blue-500/30 shadow-layer-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    If Serious About This Field:
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground font-semibold">
                    → Start CAD + DGCA license early
                  </p>
                  <p className="text-muted-foreground text-sm">Build practical skills from day one</p>
                </CardContent>
              </Card>
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-purple-500/30 shadow-layer-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-600 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Career Reality:
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground font-semibold">
                    Placements at HAL/DRDO possible even from private colleges if skills strong
                  </p>
                  <p className="text-muted-foreground text-sm">Skills matter more than college brand</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* CUTOFF REQUIREMENTS */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="magnetic-container bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/30 shadow-layer-2 hover:shadow-layer-3 transition-all duration-300 animate-spring-up will-change-transform">
            <CardHeader>
              <div className="p-2 bg-blue-500/10 rounded-lg inline-block mb-2">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-black text-blue-600">
                Top Government (IITs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-white/80 rounded-lg p-6 shadow-layer-1">
                <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-2">&lt; 5,000</div>
                <p className="text-sm font-semibold text-muted-foreground">JEE Advanced Rank Required</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="magnetic-container bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-2 border-purple-500/30 shadow-layer-2 hover:shadow-layer-3 transition-all duration-300 animate-spring-up will-change-transform animation-delay-100">
            <CardHeader>
              <div className="p-2 bg-purple-500/10 rounded-lg inline-block mb-2">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-black text-purple-600">
                Top Private (TS/AP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-white/80 rounded-lg p-6 shadow-layer-1">
                <div className="text-4xl sm:text-5xl font-black text-purple-600 mb-2">&lt; 10,000</div>
                <p className="text-sm font-semibold text-muted-foreground">EAMCET Rank Required</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SOURCE ATTRIBUTION */}
        <Card className="bg-white/95 backdrop-blur-sm border-2 border-border shadow-layer-1">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-2">Data Sources & Attribution</h4>
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