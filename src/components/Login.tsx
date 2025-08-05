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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-accent-light/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary-light/15 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-elegant"></div>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Infographics */}
        <div className="hidden lg:block space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent animate-gradient-x">
              Good To See You
            </h1>
            <p className="text-xl text-muted-foreground/80 font-medium">
              Welcome back to your engineering journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 hover:border-primary/40 shadow-soft hover:shadow-elegant transition-all duration-500 hover-scale hover-glow">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-glow">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary-light/30 rounded-3xl blur-3xl animate-pulse-elegant"></div>
            <Card className="relative p-8 bg-gradient-to-br from-card/90 via-card to-primary/5 border-primary/30 backdrop-blur-sm shadow-elegant">
              <div className="flex items-center space-x-6">
                <div className="p-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow animate-glow">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Continue Your Journey</h3>
                  <p className="text-muted-foreground font-medium">Pick up where you left off and achieve your goals</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto animate-scale-in">
          <Card className="shadow-elegant border-primary/20 bg-gradient-to-br from-card/95 via-card to-primary/5 backdrop-blur-sm">
            <CardHeader className="text-center space-y-6 pb-8">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">Welcome Back</CardTitle>
              <CardDescription className="text-lg font-medium text-muted-foreground/80">
                Sign in to continue your learning journey
              </CardDescription>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email or Mobile */}
                <div className="space-y-3">
                  <Label htmlFor="emailOrMobile" className="flex items-center space-x-2 text-sm font-semibold text-primary">
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
                    className="h-12 border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-3">
                  <Label htmlFor="password" className="flex items-center space-x-2 text-sm font-semibold text-primary">
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
                      className="h-12 pr-12 border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 mt-8 bg-gradient-to-r from-primary via-accent to-primary-light hover:from-primary-dark hover:to-accent shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] font-semibold"
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
                    <button type="button" className="text-primary hover:text-accent transition-colors font-medium hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => navigate('/signup')}
                      className="text-primary hover:text-accent transition-colors font-semibold hover:underline"
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
              <Card key={index} className="text-center p-4 bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
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