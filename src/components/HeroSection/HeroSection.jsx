import React from 'react';
import Carousel from './Carousel';
import SearchBar from '../SearchBar/SearchBar';
import FooterBanner from '../FooterBanner/FooterBanner';

const HeroSection = () => {
  return (
    <div className="relative h-[600px]">
      {/* Карусель (z-0) */}
      <div className="absolute inset-0 z-30">
        <Carousel />
      </div>

      {/* Затемнение (z-10) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Контент (z-20) */}
      <div className="inline-block mx-auto relative z-30 text-white py-20 ml-[220px]">
        <h1 className="text-4xl font-bold">PRAGUE COOLPASS</h1>
        <p className="mt-4 text-lg">Choice for every taste</p>
        <p className="mt-2">
          All-inclusive Pass with the largest offer of attractions and activities in Prague
        </p>
        <SearchBar />
      </div>

      {/* FooterBanner (z-30) */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <FooterBanner />
      </div>
    </div>
  );
};

export default HeroSection;