import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, MapPin, Users, Shield, Target, Zap, Heart, Star, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const faqs = [
    {
      id: 'q1',
      question: 'What is Undergraduate Maps?',
      shortAnswer: 'India\'s first career mapping platform that helps students choose the right degree and see the real job outcomes behind it.',
      detailedAnswer: `Undergraduate Maps is like "Google Maps for education and careers". Students and parents can clearly see:
• Industries and careers linked to each degree.
• Salaries, growth, certifications, and AI impact.
• College options with verified placement outcomes.

We make every decision transparent, structured, and simple to understand — so no student walks into the future blindly.`,
      icon: MapPin,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50/80 to-cyan-50/80'
    },
    {
      id: 'q2',
      question: 'What problem are we solving?',
      shortAnswer: 'Students choose degrees without knowing the outcomes → we bring clarity.',
      detailedAnswer: `Every year, millions of students in India pick degrees based on pressure, guesswork, or trends. The result: confusion, unemployment, or regret.

Undergraduate Maps solves this by showing a clear roadmap:
• Subject interest → degree → industry → job role → salary & certifications.
• Data backed by government, industry, and recruiter reports.
• Explained with visuals that students and parents can easily understand.

This way, every choice is based on facts, not chance.`,
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50/80 to-pink-50/80'
    },
    {
      id: 'q3',
      question: 'Why did we create Undergraduate Maps?',
      shortAnswer: 'Because students deserve clarity, and parents deserve confidence.',
      detailedAnswer: `We studied how students in India make degree choices. Most decisions came from incomplete advice or random suggestions. That's why we built Undergraduate Maps:
• To give students a clear, verified path to careers.
• To give parents peace of mind about their child's future.
• To give India a skilled generation ready for tomorrow.`,
      icon: Heart,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50/80 to-emerald-50/80'
    },
    {
      id: 'q4',
      question: 'How is it different from other career platforms?',
      shortAnswer: 'We go deeper and show the real outcomes behind every degree.',
      detailedAnswer: `Unlike platforms that stop at counseling or tests, Undergraduate Maps is:
• Structured → Degree → Industry → Job Role → Salary → Certification → College.
• Verified → Data backed by trusted reports, not assumptions.
• Visual → Infographics, salary sliders, recruiter logos, radar charts.
• Inclusive → Designed for both Tier-1 metros and Tier-3 towns.

In short: we don't just guide choices — we map the full journey from classroom to career.`,
      icon: Star,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50/80 to-red-50/80'
    },
    {
      id: 'q5',
      question: 'What impact will this create?',
      shortAnswer: 'Clarity for students, confidence for parents, and progress for India.',
      detailedAnswer: `• For students → No more "wrong degree regret"; every path is mapped to real jobs.
• For parents → Confidence that the investment in education leads to secure futures.
• For India → A generation of skilled, industry-ready youth powering growth.
• For colleges → Stronger brand, better-fit students, and transparent placements.`,
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50/80 to-purple-50/80'
    }
  ];

  const stats = [
    { value: '1247', label: 'Colleges', sublabel: 'Collaborated', icon: Shield, gradient: 'from-blue-600 to-cyan-600' },
    { value: '856', label: 'Institutes', sublabel: 'Partnered', icon: Globe, gradient: 'from-purple-600 to-pink-600' },
    { value: '15.6K', label: 'Students', sublabel: 'Guided', icon: Users, gradient: 'from-green-600 to-emerald-600' },
    { value: '342', label: 'Degrees', sublabel: 'Mapped', icon: Target, gradient: 'from-orange-600 to-red-600' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-background via-primary/5 to-background min-h-screen overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float delay-1000 blur-xl"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-full animate-float delay-500 blur-xl"></div>
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto text-center">
        {/* Trust Badges */}
        <div className="absolute top-8 left-8 z-20 animate-float">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-elegant border border-primary/20 flex items-center gap-2">
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold text-foreground">Trusted Platform</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute top-8 right-8 z-20 animate-float delay-1000">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-elegant border border-primary/20 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">AI Powered</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Header */}
        <div className="relative mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-elegant border border-primary/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Undergraduate Maps
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in delay-300">
            <span className="relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent animate-gradient-x">
                Revolutionizing
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary-light/10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            </span>
            <br />
            <span className="relative inline-block">Career Guidance</span>
          </h1>
          
          <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            India's first AI-powered platform that maps every degree to real career outcomes, 
            giving students <span className="text-primary font-semibold">clarity</span> and parents <span className="text-primary font-semibold">confidence</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in delay-700">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 border border-primary/10 group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Q&A Section */}
      <section className="relative pb-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Know
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <Card key={faq.id} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 border border-primary/10 bg-white/90 backdrop-blur-xl animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${faq.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative pb-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${faq.gradient} shadow-soft`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${faq.gradient} text-white text-sm font-bold`}>
                          {index + 1}
                        </span>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <div className={`inline-block bg-gradient-to-r ${faq.gradient} bg-clip-text text-transparent font-semibold text-lg leading-relaxed`}>
                        {faq.shortAnswer}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative pt-0 pl-22">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line font-medium">
                    {faq.detailedAnswer}
                  </div>
                  
                  {/* Decorative Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Final Promise Section */}
        <div className="mt-32 relative">
          <div className="bg-gradient-elegant border border-primary/20 rounded-3xl p-16 shadow-elegant backdrop-blur-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">Our Promise to India</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                A Future Built on <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clarity</span>
              </h2>
              
              <blockquote className="text-2xl font-semibold text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                "Every student deserves a clear future — and every parent deserves peace of mind. 
                That's our promise to the new India."
              </blockquote>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-foreground">Transparent Data</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-foreground">AI-Powered Insights</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-foreground">Verified Outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border border-primary/10 group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Transparent</h3>
              <p className="text-muted-foreground font-medium">Every data point is verified and backed by trusted sources</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border border-primary/10 group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Intelligent</h3>
              <p className="text-muted-foreground font-medium">AI-powered matching for the most accurate career paths</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border border-primary/10 group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Inclusive</h3>
              <p className="text-muted-foreground font-medium">Built for students from every background across India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;