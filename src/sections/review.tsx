// @ts-nocheck
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReviewCard } from "../components/review-card";
import { StarRating } from "../components/ui/star-rating";
import { Typography } from "../components/ui/typography";
import { useState, useEffect, useRef } from 'react';
import API_ENDPOINTS from "../api/apiconfig";
import { Link } from "react-router-dom";

export const Review: React.FC = ({title, seeAll, popupTranslations}) => {
  const [activeSlide, setActiveSlide] = React.useState(1);

  const [reveiws, setReveiws] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAttractions = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.GET_ReveiwsAprowed);
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
            const dataWithIds = data.map((item, index) => ({
                ...item,
                id: index + 1
            }));
            setReveiws(dataWithIds.slice(0, 15));
        } catch (err) {
            setError(true);
            console.error(err.message);
        }
    };

    fetchAttractions();
  }, []);

  console.log(reveiws);

  return (
    <section className="mt-[40px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <Typography variant="title">
            {title}
          </Typography>
          <div className="flex items-center mt-[19px] ml-[10px] font-bold lg:mt-0 lg:ml-0 flex flex-row-reverse lg:flex-row justify-end">
            <div className="text-xxl mx-[12px]">4.5</div>
            <StarRating rating={5} />
          </div>
        </div>

        <div className="flex relative">
          <button
            className={`hidden lg:block swiper-button-prv ${
              activeSlide === 1 ? "opacity-20" : ""
            }`}
          >
            <span className="h-[20px] w-[20px] flex justify-center items-center -ml-[40px] bg-no-repeat bg-center -scale-x-100">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.585204 2.83003L9.75517 12L0.585205 21.17L3.41514 24L15.4151 12L3.41514 -2.03105e-06L0.585204 2.83003Z"
                  fill="#DBDBDB"
                />
              </svg>
            </span>
          </button>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            slidesPerGroup={1}
            className="relative"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1140: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                navigation: {
                  nextEl: ".swiper-button-nxt",
                  prevEl: ".swiper-button-prv",
                },
              },
            }}
            navigation={false}
          >
            {reveiws.map((review, index) => (
              <SwiperSlide className="relative !h-auto">
                <ReviewCard key={index} {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`hidden lg:block swiper-button-nxt ${
              activeSlide === 13 ? "opacity-20" : ""
            }`}
          >
            <span className="h-[20px] w-[20px] flex justify-center items-center">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.585204 2.83003L9.75517 12L0.585205 21.17L3.41514 24L15.4151 12L3.41514 -2.03105e-06L0.585204 2.83003Z"
                  fill="#DBDBDB"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="lg:hidden flex justify-center items-center mt-[15px] font-bold text-sm opacity-90 text-silver">
          <span className="text-primary">{activeSlide}</span> /
          <span className="swiper-pagination-total">{reveiws.length}</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-end lg:gap-[12px] font-bold text-bg mt-[15px]">
          <Link
            to="./reveiws"
            className="h-[40px] md:w-fit w-full rounded-[5px] mr-2 bg-white border border-black flex items-center justify-center text-black hover:border-opacity-10 md:my-0 my-3"
          >
            <div className='text-[15px] font-bold px-5'>{seeAll.toUpperCase() ?? 'SEE ALL Reviews'}</div>
          </Link>
        </div>
      </div>
    </section>
  );
};
