import { createSlice } from "@reduxjs/toolkit";
import { setError } from "../HomePageMainContentSlice/HomePageSliceAssets";

const AllTranslationContentSlice = createSlice({
    name: 'translationContent',
    initialState: {
        translationContent: null,
        error: null
    },
    reducers: {
        setTranslationContent: (state, action) => {
            state.translationContent = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setTranslationContent, setError } = AllTranslationContentSlice.actions;
export default AllTranslationContentSlice.reducer;
