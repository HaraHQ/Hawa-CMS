import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react";

export interface Option extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string | number;
  label: string;
  icon?: string;
  slot?: 'prefix' | 'suffix';
}

interface InputComponent extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: string; // laterz
  slot?: 'prefix' | 'suffix';
  isError?: boolean;
  items: Option[]
}

const FieldSelect: FC<InputComponent> = ({ items, isError, ...props }) => {
  return (
    <div className={`w-full border border-neutral-400 shadow-sm flex items-center gap-2 ${isError ? 'border-red-500' : 'focus-within:border-purple-500'} focus-within:shadow-lg transition-all duration-500`}>
      <select className="w-full p-2 text-[14px] outline-none" {...props}>
        <option value="" disabled>---</option>
        {items.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default FieldSelect;
