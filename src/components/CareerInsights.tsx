import React from 'react';
import { Calendar, AlertTriangle, BarChart3, Award, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Seo from './Seo';

export const CareerInsights = () => {
  const hiringCycleData = [
    {
      role: 'Aerospace Engineer (Design & R&D)',
      months: 'Jan–March, July–Sept',
      reason: 'New R&D budgets open, new project cycles begin.'
    },
    {
      role: 'Avionics Engineer',
      months: 'Feb–April, Aug–Nov',
      reason: 'Electronics product cycles + defence project approvals.'
    },
    {
      role: 'AME',
      months: 'Every quarter',
      reason: 'Airline fleet expansion + mandatory MRO checks.'
    }
  ];

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

  const hiringWeightage = [
    { factor: 'Portfolio/Modules', aero: '40%', avionics: '50%', ame: '45%' },
    { factor: 'Certifications', aero: '25%', avionics: '20%', ame: '10%' },
    { factor: 'Internship', aero: '20%', avionics: '15%', ame: '30%' },
    { factor: 'College Tier', aero: '10%', avionics: '10%', ame: '10%' },
    { factor: 'Marks', aero: '5%', avionics: '5%', ame: '5%' }
  ];

  const survivorProfiles = [
    {
      role: 'Aerospace',
      traits: ['Long patience', 'Comfortable with slow wins', 'Strong fundamentals']
    },
    {
      role: 'Avionics',
      traits: ['Logical thinker', 'Loves debugging', 'Calm under stress']
    },
    {
      role: 'AME',
      traits: ['Very disciplined', 'High stamina', 'Zero ego, high obedience']
    }
  ];

  const cityInternshipData = {
    aerospace: [
      { city: 'Bengaluru', score: '10/10', reason: "India's biggest aerospace hub; constant hiring." },
      { city: 'Hyderabad', score: '8/10', reason: 'Large private cluster; regular intake.' },
      { city: 'Pune', score: '6/10', reason: 'Project-based design internships.' },
      { city: 'Nagpur', score: '4/10', reason: 'Mostly MRO city, fewer aerospace design roles.' },
      { city: 'Kochi', score: '5/10', reason: 'Space Park nearby; internships exist but seasonal.' }
    ],
    avionics: [
      { city: 'Bengaluru', score: '10/10', reason: 'BEL, Collins, Honeywell = very frequent.' },
      { city: 'Hyderabad', score: '9/10', reason: 'DRDO Avionics + BEL + Astra Microwave.' },
      { city: 'Pune', score: '7/10', reason: 'Embedded + electronics companies hire seasonally.' },
      { city: 'Nagpur', score: '5/10', reason: 'Small RF/electronics suppliers.' },
      { city: 'Kochi', score: '6/10', reason: 'DRDO/ISRO electronics labs near Trivandrum.' }
    ],
    ame: [
      { city: 'Nagpur', score: '10/10', reason: "India's top MRO hub; internships constant." },
      { city: 'Hyderabad', score: '9/10', reason: 'GMR MRO = steady intake.' },
      { city: 'Bengaluru', score: '8/10', reason: 'HAL Overhaul + Air Works.' },
      { city: 'Kochi', score: '7/10', reason: 'Cochin Airport MRO is active.' },
      { city: 'Pune', score: '6/10', reason: 'Airport maintenance units + charter operators.' }
    ]
  };

  const internshipCompanies = {
    aerospace: {
      companies: [
        'HAL (Hindustan Aeronautics Limited) – design, manufacturing, assembly exposure',
        'DRDO Labs – aerodynamic testing, propulsion projects',
        'ISRO Vendor Companies – structure, materials, fabrication',
        'Tata Aerospace & Defence – composite parts, fixtures, engineering support',
        'Mahindra Aerospace – airframe manufacturing, quality',
        'L&T Defence – structures, systems, integration support',
        'Quest Global – CAD, CAE, CFD beginner-level projects',
        'Cyient – design & simulation support',
        'VTOL Aviation India – UAV-based design internships'
      ],
      summary: 'Best for design, simulation, and manufacturing exposure.'
    },
    avionics: {
      companies: [
        'DRDO – Electronics & Avionics Labs – embedded, sensors, testing',
        'BEL (Bharat Electronics Limited) – radar, communication systems',
        'Tata Elxsi – embedded systems, testing',
        'Cyient (Avionics division) – avionics testing & integration',
        'Quest Global – embedded + electronics test automation',
        'Aequs Aerospace – electronics assembly & testing',
        'Tonbo Imaging – electro-optics, signal systems',
        'IdeaForge – UAV control systems',
        'Astra Microwave – RF systems, antenna engineering'
      ],
      summary: 'Best for embedded, electronics testing, and UAV systems.'
    },
    ame: {
      companies: [
        'Air India Engineering Services (AIESL) – heavy maintenance',
        'IndiGo / SpiceJet / Vistara MRO Divisions – line maintenance, checks',
        'GMR Aero Technic (Hyderabad) – base maintenance',
        'AAR India MRO (Nagpur) – component overhaul',
        'Air Works – major MRO provider; beginner-friendly',
        'GSA Aviation – component and systems servicing',
        'Taneja Aerospace (TAAL) – small-aircraft maintenance',
        'Airports Authority of India (AAI) – airport systems maintenance exposure'
      ],
      summary: 'Best for aircraft checks, inspections, and hands-on maintenance.'
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

          {/* Hiring Cycle Calendar */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Hiring Cycle Calendar</h2>
            </div>
            <p className="text-muted-foreground mb-6">Each industry has peak hiring seasons. Plan your applications accordingly.</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {hiringCycleData.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Peak Months</p>
                        <p className="text-xl font-bold text-primary">{item.months}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Why</p>
                        <p className="text-sm">{item.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Failure Points Map */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Failure Points Map</h2>
            </div>
            <p className="text-muted-foreground mb-6">A brutally honest map showing top reasons students struggle.</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {failurePoints.map((role, idx) => (
                <Card key={idx} className="border-destructive/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">{role.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {role.points.map((point, pidx) => (
                        <li key={pidx} className="flex flex-col gap-1">
                          <span className="font-semibold text-sm">{point.issue}</span>
                          <span className="text-xs text-muted-foreground">→ {point.consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Hiring Weightage */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Hiring Weightage</h2>
            </div>
            <p className="text-muted-foreground mb-6">What actually matters when companies hire.</p>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Factor</th>
                        <th className="px-4 py-3 text-center font-semibold">Aerospace</th>
                        <th className="px-4 py-3 text-center font-semibold">Avionics</th>
                        <th className="px-4 py-3 text-center font-semibold">AME</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {hiringWeightage.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/50 transition-colors">
                          <td className="px-4 py-3 font-medium">{row.factor}</td>
                          <td className="px-4 py-3 text-center text-primary font-bold">{row.aero}</td>
                          <td className="px-4 py-3 text-center text-primary font-bold">{row.avionics}</td>
                          <td className="px-4 py-3 text-center text-primary font-bold">{row.ame}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Survivor Profile */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Survivor Profile</h2>
            </div>
            <p className="text-muted-foreground mb-6">The personality profile of students who survive and grow.</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {survivorProfiles.map((profile, idx) => (
                <Card key={idx} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{profile.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {profile.traits.map((trait, tidx) => (
                        <li key={tidx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm">{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* City-wise Internship Chances */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">City-wise Internship Chances</h2>
            </div>
            <p className="text-muted-foreground mb-6">Where to maximize your internship opportunities.</p>
            
            <div className="space-y-8">
              {/* Aerospace Engineer */}
              <Card>
                <CardHeader>
                  <CardTitle>Aerospace Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cityInternshipData.aerospace.map((city, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 sm:w-48">
                          <span className="font-semibold">{city.city}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded font-bold text-sm">{city.score}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{city.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Avionics Engineer */}
              <Card>
                <CardHeader>
                  <CardTitle>Avionics Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cityInternshipData.avionics.map((city, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 sm:w-48">
                          <span className="font-semibold">{city.city}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded font-bold text-sm">{city.score}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{city.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AME */}
              <Card>
                <CardHeader>
                  <CardTitle>Aircraft Maintenance Engineer (AME)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cityInternshipData.ame.map((city, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 sm:w-48">
                          <span className="font-semibold">{city.city}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded font-bold text-sm">{city.score}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{city.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Internship Opportunities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Internship Opportunities</h2>
            </div>
            <p className="text-muted-foreground mb-6">Verified entry-level friendly companies for each role.</p>
            
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Aerospace */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aerospace Engineer</CardTitle>
                  <p className="text-sm text-primary font-semibold">{internshipCompanies.aerospace.summary}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {internshipCompanies.aerospace.companies.map((company, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{company}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Avionics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Avionics Engineer</CardTitle>
                  <p className="text-sm text-primary font-semibold">{internshipCompanies.avionics.summary}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {internshipCompanies.avionics.companies.map((company, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{company}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* AME */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aircraft Maintenance Engineer</CardTitle>
                  <p className="text-sm text-primary font-semibold">{internshipCompanies.ame.summary}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {internshipCompanies.ame.companies.map((company, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{company}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CareerInsights;