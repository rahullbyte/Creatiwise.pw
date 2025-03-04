import React from "react";
import UserImage from "../assets/UserImage.svg";
import portfolio from "../assets/portfolio.svg";
import DoraDesign from "../assets/dora.svg";
import wave from "../assets/wave.svg";
import silsila from "../assets/silsila.svg";

const HeroSection = () => {
  return (
    <section className="bg-dark text-white text-center">
      <h1 className="text-4xl sm:text-5xl py-28 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-12 md:px-16 lg:px-32 md:text-6xl lg:text-7xl font-bold font-miedinger leading-snug md:leading-normal lg:leading-normal">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          I AM A
          <img
            src={UserImage}
            alt="User Image"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-[64px] md:w-[128px] rounded-lg"
          />
          FREELANCE
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          DESIGNER
          <img
            src={portfolio}
            alt="Portfolio Image"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-[64px] md:w-[128px] rounded-lg"
          />
          FROM
        </div>
        <div>SAN FRANCISCO</div>
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-12 md:px-16 lg:px-32">
        <div className="flex items-center gap-1">
          <img
            src={DoraDesign}
            alt="Dora Design"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <p className="text-lg sm:text-xl font-questrial">doradesign</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={wave}
            alt="Wave Image"
            className="h-8 w-20 sm:h-12 sm:w-28"
          />
        </div>

        <img src={silsila} alt="SiLSiLA" className="h-8 w-auto sm:h-12" />

        <div className="max-w-full sm:max-w-2xl text-left font-Poppins leading-relaxed text-base sm:text-lg">
          Welcome to my portfolio. Here, artistry meets functionality. <br />
          Dive into a curated showcase of distinctive branding and <br />
          web designs, each crafted to captivate and inspire.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
