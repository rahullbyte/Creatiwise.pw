import React from "react";
import Star from "../assets/star.svg";
import Dot from "../assets/dot.svg";

const ExpertiseSection = () => {
  const offers = [
    {
      role: "Branding",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      role: "UI Design",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      role: "UX Design",
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
    },
    {
      role: "Development",
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    },
  ];

  return (
    <section className="bg-dark text-white py-20 sm:py-28 mt-28 px-4 sm:px-12 md:px-16 lg:px-32">
      <h2 className=" flex text-3xl font-semibold font-Syne text-center gap-2">
        <img src={Star} alt="Star image" />
        Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-full mx-auto py-10">
        {offers.map((offer, index) => (
          <div key={index} className=" flex flex-wrap py-3">
            <div className=" flex gap-2 items-center">
              <img src={Dot} alt="Dot image" className=" w-2 h-2" />
              <h1 className=" font-Syne text-2xl">{offer.role}</h1>
            </div>
            <div className=" py-4">
              <h3 className=" font-Poppins">{offer.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
