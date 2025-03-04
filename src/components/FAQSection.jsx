import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is your design process?',
      answer: 'My design process typically involves four key phases: research, ideation, design, and testing...'
    },
    {
      question: 'What tools and software do you use for UI/UX design?',
      answer: 'I use tools like Figma, Adobe XD, and Sketch for UI/UX design...'
    },
    {
      question: 'How do you measure the success of your UX designs?',
      answer: 'I measure success through user feedback, engagement metrics, and conversion rates...'
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-700 pt-4">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;