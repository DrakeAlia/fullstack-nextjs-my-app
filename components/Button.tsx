import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

// cva is just a function that concatenates strings together.

// This is a simple button component that uses class-variance-authority to
// handle the different variants and states of the button.
const buttonClasses = cva(
  [
    "rounded-3xl",
    "font-bold",
    "hover:scale-110",
    "active:scale-100",
    "transition",
    "duration-200",
    "ease-in-out",
  ],
  // Types of variants that the button can have.
  {
    variants: {
      intent: {
        primary: [
          "bg-violet-500",
          "text-white",
          "border-transparent",
          "hover:bg-violet-600",
        ],
        secondary: [
          "bg-white",
          "text-black",
          "border-gray-400",
          "hover:bg-gray-100",
          "border-solid",
          "border-2",
          "border-gray-800",
        ],
        text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-md", "py-1", "px-2"],
        medium: ["text-lg", "px-6", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

// This interface is used to define the props that the button component
// accepts.
// Typeof will derive the type of these variants from the buttonClasses
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

    // `FC` is a type from `react` that stands for `Function Component` and it takes a generic type of the props that the component will receive. In this case, the `ButtonProps` interface.
const Button: FC<ButtonProps> = ({
  children,
  intent,
  size,
  className,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;


// The `children` prop is a special prop that will be passed to the component 
// by `react` when it renders it. It's the content passed between the opening 
// and closing tags of the component.
// The `intent` and `size` props are passed from the `buttonClasses` function 
// that we created. The `className` prop is passed from the `className` prop 
// that the user will pass to the component. The rest of the props are 
// passed to the `button` element.

