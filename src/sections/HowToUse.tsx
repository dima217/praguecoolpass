// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { StepCard } from "../components/step-card";
import { Typography } from "../components/ui/typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const steps = [
  {
    number: "1",
    description:
      "Download free Prague CoolPass App to your smartphone and buy your CoolPass directly from the App or on our website.",
    content: (
      <div
        className="bg-cover bg-no-repeat bg-center h-[250px] w-[269px]"
        style={{
          backgroundImage:
            "url(/assets/images/2d8de848-336e-4d62-9520-e53b45a1f170.jpg)",
        }}
      />
    ),
  },
  {
    number: "2",
    description:
      "If you buy CoolPass in the App, you only need to register your name there. If buying on our website, you can easily download it to your phone by entering the code from your confirmation mail.",
    content: (
      <div
        className="bg-cover bg-no-repeat bg-center h-[250px] w-[269px]"
        style={{
          backgroundImage:
            "url(/assets/images/c33a3103-55bf-4fe8-82d2-62b15a0c9d61.jpg)",
        }}
      />
    ),
  },
  {
    number: "3",
    description:
      "Once your CoolPass is registered in the App, it displays a QR-code which you can use for entries, just show it at each attraction. The validity of your Pass is activated by the first entry.",
    content: (
      <div
        className="bg-cover bg-no-repeat bg-center h-[250px] w-[269px]"
        style={{
          backgroundImage:
            "url(/assets/images/f1d60286-2511-42d2-bf86-455a0efa2306.jpg)",
        }}
      />
    ),
  },
  {
    number: "4",
    description:
      "Instead of mobile CoolPass, you can order physical Prague Card and collect it upon arrival. Present your voucher in a printed or digital way at one of our centrally located collection points.",
    content: (
      <div
        className="bg-cover bg-no-repeat bg-center h-[250px] w-[269px]"
        style={{
          backgroundImage:
            "url(/assets/images/84696934-6835-48da-9a85-0e5475b9f199.jpg)",
        }}
      />
    ),
  },
];
export const HowToUse = ({title, HowToUseContent, HowToUseText}) => {

  const [howToUseText, setHowToUseText] = useState([]);
  const [howToUseContent, sethowToUseContent] = useState([]);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {

    const formatedText = HowToUseText.descriptions;
    const formatedContent = HowToUseContent.how_to_use.app_images;
    
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
