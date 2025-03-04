import React from 'react';

const Testimonial = ({ quote, author, companyLogo }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow max-w-2xl mx-auto">
      <p className="text-lg italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center space-x-4">
        <img src={companyLogo} alt={author} className="w-12 h-12 rounded-full" />
        <span className="font-semibold">{author}</span>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default Testimonial;