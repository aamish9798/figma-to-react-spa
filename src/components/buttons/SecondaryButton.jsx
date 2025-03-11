import React from "react";

const SecondaryButton = ({
  text,
  padding,
  bgColor,
  textColor,
  borderColor,
  variant = "solid",
  onClick,
}) => {
  return (
    <button
      className={`w-fit ${padding} ${variant === "solid" ? `${bgColor} ${textColor}` : `border bg-transparent ${borderColor} ${textColor}`} cursor-pointer rounded-md transition duration-300 hover:opacity-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
