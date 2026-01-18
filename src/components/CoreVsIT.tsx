import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, TrendingUp, Brain, Award, Heart, Shield, DollarSign } from 'lucide-react';
const CoreVsIT = () => {
  const reasons = [{
    icon: AlertTriangle,
    title: "IT looks flashy, but it's crowded",
    description: "Everyone runs to IT. Because of that, competition keeps rising and salaries flatten fast.",
    insight: "Core engineering has less crowd → more long-term value.",
    color: "amber"
  }, {
    icon: TrendingUp,
    title: "IT skills change every 6–12 months",
    description: "New tools come → old skills die fast. If you stop learning for even 1–2 years, you fall behind.",
    insight: "Core fields don't die like that — physics is physics. Your knowledge keeps increasing in value, not decreasing.",
    color: "rose"
  }, {
    icon: Brain,
    title: "Core industry gives deep expertise",
    description: "Aerospace, avionics, and AME work builds: real technical depth, real-world engineering judgment, long-term authority.",
    insight: "In 10 years, you become irreplaceable. In IT, most roles are replaceable within weeks.",
    color: "purple"
  }, {
    icon: Award,
    title: "Core roles lead to stronger leadership positions",
    description: "In aerospace/aviation, with experience you move into: Lead Engineer, Flight Test Lead, Maintenance Head, MRO Manager, Engineering Manager, Quality & Safety Head.",
    insight: "These are high-respect, high-authority roles. In IT, most people get stuck as Developer, Support engineer, Analyst, Team lead. Very few reach true technical leadership.",
    color: "blue"
  }, {
    icon: Heart,
    title: "Your work actually matters",
    description: "Core engineers build: aircraft, avionics systems, safety-critical hardware, engines, real physical systems.",
    insight: "You create things that fly, carry humans, save lives. IT often means dashboards, tickets, support, or repetitive tasks.",
    color: "emerald"
  }, {
    icon: Shield,
    title: "Core jobs give long-term career stability",
    description: "Aerospace and aviation industries don't fire in bulk. They value experience and continuity.",
    insight: "IT is known for: layoffs, contract jobs, project dependency, short-term hiring and firing.",
    color: "cyan"
  }, {
    icon: DollarSign,
    title: "Core salaries grow slower early, but explode later",
    description: "IT salaries: fast early jump, flat after mid-level, replaceable roles reduce growth.",
    insight: "Core salaries: slow start, high growth after 5–10 years, expertise pays huge.",
    color: "green"
  }];
  const getColorClasses = (color: string) => {
    const colors: Record<string, {
      bg: string;
      border: string;
      icon: string;
      badge: string;
    }> = {
      amber: {
        bg: 'bg-amber-50/50 dark:bg-amber-950/20',
        border: 'border-amber-200 dark:border-amber-800',
        icon: 'text-amber-600 dark:text-amber-400',
        badge: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300'
      },
      rose: {
        bg: 'bg-rose-50/50 dark:bg-rose-950/20',
        border: 'border-rose-200 dark:border-rose-800',
        icon: 'text-rose-600 dark:text-rose-400',
        badge: 'bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300'
      },
      purple: {
        bg: 'bg-purple-50/50 dark:bg-purple-950/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
      },
      blue: {
        bg: 'bg-blue-50/50 dark:bg-blue-950/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
      },
      emerald: {
        bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
        border: 'border-emerald-200 dark:border-emerald-800',
        icon: 'text-emerald-600 dark:text-emerald-400',
        badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300'
      },
      cyan: {
        bg: 'bg-cyan-50/50 dark:bg-cyan-950/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        icon: 'text-cyan-600 dark:text-cyan-400',
        badge: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300'
      },
      green: {
        bg: 'bg-green-50/50 dark:bg-green-950/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        badge: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
      }
    };
    return colors[color] || colors.blue;
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Why NOT Choose IT Blindly
          </h1>
          
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex items-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-amber-700 text-[0.6875rem] sm:text-xs md:text-sm">
                <span className="font-semibold">Why this matters:</span> Helps students avoid herd mentality and choose a career based on long-term stability, expertise, and real value—not short-term hype.
              </span>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const colors = getColorClasses(reason.color);
          return <Card key={index} className={`${colors.bg} ${colors.border} border-2 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex flex-col items-center text-center">
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 sm:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
                    {reason.description}
                  </p>
                  <div className={`w-full p-3 sm:p-4 rounded-lg ${colors.badge} border-l-4 ${colors.border}`}>
                    <p className="text-xs sm:text-sm font-semibold">
                      💡 {reason.insight}
                    </p>
                  </div>
                </div>
              </Card>;
        })}
        </div>

        {/* Final Truth Box */}
        <div className="relative group">
          {/* Gradient glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          
          <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
            {/* Top gradient accent */}
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
            
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-full border border-indigo-200 dark:border-indigo-700 mb-4">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm sm:text-base font-bold text-indigo-700 dark:text-indigo-300">The Final Truth</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-50">
                  Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Career Path</span> Wisely
                </h2>
              </div>

              {/* Comparison Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* IT Route Card */}
                <div className="relative overflow-hidden rounded-xl border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-200/30 dark:bg-red-800/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="p-4 sm:p-6 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg sm:text-xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-red-700 dark:text-red-300">IT Route</h3>
                        <span className="text-xs sm:text-sm text-red-600/80 dark:text-red-400/80">Short-term gains</span>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-red-700 dark:text-red-300 font-medium mb-4">
                      Fancy IT gives fast money but short careers.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-red-600 dark:text-red-400">
                        <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center text-red-600 dark:text-red-300">✕</span>
                        <span>Fast money, short careers</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-red-600 dark:text-red-400">
                        <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center text-red-600 dark:text-red-300">✕</span>
                        <span>High replacement risk</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-red-600 dark:text-red-400">
                        <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center text-red-600 dark:text-red-300">✕</span>
                        <span>Skills expire quickly</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Engineering Route Card */}
                <div className="relative overflow-hidden rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="p-4 sm:p-6 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg sm:text-xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-300">Core Engineering Route</h3>
                        <span className="text-xs sm:text-sm text-emerald-600/80 dark:text-emerald-400/80">Long-term success</span>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      Deep expertise, respect, global opportunities, and long career stability.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                        <span className="w-5 h-5 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-300">✓</span>
                        <span>Deep expertise & stability</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                        <span className="w-5 h-5 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-300">✓</span>
                        <span>Irreplaceable value</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                        <span className="w-5 h-5 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-300">✓</span>
                        <span>Knowledge grows with time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Banner */}
              <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 rounded-xl p-4 sm:p-5 text-center">
                <p className="text-sm sm:text-base lg:text-lg text-white font-medium">
                  💡 <span className="text-amber-300 font-semibold">Think long-term.</span> Build skills that last a lifetime, not just a few years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CoreVsIT;