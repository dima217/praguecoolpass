// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { StepCard } from "../components/step-card";
import { Typography } from "../components/ui/typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const HowToUse = ({title, HowToUseContent, HowToUseText}) => {

  const [howToUseText, setHowToUseText] = useState([]);
  const [howToUseContent, sethowToUseContent] = useState([]);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {

    const formatedText = HowToUseText.descriptions;
    const formatedContent = HowToUseContent.HowToUse.app_images;
    
    setHowToUseText(formatedText);
    sethowToUseContent(formatedContent);

  }, [selectedLanguage])

  console.log(howToUseText);
  console.log(howToUseContent);
  
  return (
    <div className="container flex flex-col">
      <Typography variant="title">
        {title}
      </Typography>
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.05}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: ".custom-pagination2",
            renderBullet: (_, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1140: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              navigation: {
                nextEl: ".swiper-button-nxt",
                prevEl: ".swiper-button-prv",
              },
            },
          }}
        >
          {howToUseText.map((step, index) => (
            <SwiperSlide className="!h-auto">
              <StepCard 
               descriptions={step}
               index={index}
               image={howToUseContent[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination2 flex justify-center items-center" />
      </div>
    </div>
  );
};
