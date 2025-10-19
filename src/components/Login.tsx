import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Phone, Lock, ArrowRight, UserCheck, Zap, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.emailOrMobile || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Welcome Back!",
        description: "Login successful. Redirecting to your dashboard.",
      });
      navigate('/home');
      setIsLoading(false);
    }, 1500);
  };

  const stats = [
    { icon: UserCheck, label: "Active Users", value: "50K+" },
    { icon: Zap, label: "Success Rate", value: "98%" },
    { icon: Shield, label: "Security", value: "100%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center p-4 relative overflow-hidden">
      <Seo title="Login — Undergraduate Maps" description="Sign in to explore career outcomes and pick the right degree for your future." />
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Infographics */}
        <div className="hidden lg:block space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Good To See You
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Welcome back to your engineering journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <Card className="relative p-8 bg-white border-slate-200 shadow-lg">
              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                  <ArrowRight className="h-7 w-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Continue Your Journey</h3>
                  <p className="text-gray-600 font-medium">Pick up where you left off and achieve your goals</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto animate-scale-in">
          <Card className="shadow-lg border-slate-200 bg-white">
            <CardHeader className="text-center space-y-6 pb-8">
              <CardTitle className="text-4xl font-bold text-slate-900">Welcome Back</CardTitle>
              <CardDescription className="text-lg font-medium text-gray-600">
                Sign in to continue your learning journey
              </CardDescription>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email or Mobile */}
                <div className="space-y-3">
                  <Label htmlFor="emailOrMobile" className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                    <Mail className="h-4 w-4 text-indigo-600" />
                    <span>Email or Mobile Number</span>
                  </Label>
                  <Input
                    id="emailOrMobile"
                    name="emailOrMobile"
                    type="text"
                    placeholder="Enter your email or mobile number"
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    className="h-12 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-3">
                  <Label htmlFor="password" className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                    <Lock className="h-4 w-4 text-indigo-600" />
                    <span>Password</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-12 pr-12 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors p-1 rounded-md hover:bg-indigo-50"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <span>Login</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>

                {/* Additional Links */}
                <div className="space-y-6 text-center pt-4">
                  <div className="text-sm">
                    <button type="button" className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => navigate('/signup')}
                      className="text-indigo-600 hover:text-indigo-700 transition-colors font-semibold hover:underline"
                    >
                      Sign Up Here
                    </button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Mobile Stats */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50">
                    <stat.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;