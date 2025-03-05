import React from "react";
import Star from "../assets/star.svg";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Lead Product Designer",
      company: "Fortknox",
      date: "Mar 2022 - Oct 2023",
    },
    {
      role: "Intern Designer",
      company: "OmniSafe",
      date: "Mar 2022 - Oct 2023",
    },
    { role: "UI Designer", company: "Doradesign", date: "Mar 2022 - Oct 2023" },
    {
      role: "Frontend Developer",
      company: "Opocity Author",
      date: "Mar 2022 - Oct 2023",
    },
  ];

  return (
    <section className="text-white pt-28 bg-dark px-4 sm:px-8 md:px-12 lg:px-32">
      <h2 className="flex text-2xl sm:text-3xl font-semibold font-Syne gap-2 text-white">
        <img src={Star} alt="Star image" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span>Experience</span>
      </h2>
      <div className="mx-auto space-y-4 py-6 sm:py-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-opacity-10 pb-2 pt-4"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-Syne">{exp.role}</h3>
            <div className="flex flex-col text-left sm:text-right">
              <p className="text-base sm:text-lg lg:text-xl text-white font-Syne">{exp.company}</p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-Poppins">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;