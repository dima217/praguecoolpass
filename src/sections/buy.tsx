import * as React from "react";
import { PassCard } from "../components/pass-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography } from "../components/ui/typography";

export interface PassData {
  days: number;
  prices: {
    adult: number;
    student: number;
  };
}

const passData: PassData[] = [
  { days: 1, prices: { adult: 64, student: 48 } },
  { days: 2, prices: { adult: 88, student: 64 } },
  { days: 3, prices: { adult: 108, student: 72 } },
  { days: 4, prices: { adult: 112, student: 80 } },
  { days: 5, prices: { adult: 116, student: 84 } },
  { days: 6, prices: { adult: 124, student: 88 } },
  { days: 7, prices: { adult: 132, student: 92 } },
  { days: 10, prices: { adult: 144, student: 100 } },
];

export const Buy: React.FC = () => {
  return (
    <div className="container flex flex-wrap gap-1 w-full">
      <div className="flex relative flex-col w-full">
        <div className="relative w-full">
          <Typography variant="title">BUY PRAGUE CooLPASS /CARD</Typography>
          <div className="flex  flex-col items-center w-full relative">
            <button
              className="!hidden xl:!block swiper-button-prev !left-[0px] absolute md:-scale-x-100 md:transform"
              aria-label="Previous"
              aria-disabled="false"
            >
              <span
                className="w-6 h-6 pr-5 ml-[5px] bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url(/assets/icons/right-arrow.svg)",
                }}
              />
            </button>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1.04}
              spaceBetween={10}
              navigation={false}
              className="w-full"
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (_, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2.05,
                  slidesPerGroup: 2,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                },
                1140: {
                  slidesPerView: 3.05,
                  slidesPerGroup: 3,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                },
              }}
              slidesPerGroup={1}
            >
              {passData.map((pass, index) => (
                <SwiperSlide>
                  <PassCard key={index} days={pass.days} price={pass.prices} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="!hidden xl:!block swiper-button-next"
              aria-label="Previous"
              aria-disabled="false"
            >
              <span
                className="w-6 h-6 pr-5 ml-[5px] bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url(/assets/icons/right-arrow.svg)",
                }}
              />
            </button>
            <div className="custom-pagination mt-[15px] flex justify-center items-center" />
          </div>

          <div className="mt-[32px] ml-[12px] w-full ">
            <ul className="w-full list-disc list-outside list-image-[url(https://praguecoolpass.com/img/list-bullet.bfaee876.svg)]">
              <li className="pl-[10px] mb-[14px] text-xs">
                Prague CoolPass/Card is valid for consecutive days, not hours.
              </li>
              <li className="pl-[10px] mb-[14px] text-xs">
                Child/Student Pass is valid for children 6-16 years old and
                students on daily studies up to 26 years old.
              </li>
              <li className="pl-[10px] text-xs">
                Any national or international student ID is OK. You do not need
                it when buying Pass, but you could be asked to show it when
                entering the attractions with a student CoolPass.
              </li>
            </ul>
          </div>
          <div className="pl-[22px] mt-[12px] pr-[13px] flex flex-wrap font-semibold text-sm">
            <p>ADULT 16+ years</p>
            <p className="ml-auto">STUDENT 16 - 26 years</p>
            <p className="mt-[14px] shrink grow-0 basis-full">
              CHILD 6-16 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
