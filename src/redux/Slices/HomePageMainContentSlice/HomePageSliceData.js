import { createSlice } from "@reduxjs/toolkit";

const HomePageSliceData = createSlice({
    name: 'mainData',
        initialState:{
            mainData: null,
            error: null
        },
        reducers: {
        setMainData: (state, action) => {
            state.mainData = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setMainData, setError } = HomePageSliceData.actions;
export default HomePageSliceData.reducer;