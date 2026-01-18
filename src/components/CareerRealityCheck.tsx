import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Lightbulb, Target, MessageCircle } from 'lucide-react';

const CareerRealityCheck = () => {
  const difficultIfPoints = [
    "You feel very stressed when mistakes are checked repeatedly",
    "You expect quick results without long preparation",
    "You dislike working under rules, safety checks, or strict processes",
    "You avoid technical responsibility where small errors matter",
    "You are uncomfortable with slow and steady career growth"
  ];

  const whyWeShowPoints = [
    "Your subject interest and knowledge fit is correct",
    "These job roles are relevant and realistic",
    "With proper preparation, many students succeed here",
    "This note is shown only to prepare your mindset, not to stop you"
  ];

  const whatToDoPoints = [
    "If this information feels acceptable, continue your preparation confidently",
    "If it feels uncomfortable, discuss once with parents or mentors before deciding"
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Important Reality Check
          </h2>
          
          {/* Why this matters */}
          <div className="flex items-center justify-center mt-4">
            <div className="inline-flex items-center justify-center bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-[0.6875rem] sm:text-xs md:text-sm text-amber-700">
                <span className="font-semibold">Why this matters:</span> Helps students understand the real daily demands of this career before committing, reducing future regret.
              </span>
            </div>
          </div>
        </div>

        {/* Introduction Text */}
        <Card className="mb-6 sm:mb-8 border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-4 sm:p-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              This career path is designed based on the core topics and subtopics you selected, so the degree and job roles shown here are a <span className="font-semibold text-slate-900">strong academic and skill fit</span> for you.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3 sm:mt-4">
              However, every real job also has daily work pressure and responsibility that students usually understand only after working for a few years.
            </p>
            <p className="text-sm sm:text-base text-slate-800 font-medium mt-3 sm:mt-4">
              So before moving ahead, please read this once.
            </p>
          </CardContent>
        </Card>

        {/* This Career May Feel Difficult If */}
        <Card className="mb-6 sm:mb-8 border-red-200 bg-gradient-to-br from-red-50/50 to-white">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-red-800">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
              This Career May Feel Difficult If
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2 sm:space-y-3">
              {difficultIfPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            
            {/* Clarification Note */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-100/80 rounded-lg border border-slate-200">
              <p className="text-xs sm:text-sm text-slate-600 italic">
                This does not mean you are weak or incapable.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
                It only means this career needs patience, focus, and consistency.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why We Still Show This Career */}
        <Card className="mb-6 sm:mb-8 border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-emerald-800">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
              Why We Still Show This Career to You
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2 sm:space-y-3">
              {whyWeShowPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Simple Truth */}
        <Card className="mb-6 sm:mb-8 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-blue-800">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
              Simple Truth
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Most students understand whether a job truly suits them only after <span className="font-semibold text-slate-900">3–4 years</span> of real work experience.
            </p>
            <p className="text-sm sm:text-base text-blue-700 font-medium mt-3 sm:mt-4">
              Our role is to help you enter the right path with open eyes, not fear.
            </p>
          </CardContent>
        </Card>

        {/* What You Should Do Now */}
        <Card className="mb-6 sm:mb-8 border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-white">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-indigo-800">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
              What You Should Do Now
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2 sm:space-y-3">
              {whatToDoPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            
            {/* Encouragement Note */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-indigo-100/60 rounded-lg border border-indigo-200">
              <p className="text-xs sm:text-sm text-indigo-800 font-medium">
                Taking time to think is always better than rushing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom-line Truth Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
              Bottom-line Truth
            </h3>
          </div>
          <p className="text-sm sm:text-base text-white/95 font-medium">
            This message is included only to avoid future regret, not to discourage the student.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerRealityCheck;
