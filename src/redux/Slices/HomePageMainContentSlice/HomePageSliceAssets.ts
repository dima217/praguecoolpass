import { createSlice } from "@reduxjs/toolkit";

const HomePageSliceAssers = createSlice({
  name: 'assetsData',
  initialState: {
    mainImage: null,
    benefits: null,
    offers: null,
    howToUse: null,
    error: null,
  },
  reducers: {
    setAssetsData: (state, action) => {
      state.mainImage = action.payload;
      state.benefits = action.payload;
      state.offers = action.payload;
      state.howToUse = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAssetsData, setError } = HomePageSliceAssers.actions;
export default HomePageSliceAssers.reducer;