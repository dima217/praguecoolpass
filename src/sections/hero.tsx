import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Search } from "../components/search";

const slides = [
  "/assets/images/4c28b3e9-a6c7-44e4-9a63-cc1098cd0253.jpg",
  "/assets/images/e5d6b5c3-a4a5-4ee4-9190-fb9afe1eedcb.jpg",
  "/assets/images/11e5e13f-1ce2-468a-9b9a-eef93ce6ff5c.jpg",
  "/assets/images/0a537d7c-d8d7-401b-9c00-a5844d35ea83.jpg",
  "/assets/images/0d4b1366-3f24-424c-bc85-9fb5b8649f4e.jpg",
];

export const Hero = () => {
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
          {slides.map((slide) => (
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
            <h1 className="font-arial font-bold text-[26px] md:text-[48px] mt-[10px] mr-[8px] mb-[6px]">
              PRAGUE COOLPASS
              <br />
              CHOICE FOR EVERY TASTE
            </h1>
            <h3 className="text-base md:text-[26px] font-arial font-bold">
              All-inclusive Pass with the largest offer of attractions and
              activities in Prague
            </h3>
          </div>
          <div className="hidden md:block mt-[27px]">
            <Search />
          </div>
        </div>
      </div>
      <div className="bg-primary min-h-[38px] md:h-[50px] h-auto w-full text-white flex justify-center items-center">
        <div className="container">
          <p className="w-full text-[9px] -mt-[32px] absolute text-right z-10 right-[8px]  opacity-90">
            <div className="container">Photo by Czech Tourism</div>
          </p>
          <p className="my-[8px] text-sm font-bold text-normal">
            Since 1992 - Entry to 80+ attractions - The only Pass with National
            Museum and National Gallery - Mobile Pass or Prague Card - App in 17
            languages - Best value
          </p>
        </div>
      </div>
      <div className="md:hidden">
        <Search />
      </div>
    </section>
  );
};
