import * as React from "react";
import { API_PICTURES_URL } from "../api/apiconfig";
// @ts-nocheck

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  content: string;
  side?: "start" | "end";
}

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  content,
  date,
  side = "start",
}) => {
  return (
    <article className="flex flex-col">
      <div className="flex gap-5 max-lg:flex-col gap-5">
        <div
          className={`relative w-full lg:w-1/2 ${
            side === "end" ? "lg:order-2" : ""
          }`}
        >
          <img
            src={`${API_PICTURES_URL}/small_${image}`}
            alt="News feature"
            className="w-full h-[261px] lg:h-[315px] object-cover lg:rounded-md"
          />
          <span className="absolute bottom-0 right-0 text-white rounded-tl-[10px] bg-bg/60 h-[27px] w-[90px] font-semibold flex justify-center items-center text-sm">
            {date}
          </span>
        </div>
        <div className="flex flex-col items-start self-stretch w-full lg:w-1/2 px-[8px] lg:px-0">
          <div className="flex flex-col max-w-full bg-black bg-opacity-0 w-[527px]">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-4 text-sm" dangerouslySetInnerHTML={{
                                    __html: content }} ></p>
          </div>
          <a
            href="/"
            className="mt-6 text-xs text-primary underline cursor-pointer"
            aria-label="Read more about this news"
          >
            See More
          </a>
        </div>
      </div>
    </article>
  );
};
