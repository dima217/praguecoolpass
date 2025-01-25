// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Search } from "../components/search";
import { useMediaQuery } from 'react-responsive';
import { API_PICTURES_URL } from "../api/apiconfig";

export const Hero = ({
  title, subtitle, headerBanner, search, searchNotFound, searchEmpty, headerPhotoByLeabel, letsGo,
  mainImage
}) => {

  const isMobile = !useMediaQuery({
    query: '(min-device-width: 768px)'
  });

  const imagesDesc = mainImage?.web_image?.map(
    (image) => `${API_PICTURES_URL}/${image}`
  ) || [];

  const imagesMobile = mainImage?.app_image?.map(
    (image) => `${API_PICTURES_URL}/small_${image}`
  ) || [];

  const images = isMobile ? imagesMobile : imagesDesc;

  return (
    <section className="flex flex-col justify-center">
      <div className="block h-[244px] min-h-[244px] md:h-[550px] md:min-h-[550px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
            renderBullet: (_, className) => {
              return `<span class="${className} hero-bullet"></span>`;
            },
          }}
          className="relative"
        >
          {images.map((slide) => (
            <SwiperSlide>
              <div
                className="bg-no-repeat bg-cover bg-center h-[244px] md:h-[550px]"
                style={{
                  backgroundImage: `url(${slide})`,
                }}
              />
            </SwiperSlide>
          ))}
          <div className="hero-pagination absolute w-full bottom-[15px] flex justify-center items-center z-10" />
        </Swiper>
      </div>
      <div className="relative flex justify-center md:items-center">
        <div className="container h-[244px] md:h-fit md:flex-col md:items-center w-full max-md:-top-[180px] md:mt-[53px] bottom-[65px] absolute z-10">
          <div className="min-h-[100px] h-auto w-full text-white md:pt-[9px] md:pb-[35px]">
            <h1 className="font-arial font-bold text-[26px] md:text-[48px] mt-[10px] mr-[8px] mb-[6px]" dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
            <h3 className="text-base md:text-[26px] font-arial font-bold">
              {subtitle}
            </h3>
          </div>
          <div className="hidden md:block mt-[27px]">
            <Search 
             search={search}
             searchNotFound={searchNotFound}
             searchEmpty={searchEmpty}
             letsGo={letsGo.toUpperCase()}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary min-h-[38px] md:h-[50px] h-auto w-full text-white flex justify-center items-center">
        <div className="container">
          <p className="w-full text-[9px] -mt-[32px] absolute text-right z-10 right-[8px]  opacity-90">
            <div className="container">Photo by Czech Tourism</div>
          </p>
          <p className="my-[8px] text-sm font-bold text-normal">
            {headerBanner}
          </p>
        </div>
      </div>
      <div className="md:hidden">
        <Search 
         search={search}
         searchNotFound={searchNotFound}
         searchEmpty={searchEmpty}
         letsGo={letsGo.toUpperCase()}
        />
      </div>
    </section>
  );
};
