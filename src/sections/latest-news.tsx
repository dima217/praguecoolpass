// @ts-nocheck
import { NewsCard } from "../components/news-card";
import { Button } from "../components/ui/button";
import { Typography } from "../components/ui/typography";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import API_ENDPOINTS, {API_PICTURES_URL} from "../api/apiconfig";

import {
  formatDateNews, CutToFirstBRTag, HighlightATag, toTitleCase
} from '../additionalFunctions/additionalFunctions';

export const LatestNews = ({title, readMore, seeAllNews}) => {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAttractions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_ENDPOINTS.GET_News);
            if (!response.ok) {
                throw new Error('Failed to fetch attractions');
            }
            const data = await response.json();
            const homePageNews = data.filter((item) => item.displayOnHomePage);

            setNews(homePageNews);
            setError(false);
        } catch (err) {
            setError(true);
            console.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchAttractions();
  }, []);

  console.log(news);

  return (
    isLoading ? ( <li className="px-4 py-2 text-center">Loading...</li>) :
    <div className="container max-lg:p-0">
      <Typography variant="title">{title}</Typography>
      <div className="gap flex flex-col gap-y-[30px]">
       {news.map((item, index) => (
        <NewsCard
          image={item.images[0]}
          title={item.content.en.title}
          date={formatDateNews(item.publishedOnHomePage)}
          content={CutToFirstBRTag(item.content.en.text)}
          side={index % 2 === 0 ? "start" : "end"} 
        />
  ) ) }
      </div>
      <div className="container flex justify-end mt-[15px]">
        <Button className="bg-primary text-white self-end px-[20px] h-[48px] max-lg:w-full min-w-[228px] font-bold text-base">
          {seeAllNews}
        </Button>
      </div>
    </div>
  );
};
