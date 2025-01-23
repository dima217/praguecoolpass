import * as React from "react";
import { StarRating } from "./ui/star-rating";

interface ReviewProps {
  rating: number;
  title: string;
  date: string;
  content: React.ReactNode;
  author: string;
  location: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({
  rating,
  title,
  date,
  content,
  author,
  location,
}) => {
  return (
    <div className="mr-[20px] h-full min-h-[255px]">
      <div className="flex flex-col min-h-[270px] w-full h-full bg-secondary">
        <div className="mx-[13px] h-auto flex flex-col pt-[15px]">
          <StarRating rating={rating} />
          <div className="mt-[12px] text-lg font-bold text-bg">{title}</div>
          <div className="mt-[10px] text-xs font-semibold text-bg">{date}</div>
        </div>

        <div className="mx-[13px] grow h-auto min-h-[80px] mt-[11px]">
          <p className="text-xs break-words">{content}</p>
        </div>
        <div className="pt-[27px] pb-[16px] mr-[16px] ml-[13px] text-xs text-bg/60 max-w-[195px]">
          {author}, {location}
        </div>
      </div>
    </div>
  );
};
