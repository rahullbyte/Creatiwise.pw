import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogSection = () => {
  const blogPosts = [
    {
      imageSrc: '/ux-works.jpg',
      title: 'How UX Works in Web',
      date: 'Nov 8, 2023',
      tags: ['UI/UX', 'WEB'],
      buttonText: 'Read',
      buttonUrl: '#'
    },
    {
      imageSrc: '/analysis-study.jpg',
      title: 'Case Study - Analysis Application.',
      date: 'Aug 18, 2022',
      tags: ['CASE STUDY', 'PRINT'],
      buttonText: 'Read',
      buttonUrl: '#'
    },
    {
      imageSrc: '/skill-development.jpg',
      title: '3 Ways to Develop Your Skill',
      date: 'Feb 19, 2023',
      tags: ['UI/UX', 'WEB'],
      buttonText: 'Read',
      buttonUrl: '#'
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        <span className="text-yellow-500">★</span> Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      <a href="#" className="block text-center text-white mt-8 hover:text-gray-300">View All</a>
    </section>
  );
};

export default BlogSection;