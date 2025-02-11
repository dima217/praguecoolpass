/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Typography } from '../components/ui/typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { increaseCardCount, decreaseCardCount } from '../redux/Slices/CardsSlice';
import API_ENDPOINTS from '../api/apiconfig'
import { transformCardsData } from '../additionalFunctions/customFunctions';
import { PassCard } from '../components/pass-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BuyProps {
  title: string;
  day: string;
  namePass: string;
  adult: string;
  studentChild: string;
  price: string;
  yourPrice: string;
  calculatorCompleteBookingBin: string;
  buyPragueCardCoolPass: string;
}

export const Buy: React.FC<BuyProps> = ({
  title,
  day,
  namePass,
  adult,
  studentChild,
  price,
  yourPrice,
  calculatorCompleteBookingBin,
  buyPragueCardCoolPass
}) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards);
  const [cardsData, setCardsData] = useState<Transformer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_ENDPOINTS.GET_Cards);
        if (!response.ok) throw new Error('Failed to fetch cards');
        const data = await response.json();
        setCardsData(transformCardsData(data));
        setError(false);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: any) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  if (error) return <p>Error loading cards</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container flex flex-wrap gap-1 w-full">
      <div className="flex relative flex-col w-full">
        <div className="relative w-full">
          <Typography variant="title">{title}</Typography>
          <div className="flex flex-col items-center w-full relative">
            <button
              className="!hidden xl:!block swiper-button-prev absolute md:-scale-x-100 md:transform"
              aria-label="Previous"
              style={{
                left: '0',
                zIndex: 10,
              }}
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
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="w-full"
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (_, className) => {
                  return `<span class="${className} custom-bullet !bg-orange-400"></span>`;
                },
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2.05,
                  slidesPerGroup: 2,
                },
                1140: {
                  slidesPerView: 3.05,
                  slidesPerGroup: 3,
                },
              }}
              slidesPerGroup={1}
              onSlideChange={handleSlideChange}
            >
              {cardsData.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <PassCard 
                    numberOfDays={card.numberOfDays}
                    priceAdult={card.priceAdult}
                    priceStudent={card.priceStudCh}
                    adultLabel={adult}
                    studentLabel={studentChild}
                    priceLabel={price}
                    totalPriceLabel={yourPrice}
                    buttonLabel={calculatorCompleteBookingBin}
                    buyPassText={buyPragueCardCoolPass}
                    dayText={day}
                    namePass={namePass}
                    adultCount={cards[index * 2] || 0}
                    studentCount={cards[index * 2 + 1] || 0}
                    onAdultIncrement={() => dispatch(increaseCardCount(index * 2))}
                    onAdultDecrement={() => dispatch(decreaseCardCount(index * 2))}
                    onStudentIncrement={() => dispatch(increaseCardCount(index * 2 + 1))}
                    onStudentDecrement={() => dispatch(decreaseCardCount(index * 2 + 1))}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="!hidden xl:!block swiper-button-next"
              aria-label="Next"
              style={{
                right: '0px',
                zIndex: 10,
              }}
            >
              <span
                className="w-6 h-6 pr-5 ml-[5px] bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url(/assets/icons/right-arrow.svg)",
                }}
              />
            </button>

            <div 
              className="custom-pagination mt-[15px] flex justify-center items-center"
              style={{
                '--swiper-pagination-bullet-size': '12px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};