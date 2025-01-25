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

          <div className="mt-[32px] ml-[12px] w-full">
            <ul className="w-full list-disc list-outside list-image-[url(https://praguecoolpass.com/img/list-bullet.bfaee876.svg)]">
              <li className="pl-[10px] mb-[14px] text-xs">
                Prague CoolPass/Card is valid for consecutive days, not hours.
              </li>
              <li className="pl-[10px] mb-[14px] text-xs">
                Child/Student Pass valid for children 6-16 years and students up to 26 years.
              </li>
              <li className="pl-[10px] text-xs">
                Any student ID accepted. Not required at purchase but may be requested at attractions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};