"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../button/Button";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import useScrollToSection from "@/app/hooks/useScrollToSection";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrollToSection = useScrollToSection();
  const router = useRouter();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has scrolled past a certain threshold (e.g., 50px)
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !overlayRef.current?.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add scroll and click outside event listeners
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickContact = useCallback(() => {}, []);

  return (
    <div
      className={`
        flex items-center justify-between w-full px-4 py-3 md:px-8
        z-50 top-0 left-0 right-0 
        transition-all duration-300 
        ${isScrolled ? "fixed bg-white shadow-md" : "relative"}
      `}
      id="header"
    >
      {/* Logo */}
      <h1 className="w-32 h-20 md:w-40 md:h-24 cursor-pointer">
        <Image
          src={Logo}
          alt="logo"
          className="w-full h-full object-cover"
          onClick={() => router.push("/")}
        />
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-between items-center space-x-6">
        <li className="relative text-lg md:text-2xl cursor-pointer">
          <a
            href="#home"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            onClick={() => scrollToSection("header")}
          >
            Home
          </a>
        </li>
        <li className="relative text-lg md:text-2xl cursor-pointer">
          <a
            href="#about"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            onClick={() => scrollToSection("nav-about")}
          >
            About
          </a>
        </li>
        <li className="relative text-lg md:text-2xl cursor-pointer">
          <a
            href="#services"
            className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            onClick={() => scrollToSection("nav-services")}
          >
            Service
          </a>
        </li>
        <li className="relative text-lg md:text-2xl cursor-pointer">
          <Button label="Liên hệ" onClick={handleClickContact} />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          {!isMenuOpen && "☰"}
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-3/5 h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out`}
      >
        {/* Close Button (Positioned in the top right corner) */}
        <div className="absolute top-4 right-4">
          <button
            className="text-2xl focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            ✖
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4 py-4">
          <li
            className="text-lg cursor-pointer"
            onClick={() => {
              toggleMenu();
              scrollToSection("header");
            }}
          >
            <a
              href="#home"
              className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            >
              Home
            </a>
          </li>
          <li
            className="text-lg cursor-pointer"
            onClick={() => {
              toggleMenu();
              scrollToSection("nav-about");
            }}
          >
            <a
              href="#about"
              className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            >
              About
            </a>
          </li>
          <li
            className="text-lg cursor-pointer"
            onClick={() => {
              toggleMenu();
              scrollToSection("nav-services");
            }}
          >
            <a
              href="#services"
              className="w-fit block text-zinc-800 hover:text-zinc-500 transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:rounded-md after:transition after:duration-200 after:origin-center"
            >
              Service
            </a>
          </li>
          <li className="text-lg cursor-pointer">
            <Button label="Liên hệ" onClick={handleClickContact} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
