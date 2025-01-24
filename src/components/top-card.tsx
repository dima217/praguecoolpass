import { FC, useState } from "react";
import { API_PICTURES_URL } from "../api/apiconfig";

interface TopCardProps {
  link: string;
  title: string;
  image: string;
  description: string;
  includedWithCoolpass: string
}

export const TopCard: FC<TopCardProps> = ({
  link,
  title,
  image,
  description,
  includedWithCoolpass
}) => {
  const [like, setLike] = useState(false);
  const [isHoverActive, setIsHoverActive] = useState(false);

  const handleLike = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setLike((prev) => !prev);
  };

  return (
    <div
      className="h-[204px] w-full rounded-[10px] bg-cover bg-no-repeat bg-center relative overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url('${API_PICTURES_URL}/${image}')`,
      }}
    >
      <a href={link} className="h-full w-full">
        <div className="absolute top-0 right-0 mt-[10px] px-[15px] h-[23px] bg-[#fdca2e] rounded-tl-[5px] rounded-bl-[5px]">
          <p className="text-sm flex justify-center items-center">
            {includedWithCoolpass}
          </p>
        </div>
        <div
          className="flex items-center h-[60px] hover:h-[100px] absolute bottom-0 w-full bg-bg/60"
          onMouseEnter={() => setIsHoverActive(true)}
          onMouseLeave={() => setIsHoverActive(false)}
        >
          <div className="flex flex-col ml-[20px]">
            <p className="font-semibold text-sm text-white">{title}</p>
            {isHoverActive && (
              <p className="text-xs text-white">{description}</p>
            )}
          </div>
          <div
            className="ml-auto mt-auto mr-[13px] mb-[18px]"
            onClick={handleLike}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={like ? "white" : "transparent"}
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};
