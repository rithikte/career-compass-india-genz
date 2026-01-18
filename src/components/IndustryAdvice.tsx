import { GraduationCap, Award, Calendar, MessageSquareQuote, Users, Target, Lightbulb, CheckCircle2, XCircle, AlertTriangle, Brain, TrendingUp, Focus, Compass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SourceBadge from './SourceBadge';

const IndustryAdvice = () => {
  return <div className="space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* SECTION 1: ADVICE FROM EXPERIENCE */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          <Card className="relative bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700"></div>
            
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 sm:p-3 bg-slate-100 rounded-xl">
                  <MessageSquareQuote className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Advice From Experience
                </CardTitle>
              </div>
              
              {/* Quote Block */}
              <div className="mt-3 sm:mt-4 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border-l-4 border-slate-600">
                <p className="text-slate-700 text-sm sm:text-base lg:text-lg italic leading-relaxed">
                  "I studied this degree and worked in these roles for years.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>I've seen who grows, who survives, and who drops out quietly."
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3 space-y-4 sm:space-y-5">
              {/* Advice Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Point 1 */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">This industry is not for everyone</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Many call it "the best" without working in it. I've seen good students leave because they couldn't handle the pressure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">A degree name won't save you</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Students from top colleges fail without skills. Average-college students succeed when skills are strong.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Interest matters more than marks</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        If you don't like the subject, daily work becomes hard. This career tests thinking and focus, not memory.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Half effort always fails</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        You may pass exams. But weak skills get exposed fast in real jobs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Advice Banner */}
              <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 text-white rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                  <p className="text-center text-sm sm:text-base lg:text-lg font-semibold">
                    If you're ready to learn deeply and stay patient — this career can reward you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 2: HONEST ADVICE FOR AVERAGE STUDENTS */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          <Card className="relative bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
            
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 sm:p-3 bg-emerald-100 rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  One Honest Advice for Average Students
                </CardTitle>
              </div>
              
              {/* Quote Block */}
              <div className="mt-3 sm:mt-4 p-4 sm:p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-500">
                <p className="text-slate-700 text-sm sm:text-base lg:text-lg italic leading-relaxed">
                  "I've seen toppers fail. I've seen average students succeed.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Marks help you enter — focus helps you survive."
                </p>
              </div>

              {/* Sub-intro */}
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                If you are average in studies but willing to learn, listen carefully:
              </p>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3 space-y-4 sm:space-y-5">
              {/* Advice Points - Stacked on mobile, 2 cols on md+ */}
              <div className="space-y-3 sm:space-y-4">
                {/* Point 1 */}
                <div className="flex gap-3 sm:gap-4 items-start p-4 sm:p-5 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-2">Being average today doesn't mean weak tomorrow</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Most working professionals were not toppers. They improved step by step by fixing basics and practicing daily.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-3 sm:gap-4 items-start p-4 sm:p-5 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-2">Consistency beats talent</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      One focused hour every day for a few years beats last-minute effort. Industry values steady learners, not flashy students.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-3 sm:gap-4 items-start p-4 sm:p-5 bg-gradient-to-br from-green-50 to-lime-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-2">Start from zero, but start right</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Weak basics are not a problem if you rebuild them slowly. Strong basics + tools + practice build confidence.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-3 sm:gap-4 items-start p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg mb-2">Industry looks at skills, not past marks</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Companies care about what you can do now. Skills remove academic labels.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 3: FAILURE COMES FROM LACK OF CLARITY */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          <Card className="relative bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
            
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-xl">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Failure usually comes from lack of clarity, not lack of talent
                </CardTitle>
              </div>
              
              {/* Main statement */}
              <div className="mt-3 sm:mt-4 p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
                <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Most students don't fail because the degree is difficult.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>They fail because they don't know <strong>what to focus on, when, and why.</strong>
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3 space-y-4 sm:space-y-5">
              {/* Two column layout on larger screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                {/* They Do (Wrong behaviors) */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    <h4 className="font-bold text-red-700 text-base sm:text-lg">They:</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-xs sm:text-sm">✗</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Study everything without clear priority</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-xs sm:text-sm">✗</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Don't know which skills matter for jobs</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-xs sm:text-sm">✗</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Compare with others and lose confidence</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-xs sm:text-sm">✗</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Panic instead of fixing basics step by step</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-red-200">
                    <p className="text-red-700 font-semibold text-xs sm:text-sm flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Result: effort goes in the wrong direction.
                    </p>
                  </div>
                </div>

                {/* Once Focus is Clear (Right behaviors) */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                    <h4 className="font-bold text-emerald-700 text-base sm:text-lg">Once focus is clear:</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-emerald-600 text-xs sm:text-sm">✓</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Effort becomes useful</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-emerald-600 text-xs sm:text-sm">✓</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Confidence grows naturally</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-200 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-emerald-600 text-xs sm:text-sm">✓</span>
                      </span>
                      <span className="text-slate-700 text-xs sm:text-sm">Average students improve faster</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Takeaway Banner */}
              <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white rounded-xl p-4 sm:p-5">
                <div className="flex items-start sm:items-center gap-3">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <p className="font-bold text-sm sm:text-base lg:text-lg mb-1">Final takeaway for students & parents:</p>
                    <p className="text-xs sm:text-sm lg:text-base opacity-95">
                      Talent helps. Marks help. But <span className="font-bold underline decoration-2">clarity + direction + consistency</span> decide real success.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ENTRANCE EXAMS */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              
              <CardTitle className="text-2xl sm:text-3xl">Entrance Exams Used to Enter This Degree</CardTitle>
            </div>
            <CardDescription className="text-lg font-semibold">Common and less-known pathways to Mechanical Engineering</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-6">
            {/* Main Entrance Exams */}
            <div className="space-y-3">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                Primary Entrance Exams
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">JEE Main</h5>
                  <p className="text-slate-700 text-xs sm:text-sm">For NITs, IIITs, and many central/private engineering colleges</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">JEE Advanced</h5>
                  <p className="text-slate-700 text-xs sm:text-sm">For IITs (Mechanical Engineering)</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">State Engineering Entrance Exams</h5>
                  <p className="text-slate-700 text-xs sm:text-sm">TS EAMCET / AP EAMCET / KCET / MHT CET – for state colleges</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">University Entrance Exams</h5>
                  <p className="text-slate-700 text-xs sm:text-sm">Some universities conduct their own tests</p>
                </div>
              </div>
            </div>

            {/* Less-Known Exams */}
            <div className="space-y-3">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                Less-Known Exams / Entry Routes
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* COMEDK UGET */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg sm:text-xl">1️⃣</span>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">COMEDK UGET</h5>
                  </div>
                  <ul className="text-slate-700 text-xs sm:text-sm space-y-1.5">
                    <li>• Used by private engineering colleges in Karnataka</li>
                    <li>• Many students think only KCET works → <span className="font-semibold text-red-600">wrong</span></li>
                    <li>• Good backup for Mechanical seats</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-cyan-200">
                    <p className="text-xs text-amber-700 font-medium">
                      <span className="font-bold">Why hidden:</span> Not promoted outside Karnataka much
                    </p>
                  </div>
                </div>

                {/* CUSAT CAT */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border-2 border-teal-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg sm:text-xl">2️⃣</span>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">CUSAT CAT</h5>
                  </div>
                  <p className="text-slate-600 text-xs mb-2">(Cochin University)</p>
                  <ul className="text-slate-700 text-xs sm:text-sm space-y-1.5">
                    <li>• Entry to Cochin University of Science & Technology</li>
                    <li>• Mechanical Engineering available</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-teal-200">
                    <p className="text-xs text-amber-700 font-medium">
                      <span className="font-bold">Why hidden:</span> University-specific, low marketing
                    </p>
                  </div>
                </div>

                {/* AEEE */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg sm:text-xl">3️⃣</span>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">AEEE</h5>
                  </div>
                  <p className="text-slate-600 text-xs mb-2">(Amrita University Entrance Exam)</p>
                  <ul className="text-slate-700 text-xs sm:text-sm space-y-1.5">
                    <li>• Entry to Amrita Vishwa Vidyapeetham</li>
                    <li>• Mechanical Engineering across multiple campuses</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-violet-200">
                    <p className="text-xs text-amber-700 font-medium">
                      <span className="font-bold">Why hidden:</span> Society focuses only on IIT/NIT narrative
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Truth */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-4 sm:p-5">
              <p className="text-center text-sm sm:text-base md:text-lg font-semibold">Exam rank decides college entry, but career success depends on skills<span className="underline decoration-2">career success depends on skills</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ADMISSION PROCESS */}
        <Card className="bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              
              <CardTitle className="text-2xl sm:text-3xl">Admission Process</CardTitle>
            </div>
            <CardDescription className="text-lg font-semibold">Step-by-step guide to secure your admission</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {/* Step 1 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">1</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Finish +2 (MPC Stream)</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">You must take Maths, Physics, Chemistry in Intermediate.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">2</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Write Entrance Exam</span>
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside text-sm sm:text-base">
                    <li><strong>TG students:</strong> TS EAPCET</li>
                    <li><strong>Optional:</strong> JEE Main for NITs, IIITs, and top private colleges</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">3</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Check Eligibility</span>
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside text-sm sm:text-base">
                    <li>45% or more in PCM (40% for reserved categories)</li>
                    <li>Must be a local student of TG (for state quota)</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">4</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Apply Online</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">Fill EAPCET form → Upload photo/sign → Pay fee → Select exam center.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">5</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Prepare for Exam</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">Focus on Maths (most weightage), then Physics, Chemistry. Use previous papers & mock tests for speed and accuracy.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">6</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Write Exam & Get Rank</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">After results, download Rank Card.</p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">7</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Attend Counselling</span>
                  </h4>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside text-sm sm:text-base">
                    <li>Pay counselling fee online</li>
                    <li>Verify certificates (online/offline)</li>
                    <li>Choose colleges and branches (web options)</li>
                    <li>Wait for seat allotment</li>
                  </ul>
                </div>
              </div>

              {/* Step 8 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border-2 border-teal-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">8</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Confirm Admission</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">Once seat allotted → pay college fee → report to college with documents.</p>
                </div>
              </div>

              {/* Step 9 */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">9</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                    
                    <span>Submit Documents & Join</span>
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base mb-2">Carry originals + photocopies:</p>
                  <p className="text-slate-700 text-sm sm:text-base">Aadhar, 10th & Inter marks, TC, EAPCET rank card, income & caste certificate (if any).</p>
                  <p className="text-slate-700 font-semibold mt-2 text-sm sm:text-base">Join the College on the Date of Opening</p>
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
          
        </Card>

      </div>
    </div>;
};
export default IndustryAdvice;