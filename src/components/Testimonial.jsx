import React, { useState } from "react";
import TestimonialContainer from "./testimonial/TestimonialContainer";

const clientsData = [
  {
    imgSrc: "charles-dim.png",
    name: "Charles Dim",
    designation: "Lead Designer, Netflix",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
  },
  {
    imgSrc: "margret-wills.png",
    name: "Margret Wills",
    designation: "CEO, Ebay",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
  },
  {
    imgSrc: "charles-dim.png",
    name: "Kevin Dim",
    designation: "CEO,Amazon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
  },
  {
    imgSrc: "margret-wills.png",
    name: "Susan John",
    designation: "CTO, Microsoft",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const totalSlides = Math.ceil(clientsData.length / 2);

  const changeSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index * 2);
      setFade(false);
    }, 300);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= clientsData.length ? 0 : prevIndex + 2,
      );
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 2 < 0 ? clientsData.length - 2 : prevIndex - 2,
      );
      setFade(false);
    }, 300);
  };

  return (
    <section id="testimonial" className="bg-light">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-14 px-6 py-8 md:px-6 md:py-16 xl:px-20">
        <div className="flex flex-col items-start justify-center gap-y-3 md:items-center md:gap-y-4">
          <h2 className="text-xl md:text-3xl">What my clients say</h2>
          <hr className="border-secondary w-24 border-t-3 md:w-40" />
        </div>

        <div className="relative flex items-center">
          <button
            className="absolute left-[-40px] hidden cursor-pointer md:flex"
            onClick={prevSlide}
          >
            <img className="w-6" src="left-icon.png" alt="" />
          </button>

          <div
            className={`grid transform gap-10 transition-opacity md:grid-cols-2 md:gap-30 ${
              fade ? "translate-x-5 opacity-0" : "translate-x-0 opacity-100"
            } duration-300 ease-in-out`}
          >
            {clientsData
              .slice(currentIndex, currentIndex + 2)
              .map((client, index) => (
                <TestimonialContainer key={index} {...client} />
              ))}
          </div>

          <button
            className="absolute right-[-40px] hidden cursor-pointer md:flex"
            onClick={nextSlide}
          >
            <img className="w-6" src="right-icon.png" alt="" />
          </button>
        </div>

        <div className="mt-2 flex justify-center gap-3 md:mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all ${
                currentIndex / 2 === i ? "bg-[#EE6C4D]" : "bg-[#C4C4C4]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
