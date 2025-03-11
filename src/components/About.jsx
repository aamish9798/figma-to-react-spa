import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-dark">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between space-y-10 gap-y-12 px-6 py-10 md:flex-row md:space-y-0 md:px-6 md:py-20 xl:px-20">
        <div className="left flex w-[90%] flex-col items-center md:w-1/3">
          <img
            className="w-70 md:w-96"
            src="/tech-logo-images.png"
            alt="Hero image"
          />
        </div>
        <div className="right flex w-full flex-col gap-y-4 md:w-1/2">
          <h2 className="text-2xl md:text-3xl">About Me</h2>
          <hr className="border-secondary border-t-3" />
          <p className="text-sm leading-relaxed md:text-base lg:text-lg">
            My passion for building websites started since 2020 and since then i
            have helped companies around the world build amazing websites and
            products that create real value for the business and users. <br />
            <br />I enjoy solving problems with clean scalable solutions and I
            also have a genuine passion for inspiring design.
            <br />
            <br />I am a fullstack developer focusing on core frontend and
            backend technologies which include HTML, CSS, Javascript, React and
            other core languages
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
