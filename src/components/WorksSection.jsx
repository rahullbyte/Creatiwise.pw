import React from "react";
import ProjectCard from "./ProjectCard";
import Star from "../assets/star.svg";

const WorksSection = () => {
  const projects = [
    {
      imageSrc: "/Images/envelopeFirst.png",
      title: "Analysis Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["FIGMA", "UX"],
    },
    {
      imageSrc: "/Images/application.png",
      title: "Fortknox Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["MOBILE", "WEB"],
    },
    {
      imageSrc: "/Images/envelope.png",
      title: "Zenocide Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["APP", "WEB"],
    },
  ];

  return (
    <section className="bg-dark px-4 sm:px-12 md:px-16 lg:px-32 -mt-16">
      <div className=" flex justify-between items-center py-3 sm:pb-4 md:pb-6 lg:pb-8">
        <h2 className="flex text-3xl font-semibold font-Syne text-center gap-2 text-white">
          <img src={Star} alt="Star image" />
          <h1>Works</h1>
        </h2>
        <h1
          href="https://rahulbyte.dev"
          className="block text-white hover:text-gray-300 underline"
        >
          view all
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-rows-1 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-full mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
