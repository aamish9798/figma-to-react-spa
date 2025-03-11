import React from "react";
import Form from "./form/Form";

const FormComponent = () => {
  return (
    <section id="form" className="bg-[#3D5A80]">
      <div className="container mx-auto flex flex-col gap-y-10 px-6 py-10 md:px-6 md:py-14 xl:px-20">
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <h2 className="text-xl md:text-3xl">Tell me about your project</h2>
          <hr className="border-secondary w-50 border-t-3 md:w-70" />
        </div>

        <div className="flex w-full">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
