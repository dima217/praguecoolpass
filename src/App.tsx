// @ts-nocheck
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Header } from "./components/header";
// Sections
import { Buy } from "./sections/buy";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { HowToUse } from "./sections/HowToUse";
import { LatestNews } from "./sections/latest-news";
import { Review } from "./sections/review";
import { TopAttractions } from "./sections/top";
import { Experience } from "./sections/experience";
import { AllInclusive } from "./sections/all-inclusive";

import { useDispatch, useSelector } from "react-redux";
import API_ENDPOINTS from "./api/apiconfig";
import { useEffect } from "react";
import HomePageMainContent, { fetchHomePageMainContent } from "./redux/HomePageMainContent"

function App() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language);

  const {
    mainData: contentDataAll,
    error: contentError
   } = useSelector(
    (state) => state.mainData
  );

  const {
    translationContent: translationDataAll,
    error: translationError
  } = useSelector(
    (state) => state.translationContent
  );

  const {
    mainImage, offers, howToUse, error: assetsError
  } = useSelector((state) => state.assetsData);
 
  useEffect(() => {
      if (!contentDataAll) {
        dispatch(
          fetchHomePageMainContent(
            selectedLanguage, 
            API_ENDPOINTS.GET_MainPageCohtent,
            API_ENDPOINTS.GET_Translation
          )
        )
      }
  }, [dispatch, selectedLanguage])

  const contentData = contentDataAll ? contentDataAll[selectedLanguage] || contentDataAll.en : null;
  
  const translationData = translationDataAll ? translationDataAll[selectedLanguage] || translationDataAll.en : null; 
  
  console.log(translationDataAll)
  console.log(contentData)

  return (
    <>
      <Header/>
      <Hero />
      <TopAttractions />
      <Experience />
      <AllInclusive />
      <HowToUse />
      <LatestNews />
      <Buy />
      <Review />
      <Footer />
    </>
  );
}

export default App;
