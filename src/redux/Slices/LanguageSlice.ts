import { createSlice } from "@reduxjs/toolkit";

const getCurrentLanguage = () => {
    return localStorage.getItem('language') || 'EN';
}

const languageSlice = createSlice({
    name: 'language',
    initialState: getCurrentLanguage(),
    reducers: {
        setLanguage: (state, action) => {
            const updatedLanguage = action.payload;
            localStorage.setItem('language', updatedLanguage);
            return updatedLanguage;
        }
    }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;