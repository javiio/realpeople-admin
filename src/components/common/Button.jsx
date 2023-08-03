import React from "react";

const Button = ({ onClick, disabled, children, className }) => {
  const classes = [
    "bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-4 rounded m-2",
    disabled && "!bg-gray-300 !text-slate-600",
    className && className,
  ];

  return (
    <button
      className={classes.join(" ")}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
