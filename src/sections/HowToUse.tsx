// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { StepCard } from "../components/step-card";
import { Typography } from "../components/ui/typography";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/pagination";

export const HowToUse = ({ title, HowToUseContent, HowToUseText }) => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const selectedLanguage = useSelector((state) => state.language);
  
  // Определение размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1140);
    };

    handleResize(); // Проверка при монтировании
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Инициализация Swiper
  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  };

  // Форматирование данных
  const howToUseText = HowToUseText?.descriptions || [];
  const howToUseContent = HowToUseContent?.HowToUse?.app_images || [];

  return (
    <div className="container flex flex-col mb-12">
      <Typography variant="title" className="mb-6">
        {title}
      </Typography>
      
      <div className="w-full relative">
        <Swiper
          key={isMobile ? "mobile" : "desktop"}
          onSwiper={handleSwiperInit}
          modules={[Pagination]}
          slidesPerView={1.05}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: ".how-to-use-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} !w-3 !h-3 !bg-gray-300 !mx-1.5 !rounded-full"></span>`;
            },
            enabled: isMobile
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              pagination: {
                enabled: false
              }
            }
          }}
        >
          {howToUseText.map((step, index) => (
            <SwiperSlide key={`${selectedLanguage}-${index}`} className="!h-auto">
              <StepCard 
                descriptions={step}
                index={index}
                image={howToUseContent[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Пагинация только для мобильных */}
        {isMobile && (
          <div className="how-to-use-pagination flex justify-center mt-6" />
        )}
      </div>
    </div>
  );
};