import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend
} from 'recharts';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

const careerData = [
  {
    role: 'Aerospace Engineer',
    duties: 'Designs aircraft, satellites, missiles',
    entry: 4.0,
    mid: 12.0,
    senior: 20.0,
    icon: '✈️'
  },
  {
    role: 'Avionics Engineer',
    duties: 'Manages aircraft electronics',
    entry: 3.5,
    mid: 10.0,
    senior: 18.0,
    icon: '🛩️'
  },
  {
    role: 'Aircraft Maintenance Eng.',
    duties: 'Repairs and inspects aircraft systems',
    entry: 3.0,
    mid: 8.0,
    senior: 15.0,
    icon: '🔧'
  },
  {
    role: 'Flight Test Engineer',
    duties: 'Tests aircraft performance and safety',
    entry: 5.0,
    mid: 14.0,
    senior: 22.0,
    icon: '🧪'
  },
  {
    role: 'Drone/UAV Engineer',
    duties: 'Builds and manages drones',
    entry: 3.0,
    mid: 9.0,
    senior: 16.0,
    icon: '🚁'
  },
  {
    role: 'Data Analyst (Aviation)',
    duties: 'Analyzes flight/fuel/maintenance data',
    entry: 4.0,
    mid: 11.0,
    senior: 18.0,
    icon: '📊'
  }
];

const LEVEL_GRADIENTS = {
  entry: {
    id: "entryGrad",
    from: "#6366f1",
    to: "#a5b4fc"
  },
  mid: {
    id: "midGrad",
    from: "#0ea5e9",
    to: "#99f6e4"
  },
  senior: {
    id: "seniorGrad",
    from: "#a21caf",
    to: "#f472b6"
  }
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg shadow-lg px-4 py-2 bg-white border border-blue-100 animate-fade-in">
        <div className="font-bold text-blue-800">{payload[0].payload?.role}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2 mt-1">
            <span className="inline-block w-2 h-2 rounded-full"
              style={{
                background: p.name === "Entry" ? LEVEL_GRADIENTS.entry.from :
                            p.name === "Mid"   ? LEVEL_GRADIENTS.mid.from :
                            LEVEL_GRADIENTS.senior.from
              }}
            ></span>
            <span className="font-bold text-xl text-gray-700">{p.name}:</span>
            <span className="font-mono font-semibold text-base text-blue-800">₹{p.value} LPA</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const chartData = careerData.map(career => ({
  role: career.role,
  Entry: career.entry,
  Mid: career.mid,
  Senior: career.senior,
  icon: career.icon,
}));

export const CareerOutcomes = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          What Can I Become After This Degree?
        </h2>
        <p className="text-xl text-gray-600">
          Explore high-growth aerospace careers with competitive salaries
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/30 rounded-2xl px-2 py-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-gradient-to-tr from-blue-600 to-violet-500 px-4 py-1 rounded-full text-white font-semibold shadow">
            <TrendingUp className="inline w-5 h-5 mr-1" /> Career Salary Comparison
          </span>
          <span className="text-muted-foreground text-xs ml-4">All figures: ₹ Lakh Per Annum (LPA)</span>
        </div>
        <ResponsiveContainer width="100%" height={390}>
          <BarChart
            data={chartData}
            margin={{ top: 32, right: 20, left: 18, bottom: 32 }}
            barGap={22}
          >
            <CartesianGrid strokeDasharray="4 8" vertical={false} stroke="#e0e7eb" />
            <XAxis
              dataKey="role"
              tick={{
                fontWeight: 700,
                fill: "#3730a3",
                fontSize: 16,
                letterSpacing: "0.02em",
              }}
              axisLine={false}
              tickLine={false}
              interval={0}
              minTickGap={8}
              tickFormatter={(v: string, i: number) =>
                chartData[i]?.icon ? `${chartData[i].icon} ${v.split(" ")[0]}` : v
              }
              angle={-8}
              dy={8}
            />
            <YAxis
              width={64}
              tick={{
                fontWeight: 700,
                fill: "#334155",
                fontSize: 15,
                letterSpacing: '.01em',
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${v}L`}
              label={{
                value: "Salary (₹LPA)",
                angle: -90,
                position: "insideLeft",
                fill: "#4f46e5",
                fontSize: 16,
                fontWeight: 700,
                offset: -8,
                style: { textAnchor: "middle" }
              }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#e0e7ff", opacity: 0.18 }} />
            <Legend
              formatter={(value) => (
                <span className="font-semibold text-base text-slate-600">{value} Level</span>
              )}
              iconType="circle"
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 18 }}
            />
            <Bar
              dataKey="Entry"
              name="Entry"
              radius={[12, 12, 8, 8]}
              fill="#2563eb"
              maxBarSize={38}
              isAnimationActive={true}
              animationDuration={900}
            >
              <LabelList
                dataKey="Entry"
                position="top"
                formatter={(val) => `₹${val}L`}
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  fill: "#2563eb",
                  textShadow: "0 2px 4px #fff7"
                }}
                className="font-extrabold"
              />
            </Bar>
            <Bar
              dataKey="Mid"
              name="Mid"
              radius={[12, 12, 8, 8]}
              fill="#06b6d4"
              maxBarSize={38}
              isAnimationActive={true}
              animationDuration={1150}
            >
              <LabelList
                dataKey="Mid"
                position="top"
                formatter={(val) => `₹${val}L`}
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  fill: "#0e7490",
                  textShadow: "0 2px 4px #fff9"
                }}
                className="font-extrabold"
              />
            </Bar>
            <Bar
              dataKey="Senior"
              name="Senior"
              radius={[12, 12, 8, 8]}
              fill="#a21caf"
              maxBarSize={38}
              isAnimationActive={true}
              animationDuration={1300}
            >
              <LabelList
                dataKey="Senior"
                position="top"
                formatter={(val) => `₹${val}L`}
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  fill: "#a21caf",
                  textShadow: "0 2px 4px #fff8"
                }}
                className="font-extrabold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {careerData.map((career) => (
          <div
            key={career.role}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{career.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{career.role}</h3>
                <p className="text-sm text-gray-600">{career.duties}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-blue-800">₹{career.entry}</div>
                <div className="text-sm text-blue-600 font-semibold">Entry</div>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-indigo-800">₹{career.mid}</div>
                <div className="text-sm text-indigo-600 font-semibold">Mid-Level</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg shadow">
                <div className="text-lg font-bold text-purple-800">₹{career.senior}+</div>
                <div className="text-sm text-purple-600 font-semibold">Senior</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">15-20%</div>
            <div className="text-blue-200">Average Growth</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">6</div>
            <div className="text-blue-200">Career Paths</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">50L+</div>
            <div className="text-blue-200">Jobs by 2040</div>
          </div>
        </div>
      </div>
    </div>
  );
};
