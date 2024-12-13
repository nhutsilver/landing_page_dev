"use client";
import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import useScrollToSection from "@/app/hooks/useScrollToSection";
const Header = () => {
  const handleClickContact = () => {};

  const scrollToSection = useScrollToSection();

  return (
    <div className="flex justify-between w-full pr-5" id="header">
      <h1 className="w-40 h-24 cursor-pointer">
        <Image
          src={Logo}
          alt="logo"
          className="w-full h-full object-cover"
          onClick={() => scrollToSection("header")}
        />
      </h1>
      <ul className="flex justify-between items-center">
        <li
          className="relative ml-10 text-2xl cursor-pointer"
          onClick={() => scrollToSection("header")}
        >
          <a
            href="#home"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
          >
            Home
          </a>
        </li>
        <li
          className="relative ml-10 text-2xl cursor-pointer"
          onClick={() => scrollToSection("nav-about")}
        >
          <a
            href="#about"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
          >
            About
          </a>
        </li>
        <li
          className="relative ml-10 text-2xl cursor-pointer"
          onClick={() => scrollToSection("nav-services")}
        >
          <a
            href="#services"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
          >
            Service
          </a>
        </li>
        <li
          className="relative ml-10 text-2xl cursor-pointer"
          onClick={() => scrollToSection("nav-contact")}
        >
          <Button label="Liên hệ" onClick={handleClickContact} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
