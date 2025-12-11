import React from 'react';
import { MapPin, Target, Heart, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-primary/10 rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-white border border-primary/20 rounded-full px-6 py-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-semibold text-base text-slate-900">About Undergraduate Maps</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Revolutionizing Career Guidance</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              India's first AI-powered platform that maps every degree to real career outcomes, 
              giving students clarity and parents confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Q&A Section */}
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const Icon = faq.icon;
          return (
            <Card key={faq.id} className="border-2 border-primary/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Question {index + 1}
                  </span>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-slate-900">
                  {faq.question}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-700 pt-2">
                  {faq.shortAnswer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-base text-gray-600 leading-relaxed whitespace-pre-line bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  {faq.detailedAnswer}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Final Promise Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center space-y-6">
          <TrendingUp className="w-12 h-12 mx-auto" />
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-2">
            Our Promise to India
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            A Future Built on Clarity
          </h2>
          <blockquote className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
            "Every student deserves a clear future — and every parent deserves peace of mind. 
            That's our promise to the new India."
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-purple-200">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-purple-200">Career Paths Mapped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-purple-200">Data-Driven Insights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;