import React from 'react';

const BlogPostCard = ({ imageSrc, title, date, tags, buttonText, buttonUrl }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{date}</p>
      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <a href={buttonUrl} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 block text-center">{buttonText}</a>
    </div>
  );
};

export default BlogPostCard;