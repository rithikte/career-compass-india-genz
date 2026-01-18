import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plane, Radio, Wrench } from 'lucide-react';
const JobLifestyle = () => {
  const lifestyleData = [{
    title: 'Aerospace Engineer',
    icon: Plane,
    color: 'blue',
    factors: [{
      factor: 'Stress',
      rating: '3️⃣',
      explanation: 'Moderate — design and deadlines can be tight but predictable.'
    }, {
      factor: 'Travel',
      rating: '2️⃣',
      explanation: 'Mostly office/lab-based; travel only for project reviews or tests.'
    }, {
      factor: 'Growth',
      rating: '5️⃣',
      explanation: 'Very high — multiple sectors (space, defence, energy) open as you gain experience.'
    }, {
      factor: 'Recognition',
      rating: '4️⃣',
      explanation: 'Strong professional value — respected as a core R&D engineer.'
    }],
    summary: 'Balanced work life, good respect, and strong career growth — ideal for stable-minded students who enjoy problem-solving.'
  }, {
    title: 'Avionics Engineer',
    icon: Radio,
    color: 'orange',
    factors: [{
      factor: 'Stress',
      rating: '4️⃣',
      explanation: 'High — testing and fault detection under strict timelines.'
    }, {
      factor: 'Travel',
      rating: '3️⃣',
      explanation: 'Moderate — depends on lab location or on-site testing needs.'
    }, {
      factor: 'Growth',
      rating: '4️⃣',
      explanation: 'Good — as electronics and AI integration expand, demand rises.'
    }, {
      factor: 'Recognition',
      rating: '4️⃣',
      explanation: 'High — critical role in aircraft safety and tech innovation.'
    }],
    summary: 'More pressure but high pride — best for students who love electronics, problem-solving, and don\'t mind deadlines.'
  }, {
    title: 'Aircraft Maintenance Engineer (AME)',
    icon: Wrench,
    color: 'green',
    factors: [{
      factor: 'Stress',
      rating: '5️⃣',
      explanation: 'Very high — real aircraft safety responsibility.'
    }, {
      factor: 'Travel',
      rating: '4️⃣',
      explanation: 'Frequent — aircraft checks happen in various cities or airports.'
    }, {
      factor: 'Growth',
      rating: '4️⃣',
      explanation: 'Strong — steady rise with experience and type-rating licenses.'
    }, {
      factor: 'Recognition',
      rating: '5️⃣',
      explanation: 'Very high — licensed AMEs hold respected, safety-critical positions.'
    }],
    summary: 'Tough but rewarding — perfect for students who like practical work, discipline, and responsibility.'
  }];
  const summaryData = [{
    role: 'Aerospace Engineer',
    stress: '3',
    travel: '2',
    growth: '5',
    recognition: '4',
    insight: 'Balanced & growth-rich.'
  }, {
    role: 'Avionics Engineer',
    stress: '4',
    travel: '3',
    growth: '4',
    recognition: '4',
    insight: 'High-tech, fast-paced.'
  }, {
    role: 'AME',
    stress: '5',
    travel: '4',
    growth: '4',
    recognition: '5',
    insight: 'Demanding but respected.'
  }];
  const industryHealthData = [{
    title: 'Aerospace Engineer',
    icon: Plane,
    color: 'blue',
    status: '🟢 Healthy',
    reasons: ['India and global aerospace companies are investing heavily in new plants.', 'Defence spending is rising every year.', 'Private space companies (Skyroot, Agnikul) are hiring strongly.', 'Global demand for aircraft is increasing → more design work.'],
    summary: 'Aerospace is growing fast — more projects, more hiring, higher stability.'
  }, {
    title: 'Avionics Engineer',
    icon: Radio,
    color: 'orange',
    status: '🟢 Healthy',
    reasons: ['Electronics, sensors, autopilot systems, and drone tech are booming.', 'Defence electronics companies are expanding labs in India.', 'Car companies (EV/ADAS) are also hiring avionics-like talent.', 'High global demand for embedded engineers.'],
    summary: 'Very strong demand — avionics is one of the safest tech careers today.'
  }, {
    title: 'Aircraft Maintenance Engineer (AME)',
    icon: Wrench,
    color: 'green',
    status: '🟢🟢 Very Healthy',
    reasons: ['India buying more aircraft → airlines need more AMEs.', 'MRO hubs (Nagpur, Hyderabad, Kochi) are expanding rapidly.', 'AME work cannot be replaced by AI or robots.', 'Foreign companies want to invest in India\'s aviation maintenance sector.'],
    summary: 'AME industry is booming — highest stability and very strong demand.'
  }];
  const volatilityData = [{
    title: 'Aerospace Engineer',
    icon: Plane,
    color: 'blue',
    score: '7/10 (Stable)',
    factors: [{
      event: 'Recession',
      impact: 'Hiring slows but design & R&D projects continue.\nDefence spending usually remains stable.'
    }, {
      event: 'Pandemic',
      impact: 'Temporary slowdown, but aerospace R&D restarted quickly.'
    }, {
      event: 'Global Slowdown',
      impact: 'Export orders reduce → delayed hiring.\nDomestic defence programs keep industry alive.'
    }, {
      event: 'Oil Price Fluctuation',
      impact: 'Affects airlines, not engineering R&D much.'
    }, {
      event: 'War / Defence Tension',
      impact: 'Hiring increases due to defence manufacturing.'
    }, {
      event: 'Tech Disruption',
      impact: 'Favors engineers (AI-driven design, digital twin).'
    }],
    summary: 'Aerospace stays stable because defence + long-term projects protect the industry.'
  }, {
    title: 'Avionics Engineer',
    icon: Radio,
    color: 'orange',
    score: '8/10 (Very Stable)',
    factors: [{
      event: 'Recession',
      impact: 'Electronics + embedded systems keep hiring even when aviation slows.'
    }, {
      event: 'Pandemic',
      impact: 'Lab/embedded testing continued; many shifted to remote roles.'
    }, {
      event: 'Global Slowdown',
      impact: 'Defence electronics + drone industry keeps demand strong.'
    }, {
      event: 'Oil Price Fluctuation',
      impact: 'Almost no impact (electronics not tied to fuel markets).'
    }, {
      event: 'War / Defence Tension',
      impact: 'Hiring rises in communication, navigation, and radar systems.'
    }, {
      event: 'Tech Disruption',
      impact: 'Very positive → avionics grows with automation, AI systems, and drones.'
    }],
    summary: 'Avionics is one of the MOST crisis-proof engineering careers because electronics never stop.'
  }, {
    title: 'Aircraft Maintenance Engineer (AME)',
    icon: Wrench,
    color: 'green',
    score: '9/10 (Extremely Stable)',
    factors: [{
      event: 'Recession',
      impact: 'Airlines cut costs but still need AMEs for safety.'
    }, {
      event: 'Pandemic',
      impact: 'Temporary slowdown, but maintenance work was still essential for grounded fleets.'
    }, {
      event: 'Global Slowdown',
      impact: 'Flights reduce, but aircraft still require routine inspections.'
    }, {
      event: 'Oil Price Fluctuation',
      impact: 'Affects flight frequency, not maintenance needs.'
    }, {
      event: 'War / Defence Tension',
      impact: 'MRO + defence maintenance increases sharply.'
    }, {
      event: 'Tech Disruption',
      impact: 'AME role is protected; AI cannot replace licensed human checks.'
    }],
    summary: 'AME is one of the safest aviation jobs — even in crises, aircraft MUST be inspected.'
  }];
  const saturationData = [{
    title: 'Aerospace Engineer',
    icon: Plane,
    color: 'blue',
    forecast: [{
      year: '2025',
      status: '🟢 Expanding',
      meaning: 'New defence projects + private space companies.'
    }, {
      year: '2030',
      status: '🟢 Expanding',
      meaning: 'EV aircraft, hydrogen aviation, composites boom.'
    }, {
      year: '2035',
      status: '🟡 Steady',
      meaning: 'Competition increases as more graduates enter.'
    }, {
      year: '2040',
      status: '🟡 Steady',
      meaning: 'Still stable due to defence + R&D demand.'
    }],
    summary: 'Strong growth for 10 years, then stable — not saturated but more competitive.'
  }, {
    title: 'Avionics Engineer',
    icon: Radio,
    color: 'orange',
    forecast: [{
      year: '2025',
      status: '🟢 Expanding',
      meaning: 'Electronics + drones growing fast.'
    }, {
      year: '2030',
      status: '🟢 Expanding',
      meaning: 'AI autopilot + new sensors → more jobs.'
    }, {
      year: '2035',
      status: '🟢 Expanding',
      meaning: 'Defence electronics + robotics booming.'
    }, {
      year: '2040',
      status: '🟡 Steady',
      meaning: 'Stable demand; electronics never slows.'
    }],
    summary: 'Very strong growth for 15 years — one of the least saturated engineering fields.'
  }, {
    title: 'Aircraft Maintenance Engineer (AME)',
    icon: Wrench,
    color: 'green',
    forecast: [{
      year: '2025',
      status: '🟢 Expanding',
      meaning: 'Airlines buying more aircraft; MRO hubs growing.'
    }, {
      year: '2030',
      status: '🟢 Expanding',
      meaning: 'Technician shortage globally; high demand.'
    }, {
      year: '2035',
      status: '🟢 Expanding',
      meaning: 'Electric/hybrid planes need new maintenance skills.'
    }, {
      year: '2040',
      status: '🟢 Expanding',
      meaning: 'Very low saturation due to safety rules + license need.'
    }],
    summary: 'AME remains in expansion mode for the next 15+ years — extremely low saturation.'
  }];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200',
      orange: 'bg-orange-50 border-orange-200',
      green: 'bg-green-50 border-green-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return <div className="space-y-12 pb-12">
      {/* Job Lifestyle Index Section */}
      <section>
        <div className="text-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Job Lifestyle Index</h2>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare work-life balance, stress levels, and career growth across roles
          </p>
        </div>

        {/* Why this matters - Job Lifestyle Index */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Helps students understand daily work pressure and life balance before committing years to a career.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 mt-8">
          {lifestyleData.map((role, idx) => {
          const Icon = role.icon;
          return <Card key={idx} className={`border-2 ${getColorClasses(role.color)}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{role.title} – Job Lifestyle Index</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Factor</TableHead>
                          <TableHead className="font-semibold">Rating (1–5)</TableHead>
                          <TableHead className="font-semibold">Simple Explanation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {role.factors.map((item, i) => <TableRow key={i}>
                            <TableCell className="font-medium">{item.factor}</TableCell>
                            <TableCell className="text-lg">{item.rating}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{item.explanation}</TableCell>
                          </TableRow>)}
                      </TableBody>
                    </Table>
                  </div>

                  <div className={`mt-6 p-4 rounded-lg bg-${role.color}-100 border border-${role.color}-200`}>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Summary:</strong> {role.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Platform Summary */}
        <Card className="mt-8 border-2">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              Platform Summary View
            </h3>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Role</TableHead>
                    <TableHead className="font-semibold">Stress</TableHead>
                    <TableHead className="font-semibold">Travel</TableHead>
                    <TableHead className="font-semibold">Growth</TableHead>
                    <TableHead className="font-semibold">Recognition</TableHead>
                    <TableHead className="font-semibold">Lifestyle Insight</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summaryData.map((item, i) => <TableRow key={i}>
                      <TableCell className="font-medium">{item.role}</TableCell>
                      <TableCell>{item.stress}</TableCell>
                      <TableCell>{item.travel}</TableCell>
                      <TableCell>{item.growth}</TableCell>
                      <TableCell>{item.recognition}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{item.insight}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {summaryData.map((item, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4 border">
                  <h4 className="font-bold text-foreground mb-3">{item.role}</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Stress:</span>
                      <span className="font-semibold ml-2">{item.stress}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Travel:</span>
                      <span className="font-semibold ml-2">{item.travel}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Growth:</span>
                      <span className="font-semibold ml-2">{item.growth}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Recognition:</span>
                      <span className="font-semibold ml-2">{item.recognition}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <span className="text-muted-foreground text-sm">Insight: </span>
                    <span className="text-sm font-medium">{item.insight}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Industry Health Bar Section */}
      <section>
        <div className="text-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Industry Health Bar</h2>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Current state of each industry and why it matters for your career
          </p>
        </div>

        {/* Why this matters - Industry Health Bar */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Shows whether the industry is growing or risky, so students don't invest time in a weak field.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 mt-8">
          {industryHealthData.map((role, idx) => {
          const Icon = role.icon;
          return <Card key={idx} className={`border-2 ${getColorClasses(role.color)}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{role.title}</h3>
                      <p className="text-lg font-semibold text-green-600">{role.status}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">Why (in simple English):</p>
                    <ul className="space-y-2 ml-4">
                      {role.reasons.map((reason, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{reason}</span>
                        </li>)}
                    </ul>
                  </div>

                  <div className={`mt-6 p-4 rounded-lg bg-${role.color}-100 border border-${role.color}-200`}>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Simple Line:</strong> {role.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </section>

      {/* Industry Volatility Score Section */}
      <section className="bg-amber-50/50 dark:bg-amber-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Industry Volatility Score</h2>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
              Index
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            How stable is each career during economic changes and crises
          </p>
        </div>

        {/* Why this matters - Industry Volatility Score */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Helps students know how safe the career is during recessions, pandemics, and global crises.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 mt-6">
          {volatilityData.map((role, idx) => {
            const Icon = role.icon;
            const borderColor = role.color === 'blue' 
              ? 'border-blue-200 dark:border-blue-900' 
              : role.color === 'orange' 
              ? 'border-orange-200 dark:border-orange-900' 
              : 'border-green-200 dark:border-green-900';
            const scoreColor = role.color === 'blue' 
              ? 'text-blue-600 dark:text-blue-400' 
              : role.color === 'orange' 
              ? 'text-orange-600 dark:text-orange-400' 
              : 'text-green-600 dark:text-green-400';
            
            return (
              <Card key={idx} className={`overflow-hidden bg-white dark:bg-slate-900 ${borderColor}`}>
                <div className="p-4 sm:p-5 pb-3 sm:pb-4 border-b border-amber-100 dark:border-amber-900/50">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{role.title}</h3>
                  <p className={`text-sm sm:text-base font-bold ${scoreColor} mt-1`}>Score: {role.score}</p>
                </div>
                <CardContent className="p-4 sm:p-5">
                  <div className="space-y-3">
                    {role.factors.map((factor, i) => (
                      <div key={i} className="border-b border-amber-100 dark:border-amber-900/30 last:border-0 pb-3 last:pb-0">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <p className="font-semibold text-sm sm:text-base text-foreground">{factor.event}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{factor.impact}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-900/50">
                    <p className="text-xs sm:text-sm font-semibold text-primary">{role.summary}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Saturation Forecast Section */}
      <section>
        <div className="text-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Saturation Forecast</h2>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-emerald-200">
              Projection
            </span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Will there be enough jobs in the future? 
          </p>
        </div>

        {/* Why this matters - Saturation Forecast */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60">
          <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
            <span className="font-semibold">Why this matters:</span> Warns students about future competition so they don't enter overcrowded careers blindly.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 mt-8">
          {saturationData.map((role, idx) => {
          const Icon = role.icon;
          return <Card key={idx} className={`border-2 ${getColorClasses(role.color)}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{role.title} – Saturation Forecast</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Year</TableHead>
                          <TableHead className="font-semibold">Status</TableHead>
                          <TableHead className="font-semibold">Simple Meaning</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {role.forecast.map((item, i) => <TableRow key={i}>
                            <TableCell className="font-medium">{item.year}</TableCell>
                            <TableCell className="text-base">{item.status}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{item.meaning}</TableCell>
                          </TableRow>)}
                      </TableBody>
                    </Table>
                  </div>

                  <div className={`mt-6 p-4 rounded-lg bg-${role.color}-100 border border-${role.color}-200`}>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Simple Line:</strong> {role.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </section>

      {/* Bottom-line Truth - At bottom of page */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-[0.6875rem] sm:text-xs lg:text-sm font-bold text-white/90 uppercase tracking-wide mb-0.5 sm:mb-1">
              Bottom-line Truth
            </h3>
            <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-white font-medium leading-relaxed">
              Knowing this before choosing a degree prevents stress, regret, and wrong career decisions later.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default JobLifestyle;