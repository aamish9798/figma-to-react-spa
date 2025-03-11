import React from "react";

const TestimonialContainer = ({ imgSrc, name, designation, desc }) => {
  return (
    <div className="flex max-w-[490px] flex-col rounded-[3px] bg-[#1A1E26] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img className="w-10" src={imgSrc} alt="" />
          <div className="flex flex-col gap-y-1">
            <p className="text-base md:text-lg">{name}</p>
            <p className="text-xs md:text-sm">{designation}</p>
          </div>
        </div>
        <img className="h-4 w-4" src="quote.png" alt="" />
      </div>
      <p className="mt-4">{desc}</p>
    </div>
  );
};

export default TestimonialContainer;
