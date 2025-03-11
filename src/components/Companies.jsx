import React from "react";
import BrandLogoContainer from "./BrandLogoContainer";

const Companies = () => {
  return (
    <section className="bg-light">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-14 px-6 py-8 md:px-6 md:pt-14 xl:px-20">
        <div className="flex flex-col items-start justify-center gap-y-3 md:items-center md:gap-y-4">
          <h2 className="text-xl md:text-3xl">Companies I have worked for</h2>
          <hr className="border-secondary w-20 border-t-3 md:w-34" />
        </div>

        <div className="flex w-full flex-wrap items-start justify-center space-y-8">
          <BrandLogoContainer imgSrc="/google.png" wid="w-22 md:w-28" />
          <BrandLogoContainer imgSrc="/bolt.png" wid="w-12 md:w-18" />
          <BrandLogoContainer imgSrc="/amazon.png" wid="w-22 md:w-32" />
          <BrandLogoContainer imgSrc="/paypal.png" wid="w-22 md:w-32" />
          <BrandLogoContainer imgSrc="/netflix.png" wid="w-20 md:w-26" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
