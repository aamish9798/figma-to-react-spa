import React from "react";

const FormInput = ({
  type = "text",
  name,
  placeholder,
  rows,
  register,
  errors,
  validation,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {type === "textarea" ? (
        <textarea
          {...register(name, validation)} // Registering the textarea input correctly
          rows={rows || 5}
          placeholder={placeholder}
          className="w-full rounded-[3px] bg-[#26384f] p-3 focus:ring-2 focus:ring-[#EE6C4D] focus:outline-none"
        ></textarea>
      ) : (
        <input
          {...register(name, validation)} // Registering the input field correctly
          type={type}
          placeholder={placeholder}
          className="w-full rounded-[3px] bg-[#26384f] p-3 focus:ring-2 focus:ring-[#EE6C4D] focus:outline-none"
        />
      )}

      {/* Display error message */}
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;
