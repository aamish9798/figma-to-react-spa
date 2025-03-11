import React from "react";
import SecondaryButton from "./buttons/SecondaryButton";

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-10 px-6 pt-10 md:flex-row md:space-y-0 md:px-6 xl:px-20">
        <div className="left flex w-full flex-col gap-y-6 md:w-[60%]">
          <h1 className="max-w-[410px] text-2xl leading-normal font-bold md:text-3xl lg:text-[40px] lg:leading-14">
            Create your website in{" "}
            <span className="text-secondary">less than 12days</span>
          </h1>
          <p className="max-w-[526px] text-sm md:text-base lg:text-lg">
            Hey, I’m Muahmmad Aamish. A front-end developer with 1 year
            experience building successful websites and applications. I can
            build a high converting website for you as quick as possible!
          </p>

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
        </div>

        <div className="right flex w-full flex-col items-center md:w-[40%]">
          <img
            className="w-60 md:w-70 lg:w-80"
            src="aamish-profile.png"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
