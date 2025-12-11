import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { Users, Briefcase, TrendingUp, Info } from 'lucide-react';
import SourceBadge from './SourceBadge';
const careerData = [{
  role: 'Aerospace Engineer',
  duties: 'Design/Systems/Structures/Propulsion',
  levels: [{
    level: 'Entry/Junior',
    title: 'Jr. Aerospace Engineer / Graduate Engineer Trainee',
    salary: '4.5–7',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid/Associate',
    title: 'Aerospace Engineer II / Systems Engineer',
    salary: '8–15',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior',
    title: 'Senior Aerospace Engineer / Lead Engineer',
    salary: '15–25+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Expert/Principal',
    title: 'Principal Engineer / Specialist',
    salary: '25–40+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Leadership',
    title: 'Engineering Manager / Head / Director',
    salary: '40–60+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 5.75,
  mid: 11.5,
  senior: 20
}, {
  role: 'Avionics Engineer',
  duties: 'Aircraft electronics & systems',
  levels: [{
    level: 'Entry/Junior',
    title: 'Jr. Avionics Engineer / Test Engineer',
    salary: '5–8',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid',
    title: 'Avionics Engineer / Systems Engineer',
    salary: '10–15',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior',
    title: 'Senior Avionics / Lead',
    salary: '15–23+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Principal/Expert',
    title: 'Principal Avionics Architect/Specialist',
    salary: '23–33+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Leadership',
    title: 'Avionics Manager / Head',
    salary: '33–50+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 6.5,
  mid: 12.5,
  senior: 19
}, {
  role: 'Aircraft Maintenance Engineer',
  duties: 'Maintenance, Repair, Operations',
  levels: [{
    level: 'Entry/Technician',
    title: 'Jr. AME / Trainee / License Holder',
    salary: '4–6',
    time: '0–2 years',
    reach: '100%'
  }, {
    level: 'Mid/Experienced',
    title: 'Senior AME / Inspector',
    salary: '6–10',
    time: '2–5 years',
    reach: '65%'
  }, {
    level: 'Senior/Lead',
    title: 'Lead Maintenance Engineer',
    salary: '10–18+',
    time: '5–10 years',
    reach: '30%'
  }, {
    level: 'Specialist',
    title: 'Reliability/Cert. Lead/Overhaul',
    salary: '18–25+',
    time: '10–15 years',
    reach: '10%'
  }, {
    level: 'Management',
    title: 'Maintenance Manager/Director',
    salary: '25–40+',
    time: '12–20+ years',
    reach: '5%'
  }],
  entry: 5,
  mid: 8,
  senior: 14
}];

// Prepare the data for the simple bar chart
const mapToBarData = (career: typeof careerData[0]) => [{
  level: 'Entry',
  salary: career.entry
}, {
  level: 'Mid',
  salary: career.mid
}, {
  level: 'Senior',
  salary: career.senior
}];
const LEVEL_COLORS = {
  Entry: 'hsl(238 90% 60%)',
  Mid: 'hsl(238 85% 50%)',
  Senior: 'hsl(275 85% 65%)'
};
const VerticalBarChart = ({
  data
}: {
  data: {
    level: string;
    salary: number;
  }[];
}) => {
  if (!Array.isArray(data)) {
    console.error("VerticalBarChart expected array data but got:", data);
    return null;
  }
  return <ResponsiveContainer width="100%" height={80}>
      <BarChart data={data} layout="vertical" margin={{
      top: 8,
      right: 24,
      left: 0,
      bottom: 0
    }}>
        <CartesianGrid stroke="#e0e7eb" strokeDasharray="4 8" horizontal vertical={false} />
        <XAxis type="number" dataKey="salary" axisLine={false} tickLine={false} fontSize={13} tick={{
        fontWeight: 700,
        fill: "#6366f1"
      }} width={36} tickFormatter={v => `₹${v}L`} />
        <YAxis type="category" dataKey="level" axisLine={false} tickLine={false} fontSize={14} tick={{
        fontWeight: 600,
        fill: "#334155"
      }} />
        <Tooltip formatter={(v: number) => [`₹${v} LPA`, "Salary"]} labelFormatter={l => `${l} Level`} contentStyle={{
        borderRadius: 8,
        fontWeight: 'bold'
      }} />
        <Bar dataKey="salary" fill="#6366f1" radius={[0, 20, 20, 0]}>
          <LabelList dataKey="salary" position="right" formatter={(v: number) => `₹${v}L`} style={{
          fontWeight: 700,
          fontSize: 15,
          fill: "#4f46e5",
          textShadow: "0 1px 8px #fff"
        }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>;
};
const EntryMidSeniorCard = ({
  entry,
  mid,
  senior
}: {
  entry: number;
  mid: number;
  senior: number;
}) => <div className="grid grid-cols-3 gap-4 text-center mt-2 mb-2">
    <div className="bg-primary-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-primary">₹{entry}L</div>
      <div className="text-xs text-primary font-semibold">Entry</div>
    </div>
    <div className="bg-primary-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-primary">₹{mid}L</div>
      <div className="text-xs text-primary font-semibold">Mid</div>
    </div>
    <div className="bg-accent-light p-2 rounded-lg shadow">
      <div className="text-base font-bold text-accent">₹{senior}L+</div>
      <div className="text-xs text-accent font-semibold">Senior</div>
    </div>
  </div>;
export const CareerOutcomes = () => {
  return <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 px-4">
          What Can I Become After This Degree?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 px-4">
          Explore high-growth aerospace careers with competitive salaries
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.jobted.in/salary/aerospace-engineer" label="Jobted India" />
          <SourceBadge href="https://6figr.com/india/salary/aerospace-engineer" label="6figr" />
          <SourceBadge href="https://www.indeedcareers.co.in/careers/aerospace" label="Indeed Careers India" />
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-gradient-subtle rounded-lg p-4 sm:p-6 border-2 border-primary/30 mb-6">
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-sm sm:text-base text-foreground font-semibold">
              <span className="text-primary">⚠️ Important:</span> Figures vary by city, company tier, and specialization.
            </p>
          </div>
        </div>
      </div>


      {/* Swiss Design Grid - Clean, Minimal, Typography-focused */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
        {careerData.map((career, careerIdx) => (
          <div 
            key={career.role} 
            className={`bg-card p-6 sm:p-8 lg:p-10 flex flex-col ${careerIdx < careerData.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-border' : ''}`}
          >
            {/* Role Header - Strong Typography */}
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Role {String(careerIdx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight">
                {career.role}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                {career.duties}
              </p>
            </div>

            {/* Salary Range Visual - Swiss Minimal */}
            <div className="mb-6 sm:mb-8 py-4 sm:py-6 border-y border-border">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">₹{career.entry}L</span>
                  <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mt-1">Entry</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">₹{career.mid}L</span>
                  <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mt-1">Mid</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">₹{career.senior}L+</span>
                  <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mt-1">Senior</span>
                </div>
              </div>
            </div>
            
            {/* Career Progression - Clean List */}
            <div className="flex-1 space-y-0">
              {career.levels.map((lvl, idx) => (
                <div 
                  key={idx} 
                  className={`py-3 sm:py-4 ${idx < career.levels.length - 1 ? 'border-b border-border/50' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-muted-foreground whitespace-nowrap">
                          {lvl.level}
                        </span>
                        <div className="h-px flex-1 bg-border/50 hidden sm:block" />
                        <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 ${
                          lvl.reach === '100%' 
                            ? 'bg-success/10 text-success' 
                            : lvl.reach === '65%' 
                              ? 'bg-primary/10 text-primary' 
                              : lvl.reach === '30%' 
                                ? 'bg-warning/20 text-warning' 
                                : 'bg-accent/10 text-accent'
                        }`}>
                          {lvl.reach}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{lvl.title}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-success whitespace-nowrap">₹{lvl.salary}L</span>
                      <span className="block text-[10px] sm:text-xs text-muted-foreground">{lvl.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Data Sources Section */}
      
    </div>;
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.