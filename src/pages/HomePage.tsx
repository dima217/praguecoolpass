// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// HomePage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_ENDPOINTS from "../api/apiconfig";
import { fetchHomePageMainContent } from "../redux/HomePageMainContent";

// Sections
import { Header } from "../components/header";
import { Buy } from "../sections/buy";
import { Footer } from "../sections/footer";
import { Hero } from "../sections/hero";
import { HowToUse } from "../sections/HowToUse";
import { LatestNews } from "../sections/latest-news";
import { Review } from "../sections/review";
import { TopAttractions } from "../sections/top";
import { Experience } from "../sections/experience";
import { AllInclusive } from "../sections/all-inclusive";
import { CoolPassInfo } from "../sections/CoolPassInfo";

export const HomePage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language);

  const { mainData: contentDataAll, loading: mainDataLoading } = useSelector(
    (state) => state.mainData
  );

  const { translationContent: translationDataAll, loading: translationContentLoading } = useSelector(
    (state) => state.translationContent
  );

  const { mainImage, offers, howToUse } = useSelector((state) => state.assetsData);

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
  }, [dispatch, selectedLanguage, contentDataAll]);

  if (mainDataLoading || translationContentLoading) {
    return <div className="loader">Loading...</div>;
  }

  const contentData = contentDataAll?.[selectedLanguage] || contentDataAll?.en;
  const translationData = translationDataAll?.[selectedLanguage] || translationDataAll?.en;

  if (!contentData || !translationData) {
    return <p>Контент не найден</p>;
  }

  return (
    <>
      <Header buyNow={translationData.BUY_NOW} />
      <Hero 
        title={contentData.title}
        subtitle={contentData.subtitle}
        headerBanner={contentData.header_banner}
        search={translationData.SEARCH}
        searchNotFound={translationData.SEARCH_not_found}
        searchEmpty={translationData.SEARCH_empty}
        headerPhotoByLeabel={translationData.HEADER_photo_by_label}
        letsGo={translationData.HOME_lets_go_button}
        mainImage={mainImage.mainImage}
      />
      <TopAttractions 
        title={translationData.HOME_top_attractions_title}
        includedWithCoolpass={`${translationData.ATTRACTIONS_label_included} ${translationData.ATTRACTIONS_label_with_pass}`} 
      />
      <Experience 
        title={translationData.HOME_benefits_title}
        benefitsData={contentData.benefits}
      />
      <AllInclusive 
        title={translationData.HOME_offers_title}
        offersContent={offers}
        offersText={contentData.offers}
      />
      <HowToUse 
        title={translationData.HOME_how_to_use_title}
        HowToUseContent={howToUse}
        HowToUseText={contentData.how_to_use} 
      />
      <LatestNews 
        title={translationData.HOME_news_title}
        readMore={translationData.READ_MORE}
        seeAllNews={translationData.SEE_ALL_NEWS}
      />
      <Buy 
        title={translationData.BUY_COOLPASS_PRAGUE_CARD}
        day={translationData.ESHOP_product_name_DAY}
        namePass={translationData.ESHOP_product_name_PASS}
        adult={translationData.CALCULATOR_ADULT}
        studentChild={translationData.STUDENT_CHILD}
        price={translationData.PRICE}
        yourPrice={translationData.YOUR_PRICE}
        calculatorCompleteBookingBin={translationData.CALCULATOR_COMPLETE_BOOKING_BTN}
        buyPragueCardCoolPass={translationData.BUY_PRAGUE_CARD_COOL_PASS}
      />
      <CoolPassInfo
        daysHoursInfo={translationData.CALCULATOR_card_validity}
        childInfo={translationData.CALCULATOR_child_card_validity_tip}
        studInfo={translationData.CALCULATOR_student_id_info}
        adultAge={translationData.APP_ADULT_AGE}
        studAge={translationData.STUDENT_AGE}
        childAge={translationData.CHILD_AGE} 
      />
      <Review 
        title={translationData.REVIEWS_what_do_customers_say}
        seeAll={translationData.REVIEWS_see_all}
        popupTranslations={{ ...translationData }} 
      />
      <Footer footerTranslation={{ ...translationData }} />
    </>
  );
};