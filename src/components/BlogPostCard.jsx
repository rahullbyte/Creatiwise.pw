import React from "react";

const BlogPostCard = ({ imageSrc, title, date, tags }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 lg:gap-10">
      <img
        src={imageSrc}
        alt={title}
        className="w-full md:w-[286px] md:h-[214px] object-cover mb-4 font-Poppins rounded-3xl"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <p className="text-sm md:text-base lg:text-lg mb-1 md:mb-2">{date}</p>
          <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mb-2 md:mb-4 font-Syne">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-white px-4 py-1 rounded-full text-xs md:text-sm font-questrial border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a className="bg-white text-black px-4 md:px-6 py-2 rounded-full text-center text-sm font-Syne whitespace-nowrap">
          Read
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
