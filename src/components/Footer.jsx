import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8 md:px-12 lg:px-32 text-center">
      <h2 className="text-5xl font-miedinger mb-8">LET’S TALK!</h2>

      <div className=" flex justify-center">
        <p className=" flex items-center gap-1 mb-4">
          rehanurraihan@gmail.com
          <span>
            <ArrowUpRight size={20} />
          </span>
        </p>
      </div>
      <div className=" flex justify-between">
        <p className="text-sm">© Rehan Rafion - 2025</p>

        <div className="flex space-x-4 mb-4">
          <a href="#" className=" font-Poppins hover:text-gray-300">
            Dribbble
          </a>
          <a href="#" className=" font-Poppins hover:text-gray-300">
            Behance
          </a>
          <a href="#" className=" font-Poppins hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className=" font-Poppins hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
