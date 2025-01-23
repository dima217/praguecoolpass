import { FC, useState } from "react";

interface AllInclusiveCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  btn: string;
}

export const AllInclusiveCard: FC<AllInclusiveCardProps> = ({
  title,
  image,
  description,
  btn,
}) => {
  const [isHoverActive, setIsHoverActive] = useState(false);

  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-full h-[300px] lg:rounded-[10px] relative cursor-pointer overflow-hidden"
      style={{
        backgroundImage: `url("/assets/images/${image}")`,
      }}
      onMouseEnter={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
    >
      <div
        className={`h-full w-full absolute grid justify-center ${
          isHoverActive ? "invisible" : "visible"
        }`}
      >
        <div className="flex justify-center items-center bg-primary/70 w-[260px] lg:w-[476px] h-[71px] text-center mt-[208px] px-[15px] rounded-[10px]">
          <p className="font-bold text-lg text-white uppercase">{title}</p>
        </div>
      </div>
      <div
        className={`
                ${
                  isHoverActive
                    ? "flex absolute visible h-full"
                    : "invisible h-0 none"
                } bg-bg/80 flex-col
              `}
      >
        <div className="px-[22px] lg:px-[47px] text-white">
          <div className="mt-[30px] text-lg">{title}</div>
          <div className="text-sm mt-[15px]">
            <p>{description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-auto mb-[40px]">
          <a
            href="/attractions?category=5f575890418c980b69d941bb"
            className="min-w-[80px] h-[40px] w-auto"
          >
            <button className="min-w-[126px] h-[40px] mt-[14px] w-auto bg-primary border-primary text-white px-[20px] rounded-[5px]">
              {btn}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
