import { FC, ReactNode } from "react";

interface MenuProps {
  open: boolean;
  children: ReactNode;
}

export const Menu: FC<MenuProps> = ({ open, children }) => {
  return (
    <div
      className={`bg-[#727580] top-full w-full flex flex-col justify-center items-center absolute top-0 left-0 transition-all ease-in-out delay-100 overflow-hidden ${
        open ? "h-[375px] " : "h-[0] p-0"
      }`}
    >
      {children}
    </div>
  );
};
