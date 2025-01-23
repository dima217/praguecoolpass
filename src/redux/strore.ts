import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './Slices/LanguageSlice';
import favoritesSlice from './Slices/LikedAttractionsSlice';
import HomePageContentSlice from './Slices/HomePageMainContentSlice/HomePageSliceData';
import TranslateSlice from './Slices/AllTranslationContent/AllTranslationContentSlice';
import AssetsSlice from './Slices/HomePageMainContentSlice/HomePageSliceAssets';
import CardsSlice from './Slices/CardsSlice'

const store = configureStore({
  reducer: {
    translationContent: TranslateSlice,
    assetsData: AssetsSlice,
    mainData: HomePageContentSlice,
    cards: CardsSlice,
    language: languageReducer,
    likedAttractions: favoritesSlice
  }, 
});

export default store;