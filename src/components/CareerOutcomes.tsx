import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList, Cell } from 'recharts';
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
    reach: '10–15%'
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
    reach: '10–15%'
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
    reach: '10–15%'
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
  Entry: 'hsl(var(--primary))',
  Mid: 'hsl(var(--chart-2))',
  Senior: 'hsl(var(--accent))'
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
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} layout="vertical" margin={{
          top: 12,
          right: 32,
          left: 8,
          bottom: 12
        }}>
          <defs>
            <linearGradient id="entryGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="midGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
              <stop offset="100%" stopColor="hsl(var(--chart-2))" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="seniorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            stroke="hsl(var(--border))" 
            strokeDasharray="3 3" 
            horizontal 
            vertical={false}
            strokeOpacity={0.3}
          />
          <XAxis 
            type="number" 
            dataKey="salary" 
            axisLine={false} 
            tickLine={false} 
            fontSize={12} 
            tick={{ 
              fontWeight: 600, 
              fill: "hsl(var(--muted-foreground))" 
            }} 
            tickFormatter={v => `₹${v}L`}
          />
          <YAxis 
            type="category" 
            dataKey="level" 
            axisLine={false} 
            tickLine={false} 
            fontSize={13} 
            tick={{ 
              fontWeight: 700, 
              fill: "hsl(var(--foreground))" 
            }}
            width={60}
          />
          <Tooltip 
            formatter={(v: number) => [`₹${v} LPA`, "Salary"]} 
            labelFormatter={l => `${l} Level`} 
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 8,
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            cursor={{ fill: 'hsl(var(--muted))', opacity: 0.1 }}
          />
          <Bar dataKey="salary" radius={[0, 12, 12, 0]}>
            {data.map((entry, index) => {
              const gradientId = entry.level === 'Entry' ? 'entryGradient' : 
                                entry.level === 'Mid' ? 'midGradient' : 'seniorGradient';
              return (
                <Cell key={`cell-${index}`} fill={`url(#${gradientId})`} />
              );
            })}
            <LabelList 
              dataKey="salary" 
              position="right" 
              formatter={(v: number) => `₹${v}L`} 
              style={{
                fontWeight: 800,
                fontSize: 14,
                fill: "hsl(var(--primary))",
              }} 
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
const EntryMidSeniorCard = ({
  entry,
  mid,
  senior
}: {
  entry: number;
  mid: number;
  senior: number;
}) => (
  <div className="grid grid-cols-3 gap-3 mt-4">
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-4 border border-primary/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="text-2xl font-extrabold text-primary mb-1">₹{entry}L</div>
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Entry Level</div>
      <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
    </div>
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-2/5 dark:from-chart-2/20 dark:to-chart-2/10 p-4 border border-chart-2/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="text-2xl font-extrabold text-chart-2 mb-1">₹{mid}L</div>
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Mid Level</div>
      <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-chart-2/5 rounded-full blur-xl" />
    </div>
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 p-4 border border-accent/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="text-2xl font-extrabold text-accent mb-1">₹{senior}L+</div>
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Senior Level</div>
      <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-accent/5 rounded-full blur-xl" />
    </div>
  </div>
);
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
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
              <Info className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base text-foreground font-semibold">
              <span className="text-primary">⚠️ Important:</span> Figures vary by city, company tier, and specialization.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {careerData.map(career => <div key={career.role} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col gap-2">
            <div className="mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{career.role}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">{career.duties}</p>
            </div>
            
            {/* Detailed Career Levels Table */}
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-2 font-semibold text-gray-700">Level</th>
                    <th className="text-left p-2 font-semibold text-gray-700">Salary (LPA)</th>
                    <th className="text-left p-2 font-semibold text-gray-700">Time</th>
                    <th className="text-left p-2 font-semibold text-gray-700">% Reach</th>
                  </tr>
                </thead>
                <tbody>
                  {career.levels.map((lvl, idx) => <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-semibold text-gray-800">{lvl.level}</div>
                        <div className="text-xs text-gray-600">{lvl.title}</div>
                      </td>
                      <td className="p-2 font-bold text-green-700">₹{lvl.salary}</td>
                      <td className="p-2 text-gray-600">{lvl.time}</td>
                      <td className="p-2">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${lvl.reach === '100%' ? 'bg-green-100 text-green-800' : lvl.reach === '65%' ? 'bg-blue-100 text-blue-800' : lvl.reach === '30%' ? 'bg-yellow-100 text-yellow-800' : 'bg-orange-100 text-orange-800'}`}>
                          {lvl.reach}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>

            {/* Quick Summary Chart */}
            <div className="w-full">
              <VerticalBarChart data={mapToBarData(career)} />
              <EntryMidSeniorCard entry={career.entry} mid={career.mid} senior={career.senior} />
            </div>
          </div>)}
      </div>
      <div className="bg-gradient-primary text-white p-4 sm:p-6 lg:p-8 rounded-lg mt-6 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">15-20%</div>
            <div className="text-white/80 text-sm sm:text-base">Average Growth</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">3</div>
            <div className="text-white/80 text-sm sm:text-base">Career Paths</div>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold">64L+</div>
            <div className="text-white/80 text-sm sm:text-base">Jobs by 2040</div>
          </div>
        </div>
      </div>

      {/* Data Sources Section */}
      
    </div>;
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.