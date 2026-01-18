import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Building2, 
  Users, 
  Award, 
  Landmark, 
  Briefcase, 
  BadgeCheck, 
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb
} from 'lucide-react';

const realityPoints = [
  {
    id: 1,
    icon: GraduationCap,
    myth: '"Degree = Guaranteed Job"',
    reality: 'Degree only makes you eligible — not job-ready.',
    details: [
      'Companies hire skills, not certificates.',
      'A degree is the entry ticket, not the destination.'
    ],
    note: 'Industry data shows 25–40% skill gap in fresh graduates across core engineering roles'
  },
  {
    id: 2,
    icon: School,
    myth: '"College Will Teach Everything Needed for Job"',
    reality: 'Colleges teach fundamentals, not industry tools.',
    details: [
      'Colleges build your base.',
      'Job-specific skills change every 3–5 years and must be learned separately.'
    ],
    note: 'This is not failure — it\'s how the education system is designed worldwide.'
  },
  {
    id: 3,
    icon: BookOpen,
    myth: '"If My Child Studies Well, Job Is Automatic"',
    reality: 'Marks help academics, not hiring decisions.',
    details: [
      'Recruiters care more about:',
      '• Practical skills',
      '• Internships',
      '• Certifications',
      'than CGPA alone.'
    ],
    note: null
  },
  {
    id: 4,
    icon: Building2,
    myth: '"If Student Is Unemployed, College Is Bad"',
    reality: 'Colleges are not training companies.',
    details: [
      'Their role:',
      '• Teach theory',
      '• Give exposure',
      '• Award degrees',
      'They cannot customize training for every company.'
    ],
    note: 'Blaming college is misunderstanding its role.'
  },
  {
    id: 5,
    icon: Users,
    myth: '"Companies Will Train Freshers Fully"',
    reality: 'Most companies expect job-ready candidates.',
    details: [
      'Training today is limited, fast, and basic.',
      'Skill gaps must be filled before joining.'
    ],
    note: null
  },
  {
    id: 6,
    icon: Award,
    myth: '"Extra Training Means College Is Weak"',
    reality: 'Extra training is normal and expected.',
    details: [
      'Doctors do residency.',
      'Pilots do flight hours.',
      'Engineers do certifications.'
    ],
    note: 'This does not mean their colleges failed.'
  },
  {
    id: 7,
    icon: Landmark,
    myth: '"Government Policies Guarantee Jobs"',
    reality: 'Government supports industries, not individual placements.',
    details: [
      'Policies create opportunities —',
      'Students must still qualify to grab them.'
    ],
    note: 'No policy can bypass skills.'
  },
  {
    id: 8,
    icon: Briefcase,
    myth: '"All Colleges Should Give Placements"',
    reality: 'Placement depends on:',
    details: [
      '• Student readiness',
      '• Market conditions',
      '• Company needs'
    ],
    note: 'Colleges facilitate, they do not employ students.'
  },
  {
    id: 9,
    icon: BadgeCheck,
    myth: '"External Certification Is a Scam"',
    reality: 'Certifications bridge the industry gap.',
    details: [
      'Colleges give breadth.',
      'Certifications give depth and specialization.'
    ],
    note: 'Most recruiters expect at least 1–2 certifications today.'
  },
  {
    id: 10,
    icon: AlertTriangle,
    myth: '"Unemployment Means Education System Failed"',
    reality: 'Unemployment usually means skill mismatch, not education failure.',
    details: [
      'Industry reports consistently show graduates are partially prepared, not useless.'
    ],
    note: null
  }
];

const GroundReality = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeader
          title="Top 10 Ground Reality Points"
          subtitle="Every Parent & Student Must Know Before Joining Any College"
        />

        {/* Reality Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {realityPoints.map((point) => {
            const Icon = point.icon;
            
            return (
              <Card 
                key={point.id} 
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 border-2 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-4 sm:p-6">
                  {/* Header with Number and Icon */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-lg sm:text-xl">
                      {point.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full">
                          Point {point.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Myth */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">
                          Myth
                        </span>
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1">
                          {point.myth}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reality */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                          Reality
                        </span>
                        <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mt-1">
                          {point.reality}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3 sm:p-4 mb-3">
                    {point.details.map((detail, idx) => (
                      <p 
                        key={idx} 
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Note */}
                  {point.note && (
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg p-3 sm:p-4 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-medium">
                        {point.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Final Truth Section */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black border-0 shadow-xl">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 mb-4 sm:mb-6">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Final Truth
              </h3>

              <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium">
                  College is a <span className="text-amber-400 font-bold">foundation</span>, not a job factory.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium">
                  <span className="text-green-400 font-bold">Student effort</span> + <span className="text-blue-400 font-bold">skill upgrade</span> = <span className="text-emerald-400 font-bold">employability</span>.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400 font-semibold text-sm sm:text-base">Wrong Approach</span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base">
                      Blaming colleges delays solutions
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm sm:text-base">Right Approach</span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base">
                      Understanding reality creates careers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GroundReality;