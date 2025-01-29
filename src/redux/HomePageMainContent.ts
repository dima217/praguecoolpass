// @ts-nocheck
import { setAssetsData, setError as setAssetsDataError, setLoading as setAssetsLoading } from "./Slices/HomePageMainContentSlice/HomePageSliceAssets";
import { setMainData, setError as setMainDataError, setLoading as setContentLoading } from "./Slices/HomePageMainContentSlice/HomePageSliceData";
import { setTranslationContent, setError as setTranslationContentError, setLoading as setTranslationLoading } from "./Slices/AllTranslationContent/AllTranslationContentSlice";
import axios from "axios";

export const fetchHomePageMainContent = (
    selectedLanguage, mainDataUrl, translationDataUrl
) => async (dispatch) => {
    dispatch(setContentLoading());
    dispatch(setTranslationLoading());
    dispatch(setAssetsLoading()); 
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

        const { mainImage, benefits, offers, how_to_use } = mainContentResponse.data;
        dispatch(
            setAssetsData({
                mainImage,
                benefits,
                offers,
                HowToUse: how_to_use,
            })
        );
    } catch (error) {
        if (error.type === 'mainData') {
            dispatch(setMainDataError('Error loading data content'));
        } else if (error.type === 'translation') {
            dispatch(setTranslationContentError('Error loading translation data'));
        } else {
            dispatch(setAssetsDataError('Error loading asset data'));
        }

        console.error('Error:', error.error || error);
    }
};