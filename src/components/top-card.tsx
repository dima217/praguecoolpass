import { useState, FC, MouseEvent } from "react";
import { API_PICTURES_URL } from "../api/apiconfig";

interface TopCardItem {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  image: string;
}

interface TopCardProps {
  item: TopCardItem;
  onLike: (item: TopCardItem) => void;
  isLiked: boolean;
  includedWithCoolpass: string;
}

export const TopCard: FC<TopCardProps> = ({ 
  item, 
  onLike, 
  isLiked, 
  includedWithCoolpass 
}) => {
  const [isHoverActive, setIsHoverActive] = useState(false);

  const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLike(item);
  };

  return (
    <div
      className="h-[204px] w-full rounded-[10px] bg-cover bg-no-repeat bg-center relative overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url('${API_PICTURES_URL}/${item.image}')` }}
    >
      <a href={item.path} className="h-full w-full">
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
          <div className="flex flex-col ml-[20px] mr-14 pr-2 flex-1 min-w-0">
            <p className="font-semibold text-sm text-white truncate">
              {item.title}
            </p>
            {isHoverActive && (
              <p className="text-xs text-white overflow-hidden overflow-ellipsis line-clamp-2">
                {item.subtitle}
              </p>
            )}
          </div>

          <div className="ml-auto mt-auto mr-[13px] mb-[18px] shrink-0">
            <button 
              onClick={handleLike}
              className="text-xl focus:outline-none focus:ring-0"
              aria-label="Toggle favorite"
            >
              <img
                className="h-6 w-6 hover:opacity-80"
                src={
                  isLiked
                    ? 'https://www.praguecoolpass.com/img/heart-active.72445abc.svg'
                    : 'https://www.praguecoolpass.com/img/heart-disable.e975f7bf.svg'
                }
                alt="Heart"
              />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};