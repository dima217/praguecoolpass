// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './Slices/LanguageSlice';
import favoritesSlice from './Slices/LikedAttractionsSlice';
import HomePageContentSlice from './Slices/HomePageMainContentSlice/HomePageSliceData';
import TranslateSlice from './Slices/AllTranslationContent/AllTranslationContentSlice';
import AssetsSlice from './Slices/HomePageMainContentSlice/HomePageSliceAssets';
import CardsSlice, { persistState } from './Slices/CardsSlice'

export const store = configureStore({
  reducer: {
    translationContent: TranslateSlice,
    assetsData: AssetsSlice,
    mainData: HomePageContentSlice,
    cards: CardsSlice,
    language: languageReducer,
    likedAttractions: favoritesSlice
  }, 
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(store => next => action => {
      const result = next(action);
      persistState(store.getState().cards);
      return result;
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;