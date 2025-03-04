import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorksSection from './components/WorksSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <WorksSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;