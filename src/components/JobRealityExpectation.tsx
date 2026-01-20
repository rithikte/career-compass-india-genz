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

      {/* Importance Section - Compact inline design */}
      <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60">
        <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 flex-shrink-0" />
        <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
          <span className="font-semibold">Why this matters:</span> Helps students avoid choosing a career based on glamour and understand real daily work before committing years.
        </p>
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

      {/* Early Career Reality Section */}
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Early Career Reality: How Most Students Actually Start
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Year 0-1 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 sm:p-5 border-2 border-yellow-200 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg sm:text-xl">🟡</span>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-yellow-800">
                Year 0–1
              </h3>
            </div>
            <p className="text-[0.6875rem] sm:text-xs text-yellow-700 font-medium mb-3">
              Immediately After Graduation
            </p>
            <ul className="space-y-1.5 sm:space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Internships, traineeships, vendor or support roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Skill building + certifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Many students don't start in core roles</span>
              </li>
            </ul>
            <div className="bg-yellow-100/80 rounded-lg p-2.5 sm:p-3 border border-yellow-200">
              <p className="text-[0.6875rem] sm:text-xs text-yellow-800">
                <span className="font-semibold">Reality:</span> Learning phase, not earning peak phase
              </p>
            </div>
          </div>

          {/* Year 1-2 */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-5 border-2 border-orange-200 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg sm:text-xl">🟠</span>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-orange-800">
                Year 1–2
              </h3>
            </div>
            <p className="text-[0.6875rem] sm:text-xs text-orange-700 font-medium mb-3">
              Early Industry Exposure
            </p>
            <ul className="space-y-1.5 sm:space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Junior engineer, technician, tester, assistant roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">First real responsibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Skill gaps become clear</span>
              </li>
            </ul>
            <div className="bg-orange-100/80 rounded-lg p-2.5 sm:p-3 border border-orange-200">
              <p className="text-[0.6875rem] sm:text-xs text-orange-800">
                <span className="font-semibold">Reality:</span> Skills start mattering more than college name
              </p>
            </div>
          </div>

          {/* Year 2-3 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 sm:p-5 border-2 border-emerald-200 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg sm:text-xl">🟢</span>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-emerald-800">
                Year 2–3
              </h3>
            </div>
            <p className="text-[0.6875rem] sm:text-xs text-emerald-700 font-medium mb-3">
              Stabilisation Phase
            </p>
            <ul className="space-y-1.5 sm:space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Better role clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Core or semi-core roles start opening</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm text-gray-700">Salary and responsibility improve</span>
              </li>
            </ul>
            <div className="bg-emerald-100/80 rounded-lg p-2.5 sm:p-3 border border-emerald-200">
              <p className="text-[0.6875rem] sm:text-xs text-emerald-800">
                <span className="font-semibold">Reality:</span> Career direction becomes clear after effort + experience
              </p>
            </div>
          </div>
        </div>

        {/* Role-wise Clarity */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
            Role-wise clarity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-4 h-4 text-emerald-600" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-700">Aerospace Engineer</span>
              </div>
              <p className="text-[0.6875rem] sm:text-xs text-gray-600 leading-relaxed">
                Core roles usually appear after 2–3 years, not immediately
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700">Avionics Engineer</span>
              </div>
              <p className="text-[0.6875rem] sm:text-xs text-gray-600 leading-relaxed">
                Testing & integration roles come first, design later
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-amber-600" />
                <span className="text-xs sm:text-sm font-semibold text-amber-700">AME</span>
              </div>
              <p className="text-[0.6875rem] sm:text-xs text-gray-600 leading-relaxed">
                License + hands-on hours decide progress speed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
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

      {/* Bottom-line Truth - At bottom of page */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[0.6875rem] sm:text-xs lg:text-sm font-bold text-white/90 uppercase tracking-wide mb-0.5 sm:mb-1">
              Bottom-line Truth
            </h3>
            <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-white font-medium leading-relaxed">
              Knowing job reality before choosing a degree prevents disappointment, stress, and wrong career decisions later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRealityExpectation;
