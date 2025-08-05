import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Infographics */}
        <div className="hidden lg:block space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Good To See You
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome back to your engineering journey
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300 hover-scale">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
            <Card className="relative p-8 border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Continue Your Journey</h3>
                  <p className="text-muted-foreground">Pick up where you left off</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto animate-scale-in">
          <Card className="shadow-2xl border-primary/10">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-lg">
                Sign in to continue your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email or Mobile */}
                <div className="space-y-2">
                  <Label htmlFor="emailOrMobile" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email or Mobile Number</span>
                  </Label>
                  <Input
                    id="emailOrMobile"
                    name="emailOrMobile"
                    type="text"
                    placeholder="Enter your email or mobile number"
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    className="transition-all duration-300 focus:scale-[1.02]"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
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
                      className="pr-10 transition-all duration-300 focus:scale-[1.02]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Login</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>

                {/* Additional Links */}
                <div className="space-y-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    <button type="button" className="text-primary hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => navigate('/signup')}
                      className="text-primary hover:underline font-medium"
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
              <Card key={index} className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <div className="text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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