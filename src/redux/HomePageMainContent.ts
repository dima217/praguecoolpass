// @ts-nocheck
import { setAssetsData, setError as setAssetsDataError } from "./Slices/HomePageMainContentSlice/HomePageSliceAssets";
import { setMainData, setError as setMainDataError } from "./Slices/HomePageMainContentSlice/HomePageSliceData";
import { setTranslationContent, setError as setTranslationContentError } from "./Slices/AllTranslationContent/AllTranslationContentSlice";
import axios from "axios";

export const fetchHomePageMainContent = (selectedLanguage, mainDataUrl, translationDataUrl) => async (dispatch) => {
    try {
        const [mainContentResponse, translationContentResponse] = await Promise.all([
            axios.get(mainDataUrl).catch((error) => {
                throw { type: 'mainData', error };
            }),
            axios.get(translationDataUrl).catch((error) => {
                throw { type: 'translation', error }; 
            }),
        ]);

        dispatch(setMainData(mainContentResponse.data.content));

        dispatch(setTranslationContent(translationContentResponse.data));

        const { mainImage, benefits, offers, howToUse } = mainContentResponse.data;
        dispatch(
            setAssetsData({
                mainImage,
                benefits,
                offers,
                howToUse,
            })
        );
    } catch (error) {
        if (error.type === 'mainData') {
            dispatch(setMainDataError('Ошибка загрузки данных контента'));
        } else if (error.type === 'translation') {
            dispatch(setTranslationContentError('Ошибка загрузки данных перевода'));
        } else {
            dispatch(setAssetsDataError('Ошибка загрузки данных ассетов'));
        }

        console.error('Произошла ошибка:', error.error || error);
    }
};