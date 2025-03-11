import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark">
      <footer className="container mx-auto flex w-full flex-col items-center justify-center gap-y-2 px-6 py-6 md:flex-row md:justify-between md:gap-y-0 md:px-6 md:py-10 xl:px-20">
        <h2 className="text-center text-lg font-bold">Muhammad Aamish</h2>
        <p className="text-center text-sm md:text-base">
          &copy; Copyright 2025. All right reserved
        </p>

        <div className="flex items-center justify-center gap-x-2">
          <p className="text-sm md:text-lg">Connect with me:</p>
          <div className="flex gap-x-3">
            <a
              className="rounded-full bg-[#191f28] p-2"
              href="https://web.facebook.com/profile.php?id=100009534322457"
              target="_blank"
            >
              {" "}
              <FaFacebookF className="cursor-pointer" />
            </a>
            <a
              className="rounded-full bg-[#191f28] p-2"
              href="https://www.linkedin.com/in/muhammad-aamish-810603193/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a
              className="rounded-full bg-[#191f28] p-2"
              href="https://github.com/aamish9798"
              target="_blank"
            >
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
