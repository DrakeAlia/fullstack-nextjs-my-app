import clsx from "clsx";

// The form should have the state and pass it into the input and not the inputs themselves
// If you use 'use client' here, then you will run into multiple issues when 
// you start using multiple versions of that input
const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
