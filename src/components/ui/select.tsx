import { FC, useState } from "react";

interface SelectProps {
  options: Array<{ value: string; label: string }>;
  className?: string;
}

export const Select: FC<SelectProps> = ({ options, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full min-w-[65px] ${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full rounded bg-bg px-[20px] h-[35px] rounded-[5px] text-left text-white focus:outline-none"
      >
        {selectedOption.label}
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="5"
            viewBox="0 0 7 5"
            fill="none"
          >
            <path
              d="M3.5 5L0.0358978 0.500001L6.9641 0.5L3.5 5Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute mt-2 rounded-[5px] bg-bg w-[110%] right-0"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`text-sm text-white pl-[12px] py-[5px] cursor-pointer ${
                selectedOption.value === option.value ? "" : ""
              }`}
              role="option"
              data-id={option.value}
              data-value={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
