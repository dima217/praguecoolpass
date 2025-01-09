import React, { useState, useEffect } from 'react';
import { fetchImages } from '../../service/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '35px', // Позиция точек снизу
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          zIndex: 40
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: i === settings.currentSlide ? '#FFA500' : '#808080',
          margin: '0 4px',
          cursor: 'pointer',
        }}
      />
    ),
  };

  return (
    <div className="relative h-[550px] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[550px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;