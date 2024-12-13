"use client";
import React from "react";
import Image from "next/image";
import BgHero from "../../../public/images/hero.png";
import Button from "../button/Button";
import useScrollToSection from "@/app/hooks/useScrollToSection";

const Hero = () => {
  const handleClickReadMore = () => {};
  const scrollToSection = useScrollToSection();

  return (
    <div className="flex flex-col md:flex-row items-center justify-around pt-12 px-4 md:px-8">
      <div className="w-full md:w-[60%] text-center md:text-left">
        <h3 className="text-4xl md:text-8xl font-bold text-blue-900">
          WeDev.Vn
        </h3>
        <h4 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-4">
          Lorem ipsum dolor sit amet consectetur
        </h4>
        <p className="mt-4 text-lg md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit mnis cumque
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="mr-3"
            label="Contact here!"
            onClick={() => scrollToSection("nav-contact")}
          />
          <Button
            className="sub-button"
            label="Read More..."
            onClick={handleClickReadMore}
          />
        </div>
      </div>

      <div className="w-full md:w-[30%] mt-6 md:mt-0">
        <Image
          src={BgHero}
          alt="hero bg"
          className="object-cover w-full h-full rounded-lg hero-images" 
        />
      </div>
    </div>
  );
};

export default Hero;
