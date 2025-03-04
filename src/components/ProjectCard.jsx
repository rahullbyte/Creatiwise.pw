import React from "react";

const ProjectCard = ({ imageSrc, title, description, tags, buttonUrl }) => {
  return (
    <div className="flex bg-gray bg-opacity-70 p-8 rounded-3xl shadow ">
      <img
        src={imageSrc}
        alt={title}
        className=" w-[572px] h-[429px] object-cover rounded-2xl"
      />
      <div className=" flex flex-col justify-between px-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <div className="flex space-x-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={buttonUrl}
          className="bg-white text-black px-6 py-4 block text-center text-sm font-Syne rounded-full w-fit"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
