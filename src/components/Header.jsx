import React, { useState } from "react";
import SecondaryButton from "./buttons/SecondaryButton";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary border-b-2 border-[rgba(0,0,0,0.12)]">
      <header className="container mx-auto flex w-full items-center justify-center px-6 py-6 md:px-6 md:pt-10 md:pb-6 lg:justify-between xl:px-20">
        <h2 className="text-lg font-bold">Muhammad Aamish</h2>
        <nav className="hidden lg:flex">
          <ul className="flex items-center md:gap-x-8 lg:gap-x-12">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <SecondaryButton
              text="Get In Touch"
              padding="px-6 py-2 lg:px-11 lg:py-3"
              bgColor="bg-secondary"
              textColor="text-white"
              onClick={() => {
                document
                  .getElementById("form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </ul>
        </nav>

        <button
          className="absolute top-6 left-6 text-2xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <div
          className={`bg-primary fixed top-0 left-0 h-full w-64 p-6 shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <button
            className="absolute top-5 right-5 text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaTimes />
          </button>

          <nav>
            <ul className="mt-10 flex flex-col space-y-6 text-white">
              <li>
                <a href="#home" onClick={() => setIsOpen(!isOpen)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#work" onClick={() => setIsOpen(!isOpen)}>
                  Works
                </a>
              </li>
              <li>
                <a href="#testimonial" onClick={() => setIsOpen(!isOpen)}>
                  Testimonial
                </a>
              </li>
              <SecondaryButton
                text="Get In Touch"
                padding="px-11 py-2"
                bgColor="bg-secondary"
                textColor="text-white"
                onClick={() => {
                  document
                    .getElementById("form")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              />
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
