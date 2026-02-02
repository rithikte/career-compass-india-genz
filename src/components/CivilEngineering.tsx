import React, { useState } from 'react';
import { 
  Building2, HardHat, ClipboardCheck, Calculator, Clock, Shield, 
  Users, Compass, AlertTriangle, CheckCircle, Target, Award, 
  FileText, TrendingUp, MapPin, Briefcase, GraduationCap, 
  ChevronDown, ChevronUp, BookOpen, Star, AlertCircle, Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const CivilEngineering = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'roles' | 'spreads' | 'snapshots'>('roles');

  // Section 1: Primary Fresher Entry Roles
  const primaryRoles = [
    {
      id: 'site-engineer',
      title: 'Site Engineer',
      altTitles: 'Project Site Engineer, Field Engineer, Execution Engineer, Junior Site Engineer',
      icon: Building2,
      color: 'blue',
      fresherReality: 'Strong',
      degreeCompetition: 'High',
      entryMethod: 'Campus / Trainee',
      whereHiring: 'Off-campus common',
      topFailure: "Can't handle site pressure + coordination + basic drawings/levels."
    },
    {
      id: 'qaqc-engineer',
      title: 'QA/QC Engineer',
      altTitles: 'Quality Engineer, QC Site Engineer, Materials Engineer, Junior QA/QC',
      icon: ClipboardCheck,
      color: 'green',
      fresherReality: 'Strong',
      degreeCompetition: 'High',
      entryMethod: 'Campus / Trainee',
      whereHiring: 'Off-campus common',
      topFailure: "Doesn't know tests, documentation, or site quality process."
    },
    {
      id: 'billing-engineer',
      title: 'Billing Engineer',
      altTitles: 'Quantity Surveyor – Junior, Billing & Estimation Engineer, Junior QS',
      icon: Calculator,
      color: 'purple',
      fresherReality: 'Moderate',
      degreeCompetition: 'High',
      entryMethod: 'Campus / Trainee / Internship→PPO',
      whereHiring: 'Off-campus common',
      topFailure: 'Weak in BOQ/measurement + Excel + rate analysis.'
    },
    {
      id: 'planning-engineer',
      title: 'Planning Engineer',
      altTitles: 'Junior Planning Engineer, Project Planner – Trainee, Planning & Scheduling Engineer',
      icon: Clock,
      color: 'amber',
      fresherReality: 'Moderate',
      degreeCompetition: 'High',
      entryMethod: 'Internship→PPO / Trainee',
      whereHiring: 'Campus-heavy (top colleges)',
      topFailure: "Doesn't know Primavera/MSP basics + project logic."
    },
    {
      id: 'design-engineer',
      title: 'Junior Design Engineer – Civil',
      altTitles: 'Structural Design Trainee, CAD Engineer – Civil, Junior Structural Engineer',
      icon: Compass,
      color: 'indigo',
      fresherReality: 'Moderate',
      degreeCompetition: 'High',
      entryMethod: 'Campus / Internship→PPO',
      whereHiring: 'Campus-heavy',
      topFailure: 'Only "AutoCAD user" — no design fundamentals + no software depth.'
    },
    {
      id: 'survey-engineer',
      title: 'Survey Engineer',
      altTitles: 'Junior Surveyor, Site Survey Engineer, Total Station Engineer',
      icon: MapPin,
      color: 'teal',
      fresherReality: 'Moderate',
      degreeCompetition: 'Medium',
      entryMethod: 'Off-campus / Trainee',
      whereHiring: 'Off-campus common',
      topFailure: "Can't operate instruments + poor accuracy discipline."
    },
    {
      id: 'hse-engineer',
      title: 'HSE Engineer – Construction',
      altTitles: 'Safety Officer, EHS Engineer, Site Safety Engineer',
      icon: Shield,
      color: 'red',
      fresherReality: 'Weak (better with safety certification)',
      degreeCompetition: 'Medium',
      entryMethod: 'Off-campus / Trainee',
      whereHiring: 'Off-campus common',
      topFailure: "No safety cert + doesn't know site safety rules/practices."
    },
    {
      id: 'get-civil',
      title: 'Graduate Engineer Trainee – Civil',
      altTitles: 'GET Civil, Trainee Engineer, Junior Engineer, Associate Engineer',
      icon: GraduationCap,
      color: 'emerald',
      fresherReality: 'Strong',
      degreeCompetition: 'High',
      entryMethod: 'Campus-heavy',
      whereHiring: 'Campus-heavy',
      topFailure: 'Generic profile — no specialization proof + poor aptitude/interview basics.'
    }
  ];

  // Section 2: Role Opportunity Spreads
  const roleOpportunitySpreads = {
    'site-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction (Residential/Commercial)',
        cluster: 'RCC Structure + Site Execution',
        dailyWork: 'Run daily RCC site work—check line/level, supervise labour, and finish work as per drawings.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'High',
        subjects: ['Concrete Tech', 'Building Construction', 'SOM', 'Surveying'],
        skills: ['Drawing reading', 'Site coordination'],
        certifications: ['AutoCAD', 'Basic Quantity Surveying'],
        mistake: 'Thinking site job = "supervision only."',
        whyFail: 'Poor site communication + weak basics in RCC/levels.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'Highway Execution (earthwork–WMM–DBM–BC)',
        dailyWork: 'Execute road layers on site—control chainage/levels, compaction, and coordinate plant + vendors.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'High',
        subjects: ['Transportation Engg', 'Surveying', 'Soil Mechanics', 'Construction Mgmt'],
        skills: ['Measurement control', 'Vendor/plant coordination'],
        certifications: ['AutoCAD', 'Site execution basics'],
        mistake: 'No clarity on field tests + tolerances.',
        whyFail: 'Bad control on line/level + poor reporting discipline.'
      },
      {
        industry: 'Water & Utilities',
        subindustry: 'Water Supply / Pipelines',
        cluster: 'Pipeline Laying + Testing + Restoration',
        dailyWork: 'Manage pipeline laying—control trench work, jointing, testing, and restore the road properly.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Fluid Mechanics', 'Public Health Engg', 'Surveying', 'Construction Mgmt'],
        skills: ['Work sequencing', 'Basic testing documentation'],
        certifications: ['AutoCAD', 'Safety basics (construction)'],
        mistake: 'Ignoring safety and utility clashes.',
        whyFail: 'Poor planning + mishandling site constraints.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Factories / Warehouses',
        cluster: 'PEB + Flooring + Industrial RCC',
        dailyWork: 'Execute factory/warehouse civil works—PEB/RCC/flooring with strict quality + fast schedule.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Building Construction', 'Concrete Tech', 'Construction Mgmt', 'SOM'],
        skills: ['Execution speed', 'Quality coordination'],
        certifications: ['AutoCAD', 'Basic QA/QC documentation'],
        mistake: 'Underestimating industrial standards.',
        whyFail: 'Quality misses + rework + poor time control.'
      },
      {
        industry: 'Energy',
        subindustry: 'Solar/Power Plant Civil',
        cluster: 'Foundations + Trenches',
        dailyWork: 'Build solar/power civil—foundations, trenches, ducts with fast layout and tight tolerance.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Concrete Tech', 'Surveying', 'Construction Mgmt', 'Soil basics'],
        skills: ['Layout control', 'Contractor handling'],
        certifications: ['AutoCAD', 'Survey basics'],
        mistake: 'Sloppy setting-out work.',
        whyFail: 'Rework due to alignment/level errors.'
      }
    ],
    'qaqc-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction',
        cluster: 'Concrete QA/QC (cube tests + pour checks)',
        dailyWork: 'Check concrete quality on site—tests, pour checks, and maintain proper QA records.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'High',
        subjects: ['Concrete Tech', 'Building Materials', 'Construction Mgmt', 'SOM'],
        skills: ['Inspection checklist use', 'Report writing'],
        certifications: ['QA/QC basics (construction)', 'AutoCAD'],
        mistake: 'Thinking QA/QC = lab only.',
        whyFail: 'Missing records + documentation gaps.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'Asphalt + Compaction Quality (field tests)',
        dailyWork: 'Do road quality tests—asphalt/compaction checks and log data for approvals.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'High',
        subjects: ['Transportation Engg', 'Soil Mechanics', 'Building Materials', 'Surveying'],
        skills: ['Field testing discipline', 'Data logging'],
        certifications: ['QA/QC roads basics', 'Excel (site reporting)'],
        mistake: 'Fake/loose data collection.',
        whyFail: 'Bad test discipline → rejection/rework.'
      },
      {
        industry: 'Ready-Mix / Materials',
        subindustry: 'RMC Plant Operations',
        cluster: 'Mix design + Dispatch QA',
        dailyWork: 'Control RMC quality—check mix, batching, tests, and stop wrong dispatches.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Off-campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Concrete Tech', 'Building Materials', 'Fluid Mechanics', 'Lab/Testing'],
        skills: ['Testing & calibration', 'Process discipline'],
        certifications: ['Concrete technology short course', 'QA/QC basics'],
        mistake: 'Not understanding how batching affects strength.',
        whyFail: 'Poor control → complaints, returns, losses.'
      },
      {
        industry: 'Water & Utilities',
        subindustry: 'Water Treatment / STP Projects',
        cluster: 'Civil quality + lining + finishing checks',
        dailyWork: 'Inspect STP/WTP civil works—waterproofing, lining, finishing and pass leak/quality tests.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['PHE', 'Concrete', 'Materials', 'Const Mgmt'],
        skills: ['Inspection', 'Documentation'],
        certifications: ['QA/QC basics', 'Waterproofing basics'],
        mistake: 'Ignoring small defects.',
        whyFail: 'Leak test failure.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Warehouses / Logistics Parks',
        cluster: 'Flooring flatness + finishing QA',
        dailyWork: 'Ensure industrial flooring quality—flatness, finishing checks, and coordinate fixes fast.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee / Internship→PPO',
        whereHiring: 'Campus-heavy (top vendors)',
        fresherChance: 'Medium',
        subjects: ['Concrete Tech', 'Building Construction', 'Construction Mgmt', 'Building Materials'],
        skills: ['Site inspection', 'Coordination with execution team'],
        certifications: ['QA/QC construction', 'Excel reporting'],
        mistake: 'Fighting with execution team instead of aligning.',
        whyFail: 'Poor coordination → quality bypassed.'
      }
    ],
    'billing-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction',
        cluster: 'BOQ + Measurements + Client Billing',
        dailyWork: 'Measure completed work, prepare BOQ quantities, and raise client bills with proof.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee / Internship→PPO',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Estimation & Costing', 'Building Const', 'SOM', 'Const Mgmt'],
        skills: ['Measurement', 'Excel'],
        certifications: ['QS basics', 'Excel'],
        mistake: 'BOQ copy-paste.',
        whyFail: 'Billing disputes.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'RA Bills + Quantity Tracking',
        dailyWork: 'Track highway quantities daily and prepare RA bills with measurement book support.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Estimation & Costing', 'Transportation Engg', 'Surveying', 'Construction Mgmt'],
        skills: ['Quantity reconciliation', 'Billing documentation'],
        certifications: ['QS basics', 'Excel (advanced)'],
        mistake: 'Poor daily records → end-month chaos.',
        whyFail: 'No proof → payments delayed.'
      },
      {
        industry: 'Water & Utilities',
        subindustry: 'Pipelines',
        cluster: 'Measurement + Variation Claims',
        dailyWork: 'Record pipeline quantities + variations and prepare claims with strong backup documents.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Off-campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Estimation & Costing', 'Public Health Engg', 'Surveying', 'Construction Mgmt'],
        skills: ['Record keeping', 'Rate analysis'],
        certifications: ['QS basics', 'Contract basics (intro)'],
        mistake: 'Not documenting variations on time.',
        whyFail: 'Claims rejected due to weak backup.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Factory Projects',
        cluster: 'Subcontractor Billing + BOQ Control',
        dailyWork: 'Measure subcontractor work and control BOQ to prevent quantity leakage and overspend.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee / Internship→PPO',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Estimation & Costing', 'Construction Mgmt', 'Building Construction', 'SOM'],
        skills: ['Multi-vendor billing', 'Excel control sheets'],
        certifications: ['QS basics', 'Excel for project controls'],
        mistake: 'No measurement discipline site-wise.',
        whyFail: 'Leakage in quantities → cost overruns.'
      },
      {
        industry: 'Real Estate',
        subindustry: 'Developer Projects',
        cluster: 'Vendor Bills + Internal Cost Tracking',
        dailyWork: 'Verify vendor bills and track internal costs—one mistake directly impacts money.',
        fresherReality: 'Weak (developers prefer experienced QS)',
        competition: 'High',
        entry: 'Internship→PPO',
        whereHiring: 'Campus-heavy (top developers)',
        fresherChance: 'Low',
        subjects: ['Estimation & Costing', 'Construction Mgmt', 'Building Construction', 'Contracts (basic)'],
        skills: ['Vendor reconciliation', 'Documentation'],
        certifications: ['QS basics', 'Contract basics'],
        mistake: 'Assuming billing is "easy desk work."',
        whyFail: 'Errors hit money directly → zero tolerance.'
      }
    ],
    'planning-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction',
        cluster: 'Schedule + Lookahead Planning',
        dailyWork: 'Make the construction schedule, update progress weekly, and send clear delay reports.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Internship→PPO / Trainee',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Medium',
        subjects: ['Construction Mgmt', 'Estimation & Costing', 'Building Construction', 'SOM'],
        skills: ['MSP/Primavera basics', 'Reporting'],
        certifications: ['MS Project / Primavera basics', 'Excel reporting'],
        mistake: 'Making "pretty schedules" that don\'t match site reality.',
        whyFail: 'Bad logic → schedule collapses.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'Progress Tracking + Resource Planning',
        dailyWork: 'Plan resources + track progress for roads and align schedule with plant + procurement.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Construction Mgmt', 'Transportation Engg', 'Surveying', 'Estimation & Costing'],
        skills: ['Progress measurement', 'Excel dashboards'],
        certifications: ['MS Project basics', 'Excel (advanced)'],
        mistake: 'Not syncing plan with procurement and plant.',
        whyFail: 'Plan vs ground mismatch.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Factories / Warehouses',
        cluster: 'Fast-track Planning + Coordination',
        dailyWork: 'Run fast-track project planning—track constraints daily and unblock dependencies.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Medium',
        subjects: ['Construction Mgmt', 'Building Construction', 'Estimation & Costing', 'Concrete Tech'],
        skills: ['Scheduling', 'Constraint tracking'],
        certifications: ['Primavera/MSP', 'Excel'],
        mistake: 'Ignoring approvals.',
        whyFail: 'Slippage snowballs.'
      },
      {
        industry: 'Water & Utilities',
        subindustry: 'STP/WTP Projects',
        cluster: 'Workfront Planning + Tracking',
        dailyWork: 'Plan and track STP/WTP workfronts while coordinating civil with MEP sequence.',
        fresherReality: 'Weak to Moderate',
        competition: 'Medium',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low to Medium',
        subjects: ['Construction Mgmt', 'Public Health Engg', 'Estimation & Costing', 'Building Construction'],
        skills: ['Coordination', 'Reporting'],
        certifications: ['MS Project basics', 'Excel reporting'],
        mistake: 'Not coordinating with mechanical/electrical teams.',
        whyFail: 'Misaligned execution flow.'
      },
      {
        industry: 'EPC',
        subindustry: 'Large Projects (multi-package)',
        cluster: 'Planning + Documentation (client-facing)',
        dailyWork: 'Create client-facing schedules and reports—planning + documentation under heavy pressure.',
        fresherReality: 'Weak (often needs experience)',
        competition: 'High',
        entry: 'Campus (top tier) / Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Low',
        subjects: ['Construction Mgmt', 'Estimation & Costing', 'Contracts basics', 'Building Construction'],
        skills: ['Reporting', 'Stakeholder communication'],
        certifications: ['Primavera/MSP basics', 'Excel reporting'],
        mistake: 'Overpromising timelines without ground check.',
        whyFail: 'Client pressure exposes weak fundamentals fast.'
      }
    ],
    'design-engineer': [
      {
        industry: 'Consulting/Design',
        subindustry: 'Structural Design (Buildings)',
        cluster: 'RCC Design + Detailing',
        dailyWork: 'Design RCC members and produce drawings—loads, checks, and detailing accuracy.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Campus / Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Medium',
        subjects: ['Structural Analysis', 'RCC Design', 'SOM', 'Steel Structures'],
        skills: ['ETABS/STAAD basics', 'Detailing discipline'],
        certifications: ['STAAD/ETABS', 'AutoCAD detailing'],
        mistake: 'Software-first, concept-last.',
        whyFail: "Can't explain design logic in interviews."
      },
      {
        industry: 'Infrastructure Design',
        subindustry: 'Bridges/Flyovers',
        cluster: 'Structural Modelling + Drawing Coordination',
        dailyWork: 'Support bridge modelling and drawing coordination while following codes and load logic.',
        fresherReality: 'Weak to Moderate',
        competition: 'High',
        entry: 'Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Low to Medium',
        subjects: ['Structural Analysis', 'SOM', 'RCC/Steel', 'Transportation basics'],
        skills: ['Modelling', 'Drawing reading/coordination'],
        certifications: ['STAAD/ETABS', 'AutoCAD'],
        mistake: 'No understanding of loads + codes.',
        whyFail: 'Codes/interview grill destroys shallow prep.'
      },
      {
        industry: 'BIM/Design Tech',
        subindustry: 'BIM for Civil',
        cluster: 'BIM Modelling + Clash Coordination',
        dailyWork: 'Build BIM models and coordinate clashes so site teams don\'t face rework.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Internship→PPO / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Building const', 'Structural basics', 'Const mgmt', 'Detailing'],
        skills: ['Revit', 'Coordination'],
        certifications: ['Revit', 'Navisworks'],
        mistake: 'Treat BIM as "3D only".',
        whyFail: 'Model errors.'
      },
      {
        industry: 'Geotech/Foundations',
        subindustry: 'Foundation Design Support',
        cluster: 'Soil Report + Foundation Recommendations',
        dailyWork: 'Read soil reports and help decide foundation type with basic calculations and notes.',
        fresherReality: 'Weak to Moderate',
        competition: 'Medium',
        entry: 'Internship→PPO',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low to Medium',
        subjects: ['Soil Mechanics', 'Foundation Engg', 'Structural basics', 'Surveying basics'],
        skills: ['Report interpretation', 'Design calculations basics'],
        certifications: ['Foundation/Geotech short course', 'Excel (engineering calc)'],
        mistake: 'Memorizing theory without application.',
        whyFail: "Can't apply soil data to decisions."
      },
      {
        industry: 'Real Estate',
        subindustry: 'Developer Design Coordination',
        cluster: 'Vendor Drawings + Design Review Support',
        dailyWork: 'Coordinate drawings between consultants and vendors and close comments fast.',
        fresherReality: 'Weak',
        competition: 'High',
        entry: 'Campus (top) / Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Low',
        subjects: ['Building Construction', 'Structural basics', 'Construction Mgmt', 'Estimation basics'],
        skills: ['Drawing coordination', 'Communication'],
        certifications: ['AutoCAD', 'BIM basics'],
        mistake: 'Slow delivery and weak coordination.',
        whyFail: 'High-pressure coordination exposes inexperience.'
      }
    ],
    'survey-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction',
        cluster: 'Setting Out + Levels + Layout',
        dailyWork: 'Do setting out and levels using Total Station so the building is built in correct position.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Off-campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Surveying', 'Building Construction', 'Construction Mgmt', 'SOM basics'],
        skills: ['Total Station operation', 'Accuracy discipline'],
        certifications: ['Total Station basics', 'AutoCAD'],
        mistake: 'Careless readings.',
        whyFail: 'One mistake = rework = money loss.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'Alignment + Cross-Sections + Levels',
        dailyWork: 'Mark alignment/chainage and take levels/cross-sections for highway execution control.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Trainee / Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Surveying', 'Transportation Engg', 'Soil basics', 'Construction Mgmt'],
        skills: ['Field surveying', 'Data recording'],
        certifications: ['Total Station basics', 'Excel (field data)'],
        mistake: 'Poor field book discipline.',
        whyFail: 'Data mismatch kills trust.'
      },
      {
        industry: 'Rail/Metro',
        subindustry: 'Rail/Metro Civil',
        cluster: 'Station/Track Survey Support',
        dailyWork: 'Support metro/rail surveys with high precision—small errors are not tolerated.',
        fresherReality: 'Weak to Moderate',
        competition: 'High',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low to Medium',
        subjects: ['Surveying', 'Const mgmt', 'Transport basics', 'Safety basics'],
        skills: ['Precision', 'Coordination'],
        certifications: ['DGPS intro', 'Safety basics'],
        mistake: 'Not following precision workflow.',
        whyFail: 'Immediate rejection.'
      },
      {
        industry: 'Energy',
        subindustry: 'Solar',
        cluster: 'Site Layout + Pile Marking',
        dailyWork: 'Lay out solar site grid and mark pile locations accurately across large land area.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Off-campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Surveying', 'Construction Mgmt', 'Concrete basics', 'Soil basics'],
        skills: ['Grid layout', 'Accuracy control'],
        certifications: ['Total Station basics', 'AutoCAD'],
        mistake: 'Rushing markings.',
        whyFail: 'Misalignment forces rework.'
      },
      {
        industry: 'Land/Real Estate Services',
        subindustry: 'Land Survey / Boundary',
        cluster: 'Boundary Survey + Mapping',
        dailyWork: 'Measure boundaries and create maps—mistakes can cause legal disputes.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Surveying', 'Mapping basics', 'Math basics', 'Documentation basics'],
        skills: ['Boundary accuracy', 'Documentation'],
        certifications: ['GIS basics', 'Total Station basics'],
        mistake: 'Assuming it\'s "simple measuring."',
        whyFail: 'Disputes happen; mistakes become legal headaches.'
      }
    ],
    'hse-engineer': [
      {
        industry: 'Construction',
        subindustry: 'Building Construction',
        cluster: 'Site Safety + Compliance',
        dailyWork: 'Prevent accidents—daily safety checks, toolbox talks, and enforce PPE + rules.',
        fresherReality: 'Weak',
        competition: 'Medium',
        entry: 'Off-campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low',
        subjects: ['Construction Mgmt', 'Building Construction', 'Basic safety', 'Communication'],
        skills: ['Safety inspections', 'People handling'],
        certifications: ['NEBOSH/IOSH (or equivalent)', 'First aid basics'],
        mistake: 'Treating safety as "paperwork."',
        whyFail: "Can't enforce safety with contractors."
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads & Highways',
        cluster: 'Workzone Safety + Plant Safety',
        dailyWork: 'Manage road work zone safety—plant movement control and incident reporting.',
        fresherReality: 'Weak',
        competition: 'Medium',
        entry: 'Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low',
        subjects: ['Construction Mgmt', 'Transportation basics', 'Safety basics', 'Communication'],
        skills: ['Toolbox talks', 'Incident reporting'],
        certifications: ['Safety certification', 'First aid basics'],
        mistake: 'Being passive on unsafe acts.',
        whyFail: 'Safety role needs confidence + authority.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Factories/Warehouses',
        cluster: 'Permit to Work + Safety Audits',
        dailyWork: 'Run PTW system and safety audits and train workers to follow site rules.',
        fresherReality: 'Weak to Moderate',
        competition: 'Medium',
        entry: 'Trainee (if certified)',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low to Medium',
        subjects: ['Documentation', 'Safety', 'Const Mgmt', 'Communication'],
        skills: ['Audits', 'Training workers'],
        certifications: ['NEBOSH/IOSH', 'Fire safety'],
        mistake: 'Policing not teaching.',
        whyFail: 'No compliance.'
      },
      {
        industry: 'Energy',
        subindustry: 'Power/Solar',
        cluster: 'Site Safety + Electrical Safety Awareness',
        dailyWork: 'Control site hazards in solar/power—especially electrical safety awareness + reporting.',
        fresherReality: 'Weak',
        competition: 'Medium',
        entry: 'Off-campus',
        whereHiring: 'Off-campus common',
        fresherChance: 'Low',
        subjects: ['Construction Mgmt', 'Safety basics', 'Communication', 'Basic electrical awareness'],
        skills: ['Hazard ID', 'Reporting'],
        certifications: ['Safety certification', 'First aid'],
        mistake: 'Ignoring near-miss reporting.',
        whyFail: 'Site incidents are zero tolerance.'
      },
      {
        industry: 'EPC',
        subindustry: 'Large Civil Projects',
        cluster: 'Safety Documentation + Compliance',
        dailyWork: 'Maintain client-compliance safety documents and prepare for audits without mistakes.',
        fresherReality: 'Weak',
        competition: 'High',
        entry: 'Internship→PPO (rare)',
        whereHiring: 'Campus-heavy (top tier)',
        fresherChance: 'Low',
        subjects: ['Documentation', 'Safety basics', 'Construction Mgmt', 'Communication'],
        skills: ['Compliance paperwork', 'Auditing basics'],
        certifications: ['NEBOSH/IOSH', 'Fire safety'],
        mistake: 'Copying templates without understanding.',
        whyFail: 'Audits expose fake knowledge fast.'
      }
    ],
    'get-civil': [
      {
        industry: 'Construction',
        subindustry: 'EPC – Buildings',
        cluster: 'Site Rotation (execution + QA/QC)',
        dailyWork: 'Rotate across execution + QA/QC and learn site work fast under seniors.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Campus',
        whereHiring: 'Campus-heavy',
        fresherChance: 'High',
        subjects: ['Building Construction', 'Concrete Tech', 'SOM', 'Construction Mgmt'],
        skills: ['Communication', 'On-ground learning speed'],
        certifications: ['AutoCAD', 'Excel basics'],
        mistake: 'Acting "over smart" on site.',
        whyFail: 'Attitude + slow learning.'
      },
      {
        industry: 'Infrastructure',
        subindustry: 'Roads/Highways EPC',
        cluster: 'Field Rotation (survey + execution)',
        dailyWork: 'Rotate in road projects—survey + execution support and handle tough field conditions.',
        fresherReality: 'Strong',
        competition: 'High',
        entry: 'Campus / Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'High',
        subjects: ['Transportation Engg', 'Surveying', 'Soil Mechanics', 'Construction Mgmt'],
        skills: ['Field adaptability', 'Reporting'],
        certifications: ['AutoCAD', 'Survey basics'],
        mistake: 'Expecting city postings only.',
        whyFail: 'Dropouts due to field reality.'
      },
      {
        industry: 'Industrial Construction',
        subindustry: 'Warehouses/Factories',
        cluster: 'Execution + Planning support rotation',
        dailyWork: 'Support execution + planning tasks and coordinate vendors in fast warehouse projects.',
        fresherReality: 'Moderate',
        competition: 'High',
        entry: 'Campus',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Medium',
        subjects: ['Construction Mgmt', 'Building Construction', 'Concrete Tech', 'Estimation basics'],
        skills: ['Coordination', 'Problem solving'],
        certifications: ['AutoCAD', 'Excel'],
        mistake: 'Poor follow-up with vendors.',
        whyFail: 'Delays pile up due to weak follow-through.'
      },
      {
        industry: 'Water & Utilities',
        subindustry: 'Pipelines/WTP/STP EPC',
        cluster: 'Execution + testing documentation rotation',
        dailyWork: 'Support pipeline/STP EPC work—execution plus testing documentation for client audits.',
        fresherReality: 'Moderate',
        competition: 'Medium',
        entry: 'Trainee',
        whereHiring: 'Off-campus common',
        fresherChance: 'Medium',
        subjects: ['Public Health Engg', 'Surveying', 'Concrete Tech', 'Construction Mgmt'],
        skills: ['Documentation', 'Coordination'],
        certifications: ['AutoCAD', 'Excel reporting'],
        mistake: 'Treating records as "optional."',
        whyFail: 'Client audits punish missing records.'
      },
      {
        industry: 'Consulting/PMC',
        subindustry: 'Project Management Consultancy',
        cluster: 'Site monitoring + reporting support',
        dailyWork: 'Support PMC monitoring—site checks + reporting for client decision-making.',
        fresherReality: 'Weak to Moderate',
        competition: 'High',
        entry: 'Campus (top) / Internship→PPO',
        whereHiring: 'Campus-heavy',
        fresherChance: 'Low to Medium',
        subjects: ['Construction Mgmt', 'Estimation basics', 'Building Construction', 'Communication'],
        skills: ['Reporting', 'Stakeholder coordination'],
        certifications: ['Excel (advanced)', 'MS Project basics'],
        mistake: 'Writing vague reports with no data.',
        whyFail: 'PMC lives on clarity and proof.'
      }
    ]
  };

  // Final Summary
  const finalSummary = {
    totalPrimaryRoles: 8,
    totalIndustries: 7,
    totalSubIndustries: 18,
    totalClusters: 40,
    bestRole: 'Site Engineer',
    safestRole: 'Site Engineer (most hiring volume; easiest entry)',
    oneLiner: 'Civil gives jobs fast, but the first 2–3 years are hard, low-paying, and field-heavy unless you build real skills.',
    bestFor: 'Students who can handle site pressure + field work + long hours',
    misSoldAs: '"Easy engineering + government job guarantee"'
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; light: string }> = {
      blue: { bg: 'bg-blue-600', border: 'border-blue-200', text: 'text-blue-600', light: 'bg-blue-50' },
      green: { bg: 'bg-green-600', border: 'border-green-200', text: 'text-green-600', light: 'bg-green-50' },
      purple: { bg: 'bg-purple-600', border: 'border-purple-200', text: 'text-purple-600', light: 'bg-purple-50' },
      amber: { bg: 'bg-amber-600', border: 'border-amber-200', text: 'text-amber-600', light: 'bg-amber-50' },
      indigo: { bg: 'bg-indigo-600', border: 'border-indigo-200', text: 'text-indigo-600', light: 'bg-indigo-50' },
      teal: { bg: 'bg-teal-600', border: 'border-teal-200', text: 'text-teal-600', light: 'bg-teal-50' },
      red: { bg: 'bg-red-600', border: 'border-red-200', text: 'text-red-600', light: 'bg-red-50' },
      emerald: { bg: 'bg-emerald-600', border: 'border-emerald-200', text: 'text-emerald-600', light: 'bg-emerald-50' }
    };
    return colors[color] || colors.blue;
  };

  const getRealityBadgeColor = (level: string) => {
    const lowerLevel = level.toLowerCase();
    if (lowerLevel.includes('strong')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerLevel.includes('moderate')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (lowerLevel.includes('weak')) return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  const getCompetitionBadgeColor = (level: string) => {
    const lowerLevel = level.toLowerCase();
    if (lowerLevel === 'high') return 'bg-red-100 text-red-800 border-red-200';
    if (lowerLevel === 'medium') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (lowerLevel === 'low') return 'bg-green-100 text-green-800 border-green-200';
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  const getChanceBadgeColor = (level: string) => {
    const lowerLevel = level.toLowerCase();
    if (lowerLevel === 'high') return 'bg-green-100 text-green-800 border-green-200';
    if (lowerLevel === 'medium' || lowerLevel.includes('medium')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (lowerLevel === 'low' || lowerLevel.includes('low')) return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 text-white rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6"></div>
        
        <div className="relative text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-xs sm:text-sm">Civil Engineering — Complete Career Map</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Civil Engineering</h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            {finalSummary.oneLiner}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 sm:mt-6">
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">{finalSummary.totalPrimaryRoles}</div>
              <div className="text-[10px] sm:text-xs text-white/70">Primary Roles</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">{finalSummary.totalIndustries}</div>
              <div className="text-[10px] sm:text-xs text-white/70">Industries</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">{finalSummary.totalSubIndustries}</div>
              <div className="text-[10px] sm:text-xs text-white/70">Sub-Industries</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">{finalSummary.totalClusters}</div>
              <div className="text-[10px] sm:text-xs text-white/70">Clusters</div>
            </div>
          </div>
        </div>
      </div>

      {/* Best For / Mis-sold As Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-green-200 bg-green-50/50">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm sm:text-base flex items-center gap-2 text-green-800">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              BEST For
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm sm:text-base text-green-700">{finalSummary.bestFor}</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-red-200 bg-red-50/50">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm sm:text-base flex items-center gap-2 text-red-800">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              MIS-SOLD As
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm sm:text-base text-red-700">{finalSummary.misSoldAs}</p>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 bg-slate-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('roles')}
          className={`flex-1 min-w-[100px] px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
            activeTab === 'roles' ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Primary Roles ({primaryRoles.length})
        </button>
        <button
          onClick={() => setActiveTab('spreads')}
          className={`flex-1 min-w-[100px] px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
            activeTab === 'spreads' ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Role Spreads
        </button>
        <button
          onClick={() => setActiveTab('snapshots')}
          className={`flex-1 min-w-[100px] px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
            activeTab === 'snapshots' ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Final Summary
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'roles' && (
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            Section 1 — Primary Fresher Entry Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {primaryRoles.map((role, index) => {
              const Icon = role.icon;
              const colorClasses = getColorClasses(role.color);
              const isExpanded = expandedRole === role.id;
              
              return (
                <Card key={role.id} className={`border-2 ${colorClasses.border} hover:shadow-lg transition-shadow`}>
                  <CardHeader className="p-3 sm:p-4 cursor-pointer" onClick={() => setExpandedRole(isExpanded ? null : role.id)}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`p-2 rounded-lg ${colorClasses.light} flex-shrink-0`}>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClasses.text}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-[10px] sm:text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                              #{index + 1}
                            </span>
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium border ${getRealityBadgeColor(role.fresherReality)}`}>
                              {role.fresherReality}
                            </span>
                          </div>
                          <CardTitle className="text-sm sm:text-base md:text-lg">
                            {role.title}
                          </CardTitle>
                          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {role.altTitles}
                          </p>
                        </div>
                      </div>
                      <button className="p-1 hover:bg-slate-100 rounded flex-shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="p-3 sm:p-4 pt-0 space-y-3 border-t">
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div className="bg-slate-50 rounded-lg p-2">
                          <span className="text-slate-500 text-[10px] sm:text-xs">Degree Competition</span>
                          <div className={`mt-1 inline-flex px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${getCompetitionBadgeColor(role.degreeCompetition)}`}>
                            {role.degreeCompetition}
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2">
                          <span className="text-slate-500 text-[10px] sm:text-xs">Entry Method</span>
                          <p className="font-medium mt-0.5 text-[10px] sm:text-xs">{role.entryMethod}</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 col-span-2">
                          <span className="text-slate-500 text-[10px] sm:text-xs">Where Hiring Happens</span>
                          <p className="font-medium mt-0.5 text-[10px] sm:text-xs">{role.whereHiring}</p>
                        </div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] sm:text-xs font-semibold text-red-700">Top Fresher Failure Reason</span>
                            <p className="text-[10px] sm:text-xs text-red-600 mt-0.5">{role.topFailure}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'spreads' && (
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            Section 2 — Role Opportunity Spreads
          </h2>
          <p className="text-sm text-slate-600">
            Click on any role below to see detailed industry-wise opportunities
          </p>
          
          {primaryRoles.map((role) => {
            const Icon = role.icon;
            const colorClasses = getColorClasses(role.color);
            const spreads = roleOpportunitySpreads[role.id as keyof typeof roleOpportunitySpreads] || [];
            const isExpanded = expandedRole === `spread-${role.id}`;
            
            return (
              <Card key={role.id} className={`border-2 ${colorClasses.border}`}>
                <CardHeader 
                  className="p-3 sm:p-4 cursor-pointer"
                  onClick={() => setExpandedRole(isExpanded ? null : `spread-${role.id}`)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 rounded-lg ${colorClasses.light}`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClasses.text}`} />
                      </div>
                      <div>
                        <CardTitle className="text-sm sm:text-base">{role.title}</CardTitle>
                        <CardDescription className="text-[10px] sm:text-xs">
                          {spreads.length} industry opportunities
                        </CardDescription>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-slate-100 rounded">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="p-3 sm:p-4 pt-0 border-t">
                    <div className="space-y-4">
                      {spreads.map((spread, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-3 sm:p-4 space-y-3">
                          {/* Header */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`${colorClasses.bg} text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium`}>
                              Fit {idx + 1}
                            </span>
                            <span className="font-semibold text-xs sm:text-sm text-slate-900">{spread.industry}</span>
                            <span className="text-slate-400">→</span>
                            <span className="text-xs sm:text-sm text-slate-700">{spread.subindustry}</span>
                          </div>
                          
                          {/* Cluster */}
                          <div className="text-[10px] sm:text-xs text-slate-600">
                            <span className="font-medium">Cluster:</span> {spread.cluster}
                          </div>
                          
                          {/* Daily Work */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-2.5 sm:p-3">
                            <div className="flex items-start gap-2">
                              <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] sm:text-xs font-semibold text-blue-800">Daily Work</span>
                                <p className="text-[10px] sm:text-xs text-blue-700 mt-0.5 leading-relaxed">{spread.dailyWork}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Badges Grid */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border ${getRealityBadgeColor(spread.fresherReality)}`}>
                              Reality: {spread.fresherReality}
                            </span>
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border ${getCompetitionBadgeColor(spread.competition)}`}>
                              Competition: {spread.competition}
                            </span>
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border ${getChanceBadgeColor(spread.fresherChance)}`}>
                              Chance: {spread.fresherChance}
                            </span>
                          </div>
                          
                          {/* Details Grid - Responsive */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-xs">
                            <div>
                              <span className="font-medium text-slate-700">Entry:</span>
                              <span className="ml-1 text-slate-600">{spread.entry}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Where:</span>
                              <span className="ml-1 text-slate-600">{spread.whereHiring}</span>
                            </div>
                          </div>
                          
                          {/* Subjects */}
                          <div>
                            <span className="font-medium text-[10px] sm:text-xs text-slate-700">Top 4 Subjects:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {spread.subjects.map((subject, i) => (
                                <span key={i} className="text-[10px] sm:text-xs bg-white border border-slate-200 px-1.5 sm:px-2 py-0.5 rounded">
                                  {i + 1}. {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Skills */}
                          <div>
                            <span className="font-medium text-[10px] sm:text-xs text-slate-700">Key Skills:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {spread.skills.map((skill, i) => (
                                <span key={i} className="text-[10px] sm:text-xs bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Certifications */}
                          <div>
                            <span className="font-medium text-[10px] sm:text-xs text-slate-700">Certifications:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {spread.certifications.map((cert, i) => (
                                <span key={i} className="text-[10px] sm:text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 sm:px-2 py-0.5 rounded">
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Reality Checks */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                            <div className="bg-amber-50 border border-amber-200 rounded p-2">
                              <span className="text-[10px] sm:text-xs font-medium text-amber-800">Common Mistake</span>
                              <p className="text-[10px] sm:text-xs text-amber-700 mt-0.5">{spread.mistake}</p>
                            </div>
                            <div className="bg-red-50 border border-red-200 rounded p-2">
                              <span className="text-[10px] sm:text-xs font-medium text-red-800">Why Freshers Fail</span>
                              <p className="text-[10px] sm:text-xs text-red-700 mt-0.5">{spread.whyFail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {activeTab === 'snapshots' && (
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            Final Summary
          </h2>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold">{finalSummary.totalPrimaryRoles}</div>
                <div className="text-[10px] sm:text-xs text-blue-100">Primary Roles</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold">{finalSummary.totalIndustries}</div>
                <div className="text-[10px] sm:text-xs text-green-100">Industries</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold">{finalSummary.totalSubIndustries}</div>
                <div className="text-[10px] sm:text-xs text-purple-100">Sub-Industries</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold">{finalSummary.totalClusters}</div>
                <div className="text-[10px] sm:text-xs text-amber-100">Clusters</div>
              </CardContent>
            </Card>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-2 border-emerald-200">
              <CardHeader className="p-3 sm:p-4 pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2 text-emerald-700">
                  <Star className="w-4 h-4" />
                  Role with MOST Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <p className="text-lg sm:text-xl font-bold text-emerald-800">{finalSummary.bestRole}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardHeader className="p-3 sm:p-4 pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2 text-blue-700">
                  <Shield className="w-4 h-4" />
                  Safest Role for This Degree
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <p className="text-sm sm:text-base font-medium text-blue-800">{finalSummary.safestRole}</p>
              </CardContent>
            </Card>
          </div>

          {/* One-liner Truth */}
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="p-4 sm:p-6 text-center">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-amber-400" />
              <h3 className="text-sm sm:text-base font-semibold text-amber-400 mb-2">One-Line Truth</h3>
              <p className="text-sm sm:text-base md:text-lg">{finalSummary.oneLiner}</p>
            </CardContent>
          </Card>

          {/* Final Role Index Table - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Final Role Index</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-700">Job Role</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Industry</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Sub-Industry</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Work Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { role: 'Site Engineer', industry: 'Construction', sub: 'Building Construction', area: 'RCC Structure + Site Execution' },
                    { role: 'Site Engineer', industry: 'Infrastructure', sub: 'Roads & Highways', area: 'Highway Execution' },
                    { role: 'QA/QC Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Concrete QA/QC' },
                    { role: 'QA/QC Engineer', industry: 'Infrastructure', sub: 'Roads & Highways', area: 'Asphalt + Compaction Quality' },
                    { role: 'Billing Engineer', industry: 'Construction', sub: 'Building Construction', area: 'BOQ + Measurements + Client Billing' },
                    { role: 'Planning Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Schedule + Lookahead Planning' },
                    { role: 'Junior Design Engineer', industry: 'Consulting/Design', sub: 'Structural Design', area: 'RCC Design + Detailing' },
                    { role: 'Survey Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Setting Out + Levels + Layout' },
                    { role: 'HSE Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Site Safety + Compliance' },
                    { role: 'GET – Civil', industry: 'Construction', sub: 'EPC – Buildings', area: 'Site Rotation (execution + QA/QC)' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-900">{row.role}</td>
                      <td className="p-3 text-slate-700">{row.industry}</td>
                      <td className="p-3 text-slate-600">{row.sub}</td>
                      <td className="p-3 text-slate-600">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Role Index - Mobile Cards */}
          <div className="md:hidden space-y-3">
            <h3 className="text-base font-bold text-slate-900">Final Role Index</h3>
            {[
              { role: 'Site Engineer', industry: 'Construction', sub: 'Building Construction', area: 'RCC Structure + Site Execution' },
              { role: 'Site Engineer', industry: 'Infrastructure', sub: 'Roads & Highways', area: 'Highway Execution' },
              { role: 'QA/QC Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Concrete QA/QC' },
              { role: 'Billing Engineer', industry: 'Construction', sub: 'Building Construction', area: 'BOQ + Measurements' },
              { role: 'Planning Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Schedule + Lookahead' },
              { role: 'Junior Design Engineer', industry: 'Consulting', sub: 'Structural Design', area: 'RCC Design + Detailing' },
              { role: 'Survey Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Setting Out + Levels' },
              { role: 'HSE Engineer', industry: 'Construction', sub: 'Building Construction', area: 'Site Safety + Compliance' },
              { role: 'GET – Civil', industry: 'EPC', sub: 'Buildings', area: 'Site Rotation' },
            ].map((row, idx) => (
              <Card key={idx} className="border border-slate-200">
                <CardContent className="p-3 space-y-1.5">
                  <div className="font-semibold text-sm text-slate-900">{row.role}</div>
                  <div className="text-xs text-slate-600">
                    <span className="font-medium">Industry:</span> {row.industry}
                  </div>
                  <div className="text-xs text-slate-600">
                    <span className="font-medium">Sub:</span> {row.sub}
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-medium">Area:</span> {row.area}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <Card className="bg-slate-50 border-slate-300">
            <CardContent className="p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs text-slate-500 text-center">
                <strong>DISCLAIMER:</strong> Career paths are patterns, not guarantees. Results depend on skills, effort, company, location, and market conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CivilEngineering;
