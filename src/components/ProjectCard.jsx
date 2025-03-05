import React from "react";

const ProjectCard = ({ imageSrc, title, description, tags, buttonUrl }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray bg-opacity-70 p-6 md:p-8 rounded-3xl shadow space-y-6 lg:space-y-0 lg:space-x-6">
      <img
        src={imageSrc}
        alt={title}
        className="w-full lg:w-[572px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[429px] object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-between px-4 md:px-8 w-full">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-Syne py-3 md:py-4">{title}</h3>
          <p className="text-sm sm:text-base font-Poppins">{description}</p>
          <div className="flex flex-wrap gap-2 pt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="font-Syne text-white px-4 py-1 rounded-full text-xs sm:text-sm border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={buttonUrl}
          className="bg-white text-black px-6 py-3 md:py-4 block text-center text-sm md:text-base font-Syne rounded-full w-full sm:w-fit mt-4"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;