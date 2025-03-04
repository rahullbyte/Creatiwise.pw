import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">LET’S TALK!</h2>
      <p className="mb-4">rehanuthang@gmail.com</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:text-gray-300">Dribbble</a>
        <a href="#" className="hover:text-gray-300">Behance</a>
        <a href="#" className="hover:text-gray-300">Twitter</a>
        <a href="#" className="hover:text-gray-300">Instagram</a>
      </div>
      <p className="text-sm">© Rehan Rafion - 2025</p>
    </footer>
  );
};

export default Footer;