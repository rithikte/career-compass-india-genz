import React, { useState } from 'react';
import { Eye, EyeOff, UserPlus, BookOpen, MapPin, Phone, Mail, Lock, GraduationCap, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal"
];

const districts: { [key: string]: string[] } = {
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Mahbubnagar", "Rangareddy", "Medak", "Nalgonda", "Adilabad"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada", "Anantapur", "Kadapa"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davangere", "Bellary", "Bijapur", "Shimoga"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli", "Jalgaon"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul"]
};

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    currentStudies: '',
    interStream: '',
    degreeYear: '',
    state: '',
    district: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'state') {
      setFormData(prev => ({ ...prev, district: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation here
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-green-200/10 to-blue-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <UserPlus className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Join Your Engineering Journey
          </h1>
          
          <p className="text-2xl font-bold text-orange-600 mb-2">
            "The more we know the better we guide"
          </p>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Help us personalize your experience with detailed information about your academic background and goals
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">50K+</div>
              <div className="text-sm text-slate-600">Students Guided</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">500+</div>
              <div className="text-sm text-slate-600">Career Paths</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">28</div>
              <div className="text-sm text-slate-600">States Covered</div>
            </CardContent>
          </Card>
        </div>

        {/* Sign Up Form */}
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-slate-200/50 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-slate-800">Create Your Account</CardTitle>
            <p className="text-slate-600">Fill in your details to get personalized guidance</p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-slate-700 font-medium">
                    <User className="h-4 w-4 text-blue-500" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className="h-12 bg-slate-50/50 border-slate-200"
                    required
                  />
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="Enter your age"
                    className="h-12 bg-slate-50/50 border-slate-200"
                    min="15"
                    max="30"
                    required
                  />
                </div>

                {/* Current Studies */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-slate-700 font-medium">
                    <BookOpen className="h-4 w-4 text-purple-500" />
                    Current Studies
                  </Label>
                  <Select value={formData.currentStudies} onValueChange={(value) => handleInputChange('currentStudies', value)}>
                    <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200">
                      <SelectValue placeholder="Select your current level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="inter">Intermediate</SelectItem>
                      <SelectItem value="degree">Degree/B.Tech</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Inter Stream (conditional) */}
                {formData.currentStudies === 'inter' && (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-slate-700 font-medium">
                      <GraduationCap className="h-4 w-4 text-green-500" />
                      Inter Stream
                    </Label>
                    <Select value={formData.interStream} onValueChange={(value) => handleInputChange('interStream', value)}>
                      <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200">
                        <SelectValue placeholder="Select your stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mpc">MPC (Maths, Physics, Chemistry)</SelectItem>
                        <SelectItem value="bipc">BiPC (Biology, Physics, Chemistry)</SelectItem>
                        <SelectItem value="cec">CEC (Civics, Economics, Commerce)</SelectItem>
                        <SelectItem value="mec">MEC (Maths, Economics, Commerce)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Degree Year (conditional) */}
                {formData.currentStudies === 'degree' && (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-slate-700 font-medium">
                      <GraduationCap className="h-4 w-4 text-blue-500" />
                      Degree Year
                    </Label>
                    <Select value={formData.degreeYear} onValueChange={(value) => handleInputChange('degreeYear', value)}>
                      <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st">1st Year</SelectItem>
                        <SelectItem value="2nd">2nd Year</SelectItem>
                        <SelectItem value="3rd">3rd Year</SelectItem>
                        <SelectItem value="4th">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* State */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    State
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* District */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="h-4 w-4 text-green-500" />
                    District
                  </Label>
                  <Select 
                    value={formData.district} 
                    onValueChange={(value) => handleInputChange('district', value)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200">
                      <SelectValue placeholder={formData.state ? "Select your district" : "Select state first"} />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {formData.state && districts[formData.state]?.map((district) => (
                        <SelectItem key={district} value={district}>{district}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Phone className="h-4 w-4 text-blue-500" />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="Enter your mobile number"
                    className="h-12 bg-slate-50/50 border-slate-200"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Mail className="h-4 w-4 text-purple-500" />
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="h-12 bg-slate-50/50 border-slate-200"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Lock className="h-4 w-4 text-orange-500" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Create a password"
                      className="h-12 bg-slate-50/50 border-slate-200 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Lock className="h-4 w-4 text-green-500" />
                    Re-enter Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm your password"
                      className="h-12 bg-slate-50/50 border-slate-200 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Create Account & Start Journey
                </Button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p className="text-slate-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="text-blue-600 hover:text-blue-700 font-medium underline-offset-4 hover:underline"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}