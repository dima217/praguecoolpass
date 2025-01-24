import { createSlice } from "@reduxjs/toolkit";

const HomePageSliceAssers = createSlice({
  name: 'assetsData',
  initialState: {
    mainImage: null,
    benefits: null,
    offers: null,
    howToUse: null,
    error: null,
    loading: false
  },
  reducers: {
    setAssetsData: (state, action) => {
      state.mainImage = action.payload;
      state.benefits = action.payload;
      state.offers = action.payload;
      state.howToUse = action.payload;
      state.error = null;
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
  }
  },
});

export const { setAssetsData, setError, setLoading } = HomePageSliceAssers.actions;
export default HomePageSliceAssers.reducer;