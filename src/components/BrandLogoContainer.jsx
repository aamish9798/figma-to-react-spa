import React from "react";

const BrandLogoContainer = ({ imgSrc, wid }) => {
  return (
    <div className="flex w-1/2 justify-center md:w-[20%]">
      <img className={`${wid}`} src={imgSrc} alt="" />
    </div>
  );
};

export default BrandLogoContainer;
