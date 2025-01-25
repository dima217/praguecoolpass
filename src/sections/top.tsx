// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { TopCard } from "../components/top-card";
import { Typography } from "../components/ui/typography";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API_ENDPOINTS from "../api/apiconfig";

export const TopAttractions = ({ title, includedWithCoolpass }) => {

  const selectedLanguage = useSelector((state) => state.language);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.GET_TopAttractions);
            if (!response.ok) {
                throw new Error('Failed to fetch attractions');
            }
            const data = await response.json();
            const formattedData = data
                .filter((item) => item.content && (item.content[selectedLanguage]
                    ?? item.content.en))
                .map((item) => ({
                    id: item._id,
                    title: item.content[selectedLanguage]
                        ? item.content[selectedLanguage].title : item.content.en.title,
                    subtitle: item.content[selectedLanguage]
                        ? item.content[selectedLanguage].subtitle : item.content.en.subtitle,
                    path: `/attractions/${item.slug}`,
                    image: item.images[0]
                }));

            setAttractions(formattedData);
        } catch (err) {
            console.error(err.message);
        }
   
    };

    fetchAttractions();
  }, [selectedLanguage]);

  if (!attractions) {
    return <div>Loading...</div>
  }

  return (
    <section className="relative">
      <div className="container">
        <Typography variant="title">
          {title}
        </Typography>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={20}
          className="relative"
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1140: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {attractions.map(({ title, subtitle, path, image }) => (
            <SwiperSlide>
              <TopCard
                link={path}
                title={title}
                image={image}
                description={subtitle}
                includedWithCoolpass={includedWithCoolpass}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
