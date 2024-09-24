import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "error" | "success" | "primary"; // Make variant optional with a default
  text: string;
  icon?: string;
  slot?: "prefix" | "suffix";
  isDisabled?: boolean;
  onClick?: () => void; // Add an onClick prop for handling clicks
}

const Button: FC<ButtonProps> = ({
  text,
  variant = "primary", // Set a default variant
  isDisabled,
  onClick,
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
      disabled={isDisabled} // Use the disabled prop directly
      onClick={onClick} // Pass the onClick prop to the button
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;