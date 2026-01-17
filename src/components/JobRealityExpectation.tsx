import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Cpu, Wrench, Sparkles, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';

const JobRealityExpectation = () => {
  const roles = [
    {
      title: 'Aerospace Engineer',
      icon: Rocket,
      color: 'emerald',
      expectations: [
        "I'll work on rockets, fighter jets, and space missions every day.",
        "My job will be high-adventure and hands-on.",
        "I'll design full aircraft at a young age."
      ],
      realities: [
        "80% of work is simulations, CAD modeling, calculations, reports, reviews.",
        "Hands-on testing is limited and comes later in the career.",
        "You mostly work on small components, not entire aircraft.",
        "Long review cycles → patience required."
      ],
      summary: "More computer work, less rocket-glamour. High thinking, high accuracy."
    },
    {
      title: 'Avionics Engineer',
      icon: Cpu,
      color: 'blue',
      expectations: [
        "I will develop futuristic autopilot systems immediately.",
        "I will work inside aircraft cockpits daily.",
        "I'll build cool electronics quickly."
      ],
      realities: [
        "Majority of the work is coding, testing, debugging, documentation.",
        "Cockpit/in-aircraft work is rare; most work is in lab environments.",
        "Very strict rules — small mistakes can delay whole projects.",
        "Need to learn embedded systems continuously."
      ],
      summary: "More coding/testing, less cockpit action. Great for tech lovers."
    },
    {
      title: 'Aircraft Maintenance Engineer',
      icon: Wrench,
      color: 'amber',
      expectations: [
        "I'll stand near aircraft every day — glamorous aviation life.",
        "Job will be simple: check aircraft and go home.",
        "Airport environment will be luxurious."
      ],
      realities: [
        "Very high pressure → safety of passengers depends on your work.",
        "Physical job: bending, lifting, outdoor work, heat, hangar noise.",
        "Night shifts, long hours, on-call duty are common.",
        "Work happens during aircraft downtime → often late nights.",
        "Mistakes are not allowed — zero-error job."
      ],
      summary: "High pressure, high responsibility, long hours — but very respected and secure."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; light: string; accent: string }> = {
      emerald: {
        bg: 'bg-emerald-500',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        light: 'bg-emerald-50',
        accent: 'bg-emerald-100'
      },
      blue: {
        bg: 'bg-blue-500',
        border: 'border-blue-200',
        text: 'text-blue-700',
        light: 'bg-blue-50',
        accent: 'bg-blue-100'
      },
      amber: {
        bg: 'bg-amber-500',
        border: 'border-amber-200',
        text: 'text-amber-700',
        light: 'bg-amber-50',
        accent: 'bg-amber-100'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-3 sm:space-y-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
          <span className="text-xs sm:text-sm font-semibold text-indigo-700">Career Reality Check</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Job Reality vs Expectation
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          What students think vs what the job actually involves
        </p>
      </div>

      {/* Importance Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-amber-200 shadow-sm">
        <div className="space-y-3 sm:space-y-4">
          {/* Importance */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-2.5 bg-amber-100 rounded-xl flex-shrink-0">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-600" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-amber-800">
                Importance
              </h3>
              <p className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] text-amber-700 leading-relaxed">
                Helps students avoid choosing a career based on glamour and understand the real daily work before committing years.
              </p>
            </div>
          </div>

          {/* Bottom-line Truth */}
          <div className="flex items-start gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-amber-200/60">
            <div className="p-2 sm:p-2.5 bg-orange-100 rounded-xl flex-shrink-0">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-orange-800">
                Bottom-line Truth
              </h3>
              <p className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] text-orange-700 leading-relaxed font-medium">
                Knowing job reality before choosing a degree prevents disappointment, stress, and wrong career decisions later.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Cards */}
      <div className="space-y-6 sm:space-y-8">
        {roles.map((role, index) => {
          const colors = getColorClasses(role.color);
          const IconComponent = role.icon;
          
          return (
            <Card 
              key={index} 
              className={`overflow-hidden border-2 ${colors.border} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Card Header */}
              <CardHeader className={`${colors.light} border-b ${colors.border} p-4 sm:p-6`}>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 sm:p-3 ${colors.bg} rounded-xl shadow-md`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${colors.text}`}>
                    {role.title}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                {/* Expectation vs Reality Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Expectations */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 bg-pink-100 rounded-lg">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-pink-700">
                        Expectation
                      </h3>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 sm:p-4 border border-pink-100">
                      <ul className="space-y-2 sm:space-y-3">
                        {role.expectations.map((exp, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-pink-400 mt-1 flex-shrink-0">✦</span>
                            <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {exp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Reality */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 bg-slate-100 rounded-lg">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-700">
                        Reality
                      </h3>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-3 sm:p-4 border border-slate-200">
                      <ul className="space-y-2 sm:space-y-3">
                        {role.realities.map((reality, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {reality}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className={`mt-4 sm:mt-6 ${colors.accent} rounded-xl p-3 sm:p-4 border ${colors.border}`}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className={`p-1.5 ${colors.bg} rounded-lg flex-shrink-0`}>
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base font-medium ${colors.text}`}>
                      {role.summary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-indigo-100">
        <div className="text-center space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
            💡 Key Takeaway
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every aviation career has its own rhythm. Understanding the reality helps you prepare better, 
            set right expectations, and build a fulfilling long-term career. The glamour is real — 
            it just comes with dedication and patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobRealityExpectation;
