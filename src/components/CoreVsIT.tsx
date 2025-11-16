import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, TrendingUp, Brain, Award, Heart, Shield, DollarSign, Target } from 'lucide-react';

const CoreVsIT = () => {
  const reasons = [
    {
      icon: AlertTriangle,
      title: "IT looks flashy, but it's crowded",
      description: "Everyone runs to IT. Because of that, competition keeps rising and salaries flatten fast.",
      insight: "Core engineering has less crowd → more long-term value.",
      color: "amber"
    },
    {
      icon: TrendingUp,
      title: "IT skills change every 6–12 months",
      description: "New tools come → old skills die fast. If you stop learning for even 1–2 years, you fall behind.",
      insight: "Core fields don't die like that — physics is physics. Your knowledge keeps increasing in value, not decreasing.",
      color: "rose"
    },
    {
      icon: Brain,
      title: "Core industry gives deep expertise",
      description: "Aerospace, avionics, and AME work builds: real technical depth, real-world engineering judgment, long-term authority.",
      insight: "In 10 years, you become irreplaceable. In IT, most roles are replaceable within weeks.",
      color: "purple"
    },
    {
      icon: Award,
      title: "Core roles lead to stronger leadership positions",
      description: "In aerospace/aviation, with experience you move into: Lead Engineer, Flight Test Lead, Maintenance Head, MRO Manager, Engineering Manager, Quality & Safety Head.",
      insight: "These are high-respect, high-authority roles. In IT, most people get stuck as Developer, Support engineer, Analyst, Team lead. Very few reach true technical leadership.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Your work actually matters",
      description: "Core engineers build: aircraft, avionics systems, safety-critical hardware, engines, real physical systems.",
      insight: "You create things that fly, carry humans, save lives. IT often means dashboards, tickets, support, or repetitive tasks.",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Core jobs give long-term career stability",
      description: "Aerospace and aviation industries don't fire in bulk. They value experience and continuity.",
      insight: "IT is known for: layoffs, contract jobs, project dependency, short-term hiring and firing.",
      color: "cyan"
    },
    {
      icon: DollarSign,
      title: "Core salaries grow slower early, but explode later",
      description: "IT salaries: fast early jump, flat after mid-level, replaceable roles reduce growth.",
      insight: "Core salaries: slow start, high growth after 5–10 years, expertise pays huge.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
      amber: { bg: 'bg-amber-50/50 dark:bg-amber-950/20', border: 'border-amber-200 dark:border-amber-800', icon: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300' },
      rose: { bg: 'bg-rose-50/50 dark:bg-rose-950/20', border: 'border-rose-200 dark:border-rose-800', icon: 'text-rose-600 dark:text-rose-400', badge: 'bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300' },
      purple: { bg: 'bg-purple-50/50 dark:bg-purple-950/20', border: 'border-purple-200 dark:border-purple-800', icon: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' },
      blue: { bg: 'bg-blue-50/50 dark:bg-blue-950/20', border: 'border-blue-200 dark:border-blue-800', icon: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' },
      emerald: { bg: 'bg-emerald-50/50 dark:bg-emerald-950/20', border: 'border-emerald-200 dark:border-emerald-800', icon: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300' },
      cyan: { bg: 'bg-cyan-50/50 dark:bg-cyan-950/20', border: 'border-cyan-200 dark:border-cyan-800', icon: 'text-cyan-600 dark:text-cyan-400', badge: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300' },
      green: { bg: 'bg-green-50/50 dark:bg-green-950/20', border: 'border-green-200 dark:border-green-800', icon: 'text-green-600 dark:text-green-400', badge: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">Critical Career Decision</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Why NOT Choose IT Blindly
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Over Core Roles like Aerospace Engineer, Avionics Engineer, AME
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colors = getColorClasses(reason.color);
            
            return (
              <Card 
                key={index}
                className={`${colors.bg} ${colors.border} border-2 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${colors.badge}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${colors.badge}`}>
                        #{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                      {reason.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 pl-16">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className={`p-3 rounded-lg ${colors.badge} border-l-4 ${colors.border}`}>
                    <p className="text-sm font-semibold">
                      💡 {reason.insight}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Final Truth Box */}
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-2 border-indigo-300 dark:border-indigo-700 p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-6">
            <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">The Final Truth</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Short, Simple Final Truth
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-red-600 dark:text-red-400 font-semibold">
              Fancy IT gives fast money but short careers.
            </p>
            <p className="text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 font-semibold">
              Core aviation roles give deep expertise, respect, global opportunities, and long career stability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">IT Route</h4>
              <p className="text-sm text-red-600 dark:text-red-400">Fast money, short careers, high replacement risk</p>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Core Engineering Route</h4>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">Deep expertise, long stability, irreplaceable value</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoreVsIT;