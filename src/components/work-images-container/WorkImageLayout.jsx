import React from "react";

const WorkImageLayout = ({ imgSrc, heading, days }) => {
  return (
    <div className="relative cursor-pointer">
      <h3 className="text-lg">{heading}</h3>
      <img
        className="mt-[14px] w-72 object-cover md:w-80"
        src={imgSrc}
        alt={heading}
      />
      <p className="absolute right-0 bottom-0 z-10 rounded-[3px] bg-[#3D5A80] px-3 py-2">
        {days}
      </p>
    </div>
  );
};

export default WorkImageLayout;
