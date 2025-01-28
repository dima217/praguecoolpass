import { FC, useState } from "react";
import { API_PICTURES_URL } from "../api/apiconfig";

interface AllInclusiveCardProps {
  title: string;
  image: string;
  button_text: string;
  features_list: string
}

export const AllInclusiveCard: FC<AllInclusiveCardProps> = ({
  title,
  image,
  button_text,
  features_list
}) => {
  const [isHoverActive, setIsHoverActive] = useState(false);

  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-full h-[300px] lg:rounded-[10px] relative cursor-pointer overflow-hidden"
      style={{
        backgroundImage: `url('${API_PICTURES_URL}/${image}')`,
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
          <div className="text-[11px] sm:text-sm mt-[15px]" dangerouslySetInnerHTML={{ __html: features_list }}>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-auto mb-[40px]">
          <a
            href="/attractions?category=5f575890418c980b69d941bb"
            className="min-w-[80px] h-[40px] w-auto"
          >
            <button className="min-w-[126px] h-[40px] mt-[14px] w-auto bg-primary border-primary text-white px-[20px] rounded-[5px]">
              {button_text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
