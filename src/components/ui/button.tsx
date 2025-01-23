import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`flex justify-center font-bold h-[35px] min-w-[105px] items-center px-5 uppercase rounded-[5px] font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
