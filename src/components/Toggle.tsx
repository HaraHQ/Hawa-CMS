import { FC, useState } from "react";

interface FieldToggleProps {
  onToggle: () => void;
  checked?: boolean;
}

const FieldToggle: FC<FieldToggleProps> = ({
  checked, onToggle,
}) => {
  const [active, setActive] = useState(checked || false);
  const handleToggle = () => {
    onToggle();
    setActive(!active)
  };
  return (
    <div
      onClick={handleToggle}
      className={`w-10 p-3 ${active ? 'bg-blue-300' : 'bg-gray-300'} rounded-full relative select-none cursor-pointer`}>
      <div className={`w-5 h-5 bg-white rounded-full absolute top-1/2 ${active ? 'right-1' : 'left-1'} -translate-y-1/2`} />
    </div>
  )
}

export default FieldToggle;