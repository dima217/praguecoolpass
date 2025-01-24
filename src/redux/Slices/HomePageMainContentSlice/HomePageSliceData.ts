import { createSlice } from "@reduxjs/toolkit";

const HomePageSliceData = createSlice({
    name: 'mainData',
        initialState:{
            mainData: null,
            error: null,
            loading: false
        },
        reducers: {
        setMainData: (state, action) => {
            state.mainData = action.payload;
            state.error = null;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },
        setLoading: (state) => {
            state.loading = true;
        }
    }
});

export const { setMainData, setError, setLoading } = HomePageSliceData.actions;
export default HomePageSliceData.reducer;