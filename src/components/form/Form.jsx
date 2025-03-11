import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import SecondaryButton from "../buttons/SecondaryButton";

const Form = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-5"
    >
      <div className="md:gapy-0 flex w-full flex-col gap-x-5 gap-y-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <FormInput
            name="name"
            placeholder="Name"
            register={register}
            errors={errors}
            type="text"
            validation={{ required: "Name is required" }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FormInput
            name="email"
            placeholder="Email Address"
            register={register}
            errors={errors}
            type="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email format",
              },
            }}
          />
        </div>
      </div>

      <FormInput
        name="message"
        placeholder="Message Description"
        register={register}
        errors={errors}
        type="textarea"
        rows={8}
        validation={{ required: "Message cannot be empty" }}
      />

      <SecondaryButton
        text="Send"
        padding="px-6 py-2 lg:px-14 lg:py-3"
        bgColor="bg-secondary"
        textColor="text-white"
        type="submit"
      />
    </form>
  );
};

export default Form;
