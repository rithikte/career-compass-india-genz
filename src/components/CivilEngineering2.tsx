import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionHeader } from '@/components/ui/section-header';
import { 
  HardHat, 
  ClipboardCheck, 
  Calendar, 
  Ruler, 
  Shield, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  BookOpen,
  Briefcase,
  Award,
  AlertTriangle,
  Target,
  RefreshCw,
  Building,
  Wrench,
  MapPin,
  Users,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Section 1: Primary Job Roles with Subjects
const primaryJobRoles = [
  {
    id: 'site-engineer',
    title: 'Site Engineer (Civil)',
    icon: HardHat,
    subjects: [
      'Building Construction & Methods',
      'Surveying & Setting Out',
      'Construction Materials & Concrete Technology',
      'Strength of Materials',
      'Construction Planning & Management (Basics)',
      'Drawing Reading (Plans/Sections)'
    ]
  },
  {
    id: 'get-civil',
    title: 'Graduate Engineer Trainee (Civil)',
    icon: GraduationCap,
    hiringReality: 'Strong',
    degreeCompetition: 'High',
    howFreshersEnter: 'GET',
    whereHiringHappens: 'Campus-heavy',
    topFailureReason: 'You look "degree-only" — no execution sense, no measurement sense, no site discipline.',
    subjects: [
      'Construction Materials & Concrete Technology',
      'Strength of Materials',
      'Structural Analysis (Basics)',
      'Surveying & Setting Out',
      'Geotechnical Engineering (Basics)',
      'Construction Planning & Management (Basics)'
    ]
  },
  {
    id: 'qaqc-trainee',
    title: 'Trainee Engineer – QA/QC (Civil)',
    icon: ClipboardCheck,
    hiringReality: 'Moderate',
    degreeCompetition: 'High',
    howFreshersEnter: 'GET',
    whereHiringHappens: 'Balanced',
    topFailureReason: 'You can\'t write clean QC reports + you miss basic tests; mistakes become rework.',
    subjects: [
      'Construction Materials & Concrete Technology',
      'Strength of Materials',
      'Surveying & Setting Out (for checks)',
      'Structural Analysis (Basics)',
      'Geotechnical Engineering (Basics)',
      'Drawing Reading (Plans/Sections)'
    ]
  },
  {
    id: 'planning-junior',
    title: 'Planning Engineer (Junior)',
    icon: Calendar,
    hiringReality: 'Moderate',
    degreeCompetition: 'High',
    howFreshersEnter: 'Campus',
    whereHiringHappens: 'Balanced',
    topFailureReason: 'You build pretty schedules but can\'t track real progress and constraints.',
    subjects: [
      'Construction Planning & Management (Basics)',
      'Building Construction & Methods',
      'Surveying & Setting Out (for sequence realism)',
      'Construction Materials & Concrete Technology (for duration logic)',
      'Strength of Materials (for method understanding)',
      'Drawing Reading (Plans/Sections)'
    ]
  },
  {
    id: 'bim-modeler',
    title: 'BIM Modeler / BIM Engineer (Civil)',
    icon: Building,
    hiringReality: 'Moderate',
    degreeCompetition: 'Medium',
    howFreshersEnter: 'Internship→PPO',
    whereHiringHappens: 'Off-campus common',
    topFailureReason: 'You model blindly without understanding drawings and constructability.',
    subjects: [
      'Drawing Reading (Plans/Sections)',
      'Building Construction & Methods',
      'Surveying & Setting Out (levels/grids)',
      'Construction Planning & Management (Basics)',
      'Strength of Materials (basic member logic)',
      'Construction Materials & Concrete Technology (constructability basics)'
    ]
  },
  {
    id: 'structural-trainee',
    title: 'Structural Design Trainee (RCC)',
    icon: Ruler,
    hiringReality: 'Moderate',
    degreeCompetition: 'High',
    howFreshersEnter: 'Campus',
    whereHiringHappens: 'Campus-heavy',
    topFailureReason: 'You depend on software outputs without understanding load path and detailing.',
    subjects: [
      'Strength of Materials',
      'Structural Analysis',
      'RCC Design (Basics)',
      'Steel Design (Basics)',
      'Construction Materials & Concrete Technology',
      'Geotechnical Engineering (Basics)'
    ]
  },
  {
    id: 'survey-trainee',
    title: 'Survey Engineer (Trainee)',
    icon: MapPin,
    hiringReality: 'Moderate',
    degreeCompetition: 'Medium',
    howFreshersEnter: 'Trainee',
    whereHiringHappens: 'Off-campus common',
    topFailureReason: 'Your setting-out is wrong once — you lose trust permanently.',
    subjects: [
      'Surveying & Setting Out',
      'Drawing Reading (Plans/Sections)',
      'Building Construction & Methods',
      'Construction Planning & Management (Basics)',
      'Geotechnical Engineering (Basics)',
      'Strength of Materials (basic structure sense)'
    ]
  },
  {
    id: 'junior-infra',
    title: 'Junior Engineer – Infra (Road/Drainage)',
    icon: Shield,
    hiringReality: 'Weak',
    degreeCompetition: 'High',
    howFreshersEnter: 'Trainee',
    whereHiringHappens: 'Off-campus common',
    topFailureReason: 'You don\'t understand specs + measurements; contractors outsmart you.',
    subjects: [
      'Transportation Engineering (Basics)',
      'Surveying & Setting Out',
      'Construction Planning & Management (Basics)',
      'Construction Materials & Concrete Technology',
      'Geotechnical Engineering (Basics)',
      'Drawing Reading (Plans/Sections)'
    ]
  }
];

// Section 2: Role Opportunity Spreads with complete data
const roleOpportunitySpreads = [
  {
    role: 'Site Engineer (Civil)',
    icon: HardHat,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Residential buildings',
        cluster: 'RCC + finishing execution',
        companyType: 'Contractor',
        dailyWork: 'Set out work, supervise labour, check quality, close daily targets.',
        hiringReality: 'Strong',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You can\'t manage labour + sequence; rework becomes routine.',
        fresherChance: 'Medium',
        top4Subjects: ['Building Construction & Methods', 'Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Setting-out + level control on site', 'Daily execution tracking (targets vs actual)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Approving work without checking line/level first.',
        whyFail: 'One wrong setting-out creates expensive rework.',
        gapReentry: {
          refresh: 'setting-out steps + RCC pour checklist + daily target tracking',
          buildProof: '"Site execution checklist pack" (line/level checklist + pour checklist + punch list template)',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: 'Target "site engineer civil, execution engineer, trainee civil"; apply to builders + small contractors',
          realityFilter: 'If you can\'t stand on site 8–10 hours daily, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Construction',
        subIndustry: 'Commercial buildings',
        cluster: 'MEP coordination + civil execution interface',
        companyType: 'PMC',
        dailyWork: 'Coordinate civil workfronts, resolve drawing clashes, close inspections.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t read drawings fast; coordination delays pile up.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Building Construction & Methods', 'Surveying & Setting Out'],
        top2Skills: ['Setting-out + level control on site', 'Daily execution tracking (targets vs actual)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Waiting for seniors to solve coordination issues.',
        whyFail: 'Site slows down and you look helpless.',
        gapReentry: {
          refresh: 'drawing revision control + coordination check routine',
          buildProof: '"Weekly coordination tracker" (clash log + closure evidence format)',
          certification: 'AutoCAD (Civil) – Basics',
          applyStrategy: 'Keywords "site engineer civil, PMC site, execution"; target PMC + contractors on commercial projects',
          realityFilter: 'If you hate follow-ups and pressure calls, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Infrastructure',
        subIndustry: 'Water pipelines',
        cluster: 'Trenching + laying + testing execution',
        companyType: 'Contractor',
        dailyWork: 'Manage trench work, check slopes/levels, coordinate tests and restoration.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t control levels; leakage/rework becomes continuous.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Building Construction & Methods', 'Construction Planning & Management (Basics)', 'Drawing Reading (Plans/Sections)'],
        top2Skills: ['Setting-out + level control on site', 'Daily execution tracking (targets vs actual)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Skipping check points to "save time."',
        whyFail: 'Tests fail; contractor blames you.',
        gapReentry: {
          refresh: 'level control routine + test readiness checklist',
          buildProof: '"Level + testing checklist" (benchmarks + checkpoints + test readiness)',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: 'Target "pipeline site engineer, civil site engineer"; contractors + infra vendors',
          realityFilter: 'If you can\'t work outdoors in heat/rain, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Construction',
        subIndustry: 'Industrial sheds',
        cluster: 'PEB foundations + slab execution',
        companyType: 'Contractor',
        dailyWork: 'Control foundations, slab work, curing discipline, and daily manpower output.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t enforce curing/quality; cracks and honeycombing show up.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Building Construction & Methods', 'Surveying & Setting Out', 'Strength of Materials'],
        top2Skills: ['Setting-out + level control on site', 'Daily execution tracking (targets vs actual)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Treating quality like "optional" to meet deadlines.',
        whyFail: 'Defects appear later; your name is on it.',
        gapReentry: {
          refresh: 'concreting checklist + curing discipline',
          buildProof: '"Concrete pour pack" (pour checklist + cube test log + curing log template)',
          certification: 'AutoCAD (Civil) – Basics',
          applyStrategy: '"industrial shed site engineer, civil execution" keywords',
          realityFilter: 'If you can\'t handle strict daily targets, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Real estate',
        subIndustry: 'Interior fit-outs (civil scope)',
        cluster: 'Partition + finishing coordination',
        companyType: 'Consultant',
        dailyWork: 'Track finishing work, check measurements, close punch points with vendors.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Balanced',
        failureReason: 'You don\'t track punch points; rework keeps reopening.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Building Construction & Methods', 'Surveying & Setting Out'],
        top2Skills: ['Setting-out + level control on site', 'Daily execution tracking (targets vs actual)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Accepting work without measurement verification.',
        whyFail: 'Quality disputes escalate and you lose credibility.',
        gapReentry: {
          refresh: 'measurement + punch closure process',
          buildProof: '"Punch closure tracker" (issue → photo → fix → signoff)',
          certification: 'AutoCAD (Civil) – Basics',
          applyStrategy: '"fitout site engineer, finishing engineer, civil site" keywords',
          realityFilter: 'If you can\'t do repeated follow-ups daily, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Graduate Engineer Trainee (Civil)',
    icon: GraduationCap,
    fits: [
      {
        fitNumber: 1,
        industry: 'Infrastructure',
        subIndustry: 'Transmission / utilities',
        cluster: 'Civil foundations + site coordination',
        companyType: 'EPC',
        dailyWork: 'Assist execution teams, track progress, support quality and reporting.',
        hiringReality: 'Strong',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Campus-heavy',
        failureReason: 'You can\'t convert drawings into day-to-day execution steps.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Surveying & Setting Out', 'Construction Materials & Concrete Technology', 'Drawing Reading (Plans/Sections)'],
        top2Skills: ['Site progress reporting with evidence', 'Measurement-based coordination (basic MB + checklists)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'MS Excel for Site Reporting (Basics)'],
        commonMistake: 'Reporting numbers without site proof (photos/checklists).',
        whyFail: 'Managers can\'t trust your updates.',
        gapReentry: {
          refresh: 'progress reporting format + measurement basics',
          buildProof: '"Weekly progress pack" (photo log + checklist + progress sheet)',
          certification: 'MS Excel for Site Reporting (Basics)',
          applyStrategy: 'Target "GET civil, graduate trainee civil, trainee civil engineer"',
          realityFilter: 'If you can\'t travel to sites/remote locations, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Construction',
        subIndustry: 'High-rise residential',
        cluster: 'Execution support + vendor coordination',
        companyType: 'Developer',
        dailyWork: 'Support site engineer, track daily targets, coordinate materials and vendors.',
        hiringReality: 'Strong',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Campus-heavy',
        failureReason: 'You don\'t follow up; small delays become permanent.',
        fresherChance: 'Medium',
        top4Subjects: ['Building Construction & Methods', 'Construction Planning & Management (Basics)', 'Surveying & Setting Out', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Site progress reporting with evidence', 'Measurement-based coordination (basic MB + checklists)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'MS Excel for Site Reporting (Basics)'],
        commonMistake: 'Managing only Excel, not the real site status.',
        whyFail: 'You become "report boy," not an engineer.',
        gapReentry: {
          refresh: 'execution sequence + vendor follow-up routine',
          buildProof: '"7-day lookahead plan" + daily closure tracker template',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: 'Keywords "GET civil, site trainee, graduate trainee civil"',
          realityFilter: 'If you can\'t handle strict daily discipline, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Infrastructure',
        subIndustry: 'Roads',
        cluster: 'Earthwork + paving support',
        companyType: 'Contractor',
        dailyWork: 'Assist highway team with setting out, measurements, and daily logs.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand measurement books; billing disputes start.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Construction Planning & Management (Basics)', 'Construction Materials & Concrete Technology', 'Geotechnical Engineering (Basics)'],
        top2Skills: ['Site progress reporting with evidence', 'Measurement-based coordination (basic MB + checklists)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'MS Excel for Site Reporting (Basics)'],
        commonMistake: 'Not recording levels/quantities properly on the same day.',
        whyFail: 'No records = no trust = no growth.',
        gapReentry: {
          refresh: 'MB format + setting-out routine',
          buildProof: '"Measurement + level book template" filled with a sample day\'s work',
          certification: 'MS Excel for Site Reporting (Basics)',
          applyStrategy: '"GET civil roads, highway trainee, infra trainee" keywords',
          realityFilter: 'If you can\'t work in remote/outdoor sites, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Water & sanitation',
        subIndustry: 'STP/WTP civil works',
        cluster: 'RCC tanks + site coordination',
        companyType: 'EPC',
        dailyWork: 'Support RCC execution, quality logs, and daily target closure.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'GET',
        whereHiring: 'Balanced',
        failureReason: 'You don\'t maintain quality logs; audits fail.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Drawing Reading (Plans/Sections)', 'Surveying & Setting Out', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Site progress reporting with evidence', 'Measurement-based coordination (basic MB + checklists)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'MS Excel for Site Reporting (Basics)'],
        commonMistake: 'Ignoring cube tests/curing logs until someone asks.',
        whyFail: 'Missing evidence makes you look careless.',
        gapReentry: {
          refresh: 'concreting QC pack + checklist discipline',
          buildProof: '"RCC quality pack" (cube log + curing log + pour checklist)',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: '"GET civil WTP, STP trainee, site trainee civil" keywords',
          realityFilter: 'If you hate documentation, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Construction',
        subIndustry: 'Industrial projects',
        cluster: 'Foundation + structural execution support',
        companyType: 'Govt contractor',
        dailyWork: 'Assist execution + measurements, handle daily reporting and coordination.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand compliance + reporting; approvals get stuck.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Surveying & Setting Out', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Site progress reporting with evidence', 'Measurement-based coordination (basic MB + checklists)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'MS Excel for Site Reporting (Basics)'],
        commonMistake: 'Not aligning site work with inspection/approval readiness.',
        whyFail: 'Rework + delays expose you.',
        gapReentry: {
          refresh: 'inspection readiness checklist routine',
          buildProof: '"Inspection readiness tracker" (checkpoints + signoffs)',
          certification: 'MS Excel for Site Reporting (Basics)',
          applyStrategy: '"GET civil, trainee civil, site trainee" + add "inspection, QA/QC" keywords',
          realityFilter: 'If you won\'t do disciplined reporting daily, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Trainee Engineer – QA/QC (Civil)',
    icon: ClipboardCheck,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Building projects',
        cluster: 'Concrete + reinforcement quality checks',
        companyType: 'Contractor',
        dailyWork: 'Maintain pour checklists, cube logs, material test reports, NCR closures.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t control QC records; mistakes multiply.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Strength of Materials', 'Drawing Reading (Plans/Sections)', 'Structural Analysis (Basics)'],
        top2Skills: ['ITP + checklist-based inspection discipline', 'NCR drafting + closure tracking'],
        top2Certs: ['ISO 9001 Internal Auditor', 'Concrete Testing (Basics) Certification'],
        commonMistake: 'Trusting "experience" over checklists.',
        whyFail: 'Repeated issues show weak control.',
        gapReentry: {
          refresh: 'QC checklist routine + NCR closure steps',
          buildProof: '"QC register pack" (pour log + cube log + NCR register template)',
          certification: 'ISO 9001 Internal Auditor',
          applyStrategy: '"QA/QC civil, quality trainee, inspection engineer" keywords',
          realityFilter: 'If you hate paperwork, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Roads',
        cluster: 'Material testing + layer-wise checks',
        companyType: 'EPC',
        dailyWork: 'Track layer-wise tests, maintain QC logs, coordinate lab submissions.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'GET',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand test-to-approval flow; delays pile up.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Geotechnical Engineering (Basics)', 'Transportation Engineering (Basics)', 'Drawing Reading (Plans/Sections)'],
        top2Skills: ['ITP + checklist-based inspection discipline', 'NCR drafting + closure tracking'],
        top2Certs: ['ISO 9001 Internal Auditor', 'Concrete Testing (Basics) Certification'],
        commonMistake: 'Not tracking test status proactively.',
        whyFail: 'Missing tests = work on hold = blame on you.',
        gapReentry: {
          refresh: 'test tracking routine + lab coordination workflow',
          buildProof: '"Test tracker" (test name + submission + result + closure)',
          certification: 'Concrete Testing (Basics) Certification',
          applyStrategy: '"QA/QC roads, material testing, quality trainee" keywords',
          realityFilter: 'If you won\'t chase lab results daily, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Water & sanitation',
        subIndustry: 'Pipeline works',
        cluster: 'Pressure testing + restoration quality',
        companyType: 'EPC',
        dailyWork: 'Maintain test readiness checklists and closure evidence for handover.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'GET',
        whereHiring: 'Balanced',
        failureReason: 'You miss test readiness steps; work fails during inspection.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Construction Materials & Concrete Technology'],
        top2Skills: ['ITP + checklist-based inspection discipline', 'NCR drafting + closure tracking'],
        top2Certs: ['ISO 9001 Internal Auditor', 'Concrete Testing (Basics) Certification'],
        commonMistake: 'Not collecting closure evidence (photos/signoffs).',
        whyFail: 'Without proof, you can\'t defend quality.',
        gapReentry: {
          refresh: 'inspection checklist + evidence collection routine',
          buildProof: '"Handover evidence pack" template (checklist + photo log + signoff page)',
          certification: 'ISO 9001 Internal Auditor',
          applyStrategy: '"QA/QC civil, inspection engineer civil, quality trainee"',
          realityFilter: 'If you won\'t do strict documentation, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Construction',
        subIndustry: 'Precast',
        cluster: 'Yard QC + dimensional checks',
        companyType: 'OEM',
        dailyWork: 'Check molds, reinforcement, dimensions, and maintain QC logs daily.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'GET',
        whereHiring: 'Campus-heavy',
        failureReason: 'You don\'t catch defects early; rejections increase.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Strength of Materials', 'Drawing Reading (Plans/Sections)', 'Structural Analysis (Basics)'],
        top2Skills: ['ITP + checklist-based inspection discipline', 'NCR drafting + closure tracking'],
        top2Certs: ['ISO 9001 Internal Auditor', 'Concrete Testing (Basics) Certification'],
        commonMistake: 'Trusting "experience" over checks and logs.',
        whyFail: 'Repeat defects show you have no control.',
        gapReentry: {
          refresh: 'dimensional check routine + log discipline',
          buildProof: '"Precast QC register" template + 1 sample filled sheet',
          certification: 'Concrete Testing (Basics) Certification',
          applyStrategy: '"precast QC, QAQC engineer, quality trainee" keywords',
          realityFilter: 'If you hate repetitive checking work, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Construction',
        subIndustry: 'Industrial structures',
        cluster: 'Formwork + reinforcement inspection',
        companyType: 'PMC',
        dailyWork: 'Inspect before pour, record deviations, track NCR closure with contractors.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Internship→PPO',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t stand firm on deviations; quality slips.',
        fresherChance: 'Low',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Materials & Concrete Technology', 'Strength of Materials', 'Construction Planning & Management (Basics)'],
        top2Skills: ['ITP + checklist-based inspection discipline', 'NCR drafting + closure tracking'],
        top2Certs: ['ISO 9001 Internal Auditor', 'Concrete Testing (Basics) Certification'],
        commonMistake: 'Signing off without physical verification.',
        whyFail: 'One bad signoff ruins your credibility.',
        gapReentry: {
          refresh: 'pre-pour inspection checklist steps',
          buildProof: '"Pre-pour inspection pack" (checklist + deviation log + signoff format)',
          certification: 'ISO 9001 Internal Auditor',
          applyStrategy: '"QA/QC PMC, inspection engineer, quality civil" keywords',
          realityFilter: 'If you can\'t say no to contractors, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Planning Engineer (Junior)',
    icon: Calendar,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Residential towers',
        cluster: 'Weekly plans + progress tracking',
        companyType: 'Developer',
        dailyWork: 'Build lookahead plans, track progress vs baseline, issue delays list.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'Campus',
        whereHiring: 'Balanced',
        failureReason: 'You don\'t visit site; your plan becomes fantasy.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Building Construction & Methods', 'Drawing Reading (Plans/Sections)', 'Surveying & Setting Out'],
        top2Skills: ['Baseline schedule + 2-week lookahead planning', 'Delay reason mapping with evidence (photos/notes)'],
        top2Certs: ['Primavera P6 / MS Project (Basics)', 'Advanced Excel (Construction reporting)'],
        commonMistake: 'Updating schedule without checking ground constraints.',
        whyFail: 'Site teams ignore you because you\'re disconnected.',
        gapReentry: {
          refresh: 'WBS + lookahead planning routine',
          buildProof: '"14-day lookahead" + "delay reason log" (print-ready templates)',
          certification: 'Primavera P6 / MS Project (Basics)',
          applyStrategy: '"planning engineer junior, project planner trainee, scheduler" keywords',
          realityFilter: 'If you won\'t go to site often, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Roads',
        cluster: 'Daily outputs + resource planning',
        companyType: 'EPC',
        dailyWork: 'Track quantities, plan resources, and prepare daily/weekly dashboards.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'You can\'t translate quantities into realistic resources/durations.',
        fresherChance: 'Low',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Surveying & Setting Out', 'Building Construction & Methods', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Baseline schedule + 2-week lookahead planning', 'Delay reason mapping with evidence (photos/notes)'],
        top2Certs: ['Primavera P6 / MS Project (Basics)', 'Advanced Excel (Construction reporting)'],
        commonMistake: 'Planning without understanding productivity norms.',
        whyFail: 'Unrealistic plans = zero respect from site.',
        gapReentry: {
          refresh: 'quantity-to-duration logic + daily production tracking',
          buildProof: '"Daily output tracker" with sample filled week',
          certification: 'Advanced Excel (Construction reporting)',
          applyStrategy: '"planning roads, scheduler, planning engineer trainee" keywords',
          realityFilter: 'If you can\'t work with daily site chaos, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Water & sanitation',
        subIndustry: 'WTP/STP projects',
        cluster: 'Baseline + billing support coordination',
        companyType: 'Contractor',
        dailyWork: 'Track work fronts, update baseline, and support reporting packs for reviews.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Campus',
        whereHiring: 'Balanced',
        failureReason: 'Your reporting is messy; reviews become painful.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Baseline schedule + 2-week lookahead planning', 'Delay reason mapping with evidence (photos/notes)'],
        top2Certs: ['Primavera P6 / MS Project (Basics)', 'Advanced Excel (Construction reporting)'],
        commonMistake: 'Hiding issues instead of flagging early.',
        whyFail: 'Surprises in review meetings kill trust.',
        gapReentry: {
          refresh: 'review pack structure + evidence discipline',
          buildProof: '"Weekly review deck" (progress summary + blockers + photos + next week plan)',
          certification: 'Primavera P6 / MS Project (Basics)',
          applyStrategy: '"planning engineer, project planner, scheduler" keywords',
          realityFilter: 'If you can\'t communicate clearly in meetings, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Construction',
        subIndustry: 'Industrial projects',
        cluster: 'Micro-plans + workfront readiness',
        companyType: 'PMC',
        dailyWork: 'Track workfront readiness, coordinate constraints list, and push closures.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Internship→PPO',
        whereHiring: 'Balanced',
        failureReason: 'You don\'t follow up on constraints; you become irrelevant.',
        fresherChance: 'Low',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Drawing Reading (Plans/Sections)', 'Surveying & Setting Out', 'Building Construction & Methods'],
        top2Skills: ['Baseline schedule + 2-week lookahead planning', 'Delay reason mapping with evidence (photos/notes)'],
        top2Certs: ['Primavera P6 / MS Project (Basics)', 'Advanced Excel (Construction reporting)'],
        commonMistake: 'Treating constraints list as "optional."',
        whyFail: 'No closures → no progress.',
        gapReentry: {
          refresh: 'constraint management routine',
          buildProof: '"Constraints closure tracker" (owner + due date + evidence)',
          certification: 'Advanced Excel (Construction reporting)',
          applyStrategy: '"planning PMC, workfront planning, scheduler" keywords',
          realityFilter: 'If you hate follow-ups, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Real estate',
        subIndustry: 'Fit-outs (civil scope)',
        cluster: 'Short-cycle planning + daily reporting',
        companyType: 'Consultant',
        dailyWork: 'Plan daily work packs, track punch closures, and support handover timelines.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Campus',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t handle fast changes; you lose control daily.',
        fresherChance: 'Medium',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Surveying & Setting Out'],
        top2Skills: ['Baseline schedule + 2-week lookahead planning', 'Delay reason mapping with evidence (photos/notes)'],
        top2Certs: ['Primavera P6 / MS Project (Basics)', 'Advanced Excel (Construction reporting)'],
        commonMistake: 'Planning without confirming material/vendor readiness.',
        whyFail: 'Handover dates slip and you look weak.',
        gapReentry: {
          refresh: 'short-cycle plan templates + readiness checks',
          buildProof: '"Daily work pack" template (scope + manpower + materials + closure proof)',
          certification: 'Primavera P6 / MS Project (Basics)',
          applyStrategy: '"planning fitout, scheduler, planning engineer" keywords',
          realityFilter: 'If you can\'t work in tight deadlines, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'BIM Modeler / BIM Engineer (Civil)',
    icon: Building,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Commercial buildings',
        cluster: 'Revit modeling + drawing extraction',
        companyType: 'Consultant',
        dailyWork: 'Build models from drawings, generate sheets, handle revisions.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'You can\'t control Revit model discipline; errors multiply.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Surveying & Setting Out', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Revit modeling with clean families/levels', 'Revision control + sheet extraction discipline'],
        top2Certs: ['Autodesk Revit (BIM) Certification', 'Navisworks (Clash) Basics Certification'],
        commonMistake: 'Modeling without following naming/level standards.',
        whyFail: 'Model becomes unusable for the team.',
        gapReentry: {
          refresh: 'levels/grids discipline + sheet extraction workflow',
          buildProof: '"Sample BIM package" (one floor model + sheets + revision log)',
          certification: 'Autodesk Revit (BIM) Certification',
          applyStrategy: 'Keywords "BIM modeler civil, Revit modeler, BIM trainee"',
          realityFilter: 'If you can\'t sit for long focused hours, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Metro/rail buildings',
        cluster: 'Modeling + quantity extraction support',
        companyType: 'EPC',
        dailyWork: 'Update models, extract drawings/quantities, support coordination.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'You can\'t handle revisions fast; deadlines crush you.',
        fresherChance: 'Low',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Building Construction & Methods', 'Strength of Materials (basic member logic)'],
        top2Skills: ['Revit modeling with clean families/levels', 'Revision control + sheet extraction discipline'],
        top2Certs: ['Autodesk Revit (BIM) Certification', 'Navisworks (Clash) Basics Certification'],
        commonMistake: 'Breaking model structure while updating.',
        whyFail: 'Coordination team stops trusting your outputs.',
        gapReentry: {
          refresh: 'revision control + model standards',
          buildProof: '"Revision-proof workflow" (rev log + before/after sheet set)',
          certification: 'Navisworks (Clash) Basics Certification',
          applyStrategy: '"BIM civil infra, Revit, BIM trainee" keywords',
          realityFilter: 'If you can\'t work under tight deadlines, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Real estate',
        subIndustry: 'High-rise residential',
        cluster: 'Model updates + drawing revisions',
        companyType: 'Developer',
        dailyWork: 'Keep model aligned with latest drawings; update sheet sets weekly.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Internship→PPO',
        whereHiring: 'Balanced',
        failureReason: 'You don\'t track revisions; you work on old drawings.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Surveying & Setting Out', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Revit modeling with clean families/levels', 'Revision control + sheet extraction discipline'],
        top2Certs: ['Autodesk Revit (BIM) Certification', 'Navisworks (Clash) Basics Certification'],
        commonMistake: 'Not maintaining a revision log.',
        whyFail: 'Wrong sheets go to site; damage is huge.',
        gapReentry: {
          refresh: 'revision log + drawing-to-model update steps',
          buildProof: '"Revision log + updated sheet pack" for one unit/floor',
          certification: 'Autodesk Revit (BIM) Certification',
          applyStrategy: '"BIM modeler, Revit, BIM trainee" keywords',
          realityFilter: 'If you can\'t be detail-obsessed, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Construction',
        subIndustry: 'Industrial buildings',
        cluster: 'Structural model + shop drawing support',
        companyType: 'Contractor',
        dailyWork: 'Model structural elements, support shop drawing extraction and reviews.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand structural logic; model errors persist.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Strength of Materials', 'Building Construction & Methods', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Revit modeling with clean families/levels', 'Revision control + sheet extraction discipline'],
        top2Certs: ['Autodesk Revit (BIM) Certification', 'Navisworks (Clash) Basics Certification'],
        commonMistake: 'Ignoring structural rules while modeling.',
        whyFail: 'Fabrication team rejects your drawings.',
        gapReentry: {
          refresh: 'structural modeling standards + shop drawing workflow',
          buildProof: '"Shop drawing extraction pack" (model + GA drawing + detail sheet)',
          certification: 'Navisworks (Clash) Basics Certification',
          applyStrategy: '"structural BIM, Revit modeler, BIM trainee" keywords',
          realityFilter: 'If you won\'t learn structural basics, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Engineering',
        subIndustry: 'BIM outsourcing services',
        cluster: 'Production modeling + QC',
        companyType: 'OEM',
        dailyWork: 'Produce models fast with QC checks, deliver weekly packages to clients.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'Your speed is low and QC is weak.',
        fresherChance: 'Medium',
        top4Subjects: ['Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Building Construction & Methods', 'Surveying & Setting Out'],
        top2Skills: ['Revit modeling with clean families/levels', 'Revision control + sheet extraction discipline'],
        top2Certs: ['Autodesk Revit (BIM) Certification', 'Navisworks (Clash) Basics Certification'],
        commonMistake: 'Delivering without internal QC checklist.',
        whyFail: 'Client rejects packages; you get replaced fast.',
        gapReentry: {
          refresh: 'QC checklist routine + speed workflow',
          buildProof: '"QC checklist + sample package" (model + sheets + QC signoff)',
          certification: 'Autodesk Revit (BIM) Certification',
          applyStrategy: '"BIM production, Revit modeler, BIM trainee" keywords',
          realityFilter: 'If you can\'t handle repetitive production work, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Structural Design Trainee (RCC)',
    icon: Ruler,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Residential buildings',
        cluster: 'RCC member design + detailing support',
        companyType: 'Consultant',
        dailyWork: 'Assist design checks, prepare drawings, handle revisions from seniors.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'Campus',
        whereHiring: 'Campus-heavy',
        failureReason: 'You can\'t explain load path; you just run software.',
        fresherChance: 'Medium',
        top4Subjects: ['Structural Analysis', 'RCC Design (Basics)', 'Strength of Materials', 'Construction Materials & Concrete Technology'],
        top2Skills: ['RCC detailing discipline (clear drawings)', 'Structural analysis validation (manual sanity checks)'],
        top2Certs: ['STAAD.Pro / ETABS (Basics) Certification', 'RCC Detailing (Basics) Certification'],
        commonMistake: 'Accepting software output without sanity checks.',
        whyFail: 'Wrong assumptions = unsafe design risk.',
        gapReentry: {
          refresh: 'load path + basic design checks (slab/beam/column)',
          buildProof: '"One complete RCC design note" (assumptions + checks + drawing extract)',
          certification: 'STAAD.Pro / ETABS (Basics) Certification',
          applyStrategy: '"structural trainee, design engineer civil, RCC design" keywords',
          realityFilter: 'If you hate deep analytical work, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Industrial structures',
        cluster: 'Foundation + frame checks',
        companyType: 'EPC',
        dailyWork: 'Support design team with calculations, revisions, and drawing clarifications.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Campus',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t handle revisions fast; you get stuck.',
        fresherChance: 'Low',
        top4Subjects: ['RCC Design (Basics)', 'Structural Analysis', 'Geotechnical Engineering (Basics)', 'Strength of Materials'],
        top2Skills: ['RCC detailing discipline (clear drawings)', 'Structural analysis validation (manual sanity checks)'],
        top2Certs: ['STAAD.Pro / ETABS (Basics) Certification', 'RCC Detailing (Basics) Certification'],
        commonMistake: 'Not documenting assumptions clearly.',
        whyFail: 'Seniors can\'t review your work quickly.',
        gapReentry: {
          refresh: 'assumption writing + revision control',
          buildProof: '"Revision-ready calc sheet" (assumptions + inputs + outputs + check table)',
          certification: 'RCC Detailing (Basics) Certification',
          applyStrategy: '"structural trainee, design engineer civil, RCC design" keywords',
          realityFilter: 'If you hate deep focus work, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Construction',
        subIndustry: 'High-rise residential',
        cluster: 'Steel checks + connection basics',
        companyType: 'Consultant',
        dailyWork: 'Assist steel member checks and detailing revisions under guidance.',
        hiringReality: 'Moderate',
        degreeCompetition: 'High',
        howEnter: 'Campus',
        whereHiring: 'Campus-heavy',
        failureReason: 'You don\'t understand member behavior; mistakes repeat.',
        fresherChance: 'Medium',
        top4Subjects: ['Steel Design (Basics)', 'Structural Analysis', 'Strength of Materials', 'RCC Design (Basics)'],
        top2Skills: ['RCC detailing discipline (clear drawings)', 'Structural analysis validation (manual sanity checks)'],
        top2Certs: ['STAAD.Pro / ETABS (Basics) Certification', 'RCC Detailing (Basics) Certification'],
        commonMistake: 'Copying old designs without checking loads.',
        whyFail: 'Repeated errors show weak fundamentals.',
        gapReentry: {
          refresh: 'steel basics + member behavior sanity checks',
          buildProof: '"Steel member check note" (inputs + checks + detailing snippet)',
          certification: 'STAAD.Pro / ETABS (Basics) Certification',
          applyStrategy: '"structural trainee, steel design junior, civil design" keywords',
          realityFilter: 'If you can\'t handle strict review feedback, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Engineering services',
        subIndustry: 'Structural detailing support',
        cluster: 'Detailing + drawing production',
        companyType: 'OEM',
        dailyWork: 'Produce detailing drawings and bar bending schedules under guidance.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Campus',
        whereHiring: 'Balanced',
        failureReason: 'Your drawings are unclear; site cannot execute.',
        fresherChance: 'Medium',
        top4Subjects: ['RCC Design (Basics)', 'Construction Materials & Concrete Technology', 'Structural Analysis', 'Strength of Materials'],
        top2Skills: ['RCC detailing discipline (clear drawings)', 'Structural analysis validation (manual sanity checks)'],
        top2Certs: ['STAAD.Pro / ETABS (Basics) Certification', 'RCC Detailing (Basics) Certification'],
        commonMistake: 'Ignoring detailing rules and cover/spacing logic.',
        whyFail: 'Drawing errors create site rework.',
        gapReentry: {
          refresh: 'detailing rules + drawing clarity standards',
          buildProof: '"Detailing pack" (one beam/column detailing sheet + BBS sample)',
          certification: 'RCC Detailing (Basics) Certification',
          applyStrategy: '"RCC detailing, structural drafting, design trainee" keywords',
          realityFilter: 'If you are not detail-oriented, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Construction',
        subIndustry: 'Precast structures',
        cluster: 'Member design + connection detailing basics',
        companyType: 'Contractor',
        dailyWork: 'Support design/drawing updates for precast members and revisions.',
        hiringReality: 'Weak',
        degreeCompetition: 'Medium',
        howEnter: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand constructability; design becomes impractical.',
        fresherChance: 'Low',
        top4Subjects: ['Structural Analysis', 'RCC Design (Basics)', 'Construction Materials & Concrete Technology', 'Strength of Materials'],
        top2Skills: ['RCC detailing discipline (clear drawings)', 'Structural analysis validation (manual sanity checks)'],
        top2Certs: ['STAAD.Pro / ETABS (Basics) Certification', 'RCC Detailing (Basics) Certification'],
        commonMistake: 'Designing without thinking about handling/erection.',
        whyFail: 'Site rejects drawings and you get sidelined.',
        gapReentry: {
          refresh: 'constructability checks + revision discipline',
          buildProof: '"Constructability checklist" attached to one design note',
          certification: 'RCC Detailing (Basics) Certification',
          applyStrategy: '"precast structural, RCC trainee, design trainee" keywords',
          realityFilter: 'If you won\'t learn from site feedback, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Survey Engineer (Trainee)',
    icon: MapPin,
    fits: [
      {
        fitNumber: 1,
        industry: 'Construction',
        subIndustry: 'Residential projects',
        cluster: 'Setting out + level control',
        companyType: 'Contractor',
        dailyWork: 'Mark grids/levels, maintain benchmarks, support daily execution accuracy.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'One wrong point and the whole floor alignment shifts.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Total station operation + error control', 'Benchmark + as-built record discipline'],
        top2Certs: ['Total Station / Auto Level Training Certificate', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Not rechecking before marking.',
        whyFail: 'Small error becomes huge rework.',
        gapReentry: {
          refresh: 'instrument setup + error checks + closing loop routine',
          buildProof: '"As-built record pack" (benchmark log + sample as-built drawing)',
          certification: 'Total Station / Auto Level Training Certificate',
          applyStrategy: '"survey engineer trainee, setting out engineer, site surveyor" keywords',
          realityFilter: 'If you can\'t be ultra-careful, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Roads',
        cluster: 'Alignment + levels + quantities support',
        companyType: 'Contractor',
        dailyWork: 'Support alignment marking, cross-sections, and daily level records.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You can\'t maintain clean level records; disputes start.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Geotechnical Engineering (Basics)'],
        top2Skills: ['Total station operation + error control', 'Benchmark + as-built record discipline'],
        top2Certs: ['Total Station / Auto Level Training Certificate', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Not backing up data daily.',
        whyFail: 'Missing data = no trust.',
        gapReentry: {
          refresh: 'cross-section recording + data backup discipline',
          buildProof: '"Cross-section register template" + sample filled day',
          certification: 'AutoCAD (Civil) – Basics',
          applyStrategy: '"survey roads, alignment survey, setting out" keywords',
          realityFilter: 'If you can\'t work outdoors daily, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Water & sanitation',
        subIndustry: 'Pipeline works',
        cluster: 'Slope/levels for laying',
        companyType: 'EPC',
        dailyWork: 'Control pipeline levels/slopes, set out chambers, maintain records.',
        hiringReality: 'Weak',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'Wrong slope = flow problems and rework.',
        fresherChance: 'Low',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Total station operation + error control', 'Benchmark + as-built record discipline'],
        top2Certs: ['Total Station / Auto Level Training Certificate', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Not using fixed benchmarks consistently.',
        whyFail: 'Records don\'t match reality during inspection.',
        gapReentry: {
          refresh: 'benchmark discipline + slope control checks',
          buildProof: '"Benchmark + slope control sheet" template (inspection-ready)',
          certification: 'Total Station / Auto Level Training Certificate',
          applyStrategy: '"pipeline survey, setting out, site surveyor" keywords',
          realityFilter: 'If you can\'t handle site dirt/heat, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Construction',
        subIndustry: 'Industrial plants',
        cluster: 'Equipment foundation layout support',
        companyType: 'Contractor',
        dailyWork: 'Mark foundations, check levels, support alignment and as-built records.',
        hiringReality: 'Moderate',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'Misalignment causes installation delays and blame.',
        fresherChance: 'Medium',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Building Construction & Methods', 'Strength of Materials (basic structure sense)'],
        top2Skills: ['Total station operation + error control', 'Benchmark + as-built record discipline'],
        top2Certs: ['Total Station / Auto Level Training Certificate', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Not verifying reference points before marking.',
        whyFail: 'Equipment teams reject your layout.',
        gapReentry: {
          refresh: 'layout verification workflow',
          buildProof: '"Layout verification checklist" + sample as-built print',
          certification: 'AutoCAD (Civil) – Basics',
          applyStrategy: '"industrial survey, layout engineer, setting out" keywords',
          realityFilter: 'If you can\'t handle strict accuracy, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Construction',
        subIndustry: 'High-rise projects',
        cluster: 'Verticality + floor level control',
        companyType: 'PMC',
        dailyWork: 'Support level/vertical checks and as-built verification for approvals.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t maintain clean as-built evidence.',
        fresherChance: 'Low',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Construction Planning & Management (Basics)', 'Building Construction & Methods'],
        top2Skills: ['Total station operation + error control', 'Benchmark + as-built record discipline'],
        top2Certs: ['Total Station / Auto Level Training Certificate', 'AutoCAD (Civil) – Basics'],
        commonMistake: 'Treating as-built as "later work."',
        whyFail: 'Without evidence, approvals get stuck.',
        gapReentry: {
          refresh: 'as-built evidence format + signoff discipline',
          buildProof: '"As-built evidence pack" (marked drawings + photos + level sheet)',
          certification: 'Total Station / Auto Level Training Certificate',
          applyStrategy: '"survey engineer, as-built, setting out" keywords',
          realityFilter: 'If you hate documentation + precision together, don\'t pick this fit.'
        }
      }
    ]
  },
  {
    role: 'Junior Engineer – Infra (Road/Drainage)',
    icon: Shield,
    fits: [
      {
        fitNumber: 1,
        industry: 'Infrastructure',
        subIndustry: 'Roads',
        cluster: 'Site execution + measurements',
        companyType: 'Contractor',
        dailyWork: 'Support earthwork and paving execution, track measurements and daily logs.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You don\'t understand spec-measurement discipline.',
        fresherChance: 'Low',
        top4Subjects: ['Transportation Engineering (Basics)', 'Surveying & Setting Out', 'Construction Planning & Management (Basics)', 'Construction Materials & Concrete Technology'],
        top2Skills: ['Spec-based checklist execution', 'Measurement log discipline (daily records)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'Advanced Excel (site reporting)'],
        commonMistake: 'Recording quantities late or loosely.',
        whyFail: 'Disputes + rework show weak control.',
        gapReentry: {
          refresh: 'spec checklist routine + daily measurement recording',
          buildProof: '"Layer-wise checklist pack" + "daily measurement register"',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: '"highway trainee, infra trainee, junior engineer roads" keywords',
          realityFilter: 'If you won\'t live on site for long durations, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 2,
        industry: 'Infrastructure',
        subIndustry: 'Drainage works',
        cluster: 'Excavation + RCC drain execution',
        companyType: 'EPC',
        dailyWork: 'Track drain alignment/levels, coordinate materials and quality checks.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'Wrong levels cause ponding; you get blamed.',
        fresherChance: 'Low',
        top4Subjects: ['Surveying & Setting Out', 'Drawing Reading (Plans/Sections)', 'Construction Materials & Concrete Technology', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Spec-based checklist execution', 'Measurement log discipline (daily records)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'Advanced Excel (site reporting)'],
        commonMistake: 'Not maintaining benchmark consistency.',
        whyFail: 'Inspection failures expose weak basics.',
        gapReentry: {
          refresh: 'level control routine + inspection readiness checks',
          buildProof: '"Benchmark + inspection checklist pack"',
          certification: 'Advanced Excel (site reporting)',
          applyStrategy: '"drainage site, infra trainee, execution roads" keywords',
          realityFilter: 'If you can\'t handle outdoor physical sites, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 3,
        industry: 'Infrastructure',
        subIndustry: 'Rural roads',
        cluster: 'Quantity tracking + quality logs',
        companyType: 'Govt contractor',
        dailyWork: 'Maintain daily logs, coordinate execution, and prepare inspection readiness.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'Poor documentation = approvals stuck.',
        fresherChance: 'Low',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Surveying & Setting Out', 'Transportation Engineering (Basics)', 'Drawing Reading (Plans/Sections)'],
        top2Skills: ['Spec-based checklist execution', 'Measurement log discipline (daily records)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'Advanced Excel (site reporting)'],
        commonMistake: 'Not collecting closure evidence daily.',
        whyFail: 'Without proof, you can\'t defend work.',
        gapReentry: {
          refresh: 'documentation pack structure',
          buildProof: '"Inspection-ready site dossier" template (logs + photos + checklists)',
          certification: 'Advanced Excel (site reporting)',
          applyStrategy: '"govt contractor infra, roads execution, junior engineer" keywords',
          realityFilter: 'If you won\'t do documentation daily, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 4,
        industry: 'Infrastructure',
        subIndustry: 'Urban roads',
        cluster: 'Utility shifting coordination',
        companyType: 'PMC',
        dailyWork: 'Coordinate workfronts with utilities, track closures, manage constraints list.',
        hiringReality: 'Weak',
        degreeCompetition: 'High',
        howEnter: 'Trainee',
        whereHiring: 'Balanced',
        failureReason: 'You can\'t follow up; constraints remain open forever.',
        fresherChance: 'Low',
        top4Subjects: ['Construction Planning & Management (Basics)', 'Drawing Reading (Plans/Sections)', 'Surveying & Setting Out', 'Transportation Engineering (Basics)'],
        top2Skills: ['Spec-based checklist execution', 'Measurement log discipline (daily records)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'Advanced Excel (site reporting)'],
        commonMistake: 'Treating follow-ups as "someone else\'s job."',
        whyFail: 'Delays expose weak coordination.',
        gapReentry: {
          refresh: 'constraints tracking + closure evidence format',
          buildProof: '"Constraints closure tracker" with owner + due date + proof column',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: '"urban roads, PMC infra, junior engineer" keywords',
          realityFilter: 'If you hate follow-ups, don\'t pick this fit.'
        }
      },
      {
        fitNumber: 5,
        industry: 'Infrastructure',
        subIndustry: 'Industrial roads inside plants',
        cluster: 'Pavement execution + quality logs',
        companyType: 'Contractor',
        dailyWork: 'Track pavement layers, maintain checklists, coordinate tests and closures.',
        hiringReality: 'Weak',
        degreeCompetition: 'Medium',
        howEnter: 'Trainee',
        whereHiring: 'Off-campus common',
        failureReason: 'You miss checks; defects appear and rework starts.',
        fresherChance: 'Low',
        top4Subjects: ['Construction Materials & Concrete Technology', 'Transportation Engineering (Basics)', 'Surveying & Setting Out', 'Construction Planning & Management (Basics)'],
        top2Skills: ['Spec-based checklist execution', 'Measurement log discipline (daily records)'],
        top2Certs: ['Basic Construction Safety (IOSH/NEBOSH entry)', 'Advanced Excel (site reporting)'],
        commonMistake: 'Not controlling layer thickness and compaction proof.',
        whyFail: 'Quality failures ruin your reputation fast.',
        gapReentry: {
          refresh: 'layer-wise checks + log discipline',
          buildProof: '"Layer-wise QC logbook" template + sample filled entries',
          certification: 'Basic Construction Safety (IOSH entry)',
          applyStrategy: '"industrial roads, infra trainee, site execution roads" keywords',
          realityFilter: 'If you can\'t work on ground daily, don\'t pick this fit.'
        }
      }
    ]
  }
];

// Final summary data
const finalSummary = {
  totalPrimaryRoles: 8,
  totalIndustries: 4,
  totalSubIndustries: 14,
  totalClusters: 40,
  mostOpportunities: 'Site Engineer (Civil)',
  safestRole: 'Graduate Engineer Trainee (Civil)',
  safestRoleReason: 'Most structured entry route via GET/trainee/campus patterns',
  oneLineTruth: 'Most civil jobs don\'t need "all subjects" — they need strong execution clarity in the right 4–6 subjects (this is hiring reality, not exam syllabus coverage).',
  bestFor: 'Students who can handle site pressure + follow-ups + discipline and want real on-ground work.',
  misSoldAs: '"Civil means only sitting in office doing design or only government jobs."'
};

// Final role index for table
const finalRoleIndex = [
  { role: 'Site Engineer (Civil)', industry: 'Construction', subIndustry: 'Residential buildings', workArea: 'RCC + finishing execution' },
  { role: 'Site Engineer (Civil)', industry: 'Construction', subIndustry: 'Commercial buildings', workArea: 'MEP coordination + civil execution interface' },
  { role: 'Site Engineer (Civil)', industry: 'Infrastructure', subIndustry: 'Water pipelines', workArea: 'Trenching + laying + testing execution' },
  { role: 'Site Engineer (Civil)', industry: 'Construction', subIndustry: 'Industrial sheds', workArea: 'PEB foundations + slab execution' },
  { role: 'Site Engineer (Civil)', industry: 'Real estate', subIndustry: 'Interior fit-outs (civil scope)', workArea: 'Partition + finishing coordination' },
  { role: 'Graduate Engineer Trainee (Civil)', industry: 'Infrastructure', subIndustry: 'Transmission / utilities', workArea: 'Civil foundations + site coordination' },
  { role: 'Graduate Engineer Trainee (Civil)', industry: 'Construction', subIndustry: 'High-rise residential', workArea: 'Execution support + vendor coordination' },
  { role: 'Graduate Engineer Trainee (Civil)', industry: 'Infrastructure', subIndustry: 'Roads', workArea: 'Earthwork + paving support' },
  { role: 'Graduate Engineer Trainee (Civil)', industry: 'Water & sanitation', subIndustry: 'WTP/STP projects', workArea: 'RCC tanks + site coordination' },
  { role: 'Graduate Engineer Trainee (Civil)', industry: 'Construction', subIndustry: 'Industrial projects', workArea: 'Foundation + structural execution support' },
  { role: 'Trainee Engineer – QA/QC (Civil)', industry: 'Construction', subIndustry: 'Building projects', workArea: 'Concrete + reinforcement quality checks' },
  { role: 'Trainee Engineer – QA/QC (Civil)', industry: 'Infrastructure', subIndustry: 'Roads', workArea: 'Material testing + layer-wise checks' },
  { role: 'Trainee Engineer – QA/QC (Civil)', industry: 'Water & sanitation', subIndustry: 'Pipeline works', workArea: 'Pressure testing + restoration quality' },
  { role: 'Trainee Engineer – QA/QC (Civil)', industry: 'Construction', subIndustry: 'Precast', workArea: 'Yard QC + dimensional checks' },
  { role: 'Trainee Engineer – QA/QC (Civil)', industry: 'Construction', subIndustry: 'Industrial structures', workArea: 'Formwork + reinforcement inspection' },
  { role: 'Planning Engineer (Junior)', industry: 'Construction', subIndustry: 'Residential towers', workArea: 'Weekly plans + progress tracking' },
  { role: 'Planning Engineer (Junior)', industry: 'Infrastructure', subIndustry: 'Roads', workArea: 'Daily outputs + resource planning' },
  { role: 'Planning Engineer (Junior)', industry: 'Water & sanitation', subIndustry: 'WTP/STP projects', workArea: 'Baseline + reporting packs' },
  { role: 'Planning Engineer (Junior)', industry: 'Construction', subIndustry: 'Industrial projects', workArea: 'Micro-plans + workfront readiness' },
  { role: 'Planning Engineer (Junior)', industry: 'Real estate', subIndustry: 'Fit-outs (civil scope)', workArea: 'Short-cycle planning + daily reporting' },
  { role: 'BIM Modeler / BIM Engineer (Civil)', industry: 'Construction', subIndustry: 'Commercial buildings', workArea: 'Revit modeling + drawing extraction' },
  { role: 'BIM Modeler / BIM Engineer (Civil)', industry: 'Infrastructure', subIndustry: 'Metro/rail buildings', workArea: 'Modeling + quantity extraction support' },
  { role: 'BIM Modeler / BIM Engineer (Civil)', industry: 'Real estate', subIndustry: 'High-rise residential', workArea: 'Model updates + drawing revisions' },
  { role: 'BIM Modeler / BIM Engineer (Civil)', industry: 'Construction', subIndustry: 'Industrial buildings', workArea: 'Structural model + shop drawing support' },
  { role: 'BIM Modeler / BIM Engineer (Civil)', industry: 'Engineering', subIndustry: 'BIM outsourcing services', workArea: 'Production modeling + QC' },
  { role: 'Structural Design Trainee (RCC)', industry: 'Construction', subIndustry: 'Residential buildings', workArea: 'RCC member design + detailing support' },
  { role: 'Structural Design Trainee (RCC)', industry: 'Infrastructure', subIndustry: 'Industrial structures', workArea: 'Foundation + frame checks' },
  { role: 'Structural Design Trainee (RCC)', industry: 'Construction', subIndustry: 'High-rise residential', workArea: 'Steel checks + connection basics' },
  { role: 'Structural Design Trainee (RCC)', industry: 'Engineering services', subIndustry: 'Structural detailing', workArea: 'Detailing + drawing production' },
  { role: 'Structural Design Trainee (RCC)', industry: 'Construction', subIndustry: 'Precast structures', workArea: 'Member design + connection detailing basics' },
  { role: 'Survey Engineer (Trainee)', industry: 'Construction', subIndustry: 'Residential projects', workArea: 'Setting out + level control' },
  { role: 'Survey Engineer (Trainee)', industry: 'Infrastructure', subIndustry: 'Roads', workArea: 'Alignment + levels + quantities support' },
  { role: 'Survey Engineer (Trainee)', industry: 'Water & sanitation', subIndustry: 'Pipeline works', workArea: 'Slope/levels for laying' },
  { role: 'Survey Engineer (Trainee)', industry: 'Construction', subIndustry: 'Industrial plants', workArea: 'Equipment foundation layout support' },
  { role: 'Survey Engineer (Trainee)', industry: 'Construction', subIndustry: 'High-rise projects', workArea: 'Verticality + floor level control' },
  { role: 'Junior Engineer – Infra (Road/Drainage)', industry: 'Infrastructure', subIndustry: 'Roads', workArea: 'Site execution + measurements' },
  { role: 'Junior Engineer – Infra (Road/Drainage)', industry: 'Infrastructure', subIndustry: 'Drainage works', workArea: 'Excavation + RCC drain execution' },
  { role: 'Junior Engineer – Infra (Road/Drainage)', industry: 'Infrastructure', subIndustry: 'Rural roads', workArea: 'Quantity tracking + quality logs' },
  { role: 'Junior Engineer – Infra (Road/Drainage)', industry: 'Infrastructure', subIndustry: 'Urban roads', workArea: 'Utility shifting coordination' },
  { role: 'Junior Engineer – Infra (Road/Drainage)', industry: 'Infrastructure', subIndustry: 'Industrial roads inside plants', workArea: 'Pavement execution + quality logs' }
];

// Helper component for hiring reality badge
const HiringBadge = ({ reality }: { reality: string }) => {
  const colorMap: Record<string, string> = {
    'Strong': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'Moderate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Weak': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };
  return (
    <span className={cn("px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium", colorMap[reality] || 'bg-muted text-muted-foreground')}>
      {reality}
    </span>
  );
};

// Helper component for fresher chance badge
const FresherChanceBadge = ({ chance }: { chance: string }) => {
  const colorMap: Record<string, string> = {
    'Medium': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'Low': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    'High': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  };
  return (
    <span className={cn("px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium", colorMap[chance] || 'bg-muted text-muted-foreground')}>
      {chance}
    </span>
  );
};

// Expandable Role Card Component
const RoleOpportunityCard = ({ roleData }: { roleData: typeof roleOpportunitySpreads[0] }) => {
  const [expandedFit, setExpandedFit] = useState<number | null>(null);
  const Icon = roleData.icon;

  return (
    <Card className="border-border">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          {roleData.role}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {roleData.fits.map((fit) => (
          <div 
            key={fit.fitNumber}
            className="border border-border rounded-lg overflow-hidden"
          >
            {/* Fit Header - Always visible */}
            <button
              onClick={() => setExpandedFit(expandedFit === fit.fitNumber ? null : fit.fitNumber)}
              className="w-full p-3 sm:p-4 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Badge variant="primary" className="text-[10px] sm:text-xs">Fit {fit.fitNumber}</Badge>
                    <HiringBadge reality={fit.hiringReality} />
                    <FresherChanceBadge chance={fit.fresherChance} />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-foreground truncate">
                    {fit.industry} → {fit.subIndustry}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{fit.cluster}</p>
                </div>
                {expandedFit === fit.fitNumber ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedFit === fit.fitNumber && (
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 border-t border-border bg-card">
                {/* Daily Work */}
                <div className="p-2.5 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Daily Work</span>
                      <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-100 mt-0.5">{fit.dailyWork}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  <div className="bg-muted/50 p-2 rounded-lg">
                    <span className="text-[10px] sm:text-xs text-muted-foreground block">Company Type</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{fit.companyType}</span>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-lg">
                    <span className="text-[10px] sm:text-xs text-muted-foreground block">How Enter</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{fit.howEnter}</span>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-lg">
                    <span className="text-[10px] sm:text-xs text-muted-foreground block">Where Hiring</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{fit.whereHiring}</span>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-lg">
                    <span className="text-[10px] sm:text-xs text-muted-foreground block">Competition</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{fit.degreeCompetition}</span>
                  </div>
                </div>

                {/* Failure & Mistake */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] sm:text-xs font-semibold text-red-700 dark:text-red-300 uppercase">Why Freshers Fail</span>
                        <p className="text-xs sm:text-sm text-red-900 dark:text-red-100 mt-0.5">{fit.whyFail}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] sm:text-xs font-semibold text-orange-700 dark:text-orange-300 uppercase">Common Mistake</span>
                        <p className="text-xs sm:text-sm text-orange-900 dark:text-orange-100 mt-0.5">{fit.commonMistake}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top 4 Subjects */}
                <div className="p-2.5 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] sm:text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase">Top 4 Subjects (Ranked)</span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {fit.top4Subjects.map((subject, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-purple-100 dark:bg-purple-800/40 text-purple-800 dark:text-purple-200 rounded text-[10px] sm:text-xs">
                            {idx + 1}. {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-300 uppercase">Top 2 Skills</span>
                        <ul className="mt-1 space-y-0.5">
                          {fit.top2Skills.map((skill, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-green-900 dark:text-green-100 flex items-start gap-1">
                              <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase">Top 2 Certifications</span>
                        <ul className="mt-1 space-y-0.5">
                          {fit.top2Certs.map((cert, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-100 flex items-start gap-1">
                              <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gap Re-entry */}
                <div className="p-2.5 sm:p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-start gap-2">
                    <RefreshCw className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase">Gap Re-entry (90-Day Comeback)</span>
                      <div className="mt-2 space-y-1.5 sm:space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-300 min-w-[60px] sm:min-w-[80px]">Refresh:</span>
                          <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">{fit.gapReentry.refresh}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-300 min-w-[60px] sm:min-w-[80px]">Build Proof:</span>
                          <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">{fit.gapReentry.buildProof}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-300 min-w-[60px] sm:min-w-[80px]">1 Cert:</span>
                          <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">{fit.gapReentry.certification}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-300 min-w-[60px] sm:min-w-[80px]">Apply:</span>
                          <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">{fit.gapReentry.applyStrategy}</span>
                        </div>
                      </div>
                      <div className="mt-2 p-2 bg-amber-100 dark:bg-amber-900/30 rounded border-l-2 border-amber-500">
                        <p className="text-[10px] sm:text-xs text-amber-800 dark:text-amber-200 font-medium">
                          ⚠️ Reality Filter: {fit.gapReentry.realityFilter}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Primary Role Card Component for Section 1
const PrimaryRoleCard = ({ role }: { role: typeof primaryJobRoles[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = role.icon;

  return (
    <Card className="border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base md:text-lg">{role.title}</span>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            )}
          </CardTitle>
          {role.hiringReality && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              <HiringBadge reality={role.hiringReality} />
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground">
                {role.howFreshersEnter}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground">
                {role.whereHiringHappens}
              </span>
            </div>
          )}
        </CardHeader>
      </button>
      
      {isExpanded && (
        <CardContent className="pt-0 space-y-3 sm:space-y-4">
          {/* Subjects */}
          <div className="p-2.5 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase">6 Core Subjects</span>
                <div className="mt-1.5 space-y-1">
                  {role.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold text-xs sm:text-sm min-w-[16px]">{idx + 1}.</span>
                      <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Failure Reason */}
          {role.topFailureReason && (
            <div className="p-2.5 sm:p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-red-700 dark:text-red-300 uppercase">Top Fresher Failure Reason</span>
                  <p className="text-xs sm:text-sm text-red-900 dark:text-red-100 mt-0.5">{role.topFailureReason}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

const CivilEngineering2 = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <SectionHeader
        title="Civil Engineering 2.1"
        subtitle="Complete Role Mapping with Subjects, Industry Fits & 90-Day Gap Re-entry Plans"
      />

      <Tabs defaultValue="primary-roles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="primary-roles" className="text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
            Primary Roles
          </TabsTrigger>
          <TabsTrigger value="role-spreads" className="text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
            Role Spreads
          </TabsTrigger>
          <TabsTrigger value="final-summary" className="text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
            Final Summary
          </TabsTrigger>
        </TabsList>

        {/* Section 1: Primary Roles with Subjects */}
        <TabsContent value="primary-roles" className="mt-4 sm:mt-6">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Section 1 — Primary Fresher Entry Roles (Top 8)</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Each role lists the 6 key subjects you need to master for entry</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {primaryJobRoles.map((role) => (
              <PrimaryRoleCard key={role.id} role={role} />
            ))}
          </div>
        </TabsContent>

        {/* Section 2: Role Opportunity Spreads */}
        <TabsContent value="role-spreads" className="mt-4 sm:mt-6">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Section 2 — Role Opportunity Spread</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Each role has 5 industry fits with complete career data + 90-day gap re-entry plans</p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {roleOpportunitySpreads.map((roleData) => (
              <RoleOpportunityCard key={roleData.role} roleData={roleData} />
            ))}
          </div>
        </TabsContent>

        {/* Section 3: Final Summary */}
        <TabsContent value="final-summary" className="mt-4 sm:mt-6">
          <div className="space-y-4 sm:space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <Card className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{finalSummary.totalPrimaryRoles}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Primary Roles</div>
              </Card>
              <Card className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{finalSummary.totalIndustries}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Industries</div>
              </Card>
              <Card className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{finalSummary.totalSubIndustries}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Sub-Industries</div>
              </Card>
              <Card className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{finalSummary.totalClusters}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Total Clusters</div>
              </Card>
            </div>

            {/* Key Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Card className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-green-800 dark:text-green-200">Most Opportunities</h4>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300 mt-1">{finalSummary.mostOpportunities}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-blue-800 dark:text-blue-200">Safest Role for Freshers</h4>
                    <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 mt-1">{finalSummary.safestRole}</p>
                    <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 mt-0.5">{finalSummary.safestRoleReason}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Truth Cards */}
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-3 sm:p-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Target className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-amber-800 dark:text-amber-200">One-Line Truth</h4>
                    <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300 mt-1">{finalSummary.oneLineTruth}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-3 sm:p-4 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-emerald-800 dark:text-emerald-200">BEST For</h4>
                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 mt-1">{finalSummary.bestFor}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-red-800 dark:text-red-200">MIS-SOLD As</h4>
                    <p className="text-xs sm:text-sm text-red-700 dark:text-red-300 mt-1">{finalSummary.misSoldAs}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Final Role Index Table */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Final Role Index (40 Opportunities)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 sm:p-4">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-3 font-semibold">Job Role</th>
                        <th className="text-left p-3 font-semibold">Industry</th>
                        <th className="text-left p-3 font-semibold">Sub-Industry</th>
                        <th className="text-left p-3 font-semibold">Work Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {finalRoleIndex.map((item, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="p-3 font-medium">{item.role}</td>
                          <td className="p-3">{item.industry}</td>
                          <td className="p-3">{item.subIndustry}</td>
                          <td className="p-3 text-muted-foreground">{item.workArea}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-2 p-3">
                  {finalRoleIndex.map((item, idx) => (
                    <div key={idx} className="p-3 bg-muted/30 rounded-lg border border-border">
                      <div className="font-medium text-sm text-foreground mb-1">{item.role}</div>
                      <div className="text-xs text-muted-foreground space-y-0.5">
                        <div><span className="font-medium">Industry:</span> {item.industry}</div>
                        <div><span className="font-medium">Sub:</span> {item.subIndustry}</div>
                        <div><span className="font-medium">Work:</span> {item.workArea}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CivilEngineering2;
