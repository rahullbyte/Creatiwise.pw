import React, { useState } from "react";
import Star from "../assets/star.svg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UI/UX design?",
      answer:
        "I use tools like Figma, Adobe XD, and Sketch for UI/UX design...",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure success through user feedback, engagement metrics, and conversion rates...",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-dark mt-16 text-white py-12 px-4 sm:px-8 md:px-12 lg:px-32">
      <h2 className="flex items-center text-2xl md:text-3xl font-semibold font-Syne gap-2 text-white">
        <img src={Star} alt="Star icon" className="w-5 md:w-6" />
        <span>Frequently Asked Questions</span>
      </h2>
      <div className="space-y-4 mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-4 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl font-semibold font-Syne flex justify-between w-full text-left"
            >
              {faq.question}
             
            </button>
            <p
              className={`text-sm font-Poppins transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
