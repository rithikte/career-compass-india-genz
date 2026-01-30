import React from 'react';
import { Building2, HardHat, ClipboardCheck, Calculator, Clock, AlertTriangle, CheckCircle, Target, Award, FileText, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const BTechCivil = () => {
  const subIndustries = [
    {
      id: 'building-construction',
      subIndustry: 'Building Construction (Residential / Commercial / Industrial)',
      cluster: 'Site Execution (Field)',
      jobRole: 'Graduate Engineer Trainee (Civil) / Site Engineer Trainee',
      icon: Building2,
      color: 'blue',
      fit: {
        degreePreference: 'Very High',
        fresherAcceptance: 'High',
        entryRoute: 'GET / Trainee / Campus'
      },
      coreSubjects: [
        { rank: 1, name: 'Construction Management & Methods' },
        { rank: 2, name: 'RCC Basics (Design + Detailing understanding)' },
        { rank: 3, name: 'Building Materials & Concrete Technology' },
        { rank: 4, name: 'Surveying & Levelling (site setting-out use)' }
      ],
      criticalSkills: [
        'Reading drawings + converting to site execution steps (BBS, pour plan, checks)',
        'Measurement + reconciliation (cement/steel/concrete, wastage control)'
      ],
      realityChecks: {
        evidenceConfidence: 'Strong',
        evidenceNote: 'GET/Trainee hiring is common across major contractors',
        substitutionRisk: 'Medium',
        substitutionNote: 'competes with B.Tech Mech in some "GET-any-branch" programs; Civil wins when it\'s execution-heavy',
        campusVsOffCampus: 'Balanced',
        campusNote: 'campus helps for large EPC; off-campus exists for site roles'
      },
      certifications: [
        { name: 'Autodesk AutoCAD Certified User (ACU)', note: '' },
        { name: 'NPTEL "Construction Management" (IIT/NPTEL)', note: 'used as proof of fundamentals + planning language; not a magic ticket' }
      ],
      practicalTruth: {
        commonMistake: 'Talking theory, failing basic site quantity/level/plumb checks',
        topFailure: 'Can\'t manage daily site coordination + documentation discipline',
        companyType: 'EPC',
        realityNote: 'This is hard, field-heavy, and accountability starts day-1—site engineers who can "close work fronts" survive.'
      }
    },
    {
      id: 'construction-quality',
      subIndustry: 'Construction Quality (Civil Works)',
      cluster: 'QA/QC for Concrete + Rebar + Site Tests',
      jobRole: 'QA/QC Engineer Trainee (Civil) / Assistant QA/QC (0–1 yr)',
      icon: ClipboardCheck,
      color: 'green',
      fit: {
        degreePreference: 'High',
        fresherAcceptance: 'Medium',
        entryRoute: 'Trainee / Off-campus / Internship→PPO'
      },
      coreSubjects: [
        { rank: 1, name: 'Building Materials & Testing (cement/aggregate/concrete)' },
        { rank: 2, name: 'RCC Fundamentals (reinforcement, cover, pour checks)' },
        { rank: 3, name: 'Construction Methods (workmanship + checklists)' },
        { rank: 4, name: 'Basics of Geotech (compaction, soil tests relevance)' }
      ],
      criticalSkills: [
        'Concrete/rebar inspection + test interpretation (slump, cube results, NCR logic)',
        'QA documentation (checklists, pour cards, traceability, approvals)'
      ],
      realityChecks: {
        evidenceConfidence: 'Moderate',
        evidenceNote: 'exists as trainee roles, but more common in mid-sized infra firms than top-tier design firms',
        substitutionRisk: 'Medium',
        substitutionNote: 'competes with Diploma + Civil; degree helps if you show test + documentation maturity',
        campusVsOffCampus: 'Off-campus common',
        campusNote: 'many hires happen via job boards/local referrals'
      },
      certifications: [
        { name: 'ISO 9001:2015 Internal Auditor (Quality)', note: 'helps for QA language + audits' },
        { name: 'Concrete Technology (NPTEL)', note: 'directly relevant to test reasoning' }
      ],
      practicalTruth: {
        commonMistake: 'Acting like QA is "paper work" and missing site reality',
        topFailure: 'Can\'t stand ground with site team + client when quality conflicts happen',
        companyType: 'EPC',
        realityNote: 'QA/QC is pressure + conflict management; if you\'re soft, you get ignored.'
      }
    },
    {
      id: 'construction-commercials',
      subIndustry: 'Construction Commercials (Billing / Estimation)',
      cluster: 'Quantity Takeoff + RA Bills + BOQ',
      jobRole: 'Trainee Quantity Surveyor / Billing Engineer (Civil, 0–1 yr)',
      icon: Calculator,
      color: 'purple',
      fit: {
        degreePreference: 'High',
        fresherAcceptance: 'Medium',
        entryRoute: 'Trainee / Off-campus / Internship→PPO'
      },
      coreSubjects: [
        { rank: 1, name: 'Estimating, Costing & Valuation (QS basics)' },
        { rank: 2, name: 'RCC + Steel Quantities (practical takeoff logic)' },
        { rank: 3, name: 'Construction Management (measurement cycles, RA billing flow)' },
        { rank: 4, name: 'Building Materials (specs interpretation)' }
      ],
      criticalSkills: [
        'BOQ/IFC drawing quantity takeoff accuracy (error-free measurement)',
        'RA billing + subcontractor measurement reconciliation'
      ],
      realityChecks: {
        evidenceConfidence: 'Moderate',
        evidenceNote: 'trainee QS roles exist but are location/company dependent',
        substitutionRisk: 'High',
        substitutionNote: 'often replaced by Diploma/BE + experienced QS; fresher entry is possible but fragile',
        campusVsOffCampus: 'Off-campus common',
        winningEdge: 'Civil degree wins when you prove "measurement accuracy + spec reading + billing workflow" with a real BOQ sample'
      },
      certifications: [
        { name: 'Advanced Excel for Construction QS', note: 'industry-focused, not generic Excel' },
        { name: 'Autodesk AutoCAD Certified User (ACU)', note: 'takeoff + drawing handling' }
      ],
      practicalTruth: {
        commonMistake: 'Submitting "approx quantities" instead of auditable takeoff sheets',
        topFailure: 'Billing mistakes → money disputes → you get blocked',
        companyType: 'Developer',
        realityNote: 'This role is money-linked; accuracy beats confidence.'
      }
    },
    {
      id: 'project-controls',
      subIndustry: 'Project Controls (Schedule / Progress)',
      cluster: 'Planning + Tracking (Site + HO)',
      jobRole: 'Junior Planning Engineer (Civil) — only via Internship→PPO or strong trainee pipeline',
      icon: Clock,
      color: 'amber',
      industry: 'Infrastructure Project Delivery',
      fit: {
        degreePreference: 'Medium',
        fresherAcceptance: 'Low',
        entryRoute: 'Internship→PPO (most companies prefer some site exposure first)'
      },
      coreSubjects: [
        { rank: 1, name: 'Construction Management (WBS, sequencing, productivity logic)' },
        { rank: 2, name: 'RCC/Construction Methods (activity-level understanding)' },
        { rank: 3, name: 'Quantity/Measurement basics (progress calculation logic)' },
        { rank: 4, name: 'Surveying basics (site progress references)' }
      ],
      criticalSkills: [
        'Schedule building + updating (baseline vs actual, critical path thinking)',
        'Progress measurement system (physical % rules, weekly dashboards)'
      ],
      realityChecks: {
        evidenceConfidence: 'Weak',
        evidenceNote: 'planning roles exist widely, but true fresher entry is less common than site/QS',
        substitutionRisk: 'High',
        substitutionNote: 'often replaced by experienced planners; sometimes Mech also competes',
        campusVsOffCampus: 'Campus-heavy',
        campusNote: 'when it happens, it\'s usually via structured programs',
        winningEdge: 'Civil wins if you show a real project schedule (WBS + logic + updates) and can explain site sequencing without guessing'
      },
      certifications: [
        { name: 'Oracle Primavera P6 Fundamentals', note: 'recognized in Indian planning hiring' },
        { name: 'Microsoft Project', note: 'Project scheduling credential/course' }
      ],
      practicalTruth: {
        commonMistake: 'Thinking planning is "software work" and failing activity logic',
        topFailure: 'Cannot defend schedule assumptions in reviews',
        companyType: 'EPC',
        realityNote: 'Planning without site understanding is fake planning—most freshers fail here.'
      }
    }
  ];

  const roleIndexTable = [
    { industry: 'Construction & Infrastructure', subIndustry: 'Building Construction', cluster: 'Site Execution (Field)', role: 'Graduate Engineer Trainee (Civil) / Site Engineer Trainee' },
    { industry: 'Construction & Infrastructure', subIndustry: 'Construction Quality', cluster: 'QA/QC for Concrete + Rebar + Site Tests', role: 'QA/QC Engineer Trainee (Civil)' },
    { industry: 'Construction & Infrastructure', subIndustry: 'Construction Commercials', cluster: 'Quantity Takeoff + RA Bills + BOQ', role: 'Trainee Quantity Surveyor / Billing Engineer' },
    { industry: 'Infrastructure Project Delivery', subIndustry: 'Project Controls', cluster: 'Planning + Tracking (Site + HO)', role: 'Junior Planning Engineer (Internship→PPO only)' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; light: string }> = {
      blue: { bg: 'bg-blue-600', border: 'border-blue-200', text: 'text-blue-600', light: 'bg-blue-50' },
      green: { bg: 'bg-green-600', border: 'border-green-200', text: 'text-green-600', light: 'bg-green-50' },
      purple: { bg: 'bg-purple-600', border: 'border-purple-200', text: 'text-purple-600', light: 'bg-purple-50' },
      amber: { bg: 'bg-amber-600', border: 'border-amber-200', text: 'text-amber-600', light: 'bg-amber-50' }
    };
    return colors[color] || colors.blue;
  };

  const getFitBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'very high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'high':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-white rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6 sm:translate-y-9 sm:-translate-x-9 md:translate-y-12 md:-translate-x-12"></div>
        
        <div className="relative text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-xs sm:text-sm md:text-base">B.Tech Civil Engineering</span>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Construction & Infrastructure</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Site execution, quality control, billing & project planning roles for civil engineers
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">2</div>
              <div className="text-[10px] sm:text-xs text-white/70">Industries</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">4</div>
              <div className="text-[10px] sm:text-xs text-white/70">Sub-industries</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">4</div>
              <div className="text-[10px] sm:text-xs text-white/70">Clusters</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">4</div>
              <div className="text-[10px] sm:text-xs text-white/70">Job Roles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Industry Cards */}
      {subIndustries.map((item, index) => {
        const Icon = item.icon;
        const colorClasses = getColorClasses(item.color);
        
        return (
          <Card key={item.id} className={`border-2 ${colorClasses.border}`}>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <div className={`p-2 rounded-lg ${colorClasses.light}`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClasses.text}`} />
                </div>
                {item.industry && (
                  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-slate-200">
                    {item.industry}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-primary/20">
                  Role {index + 1} of 4
                </span>
              </div>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                {item.subIndustry}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base font-medium mt-1">
                <span className="font-semibold">Cluster:</span> {item.cluster}
              </CardDescription>
              <div className={`mt-2 inline-flex items-center gap-2 ${colorClasses.light} ${colorClasses.text} rounded-lg px-3 py-1.5 text-sm sm:text-base font-semibold`}>
                <HardHat className="w-4 h-4" />
                {item.jobRole}
              </div>
            </CardHeader>
            
            <CardContent className="p-4 sm:p-6 space-y-6">
              {/* Fit & Entry */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Fit & Entry
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Degree Preference Fit Index</div>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold border ${getFitBadgeColor(item.fit.degreePreference)}`}>
                      {item.fit.degreePreference}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Fresher Acceptance Probability</div>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold border ${getFitBadgeColor(item.fit.fresherAcceptance)}`}>
                      {item.fit.fresherAcceptance}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Entry Route</div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item.fit.entryRoute}</span>
                  </div>
                </div>
              </div>

              {/* Core Subjects */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Top 4 Core Subjects (Ranked 1–4)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.coreSubjects.map((subject) => (
                    <div key={subject.rank} className="flex items-start gap-2 bg-slate-50 rounded-lg p-2 sm:p-3">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full ${colorClasses.bg} text-white text-xs font-bold flex items-center justify-center`}>
                        {subject.rank}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700">{subject.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Skills */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  2 Exclusive Job-Critical Skills
                </h4>
                <div className="space-y-2">
                  {item.criticalSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg p-2 sm:p-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reality Checks */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Reality Checks
                </h4>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 sm:p-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-amber-700 font-semibold mb-1">Evidence Confidence</div>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold border ${
                        item.realityChecks.evidenceConfidence === 'Strong' ? 'bg-green-100 text-green-800 border-green-200' :
                        item.realityChecks.evidenceConfidence === 'Moderate' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                        'bg-red-100 text-red-800 border-red-200'
                      }`}>
                        {item.realityChecks.evidenceConfidence}
                      </span>
                      <p className="text-xs text-slate-600 mt-1">{item.realityChecks.evidenceNote}</p>
                    </div>
                    <div>
                      <div className="text-xs text-amber-700 font-semibold mb-1">Degree Substitution Risk</div>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold border ${getRiskBadgeColor(item.realityChecks.substitutionRisk)}`}>
                        {item.realityChecks.substitutionRisk}
                      </span>
                      <p className="text-xs text-slate-600 mt-1">{item.realityChecks.substitutionNote}</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-amber-700 font-semibold mb-1">Campus vs Off-Campus</div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item.realityChecks.campusVsOffCampus}</span>
                    {item.realityChecks.campusNote && (
                      <p className="text-xs text-slate-600 mt-1">{item.realityChecks.campusNote}</p>
                    )}
                  </div>
                  {item.realityChecks.winningEdge && (
                    <div className="bg-green-100 border border-green-200 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-green-700 font-semibold mb-1">Winning Edge (Only if Risk = High)</div>
                      <p className="text-xs sm:text-sm text-green-800">{item.realityChecks.winningEdge}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Top 2 Essential Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.certifications.map((cert, idx) => (
                    <div key={idx} className={`${colorClasses.light} border ${colorClasses.border} rounded-lg p-2 sm:p-3`}>
                      <div className="flex items-start gap-2">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full ${colorClasses.bg} text-white text-xs font-bold flex items-center justify-center`}>
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">{cert.name}</span>
                          {cert.note && (
                            <p className="text-xs text-slate-600 mt-0.5">{cert.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Truth */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Practical Truth
                </h4>
                <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Common Fresher Mistake</div>
                      <p className="text-xs sm:text-sm text-red-300">{item.practicalTruth.commonMistake}</p>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Top Failure Reason</div>
                      <p className="text-xs sm:text-sm text-red-300">{item.practicalTruth.topFailure}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-700">
                    <div>
                      <span className="text-xs text-slate-400">Typical Company Type: </span>
                      <span className="text-xs sm:text-sm font-semibold text-amber-400">{item.practicalTruth.companyType}</span>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2 sm:p-3 mt-2">
                    <div className="text-xs text-slate-400 mb-1">Reality Note</div>
                    <p className="text-xs sm:text-sm text-white italic">{item.practicalTruth.realityNote}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Final Role Index Table */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            <span>Final Role Index Table</span>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[10px] sm:text-xs font-medium border border-primary/20">
              Mandatory
            </span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Complete mapping of industries, sub-industries, clusters, and job roles
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 md:p-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-3 sm:p-4">
              <div className="grid grid-cols-4 gap-4 font-bold text-xs sm:text-sm">
                <div>Industry</div>
                <div>Sub-Industry</div>
                <div>Cluster / Work Area</div>
                <div>Job Role</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {roleIndexTable.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 p-3 sm:p-4 hover:bg-gray-50">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm">{row.industry}</div>
                  <div className="text-slate-700 text-xs sm:text-sm">{row.subIndustry}</div>
                  <div className="text-slate-700 text-xs sm:text-sm">{row.cluster}</div>
                  <div className="text-primary font-medium text-xs sm:text-sm">{row.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {roleIndexTable.map((row, idx) => (
              <div key={idx} className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-slate-900 text-sm">{row.industry}</span>
                  <span className="text-xs text-slate-500">#{idx + 1}</span>
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-medium">Sub-Industry:</span> {row.subIndustry}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-medium">Cluster:</span> {row.cluster}
                </div>
                <div className="text-xs text-primary font-semibold bg-primary/5 rounded px-2 py-1">
                  {row.role}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* One-line Truth */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-green-800 mb-1">BEST for:</div>
                <p className="text-sm sm:text-base text-green-700">
                  Students who can handle field execution + measurement accuracy + daily accountability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-amber-800 mb-1">MIS-SOLD as:</div>
                <p className="text-sm sm:text-base text-amber-700">
                  "Civil = only design/office job" (freshers rarely start in pure design without higher specialization).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom-line Truth Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-4 sm:p-6 md:p-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Bottom-line Truth</h3>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Civil engineering freshers find the most realistic entry through site execution, QA/QC, and billing roles. 
            Planning roles require prior exposure. Success depends on field readiness, documentation discipline, and 
            the ability to convert drawings into on-ground reality.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-slate-600 text-center italic">
          <strong>Disclaimer:</strong> Career paths shown are patterns, not guarantees. Outcomes depend on company, skills, performance, location, and market conditions.
        </p>
      </div>
    </div>
  );
};

export default BTechCivil;
