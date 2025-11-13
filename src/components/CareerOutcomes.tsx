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

      {/* Job Reality vs Expectation Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 text-center px-4">
          Job Reality vs Expectation
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-6 px-4">
          What students think vs what the job actually involves
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Aerospace Engineer */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4"> Aerospace Engineer</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Expectation:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>"I'll work on rockets, fighter jets, and space missions every day."</li>
                <li>"My job will be high-adventure and hands-on."</li>
                <li>"I'll design full aircraft at a young age."</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Reality:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>80% of work is simulations, CAD modeling, calculations, reports, reviews.</li>
                <li>Hands-on testing is limited and comes later in the career.</li>
                <li>You mostly work on small components, not entire aircraft.</li>
                <li>Long review cycles → patience required.</li>
              </ul>
            </div>

            <div className="relative mt-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-lg transition-all duration-300">
              
              <p className="text-sm font-bold text-slate-900 pl-12 leading-relaxed sm:text-xs">
                More computer work, less rocket-glamour. High thinking, high accuracy.
              </p>
            </div>
          </div>

          {/* Avionics Engineer */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4"> Avionics Engineer</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Expectation:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>"I will develop futuristic autopilot systems immediately."</li>
                <li>"I will work inside aircraft cockpits daily."</li>
                <li>"I'll build cool electronics quickly."</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Reality:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Majority of the work is coding, testing, debugging, documentation.</li>
                <li>Cockpit/in-aircraft work is rare; most work is in lab environments.</li>
                <li>Very strict rules — small mistakes can delay whole projects.</li>
                <li>Need to learn embedded systems continuously.</li>
              </ul>
            </div>

            <div className="relative mt-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-lg transition-all duration-300">
              
              <p className="text-sm font-bold text-slate-900 pl-12 leading-relaxed sm:text-xs">
                More coding/testing, less cockpit action. Great for tech lovers.
              </p>
            </div>
          </div>

          {/* AME */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">           Aircraft Maintenance Engineer  </h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Expectation:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>"I'll stand near aircraft every day — glamorous aviation life."</li>
                <li>"Job will be simple: check aircraft and go home."</li>
                <li>"Airport environment will be luxurious."</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                 Reality:
              </h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Very high pressure → safety of passengers depends on your work.</li>
                <li>Physical job: bending, lifting, outdoor work, heat, hangar noise.</li>
                <li>Night shifts, long hours, on-call duty are common.</li>
                <li>Work happens during aircraft downtime → often late nights.</li>
                <li>Mistakes are not allowed — zero-error job.</li>
              </ul>
            </div>

            <div className="relative mt-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-lg transition-all duration-300">
              
              <p className="text-sm font-bold text-slate-900 pl-12 leading-relaxed sm:text-xs">
                High pressure, high responsibility, long hours — but very respected and secure.
              </p>
            </div>
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
            
          </div>)}
      </div>

      {/* Data Sources Section */}
      
    </div>;
};

// The file is getting lengthy. For best maintainability, consider splitting components (like VerticalBarChart and EntryMidSeniorCard) into their own files for easier edits in the future.