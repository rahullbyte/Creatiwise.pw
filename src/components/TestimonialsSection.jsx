import React, { useState } from "react";
import Star from "../assets/star.svg";
import user from "../assets/user.svg";
import { ArrowRight, ArrowLeft } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      user: "Floyed Miles",
      company: "eBay",
      description:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      user: "Floyed Baby",
      company: "Google",
      description:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      user: "Miles Floyed",
      company: "Facebook",
      description:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next & Previous
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="bg-dark text-white pt-20 px-4 sm:px-8 md:px-12 lg:px-32">
      <h2 className="flex items-center text-2xl md:text-3xl font-semibold font-Syne gap-2 text-white">
        <img src={Star} alt="Star icon" className="w-5 md:w-6" />
        <span>What they say</span>
      </h2>
      <div className="py-6 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <img src={user} alt={`${testimonials[currentIndex].user}'s profile`} className="w-14 h-14" />
            <div className="flex flex-col">
              <h1 className="font-Syne text-lg md:text-xl">{testimonials[currentIndex].user}</h1>
              <h2 className="font-Poppins text-sm md:text-base text-gray-400">
                {testimonials[currentIndex].company}
              </h2>
            </div>
          </div>
          <div className="relative font-Syne text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug max-w-full md:max-w-2xl lg:max-w-3xl">
            {testimonials[currentIndex].description}
            <span className="absolute -top-1 left-0 text-[200px] text-gray-500 opacity-10">&ldquo;</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
        <button onClick={handlePrev} className="p-2 bg-white rounded-full text-black shadow-md hover:bg-gray-200">
          <ArrowLeft />
        </button>
        <button onClick={handleNext} className="p-2 bg-white rounded-full text-black shadow-md hover:bg-gray-200">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;