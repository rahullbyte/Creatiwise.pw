import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        <span className="text-yellow-500">★</span> What They Say
      </h2>
      <Testimonial
        quote="Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers."
        author="Floyd Miles"
        companyLogo="/floyd-logo.jpg"
      />
    </section>
  );
};

export default TestimonialsSection;