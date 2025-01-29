// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen: false
};

const modaleSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload; 
        }
    }
});

export const { setIsModalOpen } = modaleSlice.actions;

export const selectIsModalOpen = (state) => state.modal.isModalOpen;

export default modaleSlice.reducer;
