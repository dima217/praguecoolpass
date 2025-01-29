
import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
    {...props}
      className={`flex justify-center font-bold h-[35px] min-w-[105px] items-center px-5 uppercase rounded-[5px] ${className}`}
    >
      {children}
    </button>
  );
};
