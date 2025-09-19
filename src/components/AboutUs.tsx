import React from 'react';
import { MapPin, Target, Heart, Star, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const faqs = [
    {
      id: 'q1',
      question: 'What is Undergraduate Maps?',
      shortAnswer: 'India\'s first career mapping platform that helps students choose the right degree and see the real job outcomes behind it.',
      detailedAnswer: `Undergraduate Maps is like "Google Maps for education and careers". Students and parents can clearly see:\n• Industries and careers linked to each degree.\n• Salaries, growth, certifications, and AI impact.\n• College options with verified placement outcomes.\n\nWe make every decision transparent, structured, and simple to understand — so no student walks into the future blindly.`,
      icon: MapPin
    },
    {
      id: 'q2',
      question: 'What problem are we solving?',
      shortAnswer: 'Students choose degrees without knowing the outcomes → we bring clarity.',
      detailedAnswer: `Every year, millions of students in India pick degrees based on pressure, guesswork, or trends. The result: confusion, unemployment, or regret.\n\nUndergraduate Maps solves this by showing a clear roadmap:\n• Subject interest → degree → industry → job role → salary & certifications.\n• Data backed by government, industry, and recruiter reports.\n• Explained with visuals that students and parents can easily understand.\n\nThis way, every choice is based on facts, not chance.`,
      icon: Target
    },
    {
      id: 'q3',
      question: 'Why did we create Undergraduate Maps?',
      shortAnswer: 'Because students deserve clarity, and parents deserve confidence.',
      detailedAnswer: `We studied how students in India make degree choices. Most decisions came from incomplete advice or random suggestions. That's why we built Undergraduate Maps:\n• To give students a clear, verified path to careers.\n• To give parents peace of mind about their child's future.\n• To give India a skilled generation ready for tomorrow.`,
      icon: Heart
    },
    {
      id: 'q4',
      question: 'How is it different from other career platforms?',
      shortAnswer: 'We go deeper and show the real outcomes behind every degree.',
      detailedAnswer: `Unlike platforms that stop at counseling or tests, Undergraduate Maps is:\n• Structured → Degree → Industry → Job Role → Salary → Certification → College.\n• Verified → Data backed by trusted reports, not assumptions.\n• Visual → Infographics, salary sliders, recruiter logos, radar charts.\n• Inclusive → Designed for both Tier-1 metros and Tier-3 towns.\n\nIn short: we don't just guide choices — we map the full journey from classroom to career.`,
      icon: Star
    },
    {
      id: 'q5',
      question: 'What impact will this create?',
      shortAnswer: 'Clarity for students, confidence for parents, and progress for India.',
      detailedAnswer: `• For students → No more "wrong degree regret"; every path is mapped to real jobs.\n• For parents → Confidence that the investment in education leads to secure futures.\n• For India → A generation of skilled, industry-ready youth powering growth.\n• For colleges → Stronger brand, better-fit students, and transparent placements.`,
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-background">
      {/* Swiss Hero Section */}
      <section className="swiss-section">
        <div className="swiss-container">
          <div className="text-center max-w-4xl mx-auto space-y-swiss-2xl">
            <div className="space-y-swiss-lg">
              <div className="text-swiss-caption text-primary">
                About Undergraduate Maps
              </div>
              
              <h1 className="text-swiss-display text-foreground leading-tight">
                Revolutionizing
                <span className="block text-primary">Career Guidance</span>
              </h1>
              
              <p className="text-swiss-subtitle text-muted-foreground max-w-2xl mx-auto">
                India's first AI-powered platform that maps every degree to real career outcomes, 
                giving students clarity and parents confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Divider */}
      <div className="swiss-divider"></div>

      {/* Q&A Section - Swiss Layout */}
      <section className="swiss-section">
        <div className="swiss-container max-w-6xl">
          <div className="space-y-swiss-3xl">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <article key={faq.id} className="group">
                  <div className="swiss-grid grid-cols-1 lg:grid-cols-12 gap-swiss-xl items-start">
                    {/* Icon & Number */}
                    <div className="lg:col-span-2 flex items-start gap-swiss-md">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-swiss-caption text-muted-foreground pt-3">
                        Q{index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-10 space-y-swiss-lg">
                      <div className="space-y-swiss-md">
                        <h2 className="text-swiss-title text-foreground leading-tight">
                          {faq.question}
                        </h2>
                        
                        <div className="text-swiss-subtitle text-foreground font-medium">
                          {faq.shortAnswer}
                        </div>
                      </div>
                      
                      <div className="text-swiss-body text-muted-foreground leading-relaxed whitespace-pre-line pl-swiss-lg border-l border-border">
                        {faq.detailedAnswer}
                      </div>
                    </div>
                  </div>
                  
                  {index < faqs.length - 1 && (
                    <div className="swiss-divider"></div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Promise Section - Swiss Minimal */}
      <section className="swiss-section bg-muted/30">
        <div className="swiss-container">
          <div className="text-center max-w-4xl mx-auto space-y-swiss-2xl">
            <div className="space-y-swiss-lg">
              <div className="text-swiss-caption text-primary">
                Our Promise to India
              </div>
              
              <h2 className="text-swiss-title text-foreground">
                A Future Built on Clarity
              </h2>
              
              <blockquote className="text-swiss-subtitle font-light text-foreground leading-relaxed max-w-3xl mx-auto border-l-2 border-primary pl-swiss-lg">
                "Every student deserves a clear future — and every parent deserves peace of mind. 
                That's our promise to the new India."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;