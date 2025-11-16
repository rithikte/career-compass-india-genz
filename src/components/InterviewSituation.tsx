import React from 'react';
import { AlertTriangle, Users, XCircle, CheckCircle, Clock, TrendingDown, Brain, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import SourceBadge from './SourceBadge';
const cityWiseData = [{
  city: 'Bengaluru',
  applicants: 130,
  gotJob: 38,
  rejectedAfterInterview: 50,
  didntReachFinal: 42,
  insight: "India's most competitive aerospace job market due to ISRO, HAL, Boeing, Collins, and 150+ private companies."
}, {
  city: 'Hyderabad',
  applicants: 110,
  gotJob: 35,
  rejectedAfterInterview: 40,
  didntReachFinal: 35,
  insight: 'Strong MRO, avionics, and defense corridor – heavy competition but good placement chances for skilled candidates.'
}, {
  city: 'Pune',
  applicants: 95,
  gotJob: 30,
  rejectedAfterInterview: 33,
  didntReachFinal: 32,
  insight: 'Focus on manufacturing and avionics systems – slightly less competitive but rising rapidly with new OEM investments.'
}];
const interviewData = [{
  role: "Aircraft Maintenance Eng.",
  applicants: 120,
  gotJob: 45,
  rejectedAfterInterview: 42,
  didntReachFinal: 33,
  rejectionReasons: "No DGCA certs, poor MRO tool skills"
}, {
  role: "Aerospace Engineer",
  applicants: 100,
  gotJob: 33,
  rejectedAfterInterview: 33,
  didntReachFinal: 34,
  rejectionReasons: "Lacking CAD/CFD, simulation knowledge"
}, {
  role: "Avionics Engineer",
  applicants: 110,
  gotJob: 27,
  rejectedAfterInterview: 44,
  didntReachFinal: 39,
  rejectionReasons: "No embedded/VHDL skills, weak circuit logic"
}];
export const InterviewSituation = () => {
  // Transform data for chart visualization
  const chartData = interviewData.map(item => ({
    name: item.role.split(' ')[0],
    // Shortened name for chart
    success: (item.gotJob / item.applicants * 100).toFixed(1),
    rejection: (item.rejectedAfterInterview / item.applicants * 100).toFixed(1),
    filtered: (item.didntReachFinal / item.applicants * 100).toFixed(1)
  }));
  const getSuccessRate = (gotJob: number, applicants: number) => gotJob / applicants * 100;
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          The Interview Reality Check
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          What actually happens when 100+ students compete for aviation jobs
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SourceBadge href="https://www.aicte-india.org/feedback/placement-statistics" label="AICTE Placement Data" />
          <SourceBadge href="https://www.naukri.com/company-reviews/aerospace-companies" label="Naukri Reviews" />
          <SourceBadge href="https://www.glassdoor.co.in/Interview/aerospace-engineer-interview-questions" label="Glassdoor Interviews" />
        </div>
      </div>

      {/* Overall Statistics */}
      

      {/* Success Rate Chart */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
          Interview Outcome Distribution by Role
        </h3>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Out of 100 applicants per job role - where do they end up?
        </p>
        <div className="h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
              <YAxis fontSize={12} label={{
              value: '% of Applicants',
              angle: -90,
              position: 'insideLeft'
            }} />
              <Tooltip formatter={(value: any, name: string) => {
              const labels: Record<string, string> = {
                'success': 'Got Job',
                'rejection': 'Rejected After Interview',
                'filtered': 'Filtered Out Early'
              };
              return [`${value}%`, labels[name] || name];
            }} labelStyle={{
              color: '#1e293b'
            }} />
              <Bar dataKey="success" fill="hsl(142 76% 42%)" name="Got Job" radius={[4, 4, 0, 0]} />
              <Bar dataKey="rejection" fill="hsl(0 72% 51%)" name="Rejected" radius={[4, 4, 0, 0]} />
              <Bar dataKey="filtered" fill="hsl(38 92% 50%)" name="Filtered Out" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{
            backgroundColor: 'hsl(142 76% 42%)'
          }}></div>
            <span className="text-sm font-semibold text-gray-700">Got Job</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{
            backgroundColor: 'hsl(0 72% 51%)'
          }}></div>
            <span className="text-sm font-semibold text-gray-700">Rejected After Interview</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{
            backgroundColor: 'hsl(38 92% 50%)'
          }}></div>
            <span className="text-sm font-semibold text-gray-700">Filtered Out Early</span>
          </div>
        </div>
      </div>

      {/* Individual Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {interviewData.map((item, index) => {
        const successRate = getSuccessRate(item.gotJob, item.applicants);
        const rejectionRate = item.rejectedAfterInterview / item.applicants * 100;
        const filteredRate = item.didntReachFinal / item.applicants * 100;
        return <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.role}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{item.applicants} applicants per 100 jobs</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Success Rate */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Got Job</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      {item.gotJob} ({successRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={successRate} className="h-2" />
                </div>

                {/* Rejection After Interview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">Rejected</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      {item.rejectedAfterInterview} ({rejectionRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={rejectionRate} className="h-2" />
                </div>

                {/* Didn't Reach Final */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium">Filtered Out</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">
                      {item.didntReachFinal} ({filteredRate.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={filteredRate} className="h-2" />
                </div>

                {/* Rejection Reasons */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-600 mb-1">Main Issues:</div>
                  <div className="text-sm text-gray-800">{item.rejectionReasons}</div>
                </div>
              </CardContent>
            </Card>;
      })}
      </div>

      {/* Source */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Source:</strong> Data compiled from surveys, placement reports, and HR feedback from top Indian aviation and aerospace companies, including reports from AICTE, NSDC, and job portals like Naukri.com (2023-2025).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certification Impact */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mb-8">
        <CardContent className="p-8">
          <div className="text-center">
            
            <h3 className="text-2xl font-bold text-green-900 mb-4">Certified vs Non-Certified Reality</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-800">65%</div>
                <div className="text-green-700">Certified Students Placement Success</div>
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-800">30%</div>
                <div className="text-red-700">Non-Certified Students Success</div>
              </div>
            </div>
            <p className="text-green-800 font-semibold mt-4">
              <strong>Certified students placed faster, even from Tier-2 colleges.</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* City-Wise Aerospace Hiring Section */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            City-Wise Aerospace Hiring (2025)
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Applicants per Job Competition Across India's Top Aerospace Hubs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cityWiseData.map((city, index) => {
          const successRate = city.gotJob / city.applicants * 100;
          const rejectionRate = city.rejectedAfterInterview / city.applicants * 100;
          const filteredRate = city.didntReachFinal / city.applicants * 100;
          return <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {city.city}
                    </CardTitle>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-200">
                      <div className="text-sm text-gray-600 font-medium">Total Applicants</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {city.applicants}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {city.insight}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Got Job */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-gray-700">Got the Job</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">
                        {city.gotJob} <span className="text-sm">({successRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500" style={{
                    width: `${successRate}%`
                  }} />
                    </div>
                  </div>

                  {/* Rejected After Interview */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-semibold text-gray-700">Rejected After Interview</span>
                      </div>
                      <span className="text-lg font-bold text-red-600">
                        {city.rejectedAfterInterview} <span className="text-sm">({rejectionRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500" style={{
                    width: `${rejectionRate}%`
                  }} />
                    </div>
                  </div>

                  {/* Didn't Reach Final */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="text-sm font-semibold text-gray-700">Filtered Out Early</span>
                      </div>
                      <span className="text-lg font-bold text-orange-600">
                        {city.didntReachFinal} <span className="text-sm">({filteredRate.toFixed(0)}%)</span>
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500" style={{
                    width: `${filteredRate}%`
                  }} />
                    </div>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Source Information */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-blue-900">
                <strong>Source:</strong> Naukri.com Aerospace Job Trends 2025, TeamLease Employment Outlook Report 2025, and MSDE's Aerospace Skill Gap Report 2024.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Insight Box */}
      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
        <CardContent className="p-6 sm:p-8">
          <h4 className="text-lg sm:text-xl font-bold text-indigo-900 mb-4 text-center">Final Insight</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Bengaluru</h5>
              <p className="text-sm text-gray-700">Most competitive aerospace job market</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Hyderabad</h5>
              <p className="text-sm text-gray-700">Balanced opportunities with the right skills</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h5 className="font-bold text-indigo-900 mb-2">Pune</h5>
              <p className="text-sm text-gray-700">Rising chances in fast-growing manufacturing hub</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-Time Job Density Tracker */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Real-Time Job Density Tracker
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Monthly average across top states
          </p>
        </div>

        {/* Aerospace Engineer Section */}
        <Card className="border-emerald-200 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-emerald-900">
              Aerospace Engineer
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">Monthly average across top states</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-100 border-b-2 border-emerald-300">
                    <th className="text-left p-3 text-sm font-semibold text-emerald-900">State</th>
                    <th className="text-left p-3 text-sm font-semibold text-emerald-900">Avg. Monthly Openings</th>
                    <th className="text-left p-3 text-sm font-semibold text-emerald-900">Avg. Monthly Applicants</th>
                    <th className="text-left p-3 text-sm font-semibold text-emerald-900">Competition Level</th>
                    <th className="text-left p-3 text-sm font-semibold text-emerald-900">Simple Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-200 bg-white hover:bg-emerald-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Karnataka (Bengaluru)</td>
                    <td className="p-3 text-sm">180–220</td>
                    <td className="p-3 text-sm">900–1,100</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">High</span></td>
                    <td className="p-3 text-sm">Many jobs but more competition.</td>
                  </tr>
                  <tr className="border-b border-emerald-200 bg-white hover:bg-emerald-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Telangana (Hyderabad)</td>
                    <td className="p-3 text-sm">120–150</td>
                    <td className="p-3 text-sm">550–650</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Medium</span></td>
                    <td className="p-3 text-sm">Good balance — skilled students get through.</td>
                  </tr>
                  <tr className="border-b border-emerald-200 bg-white hover:bg-emerald-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Maharashtra (Pune/Nagpur)</td>
                    <td className="p-3 text-sm">60–90</td>
                    <td className="p-3 text-sm">300–350</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Medium-High</span></td>
                    <td className="p-3 text-sm">Fewer openings, but competition still manageable.</td>
                  </tr>
                  <tr className="bg-white hover:bg-emerald-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Tamil Nadu (Chennai)</td>
                    <td className="p-3 text-sm">40–70</td>
                    <td className="p-3 text-sm">250–300</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Medium</span></td>
                    <td className="p-3 text-sm">Stable industry roles.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                { state: "Karnataka (Bengaluru)", openings: "180–220", applicants: "900–1,100", level: "High", meaning: "Many jobs but more competition.", color: "red" },
                { state: "Telangana (Hyderabad)", openings: "120–150", applicants: "550–650", level: "Medium", meaning: "Good balance — skilled students get through.", color: "yellow" },
                { state: "Maharashtra (Pune/Nagpur)", openings: "60–90", applicants: "300–350", level: "Medium-High", meaning: "Fewer openings, but competition still manageable.", color: "orange" },
                { state: "Tamil Nadu (Chennai)", openings: "40–70", applicants: "250–300", level: "Medium", meaning: "Stable industry roles.", color: "yellow" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 mb-3">{item.state}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Openings:</span>
                      <span className="font-semibold">{item.openings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applicants:</span>
                      <span className="font-semibold">{item.applicants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Competition:</span>
                      <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-800 rounded-full text-xs font-semibold`}>{item.level}</span>
                    </div>
                    <div className="pt-2 border-t border-emerald-100">
                      <p className="text-gray-700">{item.meaning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-300">
              <p className="text-sm text-emerald-900 font-medium">
                <strong>Simple Line:</strong> Karnataka is the hottest but most competitive. Hyderabad offers the best "win chance" for freshers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Avionics Engineer Section */}
        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-blue-900">
              Avionics Engineer
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">Monthly average across top states</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100 border-b-2 border-blue-300">
                    <th className="text-left p-3 text-sm font-semibold text-blue-900">State</th>
                    <th className="text-left p-3 text-sm font-semibold text-blue-900">Avg. Monthly Openings</th>
                    <th className="text-left p-3 text-sm font-semibold text-blue-900">Avg. Monthly Applicants</th>
                    <th className="text-left p-3 text-sm font-semibold text-blue-900">Competition Level</th>
                    <th className="text-left p-3 text-sm font-semibold text-blue-900">Simple Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Karnataka (Bengaluru)</td>
                    <td className="p-3 text-sm">200–240</td>
                    <td className="p-3 text-sm">850–950</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">High</span></td>
                    <td className="p-3 text-sm">Many openings in embedded/avionics labs; strong competition.</td>
                  </tr>
                  <tr className="border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Telangana (Hyderabad)</td>
                    <td className="p-3 text-sm">140–170</td>
                    <td className="p-3 text-sm">450–550</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Medium</span></td>
                    <td className="p-3 text-sm">Electronics + defence labs = steady demand, easier entry.</td>
                  </tr>
                  <tr className="border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Gujarat (Ahmedabad)</td>
                    <td className="p-3 text-sm">40–60</td>
                    <td className="p-3 text-sm">150–250</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Low-Medium</span></td>
                    <td className="p-3 text-sm">Less competition, good entry spots.</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Tamil Nadu (Chennai)</td>
                    <td className="p-3 text-sm">70–90</td>
                    <td className="p-3 text-sm">250–350</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Medium</span></td>
                    <td className="p-3 text-sm">Balanced market, stable demand.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                { state: "Karnataka (Bengaluru)", openings: "200–240", applicants: "850–950", level: "High", meaning: "Many openings in embedded/avionics labs; strong competition.", color: "red" },
                { state: "Telangana (Hyderabad)", openings: "140–170", applicants: "450–550", level: "Medium", meaning: "Electronics + defence labs = steady demand, easier entry.", color: "yellow" },
                { state: "Gujarat (Ahmedabad)", openings: "40–60", applicants: "150–250", level: "Low-Medium", meaning: "Less competition, good entry spots.", color: "green" },
                { state: "Tamil Nadu (Chennai)", openings: "70–90", applicants: "250–350", level: "Medium", meaning: "Balanced market, stable demand.", color: "yellow" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">{item.state}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Openings:</span>
                      <span className="font-semibold">{item.openings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applicants:</span>
                      <span className="font-semibold">{item.applicants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Competition:</span>
                      <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-800 rounded-full text-xs font-semibold`}>{item.level}</span>
                    </div>
                    <div className="pt-2 border-t border-blue-100">
                      <p className="text-gray-700">{item.meaning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
              <p className="text-sm text-blue-900 font-medium">
                <strong>Simple Line:</strong> Hyderabad = easiest entry. Bengaluru = biggest market, hardest competition.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Aircraft Maintenance Engineer Section */}
        <Card className="border-purple-200 bg-purple-50/30">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-purple-900">
              Aircraft Maintenance Engineer
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">Monthly average across top states</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100 border-b-2 border-purple-300">
                    <th className="text-left p-3 text-sm font-semibold text-purple-900">State</th>
                    <th className="text-left p-3 text-sm font-semibold text-purple-900">Avg. Monthly Openings</th>
                    <th className="text-left p-3 text-sm font-semibold text-purple-900">Avg. Monthly Applicants</th>
                    <th className="text-left p-3 text-sm font-semibold text-purple-900">Competition Level</th>
                    <th className="text-left p-3 text-sm font-semibold text-purple-900">Simple Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-200 bg-white hover:bg-purple-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Maharashtra (Nagpur)</td>
                    <td className="p-3 text-sm">160–200</td>
                    <td className="p-3 text-sm">400–500</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Low-Medium</span></td>
                    <td className="p-3 text-sm">Strong MRO hub; easier to get an internship or job.</td>
                  </tr>
                  <tr className="border-b border-purple-200 bg-white hover:bg-purple-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Telangana (Hyderabad)</td>
                    <td className="p-3 text-sm">130–160</td>
                    <td className="p-3 text-sm">350–450</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Low-Medium</span></td>
                    <td className="p-3 text-sm">GMR MRO intake is steady.</td>
                  </tr>
                  <tr className="border-b border-purple-200 bg-white hover:bg-purple-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Karnataka (Bengaluru)</td>
                    <td className="p-3 text-sm">70–100</td>
                    <td className="p-3 text-sm">250–320</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Medium</span></td>
                    <td className="p-3 text-sm">Competition depends on license level.</td>
                  </tr>
                  <tr className="bg-white hover:bg-purple-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Kerala (Kochi)</td>
                    <td className="p-3 text-sm">50–70</td>
                    <td className="p-3 text-sm">200–250</td>
                    <td className="p-3 text-sm"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Medium-High</span></td>
                    <td className="p-3 text-sm">Smaller MRO units → limited openings.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                { state: "Maharashtra (Nagpur)", openings: "160–200", applicants: "400–500", level: "Low-Medium", meaning: "Strong MRO hub; easier to get an internship or job.", color: "green" },
                { state: "Telangana (Hyderabad)", openings: "130–160", applicants: "350–450", level: "Low-Medium", meaning: "GMR MRO intake is steady.", color: "green" },
                { state: "Karnataka (Bengaluru)", openings: "70–100", applicants: "250–320", level: "Medium", meaning: "Competition depends on license level.", color: "yellow" },
                { state: "Kerala (Kochi)", openings: "50–70", applicants: "200–250", level: "Medium-High", meaning: "Smaller MRO units → limited openings.", color: "orange" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-3">{item.state}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Openings:</span>
                      <span className="font-semibold">{item.openings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applicants:</span>
                      <span className="font-semibold">{item.applicants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Competition:</span>
                      <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-800 rounded-full text-xs font-semibold`}>{item.level}</span>
                    </div>
                    <div className="pt-2 border-t border-purple-100">
                      <p className="text-gray-700">{item.meaning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
              <p className="text-sm text-purple-900 font-medium">
                <strong>Simple Line:</strong> Nagpur and Hyderabad offer the highest chance of landing AME roles quickly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skill Gap Section for Aerospace Engineer */}
        <Card className="border-indigo-200 bg-indigo-50/30">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-indigo-900">
              Aerospace Engineer - Skill Gap by District
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100 border-b-2 border-indigo-300">
                    <th className="text-left p-3 text-sm font-semibold text-indigo-900">District / City</th>
                    <th className="text-left p-3 text-sm font-semibold text-indigo-900">Skill Gap</th>
                    <th className="text-left p-3 text-sm font-semibold text-indigo-900">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-indigo-200 bg-white hover:bg-indigo-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Hyderabad (Ranga Reddy / Medchal)</td>
                    <td className="p-3 text-sm">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        🟢 High Shortage
                      </span>
                    </td>
                    <td className="p-3 text-sm">Many aerospace firms, fewer industry-ready engineers.</td>
                  </tr>
                  <tr className="border-b border-indigo-200 bg-white hover:bg-indigo-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Bengaluru (Bengaluru Urban)</td>
                    <td className="p-3 text-sm">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        🔴 Oversupply
                      </span>
                    </td>
                    <td className="p-3 text-sm">Too many graduates, competition high.</td>
                  </tr>
                  <tr className="border-b border-indigo-200 bg-white hover:bg-indigo-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Pune (Pune Urban)</td>
                    <td className="p-3 text-sm">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        🟡 Balanced
                      </span>
                    </td>
                    <td className="p-3 text-sm">Good industry presence, moderate competition.</td>
                  </tr>
                  <tr className="border-b border-indigo-200 bg-white hover:bg-indigo-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Nagpur</td>
                    <td className="p-3 text-sm">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        🟢 Shortage
                      </span>
                    </td>
                    <td className="p-3 text-sm">MRO focus, not many design engineers available.</td>
                  </tr>
                  <tr className="bg-white hover:bg-indigo-50 transition-colors">
                    <td className="p-3 text-sm font-medium">Chennai (Kanchipuram)</td>
                    <td className="p-3 text-sm">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                        🟡 Balanced
                      </span>
                    </td>
                    <td className="p-3 text-sm">Steady aerospace growth, but enough talent supply.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                { city: "Hyderabad (Ranga Reddy / Medchal)", gap: "🟢 High Shortage", meaning: "Many aerospace firms, fewer industry-ready engineers.", color: "green" },
                { city: "Bengaluru (Bengaluru Urban)", gap: "🔴 Oversupply", meaning: "Too many graduates, competition high.", color: "red" },
                { city: "Pune (Pune Urban)", gap: "🟡 Balanced", meaning: "Good industry presence, moderate competition.", color: "yellow" },
                { city: "Nagpur", gap: "🟢 Shortage", meaning: "MRO focus, not many design engineers available.", color: "green" },
                { city: "Chennai (Kanchipuram)", gap: "🟡 Balanced", meaning: "Steady aerospace growth, but enough talent supply.", color: "yellow" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-bold text-indigo-900 mb-3">{item.city}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Skill Gap:</span>
                      <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-800 rounded-full text-xs font-semibold`}>
                        {item.gap}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-indigo-100">
                      <p className="text-gray-700">{item.meaning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert Section */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Why 70% Students Don't Get Jobs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  
                  <h4 className="font-bold text-red-900 mb-2">No Real Skills</h4>
                  <p className="text-red-800 text-sm">Just degrees, no hands-on tools or practical experience</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  
                  <h4 className="font-bold text-red-900 mb-2">No AI/Tech Awareness</h4>
                  <p className="text-red-800 text-sm">They fear AI but don't know how to work with it</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                  
                  <h4 className="font-bold text-red-900 mb-2">Zero Industry Prep</h4>
                  <p className="text-red-800 text-sm">No internships, certifications, or career clarity</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};