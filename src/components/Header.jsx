import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-dark text-white py-4 px-6 flex justify-between items-center md:py-6 md:px-10">
      <div className="w-[46px] h-[32px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {["/", "/about", "/project", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Project", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              className={`px-4 py-1 rounded-full transition-all ${
                isActive(path) ? "bg-white text-black" : "text-white"
              }`}
            >
              <h1 className="font-questrial text-base">{labels[index]}</h1>
            </Link>
          );
        })}
      </nav>
      <button className="hidden md:block px-6 py-2 rounded-full border border-white bg-dark text-white text-sm font-questrial duration-300 hover:bg-white hover:text-dark">
        HIRE ME
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-dark text-white flex flex-col items-center py-4 space-y-4 transition-all ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        {["/", "/about", "/project", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Project", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              className={`w-full text-center py-2 ${
                isActive(path) ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
             <h1 className="font-questrial text-base">{labels[index]}</h1>
            </Link>
          );
        })}
        <button className="px-6 py-2 rounded-full border border-white bg-dark text-white text-sm font-questrial">
          HIRE ME
        </button>
      </div>
    </header>
  );
};

export default Header;
