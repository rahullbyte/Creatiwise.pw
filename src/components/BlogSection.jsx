import React from "react";
import BlogPostCard from "./BlogPostCard";
import Star from "../assets/star.svg";

const BlogSection = () => {
  const blogPosts = [
    {
      imageSrc: "/Images/envelopeFirst.png",
      title: "How UX works in web",
      date: "Nov 9, 2023",
      tags: ["UI", "UX"],
    },
    {
      imageSrc: "/Images/application.png",
      title: "Case study - Analysis Application.",
      date: "Aug 18, 2022",
      tags: ["DESIGN", "PRINT"],
    },
    {
      imageSrc: "/Images/envelope.png",
      title: "3 ways to develop your skill",
      date: "Feb 19, 2023",
      tags: ["FIGMA", "WEB"],
    },
  ];

  return (
    <section className="bg-dark text-white pt-16 px-4 sm:px-8 md:px-12 lg:px-32">
      <div className="flex justify-between items-center py-4">
        <h2 className="flex items-center text-2xl md:text-3xl font-semibold font-Syne gap-2 text-white">
          <img src={Star} alt="Star image" className="w-5 md:w-6" />
          <span>Blog</span>
        </h2>
        <a
          href="https://rahulbyte.dev"
          className="block text-white hover:text-gray-300 underline text-sm md:text-base"
        >
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 mx-auto">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
