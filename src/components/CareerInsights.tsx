import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Seo from './Seo';

export const CareerInsights = () => {
  // New Hiring Cycle Pattern Data
  const hiringCycleData = [
    {
      role: 'Aerospace Engineer (Design & R&D)',
      months: 'Jan–Mar, Jul–Sept',
      reason: 'New budgets and project cycles usually start'
    },
    {
      role: 'Avionics Engineer',
      months: 'Feb–Apr, Aug–Nov',
      reason: 'Electronics cycles and defence approvals'
    },
    {
      role: 'AME',
      months: 'All quarters',
      reason: 'Regular fleet expansion and mandatory maintenance'
    }
  ];

  // Failure Points Map - KEEPING AS IS
  const failurePoints = [
    {
      role: 'Aerospace',
      points: [
        { issue: 'Weak math', consequence: 'Struggles in CFD' },
        { issue: 'Weak CAD', consequence: 'Rejection in interviews' },
        { issue: 'No portfolio', consequence: 'Zero visibility' }
      ]
    },
    {
      role: 'Avionics',
      points: [
        { issue: 'Weak coding', consequence: 'Immediate disqualification' },
        { issue: 'Not building hardware projects', consequence: 'Low credibility' }
      ]
    },
    {
      role: 'AME',
      points: [
        { issue: 'Poor discipline', consequence: 'Rejection' },
        { issue: 'Failing DGCA exams', consequence: 'Delayed career' },
        { issue: 'Weak physical stamina', consequence: 'Burnout' }
      ]
    }
  ];

  // New Typical Hiring Focus Data
  const hiringFocusData = [
    { factor: 'Portfolio / Practical Work', aerospace: 'Very High', avionics: 'Very High', ame: 'High' },
    { factor: 'Certifications', aerospace: 'High', avionics: 'Medium', ame: 'Low' },
    { factor: 'Internship / Hands-on Experience', aerospace: 'Medium', avionics: 'Medium', ame: 'Very High' },
    { factor: 'College Tier', aerospace: 'Low', avionics: 'Low', ame: 'Low' },
    { factor: 'Marks / CGPA', aerospace: 'Very Low', avionics: 'Very Low', ame: 'Very Low' }
  ];

  // Survivor Profile - KEEPING AS IS
  const survivorProfiles = [
    { role: 'Aerospace', traits: ['Long patience', 'Comfortable with slow wins', 'Strong fundamentals'] },
    { role: 'Avionics', traits: ['Logical thinker', 'Loves debugging', 'Calm under stress'] },
    { role: 'AME', traits: ['Very disciplined', 'High stamina', 'Zero ego, high obedience'] }
  ];

  // New City-wise Internship Data
  const cityInternshipData = {
    aerospace: [
      { city: 'Bengaluru', availability: 'Very High', reason: 'Largest aerospace design & R&D hub' },
      { city: 'Hyderabad', availability: 'High', reason: 'Strong private + defence aerospace cluster' },
      { city: 'Pune', availability: 'Medium', reason: 'Project-based design & analysis roles' },
      { city: 'Kochi', availability: 'Medium', reason: 'Space park & seasonal research work' },
      { city: 'Nagpur', availability: 'Low', reason: 'Limited design roles; more MRO-focused' }
    ],
    avionics: [
      { city: 'Bengaluru', availability: 'Very High', reason: 'Major avionics, electronics & systems companies' },
      { city: 'Hyderabad', availability: 'Very High', reason: 'Defence avionics, radar & RF ecosystem' },
      { city: 'Pune', availability: 'High', reason: 'Embedded & electronics firms' },
      { city: 'Kochi', availability: 'Medium', reason: 'ISRO/DRDO-linked electronics labs nearby' },
      { city: 'Nagpur', availability: 'Low', reason: 'Small supplier ecosystem' }
    ],
    ame: [
      { city: 'Nagpur', availability: 'Very High', reason: 'Major MRO hub; continuous maintenance work' },
      { city: 'Hyderabad', availability: 'High', reason: 'Large airport MRO operations' },
      { city: 'Bengaluru', availability: 'High', reason: 'HAL overhaul & private MRO presence' },
      { city: 'Kochi', availability: 'Medium', reason: 'Active airport MRO units' },
      { city: 'Pune', availability: 'Medium', reason: 'Charter & airport maintenance activity' }
    ]
  };

  // New Internship Opportunities Data
  const internshipOpportunities = {
    aerospace: {
      title: 'Aerospace – Design, Manufacturing & Analysis',
      companies: [
        { name: 'HAL (Hindustan Aeronautics Limited)', exposure: 'Design, manufacturing, assembly' },
        { name: 'DRDO Labs', exposure: 'Aerodynamics, propulsion research' },
        { name: 'ISRO Vendor Companies', exposure: 'Structures, materials, fabrication' },
        { name: 'Tata Aerospace & Defence', exposure: 'Composite parts, engineering support' },
        { name: 'Mahindra Aerospace', exposure: 'Airframe manufacturing, quality' },
        { name: 'L&T Defence', exposure: 'Structures, systems integration' },
        { name: 'Quest Global', exposure: 'CAD, CAE, CFD (beginner projects)' },
        { name: 'Cyient', exposure: 'Design & simulation support' },
        { name: 'VTOL Aviation India', exposure: 'UAV design & testing' }
      ]
    },
    avionics: {
      title: 'Avionics – Electronics & Embedded Systems',
      companies: [
        { name: 'DRDO (Electronics labs)', exposure: 'Avionics systems research' },
        { name: 'BEL', exposure: 'Radar, communication systems' },
        { name: 'Tata Elxsi', exposure: 'Embedded software, testing' },
        { name: 'Cyient (Avionics)', exposure: 'Avionics integration & testing' },
        { name: 'Quest Global', exposure: 'Embedded & test automation' },
        { name: 'Aequs Aerospace', exposure: 'Electronics assembly & testing' },
        { name: 'Tonbo Imaging', exposure: 'Electro-optics & signal systems' },
        { name: 'IdeaForge', exposure: 'UAV control systems' },
        { name: 'Astra Microwave', exposure: 'RF & antenna systems' }
      ]
    },
    ame: {
      title: 'Aircraft Maintenance (AME)',
      companies: [
        { name: 'Air India Engineering Services (AIESL)', exposure: 'Heavy maintenance' },
        { name: 'IndiGo / SpiceJet / Vistara MRO units', exposure: 'Line maintenance & checks' },
        { name: 'GMR Aero Technic (Hyderabad)', exposure: 'Base maintenance' },
        { name: 'AAR India MRO (Nagpur)', exposure: 'Component overhaul' },
        { name: 'Air Works', exposure: 'General MRO exposure' },
        { name: 'GSA Aviation', exposure: 'Component & system servicing' },
        { name: 'Taneja Aerospace (TAAL)', exposure: 'Small aircraft maintenance' },
        { name: 'Airports Authority of India (AAI)', exposure: 'Airport systems maintenance' }
      ]
    }
  };

  // Helper function for availability badge color
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Very High':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300';
      case 'High':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Medium':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300';
      case 'Low':
        return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  // Helper function for hiring focus level color
  const getFocusLevelColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return 'text-emerald-700 dark:text-emerald-400 font-bold';
      case 'High':
        return 'text-blue-700 dark:text-blue-400 font-semibold';
      case 'Medium':
        return 'text-amber-700 dark:text-amber-400 font-medium';
      case 'Low':
        return 'text-slate-500 dark:text-slate-400';
      case 'Very Low':
        return 'text-slate-400 dark:text-slate-500';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <>
      <Seo 
        title="Career Insights - Hiring Cycles & Success Strategies" 
        description="Comprehensive guide to aerospace career planning: hiring cycles, failure points, success profiles, and city-wise internship opportunities." 
      />
      
      <div className="w-full min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Career Insights & Success Roadmap
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Strategic insights on hiring cycles, common pitfalls, and proven success patterns
            </p>
          </div>

          {/* Hiring Cycle Pattern */}
          <section className="mb-12 bg-blue-50/50 dark:bg-blue-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Hiring Cycle Pattern</h2>
                <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
                  Estimate
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on Industry Observation
              </p>
              
              {/* Why this matters */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                  <span className="font-semibold">Why this matters:</span> Hiring periods vary by company and year. These are common patterns, not guarantees.
                </p>
              </div>
            </div>
            
            {/* Desktop CSS Grid Table */}
            <div className="hidden sm:block bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-900 overflow-hidden shadow-sm">
              {/* Header Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base">Role</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">Months with More Hiring Activity</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base">Why</div>
              </div>
              
              {/* Data Rows */}
              {hiringCycleData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-3 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <div className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-semibold text-foreground">{item.role}</div>
                  <div className="p-3 sm:p-4 text-center">
                    <span className="inline-block px-2 py-1 text-xs sm:text-sm font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full">
                      {item.months}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-muted-foreground">{item.reason}</div>
                </div>
              ))}
            </div>
            
            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-3">
              {hiringCycleData.map((item, idx) => (
                <Card key={idx} className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                  <div className="p-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="text-sm font-bold text-foreground">{item.role}</h3>
                  </div>
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Peak Months:</span>
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-0.5 rounded-full">
                        {item.months}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Why:</span>
                      <p className="text-xs text-foreground mt-0.5">{item.reason}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Failure Points Map - KEEPING AS IS */}
          <section className="mb-12 bg-rose-50/50 dark:bg-rose-950/10 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Failure Points Map</h2>
              <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
                Estimate
              </span>
            </div>
            <p className="text-muted-foreground mb-4">A brutally honest map showing top reasons students struggle.</p>
            
            {/* Why this matters */}
            <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mb-6">
              <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                <span className="font-semibold">Why this matters:</span> Shows common mistakes early so students can fix weaknesses before facing rejection.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {failurePoints.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-900">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, pidx) => (
                        <li key={pidx} className="border-l-2 border-destructive pl-3">
                          <p className="font-semibold text-foreground">{point.issue}</p>
                          <p className="text-sm text-muted-foreground">→ {point.consequence}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Typical Hiring Focus by Role */}
          <section className="mb-12 bg-purple-50/50 dark:bg-purple-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Typical Hiring Focus by Role</h2>
                <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
                  Estimate
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                What actually matters when companies evaluate candidates
              </p>
              
              {/* Why this matters */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                  <span className="font-semibold">Why this matters:</span> Tells students what companies truly value, so they focus on the right skills, not myths.
                </p>
              </div>
            </div>
            
            {/* Desktop CSS Grid Table */}
            <div className="hidden sm:block bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base">Factor</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Aerospace Engineer
                  </span>
                </div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Avionics Engineer
                  </span>
                </div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    AME
                  </span>
                </div>
              </div>
              
              {/* Data Rows */}
              {hiringFocusData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <div className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-semibold text-foreground">{item.factor}</div>
                  <div className={`p-3 sm:p-4 text-xs sm:text-sm md:text-base text-center ${getFocusLevelColor(item.aerospace)}`}>{item.aerospace}</div>
                  <div className={`p-3 sm:p-4 text-xs sm:text-sm md:text-base text-center ${getFocusLevelColor(item.avionics)}`}>{item.avionics}</div>
                  <div className={`p-3 sm:p-4 text-xs sm:text-sm md:text-base text-center ${getFocusLevelColor(item.ame)}`}>{item.ame}</div>
                </div>
              ))}
            </div>
            
            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-3">
              {hiringFocusData.map((item, idx) => (
                <Card key={idx} className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                  <div className="p-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="text-sm font-bold text-foreground">{item.factor}</h3>
                  </div>
                  <CardContent className="p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-[10px] text-muted-foreground mb-1">Aerospace</p>
                        <p className={`text-xs ${getFocusLevelColor(item.aerospace)}`}>{item.aerospace}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground mb-1">Avionics</p>
                        <p className={`text-xs ${getFocusLevelColor(item.avionics)}`}>{item.avionics}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground mb-1">AME</p>
                        <p className={`text-xs ${getFocusLevelColor(item.ame)}`}>{item.ame}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How to Read + Reality Note */}
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-bold text-foreground mb-3">How to read this table (simple)</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                  <li><span className="font-semibold text-emerald-700 dark:text-emerald-400">Very High</span> → strongly influences shortlisting</li>
                  <li><span className="font-semibold text-blue-700 dark:text-blue-400">High</span> → helpful advantage</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Medium</span> → supportive, not decisive</li>
                  <li><span className="text-slate-500">Low / Very Low</span> → rarely a deciding factor</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200 mb-2">Reality Note</h4>
                <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                  Most candidates get rejected not because of marks or college name, but because they lack practical skills, real work exposure, or proof of ability.
                </p>
              </div>
            </div>
          </section>

          {/* Survivor Profile - KEEPING AS IS */}
          <section className="mb-12 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Survivor Profile</h2>
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-blue-200">
                  Index
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                The personality profile of students who survive and grow.
              </p>
              
              {/* Why this matters */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                  <span className="font-semibold">Why this matters:</span> Helps students check if their personality and discipline match the career's long-term demands.
                </p>
              </div>
            </div>
            
            {/* Desktop CSS Grid Table */}
            <div className="hidden sm:block bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900 overflow-hidden shadow-sm">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base">Role</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">Trait 1</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">Trait 2</div>
                <div className="p-3 sm:p-4 font-bold text-xs sm:text-sm md:text-base text-center">Trait 3</div>
              </div>
              
              {/* Data Rows */}
              {survivorProfiles.map((item, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-4 gap-2 sm:gap-4 border-b border-emerald-100 dark:border-emerald-900/50 last:border-0 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-colors"
                >
                  <div className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-semibold text-foreground">{item.role}</div>
                  {item.traits.map((trait, tidx) => (
                    <div key={tidx} className="p-3 sm:p-4 text-center">
                      <span className="inline-block px-2 py-1 text-xs sm:text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-lg">
                        {trait}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-3">
              {survivorProfiles.map((item, idx) => (
                <Card key={idx} className="overflow-hidden bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-900">
                  <div className="p-3 pb-2 border-b border-emerald-100 dark:border-emerald-900/50">
                    <h3 className="text-sm font-bold text-foreground">{item.role}</h3>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex flex-wrap gap-2">
                      {item.traits.map((trait, tidx) => (
                        <span 
                          key={tidx} 
                          className="inline-block px-2 py-1 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-lg"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* City-wise Internship Opportunities */}
          <section className="mb-12 bg-amber-50/50 dark:bg-amber-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">City-wise Internship Opportunities</h2>
                <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
                  Estimate
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on observed industry activity, not guarantees
              </p>
              
              {/* Why this matters */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                  <span className="font-semibold">Why this matters:</span> Internship availability varies by company, season, and student profile. This section reflects typical patterns seen over time.
                </p>
              </div>
            </div>

            {/* Three Role Cards */}
            <div className="grid gap-6 lg:grid-cols-3">
              {Object.entries(cityInternshipData).map(([roleKey, cities]) => {
                const roleLabel = roleKey === 'aerospace' ? 'Aerospace Engineer' : roleKey === 'avionics' ? 'Avionics Engineer' : 'Aircraft Maintenance Engineer (AME)';
                const borderColor = roleKey === 'aerospace' ? 'border-l-blue-500' : roleKey === 'avionics' ? 'border-l-purple-500' : 'border-l-amber-500';
                
                return (
                  <Card key={roleKey} className={`overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 border-l-4 ${borderColor}`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg">{roleLabel}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Desktop Table */}
                      <div className="hidden sm:block">
                        <div className="grid grid-cols-3 gap-1 text-xs font-semibold text-muted-foreground border-b border-slate-200 dark:border-slate-700 pb-2 mb-2">
                          <span>City</span>
                          <span className="text-center">Availability</span>
                          <span>Why</span>
                        </div>
                        <div className="space-y-2">
                          {cities.map((city, idx) => (
                            <div key={idx} className="grid grid-cols-3 gap-1 items-center text-xs">
                              <span className="font-medium text-foreground">{city.city}</span>
                              <span className="text-center">
                                <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${getAvailabilityColor(city.availability)}`}>
                                  {city.availability}
                                </span>
                              </span>
                              <span className="text-muted-foreground text-[11px] leading-tight">{city.reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Mobile Layout */}
                      <div className="sm:hidden space-y-3">
                        {cities.map((city, idx) => (
                          <div key={idx} className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-2 last:pb-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-foreground">{city.city}</span>
                              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getAvailabilityColor(city.availability)}`}>
                                {city.availability}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">{city.reason}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* How to Read Legend */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 mt-6">
              <h4 className="text-sm font-bold text-foreground mb-3">How to read this section (simple)</h4>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-semibold text-xs">Very High</span>
                  <span className="text-muted-foreground">→ internships commonly available</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold text-xs">High</span>
                  <span className="text-muted-foreground">→ good chances with preparation</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-semibold text-xs">Medium</span>
                  <span className="text-muted-foreground">→ seasonal or limited openings</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold text-xs">Low</span>
                  <span className="text-muted-foreground">→ fewer opportunities; harder entry</span>
                </span>
              </div>
            </div>
          </section>

          {/* Internship Opportunities */}
          <section className="mb-12 bg-cyan-50/50 dark:bg-cyan-950/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Internship Opportunities</h2>
                <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-amber-200">
                  Estimate
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Top organizations offering internships in each domain
              </p>
              
              {/* Why this matters */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-4">
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-amber-700">
                  <span className="font-semibold">Why this matters:</span> Shows real entry points into the industry so students can plan practical exposure early.
                </p>
              </div>
            </div>

            {/* Three Domain Sections */}
            <div className="space-y-6">
              {Object.entries(internshipOpportunities).map(([roleKey, data]) => {
                const borderColor = roleKey === 'aerospace' ? 'border-l-blue-500' : roleKey === 'avionics' ? 'border-l-purple-500' : 'border-l-amber-500';
                const headerBg = roleKey === 'aerospace' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500' 
                  : roleKey === 'avionics' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500' 
                  : 'bg-gradient-to-r from-amber-600 to-amber-500';
                
                return (
                  <Card key={roleKey} className={`overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 border-l-4 ${borderColor}`}>
                    <CardHeader className={`${headerBg} text-white py-3 sm:py-4`}>
                      <CardTitle className="text-sm sm:text-base md:text-lg font-bold">{data.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      {/* Desktop Table */}
                      <div className="hidden sm:block">
                        <div className="grid grid-cols-2 gap-4 bg-slate-100 dark:bg-slate-800 px-4 py-2.5 font-semibold text-xs sm:text-sm text-muted-foreground">
                          <span>Organization</span>
                          <span>Typical Exposure Areas</span>
                        </div>
                        <div className="divide-y divide-slate-200 dark:divide-slate-700">
                          {data.companies.map((company, idx) => (
                            <div key={idx} className="grid grid-cols-2 gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                              <span className="font-medium text-xs sm:text-sm text-foreground">{company.name}</span>
                              <span className="text-xs sm:text-sm text-muted-foreground">{company.exposure}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Mobile Layout */}
                      <div className="sm:hidden divide-y divide-slate-200 dark:divide-slate-700">
                        {data.companies.map((company, idx) => (
                          <div key={idx} className="p-3">
                            <p className="font-medium text-sm text-foreground mb-1">{company.name}</p>
                            <p className="text-xs text-muted-foreground">{company.exposure}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Bottom-line Truth */}
          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-[0.6875rem] sm:text-xs lg:text-sm font-bold text-white/90 uppercase tracking-wide mb-0.5 sm:mb-1">
                  Bottom-line Truth
                </h3>
                <p className="text-[0.6875rem] sm:text-xs lg:text-sm text-white font-medium leading-relaxed">
                  Knowing this before choosing a degree saves students from wrong preparation, wasted years, and missed opportunities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
