// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { TopCard } from "../components/top-card";
import { Typography } from "../components/ui/typography";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import API_ENDPOINTS from "../api/apiconfig";
import { addLike, removeLike } from "../redux/Slices/LikedAttractionsSlice";

import rightArrow from "../../dist/assets/icons/right-arrow.svg"
import leftArrow from "../../dist/assets/icons/left-arrow.svg"

import 'swiper/css';
import 'swiper/css/navigation';

export const TopAttractions = ({ title, includedWithCoolpass }) => {
  const dispatch = useDispatch();
  const likedAttractions = useSelector((state) => state.likedAttractions.likedAttractions);
  const selectedLanguage = useSelector((state) => state.language);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.GET_TopAttractions);
        if (!response.ok) throw new Error('Failed to fetch attractions');
        const data = await response.json();
        
        const formattedData = data
          .filter((item) => item.content && (item.content[selectedLanguage] ?? item.content.en))
          .map((item) => ({
            id: item._id,
            title: item.content[selectedLanguage]?.title || item.content.en.title,
            subtitle: item.content[selectedLanguage]?.subtitle || item.content.en.subtitle,
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

  const handleFavoriteToggle = (item) => {
    if (likedAttractions.some((fav) => fav.id === item.id)) {
      dispatch(removeLike(item.id));
    } else {
      dispatch(addLike(item));
    }
  };

  if (!attractions.length) return <div>Loading...</div>;

  return (
    <section className="relative">
      <div className="container">
        <Typography variant="title">{title}</Typography>
        
        {/* Wrapper for arrow positioning*/}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.1}
            spaceBetween={20}
            breakpoints={{
              768: { 
                slidesPerView: 2, 
                slidesPerGroup: 2,
                navigation: false
              },
              1024: { 
                slidesPerView: 3, 
                slidesPerGroup: 3,
                navigation: false
              },
              1140: {
                slidesPerView: 4, 
                slidesPerGroup: 4,
                navigation: {
                  nextEl: ".swiper-nxt",
                  prevEl: ".swiper-prv",
                },
              },
            }}
          >
            {attractions.map((item) => (
              <SwiperSlide key={item.id}>
                <TopCard
                  item={item}
                  onLike={handleFavoriteToggle}
                  isLiked={likedAttractions.some((fav) => fav.id === item.id)}
                  includedWithCoolpass={includedWithCoolpass}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="swiper-prv absolute top-1/2 -left-10 z-20 cursor-pointer transform -translate-y-1/2">
            <img 
              src={leftArrow}
              alt="Previous" 
              className="w-8 h-8 hover:opacity-80"
            />
          </div>
          <div className="swiper-nxt absolute top-1/2 -right-10 z-20 cursor-pointer transform -translate-y-1/2">
            <img 
              src={rightArrow} 
              alt="Next" 
              className="w-8 h-8 hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};