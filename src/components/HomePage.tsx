import React, { useState } from 'react';
import { Target, TrendingUp, Users, MapPin, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { 
      icon: Target, 
      number: "2.8M", 
      label: "Engineering Graduates/Year",
      description: "Total engineering graduates in India annually"
    },
    { 
      icon: TrendingUp, 
      number: "7.2%", 
      label: "Job Market Growth",
      description: "Expected growth in engineering jobs by 2030"
    },
    { 
      icon: Users, 
      number: "85%", 
      label: "Placement Success",
      description: "Average placement rate in top institutions"
    },
    { 
      icon: MapPin, 
      number: "450+", 
      label: "Career Paths",
      description: "Different specialization tracks available"
    }
  ];

  return (
    <div className="bg-background">
      {/* Swiss Hero Section */}
      <section className="swiss-section">
        <div className="swiss-container">
          <div className="grid lg:grid-cols-2 gap-swiss-3xl items-center min-h-[70vh]">
            {/* Hero Content */}
            <div className="space-y-swiss-xl">
              <div className="space-y-swiss-md">
                <div className="text-swiss-caption text-primary">
                  Undergraduate Maps
                </div>
                <h1 className="text-swiss-display text-foreground leading-none">
                  Pick the Right
                  <span className="block text-primary">Degree</span>
                  <span className="block text-foreground font-light">with Clarity</span>
                </h1>
                <p className="text-swiss-subtitle text-muted-foreground max-w-lg">
                  India's first career mapping platform. See real job outcomes, 
                  salaries, and career paths before choosing your degree.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-swiss-md">
                <button className="swiss-button-primary group">
                  Explore Degrees
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="swiss-button">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual - Swiss Grid */}
            <div className="relative">
              <div className="swiss-grid grid-cols-2 gap-swiss-lg">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`p-swiss-lg border border-border bg-card swiss-hover cursor-pointer ${
                        hoveredStat === index ? 'border-primary' : ''
                      }`}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <div className="space-y-swiss-sm">
                        <Icon className="w-6 h-6 text-primary" />
                        <div className="text-2xl font-bold text-foreground">
                          {stat.number}
                        </div>
                        <div className="text-swiss-caption text-muted-foreground">
                          {stat.label}
                        </div>
                        {hoveredStat === index && (
                          <div className="text-swiss-body text-muted-foreground pt-swiss-xs border-t border-border animate-swiss-fade">
                            {stat.description}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Divider */}
      <div className="swiss-divider-accent"></div>

      {/* Problem Statement - Swiss Layout */}
      <section className="swiss-section bg-muted/30">
        <div className="swiss-container">
          <div className="grid lg:grid-cols-3 gap-swiss-2xl">
            <div className="lg:col-span-1">
              <h2 className="text-swiss-title text-foreground mb-swiss-lg">
                The Problem
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-swiss-lg">
              <div className="text-swiss-subtitle text-foreground leading-tight">
                Every year, 2.8 million engineering students graduate without clear 
                knowledge of career outcomes.
              </div>
              <div className="swiss-grid grid-cols-1 md:grid-cols-2 gap-swiss-lg">
                <div className="p-swiss-lg border-l-2 border-primary">
                  <div className="text-2xl font-bold text-foreground mb-swiss-sm">68%</div>
                  <div className="text-swiss-body text-muted-foreground">
                    Students regret their degree choice within 2 years
                  </div>
                </div>
                <div className="p-swiss-lg border-l-2 border-primary">
                  <div className="text-2xl font-bold text-foreground mb-swiss-sm">42%</div>
                  <div className="text-swiss-body text-muted-foreground">
                    Graduates work in fields unrelated to their degree
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Swiss Minimal */}
      <section className="swiss-section">
        <div className="swiss-container">
          <div className="text-center max-w-4xl mx-auto space-y-swiss-2xl">
            <div className="space-y-swiss-lg">
              <h2 className="text-swiss-title text-foreground">
                Our Solution
              </h2>
              <p className="text-swiss-subtitle text-muted-foreground">
                Clear career mapping from degree to dream job
              </p>
            </div>
            
            <div className="swiss-grid grid-cols-1 md:grid-cols-3 gap-swiss-lg">
              {[
                {
                  step: "01",
                  title: "Choose Degree",
                  description: "Browse degrees with real data"
                },
                {
                  step: "02", 
                  title: "See Outcomes",
                  description: "Salaries, jobs, growth paths"
                },
                {
                  step: "03",
                  title: "Find Colleges",
                  description: "Best institutions for your path"
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-swiss-md">
                  <div className="text-4xl font-light text-primary">{item.step}</div>
                  <div className="text-swiss-caption text-foreground">{item.title}</div>
                  <div className="text-swiss-body text-muted-foreground">{item.description}</div>
                  {index < 2 && (
                    <ChevronRight className="hidden md:block w-6 h-6 text-border mx-auto mt-swiss-lg" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { HomePage };