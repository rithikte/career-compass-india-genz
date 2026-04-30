import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Target, Filter, Award, Building2, ChevronDown, Sparkles, TrendingUp, Users, Shield, BookOpen, Zap, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CareerExplorer } from './CareerExplorer';
const indianStates = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'];
const workflowStages = [{
  stage: '01',
  title: 'Choose Your Stream',
  description: 'Pick Subjects You Enjoy',
  icon: Target,
  color: 'from-blue-500 to-cyan-500'
}, {
  stage: '02',
  title: 'Pick the Core Topics',
  description: 'Pick the Core Topics You\'re Interested In',
  icon: Filter,
  color: 'from-purple-500 to-pink-500'
}, {
  stage: '03',
  title: 'Behind every click',
  description: 'Science calculates the perfect fit',
  icon: Award,
  color: 'from-green-500 to-emerald-500'
}, {
  stage: '04',
  title: 'Get Your 2 Best-Fit',
  description: 'Degrees & Industries',
  icon: Target,
  color: 'from-orange-500 to-red-500'
}, {
  stage: '05',
  title: 'See The Careers',
  description: 'You\'re Made For and the Growth Ahead',
  icon: Award,
  color: 'from-indigo-500 to-purple-500'
}];
export const HomePage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const [showCareerExplorer, setShowCareerExplorer] = useState(false);
  useEffect(() => {
    // Animate stats when component mounts
    const timer = setTimeout(() => {
      setAnimatedStats([{
        value: 247,
        label: 'Colleges',
        sublabel: 'Collaborated',
        gradient: 'from-blue-600 to-cyan-600',
        icon: Shield
      }, {
        value: 156,
        label: 'Institutes',
        sublabel: 'Partnered',
        gradient: 'from-purple-600 to-pink-600',
        icon: Building2
      }, {
        value: 142,
        label: 'Online Institutes',
        sublabel: 'Listed',
        gradient: 'from-green-600 to-emerald-600',
        icon: BookOpen
      }, {
        value: 189,
        label: 'Degrees',
        sublabel: 'Available',
        gradient: 'from-orange-600 to-red-600',
        icon: Award
      }, {
        value: 117,
        label: 'Industries',
        sublabel: 'Covered',
        gradient: 'from-indigo-600 to-purple-600',
        icon: TrendingUp
      }, {
        value: 834,
        label: 'Job Roles',
        sublabel: 'Covered',
        gradient: 'from-teal-600 to-blue-600',
        icon: Users
      }, {
        value: 15678,
        label: 'Students',
        sublabel: 'Guided',
        gradient: 'from-pink-600 to-rose-600',
        icon: Sparkles
      }]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen overflow-hidden">
      {/* Subtle Background Elements - Reduced Visual Noise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Hero Section with Enhanced Vertical Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 relative z-10">
        
        {/* Centered State Selector */}
        <div className="flex justify-center mb-8 sm:mb-12 z-30">
          <div className="relative group">
            <button onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} className="magnetic-container flex items-center gap-2 bg-white/95 backdrop-blur-xl rounded-full shadow-layer-2 border border-border/50 hover:shadow-layer-3 hover:scale-105 transition-all duration-300 px-6 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {selectedState || 'Select State'}
              </span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStateDropdownOpen && <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-layer-3 border border-border/50 max-h-64 overflow-y-auto z-50 animate-spring-up min-w-[200px]">
                <div className="p-2">
                  {indianStates.map(state => <button key={state} onClick={() => {
                setSelectedState(state);
                setIsStateDropdownOpen(false);
              }} className="w-full text-left px-3 py-2 hover:bg-accent/10 text-foreground rounded-lg transition-all duration-200 text-sm font-medium">
                      {state}
                    </button>)}
                </div>
              </div>}
          </div>
        </div>

        {/* Main Hero Content - Swiss Design Typography */}
        <div className="text-center mb-16 sm:mb-24 relative px-4 mt-12 sm:mt-0">
          {/* Minimal Floating Shapes - Only 3 */}
          <div className="absolute -top-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float-gentle blur-sm will-change-transform"></div>
          <div className="absolute top-10 right-1/3 w-16 h-16 bg-accent/10 animate-float-gentle will-change-transform" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-12 h-32 bg-primary/8 animate-float-gentle" style={{
          animationDelay: '1.5s'
        }}></div>
          
          {/* Headline - Mostly Black with ONE Gradient Word */}
          <h1 className="headline-interactive text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight px-4 mb-10 sm:mb-12">
            <span className="animate-spring-up inline-block will-change-transform text-foreground animation-delay-100">
              Careers don't{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer-subtle">
                fail
              </span>
              .
            </span>
            <br />
            <span className="text-foreground animate-spring-up inline-block will-change-transform animation-delay-200">
              Wrong direction does
            </span>
          </h1>
          
          {/* Subtitle - Clear Hierarchy */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold leading-relaxed animate-spring-up will-change-transform animation-delay-500">
              We show clear path from your degree to a real job — built on what companies actually expect
            </p>
          </div>

          {/* Enlarged Trust Badges - More Visual Weight */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 animate-spring-up animation-delay-500 px-4">
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-success to-success/60 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-layer-2 border border-success/30 flex items-center gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Shield className="w-6 h-6 text-success" />
                <span className="font-bold text-base text-foreground">Aligned with NEP 2020</span>
              </div>
            </div>
            <div className="magnetic-container group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-layer-2 border border-primary/30 flex items-center gap-3 hover:shadow-layer-3 transition-all duration-300">
                <Zap className="w-6 h-6 text-primary" />
                <span className="font-bold text-base text-foreground">Skill India Mission</span>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex justify-center animate-scroll-bounce mt-16">
            
          </div>
        </div>

        {/* Degree Truth Section - Swiss Design */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Main Statement */}
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    Every degree has strong careers.
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    Most people are not aware of them.
                  </p>
                </div>
              </div>

              {/* Right Column - The Difference */}
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  The real difference is
                </p>
                
                <div className="space-y-0">
                  {/* Point 1 */}
                  <div className="group border-t border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        01
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How well the degree fits the student
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="group border-t border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        02
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How clearly the career path is understood
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="group border-t border-b border-foreground/10 py-4 sm:py-5">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        03
                      </span>
                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                        How much effort the student puts in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why most students feel confused */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-destructive pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    Why most students feel confused
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    The system gives information, not direction.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  The common gaps
                </p>
                <div className="space-y-0">
                  {[
                    "Too many choices, no clear direction",
                    "What you study doesn't match real jobs",
                    "Projects don't help in interviews",
                  ].map((text, i) => (
                    <div key={i} className={`group border-t ${i === 2 ? "border-b" : ""} border-foreground/10 py-4 sm:py-5`}>
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive/30 group-hover:text-destructive transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What makes this different */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-accent pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    What makes this different
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    Built around real hiring, not generic advice.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  What you get here
                </p>
                <div className="space-y-0">
                  {[
                    "Shows what skills companies actually expect",
                    "Connects your subjects to real careers",
                    "Gives step-by-step path to reach that job",
                  ].map((text, i) => (
                    <div key={i} className={`group border-t ${i === 2 ? "border-b" : ""} border-foreground/10 py-4 sm:py-5`}>
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-accent/30 group-hover:text-accent transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="mt-10 sm:mt-14">
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 sm:p-10 border border-primary/20 shadow-layer-2">
                <p className="text-center text-lg sm:text-2xl md:text-3xl font-bold text-foreground leading-snug italic">
                  "Every career path is built step by step — not guessed"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* This is not for everyone */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-warning pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    This is not for everyone
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    Honest about who this actually helps.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  Who it fits
                </p>
                <div className="space-y-0">
                  {[
                    "If you just want options → this won't help",
                    "If you want shortcuts → this won't help",
                    "If you want a clear career path → this will",
                  ].map((text, i) => (
                    <div key={i} className={`group border-t ${i === 2 ? "border-b" : ""} border-foreground/10 py-4 sm:py-5`}>
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-warning/30 group-hover:text-warning transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll actually get */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:border-r lg:border-foreground/20 lg:pr-12">
                <div className="border-l-4 border-success pl-4 sm:pl-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                    What you'll actually get
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 font-medium">
                    Nothing extra. Nothing confusing.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 sm:mb-8">
                  The deliverables
                </p>
                <div className="space-y-0">
                  {[
                    "A clear step-by-step career path",
                    "Skills that match real job requirements",
                    "Mini & major projects that match real job requirements",
                  ].map((text, i) => (
                    <div key={i} className={`group border-t ${i === 2 ? "border-b" : ""} border-foreground/10 py-4 sm:py-5`}>
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-success/30 group-hover:text-success transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-snug">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How this helps you choose the right career — Glass Pipeline */}
        <div className="mb-16 sm:mb-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-sky-500 font-semibold mb-4">
                The Clear Path
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
                How this helps you choose the right career
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-4 font-medium">
                No confusion. Just one clear path.
              </p>
            </div>

            {/* Glass Pipeline */}
            <div className="relative">
              {/* Soft gradient backdrop */}
              <div className="absolute inset-0 -m-4 sm:-m-8 rounded-[2rem] bg-gradient-to-br from-sky-200/40 via-sky-100/30 to-sky-300/40 blur-2xl pointer-events-none" aria-hidden="true"></div>

              <div className="relative rounded-[1.75rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-layer-2 p-5 sm:p-8 md:p-10">
                {/* Desktop: horizontal pipeline */}
                <div className="hidden md:flex items-stretch justify-between gap-2 lg:gap-3">
                  {["Stream", "Subject", "Career", "Skills", "Job"].map((text, i, arr) => (
                    <div key={i} className="flex items-center flex-1 last:flex-initial">
                      {/* Pill stage */}
                      <div className="group relative flex-1">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-300/40 via-sky-400/40 to-sky-300/40 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" aria-hidden="true"></div>
                        <div className="relative rounded-full bg-white/80 backdrop-blur-md border border-sky-200/70 shadow-layer-1 px-4 lg:px-6 py-5 lg:py-6 flex items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-layer-3 hover:border-sky-400/60">
                          <span className="text-base lg:text-xl font-black text-foreground tracking-tight">
                            {text}
                          </span>
                        </div>
                      </div>

                      {/* Connector */}
                      {i < arr.length - 1 && (
                        <div className="flex items-center justify-center px-1 lg:px-2 shrink-0" aria-hidden="true">
                          <div className="h-px w-4 lg:w-6 bg-gradient-to-r from-primary/40 to-accent/40"></div>
                          <span className="text-primary/60 text-lg lg:text-xl font-light leading-none -mt-0.5">›</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile: vertical pipeline */}
                <div className="md:hidden flex flex-col gap-3">
                  {["Stream", "Subject", "Career", "Skills", "Job"].map((text, i, arr) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="group relative w-full">
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" aria-hidden="true"></div>
                        <div className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-layer-1 px-5 py-4 flex items-center gap-4 transition-all duration-500 hover:border-primary/40">
                          <span className="text-2xl font-black text-primary/40 tabular-nums w-10 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-lg font-black text-foreground tracking-tight">
                              {text}
                            </p>
                          </div>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="h-5 w-px bg-gradient-to-b from-primary/50 to-accent/30 my-1" aria-hidden="true"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Workflows */}
        <div className="mb-16 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-foreground mb-4">
            Built for India's New Education Era
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Start My Degree Journey */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <Card className="relative magnetic-container overflow-hidden hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2 h-full">
                <CardContent className="p-8 my-0 px-[30px]">
                  <div className="text-left mb-6">
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">Start My Degree Journey</h3>
                    <p className="text-base text-muted-foreground mb-2 mx-[40px]">
                      <span className="font-semibold">For:</span> Students after Inter / +2
                    </p>
                    
                  </div>
                  
                  <Button onClick={() => setShowCareerExplorer(true)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                    Start My Degree Journey
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Plan My Career Path */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <Card className="relative magnetic-container overflow-hidden hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2 h-full">
                <CardContent className="p-8">
                  <div className="text-left mb-6">
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2 my-0 mx-[25px]">Plan My Career Path</h3>
                    <p className="text-base text-muted-foreground mb-2 mx-[25px]">
                      <span className="font-semibold">For:</span> Students already in a degree
                    </p>
                    
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                    Plan My Career Path
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Explore Government Opportunities */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
              <Card className="relative magnetic-container overflow-hidden hover:shadow-layer-3 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm shadow-layer-2 h-full">
                <CardContent className="p-8">
                  <div className="text-left mb-6">
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2 mx-[30px]">Govt Opportunities</h3>
                    <p className="text-base text-muted-foreground mb-2">
                      <span className="font-semibold">For:</span> Students looking for Govt jobs after degree
                    </p>
                    
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                    Explore Government Opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16 sm:mb-24 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-cyan-50/30 rounded-3xl"></div>
          
          <div className="relative z-10 text-center mb-12 sm:mb-16 py-12 sm:py-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-border rounded-full px-6 py-2 mb-8 shadow-layer-1">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-foreground">Live Statistics</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight px-4">
              Trusted by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thousands</span>
              <br />
              Across India
            </h2>
            
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 mb-12 sm:mb-16 relative z-10">
            {animatedStats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="magnetic-container text-center group animate-spring-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 lg:p-6 shadow-layer-2 hover:shadow-layer-3 transition-all duration-500 border border-border overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}></div>
                    
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 shadow-layer-1`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value.toLocaleString()}+
                    </div>
                    
                    <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.sublabel}</div>
                  </div>
                </div>;
          })}
          </div>
          
          {/* Trust Indicator */}
          <div className="flex justify-center relative z-10 my-0 px-4 sm:px-0 py-0 mx-auto w-full">
            <div className="magnetic-container bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-layer-2 border border-success/30 flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" />
              <span className="font-bold text-foreground text-xs sm:text-sm md:text-base text-center">100% Secure & Privacy-Protected Platform</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 py-8 relative z-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="magnetic-container group">
            <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl shadow-layer-2 border border-border/50 flex items-center justify-center hover:shadow-layer-3 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
        </div>

        {/* Career Explorer Integration */}
        {showCareerExplorer && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-6xl my-8">
              <CareerExplorer />
              <button onClick={() => setShowCareerExplorer(false)} className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>}

      </div>

    </div>;
};