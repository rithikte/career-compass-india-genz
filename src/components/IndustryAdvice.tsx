import { AlertTriangle, CheckCircle, XCircle, Zap, Heart, Target, Trophy, BookOpen, Clock, Users, TrendingDown, TrendingUp, Brain, Lightbulb, Shield, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <div className="min-h-screen bg-gradient-to-br from-red-950/20 via-background to-orange-950/20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* STOP SIGN Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-red-500 text-white rounded-full w-32 h-32 mx-auto flex items-center justify-center text-4xl font-black border-8 border-white shadow-2xl">
              STOP
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-center">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              REALITY CHECK
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-center text-muted-foreground">
            20 Years Industry Veteran Speaks
          </p>
        </div>

        {/* CRITICAL DECISION SECTION */}
        <div className="relative bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 p-8 rounded-3xl border-2 border-red-500/30 animate-scale-in">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm">
              LIFE-CHANGING DECISION AHEAD
            </div>
          </div>
          
          <div className="text-center space-y-6 mt-4">
            <Heart className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              "Beta… You're not picking a degree. You're picking a <span className="text-red-500">LIFE</span>."
            </blockquote>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              This field will reward you if you earn your way in. But if you're doing it for hype, it will burn your time. Only walk into Aerospace when you're ready to walk in <span className="font-bold text-orange-500">FULLY</span>. Otherwise — pause now, save years, and choose better.
            </p>
          </div>
        </div>

        {/* THE HARSH REALITY STATS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-center text-red-500 mb-8">IF YOU'RE NOT READY...</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {realityChecks.map((check, index) => (
              <Card key={index} className="bg-black/5 border-red-500/20 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center space-y-4">
                  <check.icon className={`w-12 h-12 mx-auto ${check.color}`} />
                  <div className={`text-4xl font-black ${check.color}`}>{check.stat}</div>
                  <p className="text-sm font-medium text-muted-foreground">{check.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TWO PATHS COMPARISON */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PATH 1: NOT READY */}
          <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/30 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-black text-red-500">IF YOU'RE DOING IT FOR HYPE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {brutalTruths.map((truth, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-500/5 rounded-lg">
                  <truth.icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">{truth.text}</p>
                    <span className="text-sm font-bold text-red-500">{truth.impact}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* PATH 2: READY */}
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-black text-green-500">IF YOU'RE TRULY PASSIONATE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fieldRespects.map((respect, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-500/5 rounded-lg">
                  <respect.icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">{respect.text}</p>
                    <span className="text-sm font-bold text-green-500">{respect.reward}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* FINAL WAKE-UP CALL */}
        <Card className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border-orange-500/40 animate-scale-in">
          <CardContent className="p-10 text-center space-y-8">
            <Lightbulb className="w-20 h-20 text-orange-500 mx-auto animate-pulse" />
            <h3 className="text-3xl font-black text-orange-500">FINAL REALITY CHECK</h3>
            <blockquote className="text-xl font-bold text-foreground leading-relaxed max-w-4xl mx-auto">
              "Beta, I'm not trying to scare you. I'm trying to protect your time, energy, and future. If you're truly ready to give what this field demands — effort, patience, real skill — then walk in proudly. But if you're only here because someone told you 'Aerospace sounds cool' — please stop. Don't choose regret."
            </blockquote>
            
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl border-2 border-primary/30">
              <p className="text-2xl font-black text-primary">
                "No degree will give you a job — only the subject you truly EARN will open doors."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CUTOFF REQUIREMENTS */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-600">
                <Trophy className="w-6 h-6" />
                Top Government (IITs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">&lt; 5,000</div>
                <p className="text-sm text-muted-foreground">JEE Advanced Rank Required</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-600">
                <Target className="w-6 h-6" />
                Top Private (TS/AP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">&lt; 10,000</div>
                <p className="text-sm text-muted-foreground">EAMCET Rank Required</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default IndustryAdvice;