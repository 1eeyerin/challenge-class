import { PropsWithChildren } from "react";

import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "px-2.5 py-0.5 rounded-full hover:brightness-90 active:brightness-75",
  {
    variants: {
      intent: {
        primary: ["bg-blue-500", "border-blue-500"],
        secondary: ["bg-yellow-500", "border-yellow-500"],
        danger: ["bg-red-500", "border-red-500"],
        link: "text-blue-500, underline",
      },
      size: {
        sm: "text-[10px]",
        md: "text-[12px]",
        lg: "text-[14px]",
      },
      variant: {
        outline: "border",
        solid: "border-transparent",
        link: "border-transparent",
        contained: "border-transparent",
      },
    },
    compoundVariants: [
      { intent: "primary", variant: "contained", className: "text-white" },
      { intent: "secondary", variant: "contained", className: "text-white" },
      { intent: "danger", variant: "contained", className: "text-white" },
      { intent: "link", variant: "link", className: "text-blue-500" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariants>;

type ButtonProps = {} & ButtonVariant & React.ComponentProps<"button">;

const Button = ({
  children,
  intent,
  size,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={buttonVariants({ intent, size, variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
