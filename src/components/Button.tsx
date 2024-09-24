import { ButtonHTMLAttributes, FC } from "react";

interface ButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "error" | "success" | "primary"; // Optional since default can be provided
  text: string;
  icon?: string; // laterz
  slot?: "prefix" | "suffix";
  isDisabled?: boolean;
}

const Button: FC<ButtonComponent> = ({
  text,
  variant,
  isDisabled,
  ...props
}) => {
  const variantClasses = {
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    primary: "bg-purple-500 text-white",
  };
  return (
    <button
      className={`${
        isDisabled ? "bg-black text-white" : variantClasses[variant]
      } p-2 text-lg`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
