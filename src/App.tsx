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
    error: contentError,
    loading: mainDataLoading
   } = useSelector(
    (state) => state.mainData
  );

  const {
    translationContent: translationDataAll,
    error: translationError,
    loading: translationContentLoading
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

  if (mainDataLoading || translationContentLoading) {
    return <div className="loader">Loading...</div>
  }

  const contentData = contentDataAll ? contentDataAll[selectedLanguage] || contentDataAll.en : null;
  
  const translationData = translationDataAll ? translationDataAll[selectedLanguage] || translationDataAll.en : null; 
  
  console.log(selectedLanguage)
  console.log(translationDataAll)
  console.log(contentData)

  if (!contentData || !translationData) {
    return <p>Контент не найден</p>;
}

  return (
    <>
      <Header
        buyNow={translationData.BUY_NOW}
      />
      <Hero 
        title={contentData.title}
        subtitle={contentData.subtitle}
        headerBanner={contentData.header_banner}
        search={translationData.SEARCH}
        searchNotFound={translationData.SEARCH_not_found}
        searchEmpty={translationData.SEARCH_empty}
        headerPhotoByLeabel={translationData.HEADER_photo_by_label}
        letsGo={translationData.HOME_lets_go_button}
        mainImage={mainImage}
      />
      <TopAttractions 
        title={translationData.HOME_top_attractions_title}
        includedWithCoolpass={`${translationData.ATTRACTIONS_label_included} ${translationData.ATTRACTIONS_label_with_pass}`} 
      />
      <Experience 
        title={translationData.HOME_benefits_title}
        benefitsData={contentData.benefits}
      />
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
