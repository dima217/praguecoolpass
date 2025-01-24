import { createSlice } from "@reduxjs/toolkit";

const AllTranslationContentSlice = createSlice({
    name: 'translationContent',
    initialState: {
        translationContent: null,
        error: null,
        loading: false
    },
    reducers: {
        setTranslationContent: (state, action) => {
            state.translationContent = action.payload;
            state.error = null;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        }
    }
})

export const { setTranslationContent, setError, setLoading } = AllTranslationContentSlice.actions;
export default AllTranslationContentSlice.reducer;
