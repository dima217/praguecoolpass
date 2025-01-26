import * as React from "react";
import { API_PICTURES_URL } from "../api/apiconfig";

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
      </div>
      <div className="flex flex-col text-center">
        <div
          className="self-center text-xxl font-bold"
          aria-label={`Step ${index + 1}`}
        >
          {index + 1}
        </div>
        <p className="w-full mt-[7px] text-sm">{descriptions}</p>
      </div>
    </div>
  );
};
