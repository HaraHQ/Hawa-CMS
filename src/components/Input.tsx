import { FC, InputHTMLAttributes } from "react";

interface InputComponent extends InputHTMLAttributes<HTMLInputElement> {
  type?: string; // Optional since default can be provided
  placeholder?: string;
  icon?: string; // laterz
  slot?: 'prefix' | 'suffix';
  isError?: boolean;
}

interface TextareaComponent extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  isError?: boolean;
}

const FieldInput: FC<InputComponent> = ({ type, placeholder, isError, ...props }) => {
  return (
    <div className={`w-full border border-neutral-400 shadow-sm flex items-center gap-2 ${isError ? 'border-red-500' : 'focus-within:border-purple-500'} focus-within:shadow-lg transition-all duration-500`}>
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className="w-full p-2 text-[14px] outline-none"
      />
    </div>
  );
};

export const FieldTextarea: FC<TextareaComponent> = ({ placeholder, isError, ...props }) => {
  return (
    <div className={`w-full border border-neutral-400 shadow-sm flex items-center gap-2 ${isError ? 'border-red-500' : 'focus-within:border-purple-500'} focus-within:shadow-lg transition-all duration-500`}>
      <textarea
        placeholder={placeholder}
        {...props}
        className="w-full min-h-[200px] p-2 text-[14px] outline-none"
      />
    </div>
  );
};

export default FieldInput;
