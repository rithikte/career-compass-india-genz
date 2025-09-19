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
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground font-medium mb-8">
            About Undergraduate Maps
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-[1.1] tracking-tight">
            Revolutionizing Career Guidance
          </h1>
          
          <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">
            India's first AI-powered platform that maps every degree to real career outcomes, 
            giving students clarity and parents confidence.
          </p>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="space-y-20">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <article key={faq.id} className="group">
                <div className="flex items-start gap-8 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        Q{index + 1}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
                        {faq.question}
                      </h2>
                    </div>
                    
                    <div className="text-xl text-foreground font-medium mb-6 leading-relaxed">
                      {faq.shortAnswer}
                    </div>
                  </div>
                </div>
                
                <div className="ml-20 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {faq.detailedAnswer}
                </div>
                
                {index < faqs.length - 1 && (
                  <div className="mt-20 h-px bg-border"></div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Final Promise Section */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="text-center py-20 border-t border-border">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground font-medium mb-8">
            Our Promise to India
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 leading-tight">
            A Future Built on Clarity
          </h2>
          
          <blockquote className="text-2xl font-light text-foreground leading-relaxed max-w-3xl mx-auto">
            "Every student deserves a clear future — and every parent deserves peace of mind. 
            That's our promise to the new India."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;