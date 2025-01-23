import * as React from "react";

interface DownloadBtnProps {
  image: string;
  type?: "light" | "dark";
}

export const DownloadBtn: React.FC<DownloadBtnProps> = ({
  image,
  type = "light",
}) => {
  return (
    <a
      className={`flex items-center mb-[10px]  ${
        type === "dark" ? "bg-black" : ""
      }`}
    >
      <div
        className="bg-cover bg-no-repeat bg-center h-[45px] w-[157px] mb-[10px] border-none outline-none"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </a>
  );
};
