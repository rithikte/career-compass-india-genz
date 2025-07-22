import { AlertTriangle, CheckCircle, XCircle, Zap, Heart, Target, Trophy, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IndustryAdvice = () => {
  const brutalTruths = [
    "This field is not about big names — it's about pressure, focus, and precision",
    "It won't work if you're doing it for fun — it needs full effort", 
    "No shortcuts — if you skip tools or deep learning, you'll fall behind"
  ];

  const fieldRespects = [
    "If you truly love machines and solving problems, it will become your strength",
    "If you learn tools and stay serious, you can match any IIT student",
    "If you give it your best, this degree will give you a future — HAL, ISRO, DRDO, UAV startups"
  ];

  const notReadyWarnings = [
    "You may pass exams, but fail in interviews",
    "You'll wear the title but feel lost in labs", 
    "You'll waste years following hype",
    "You may even end up unemployed, not because jobs don't exist — but because you didn't build the skills needed"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              20 Years in Industry Advice
            </h1>
          </div>
        </div>

        {/* Main Quote Card */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <blockquote className="text-lg md:text-xl font-medium text-foreground/90 italic leading-relaxed">
                  "Beta… You're not picking a degree. You're picking a life. This field will reward you if you earn your way in. But if you're doing it for hype, it will burn your time. Only walk into Aerospace when you're ready to walk in fully. Otherwise — pause now, save years, and choose better."
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Brutal Truth Section */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Zap className="w-6 h-6" />
                Brutal Truth You Must Know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {brutalTruths.map((truth, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{truth}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What Field Respects */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Trophy className="w-6 h-6" />
                What This Field Respects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fieldRespects.map((respect, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{respect}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Not Ready Warnings */}
          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertTriangle className="w-6 h-6" />
                But If You're Not Ready...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notReadyWarnings.map((warning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{warning}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Final Advice Section */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <BookOpen className="w-6 h-6" />
              Think 1 Last Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <blockquote className="text-base font-medium text-foreground/90 leading-relaxed">
              "Beta, I'm not trying to scare you. I'm trying to protect your time, energy, and future. If you're truly ready to give what this field demands — effort, patience, real skill — then walk in proudly. But if you're only here because someone told you 'Aerospace sounds cool' — please stop. Don't choose regret."
            </blockquote>
            
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-center text-lg font-semibold text-primary">
                "No degree will give you a job — only the subject you truly earn will open the doors to opportunities."
              </p>
            </div>

            {/* Cutoff Information */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary/20 p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Top Govt Colleges</h4>
                <p className="text-sm text-foreground/80">JEE Adv Rank &lt; 5,000 for IITs</p>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Top Private Colleges</h4>
                <p className="text-sm text-foreground/80">EAMCET Rank &lt; 10,000 (TS/AP)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndustryAdvice;