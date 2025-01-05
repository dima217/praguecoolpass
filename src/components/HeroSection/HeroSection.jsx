import React from 'react';
import Carousel from './Carousel';
import SearchBar from '../SearchBar/SearchBar';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }} />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="container mx-auto relative z-10 text-center text-white py-20">
        <h1 className="text-4xl font-bold">PRAGUE COOLPASS</h1>
        <p className="mt-4 text-lg">Choice for every taste</p>
        <p className="mt-2">All-inclusive Pass with the largest offer of attractions and activities in Prague</p>

        <SearchBar />
        <Carousel />
      </div>
    </div>
  );
};

export default HeroSection;
