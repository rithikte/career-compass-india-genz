import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

We make every decision transparent, structured, and simple to understand — so no student walks into the future blindly.`
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

This way, every choice is based on facts, not chance.`
    },
    {
      id: 'q3',
      question: 'Why did we create Undergraduate Maps?',
      shortAnswer: 'Because students deserve clarity, and parents deserve confidence.',
      detailedAnswer: `We studied how students in India make degree choices. Most decisions came from incomplete advice or random suggestions. That's why we built Undergraduate Maps:
• To give students a clear, verified path to careers.
• To give parents peace of mind about their child's future.
• To give India a skilled generation ready for tomorrow.`
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

In short: we don't just guide choices — we map the full journey from classroom to career.`
    },
    {
      id: 'q5',
      question: 'What impact will this create?',
      shortAnswer: 'Clarity for students, confidence for parents, and progress for India.',
      detailedAnswer: `• For students → No more "wrong degree regret"; every path is mapped to real jobs.
• For parents → Confidence that the investment in education leads to secure futures.
• For India → A generation of skilled, industry-ready youth powering growth.
• For colleges → Stronger brand, better-fit students, and transparent placements.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-light tracking-tight text-foreground mb-8">
          About Us
        </h1>
        <div className="w-24 h-px bg-primary mx-auto mb-12"></div>
        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          Mapping the future of Indian education, one student at a time.
        </p>
      </section>

      {/* Q&A Section */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid gap-16">
          {faqs.map((faq, index) => (
            <Card key={faq.id} className="border-none shadow-none bg-transparent">
              <CardHeader className="pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-lg font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-medium text-foreground mb-4">
                      {faq.question}
                    </CardTitle>
                    <p className="text-lg text-primary font-medium leading-relaxed">
                      {faq.shortAnswer}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pl-18 pt-0">
                <div className="prose prose-lg max-w-none">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.detailedAnswer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Promise Section */}
        <div className="mt-24 text-center">
          <div className="bg-primary/5 rounded-2xl p-12 border border-primary/10">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              Our Promise
            </h2>
            <blockquote className="text-xl text-primary font-medium leading-relaxed max-w-3xl mx-auto">
              "Every student deserves a clear future — and every parent deserves peace of mind. 
              That's our promise to the new India."
            </blockquote>
          </div>
        </div>

        {/* Swiss Design Elements */}
        <div className="mt-24 grid grid-cols-3 gap-px bg-border">
          <div className="bg-background p-8 text-center">
            <div className="text-3xl font-light text-primary mb-2">Clear</div>
            <div className="text-sm text-muted-foreground">Transparency</div>
          </div>
          <div className="bg-background p-8 text-center">
            <div className="text-3xl font-light text-primary mb-2">Verified</div>
            <div className="text-sm text-muted-foreground">Data-Driven</div>
          </div>
          <div className="bg-background p-8 text-center">
            <div className="text-3xl font-light text-primary mb-2">Simple</div>
            <div className="text-sm text-muted-foreground">User-Focused</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;