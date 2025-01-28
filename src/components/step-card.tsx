import * as React from "react";
import { API_PICTURES_URL } from "../api/apiconfig";
import { Link } from "react-router-dom";

interface StepCardProps {
  index: number;
  descriptions: string;
  image: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  index,
  descriptions,
  image,
}) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex justify-center items-center bg-secondary w-full">
      <div
        className="bg-cover bg-no-repeat bg-center h-[210px] w-[240px]"
        style={{
          backgroundImage: `url('${API_PICTURES_URL}/small_${image}')`,
        }}
      />
     {index === 0 && (
          <>
           <Link
            to={'https://apps.apple.com/us/app/prague-coolpass/id1378275600'}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[3%] left-[7%] right-[8%] h-[22%] rounded-lg"
           />
            <Link
            to={'https://play.google.com/store/apps/details?id=com.bookletia.coolpassprague'}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[32%] left-[7%] right-[8%] h-[20%] rounded-lg"
            />
          </>
       )
      }
      </div>
      <div className="flex flex-col text-center">
        <div
          className="self-center text-xxl font-bold"
          aria-label={`Step ${index + 1}`}
        >
          {index + 1}
        </div>
        <p className="px-2 w-[288px] h-[69px] mt-[7px] text-sm">{descriptions}</p>
      </div>
    </div>
  );
};
