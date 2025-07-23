import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Building, 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Laptop, 
  BookOpen, 
  Lightbulb,
  Globe,
  UserCheck,
  Code,
  CheckCircle,
  AlertTriangle,
  Home,
  Wifi,
  Utensils,
  Camera,
  Heart,
  Lock
} from 'lucide-react';

const CollegeDetails = () => {
  const facultyData = [
    {
      name: "Dr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300",
      experience: "15 Years",
      subject: "Fluid Mechanics & Thermodynamics",
      qualification: "Ph.D in Mechanical Engineering, IIT Delhi",
      industryExp: "5 Years at ISRO, 3 Years at HAL"
    },
    {
      name: "Prof. Priya Sharma",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300",
      experience: "12 Years",
      subject: "Machine Design & CAD",
      qualification: "M.Tech from IIT Bombay, Ph.D in Design",
      industryExp: "4 Years at Tata Motors, 2 Years at Mahindra"
    },
    {
      name: "Dr. Amit Patel",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=300",
      experience: "18 Years",
      subject: "Aerospace Structures & Materials",
      qualification: "Ph.D in Aerospace Engineering, IISc",
      industryExp: "6 Years at Boeing, 4 Years at Airbus"
    }
  ];

  const placementCompanies = [
    "ISRO", "HAL", "Boeing", "Airbus", "Tata Motors", "Mahindra", "L&T", "BHEL",
    "Siemens", "General Electric", "Rolls Royce", "Pratt & Whitney"
  ];

  const industryMoUs = [
    "Indian Space Research Organisation (ISRO)",
    "Hindustan Aeronautics Limited (HAL)",
    "National Aerospace Laboratories (NAL)",
    "Tata Advanced Systems Limited (TASL)"
  ];

  const modernSubjects = [
    "Computational Fluid Dynamics (CFD)",
    "Finite Element Analysis (FEA)",
    "Additive Manufacturing (3D Printing)",
    "Robotics & Automation",
    "AI in Manufacturing",
    "Sustainable Energy Systems",
    "Smart Materials & Structures",
    "Industry 4.0 Technologies"
  ];

  const industrySoftware = [
    "CATIA V5/V6", "SolidWorks", "AutoCAD", "ANSYS", "MATLAB", "Simulink",
    "ABAQUS", "Pro/ENGINEER", "NX-CAD", "Inventor", "Fusion 360", "Adams"
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          B.Tech Mechanical Engineering
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Complete College Guide for Students & Parents
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-4xl mx-auto">
          <p className="text-yellow-800 font-medium">
            🎯 Certifications will be Auto Updated based on Market Trends
          </p>
          <p className="text-yellow-700 text-sm mt-1">
            We partner with Coursera, Udemy & other platforms to provide latest industry certifications
          </p>
        </div>
      </div>

      {/* Faculty Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            Faculty Profiles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {facultyData.map((faculty, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-center mb-2">{faculty.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Experience:</span> {faculty.experience}</p>
                  <p><span className="font-medium">Subject:</span> {faculty.subject}</p>
                  <p><span className="font-medium">Qualification:</span> {faculty.qualification}</p>
                  <p><span className="font-medium">Industry:</span> {faculty.industryExp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Basic College Information */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">College Code</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">MECH2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">Attendance Required</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">75%</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Faculty Ratio</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">1:25</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold">NAAC Grade</h3>
            </div>
            <p className="text-2xl font-bold text-orange-600">A+</p>
          </CardContent>
        </Card>
      </div>

      {/* Degree Eligibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Degree Eligibility & Career Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">MS Abroad</h3>
              <p className="text-sm text-gray-600">Valid for US, UK, Canada, Australia universities</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">UPSC & Govt Jobs</h3>
              <p className="text-sm text-gray-600">Eligible for IAS, IES, PSU examinations</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Higher Studies</h3>
              <p className="text-sm text-gray-600">M.Tech, MBA, research programs</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Labs & Technology */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Laptop className="h-6 w-6" />
            Labs & Technology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=300" 
                alt="Advanced Lab Equipment" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Advanced Manufacturing Lab</h3>
              <p className="text-sm text-gray-600">CNC machines, 3D printers, laser cutting, robotics</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=300" 
                alt="Computer Lab" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">CAD/CAE Lab</h3>
              <p className="text-sm text-gray-600">Latest software, high-end workstations, simulation tools</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Industry Software Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            Industry Software Access (Licensed Versions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industrySoftware.map((software, index) => (
              <Badge key={index} variant="outline" className="p-2 text-center">
                {software}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modern Subjects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Modern Subjects in Curriculum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {modernSubjects.map((subject, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">{subject}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Placement Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Placement Statistics (Last 3 Years)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600">85%</h3>
              <p className="text-sm text-gray-600">Core Job Placement</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600">₹8.5L</h3>
              <p className="text-sm text-gray-600">Average Package</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-600">₹25L</h3>
              <p className="text-sm text-gray-600">Highest Package</p>
            </div>
          </div>
          
          <h4 className="font-semibold mb-3">Top Recruiting Companies:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {placementCompanies.map((company, index) => (
              <Badge key={index} variant="secondary" className="p-2 text-center">
                {company}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industry Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-6 w-6" />
            Industry Connections & MoUs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Active MoUs:</h4>
              <div className="space-y-2">
                {industryMoUs.map((mou, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{mou}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Industry Visits</h4>
                <p className="text-sm text-gray-600">Monthly visits to aerospace companies, manufacturing units</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-2">Guest Lectures</h4>
                <p className="text-sm text-gray-600">Weekly sessions by industry experts and alumni</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Support & Innovation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Project Support & Innovation Culture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Innovation Support:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Patent filing assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  National tech expo participation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Hackathons & competitions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Research project funding
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Student Activities:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Entrepreneurship cell
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Alumni mentorship program
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Technical clubs & societies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Startup incubation support
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accreditation Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Accreditation & Recognition Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">UGC Recognized</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">AICTE Approved</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">NAAC A+ Grade</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">NBA Accredited</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Valid for UPSC & Govt Jobs</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">International Recognition</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hostel Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            Hostel Facilities Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* General Hostel Image */}
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=300" 
              alt="Hostel Common Area" 
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-5 w-5 text-red-500" />
                  <h4 className="font-semibold">Safety & Security</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ 24/7 Security guards</li>
                  <li>✓ CCTV surveillance</li>
                  <li>✓ Biometric entry system</li>
                  <li>✓ Separate boys/girls blocks</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold">Room Conditions</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ Clean & ventilated rooms</li>
                  <li>✓ Furnished with bed, desk</li>
                  <li>✓ Attached/common washrooms</li>
                  <li>✓ Personal storage lockers</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Utensils className="h-5 w-5 text-green-500" />
                  <h4 className="font-semibold">Mess & Food</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ Veg & Non-veg options</li>
                  <li>✓ Regional food varieties</li>
                  <li>✓ Weekly menu display</li>
                  <li>✓ Festival special meals</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="h-5 w-5 text-purple-500" />
                  <h4 className="font-semibold">Connectivity</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ High-speed Wi-Fi</li>
                  <li>✓ Good mobile network</li>
                  <li>✓ 24/7 internet access</li>
                  <li>✓ Backup connectivity</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  <h4 className="font-semibold">Health & Wellness</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ On-call doctor facility</li>
                  <li>✓ Nearby hospital tie-up</li>
                  <li>✓ Emergency response</li>
                  <li>✓ Mental health support</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold">Recreation</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ Sports facilities</li>
                  <li>✓ Common areas & TV room</li>
                  <li>✓ Weekend activities</li>
                  <li>✓ Student clubs</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Female Students Special Checklist */}
      <Card className="border-pink-200 bg-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-700">
            <Heart className="h-6 w-6" />
            Female Students - Special Safety Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-pink-100 border-l-4 border-pink-500 p-4 mb-6">
            <p className="text-pink-800 font-medium">
              "This hostel is not just a room — it's your daughter's second home. If she feels safe, heard, and free, she'll grow into her best self."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white border border-pink-200 rounded-lg">
                <h4 className="font-semibold text-pink-700 mb-2">Entry Protocols</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Female-only entry to rooms</li>
                  <li>✓ Visitor restrictions enforced</li>
                  <li>✓ Male staff supervised entry</li>
                  <li>✓ Secure access control</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white border border-pink-200 rounded-lg">
                <h4 className="font-semibold text-pink-700 mb-2">Health Facilities</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Sanitary product availability</li>
                  <li>✓ Gynecologist tie-up</li>
                  <li>✓ Period pain support</li>
                  <li>✓ Mental health counseling</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white border border-pink-200 rounded-lg">
                <h4 className="font-semibold text-pink-700 mb-2">Lady Warden Support</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ On-site lady warden</li>
                  <li>✓ 24/7 emergency contact</li>
                  <li>✓ Harassment complaint system</li>
                  <li>✓ Confidential counseling</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white border border-pink-200 rounded-lg">
                <h4 className="font-semibold text-pink-700 mb-2">Privacy & Hygiene</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Multiple daily washroom cleaning</li>
                  <li>✓ Hot water availability</li>
                  <li>✓ Private bathing areas</li>
                  <li>✓ Sanitary disposal systems</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Environment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Study Environment & Infrastructure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=300" 
              alt="Students studying together" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=300" 
              alt="Computer study room" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-semibold">Library</h4>
              <p className="text-sm text-gray-600">24/7 access, digital resources</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Laptop className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold">Computer Labs</h4>
              <p className="text-sm text-gray-600">Latest software, high-speed internet</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-semibold">Study Groups</h4>
              <p className="text-sm text-gray-600">Collaborative learning spaces</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
        <p className="text-xl mb-6">
          Join us in shaping the next generation of aerospace and mechanical engineers
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="px-4 py-2 text-base">
            Industry-Ready Curriculum
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-base">
            100% Placement Support
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-base">
            World-Class Faculty
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;